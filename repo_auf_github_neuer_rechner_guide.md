# Repo von GitHub auf neuen Rechner übertragen (Schritt-für-Schritt)

> **Ziel:** Du richtest einen neuen Rechner so ein, dass du ein bestehendes GitHub‑Repository **vollständig** (inkl. Branches, Tags, ggf. Git LFS und Submodule) klonst und sofort arbeiten kannst. Am Ende gibt es eine optionale Sektion, falls du **lokale, nicht gepushte Commits** vom alten Rechner migrieren möchtest (`git bundle`).

---

## 1) Voraussetzungen prüfen

- Git ist installiert (`git --version`).
- Optional: Git LFS ist installiert, wenn das Repo es nutzt.
- Optional: SSH‑Key vorhanden oder neu erzeugt und bei GitHub hinterlegt.

### Git installieren

```bash
# Debian/Ubuntu
sudo apt update && sudo apt install -y git

# macOS (Homebrew)
brew install git

# Windows (Chocolatey als Admin)
choco install git -y
```

### Git LFS installieren (falls benötigt)

```bash
# Debian/Ubuntu
sudo apt install -y git-lfs
git lfs install

# macOS
brew install git-lfs
git lfs install

# Windows (Chocolatey)
choco install git-lfs -y
git lfs install
```

### SSH‑Key erzeugen und bei GitHub hinterlegen (empfohlen)

```bash
# RSA oder Ed25519 (empfohlen)
ssh-keygen -t ed25519 -C "deine-mail@beispiel.de"

# SSH-Agent starten & Key laden (Linux/macOS, falls nötig)
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Public Key ausgeben und bei GitHub unter Settings → SSH and GPG keys hinzufügen
cat ~/.ssh/id_ed25519.pub
```

> Alternativ kannst du mit HTTPS klonen. Für Pushes ist dann ein GitHub‑Token sinnvoll.

---

## 2) Git richtig konfigurieren

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine-mail@beispiel.de"
git config --global init.defaultBranch main   # falls du neue Repos anlegst

# Optional, aber praktisch
git config --global pull.rebase false         # oder true, je nach Team-Policy
git config --global fetch.prune true          # entferne verwaiste Remote-Branches beim fetch
git config --global core.autocrlf input       # macOS/Linux
# git config --global core.autocrlf true      # Windows: Zeilenenden automatisch anpassen
```

> Wenn ihr **Commit‑Signierung** mit GPG/SSH nutzt, richte das hier ebenfalls ein.

---

## 3) Repo klonen (SSH oder HTTPS)

> Ersetze `OWNER/REPO` mit deinem Projekt und wähle **genau eine** der beiden Varianten.

### Variante A: SSH (empfohlen)

```bash
git clone --origin=origin --recursive git@github.com:OWNER/REPO.git
```

### Variante B: HTTPS

```bash
git clone --origin=origin --recursive https://github.com/OWNER/REPO.git
```

> `--recursive` holt Submodule sofort mit. Falls du keine Submodule hast, ist der Schalter unschädlich.

Wechsle ins Projektverzeichnis:

```bash
cd REPO
```

---

## 4) Alle Branches, Tags, LFS & Submodule sicherstellen

```bash
# Alle Remote-Refs holen (mit Aufräumen nicht mehr existierender Remote-Branches)
git fetch --all --tags --prune

# Falls Git LFS im Einsatz ist
git lfs pull

# Falls Submodule existieren (ansonsten harmlos)
git submodule update --init --recursive
```

> Tipp: Mit `git branch -a` und `git tag --list` prüfen, ob alles da ist.

---

## 5) Auf den gewünschten Arbeits‑Branch wechseln

```bash
# Beispiel: main
git checkout main

# Oder einen Feature-Branch
git checkout feature/dein-branch
```

> Falls der Branch lokal noch nicht existiert:
>
> ```bash
> git checkout -b feature/dein-branch origin/feature/dein-branch
> ```

---

## 6) Lokale Entwicklungsumgebung aktivieren (projektabhängig)

Typische Beispiele (je nach Projekt README):

```bash
# PHP/Laravel
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate

# Node/Frontend
npm ci
npm run dev
```

> Prüfe die Projekt‑README für exakte Befehle, Services (DB, Redis), Env‑Variablen etc.

---

## 7) Verifikation: alles auf Stand?

```bash
# Letzte Commits
git log --oneline -5

# Remote richtig gesetzt?
git remote -v

# Sauberer Status?
git status
```

Wenn dein lokaler HEAD‑Commit mit GitHub übereinstimmt und `git status` „working tree clean“ meldet, bist du startklar.

---

## 8) Optional: Upstream korrekt setzen (neuer lokaler Branch)

Wenn du einen neuen Branch anlegst und später pushen willst:

```bash
git checkout -b feature/neuer-branch
# ... Änderungen vornehmen, committen ...
git push --set-upstream origin feature/neuer-branch
```

---

## 9) Optional: Sparse Checkout (nur Teilbaum klonen)

Für sehr große Repos kannst du nur Teilverzeichnisse auschecken:

```bash
git clone --filter=blob:none --no-checkout git@github.com:OWNER/REPO.git
cd REPO
git sparse-checkout init --cone
git sparse-checkout set pfad/zu/ordnerA pfad/zu/ordnerB
git checkout main
```

---

## 10) Troubleshooting (kurz)

- **`Permission denied (publickey)`**: SSH‑Key fehlt oder ist nicht bei GitHub hinterlegt. `ssh -T git@github.com` testen.
- **LFS‑Dateien sind „Pointer“**: `git lfs install && git lfs pull` ausführen.
- **Submodule leer**: `git submodule update --init --recursive` ausführen.
- **Falsche Zeilenenden**: `core.autocrlf` passend zum OS setzen (siehe oben).
- **Proxy/VPN**: GitHub ggf. auf Whitelist oder VPN anpassen.

---

## Bonus: Lokale, **nicht gepushte** Commits vom alten Rechner übernehmen

Falls auf dem alten Rechner Commits existieren, die **nicht** auf GitHub liegen, übertrage sie sicher mit `git bundle`:

### Auf dem alten Rechner

```bash
cd /pfad/zu/deinem/repo
# Alle Branches und Tags bündeln (nur sichtbare Refs, keine Worktree-Dateien)
git bundle create ~/repo-full.bundle --all --tags
# (Optional) Integrität prüfen
git bundle verify ~/repo-full.bundle
```

Kopiere die Datei `repo-full.bundle` auf den neuen Rechner (USB, scp, …).

### Auf dem neuen Rechner

**Variante 1: Neues Repo aus Bundle klonen**

```bash
mkdir REPO && cd REPO
git init
git remote add origin git@github.com:OWNER/REPO.git
git pull origin --all --tags         # zuerst den Stand von GitHub holen
git pull ~/repo-full.bundle --all    # dann deine nicht gepushten Commits integrieren
```

**Variante 2: Direkt aus Bundle klonen (ohne vorheriges GitHub‑Clone)**

```bash
git clone /pfad/zu/repo-full.bundle REPO
cd REPO
git remote add origin git@github.com:OWNER/REPO.git
git fetch origin --all --tags
# Konflikte ggf. branch-weise auflösen und pushen
```

> Vorteil von `git bundle`: Du überträgst **nur Git‑Objekte**, keine sensiblen `.env`‑Dateien oder Artefakte.

---

## Kurz‑Checkliste (TL;DR)

1. Git (und ggf. Git LFS) installieren.  
2. SSH‑Key erzeugen und bei GitHub hinterlegen **oder** HTTPS nutzen.  
3. `git clone --recursive` (SSH/HTTPS).  
4. `git fetch --all --tags --prune`, `git lfs pull`, `git submodule update --init --recursive`.  
5. `git checkout <branch>`.  
6. Projektbefehle aus README ausführen (Composer/NPM/etc.).  
7. Optional: Nicht gepushte Commits via `git bundle` migrieren.

Viel Erfolg! ✨
