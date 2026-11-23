// Workflow simulator data - node palette and sample workflows (classic script globals, ASCII only)
// The simulator is a learning tool: it models how data flows between nodes using sample items.
// It does NOT execute real n8n workflows.

const AA_SIM_NODES = [
  {
    type: 'manual',
    name: 'Manual Trigger',
    category: 'Trigger',
    color: '#16a34a',
    icon: 'M',
    inputs: 0,
    outputs: ['main'],
    description: 'Starts the workflow when you click Execute. Best for testing and one-off runs.',
    params: [],
    behavior: 'Emits the sample input items you provide.',
    freeVsPaid: 'FREE - core node in Community Edition.'
  },
  {
    type: 'schedule',
    name: 'Schedule Trigger',
    category: 'Trigger',
    color: '#16a34a',
    icon: 'S',
    inputs: 0,
    outputs: ['main'],
    description: 'Starts the workflow on a timer such as every weekday at 09:00. Your n8n instance must be running at that time.',
    params: [
      { key: 'rule', label: 'Run', type: 'text', default: 'Every weekday at 09:00' }
    ],
    behavior: 'Emits one item containing the run timestamp (or the sample items in the simulator).',
    freeVsPaid: 'FREE - core node. Local Docker only runs it while your PC is on.'
  },
  {
    type: 'webhook',
    name: 'Webhook',
    category: 'Trigger',
    color: '#16a34a',
    icon: 'W',
    inputs: 0,
    outputs: ['main'],
    description: 'Starts the workflow when another system sends an HTTP request to a URL. Use authentication for any public endpoint.',
    params: [
      { key: 'method', label: 'HTTP method', type: 'select', options: ['GET', 'POST'], default: 'POST' },
      { key: 'path', label: 'Path', type: 'text', default: 'support-intake' }
    ],
    behavior: 'Emits the request body, headers and query as an item.',
    freeVsPaid: 'FREE - core node. Localhost is not public; use a free tunnel only for testing external callers.'
  },
  {
    type: 'edit-fields',
    name: 'Edit Fields',
    category: 'Data',
    color: '#0ea5e9',
    icon: 'E',
    inputs: 1,
    outputs: ['main'],
    description: 'Creates, renames or removes fields on each item. Supports expressions such as {{ $json.qty * $json.price }}.',
    params: [
      { key: 'assignments', label: 'Fields to set', type: 'keyvalue', default: [] }
    ],
    behavior: 'Adds or overwrites the listed fields on every incoming item.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'filter',
    name: 'Filter',
    category: 'Logic',
    color: '#f59e0b',
    icon: 'F',
    inputs: 1,
    outputs: ['main'],
    description: 'Keeps only items that match your conditions and drops the rest.',
    params: [
      { key: 'field', label: 'Field', type: 'text', default: 'status' },
      { key: 'operator', label: 'Operator', type: 'select', options: ['equals', 'not equals', 'greater than', 'less than', 'contains'], default: 'equals' },
      { key: 'value', label: 'Value', type: 'text', default: '' }
    ],
    behavior: 'Passes matching items; non-matching items are removed.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'if',
    name: 'IF',
    category: 'Logic',
    color: '#f59e0b',
    icon: '?',
    inputs: 1,
    outputs: ['true', 'false'],
    description: 'Splits items into two paths based on a condition: true or false.',
    params: [
      { key: 'field', label: 'Field', type: 'text', default: 'amount' },
      { key: 'operator', label: 'Operator', type: 'select', options: ['equals', 'not equals', 'greater than', 'less than', 'contains'], default: 'greater than' },
      { key: 'value', label: 'Value', type: 'text', default: '1000' }
    ],
    behavior: 'Items matching the condition go to the true output; the rest go to false.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'switch',
    name: 'Switch',
    category: 'Logic',
    color: '#f59e0b',
    icon: 'SW',
    inputs: 1,
    outputs: ['route-0', 'route-1', 'route-2', 'fallback'],
    description: 'Routes each item to one of several outputs based on rules, with an optional fallback output.',
    params: [
      { key: 'field', label: 'Field to test', type: 'text', default: 'category' },
      { key: 'routes', label: 'Route values', type: 'list', default: ['Billing', 'Technical', 'Account'] }
    ],
    behavior: 'Sends each item to the first output whose rule matches; unmatched items go to fallback.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'merge',
    name: 'Merge',
    category: 'Logic',
    color: '#f59e0b',
    icon: 'MG',
    inputs: 2,
    outputs: ['main'],
    description: 'Combines items from two branches by appending, by position or by matching a key.',
    params: [
      { key: 'mode', label: 'Mode', type: 'select', options: ['append', 'combine by position', 'combine by key'], default: 'append' }
    ],
    behavior: 'Outputs the merged list of items.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'aggregate',
    name: 'Aggregate',
    category: 'Data',
    color: '#0ea5e9',
    icon: 'AG',
    inputs: 1,
    outputs: ['main'],
    description: 'Combines many items into one item containing a list, or computes totals.',
    params: [
      { key: 'field', label: 'Field to collect', type: 'text', default: 'amount' }
    ],
    behavior: 'Outputs a single item with an array of collected values.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'code',
    name: 'Code',
    category: 'Data',
    color: '#0ea5e9',
    icon: '</>',
    inputs: 1,
    outputs: ['main'],
    description: 'Runs custom JavaScript or Python for transformations that built-in nodes cannot do. Keep it small and commented.',
    params: [
      { key: 'language', label: 'Language', type: 'select', options: ['JavaScript', 'Python'], default: 'JavaScript' }
    ],
    behavior: 'Returns whatever items your code produces.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'http-request',
    name: 'HTTP Request',
    category: 'Integration',
    color: '#8b5cf6',
    icon: 'H',
    inputs: 1,
    outputs: ['main'],
    description: 'Calls any REST API. Use credentials for authentication and handle pagination and rate limits.',
    params: [
      { key: 'method', label: 'Method', type: 'select', options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], default: 'GET' },
      { key: 'url', label: 'URL', type: 'text', default: 'https://api.example.com/v1/items' }
    ],
    behavior: 'Outputs the API response as JSON items (simulated with sample data).',
    freeVsPaid: 'FREE - node is free. Some third-party APIs charge for usage.'
  },
  {
    type: 'notion',
    name: 'Notion',
    category: 'Integration',
    color: '#8b5cf6',
    icon: 'N',
    inputs: 1,
    outputs: ['main'],
    description: 'Reads or writes pages in a Notion database. The integration must be connected to the database first.',
    params: [
      { key: 'operation', label: 'Operation', type: 'select', options: ['Get Many', 'Create', 'Update', 'Search'], default: 'Create' },
      { key: 'database', label: 'Database', type: 'text', default: 'Tasks' }
    ],
    behavior: 'Outputs the created or returned pages (simulated).',
    freeVsPaid: 'FREE - node and Notion API on the Notion Free plan. Respect roughly 3 requests per second.'
  },
  {
    type: 'ai-classifier',
    name: 'AI Classifier',
    category: 'AI',
    color: '#ec4899',
    icon: 'AI',
    inputs: 1,
    outputs: ['main'],
    description: 'Uses a language model to label text with one of your allowed categories and an urgency score. Validate the result before acting on it.',
    params: [
      { key: 'categories', label: 'Allowed categories', type: 'list', default: ['Billing', 'Technical', 'Account', 'Other'] },
      { key: 'model', label: 'Model', type: 'select', options: ['Local (Ollama)', 'Free-tier API'], default: 'Local (Ollama)' }
    ],
    behavior: 'Adds category, urgency and reason fields (simulated with keyword rules).',
    freeVsPaid: 'FREE with Ollama or a free-tier key. Paid APIs are optional.'
  },
  {
    type: 'ai-agent',
    name: 'AI Agent',
    category: 'AI',
    color: '#ec4899',
    icon: 'AG+',
    inputs: 1,
    outputs: ['main'],
    description: 'A model that chooses tools and memory to complete a task. Prefer fixed workflows when the path is known; cap iterations and limit tool permissions.',
    params: [
      { key: 'tools', label: 'Tools', type: 'list', default: ['Search docs (read-only)'] },
      { key: 'maxIterations', label: 'Max iterations', type: 'number', default: 5 }
    ],
    behavior: 'Outputs an answer plus the list of tools used (simulated).',
    freeVsPaid: 'FREE node. Model usage is free only with a local model or free-tier limits.'
  },
  {
    type: 'wait',
    name: 'Wait',
    category: 'Logic',
    color: '#f59e0b',
    icon: 'T',
    inputs: 1,
    outputs: ['main'],
    description: 'Pauses the workflow for a set time or until a webhook resumes it. Useful for rate limits and approvals.',
    params: [
      { key: 'seconds', label: 'Wait (seconds)', type: 'number', default: 1 }
    ],
    behavior: 'Passes items through unchanged after the wait.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'respond-webhook',
    name: 'Respond to Webhook',
    category: 'Output',
    color: '#14b8a6',
    icon: 'R',
    inputs: 1,
    outputs: [],
    description: 'Returns a custom response and status code to the system that called your webhook.',
    params: [
      { key: 'status', label: 'Status code', type: 'number', default: 200 }
    ],
    behavior: 'Ends the path and records the response sent.',
    freeVsPaid: 'FREE - core node.'
  },
  {
    type: 'action',
    name: 'Action (Send / Create)',
    category: 'Output',
    color: '#14b8a6',
    icon: 'A',
    inputs: 1,
    outputs: [],
    description: 'Represents a final business action such as sending a chat message, creating a ticket or emailing a manager.',
    params: [
      { key: 'label', label: 'Action label', type: 'text', default: 'Notify team' }
    ],
    behavior: 'Ends the path and records the action that would be taken.',
    freeVsPaid: 'FREE node concept. The real app node depends on the service plan you use.'
  },
  {
    type: 'report',
    name: 'Report (Notion / Email)',
    category: 'Output',
    color: '#14b8a6',
    icon: 'RP',
    inputs: 1,
    outputs: [],
    description: 'Represents delivering a summary report to Notion, email or chat.',
    params: [
      { key: 'destination', label: 'Destination', type: 'select', options: ['Notion page', 'Email', 'Chat message'], default: 'Notion page' }
    ],
    behavior: 'Ends the path and records the report content.',
    freeVsPaid: 'FREE with Notion Free and a free email or chat tier.'
  },
  {
    type: 'output',
    name: 'Output',
    category: 'Output',
    color: '#14b8a6',
    icon: 'O',
    inputs: 1,
    outputs: [],
    description: 'A simple end node that shows the final items. In real n8n you would typically use a No Operation node or an app node here.',
    params: [
      { key: 'label', label: 'Label', type: 'text', default: 'Result' }
    ],
    behavior: 'Displays the items that arrive.',
    freeVsPaid: 'FREE - similar to the No Operation core node.'
  }
];

const AA_SAMPLE_WORKFLOWS = [
  // ---------------------------------------------------------------- 1
  {
    id: 'wf-expense-approval',
    title: 'Expense Check: Manual -> Edit Fields -> IF -> Output',
    level: 'Beginner',
    summary: 'A beginner workflow that takes expense claims, adds a computed total and routes large claims to review.',
    scenario: 'Finance wants claims over 1000 to go to a manager and smaller claims to be auto-approved.',
    learningGoals: [
      'See how a trigger sends items into the flow.',
      'Use Edit Fields with an expression to compute a total.',
      'Use IF to split items into true and false paths.'
    ],
    nodes: [
      { id: 'n1', type: 'manual', name: 'Manual Trigger', x: 40, y: 120, params: {} },
      { id: 'n2', type: 'edit-fields', name: 'Compute Total', x: 260, y: 120, params: { assignments: [{ name: 'total', value: '{{ $json.qty * $json.unitPrice }}' }] } },
      { id: 'n3', type: 'if', name: 'Is total over 1000?', x: 480, y: 120, params: { field: 'total', operator: 'greater than', value: '1000' } },
      { id: 'n4', type: 'output', name: 'Needs manager review', x: 720, y: 60, params: { label: 'Needs manager review' } },
      { id: 'n5', type: 'output', name: 'Auto-approved', x: 720, y: 190, params: { label: 'Auto-approved' } }
    ],
    connections: [
      { from: 'n1', fromOutput: 'main', to: 'n2' },
      { from: 'n2', fromOutput: 'main', to: 'n3' },
      { from: 'n3', fromOutput: 'true', to: 'n4' },
      { from: 'n3', fromOutput: 'false', to: 'n5' }
    ],
    sampleInput: [
      { employee: 'Asha', item: 'Conference ticket', qty: 2, unitPrice: 650 },
      { employee: 'Ben', item: 'Team lunch', qty: 6, unitPrice: 18 },
      { employee: 'Chen', item: 'Monitors', qty: 3, unitPrice: 420 }
    ],
    simulatedRun: [
      {
        nodeId: 'n1',
        outputs: { main: [
          { employee: 'Asha', item: 'Conference ticket', qty: 2, unitPrice: 650 },
          { employee: 'Ben', item: 'Team lunch', qty: 6, unitPrice: 18 },
          { employee: 'Chen', item: 'Monitors', qty: 3, unitPrice: 420 }
        ] },
        note: 'Three expense items enter the workflow.'
      },
      {
        nodeId: 'n2',
        outputs: { main: [
          { employee: 'Asha', item: 'Conference ticket', qty: 2, unitPrice: 650, total: 1300 },
          { employee: 'Ben', item: 'Team lunch', qty: 6, unitPrice: 18, total: 108 },
          { employee: 'Chen', item: 'Monitors', qty: 3, unitPrice: 420, total: 1260 }
        ] },
        note: 'The expression qty * unitPrice adds a total field to every item.'
      },
      {
        nodeId: 'n3',
        outputs: {
          'true': [
            { employee: 'Asha', item: 'Conference ticket', qty: 2, unitPrice: 650, total: 1300 },
            { employee: 'Chen', item: 'Monitors', qty: 3, unitPrice: 420, total: 1260 }
          ],
          'false': [
            { employee: 'Ben', item: 'Team lunch', qty: 6, unitPrice: 18, total: 108 }
          ]
        },
        note: 'Two items exceed 1000 and follow the true path; one item follows the false path.'
      },
      {
        nodeId: 'n4',
        outputs: {},
        received: [
          { employee: 'Asha', total: 1300 },
          { employee: 'Chen', total: 1260 }
        ],
        note: 'In a real workflow this is where a manager approval message would be sent.'
      },
      {
        nodeId: 'n5',
        outputs: {},
        received: [
          { employee: 'Ben', total: 108 }
        ],
        note: 'In a real workflow this would log an auto-approval in Notion.'
      }
    ],
    explanation: 'Each item is processed separately by every node. The IF node does not stop the flow; it splits items into two branches so both paths can continue.',
    tryNext: [
      'Change the IF threshold to 500 and run again.',
      'Add a Notion node after the true branch to create a review task.',
      'Add an error handler for items missing qty or unitPrice.'
    ],
    freeVsPaid: 'All nodes used here are core nodes in the free Community Edition.'
  },
  // ---------------------------------------------------------------- 2
  {
    id: 'wf-weekly-report',
    title: 'Weekly Report: Schedule -> Filter -> Report',
    level: 'Beginner',
    summary: 'A scheduled workflow that keeps only unresolved overdue tickets and sends a weekly summary.',
    scenario: 'A support lead wants a Monday report listing tickets that are still open and past their due date.',
    learningGoals: [
      'Understand how a Schedule Trigger starts a workflow without a click.',
      'Use Filter to keep only the items that matter.',
      'Deliver a summary to a destination such as Notion or email.'
    ],
    nodes: [
      { id: 's1', type: 'schedule', name: 'Every Monday 08:00', x: 40, y: 120, params: { rule: 'Every Monday at 08:00' } },
      { id: 's2', type: 'filter', name: 'Only open tickets', x: 270, y: 120, params: { field: 'status', operator: 'not equals', value: 'Resolved' } },
      { id: 's3', type: 'report', name: 'Send weekly report', x: 520, y: 120, params: { destination: 'Notion page' } }
    ],
    connections: [
      { from: 's1', fromOutput: 'main', to: 's2' },
      { from: 's2', fromOutput: 'main', to: 's3' }
    ],
    sampleInput: [
      { id: 'T-101', title: 'Cannot log in', status: 'Open', owner: 'Dana', daysOverdue: 3 },
      { id: 'T-102', title: 'Invoice question', status: 'Resolved', owner: 'Eli', daysOverdue: 0 },
      { id: 'T-103', title: 'Export fails', status: 'Investigating', owner: 'Dana', daysOverdue: 6 },
      { id: 'T-104', title: 'Update address', status: 'Resolved', owner: 'Farah', daysOverdue: 0 },
      { id: 'T-105', title: 'Refund delay', status: 'Open', owner: 'Eli', daysOverdue: 2 }
    ],
    simulatedRun: [
      {
        nodeId: 's1',
        outputs: { main: [
          { id: 'T-101', title: 'Cannot log in', status: 'Open', owner: 'Dana', daysOverdue: 3 },
          { id: 'T-102', title: 'Invoice question', status: 'Resolved', owner: 'Eli', daysOverdue: 0 },
          { id: 'T-103', title: 'Export fails', status: 'Investigating', owner: 'Dana', daysOverdue: 6 },
          { id: 'T-104', title: 'Update address', status: 'Resolved', owner: 'Farah', daysOverdue: 0 },
          { id: 'T-105', title: 'Refund delay', status: 'Open', owner: 'Eli', daysOverdue: 2 }
        ] },
        note: 'The schedule fires and the simulator supplies five sample tickets (in real n8n a Notion or API node would fetch them).'
      },
      {
        nodeId: 's2',
        outputs: { main: [
          { id: 'T-101', title: 'Cannot log in', status: 'Open', owner: 'Dana', daysOverdue: 3 },
          { id: 'T-103', title: 'Export fails', status: 'Investigating', owner: 'Dana', daysOverdue: 6 },
          { id: 'T-105', title: 'Refund delay', status: 'Open', owner: 'Eli', daysOverdue: 2 }
        ] },
        note: 'Two resolved tickets are dropped. Three unresolved tickets continue.'
      },
      {
        nodeId: 's3',
        outputs: {},
        received: [
          { summary: '3 unresolved tickets. Dana: 2 (max 6 days overdue). Eli: 1 (2 days overdue).' }
        ],
        note: 'The report node would write this summary to a Notion page or send it by email.'
      }
    ],
    explanation: 'Triggers can create their own input. Filter reduces the data early so later steps work only on relevant items. Reports should state the period and data source in a real build.',
    tryNext: [
      'Add an Aggregate node to count tickets per owner.',
      'Add an IF node to send a separate alert when any ticket is more than 5 days overdue.',
      'Add a Wait node and an error workflow for API failures.'
    ],
    freeVsPaid: 'Schedule Trigger and Filter are free core nodes. The local Docker setup only runs schedules while your PC and Docker Desktop are running.'
  },
  // ---------------------------------------------------------------- 3
  {
    id: 'wf-ai-triage',
    title: 'AI Triage: Webhook -> AI -> Switch -> Action',
    level: 'Intermediate',
    summary: 'A webhook receives support messages, an AI step classifies them, a Switch routes them and actions notify the right team.',
    scenario: 'A company wants incoming support messages to reach the correct team quickly, with unknown cases going to a human.',
    learningGoals: [
      'See how a webhook starts a workflow from an external request.',
      'Understand AI as a classification step with allowed categories.',
      'Route items with Switch including a fallback for uncertain results.'
    ],
    nodes: [
      { id: 'a1', type: 'webhook', name: 'Support Intake Webhook', x: 30, y: 150, params: { method: 'POST', path: 'support-intake' } },
      { id: 'a2', type: 'ai-classifier', name: 'Classify Message', x: 250, y: 150, params: { categories: ['Billing', 'Technical', 'Account', 'Other'], model: 'Local (Ollama)' } },
      { id: 'a3', type: 'switch', name: 'Route by Category', x: 480, y: 150, params: { field: 'category', routes: ['Billing', 'Technical', 'Account'] } },
      { id: 'a4', type: 'action', name: 'Notify Billing team', x: 730, y: 20, params: { label: 'Notify Billing team' } },
      { id: 'a5', type: 'action', name: 'Create Technical ticket', x: 730, y: 110, params: { label: 'Create Technical ticket' } },
      { id: 'a6', type: 'action', name: 'Notify Account team', x: 730, y: 200, params: { label: 'Notify Account team' } },
      { id: 'a7', type: 'action', name: 'Send to human review', x: 730, y: 290, params: { label: 'Send to human review' } }
    ],
    connections: [
      { from: 'a1', fromOutput: 'main', to: 'a2' },
      { from: 'a2', fromOutput: 'main', to: 'a3' },
      { from: 'a3', fromOutput: 'route-0', to: 'a4' },
      { from: 'a3', fromOutput: 'route-1', to: 'a5' },
      { from: 'a3', fromOutput: 'route-2', to: 'a6' },
      { from: 'a3', fromOutput: 'fallback', to: 'a7' }
    ],
    sampleInput: [
      { from: 'maria@example.com', message: 'I was charged twice for my subscription this month.' },
      { from: 'li@example.com', message: 'The export button gives an error 500 when I click it.' },
      { from: 'omar@example.com', message: 'Please update the owner name on my account.' },
      { from: 'zoe@example.com', message: 'Do you have a partner program?' }
    ],
    simulatedRun: [
      {
        nodeId: 'a1',
        outputs: { main: [
          { from: 'maria@example.com', message: 'I was charged twice for my subscription this month.' },
          { from: 'li@example.com', message: 'The export button gives an error 500 when I click it.' },
          { from: 'omar@example.com', message: 'Please update the owner name on my account.' },
          { from: 'zoe@example.com', message: 'Do you have a partner program?' }
        ] },
        note: 'Four requests arrive (the simulator replays them; a real webhook receives one request at a time).'
      },
      {
        nodeId: 'a2',
        outputs: { main: [
          { from: 'maria@example.com', message: 'I was charged twice for my subscription this month.', category: 'Billing', urgency: 3, reason: 'Mentions a duplicate charge.' },
          { from: 'li@example.com', message: 'The export button gives an error 500 when I click it.', category: 'Technical', urgency: 4, reason: 'Describes a server error.' },
          { from: 'omar@example.com', message: 'Please update the owner name on my account.', category: 'Account', urgency: 2, reason: 'Requests an account data change.' },
          { from: 'zoe@example.com', message: 'Do you have a partner program?', category: 'Other', urgency: 1, reason: 'General sales question.' }
        ] },
        note: 'The classifier adds category, urgency and reason (simulated). A real build should validate that category is in the allowed list.'
      },
      {
        nodeId: 'a3',
        outputs: {
          'route-0': [ { from: 'maria@example.com', category: 'Billing', urgency: 3 } ],
          'route-1': [ { from: 'li@example.com', category: 'Technical', urgency: 4 } ],
          'route-2': [ { from: 'omar@example.com', category: 'Account', urgency: 2 } ],
          'fallback': [ { from: 'zoe@example.com', category: 'Other', urgency: 1 } ]
        },
        note: 'Switch sends each item to the matching output. Category Other has no rule, so it uses the fallback path to a human.'
      },
      {
        nodeId: 'a4',
        outputs: {},
        received: [ { action: 'Notify Billing team', detail: 'Possible duplicate charge from maria@example.com' } ],
        note: 'A chat message or ticket for Billing would be created here.'
      },
      {
        nodeId: 'a5',
        outputs: {},
        received: [ { action: 'Create Technical ticket', detail: 'Export error 500 reported by li@example.com (urgency 4)' } ],
        note: 'A Notion or helpdesk ticket would be created with urgency 4.'
      },
      {
        nodeId: 'a6',
        outputs: {},
        received: [ { action: 'Notify Account team', detail: 'Owner name change request from omar@example.com' } ],
        note: 'The account team receives the request with the customer details.'
      },
      {
        nodeId: 'a7',
        outputs: {},
        received: [ { action: 'Send to human review', detail: 'Unclassified request from zoe@example.com' } ],
        note: 'A person decides what to do. This fallback is what makes AI routing safe.'
      }
    ],
    explanation: 'AI interprets the message but explicit workflow logic decides what happens next. The fallback path ensures unknown or invalid classifications always reach a human instead of being guessed.',
    tryNext: [
      'Add an IF before the Switch that sends urgency 5 messages to an on-call alert.',
      'Add a Respond to Webhook node returning a confirmation to the caller.',
      'Add webhook authentication and input validation before the AI step.',
      'Log every classification to an Automation Log database in Notion.'
    ],
    freeVsPaid: 'Use a local Ollama model or a free-tier AI key. Webhook calls from the internet need a tunnel or public host; localhost testing from PowerShell works for free.'
  }
];
