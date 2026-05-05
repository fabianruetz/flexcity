const fs = require('fs');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');

/**
 * FLEXCITY - PDF zu Bildern Konverter
 * Nutzt ConvertAPI für PDF-zu-PNG Konvertierung
 */

const INFOS_DIR = path.join(__dirname, 'INFOS');
const IMAGES_DIR = path.join(__dirname, 'images');

// Erstelle images Verzeichnis
if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

console.log('='.repeat(60));
console.log('FLEXCITY - PDF zu PNG Konverter (Online)');
console.log('='.repeat(60));
console.log('\n📌 WICHTIG: Diese Methode benötigt eine Internetverbindung!\n');

const pdfFiles = [
    'Diplomarbeitsmappe_neu.pdf',
    'Cover_mit logo.pdf'
];

/**
 * Alternative 1: Mit lokaler Installation (falls CloudConvert verfügbar)
 * Für Windows: Nutze Powershell mit Online-Tools
 */
async function convertPdfsUsingPowerShell() {
    console.log('🔄 Versuche mit PowerShell-Online-Methode...\n');
    
    for (const pdfName of pdfFiles) {
        const pdfPath = path.join(INFOS_DIR, pdfName);
        
        if (!fs.existsSync(pdfPath)) {
            console.log(`⚠️  ${pdfName} nicht gefunden`);
            continue;
        }
        
        console.log(`📄 Datei: ${pdfName}`);
        console.log(`   Pfad: ${pdfPath}`);
        console.log(`   ➡️  Nutze Online-Konvertierung...\n`);
    }
}

/**
 * Manuelle Anleitung für Online-Konvertierung
 */
function printManualInstructions() {
    console.log('\n' + '='.repeat(60));
    console.log('📋 MANUELLE KONVERTIERUNG - Schritt für Schritt');
    console.log('='.repeat(60) + '\n');
    
    console.log('Kostenlose Online-Tools (keine Installation nötig):\n');
    
    console.log('Option 1: ilovepdf.com');
    console.log('1. Gehe zu https://www.ilovepdf.com/pdf_to_image');
    console.log('2. Lade "Diplomarbeitsmappe_neu.pdf" hoch');
    console.log('3. Wähle als Format: PNG');
    console.log('4. Klicke "In Bilder konvertieren"');
    console.log('5. Speichere die ZIP-Datei und entpacke sie im "images" Ordner\n');
    
    console.log('Option 2: smallpdf.com');
    console.log('1. Gehe zu https://smallpdf.com/pdf-to-image');
    console.log('2. Lade PDF hoch');
    console.log('3. Wähle PNG als Zielformat');
    console.log('4. Lade die konvertierten Bilder herunter\n');
    
    console.log('Option 3: CloudConvert.com');
    console.log('1. Gehe zu https://cloudconvert.com/pdf-to-png');
    console.log('2. Wähle deine PDF-Datei aus');
    console.log('3. Starte die Konvertierung');
    console.log('4. Lade alle PNG-Dateien herunter\n');
    
    console.log('📁 Nach der Konvertierung:');
    console.log('Speichere alle PNG-Bilder im Ordner: ./images/\n');
    console.log('Dateinamen Beispiel:');
    console.log('- Diplomarbeitsmappe_neu_page_1.png');
    console.log('- Diplomarbeitsmappe_neu_page_2.png');
    console.log('- Cover_mit_logo_page_1.png\n');
}

/**
 * Erkenne bereits vorhandene Bilder
 */
function detectExistingImages() {
    console.log('\n' + '='.repeat(60));
    console.log('🔍 Suche nach bestehenden Bildern...');
    console.log('='.repeat(60) + '\n');
    
    if (fs.existsSync(IMAGES_DIR)) {
        const files = fs.readdirSync(IMAGES_DIR);
        const pngFiles = files.filter(f => f.endsWith('.png'));
        
        if (pngFiles.length > 0) {
            console.log(`✅ ${pngFiles.length} PNG-Dateien gefunden:\n`);
            pngFiles.forEach(file => {
                console.log(`   ✓ ${file}`);
            });
            return true;
        }
    }
    
    console.log('❌ Keine PNG-Bilder gefunden im "images" Ordner\n');
    return false;
}

/**
 * Hauptfunktion
 */
async function main() {
    // Prüfe auf bestehende Bilder
    const hasExisting = detectExistingImages();
    
    if (!hasExisting) {
        // Zeige manuelle Anleitung
        printManualInstructions();
    } else {
        console.log('\n💡 Die Bilder sind bereits vorhanden!');
        console.log('Du kannst sie nun in der Website verwenden.\n');
    }
    
    console.log('='.repeat(60));
    console.log('Für automatische Konvertierung installiere:');
    console.log('pip install pdf2image');
    console.log('Oder nutze Python mit dem Script: extract_images.py');
    console.log('='.repeat(60) + '\n');
}

// Starte das Programm
main().catch(err => {
    console.error('❌ Fehler:', err.message);
    process.exit(1);
});
