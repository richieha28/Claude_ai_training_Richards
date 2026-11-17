/* AI Literacy Hub - Workplace AI by function (classic script, no modules) */
const AF_WORKPLACE = [
  {
    id: 'wp-finance',
    function: 'Finance',
    problems: [
      'Month-end close documentation takes too long',
      'Variance narratives are inconsistent',
      'Policy questions bury the help desk',
      'Fraud and anomaly review queues grow faster than headcount'
    ],
    applications: [
      'Draft variance explanations from ledger notes',
      'Summarize board packs and earnings prep',
      'Extract terms from contracts and invoices',
      'Assist forecasting commentary (human-validated)'
    ],
    tools: ['Microsoft 365 Copilot', 'ChatGPT Enterprise / Claude for Work', 'Document AI / OCR', 'Excel + Python assistants'],
    automationExamples: [
      'AI drafts first-pass flux commentary; controller edits and signs off',
      'Invoice fields extracted into ERP staging with exception review',
      'Policy chatbot answers travel & expense questions with cited policy sections'
    ],
    skillsNeeded: ['Financial judgment', 'Data literacy', 'Prompting for tables/narratives', 'Control awareness'],
    careerImplications: 'Analysts who combine domain rigor with AI-assisted analysis move faster into FP&A leadership; pure data-entry tasks shrink.'
  },
  {
    id: 'wp-hr',
    function: 'HR',
    problems: [
      'High volume of repetitive employee questions',
      'Job descriptions and interview kits vary in quality',
      'Learning content is slow to update',
      'Sentiment in surveys is hard to synthesize'
    ],
    applications: [
      'Draft JDs and interview scorecards',
      'Summarize engagement survey themes',
      'Create onboarding checklists and FAQs',
      'Assist policy plain-language rewrites'
    ],
    tools: ['Microsoft Copilot', 'ChatGPT / Claude', 'HRIS copilots', 'Survey analytics + GenAI summaries'],
    automationExamples: [
      'Chatbot answers benefits questions with approved knowledge base',
      'AI drafts offer-letter variants from templates for recruiter review',
      'Manager coaching tips generated from competency frameworks'
    ],
    skillsNeeded: ['Employment law awareness', 'Empathy', 'Bias vigilance', 'Clear writing'],
    careerImplications: 'HR partners who govern AI use (privacy, fairness) become more valuable than those who only generate more content.'
  },
  {
    id: 'wp-ops',
    function: 'Ops',
    problems: [
      'SOPs outdated or hard to find',
      'Incident write-ups inconsistent',
      'Shift handovers lose context',
      'Root-cause analysis takes too long'
    ],
    applications: [
      'Generate and update SOPs from tribal knowledge',
      'Summarize incident tickets into RCA drafts',
      'Create training quizzes from procedures',
      'Translate ops notes into dashboards narratives'
    ],
    tools: ['Notion AI', 'Copilot', 'ServiceNow + GenAI', 'Process mining + assistants'],
    automationExamples: [
      'Ticket triaging suggestions based on historical resolutions',
      'Auto-draft shift handover from closed tickets',
      'SOP chatbot for floor staff with citations'
    ],
    skillsNeeded: ['Process thinking', 'Safety culture', 'Exception handling', 'Prompt libraries'],
    careerImplications: 'Ops leaders who redesign work around human-AI loops outperform those who only add chatbots on broken processes.'
  },
  {
    id: 'wp-procurement',
    function: 'Procurement',
    problems: [
      'RFP responses and comparisons are manual',
      'Contract risk language is time-consuming to review',
      'Supplier research is scattered',
      'Savings narratives lack structure'
    ],
    applications: [
      'Draft RFP sections and evaluation rubrics',
      'Compare supplier proposals side-by-side',
      'Flag unusual contract clauses for legal review',
      'Summarize market research packs'
    ],
    tools: ['Claude / ChatGPT for long documents', 'Contract analytics tools', 'Excel copilots', 'Spend analytics platforms'],
    automationExamples: [
      'Proposal intake -> structured comparison table -> buyer review',
      'Clause extraction into risk checklist',
      'Supplier due-diligence summary from public filings'
    ],
    skillsNeeded: ['Negotiation judgment', 'Risk awareness', 'Structured prompting', 'Vendor management'],
    careerImplications: 'Buyers who use AI for analysis while owning commercial judgment remain central; template-only roles compress.'
  },
  {
    id: 'wp-cs',
    function: 'Customer Service',
    problems: [
      'Repetitive tier-1 questions',
      'Inconsistent tone across agents',
      'Knowledge articles go stale',
      'Long handle times on complex tickets'
    ],
    applications: [
      'Agent-assist reply drafts with knowledge citations',
      'Ticket summarization and disposition coding',
      'Knowledge article drafting from resolved tickets',
      'Sentiment and escalation risk hints'
    ],
    tools: ['Zendesk/Salesforce Einstein/Copilot-style assists', 'ChatGPT Enterprise', 'Contact center AI', 'Knowledge bases'],
    automationExamples: [
      'Suggested replies with mandatory human send for refunds',
      'Auto-summarize chat history when escalating to tier-2',
      'FAQ draft generation after spike topics'
    ],
    skillsNeeded: ['Empathy', 'Policy accuracy', 'Escalation judgment', 'QA of AI drafts'],
    careerImplications: 'Agents become exception handlers and relationship owners; AI handles first drafts and lookups under supervision.'
  },
  {
    id: 'wp-marketing',
    function: 'Marketing',
    problems: [
      'Content demand exceeds team capacity',
      'Message consistency across channels slips',
      'Research synthesis is slow',
      'Creative testing needs more variants'
    ],
    applications: [
      'Draft campaign copy and variants',
      'Summarize customer interviews',
      'Generate image concepts for designers',
      'Build brief and competitive landscapes'
    ],
    tools: ['ChatGPT / Claude', 'Midjourney / Adobe Firefly', 'Canva Magic Studio', 'SEO assistants'],
    automationExamples: [
      'Brief -> outline -> draft -> brand checklist -> human edit',
      'Social variants generated from one approved master',
      'Research digest from uploaded reports'
    ],
    skillsNeeded: ['Brand voice', 'Fact-checking', 'Audience insight', 'Creative direction'],
    careerImplications: 'Strategists and editors rise; pure production volume work is heavily AI-augmented.'
  },
  {
    id: 'wp-eng',
    function: 'Software Dev',
    problems: [
      'Boilerplate and tests slow delivery',
      'Legacy code is poorly documented',
      'PR review bottlenecks',
      'Onboarding to large codebases is hard'
    ],
    applications: [
      'Code completion and refactor suggestions',
      'Generate unit tests and docstrings',
      'Explain unfamiliar modules',
      'Draft PR descriptions and migration plans'
    ],
    tools: ['GitHub Copilot', 'Cursor', 'Claude / ChatGPT', 'Amazon Q Developer'],
    automationExamples: [
      'AI-suggested tests gated by CI',
      'Doc generation from code with engineer review',
      'Incident postmortem draft from logs + timeline notes'
    ],
    skillsNeeded: ['Software fundamentals', 'Code review', 'Security awareness', 'System design'],
    careerImplications: 'Developers who specify, review, and integrate AI output outperform those who paste uncritically.'
  },
  {
    id: 'wp-pm',
    function: 'Project Mgmt',
    problems: [
      'Status reports consume meeting time',
      'Risks and decisions poorly documented',
      'Stakeholder updates inconsistent',
      'Lessons learned are rarely captured'
    ],
    applications: [
      'Draft status reports from ticket exports',
      'Turn meeting notes into action logs',
      'Risk register language cleanup',
      'Create RAID logs and decision records'
    ],
    tools: ['Microsoft Copilot', 'Notion AI', 'ChatGPT / Claude', 'Jira/Asana + AI summaries'],
    automationExamples: [
      'Weekly status auto-draft from Jira + calendar notes',
      'Meeting transcript -> decisions/actions table',
      'Charter first draft from intake form'
    ],
    skillsNeeded: ['Facilitation', 'Risk judgment', 'Stakeholder management', 'Structured writing'],
    careerImplications: 'PMs who use AI for admin shift time to leadership, negotiation, and delivery risk-raising the bar for the role.'
  },
  {
    id: 'wp-consulting',
    function: 'Consulting',
    problems: [
      'Research and synthesis under tight timelines',
      'Deck production overhead',
      'Interview notes hard to theme',
      'Proposal writing is repetitive'
    ],
    applications: [
      'Literature and market scan synthesis',
      'Interview theme extraction',
      'Proposal and SOW drafts',
      'Workshop agenda and facilitation guides'
    ],
    tools: ['Claude (long context)', 'ChatGPT', 'Perplexity', 'PowerPoint copilots'],
    automationExamples: [
      'Interview transcripts -> affinity themes -> insight slides (consultant edits)',
      'Proposal skeleton from RFP + past win library',
      'Competitor one-pagers from public sources with citations'
    ],
    skillsNeeded: ['Structured problem solving', 'Client communication', 'Source discipline', 'Storylining'],
    careerImplications: 'Consultants differentiated by judgment, relationships, and originality-not by typing speed.'
  },
  {
    id: 'wp-supply',
    function: 'Supply Chain',
    problems: [
      'Disruption signals buried in noise',
      'Planning commentary manual',
      'Supplier communications inconsistent',
      'Documentation for compliance audits is heavy'
    ],
    applications: [
      'Summarize disruption news for planners',
      'Draft supplier chase emails',
      'Explain forecast exceptions',
      'Generate audit evidence checklists'
    ],
    tools: ['Copilot + ERP exports', 'ChatGPT / Claude', 'Control tower analytics', 'Document AI'],
    automationExamples: [
      'Exception queue narratives for S&OP meetings',
      'ASN/document discrepancy explanations',
      'Playbook chatbot for warehouse SOPs'
    ],
    skillsNeeded: ['Supply chain fundamentals', 'Scenario thinking', 'Data interpretation', 'Vendor collaboration'],
    careerImplications: 'Planners who pair AI sensing with decisive action become control-tower leaders; spreadsheet-only work shrinks.'
  }
];
