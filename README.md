# Claude AI Professional Training + AI Foundations Hub

Static GitHub Pages learning site with two independent programmes:

1. **Claude AI Professional Training** — `index.html`
2. **AI Foundations & Career Intelligence Hub** — `ai-foundations.html`

**Tagline (Foundations):** Understand AI. Explore the Ecosystem. Discover Your Next Career.

**Designed and copyrighted by Richards Edwin**

Live site: https://richieha28.github.io/Claude_ai_training_Richards/

## Features — AI Foundations Hub

- AI Fundamentals (beginner literacy topics + knowledge checks)
- Searchable AI Glossary (100+ terms, filters, “mark understood”)
- AI Tools Explorer with comparison table
- Prompt Engineering Lab (offline copy-to-clipboard playground)
- AI at Work by business function
- Agentic AI awareness module
- AI Industry Pulse (RSS → static JSON via GitHub Actions)
- What’s New in AI (product feature updates with verify notes)
- Career Navigator + assessment → 3 role recommendations
- Certification Centre (official vendor links; verify fees/status)
- 10-Day Learning Plan + Knowledge quizzes + 90-Day roadmap
- Progress saved in `localStorage` (no paid API required)

## Run locally

```bash
python -m http.server 8080
# Claude training:     http://localhost:8080/
# AI Foundations hub:  http://localhost:8080/ai-foundations.html
```

## GitHub Pages

1. Push to the `main` branch of this repository
2. **Settings → Pages** → Source: `main` / root
3. Hub URL: `https://richieha28.github.io/Claude_ai_training_Richards/ai-foundations.html`

`.nojekyll` is present so underscore/dot paths and static assets are served as-is.

## News integration (Industry Pulse)

Architecture:

1. `scripts/fetch-ai-news.mjs` fetches approved RSS/Atom feeds (OpenAI, Google AI, Microsoft Blog, NVIDIA, Hugging Face, DeepMind).
2. Writes `data/news.json` with `lastFetched`, per-source status, and dated items (summaries from feed text only — not invented).
3. `.github/workflows/fetch-ai-news.yml` runs daily (`cron: 0 6 * * *`) and on `workflow_dispatch`, then commits updated JSON.
4. The hub loads `data/news.json` client-side; if missing/empty, shows a fallback with official blog links.

### Enable the workflow

1. Ensure Actions are allowed for the repository.
2. Run **Actions → Fetch AI News → Run workflow** once to seed.
3. Confirm `data/news.json` updates on `main` (Pages redeploys automatically).

No API keys are required for the default RSS sources.

## Key files

```
├── index.html                 # Claude AI Professional Training
├── ai-foundations.html        # AI Foundations & Career Intelligence Hub
├── .nojekyll
├── data/news.json             # Generated Industry Pulse dataset
├── css/styles.css             # Shared design system
├── css/foundations.css        # Hub-specific styles
├── js/app.js                  # Claude programme app
├── js/foundations-app.js      # Foundations hub app
├── js/data/                   # Claude course data
├── js/data/foundations/       # Foundations modules data
├── scripts/fetch-ai-news.mjs
└── .github/workflows/fetch-ai-news.yml
```

## Known limitations

- News summaries come from RSS descriptions; quality varies by publisher.
- Some vendor RSS endpoints change/break; failed sources are logged in `news.json`.
- Product pricing, exam fees, and feature availability change — cards point to official sites.
- Prompt Lab is not connected to a live model API.
- Career recommendations are guidance only (not employment or salary guarantees).

© Richards Edwin. All rights reserved.
