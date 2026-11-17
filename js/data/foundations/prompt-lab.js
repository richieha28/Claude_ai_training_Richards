/* AI Literacy Hub - Prompt Lab (classic script, no modules) */
const AF_PROMPT_TOPICS = [
  {
    id: 'pt-clarity',
    title: 'Clarity and specificity',
    summary: 'Replace vague asks with clear goals, audience, constraints, and definitions of done.',
    tips: [
      'State the role, task, and output format',
      'Specify length, tone, and must-include items',
      'Define what to do if information is missing'
    ]
  },
  {
    id: 'pt-context',
    title: 'Context packing',
    summary: 'Give the model the facts, documents, and business constraints it cannot invent reliably.',
    tips: [
      'Paste source text or structured data',
      'Label sections clearly',
      'Separate instructions from reference material'
    ]
  },
  {
    id: 'pt-roles',
    title: 'Role and audience prompting',
    summary: 'Assign a useful expert role and name the reader so tone and depth fit.',
    tips: [
      'Use roles that imply standards (e.g., auditor, editor)',
      'Name the audience explicitly',
      'Avoid theatrical roles that encourage fluff'
    ]
  },
  {
    id: 'pt-formats',
    title: 'Output formats',
    summary: 'Request tables, JSON, bullet frameworks, or templates to make results usable.',
    tips: [
      'Show a schema or column list',
      'Ask for "JSON only" when integrating systems',
      'Request both draft and checklist when quality matters'
    ]
  },
  {
    id: 'pt-fewshot',
    title: 'Zero-shot vs few-shot',
    summary: 'Examples teach style and structure faster than adjectives alone.',
    tips: [
      'Provide 1-3 high-quality examples',
      'Keep example format identical to desired output',
      'Use zero-shot for simple, well-known tasks'
    ]
  },
  {
    id: 'pt-chain',
    title: 'Step-by-step reasoning',
    summary: 'Ask for ordered reasoning on multi-part problems, then a concise final answer.',
    tips: [
      'Request steps before the conclusion',
      'Ask the model to list assumptions',
      'Verify calculations independently'
    ]
  },
  {
    id: 'pt-critique',
    title: 'Critique and revision loops',
    summary: 'Have the model grade its draft against a rubric, then revise.',
    tips: [
      'Provide an explicit rubric',
      'Separate critique from rewrite turns',
      'Keep human final approval for high-stakes content'
    ]
  },
  {
    id: 'pt-safety',
    title: 'Guardrails in prompts',
    summary: 'Tell the model what not to invent, what to refuse, and how to handle sensitive data.',
    tips: [
      'Ban fabricated citations',
      'Require "I don\'t know" when evidence is missing',
      'Remind: do not include secrets or PII in prompts'
    ]
  }
];

const AF_PROMPT_EXERCISES = [
  {
    id: 'ex1',
    title: 'Meeting summary for executives',
    topicId: 'pt-clarity',
    basicPrompt: 'Summarize this meeting.',
    improvedPrompt:
      'You are an executive communications assistant. Summarize the meeting notes below for a VP audience in under 180 words. Use headings: Decisions, Actions (owner + due date), Risks, Open questions. If an owner or date is missing, write "TBD". Do not invent attendees or commitments.\n\nMeeting notes:\n[PASTE]',
    improvementsExplain:
      'Adds role, audience, length, structure, and a no-invention rule so the summary is decision-ready instead of a vague paragraph.',
    expectedOutput:
      'A short structured brief with the four headings, concrete actions, and TBD markers where metadata is missing.'
  },
  {
    id: 'ex2',
    title: 'Customer email with constraints',
    topicId: 'pt-roles',
    basicPrompt: 'Write an email apologizing for a delay.',
    improvedPrompt:
      'You are a senior customer success manager. Draft a professional apology email to a B2B customer about a 5-day shipment delay. Tone: accountable, calm, not defensive. Under 140 words. Include: brief apology, cause in one sentence (supplier backlog), new ETA of March 21, one goodwill offer (10% shipping credit), and a clear next step. Subject line + body. Do not blame the customer.',
    improvementsExplain:
      'Specifies persona, tone, length, required facts, and a goodwill offer so the draft is usable with light editing.',
    expectedOutput:
      'Subject line plus a concise email covering apology, cause, ETA, credit, and next step without blame language.'
  },
  {
    id: 'ex3',
    title: 'Structured extraction to JSON',
    topicId: 'pt-formats',
    basicPrompt: 'Extract the company details from this text.',
    improvedPrompt:
      'Extract company information as JSON only with this schema: {"name":string|null,"industry":string|null,"hq_city":string|null,"employees":number|null,"founded_year":number|null}. Use null for missing fields. Do not add commentary.\n\nText:\n[PASTE]',
    improvementsExplain:
      'A fixed schema and "JSON only" instruction make output machine-readable and reduce hallucinated fields.',
    expectedOutput:
      'A single JSON object matching the schema with nulls where the source text lacks data.'
  },
  {
    id: 'ex4',
    title: 'Few-shot support replies',
    topicId: 'pt-fewshot',
    basicPrompt: 'Answer this refund request nicely.',
    improvedPrompt:
      'Write support replies in our style. Examples:\nUser: "Where is my order?"\nAgent: "Happy to help-your order 18422 shipped yesterday via UPS; tracking is in your account. ETA 2-3 business days. Want me to check an address update?"\nUser: "This arrived damaged."\nAgent: "Sorry about that. I can send a replacement today or refund within 24 hours-which do you prefer?"\n\nNow reply to: "I was charged twice for invoice 9921." Keep under 80 words, offer investigation + timeline.',
    improvementsExplain:
      'Examples encode tone, brevity, and offer-next-step patterns better than adjectives like "nicely."',
    expectedOutput:
      'A short, empathetic reply acknowledging the double charge, stating investigation steps, and giving a clear timeline.'
  },
  {
    id: 'ex5',
    title: 'Step-by-step analysis',
    topicId: 'pt-chain',
    basicPrompt: 'Is this marketing campaign a good idea?',
    improvedPrompt:
      'Evaluate the campaign idea below. First list assumptions. Then score Fit, Cost risk, Measurability, and Brand risk from 1-5 with one sentence each. Then give a Go / Modify / No-go recommendation with the single biggest risk and one mitigation. Keep total under 250 words.\n\nIdea:\n[PASTE]',
    improvementsExplain:
      'Forces explicit assumptions and a scoring rubric so the answer is comparable across ideas, not just vibes.',
    expectedOutput:
      'Assumptions list, four scored dimensions, and a clear recommendation with risk + mitigation.'
  },
  {
    id: 'ex6',
    title: 'Rubric-based revision',
    topicId: 'pt-critique',
    basicPrompt: 'Make this blog post better.',
    improvedPrompt:
      'Critique the draft against this rubric (0-2 each): clarity, evidence, CTA strength, SEO title quality. Show a score table, then rewrite the draft to raise any 0-1 scores. Preserve factual claims; mark [NEED SOURCE] where evidence is missing.\n\nDraft:\n[PASTE]',
    improvementsExplain:
      'Separates evaluation from rewrite and introduces a source marker to reduce polished-but-empty content.',
    expectedOutput:
      'A score table followed by an improved draft with [NEED SOURCE] markers where claims lack support.'
  },
  {
    id: 'ex7',
    title: 'Context-grounded policy Q&A',
    topicId: 'pt-context',
    basicPrompt: 'What is our travel policy for hotels?',
    improvedPrompt:
      'Answer using ONLY the policy excerpt below. Quote the relevant sentence. If the excerpt does not contain the answer, reply exactly: "Not specified in the provided policy." Do not use outside knowledge.\n\nPolicy excerpt:\n[PASTE]\n\nQuestion: What is the maximum hotel rate for domestic travel?',
    improvementsExplain:
      'Grounding instructions reduce hallucinations on internal policy-critical for workplace AI.',
    expectedOutput:
      'Either a quoted answer from the excerpt or the exact fallback sentence when missing.'
  },
  {
    id: 'ex8',
    title: 'Safe research briefing',
    topicId: 'pt-safety',
    basicPrompt: 'Give me citations about quantum computing breakthroughs this year.',
    improvedPrompt:
      'Create a briefing on notable quantum computing developments. Rules: (1) Do not invent paper titles, authors, dates, or URLs. (2) If you are not confident a source exists, omit it and say what to search. (3) Separate "Verified from my knowledge" vs "Needs live verification." (4) Provide 5 search queries I can run on official labs and arXiv. Max 200 words.',
    improvementsExplain:
      'Blocks fake citations-a common failure mode-and pushes the user toward verifiable search.',
    expectedOutput:
      'A cautious briefing without fabricated references, plus explicit search queries for verification.'
  }
];
