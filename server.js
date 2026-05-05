const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8765;
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    
    // Standardseite
    if (pathname === '/') {
        pathname = '/index.html';
    }
    
    const filepath = path.join(__dirname, pathname);
    
    // Sicherheit: Verhindere Directory Traversal Attacks
    const realpath = path.resolve(filepath);
    const rootpath = path.resolve(__dirname);
    
    if (!realpath.startsWith(rootpath)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Forbidden');
        return;
    }
    
    // Versuche die Datei zu lesen
    fs.readFile(filepath, (err, data) => {
        if (err) {
            // Datei nicht gefunden
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>404 - Nicht gefunden</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #333; }
        p { color: #666; }
        a { color: #FFD700; text-decoration: none; }
    </style>
</head>
<body>
    <h1>404 - Seite nicht gefunden</h1>
    <p>Die angeforderte Datei existiert nicht: ${pathname}</p>
    <p><a href="/">← Zurück zur Startseite</a></p>
</body>
</html>
            `, 'utf-8');
            return;
        }
        
        // Bestimme MIME-Type
        const ext = path.extname(filepath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        
        // Sende die Datei
        res.writeHead(200, {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=3600'
        });
        res.end(data);
    });
});

server.listen(PORT, 'localhost', () => {
    console.log('\n' + '='.repeat(60));
    console.log('🚀 FLEXCITY Web-Server gestartet!');
    console.log('='.repeat(60));
    console.log(`\n📍 Server läuft auf: http://localhost:${PORT}`);
    console.log(`\n🌐 Öffne im Browser: http://localhost:${PORT}`);
    console.log('\n✅ Die Website ist jetzt live verfügbar!');
    console.log('   - Live-Galerie mit PDF-Bildern');
    console.log('   - Alle interaktiven Features aktiv');
    console.log('   - Responsive Design für alle Geräte');
    console.log('\n⌨️  Drücke CTRL+C zum Beenden');
    console.log('='.repeat(60) + '\n');
});

// Fehlerbehandlung
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} ist bereits in Verwendung!`);
        console.error('Bitte beende den anderen Process oder nutze einen anderen Port.');
    } else {
        console.error('❌ Server-Fehler:', err.message);
    }
    process.exit(1);
});

// Graceful Shutdown
process.on('SIGTERM', () => {
    console.log('\n🛑 Server wird heruntergefahren...');
    server.close(() => {
        console.log('✓ Server beendet');
        process.exit(0);
    });
});
