# Node.js Installation – Windows (Checkliste)

## 1. PowerShell als Administrator starten
- Startmenü → „PowerShell“
- Rechtsklick → „Als Administrator ausführen“

## 2. ExecutionPolicy für aktuellen Benutzer setzen
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## 3. Node.js installieren
- empfohlene Variante: nvm-windows  
- alternativ: offizieller Node.js Installer (.msi)

## 4. PowerShell neu öffnen
- wichtig, damit PATH & ExecutionPolicy aktiv werden

## 5. Installation prüfen
```powershell
node -v
npm -v
```

## Typischer Fehler
```powershell
npm : Die Datei "npm.ps1" kann nicht geladen werden,
da die Ausführung von Skripts auf diesem System deaktiviert ist.
```

**Ursache:**  
ExecutionPolicy wurde nicht gesetzt oder durch Richtlinien blockiert.

**Hinweis:**  
Bei Problemen prüfen:
```powershell
Get-ExecutionPolicy -List
```
