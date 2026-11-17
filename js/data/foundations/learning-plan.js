/* AI Literacy Hub - 10-day learning plan (classic script, no modules) */
const AF_LEARNING_PLAN = [
  {
    day: 1,
    title: 'AI landscape & vocabulary',
    objectives: [
      'Define AI, ML, deep learning, and generative AI in plain language',
      'List three workplace tasks AI can assist and three it should not own alone',
      'Identify hallucinations as a core risk'
    ],
    reading: [
      'Fundamentals: Introduction to AI topics 1-3',
      'Glossary: Artificial Intelligence, Machine Learning, Generative AI, Hallucination'
    ],
    examples: [
      'Rewrite a jargon-heavy AI blurb for a non-technical manager',
      'Sort 10 tools into assistant vs automation vs analytics'
    ],
    resources: ['AF_FUNDAMENTALS section A', 'AF_GLOSSARY categories AI FUNDAMENTALS'],
    checks: [
      'Can you explain GenAI vs predictive ML with one example each?',
      'Can you name two limitations of current LLMs?'
    ],
    exercises: [
      'Write a 120-word "AI at our company" primer for new hires',
      'Complete Day 1 quiz items from AF_QUIZ_FUNDAMENTALS (Beginner)'
    ],
    summary: 'You now share a common vocabulary and a realistic mental model of what AI is-and is not.',
    checklist: [
      'Read Intro topics 1-3',
      'Add 10 glossary terms to your notes',
      'Draft the new-hire primer',
      'Pass a 5-question self-check at >=80%'
    ]
  },
  {
    day: 2,
    title: 'Types of AI & where they show up',
    objectives: [
      'Distinguish narrow AI from AGI speculation',
      'Recognize supervised, unsupervised, and reinforcement learning patterns',
      'Map vision, language, and speech AI to business examples'
    ],
    reading: [
      'Fundamentals: Types of AI (all topics)',
      'Glossary: Narrow AI, Supervised Learning, Computer Vision, NLP'
    ],
    examples: [
      'Fraud detection as supervised learning',
      'Customer clustering as unsupervised learning'
    ],
    resources: ['AF_FUNDAMENTALS section B', 'Workplace cards for Finance and Customer Service'],
    checks: [
      'Give one example of generative vs discriminative AI',
      'Explain why AGI hype should not drive next quarter\'s roadmap alone'
    ],
    exercises: [
      'For your job function, list one vision, one language, and one predictive use case',
      'Label five news headlines as predictive, generative, or hybrid'
    ],
    summary: 'You can classify AI systems by learning style and modality instead of treating "AI" as one blob.',
    checklist: [
      'Finish Types of AI module',
      'Complete function mapping exercise',
      'Review 8 glossary terms',
      'Teach one concept to a colleague in 3 minutes'
    ]
  },
  {
    day: 3,
    title: 'How AI works (conceptual)',
    objectives: [
      'Explain training vs inference',
      'Describe data quality\'s impact on outcomes',
      'Recognize bias sources at a literacy level'
    ],
    reading: [
      'Fundamentals: How AI works',
      'Glossary: Training Data, Model, Parameters, Bias, Overfitting'
    ],
    examples: [
      'Why skewed historical hiring data can produce unfair rankings',
      'Why a model that memorizes training examples fails on new cases'
    ],
    resources: ['AF_FUNDAMENTALS section C', 'AF_GLOSSARY ADVANCED CONCEPTS (intro terms)'],
    checks: [
      'What is the difference between training and inference?',
      'Name two data quality issues that break AI projects'
    ],
    exercises: [
      'Sketch a simple pipeline: data -> train -> evaluate -> deploy -> monitor',
      'Write three questions you would ask a vendor about their training data'
    ],
    summary: 'You understand AI as a data-driven system lifecycle, not magic.',
    checklist: [
      'Read How AI works topics',
      'Draw the lifecycle sketch',
      'Draft vendor questions',
      'Self-quiz on bias and evaluation'
    ]
  },
  {
    day: 4,
    title: 'Large language models',
    objectives: [
      'Explain tokens and context windows',
      'Describe pretraining vs fine-tuning at a high level',
      'Apply grounding strategies against hallucinations'
    ],
    reading: [
      'Fundamentals: Understanding LLMs',
      'Glossary: LLM, Token, Context Window, Fine-tuning, RAG, Temperature'
    ],
    examples: [
      'Why a model may invent a citation',
      'How pasting a policy excerpt reduces guessing'
    ],
    resources: ['AF_FUNDAMENTALS section D', 'Prompt Lab grounding exercise'],
    checks: [
      'What happens when input exceeds the context window?',
      'When should you prefer retrieval over "from memory" answers?'
    ],
    exercises: [
      'Run prompt-lab exercise ex7 (policy Q&A)',
      'Explain LLMs to a friend using a next-word prediction analogy-then note its limits'
    ],
    summary: 'You can reason about LLM behavior, limits, and grounding without needing to train models.',
    checklist: [
      'Complete LLM module',
      'Finish grounding exercise',
      'Add RAG & token terms to notes',
      'List personal "verify before use" rules'
    ]
  },
  {
    day: 5,
    title: 'Prompt engineering lab',
    objectives: [
      'Apply clarity, context, format, and critique patterns',
      'Convert weak prompts into production-ready prompts',
      'Build a personal prompt checklist'
    ],
    reading: [
      'AF_PROMPT_TOPICS (all)',
      'Complete at least 4 AF_PROMPT_EXERCISES'
    ],
    examples: [
      'Before/after prompts from the Prompt Lab',
      'JSON extraction for automation handoff'
    ],
    resources: ['prompt-lab.js', 'Your real work emails/docs (redacted)'],
    checks: [
      'Does your prompt state audience, format, and no-invention rules?',
      'Can you show one few-shot improvement?'
    ],
    exercises: [
      'Upgrade three real work prompts using CTF + constraints',
      'Create a reusable template for meeting -> actions'
    ],
    summary: 'Prompting becomes a deliberate craft with reusable patterns.',
    checklist: [
      'Study all prompt topics',
      'Complete 4+ exercises',
      'Upgrade 3 real prompts',
      'Save templates to your notebook'
    ]
  },
  {
    day: 6,
    title: 'Tools landscape',
    objectives: [
      'Navigate chat, image, video, audio, coding, productivity, and platform tools',
      'Compare tools by audience and fit-not hype',
      'Build a shortlist for your role'
    ],
    reading: [
      'AF_TOOLS browse by category A-G',
      'AF_QUIZ_TOOLS practice set'
    ],
    examples: [
      'When to use Perplexity vs a document-grounded Claude Project',
      'When GitHub Copilot beats a general chatbot for code'
    ],
    resources: ['tools.js', 'features.js Feature of the Week items'],
    checks: [
      'Name one tool in each category A-G',
      'Explain pricingNote: why we never hardcode prices'
    ],
    exercises: [
      'Pick 5 tools for your team and write a one-line "use when" for each',
      'Score two chat assistants on privacy needs for your org'
    ],
    summary: 'You can navigate the tool market with a category map and selection criteria.',
    checklist: [
      'Browse all tool categories',
      'Build a 5-tool shortlist',
      'Complete tools quiz',
      'Read 3 feature updates'
    ]
  },
  {
    day: 7,
    title: 'Workplace applications',
    objectives: [
      'Map AI to your function\'s problems and workflows',
      'Design one human-in-the-loop automation example',
      'Identify skills to strengthen'
    ],
    reading: [
      'Your function card in AF_WORKPLACE',
      'Two adjacent functions for collaboration ideas'
    ],
    examples: [
      'Finance flux commentary draft + controller approval',
      'Support agent-assist replies with mandatory human send'
    ],
    resources: ['workplace.js', 'agentic.js overview'],
    checks: [
      'What must remain human-approved in your use case?',
      'Which metric proves value in 30 days?'
    ],
    exercises: [
      'Write a one-page use-case brief: problem, AI step, human gate, KPI, risks',
      'List data sources the AI would need-and which are off-limits'
    ],
    summary: 'AI literacy becomes operational: a scoped pilot with gates and metrics.',
    checklist: [
      'Read your workplace card',
      'Draft use-case brief',
      'Define KPI and human gate',
      'Peer-review with a colleague'
    ]
  },
  {
    day: 8,
    title: 'Agentic AI awareness & governance',
    objectives: [
      'Differentiate assistants, agents, and multi-agent systems',
      'List major governance risks',
      'Apply responsible AI principles to a pilot'
    ],
    reading: [
      'AF_AGENTIC overview, concepts, comparison',
      'Glossary: AI GOVERNANCE terms',
      'Relevant AF_CERTIFICATIONS for your path'
    ],
    examples: [
      'Agent with read-only CRM vs write permissions',
      'Runaway spend without tool budgets'
    ],
    resources: ['agentic.js', 'glossary governance', 'certifications.js'],
    checks: [
      'Where would you place human checkpoints?',
      'What audit trail do you need?'
    ],
    exercises: [
      'Fill a risk table: privacy, accuracy, security, overautomation',
      'Write an acceptable-use paragraph for your team'
    ],
    summary: 'You treat autonomy as a design choice with controls-not a default.',
    checklist: [
      'Study agentic comparison table',
      'Complete risk table',
      'Draft acceptable-use note',
      'Skim 2 certifications'
    ]
  },
  {
    day: 9,
    title: 'Careers, skills & learning credentials',
    objectives: [
      'Identify 2-3 fitting AI-era roles',
      'Map skills gaps from AF_CAREER_QUESTIONS',
      'Choose a certification learning path to explore'
    ],
    reading: [
      'AF_CAREERS (all 12)',
      'Answer AF_CAREER_QUESTIONS honestly',
      'AF_CERTIFICATIONS for Google/Microsoft/Oracle/NVIDIA'
    ],
    examples: [
      'BA -> AI Business Analyst path',
      'Developer -> ML Engineer vs AI Solutions Architect fork'
    ],
    resources: ['careers.js', 'certifications.js'],
    checks: [
      'Which three questions scored highest for you?',
      'Which credential matches your next 90 days?'
    ],
    exercises: [
      'Write a 90-day skill plan with weekly practice blocks',
      'Update your resume with AI-assisted projects (honest scope)'
    ],
    summary: 'You connect literacy to a personal career narrative and credential plan.',
    checklist: [
      'Complete career questions',
      'Shortlist 3 roles',
      'Pick 1 certification page to open',
      'Draft 90-day plan'
    ]
  },
  {
    day: 10,
    title: 'Capstone assessment & habit building',
    objectives: [
      'Demonstrate fundamentals knowledge under quiz conditions',
      'Ship one workplace artifact created with disciplined prompting',
      'Set a weekly AI practice habit'
    ],
    reading: [
      'Review weak glossary terms',
      'Skim Feature of the Week items for ongoing awareness'
    ],
    examples: [
      'Capstone: policy FAQ bot brief, marketing brief pack, or ops SOP refresh'
    ],
    resources: [
      'AF_QUIZ_FUNDAMENTALS (50)',
      'AF_QUIZ_GLOSSARY',
      'AF_QUIZ_TOOLS',
      'features.js'
    ],
    checks: [
      'Fundamentals quiz >=80%',
      'Can you explain one agent vs assistant example?',
      'Do you have a recurring practice block on your calendar?'
    ],
    exercises: [
      'Take full fundamentals quiz (50)',
      'Deliver capstone artifact + reflection (what failed, what you verified)',
      'Schedule a weekly 45-minute AI lab'
    ],
    summary: 'You finish with assessed knowledge, a real artifact, and a habit loop to keep learning as tools change.',
    checklist: [
      'Score >=80% on fundamentals quiz',
      'Complete glossary & tools quizzes',
      'Submit capstone + reflection',
      'Calendar the weekly lab'
    ]
  }
];
