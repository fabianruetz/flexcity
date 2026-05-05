# FlexCity – Flexibles Wohnsystem
## Project Brief für die Homepage-Entwicklung

---

## Projektübersicht

**FlexCity** ist ein innovatives, modulares Wohnsystem für junge Erwachsene (18–30 Jahre), das im Rahmen einer Diplomarbeit an der HTBLuVA Imst von **Jakob Nigsch** und **Nicolai Ruetz** entwickelt wurde. Das Konzept bietet flexible, leistbare und nachhaltige Wohnlösungen, die sich an unterschiedliche Lebenssituationen anpassen.

**Ziel der Homepage:** Das Diplomarbeitsprojekt als professionelle, moderne Website präsentieren – als Portfolio, Showcase und Konzeptdarstellung.

---

## Design-System

### Farbpalette
Aus der Diplomarbeit extrahierte Farben:

```
--color-primary:    #1A1A18   /* Tief-Schwarz (Logo, Headlines, Konturen) */
--color-secondary:  #E8E0CC   /* Warmes Sandbeige (Akzentstreifen, Header-Band) */
--color-background: #F7F4EF   /* Off-White / Cremeweiß (Seitenhintergrund) */
--color-accent:     #B5AA90   /* Khaki/Taupe (Moduldarstellungen, Grundriss-Fill) */
--color-wood:       #C8A96E   /* Holzton (Parkett, Fichtenholz-Elemente) */
--color-dark-gray:  #3D3D3B   /* Dunkelgrau (Fließtext) */
--color-mid-gray:   #8C8C86   /* Mittelgrau (Subheadings, Captions) */
--color-white:      #FFFFFF   /* Reines Weiß */
```

### Typografie
Die Diplomarbeit verwendet eine serifenbetonte Headline-Schrift kombiniert mit einer geometrischen Sansserif für Fließtext.

```
/* Headlines / Logoschrift */
font-family: 'Cormorant Garamond', 'Playfair Display', serif;
letter-spacing: 0.05em;
text-transform: uppercase;

/* Body / Navigation */
font-family: 'Inter', 'DM Sans', sans-serif;

/* Subheadings */
font-family: 'Inter', sans-serif;
font-weight: 300;
letter-spacing: 0.12em;
text-transform: uppercase;
```

### Logo & Brand Identity
- Das Logo besteht aus dem überlagerten **Buchstaben „F"** (in Sandbeige) und der **Trapezform** (in Schwarz) – eine abstrakte Darstellung des Modulgrundrisses
- Logo-Text: **„FLEX"** (oben, Serif) und **„CITY"** (unten, Serif) innerhalb der Form
- Header-Band: Horizontaler Sandbeige-Streifen ganz oben auf jeder Seite
- Seitliche Linie: Dünne diagonale Linie links auf den Dokumentenseiten → adaptierbar als vertikaler Akzent

### Designprinzipien
- Klare, reduzierte Ästhetik – kein visueller Lärm
- Großzügige Weißräume
- Architektonische Präzision: dünne Linien, Maßangaben als Designelement
- Industriell-warm: Schwarzes MDF + Holztöne + Off-White
- Keine abgerundeten Buttons – eher klare, eckige Formen (passend zur Trapezgeometrie)

---

## Seitenstruktur / Navigation

```
/                    → Hero / Landing
/konzept             → Das FlexCity-Konzept (Idee & Vision)
/module              → Modularten & Grundrisse
/innenraum           → Innenraumkonzept & Möbelsystem
/materialien         → Materialien & Nachhaltigkeit
/team                → Jakob Nigsch & Nicolai Ruetz
/downloads           → Diplomarbeit PDF (optional)
```

---

## Seiteninhalt

### 1. Hero Section `/`
**Headline:** `FLEXCITY`
**Subline:** `Flexibles Wohnsystem für junge Erwachsene`
**CTA-Button:** `Konzept entdecken →`
**Hintergrund:** Großes Rendering des Trapez-Moduls oder Grundrissdarstellung
**Animationsidee:** Logo-Buchstaben F und Trapez animieren sich beim Laden zusammen

---

### 2. Konzept `/konzept`

**Problem (Kurzfassung aus Diplomarbeit):**
> Kurzfristigen Wohnraum zu finden ist für junge Erwachsene kaum noch möglich. Wohnraummangel, geringe Vermieterflexibilität und hohe Kosten erschweren den Zugang. Es fehlt an unverbindlichen, schnell umsetzbaren und anpassbaren Lösungen.

**Lösung:**
> FlexCity entwickelt ein modulares Wohnkonzept, das auf vorgefertigten Trapez-Einheiten basiert. Gemeinden können Module bedarfsgerecht errichten und preiswert an junge Erwachsene vermieten.

**Zielgruppe:** 18–30-Jährige in Lebensphasen der Veränderung (Berufseinstieg, WG, Studium)

**Key Facts (als Icon-Grid oder Stat-Karten):**
- 🏠 16 m² Einzelmodul
- 📐 Trapezform (9m × 10m Grundfläche)
- 🔧 Industrielle Vorfertigung
- ♻️ Vollständig rückbaubar
- 🌿 Nachhaltige Materialien
- ⚡ Vorinstallierte Haustechnik

---

### 3. Module `/module`

#### Modularten
| Modul | Beschreibung |
|---|---|
| **Grundmodul ohne Treppe** | Basiseinheit, eigenständige Wohneinheit |
| **Grundmodul mit Treppe** | Erschließung von Obergeschossen |
| **Erweiterungsmodul mit Zwischenwand** | Raumtrennung möglich |
| **Erweiterungsmodul ohne Zwischenwand** | Offene Wohnfläche |
| **Terrassenmodul** | Außenbereich, verblendet oder offen |
| **Modulhälften** | Kleinere Teileinheiten |

#### Anordnungsprinzipien
- Einzelmodul: eigenständige Wohneinheit (16 m²)
- Mehrere Module: fächerartige Anordnung (3+ Module neben- und übereinander)
- Erweiterung jederzeit möglich – Module werden ergänzt, entfernt oder getauscht

#### Raumaufteilung Einzelmodul
- Wohnbereich: 16 m² Parkett
- Küche: integriert
- Bad: 3,8 m² Fliesen
- Garderobe: Eingangsbereich
- Klapptisch: multifunktional
- TV-Bereich: integriert

---

### 4. Innenraum `/innenraum`

#### Möbelsystem
Ein durchgehendes, modulares Möbelprogramm – alle Korpusse passen auf das Schienensystem:

- **Korpus 125 cm offen** – offenes Regal
- **Korpus 62,5 cm Drehtür** – klassischer Schrank
- **Korpus 125 cm Schiebetür** – platzsparend
- **Aufhängestange** – flexibel positionierbar
- **Zusatzhaken (Wandhaken)** – schwarzes MDF, 3D-Render vorhanden

**Multifunktionaler Tisch:**
Klapptisch-Konzept, der sich platzsparend wegklappen lässt.

**Bettkonzept:**
Umfunktionierbar – Doppelbett-Modus und Einzelbett-Modus, platzsparend in der Tiefe.

#### Wandgestaltung
- Innen: OSB-Platten mit 5 mm Wollfilz bespannt (schwarz), darauf Fichtenholzlatten
- Optisch: vertikale Lamellenoptik in Hellholz auf schwarzem Fond
- Funktion: Akustikoptimierung (Raumakustik)

#### Bodenbelag
- Wohnbereich: Parkett (Eschenholz oder Fichtenholz)
- Bad: Fliesen

---

### 5. Materialien `/materialien`

| Material | Verwendung | Eigenschaften |
|---|---|---|
| **MDF schwarz** | Möbelkorpusse, Wandelemente | Robust, fein bearbeitbar, gleichmäßige Oberfläche |
| **Fichtenholz** | Wandlatten, Tragstruktur | Leicht, günstig, nachhaltig |
| **Eschenholz** | Parkett-Option | Hart, langlebig, edle Optik |
| **OSB-Platten** | Innenwand-Unterkonstruktion | Stabil, kostengünstig |
| **Wollfilz (schwarz)** | Wandverkleidung | Akustikoptimierung, nachhaltig (Wolle) |
| **Baumwollstoff** | Polsterbezüge | Atmungsaktiv, pflegeleicht |
| **Fliesen** | Badbereich | Langlebig, hygienisch |
| **BSP (Brettsperrholz)** | Dachkonstruktion | Hohe Stabilität, Holzbau-typisch |

**Haustechnik:**
- Compact P AIR9 (Heizung/Kühlung)
- Elektro- und Wasserinstallationen vorinstalliert
- Standardisierte Steck-/Kupplungssysteme für Modulverbindungen

---

### 6. Team `/team`

**Jakob Nigsch**
- E-Mail: nigschjakob777@gmail.com
- Instagram: @jakob_nigsch

**Nicolai Ruetz**
- E-Mail: nicolairuetz@gmail.com
- Instagram: @nicolai_ruetz

**Betreuer:** DI Ewerz Dietmar, DI Martin Gamper
**Schule:** HTBLuVA Imst

---

## Technische Umsetzungshinweise

### Empfohlener Tech-Stack
```
Framework:    Next.js 14+ (App Router) oder Astro
Styling:      Tailwind CSS + CSS Custom Properties (s. Farbpalette oben)
Animationen:  Framer Motion oder GSAP (für Logo-Animation, Scroll-Effekte)
Bilder:       next/image (optimierte Renders aus Diplomarbeit)
Fonts:        Google Fonts – Cormorant Garamond + Inter
Hosting:      Vercel (empfohlen bei Next.js)
```

### Alternativ (einfacher Einstieg)
```
Reines HTML/CSS/JS (Vanilla)
Tailwind CSS via CDN
Alpine.js für kleine Interaktionen
```

### Bildmaterial verfügbar (aus Diplomarbeit)
Die folgenden visuellen Assets können als Screenshots/Exports aus der Diplomarbeit gewonnen werden:
- Grundriss Einzelmodul (1:20)
- Modulanordnung Vogelperspektive (3 Module fächerartig)
- Schnitte A1-A4 und Leermodul
- Renders: Modulhülle außen, Innenraum mit Lamellenverkleidung
- 3D-Render: Wandhaken (schwarzes MDF, auf dunkelgrauem Hintergrund)
- Modellfotos (physisches Arbeitsmodell)
- Materialbilder: Wollfilz, Holzlatten, Parkett

### Komponentenstruktur (Empfehlung)
```
components/
  ├── Header/          # Logo + Navigation (Sandbeige-Band)
  ├── Hero/            # Fullscreen-Opener mit Logo-Animation
  ├── FactGrid/        # Icon + Zahl + Beschreibung Karten
  ├── ModuleCard/      # Grundriss + Name + Specs
  ├── MaterialCard/    # Bild + Material + Eigenschaften
  ├── TeamCard/        # Portrait + Name + Kontakt
  └── Footer/          # Kontakt, Links, Copyright
```

---

## Content-Tone & Sprache

- **Sprache:** Deutsch (primär), optional Englisch (Kurzfassung vorhanden)
- **Tone of Voice:** Sachlich-modern, klar, jung aber professionell – kein Marketing-Bullshit
- **Zitate aus Diplomarbeit** können direkt verwendet werden (Eigenwerk)
- Kurzfassung Englisch ist in der Diplomarbeit enthalten → für internationale Besucher verwendbar

---

## Wichtige Designregeln für Claude / Cursor

1. **Trapezform** ist das zentrale Gestaltungselement – immer wieder aufgreifen (als Divider, Button-Form, Card-Clip-Path)
2. **Sandbeige-Streifen** oben auf jeder Seite als kontinuierliches Markenelement
3. Keine bunten Farben – Palette strikt einhalten
4. Bilder immer mit Kontext zeigen – Grundrisse mit Beschriftung, Renders mit Raumname
5. **Whitespace** als Gestaltungsmittel – nicht alles vollpacken
6. Linien und Maßangaben (z.B. „9m × 10m") können als Designelement im Hero oder Konzeptbereich eingesetzt werden
7. Mobile-first – viele Besucher werden das Projekt per Smartphone aufrufen

---

## Quellen / Credits

- Diplomarbeit: *FlexCity – Flexibles Wohnsystem*, Jakob Nigsch & Nicolai Ruetz, HTBLuVA Imst, 2026
- Einige Abbildungen: Freepik, Pixabay, Unsplash (externe Bilder, nicht für kommerzielle Web-Nutzung ohne Lizenzprüfung)
- Alle Eigenwerke (Grundrisse, Renders, Modellfotos) können frei verwendet werden

---

*Dieses claude.md wurde automatisch aus der Diplomarbeitsmappe extrahiert und dient als Projektbasis für die Homepage-Entwicklung mit VS Code / Cursor AI.*
