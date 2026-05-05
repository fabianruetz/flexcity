# FLEXCITY - Flexibles Wohnsystem | Website

Eine professionelle, moderne Webseite für das Diplomarbeitsprojekt **FLEXCITY** von Jakob Nigsch und Nicolai Ruetz.

## 📋 Projektüberblick

Diese Website präsentiert das innovative Wohnsystem FLEXCITY mit modernem Design, beeindruckenden Grafiken und vollständiger Responsivität für alle Geräte.

## 🎨 Features

- **Responsive Design**: Funktioniert perfekt auf Desktop, Tablet und Mobilgeräten
- **Modernes Layout**: Zeitgenössisches Design mit eleganten Übergängen und Animationen
- **SEO-Optimiert**: Meta-Tags und strukturiertes HTML für bessere Suchmaschinen-Rankings
- **Interaktiv**: Smooth Scrolling, Mobile-Menü und Formularvalidierung
- **Professionelle Typografie**: Google Fonts Integration mit Poppins und Playfair Display
- **Animationen**: Subtile, professionelle Animations-Effekte

## 📁 Dateistruktur

```
FLEXCITY/
├── index.html          # Hauptdatei mit allen HTML-Inhalten
├── styles.css          # Gesamtes Styling und Responsive Design
├── script.js           # JavaScript für Interaktivität und Animationen
└── README.md          # Diese Datei
```

## 🚀 Verwendung

### Lokal öffnen
1. Speichern Sie alle Dateien im gleichen Ordner
2. Öffnen Sie `index.html` in Ihrem Web-Browser
3. Die Website wird sofort funktionsfähig sein

### Online hosten
1. Laden Sie alle drei Dateien auf Ihren Webserver hoch
2. Stellen Sie sicher, dass alle Dateien im gleichen Verzeichnis sind
3. Öffnen Sie die Webseite über Ihre Domain

## 📱 Responsivität

Die Website ist vollständig responsive und optimiert für:
- **Desktop**: 1200px und größer
- **Tablet**: 768px - 1199px
- **Mobile**: Unter 768px
- **Small Mobile**: Unter 480px

## 🎯 Hauptseiten-Bereiche

### 1. **Navigation**
   - Sticky Navigation mit Logo und Links
   - Mobile-freundliches Hamburger-Menü
   - Einfache Navigation zu allen Seiten

### 2. **Hero Section**
   - Großes, auffälliges Intro mit Animationen
   - Projektlogo und Call-to-Action Button
   - Dunkler, professioneller Hintergrund

### 3. **Konzept-Bereich**
   - Vision des Projekts
   - Zielgruppe
   - Nachhaltigkeitsaspekte

### 4. **Merkmale-Bereich**
   - 6 Hauptmerkmale des FLEXCITY-Systems
   - Schöne Icon-Grafiken
   - Hover-Effekte auf den Karten

### 5. **Team-Bereich**
   - Präsentation der Projektautoren
   - Avatar-Elemente
   - Persönliche Informationen

### 6. **Vorteile-Bereich**
   - 4 Hauptvorteile mit Nummern
   - Dunkles Design-Theme
   - Animierte Zähler

### 7. **Kontakt-Bereich**
   - Projektinformationen
   - Kontaktformular mit Validierung
   - Responsive Zwei-Spalten-Layout

### 8. **Footer**
   - Mehrspaltiges Footer-Design
   - Navigations-Links
   - Copyright-Information

## 🎨 Design-Prinzipien

- **Farben**:
  - Primär: Gold (#FFD700)
  - Sekundär: Dunkelgrau (#2a2a2a)
  - Text: Dunkelgrau (#333)
  - Hintergrund: Hell (#f5f5f5)

- **Typografie**:
  - Headings: Playfair Display (elegant)
  - Body: Poppins (modern, lesbar)

## ✨ Besondere Features

### Animationen
- Fade-in Effekte beim Scrollen
- Hover-Effekte auf interaktiven Elementen
- Floating Animation für das Logo
- Smooth Scrolling zwischen Abschnitten

### Interaktivität
- Mobile-Menü mit Hamburger-Icon
- Automatisches Schließen des Menüs beim Link-Klick
- Formularvalidierung
- Intersection Observer für Scroll-Animationen

### Performance
- Optimierte SVG-Grafiken (klein und skalierbar)
- CSS-Animationen (performanter als JavaScript)
- Moderne Browser-API Nutzung

## 🔧 Anpassung

### Logo ändern
Das Logo ist als SVG in der HTML-Datei enthalten. Sie können es anpassen unter:
- `.logo-svg` für das Navigation Logo
- `.logo-hero` für das große Hero Logo

### Farben anpassen
Bearbeiten Sie die CSS-Variablen in `styles.css`:
```css
:root {
    --primary-color: #FFD700;      /* Ändern Sie diese Farbe */
    --secondary-color: #2a2a2a;
    --text-color: #333;
    --light-bg: #f5f5f5;
}
```

### Text/Inhalte ändern
Alle Textinhalte können direkt in `index.html` bearbeitet werden.

### Schriftarten ändern
Die Google Fonts können in `index.html` im `<head>` angepasst werden:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

## 📧 Kontaktformular

Das Kontaktformular beinhaltet:
- Namens-Validierung
- E-Mail-Validierung
- Nachricht-Validierung
- Benutzerfreundliche Fehlermeldungen

**Hinweis**: Das Formular ist derzeit nur Frontend-validiert. Für echte E-Mail-Funktionalität benötigen Sie ein Backend-System oder einen Service wie Formspree oder Emailjs.

## 🌐 Browser-Kompatibilität

- Chrome/Chromium: ✅ Vollständig unterstützt
- Firefox: ✅ Vollständig unterstützt
- Safari: ✅ Vollständig unterstützt
- Edge: ✅ Vollständig unterstützt
- Internet Explorer: ⚠️ Nicht empfohlen (veralteter Browser)

## 📈 SEO-Optimierung

Die Website beinhaltet:
- Meta-Beschreibung
- Stichwörter
- Strukturierte HTML
- Aussagekräftige Überschriften
- Alt-Text für Bilder (SVG-Icons)

## 🔒 Sicherheit

- Keine externen Abhängigkeiten außer Google Fonts
- Alle Assets sind lokal oder CDN-basiert
- CSRF-Token-Schutz für Formulare kann hinzugefügt werden

## 📞 Support & Anpassungen

Bei Fragen oder Anpassungswünschen:
- Layout-Änderungen: Bearbeiten Sie `index.html`
- Design-Änderungen: Bearbeiten Sie `styles.css`
- Funktionalität: Bearbeiten Sie `script.js`

## 📄 Lizenz

Alle Inhalte gehören zu FLEXCITY - Diplomarbeit von Jakob Nigsch & Nicolai Ruetz.

---

**Viel Erfolg mit FLEXCITY!** 🚀

Version: 1.0
Erstellt: 2024
