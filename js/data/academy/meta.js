// Notion & n8n Automation Academy - pathway metadata (classic script global, no modules)
const AA_META = {
  title: 'Notion & n8n Automation Academy',
  subtitle: 'Learn how to organise your work in Notion, then automate everyday tasks with n8n - step by step, in plain language.',
  category: 'Workflow Automation & Productivity',
  pathway: 'Notion & n8n Automation Academy',
  freePolicy: 'You can complete this academy without paid tools. Use free Notion, install free n8n on your computer with Docker Desktop, and optional free AI options. Paid plans are never required.',
  audienceNote: 'Built for busy professionals. No coding background needed. We explain every idea in everyday language first, then show a simple practice step.',
  startHint: 'Begin with Course 1: Notion. Finish a module whenever you have 20-40 minutes.',
  courses: [
    {
      id: 'notion',
      title: 'Course 1: Notion Basics to Pro',
      shortTitle: '1. Notion',
      level: 'Beginner friendly',
      modules: 10,
      durationHours: 12,
      blurb: 'Set up pages, lists, and simple databases so your notes, tasks, and projects stay organised.',
      plainGoal: 'By the end you can build a personal and team workspace without feeling lost.',
      color: '#0ea5e9'
    },
    {
      id: 'n8n',
      title: 'Course 2: Automation with n8n',
      shortTitle: '2. Automation',
      level: 'Beginner friendly',
      modules: 12,
      durationHours: 16,
      blurb: 'Learn what automation is, install n8n for free on Windows, and build simple workflows that save time.',
      plainGoal: 'By the end you can run useful automations on your own computer without paying for Cloud.',
      color: '#f97316'
    },
    {
      id: 'integration',
      title: 'Course 3: Connect Notion + Automation + AI',
      shortTitle: '3. Connect it all',
      level: 'Guided next step',
      modules: 10,
      durationHours: 12,
      blurb: 'Connect Notion and n8n so tasks, notes, and reports update automatically - with AI help where it is useful.',
      plainGoal: 'By the end you can design a simple AI-assisted work system with human checks.',
      color: '#8b5cf6'
    }
  ]
};

const AA_BADGES = [
  { id: 'notion-starter', title: 'Notion Starter', description: 'Finished the first 3 Notion modules.', icon: 'N1', requirement: { course: 'notion', modulesCompleted: 3 } },
  { id: 'notion-architect', title: 'Notion Builder', description: 'Finished all Notion modules and the final project.', icon: 'N2', requirement: { course: 'notion', modulesCompleted: 10 } },
  { id: 'n8n-installer', title: 'Setup Success', description: 'Got n8n running locally (module 2).', icon: 'A1', requirement: { course: 'n8n', modulesCompleted: 2 } },
  { id: 'workflow-builder', title: 'Workflow Builder', description: 'Finished the core automation modules (1-7).', icon: 'A2', requirement: { course: 'n8n', modulesCompleted: 7 } },
  { id: 'agent-engineer', title: 'Automation Pro', description: 'Finished the full n8n course including the final project.', icon: 'A3', requirement: { course: 'n8n', modulesCompleted: 12 } },
  { id: 'integrator', title: 'Connector', description: 'Finished the first half of the integration course.', icon: 'I1', requirement: { course: 'integration', modulesCompleted: 5 } },
  { id: 'governance-lead', title: 'Safe Automation', description: 'Finished the safety and governance module.', icon: 'I2', requirement: { course: 'integration', modulesCompleted: 9 } },
  { id: 'automation-architect', title: 'Academy Graduate', description: 'Finished all three courses.', icon: 'AA', requirement: { allCourses: true } },
  { id: 'quiz-ace', title: 'Quiz Ace', description: 'Scored 80% or higher on 10 quizzes.', icon: 'Q', requirement: { quizzesAbove80: 10 } },
  { id: 'free-stack-champion', title: 'Free Tools Champion', description: 'Completed the path using free tools only.', icon: 'F', requirement: { selfAttested: true } }
];
