// Notion & n8n Automation Academy - pathway metadata (classic script global, no modules)
const AA_META = {
  title: 'Notion & n8n Automation Academy',
  subtitle: 'Build a connected work system: organize knowledge in Notion, automate it with free self-hosted n8n, and add AI assistants with governance.',
  category: 'Workflow Automation & Productivity',
  pathway: 'Notion & n8n Automation Academy',
  freePolicy: 'Every lab in this pathway runs on free tools: Notion Free plan, n8n Community Edition self-hosted in Docker Desktop on Windows, and free-tier or local AI options. No paid n8n Cloud subscription is required.',
  courses: [
    {
      id: 'notion',
      title: 'Notion Mastery',
      level: 'Beginner to Advanced',
      modules: 10,
      durationHours: 12,
      blurb: 'From blocks and databases to relations, rollups, formulas, project systems, knowledge bases and a business-ready workspace.',
      color: '#0ea5e9'
    },
    {
      id: 'n8n',
      title: 'n8n Automation Mastery',
      level: 'Beginner to Advanced',
      modules: 12,
      durationHours: 16,
      blurb: 'Install n8n free with Docker Desktop on Windows, then master nodes, JSON, logic, APIs, webhooks, business flows, AI nodes and agents.',
      color: '#f97316'
    },
    {
      id: 'integration',
      title: 'Notion + n8n + AI Integration',
      level: 'Intermediate to Advanced',
      modules: 10,
      durationHours: 12,
      blurb: 'Combine both tools into real assistants: task automation, knowledge Q&A, meeting notes, project management, BI and governance.',
      color: '#8b5cf6'
    }
  ]
};

const AA_BADGES = [
  { id: 'notion-starter', title: 'Notion Starter', description: 'Completed Notion Mastery modules 1-3.', icon: 'N1', requirement: { course: 'notion', modulesCompleted: 3 } },
  { id: 'notion-architect', title: 'Notion Architect', description: 'Completed all 10 Notion Mastery modules and the capstone.', icon: 'N2', requirement: { course: 'notion', modulesCompleted: 10 } },
  { id: 'n8n-installer', title: 'n8n Installer', description: 'Completed module 2 and ran n8n locally in Docker Desktop.', icon: 'A1', requirement: { course: 'n8n', modulesCompleted: 2 } },
  { id: 'workflow-builder', title: 'Workflow Builder', description: 'Completed n8n modules 1-7 covering nodes, JSON, logic, APIs and webhooks.', icon: 'A2', requirement: { course: 'n8n', modulesCompleted: 7 } },
  { id: 'agent-engineer', title: 'Agent Engineer', description: 'Completed all 12 n8n modules including AI Agents and the capstone.', icon: 'A3', requirement: { course: 'n8n', modulesCompleted: 12 } },
  { id: 'integrator', title: 'Integrator', description: 'Completed integration modules 1-5.', icon: 'I1', requirement: { course: 'integration', modulesCompleted: 5 } },
  { id: 'governance-lead', title: 'Governance Lead', description: 'Completed AI Automation Governance (integration module 9).', icon: 'I2', requirement: { course: 'integration', modulesCompleted: 9 } },
  { id: 'automation-architect', title: 'Automation Architect', description: 'Completed all three courses and all three capstones.', icon: 'AA', requirement: { allCourses: true } },
  { id: 'quiz-ace', title: 'Quiz Ace', description: 'Scored 80 percent or higher on 10 module quizzes.', icon: 'Q', requirement: { quizzesAbove80: 10 } },
  { id: 'free-stack-champion', title: 'Free Stack Champion', description: 'Finished every lab without paying for a hosted automation service.', icon: 'F', requirement: { selfAttested: true } }
];
