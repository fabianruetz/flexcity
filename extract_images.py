#!/usr/bin/env python3
"""
PDF zu PNG Konverter für FLEXCITY
Konvertiert alle Seiten der PDFs in PNG-Bilder
"""

import os
import sys

try:
    from pdf2image import convert_from_path
except ImportError:
    print("ERROR: pdf2image nicht installiert!")
    print("Bitte installieren Sie: pip install pdf2image")
    print("\nAuch erforderlich:")
    print("- Windows: Installieren Sie Poppler von https://github.com/oschwartz10612/poppler-windows/releases/")
    print("- Oder nutzen Sie: choco install poppler (mit Chocolatey)")
    sys.exit(1)

# Verzeichnisse
INFOS_DIR = os.path.join(os.path.dirname(__file__), "INFOS")
IMAGES_DIR = os.path.join(os.path.dirname(__file__), "images")

# Erstelle images Verzeichnis
os.makedirs(IMAGES_DIR, exist_ok=True)

# PDF-Dateien
pdf_files = [
    "Diplomarbeitsmappe_neu.pdf",
    "Cover_mit logo.pdf"
]

print("=" * 60)
print("FLEXCITY - PDF zu PNG Konverter")
print("=" * 60)

for pdf_name in pdf_files:
    pdf_path = os.path.join(INFOS_DIR, pdf_name)
    
    if not os.path.exists(pdf_path):
        print(f"\n⚠️  WARNUNG: {pdf_name} nicht gefunden")
        continue
    
    print(f"\n📄 Konvertiere: {pdf_name}")
    
    try:
        # Konvertiere alle Seiten
        images = convert_from_path(pdf_path, dpi=150)
        
        # Speichere als PNG
        base_name = pdf_name.replace(".pdf", "")
        
        for i, image in enumerate(images, 1):
            output_path = os.path.join(IMAGES_DIR, f"{base_name}_page_{i}.png")
            image.save(output_path, 'PNG')
            print(f"   ✅ Seite {i} → {output_path}")
        
        print(f"   ✓ Fertig! {len(images)} Seiten konvertiert")
        
    except Exception as e:
        print(f"   ❌ FEHLER: {str(e)}")

print("\n" + "=" * 60)
print("Konvertierung abgeschlossen!")
print(f"Alle Bilder sind in: {IMAGES_DIR}")
print("=" * 60)
