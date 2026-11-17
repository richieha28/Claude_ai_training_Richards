/* AI Literacy Hub - Careers & assessment questions (classic script, no modules) */
const AF_CAREERS = [
  {
    id: 'role-ai-pm',
    title: 'AI Product Manager',
    category: 'Product',
    summary: 'Owns AI product strategy, prioritizes use cases, and balances user value with model limits, cost, and risk.',
    responsibilities: [
      'Define AI use cases and success metrics',
      'Partner with engineering, design, legal, and domain experts',
      'Prioritize data, model, and UX investments',
      'Set evaluation criteria and human-in-the-loop workflows'
    ],
    skillsNeeded: ['Product sense', 'AI literacy', 'Experiment design', 'Stakeholder communication', 'Ethics awareness'],
    toolsFamiliarity: ['ChatGPT/Claude/Gemini', 'Analytics', 'Issue trackers', 'Prototype tools'],
    typicalBackground: 'Product management, consulting, or technical program management with AI upskilling',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Senior AI PM -> Group PM -> Head of AI Product',
    dayInLife: 'Runs discovery interviews, reviews eval dashboards, writes PRDs for AI features, and gates launches on quality/safety checks.'
  },
  {
    id: 'role-prompt-engineer',
    title: 'Prompt Engineer / AI Interaction Designer',
    category: 'Design & Interaction',
    summary: 'Designs prompts, system instructions, and interaction patterns that make LLM applications reliable and usable.',
    responsibilities: [
      'Write and version prompts/system messages',
      'Build evaluation sets for quality and safety',
      'Collaborate on RAG content and tool schemas',
      'Document patterns for other teams'
    ],
    skillsNeeded: ['Clear writing', 'Structured thinking', 'Testing mindset', 'Domain empathy', 'Basic LLM concepts'],
    toolsFamiliarity: ['LLM playgrounds', 'Prompt libraries', 'Eval spreadsheets', 'API consoles'],
    typicalBackground: 'Content strategy, UX writing, QA, or software-plus deliberate prompting practice',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'AI Interaction Designer -> AI Solutions Designer -> Applied AI Lead',
    dayInLife: 'Iterates prompts against failure cases, A/B tests instructions, and packages reusable templates.'
  },
  {
    id: 'role-ai-ba',
    title: 'AI Business Analyst',
    category: 'Business',
    summary: 'Translates business problems into AI opportunities, requirements, and measurable process changes.',
    responsibilities: [
      'Map processes and identify automation candidates',
      'Write requirements and acceptance criteria for AI features',
      'Measure baseline vs. AI-assisted performance',
      'Train stakeholders on new workflows'
    ],
    skillsNeeded: ['Process mapping', 'Requirements writing', 'Data literacy', 'Change management', 'Prompting'],
    toolsFamiliarity: ['Microsoft Copilot / ChatGPT', 'Visio/Miro', 'Excel', 'Ticketing systems'],
    typicalBackground: 'Business analysis, operations excellence, or consulting',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Senior BA -> AI Value Lead -> Transformation Manager',
    dayInLife: 'Workshops with ops teams, drafts use-case briefs, and validates AI outputs against business rules.'
  },
  {
    id: 'role-ml-engineer',
    title: 'Machine Learning Engineer',
    category: 'Engineering',
    summary: 'Builds, trains, deploys, and monitors ML/LLM systems in production.',
    responsibilities: [
      'Implement model pipelines and inference services',
      'Optimize latency, cost, and quality',
      'Integrate retrieval, tools, and guardrails',
      'Monitor drift and failures'
    ],
    skillsNeeded: ['Python', 'ML frameworks', 'MLOps', 'Software engineering', 'Evaluation'],
    toolsFamiliarity: ['PyTorch/TensorFlow', 'Cloud AI platforms', 'Docker/K8s', 'Vector databases'],
    typicalBackground: 'Software engineering or data science with production experience',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Senior MLE -> Staff ML Engineer -> AI Platform Lead',
    dayInLife: 'Ships model endpoints, debugs eval regressions, and tightens CI for AI pipelines.'
  },
  {
    id: 'role-data-scientist',
    title: 'Data Scientist',
    category: 'Data & Analytics',
    summary: 'Uses statistics and ML to extract insights, build predictive models, and advise decisions.',
    responsibilities: [
      'Explore data and define modeling approaches',
      'Validate assumptions and communicate uncertainty',
      'Partner with engineers to productionize models',
      'Support GenAI evaluation with metrics'
    ],
    skillsNeeded: ['Statistics', 'Python/R', 'Experimentation', 'Storytelling with data', 'Domain knowledge'],
    toolsFamiliarity: ['Notebooks', 'SQL', 'BI tools', 'ML libraries'],
    typicalBackground: 'Statistics, economics, engineering, or analytics',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Senior DS -> Lead DS -> Head of Data Science',
    dayInLife: 'Analyzes cohorts, prototypes models, and presents findings with clear caveats.'
  },
  {
    id: 'role-ethics',
    title: 'AI Ethics & Governance Specialist',
    category: 'Governance',
    summary: 'Designs policies, risk reviews, and oversight for responsible AI use across the organization.',
    responsibilities: [
      'Draft AI use policies and review boards',
      'Assess bias, privacy, and safety risks',
      'Coordinate audits and incident response',
      'Train employees on acceptable use'
    ],
    skillsNeeded: ['Risk frameworks', 'Policy writing', 'Cross-functional influence', 'Technical literacy', 'Privacy law awareness'],
    toolsFamiliarity: ['Policy portals', 'Risk registers', 'Model cards', 'Compliance tools'],
    typicalBackground: 'Compliance, legal, risk, or responsible-tech roles',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Governance Lead -> Head of Responsible AI -> Chief AI Risk Officer',
    dayInLife: 'Reviews high-risk use cases, updates guidelines, and advises product teams before launch.'
  },
  {
    id: 'role-architect',
    title: 'AI Solutions Architect',
    category: 'Architecture',
    summary: 'Designs end-to-end AI architectures spanning data, models, security, and integration.',
    responsibilities: [
      'Select build vs. buy and model hosting options',
      'Design RAG, agent, and integration patterns',
      'Ensure security, identity, and cost controls',
      'Guide delivery teams through reference architectures'
    ],
    skillsNeeded: ['Cloud architecture', 'Security', 'LLM application patterns', 'Stakeholder communication'],
    toolsFamiliarity: ['Azure/AWS/GCP AI services', 'API gateways', 'Vector DBs', 'Observability stacks'],
    typicalBackground: 'Solutions architecture or senior engineering',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Principal Architect -> Enterprise AI Architect',
    dayInLife: 'Whiteboards system designs, reviews threat models, and unblocks implementation teams.'
  },
  {
    id: 'role-enablement',
    title: 'AI Trainer / Enablement Lead',
    category: 'Learning & Change',
    summary: 'Builds AI literacy programs, workshops, and internal academies so employees use AI effectively.',
    responsibilities: [
      'Design curricula and assessments',
      'Run workshops and office hours',
      'Create prompt libraries and playbooks',
      'Measure adoption and skill uplift'
    ],
    skillsNeeded: ['Instructional design', 'Facilitation', 'AI literacy', 'Community building'],
    toolsFamiliarity: ['LMS', 'Claude/ChatGPT/Copilot', 'Slide/video tools', 'Survey tools'],
    typicalBackground: 'L&D, teaching, or internal communications with AI fluency',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Enablement Lead -> Head of AI Academy -> Chief Learning Officer (AI)',
    dayInLife: 'Delivers sessions, updates labs, and coaches teams on real work prompts.'
  },
  {
    id: 'role-consultant',
    title: 'AI Consultant',
    category: 'Consulting',
    summary: 'Advises clients on AI strategy, use-case prioritization, pilots, and operating models.',
    responsibilities: [
      'Diagnose readiness and data maturity',
      'Build business cases and roadmaps',
      'Facilitate pilots and vendor selection',
      'Transfer skills to client teams'
    ],
    skillsNeeded: ['Consulting toolkit', 'AI literacy', 'Storytelling', 'Workshop design', 'Vendor evaluation'],
    toolsFamiliarity: ['Productivity AI', 'Presentation tools', 'Cloud AI demos', 'Process mapping'],
    typicalBackground: 'Management consulting, industry SMEs, or technical consulting',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Senior Consultant -> Manager -> Partner / Practice Lead (AI)',
    dayInLife: 'Client workshops, deck storytelling, and pilot retrospectives with clear next bets.'
  },
  {
    id: 'role-automation',
    title: 'AI Automation Specialist',
    category: 'Operations',
    summary: 'Combines RPA, workflow tools, and GenAI to automate multi-step business processes.',
    responsibilities: [
      'Identify automation opportunities',
      'Build workflows with AI steps and human approvals',
      'Monitor exceptions and failure queues',
      'Document SOPs for hybrid human-AI work'
    ],
    skillsNeeded: ['Process thinking', 'Low-code/automation platforms', 'Prompting', 'QA', 'Security basics'],
    toolsFamiliarity: ['Power Automate', 'Zapier/Make', 'UiPath', 'Copilot Studio', 'LLM APIs'],
    typicalBackground: 'RPA, business ops, or citizen development',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Automation Lead -> Intelligent Automation Manager',
    dayInLife: 'Builds flows, tunes prompts for document extraction, and clears exception dashboards.'
  },
  {
    id: 'role-content',
    title: 'AI Content Strategist',
    category: 'Marketing & Content',
    summary: 'Uses generative AI to scale content while protecting brand voice, accuracy, and SEO quality.',
    responsibilities: [
      'Design AI-assisted content workflows',
      'Maintain brand and fact-check standards',
      'Create prompt systems for campaigns',
      'Measure engagement and quality'
    ],
    skillsNeeded: ['Editorial judgment', 'Brand voice', 'SEO basics', 'Prompting', 'Analytics'],
    toolsFamiliarity: ['Claude/ChatGPT', 'Midjourney/Firefly', 'CMS', 'SEO tools'],
    typicalBackground: 'Content marketing, journalism, or brand writing',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Senior Content Strategist -> Head of Content Ops (AI)',
    dayInLife: 'Briefs AI drafts, edits ruthlessly, and updates the team prompt library.'
  },
  {
    id: 'role-researcher',
    title: 'Applied AI Research Scientist',
    category: 'Research',
    summary: 'Advances model methods or applied techniques and translates research into product capability.',
    responsibilities: [
      'Design experiments and publish findings',
      'Improve model quality, efficiency, or safety',
      'Collaborate with product and engineering',
      'Track literature and emerging methods'
    ],
    skillsNeeded: ['Deep learning', 'Research methods', 'Math/stats', 'Scientific writing', 'Coding'],
    toolsFamiliarity: ['PyTorch', 'Research clusters', 'Experiment trackers', 'Paper tools'],
    typicalBackground: 'Graduate study in CS/ML or strong industry research track record',
    salaryNote: 'Compensation varies widely by region and company-research local ranges; do not rely on fixed numbers.',
    growthPath: 'Senior Research Scientist -> Staff/Principal Researcher',
    dayInLife: 'Runs experiments, reviews papers, and socializes results that unlock product bets.'
  }
];

const AF_CAREER_QUESTIONS = [
  {
    id: 'cq1',
    q: 'I enjoy translating messy business problems into clear requirements and measurable outcomes.',
    dimension: 'business_analysis',
    mapsTo: ['role-ai-ba', 'role-ai-pm', 'role-consultant']
  },
  {
    id: 'cq2',
    q: 'I like writing, editing, and designing conversations or instructions that shape AI behavior.',
    dimension: 'prompting_ux',
    mapsTo: ['role-prompt-engineer', 'role-content', 'role-enablement']
  },
  {
    id: 'cq3',
    q: 'I prefer building production systems, APIs, and reliable pipelines over slide decks.',
    dimension: 'engineering',
    mapsTo: ['role-ml-engineer', 'role-architect', 'role-automation']
  },
  {
    id: 'cq4',
    q: 'I am energized by statistics, experiments, and explaining uncertainty to decision makers.',
    dimension: 'data_science',
    mapsTo: ['role-data-scientist', 'role-researcher', 'role-ai-ba']
  },
  {
    id: 'cq5',
    q: 'I care deeply about policy, fairness, privacy, and preventing harmful AI outcomes.',
    dimension: 'governance',
    mapsTo: ['role-ethics', 'role-architect', 'role-ai-pm']
  },
  {
    id: 'cq6',
    q: 'I like teaching others and building programs that change how a whole organization works.',
    dimension: 'enablement',
    mapsTo: ['role-enablement', 'role-consultant', 'role-content']
  },
  {
    id: 'cq7',
    q: 'I enjoy connecting systems, automating workflows, and clearing operational bottlenecks.',
    dimension: 'automation',
    mapsTo: ['role-automation', 'role-architect', 'role-ai-ba']
  },
  {
    id: 'cq8',
    q: 'I want to advise multiple clients and craft roadmaps rather than own one product long-term.',
    dimension: 'consulting',
    mapsTo: ['role-consultant', 'role-architect', 'role-ai-pm']
  },
  {
    id: 'cq9',
    q: 'I am comfortable reading research papers and inventing new methods when needed.',
    dimension: 'research',
    mapsTo: ['role-researcher', 'role-ml-engineer', 'role-data-scientist']
  },
  {
    id: 'cq10',
    q: 'I thrive when balancing user needs, technical constraints, and go-to-market timing.',
    dimension: 'product',
    mapsTo: ['role-ai-pm', 'role-architect', 'role-consultant']
  },
  {
    id: 'cq11',
    q: 'I want my day-to-day work to stay close to writing, brand, and audience messaging.',
    dimension: 'content',
    mapsTo: ['role-content', 'role-prompt-engineer', 'role-enablement']
  },
  {
    id: 'cq12',
    q: 'I prefer designing secure, scalable cloud architectures over training models from scratch.',
    dimension: 'architecture',
    mapsTo: ['role-architect', 'role-ml-engineer', 'role-automation']
  }
];
