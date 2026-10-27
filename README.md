# UGC NET Paper 1 – Ignition Batch PYQ Mock Test Portal

A dedicated, zero-maintenance **UGC NET Paper 1 (Code 00) Ignition Batch CBT Mock Engine** covering all **13 Subjects and 144 PYQ Sessions**.

## Permanent Directory Structure

To keep your repository clean and future-proof without requiring any manual renaming, all question banks follow this deterministic folder structure:

```text
├── index.html
├── setup_repo.py
├── README.md
└── questions/
    ├── 01-teaching-aptitude/
    ├── 02-research-aptitude/
    ├── 03-ict/
    ├── 04-communication/
    ├── 05-mathematical-reasoning/
    ├── 06-logical-reasoning/
    ├── 07-higher-education/
    ├── 08-pde/
    ├── 09-data-interpretation/
    ├── 10-crash-course/
    ├── 11-indian-logic/
    ├── 12-counselling-session/
    └── 13-free-sessions/
```

## How to Set Up Your New GitHub Repository in 2 Minutes

1. **Create a new GitHub Repository** (for example: `UGC-NET-Paper-1-Mock-Test`).
2. **Upload `index.html`** to the root of your repository and enable **GitHub Pages** (`Settings → Pages → Deploy from branch: main`).
3. **Initialize all 13 Subject Folders (2 Ways):**
   * **Option A (Directly from the Browser):** Open your live `index.html`, click **1-Click Publish to GitHub**, enter your repo name (`Owner/Repo`) and GitHub Token once, and click **"Auto-Create 13 Repo Folders"**.
   * **Option B (Local Python Script):** Run `python setup_repo.py` locally and push the `questions/` folder to GitHub.
4. **Adding Question Banks (`.js` files):**
   * Whenever you have a new `.js` file (`var rawQuestions = [...]`), simply select the Subject & Session in the portal, click **Publish / Upload**, and select the file from your device. The portal automatically renames and uploads it to the exact folder path!