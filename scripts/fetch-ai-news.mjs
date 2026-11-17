/**
 * Fetches approved RSS/Atom feeds and writes data/news.json
 * for the AI Foundations Industry Pulse section (GitHub Pages static site).
 *
 * Sources are official blogs / reputable industry publications only.
 * Summaries use feed-provided descriptions (stripped HTML), never invented copy.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'data', 'news.json');

const FEEDS = [
  { company: 'OpenAI', source: 'OpenAI News', category: 'AI models', url: 'https://openai.com/news/rss.xml' },
  { company: 'Google', source: 'Google AI Blog', category: 'Research', url: 'https://blog.google/technology/ai/rss/' },
  { company: 'Microsoft', source: 'Microsoft Blog', category: 'Enterprise AI', url: 'https://blogs.microsoft.com/feed/' },
  { company: 'NVIDIA', source: 'NVIDIA News', category: 'Enterprise AI', url: 'https://nvidianews.nvidia.com/rss.xml' },
  { company: 'Hugging Face', source: 'Hugging Face Blog', category: 'Research', url: 'https://huggingface.co/blog/feed.xml' },
  { company: 'DeepMind', source: 'Google DeepMind Blog', category: 'Research', url: 'https://deepmind.google/blog/rss.xml' }
];

function stripHtml(html = '') {
  return String(html)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function pick(tag, block) {
  const cdata = block.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i'));
  if (cdata) return cdata[1].trim();
  const normal = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return normal ? stripHtml(normal[1]) : '';
}

function pickLink(block) {
  const atom = block.match(/<link[^>]+href=["']([^"']+)["'][^>]*>/i);
  if (atom) return atom[1];
  return pick('link', block) || pick('guid', block);
}

function parseFeed(xml, meta) {
  const items = [];
  const chunks = xml.match(/<item[\s\S]*?<\/item>|<entry[\s\S]*?<\/entry>/gi) || [];
  for (const chunk of chunks.slice(0, 8)) {
    const headline = pick('title', chunk);
    const url = pickLink(chunk);
    const publishedAt = pick('pubDate', chunk) || pick('published', chunk) || pick('updated', chunk);
    const summary = (pick('description', chunk) || pick('summary', chunk) || pick('content', chunk)).slice(0, 320);
    if (!headline || !url) continue;
    items.push({
      headline,
      company: meta.company,
      source: meta.source,
      category: meta.category,
      publishedAt,
      summary: summary || 'See the original article for details.',
      whyItMatters: 'Industry development — review the source for implications for your role.',
      careerImplications: '',
      url,
      fetchedAt: new Date().toISOString()
    });
  }
  return items;
}

async function fetchFeed(feed) {
  try {
    const res = await fetch(feed.url, {
      headers: { 'User-Agent': 'ClaudeAITrainingRichards-NewsBot/1.0' },
      signal: AbortSignal.timeout(20000)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    return { ok: true, items: parseFeed(xml, feed), source: feed.source };
  } catch (err) {
    return { ok: false, items: [], source: feed.source, error: String(err.message || err) };
  }
}

const results = await Promise.all(FEEDS.map(fetchFeed));
const seen = new Set();
const items = [];
const sources = [];

for (const r of results) {
  sources.push({ name: r.source, ok: r.ok, error: r.error || null });
  for (const item of r.items) {
    const key = item.url.split('?')[0].toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    items.push(item);
  }
}

items.sort((a, b) => new Date(b.publishedAt || 0) - new Date(a.publishedAt || 0));

const payload = {
  lastFetched: new Date().toISOString(),
  status: items.length ? 'ok' : 'empty_or_failed',
  sources,
  items: items.slice(0, 40)
};

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2));
console.log(`Wrote ${payload.items.length} items to data/news.json`);
sources.forEach(s => console.log(` - ${s.name}: ${s.ok ? 'ok' : 'FAIL ' + s.error}`));
