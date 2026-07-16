/* Glossary — terms link to modules and concepts in the course */

const GLOSSARY = [
  { slug: 'artificial-intelligence', term: 'Artificial Intelligence', aliases: ['AI'], moduleId: 1, concept: 'Basics of Artificial Intelligence', definition: 'Technology that enables machines to perform tasks requiring human-like intelligence: understanding language, recognizing patterns, and making decisions.' },
  { slug: 'generative-ai', term: 'Generative AI', aliases: [], moduleId: 1, concept: 'What is Generative AI?', definition: 'AI that creates new content (text, images, code) by learning patterns from training data, rather than only classifying or labeling existing data.' },
  { slug: 'llm', term: 'Large Language Model', aliases: ['LLM', 'LLMs'], moduleId: 1, concept: 'Introduction to Large Language Models (LLMs)', definition: 'A generative AI model trained on vast text datasets to understand and produce human language by predicting tokens sequentially.' },
  { slug: 'token', term: 'token', aliases: ['tokens'], moduleId: 1, concept: 'Introduction to Large Language Models (LLMs)', definition: 'The basic unit of text an LLM processes—roughly three-quarters of a word on average.' },
  { slug: 'claude', term: 'Claude', aliases: ['Claude AI'], moduleId: 1, concept: 'Overview of Claude AI', definition: 'Anthropic\'s AI assistant designed to be helpful, harmless, and honest—available via claude.ai, mobile apps, and API.' },
  { slug: 'anthropic', term: 'Anthropic', aliases: [], moduleId: 1, concept: 'Overview of Claude AI', definition: 'The AI safety company that created Claude, focused on building reliable and responsible AI systems.' },
  { slug: 'machine-learning', term: 'Machine learning', aliases: ['machine learning', 'ML'], moduleId: 1, concept: 'Basics of Artificial Intelligence', definition: 'Systems that improve by finding patterns in data without being explicitly programmed for every scenario.' },
  { slug: 'hallucination', term: 'hallucination', aliases: ['hallucinations'], moduleId: 2, concept: 'Understanding Claude\'s Capabilities and Limitations', definition: 'When an LLM produces fluent but factually incorrect or invented information—always verify critical facts.' },
  { slug: 'context-window', term: 'context window', aliases: ['context'], moduleId: 2, concept: 'Understanding Claude\'s Capabilities and Limitations', definition: 'The amount of text (conversation + uploads) Claude can consider in a single session.' },
  { slug: 'projects', term: 'Projects', aliases: [], moduleId: 2, concept: 'Managing Chats and Projects', definition: 'Claude workspaces that persist uploaded files and instructions across related conversations.' },
  { slug: 'prompt-engineering', term: 'Prompt engineering', aliases: ['prompt engineering'], moduleId: 3, concept: 'What is Prompt Engineering?', definition: 'The practice of designing clear inputs to guide an LLM toward useful, accurate, well-formatted responses.' },
  { slug: 'ctf-framework', term: 'CTF framework', aliases: ['CTF'], moduleId: 3, concept: 'Writing Effective Prompts', definition: 'Context, Task, Format—a simple structure for writing effective prompts (+ optional Constraints).' },
  { slug: 'role-prompting', term: 'Role-based prompting', aliases: ['role prompting'], moduleId: 3, concept: 'Role-Based Prompting', definition: 'Assigning Claude a persona or expert role to shape tone, vocabulary, and reasoning depth.' },
  { slug: 'zero-shot', term: 'Zero-shot', aliases: ['zero-shot prompting'], moduleId: 3, concept: 'Zero-Shot and Few-Shot Prompting', definition: 'Asking Claude to perform a task without providing example outputs.' },
  { slug: 'few-shot', term: 'Few-shot', aliases: ['few-shot prompting'], moduleId: 3, concept: 'Zero-Shot and Few-Shot Prompting', definition: 'Providing 1–3 input/output examples so Claude learns the pattern you want.' },
  { slug: 'aida', term: 'AIDA', aliases: [], moduleId: 4, concept: 'Marketing Copywriting', definition: 'Attention, Interest, Desire, Action—a classic marketing copy structure.' },
  { slug: 'pas', term: 'PAS', aliases: [], moduleId: 4, concept: 'Marketing Copywriting', definition: 'Problem, Agitate, Solution—a persuasive writing framework for marketing.' },
  { slug: 'pdf', term: 'PDF', aliases: ['PDFs'], moduleId: 5, concept: 'Working with PDFs', definition: 'Portable Document Format files that Claude can upload and analyze for summaries and extraction.' },
  { slug: 'csv', term: 'CSV', aliases: [], moduleId: 6, concept: 'Working with CSV and Excel Files', definition: 'Comma-separated values spreadsheet format Claude can analyze for trends and summaries.' },
  { slug: 'correlation', term: 'correlation', aliases: [], moduleId: 6, concept: 'Basic Data Interpretation', definition: 'When two variables move together in data—it does not necessarily mean one causes the other.' },
  { slug: 'sql', term: 'SQL', aliases: [], moduleId: 7, concept: 'SQL Query Generation', definition: 'Structured Query Language for requesting data from relational databases.' },
  { slug: 'json', term: 'JSON', aliases: [], moduleId: 8, concept: 'JSON Generation', definition: 'JavaScript Object Notation—a structured text format for machine-readable data exchange.' },
  { slug: 'structured-output', term: 'Structured outputs', aliases: ['structured output'], moduleId: 8, concept: 'Structured Outputs', definition: 'Requiring Claude to respond in fixed sections, tables, or schemas for consistency and automation.' },
  { slug: 'sop', term: 'SOP', aliases: ['SOPs'], moduleId: 9, concept: 'SOP Creation', definition: 'Standard Operating Procedure—a formal document describing how to perform a repeatable process.' },
  { slug: 'pii', term: 'PII', aliases: ['personally identifiable information'], moduleId: 10, concept: 'Privacy and Security Considerations', definition: 'Personally Identifiable Information—must not be uploaded to AI without organizational approval.' },
  { slug: 'responsible-ai', term: 'Responsible AI', aliases: ['responsible ai'], moduleId: 10, concept: 'AI Ethics and Responsible AI', definition: 'Using AI transparently, fairly, and with human accountability for outcomes.' },
  { slug: 'capstone', term: 'capstone', aliases: ['Capstone'], moduleId: 10, concept: 'Mini Capstone Project', definition: 'The final integrative project spanning at least three modules with documented prompts and reflection.' }
];

const BEFORE_AFTER = {
  1: {
    title: 'Explaining AI to a colleague',
    before: 'Tell me about AI.',
    after: 'Explain generative AI vs traditional AI in 150 words for a non-technical manager. Use one analogy and three bullet takeaways.'
  },
  3: {
    title: 'Prompt engineering',
    before: 'Write something about marketing.',
    after: 'You are a senior copywriter. Write a 200-word LinkedIn post about sustainable packaging for B2B buyers. Tone: professional. Include 3 hashtags and a CTA to download our guide.'
  },
  4: {
    title: 'Email drafting',
    before: 'Write a follow-up email.',
    after: 'Draft a follow-up email to a client who has not replied in 10 days about a proposal. Tone: warm, professional, not pushy. Under 120 words. Include 2 subject line options.'
  },
  8: {
    title: 'Structured extraction',
    before: 'Extract the data from this text.',
    after: 'Extract company info as JSON only: {"name":"","industry":"","revenue":0,"employees":0}. If a field is missing, use null. Text: [paste]'
  }
};

const CAPSTONE_ITEMS = [
  { id: 'task', label: 'Choose a real business task spanning at least 3 modules' },
  { id: 'prompts', label: 'Document initial prompt and two refinement iterations' },
  { id: 'deliverable', label: 'Complete final deliverable (memo, report, code, or content pack)' },
  { id: 'verify', label: 'Verify all facts, numbers, and quotes independently' },
  { id: 'reflection', label: 'Write 200-word reflection: what worked, what failed, lessons learned' },
  { id: 'templates', label: 'Save at least one reusable prompt template from the project' }
];
