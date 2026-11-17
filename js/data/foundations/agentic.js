/* AI Literacy Hub - Agentic AI awareness (classic script, no modules) */
const AF_AGENTIC = {
  overview: {
    title: 'Agentic AI - Awareness Level',
    summary:
      'Agentic AI systems can pursue goals by planning steps, using tools, and adapting based on results-with humans still accountable for outcomes. This module builds literacy, not implementation expertise.',
    keyTakeaways: [
      'An AI assistant answers questions; an AI agent takes multi-step actions toward a goal.',
      'Agents typically combine an LLM brain with tools (search, code, calendars, APIs) and memory.',
      'Multi-agent systems divide work among specialized agents that coordinate.',
      'Autonomy increases capability and risk-oversight, permissions, and audit trails matter.',
      'Most workplace value today comes from assisted workflows, not fully unsupervised agents.'
    ],
    whenToUse:
      'Use agentic patterns for multi-step tasks with clear goals, reversible actions, and tool access-e.g., research + draft + file organization-always with human checkpoints for high-stakes steps.',
    risks: [
      'Runaway actions if tools have broad permissions',
      'Compounded errors across steps',
      'Privacy exposure when agents access enterprise systems',
      'Overtrust in fluent but incorrect intermediate reasoning'
    ]
  },
  concepts: [
    {
      id: 'agc-goal',
      term: 'Goal-directed behavior',
      explanation:
        'Unlike a single Q&A turn, an agent is given an outcome (e.g., "prepare a competitive brief") and works until the goal is met or stopped.',
      example: '"Find three vendor options, compare pricing pages, and draft a recommendation memo."'
    },
    {
      id: 'agc-planning',
      term: 'Planning and decomposition',
      explanation:
        'Agents break goals into subtasks, order them, and revise the plan when a step fails or new information appears.',
      example: 'Research -> extract facts -> validate sources -> outline -> draft -> self-check against rubric.'
    },
    {
      id: 'agc-tools',
      term: 'Tool use',
      explanation:
        'Agents call external capabilities: web search, calculators, databases, email, ticket systems, or code runners-instead of only generating text.',
      example: 'An agent queries a CRM API for open deals, then drafts follow-up emails for human approval.'
    },
    {
      id: 'agc-memory',
      term: 'Memory and state',
      explanation:
        'Short-term state tracks the current run; longer-term memory may store preferences, prior results, or project files.',
      example: 'Remembering brand voice guidelines across a week-long content campaign.'
    },
    {
      id: 'agc-reflection',
      term: 'Reflection and critique',
      explanation:
        'Some agents review their own drafts against criteria, retry failed tool calls, or ask for clarification.',
      example: 'After drafting a report, the agent checks that every claim has a cited source URL.'
    },
    {
      id: 'agc-human',
      term: 'Human-in-the-loop',
      explanation:
        'Humans approve sensitive actions, set policies, and remain accountable. Literacy means knowing where to place checkpoints.',
      example: 'Agent prepares a wire transfer request; a finance manager must approve before any payment API runs.'
    },
    {
      id: 'agc-multi',
      term: 'Multi-agent collaboration',
      explanation:
        'Specialized agents (researcher, writer, reviewer, executor) hand off work. Coordination patterns include supervisor agents or shared task boards.',
      example: 'One agent scrapes specs; another drafts a comparison table; a third flags compliance risks.'
    },
    {
      id: 'agc-eval',
      term: 'Evaluation and guardrails',
      explanation:
        'Measure task success, cost, latency, and safety. Guardrails limit tools, domains, spend, and data access.',
      example: 'Allow read-only CRM access; block delete and export of full customer lists.'
    }
  ],
  comparison: [
    {
      level: 'Traditional software',
      autonomy: 'None - follows fixed rules',
      input: 'Structured forms, buttons, APIs',
      behavior: 'Deterministic workflows coded in advance',
      strengths: 'Predictable, auditable, efficient for known processes',
      limits: 'Brittle when requirements change; poor at unstructured language',
      example: 'Payroll calculator, inventory reorder rules, expense policy engine'
    },
    {
      level: 'AI assistant',
      autonomy: 'Low - responds turn by turn',
      input: 'Natural language prompts',
      behavior: 'Generates answers, drafts, and explanations in conversation',
      strengths: 'Flexible language understanding; fast drafting and summarization',
      limits: 'Does not independently pursue multi-step goals or act in systems unless you drive each step',
      example: 'ChatGPT, Claude, or Copilot helping rewrite an email you paste in'
    },
    {
      level: 'AI agent',
      autonomy: 'Medium - plans and acts toward a goal',
      input: 'Goal + permissions + tools',
      behavior: 'Decomposes tasks, calls tools, iterates until done or blocked',
      strengths: 'Handles multi-step work; reduces manual switching between apps',
      limits: 'Errors can cascade; needs guardrails, monitoring, and clear stop conditions',
      example: 'An agent that researches vendors, fills a comparison sheet, and opens a draft PR for review'
    },
    {
      level: 'Multi-agent system',
      autonomy: 'Higher - coordinated specialists',
      input: 'Shared goals, roles, and orchestration rules',
      behavior: 'Multiple agents collaborate, critique, and hand off artifacts',
      strengths: 'Scales complex workflows; parallel specialization',
      limits: 'Harder to debug; higher cost; governance and identity become critical',
      example: 'Research agent + writing agent + compliance reviewer agent producing a regulated client brief'
    }
  ]
};
