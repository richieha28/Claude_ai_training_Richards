# Claude AI Professional Training

30-hour instructor-led Claude AI course with integrated prompt library, glossary, and certificate.

**Designed and copyrighted by Richards Edwin**

## Features

- **10 modules** — PDF-aligned curriculum (3 hours each)
- **65 prompts** — minimum 5 per category in the Prompt Library
- **Glossary** — terms linked in course content; click to jump to the lesson
- **Certificate** — unlock after completing all modules + capstone checklist
- **Dark mode** — toggle in the header
- **Search** — lessons, topics, glossary, prompts (`Ctrl+K`)
- **Notepad** — auto-save + export to `.txt`
- **Before/After demos** — in prompt engineering modules

## Run locally

```bash
python -m http.server 8080
# Visit http://localhost:8080
```

Or open `index.html` directly in your browser.

## GitHub Pages

1. Push this folder to GitHub
2. **Settings → Pages** → Source: `main` branch, `/ (root)`
3. Live at `https://<username>.github.io/<repo>/`

## File structure

```
├── index.html
├── .nojekyll
├── README.md
├── css/styles.css
└── js/
    ├── app.js
    └── data/
        ├── modules.js    ← 30-hour course
        ├── prompts.js    ← 65 prompts
        └── glossary.js   ← Terms + capstone + before/after
```

© Richards Edwin. All rights reserved.
