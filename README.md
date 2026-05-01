# Cassidy Partners — Webseite

Statische Single-Page-Website für Cassidy Partners AG, Zug. Aufgebaut als drei klar getrennte Dateien, hostbar auf jedem statischen Webserver.

---

## Projektstruktur

```
cassidy-partners-website/
├── index.html       Inhaltliche Struktur der Seite
├── styles.css       Sämtliches Styling (Palette, Typografie, Layouts)
├── script.js        Scroll-Reveal-Animation, Logo-Alignment
├── .gitignore       Welche Dateien Git ignorieren soll
└── README.md        Diese Datei
```

Drei separate Dateien (statt einer Single-File-Lösung), damit Claude Code und Git-Diffs sauber arbeiten können.

---

## Erstes Setup (einmalig)

### 1. Lokales Repo

```bash
cd Pfad/zu/cassidy-partners-website
git init
git add .
git commit -m "Initial commit: Cassidy Partners website v1.0"
```

### 2. GitHub-Repository anlegen

Auf github.com ein neues, **privates** Repository namens `cassidy-partners-website` anlegen. Privat empfohlen — die Webseite ist später öffentlich, der Quellcode-Repo nicht zwingend.

Dann lokal verknüpfen:

```bash
git remote add origin git@github.com:<username>/cassidy-partners-website.git
git branch -M main
git push -u origin main
```

### 3. Mit VS Code öffnen

```bash
code .
```

Ab hier kann Claude Code Änderungen direkt an den Dateien vornehmen.

---

## Lokal anschauen

Doppelklick auf `index.html` öffnet die Seite im Browser. Reicht für den Alltag.

Falls Pfade später relativ verlinkt werden (Bilder, Unterseiten), empfiehlt sich ein lokaler Mini-Webserver. In VS Code installiert man dafür die Erweiterung **Live Server** und klickt unten rechts auf "Go Live".

---

## Deployment auf Hostpoint

### Voraussetzung

Ein Hostpoint-Hosting-Paket muss bestehen und der Domain `cassidy-partners.com` zugewiesen sein. Im Hostpoint Control Panel zu sehen unter Domains → cassidy-partners.com → Domain Status. Wenn dort steht "Sie haben noch keinen Hosting-Account", muss zuerst unter SHOP ein Webhosting-Paket gebucht werden (das günstigste reicht).

### Upload-Wege

**Variante A — Browser (am einfachsten, für gelegentliche Updates):**

1. Login auf admin.hostpoint.ch
2. Services → Webhosting → File Manager öffnen
3. In den Ordner `httpdocs/` (oder `public_html/`, je nach Hostpoint-Setup) wechseln
4. Falls vorhanden: bestehende `index.html` der Hostpoint-Parking-Seite löschen
5. `index.html`, `styles.css`, `script.js` hochladen

Die Seite ist nach wenigen Sekunden unter `cassidy-partners.com` erreichbar.

**Variante B — SFTP (komfortabler bei häufigen Änderungen):**

Hostpoint zeigt im Control Panel unter Services → FTP/SFTP Zugangsdaten an. Mit einem SFTP-Client (Cyberduck, FileZilla) oder direkt aus VS Code (Erweiterung "SFTP" von Natizyskunk) verbindet man sich, navigiert nach `httpdocs/` und lädt die geänderten Dateien hoch.

### SSL-Zertifikat

Hostpoint stellt automatisch ein Let's-Encrypt-Zertifikat bereit. Zu prüfen unter Services → Webhosting → SSL-Zertifikate. Falls noch nicht aktiv: einmal "Zertifikat anfordern" klicken — dauert wenige Minuten.

---

## Was sich beim Update ändert — und was nicht

| Was du änderst                      | Welche Datei                |
|-------------------------------------|-----------------------------|
| Texte, Sektionen, Reihenfolge       | `index.html`                |
| Farben, Schriftgrößen, Abstände     | `styles.css`                |
| Animationen, interaktive Elemente   | `script.js`                 |

Nach jeder Änderung lokal speichern, im Browser neu laden zum Testen, dann committen und auf den Hostpoint-Server hochladen.

---

## Bekannte Punkte für später

- **Impressum & Datenschutz** fehlen noch. Bei einer geschäftlichen Webseite in der Schweiz / EU empfohlen, im Footer zu verlinken. Beide können als separate Seiten (`impressum.html`, `datenschutz.html`) ergänzt werden, sobald die Inhalte feststehen.
- **Portrait-Foto Dr. David Barst** — aktuell zeigt die Partner-Sektion einen Platzhalter mit den Initialen "DB". Sobald ein professionelles Portrait vorliegt, wird es als `assets/david-barst.jpg` abgelegt und im HTML statt des Placeholders eingebunden.
- **Cockpit-Mockup**: Das aktuelle SVG-Mockup ist eine generische Beispieldarstellung. Sobald das echte Tool steht, kann es durch einen echten Screenshot oder ein präziseres Mockup ersetzt werden.
- **Englische Sprachversion**: Falls international beworben, lohnt eine zweite Sprachversion. Empfohlene Struktur: `/en/` Unterordner mit eigener `index.html`.

---

## Versionshistorie

- **v1.0 (Mai 2026)** — Initialversion mit Hero, Positionierung, Leistungen, Stiftungs-Case-Study, Plattform/Cockpit-Sektion (in Kooperation mit Aigency), Partner-Bio, Kontakt.

---

## Kontakt für Fragen zur Umsetzung

Aigency, Zürich — aigency.ch
