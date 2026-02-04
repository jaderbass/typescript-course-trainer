## Remote-Repo übernehmen und dessen Stand ziehen

Wenn das Remote bereits Inhalte hat (README, CI, etc.):

```bash
git remote add origin git@github.com:USER/REPO.git
git fetch origin
git merge origin/main --allow-unrelated-histories
```

Danach:

```bash
git push -u origin main

```

## Remote-Repo wechseln

```bash
git remote -v
git remote set-url origin git@github.com:NEU/REPO.git

```
Prüfen:

```bash
git remote -v
```

Falls das alte Repo komplett raus soll:

```bash
git remote remove origin
git remote add origin git@github.com:NEU/REPO.git

```

Danach puschen:

```bash
git push -u origin main
```
