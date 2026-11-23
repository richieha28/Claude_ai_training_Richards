// Notion + n8n + AI Integration - 10 modules (classic script global, ASCII only)
const AA_INTEGRATION = (function () {
  const L = function (id, title, type, summary, points, example, takeaways, mistakes, steps) {
    const o = { id: id, title: title, type: type, summary: summary, points: points, example: example };
    if (steps) o.steps = steps;
    o.takeaways = takeaways;
    o.mistakes = mistakes;
    return o;
  };
  const Q = function (q, options, correct, explain) {
    return { q: q, options: options, correct: correct, explain: explain };
  };

  const modules = [
    // ---------------------------------------------------------------- 1
    {
      id: 'int-1',
      number: 1,
      title: 'Automation Architecture',
      durationMin: 85,
      level: 'Intermediate',
      objectives: [
        'Describe a layered architecture of Notion, n8n and AI components.',
        'Choose sources of truth and define data contracts between systems.',
        'Decide between event-driven and scheduled patterns.',
        'Produce an architecture diagram and a risk list before building.'
      ],
      freeNote: 'FREE: Notion Free plan + self-hosted n8n Community Edition + local or free-tier AI. Architecture decisions in this module cost nothing but time.',
      lessons: [
        L('int-1-1', 'The Three-Layer Model', 'diagram',
          'Reliable systems separate what stores data, what moves data and what interprets data. In this pathway Notion stores and presents, n8n moves and orchestrates, and AI interprets and drafts. Keeping those roles distinct makes each part replaceable.',
          [
            'Layer 1 - Storage and interface: Notion databases hold tasks, projects, docs, meetings and logs; humans view and edit here.',
            'Layer 2 - Orchestration: n8n listens for events, calls APIs, applies rules, retries and logs.',
            'Layer 3 - Intelligence: language models classify, summarize, extract and answer; they never own data.',
            'Diagram in words: Inputs (forms, email, webhooks) -> n8n -> Notion (read/write) and AI (interpret) -> n8n -> Notion and notifications -> Humans.',
            'Humans remain in the loop at decision points: approvals, exceptions and publishing.',
            'Each layer can be swapped: Notion for another database, a local model for a hosted one, n8n for another orchestrator.'
          ],
          'A support request enters through a webhook. n8n validates it, asks an AI model to classify it, writes the result and category into the Notion Tickets database and notifies the owner. A manager reviews the Notion board. If the team moves to another model, only the AI node changes.',
          [
            'Notion stores, n8n orchestrates, AI interprets.',
            'Keep layers loosely coupled so parts can change.',
            'Humans own decisions and exceptions.'
          ],
          [
            'Letting an AI model be the only place where data lives.',
            'Embedding business rules inside prompts instead of explicit workflow logic.'
          ]),
        L('int-1-2', 'Sources of Truth, Data Contracts and Patterns', 'reading',
          'Integrations fail when two systems both think they own a field. Define one owner for each data type, a stable identifier and the shape of the data that moves between systems.',
          [
            'Source of truth: the one system where a field is edited; others receive copies.',
            'Use a stable external ID property (for example Request ID) so records can be matched and updated rather than duplicated.',
            'Data contract: list the fields, types and allowed values passed between n8n and Notion.',
            'Event-driven pattern: webhook triggers instant work; good for intake and alerts.',
            'Scheduled pattern: a schedule polls or aggregates; good for digests, reports and syncs.',
            'Idempotency: running the same workflow twice should not create duplicates; check for existing IDs first.',
            'Version your contracts: when a property changes, update every workflow that uses it.'
          ],
          'A contract for the Tasks database: Title (text), Status (To do, Doing, Done), Due (date), Owner (person), Source ID (text, unique), Source (select: form, email, meeting). n8n always searches by Source ID before creating a task, preventing duplicates when a webhook is retried.',
          [
            'One owner per field.',
            'Use stable IDs and check before creating.',
            'Write contracts down and version them.'
          ],
          [
            'Creating a new Notion page on every retry and filling the database with duplicates.',
            'Renaming a Notion property without updating workflows that depend on it.'
          ]),
        L('int-1-3', 'Planning a Build: Requirements, Risks and Success Metrics', 'walkthrough',
          'A short design document saves days of rework. It lists the goal, users, data, steps, risks and how you will measure success.',
          [
            'Write the problem in one sentence and name the user and owner.',
            'List inputs, outputs and systems touched.',
            'Draw the happy path then list at least five failure cases.',
            'Classify data sensitivity: public, internal, confidential, personal.',
            'Decide the human approval points and the manual fallback.',
            'Define metrics: time saved, response time, error rate, adoption.',
            'Plan a pilot with a small group before wider rollout.'
          ],
          'Design note excerpt: Goal - reduce time to triage support requests from 4 hours to 15 minutes. Inputs - form webhook. Outputs - Notion ticket, owner alert. Data - internal and some personal. Risks - misclassification, duplicate tickets, API outage, token leak. Metric - median triage time and misroute rate.',
          [
            'Write the design before building.',
            'Classify data and plan the fallback.',
            'Pick metrics you can measure.'
          ],
          [
            'Starting with the AI step before defining the process.',
            'Having no manual fallback when automation is down.'
          ],
          [
            'State the goal in one sentence.',
            'List inputs, outputs and systems.',
            'Draw a happy path with five to eight steps.',
            'List five failure cases and a mitigation for each.',
            'Define two metrics and the baseline for each.'
          ])
      ],
      exercise: {
        title: 'Architect an Automated Request System',
        scenario: 'A 40-person company wants one place to log facilities, IT and HR requests with automatic routing and weekly reporting. You must propose the architecture before any build begins.',
        steps: [
          'Draw the three-layer architecture with named databases, workflows and AI tasks.',
          'Write the data contract for the main Requests database.',
          'Decide which flows are event-driven and which are scheduled.',
          'List data sensitivity levels and the approval points.',
          'List five risks with mitigations and two success metrics.'
        ],
        deliverable: 'A one-to-two page architecture and design note with a diagram description and data contract.'
      },
      quiz: [
        Q('In the three-layer model, what is the role of n8n?', ['Store all data', 'Orchestrate moving data and applying rules', 'Replace humans', 'Display dashboards'], 1, 'n8n orchestrates events, API calls, rules and retries.'),
        Q('Why use a stable Source ID property?', ['It looks neat', 'To match records and avoid duplicates', 'To speed up Notion', 'To encrypt data'], 1, 'A unique ID lets workflows update an existing record rather than creating another.'),
        Q('Which pattern suits a weekly report?', ['Webhook only', 'Scheduled', 'Manual only', 'Error trigger'], 1, 'Reports are usually generated on a schedule.'),
        Q('What does idempotency mean in automation?', ['Running twice causes no unwanted duplicates', 'Running faster', 'Using AI', 'Using Docker'], 0, 'An idempotent workflow can be repeated safely.'),
        Q('Who should own decisions and exceptions?', ['The AI model', 'Humans', 'The database', 'The webhook'], 1, 'AI assists, but accountable humans decide.')
      ]
    },
    // ---------------------------------------------------------------- 2
    {
      id: 'int-2',
      number: 2,
      title: 'Connecting Notion to n8n',
      durationMin: 95,
      level: 'Intermediate',
      objectives: [
        'Create a Notion internal integration and share only the needed databases.',
        'Configure the n8n Notion credential and test the connection.',
        'Read, create, update and search database pages with the Notion node.',
        'Map Notion property types correctly and respect API limits.'
      ],
      freeNote: 'FREE: Notion internal integrations and the Notion API are available on the Notion Free plan. n8n Notion nodes are in Community Edition. Check Notion plan limits for API rate and file sizes.',
      lessons: [
        L('int-2-1', 'Create the Integration and Share Databases', 'walkthrough',
          'Notion never lets external tools see your pages by default. You create an internal integration, copy its secret and then explicitly connect it to the databases it may use.',
          [
            'In Notion, open Settings -> Connections (or the integrations page) and create a new internal integration for your workspace.',
            'Give it a clear name such as "n8n Automation" and choose minimum capabilities: read, update, insert content as needed.',
            'Copy the internal integration secret and store it in your password manager.',
            'Open the target database page, use the page menu "Connections" and add your integration.',
            'Only pages and databases you connect become visible to the integration; child pages inherit access.',
            'In n8n create a Notion API credential and paste the secret, then run the connection test.',
            'Use separate integrations for separate purposes so a leak has a limited impact.'
          ],
          'An operations analyst creates integration "n8n - Tasks" connected only to the Tasks and Projects databases, and a second integration "n8n - Reports" connected only to the Reports database. Each has its own credential in n8n.',
          [
            'Create integrations with minimum capabilities.',
            'Explicitly connect each database.',
            'Store the secret like a password.'
          ],
          [
            'Connecting the integration to the entire workspace home page.',
            'Getting a "not found" error and not realizing the database was never connected.'
          ],
          [
            'Create an internal integration named n8n Automation.',
            'Create a Tasks database with Name, Status, Due and Source ID.',
            'Connect the integration to that database.',
            'Add a Notion credential in n8n with the secret.',
            'Run the credential test.'
          ]),
        L('int-2-2', 'Using the Notion Node: Get, Create, Update, Search', 'demo',
          'The Notion node supports database page operations. Learn the typical pattern: search for an existing record by ID, update if found, otherwise create.',
          [
            'Resource Database Page offers Get Many, Create, Update and Get.',
            'Use a Filter in Get Many to find pages where Source ID equals a value.',
            'Create requires you to map properties; property names must match the database exactly.',
            'Update needs the Notion page ID returned by earlier steps.',
            'Property types matter: Select needs an existing option name, Date needs ISO format, Person needs a user ID, Relation needs page IDs.',
            'Use the Notion Trigger node for new or updated pages (it polls on an interval).',
            'The API is limited to about three requests per second on average; batch and wait when loading many records.',
            'Rich text properties have length limits per block; split long text.'
          ],
          'Upsert pattern: Notion Get Many (Source ID equals request id) -> IF items found? -> true: Update page -> false: Create page. When the webhook retries the same request, the page is updated, not duplicated.',
          [
            'Search then update or create (upsert).',
            'Match property names and types exactly.',
            'Respect the rate limit by batching and waiting.'
          ],
          [
            'Passing text to a Select property with a misspelled option and getting an error.',
            'Updating without checking that the page exists.'
          ],
          [
            'Add a Webhook or Manual trigger with sample request data.',
            'Add Notion Get Many with a Source ID filter.',
            'Add an IF to check whether any item was returned.',
            'On false create a page; on true update the page.',
            'Run twice with the same ID and confirm only one page exists.'
          ]),
        L('int-2-3', 'Reliability and Security for Notion Flows', 'reading',
          'Notion automations touch shared knowledge and people data. Reliability and access discipline keep them trustworthy.',
          [
            'Store the database ID and property names in one Config node to simplify changes.',
            'Use Retry On Fail for temporary errors and an error workflow for persistent ones.',
            'Log each automation action in an Automation Log database with workflow name, record ID, action and time.',
            'Avoid writing sensitive data (passwords, tokens, health or HR details) into Notion pages that many people can view.',
            'Review which integrations are connected quarterly and remove unused ones.',
            'Rotate the integration secret if it may have been exposed.',
            'Test with a copy of the database before running against live data.'
          ],
          'The team creates an "Automation Log" database. Every n8n workflow that writes to Notion adds a log row. When a manager asks "who created this task?" the answer is a click away.',
          [
            'Central config reduces breakage.',
            'Audit logs build trust in automation.',
            'Test on copies before production.'
          ],
          [
            'Testing new workflows directly on the live database.',
            'Leaving old integrations connected after a project ends.'
          ])
      ],
      exercise: {
        title: 'Build a Notion Upsert Workflow',
        scenario: 'Your intake process may retry events, which has created duplicate tasks. You need a workflow that creates or updates tasks safely and records every action.',
        steps: [
          'Create the Tasks and Automation Log databases and connect the integration.',
          'Build the search-then-upsert workflow keyed on Source ID.',
          'Add a log write after each create or update.',
          'Test with new, duplicate and malformed payloads.',
          'Add a Config node holding the database IDs and document the property contract.'
        ],
        deliverable: 'An upsert workflow, an Automation Log database and a short property contract.'
      },
      quiz: [
        Q('Why does the Notion API return "not found" for an existing database?', ['The database is empty', 'The integration has not been connected to it', 'n8n is offline', 'Docker is stopped'], 1, 'Integrations only see content explicitly shared with them.'),
        Q('What is an upsert?', ['Delete then create', 'Update if it exists, otherwise create', 'Create twice', 'Archive'], 1, 'Upsert avoids duplicates by checking first.'),
        Q('What must a Select value match?', ['Any text', 'An existing option name', 'A number', 'A URL'], 1, 'Select properties require valid option names.'),
        Q('Approximately what Notion API rate should you plan for?', ['100 per second', 'About 3 per second on average', '1 per hour', 'Unlimited'], 1, 'Plan for roughly three requests per second and add waits for bulk operations.'),
        Q('What is the benefit of an Automation Log database?', ['Prettier pages', 'Auditability of what automation did', 'Faster API', 'More storage'], 1, 'Logs show who or what changed which record and when.')
      ]
    },
    // ---------------------------------------------------------------- 3
    {
      id: 'int-3',
      number: 3,
      title: 'Automated Task Management',
      durationMin: 100,
      level: 'Intermediate',
      objectives: [
        'Capture tasks from forms, email and chat into a Notion Tasks database.',
        'Automate assignment, due dates, reminders and recurring tasks.',
        'Use AI to extract tasks and priorities from free text safely.',
        'Build overdue and daily digest notifications.'
      ],
      freeNote: 'FREE: Webhooks, Schedule Trigger, Notion and free-tier mail or chat apps are enough. AI extraction can use local Ollama. Free chat or email tiers may limit message volume.',
      lessons: [
        L('int-3-1', 'Capturing Tasks from Many Sources', 'walkthrough',
          'Tasks arrive by form, email, chat and meetings. An automation that normalizes them into one structure keeps your Notion database as the single list.',
          [
            'Define a normalized task: title, description, source, requester, due date, priority, owner, source ID.',
            'Use a webhook for forms, an email trigger for a dedicated tasks inbox and a chat trigger for slash commands.',
            'Edit Fields maps each source into the normalized structure.',
            'Add default values: priority Medium, status Inbox, due empty.',
            'Deduplicate using Source ID or an email message ID.',
            'Send a short acknowledgement to the requester with the task link.',
            'Log the source so you can see which channels create most work.'
          ],
          'Three entry paths feed one Merge node: a form webhook, a monitored inbox and a chat command. Each path maps to the same fields, then a single Notion Create or Upsert step writes the task and an acknowledgement is sent.',
          [
            'Normalize inputs before writing.',
            'Always deduplicate.',
            'Acknowledge to build trust.'
          ],
          [
            'Writing source-specific fields that other workflows cannot rely on.',
            'Capturing everything without dedupe so the inbox floods.'
          ],
          [
            'Define the normalized task fields.',
            'Create a webhook path mapping form data to those fields.',
            'Create a second path from a sample email payload.',
            'Merge and write to Notion with an upsert.',
            'Send an acknowledgement message.'
          ]),
        L('int-3-2', 'Routing, Reminders and Recurring Work', 'demo',
          'Once tasks are in Notion, automation can assign owners, send reminders and create recurring work so nothing is forgotten. The key is to send grouped, well-timed messages rather than constant pings.',
          [
            'Assign owners by rules: category -> team lead, workload -> round-robin from a roster table.',
            'A Schedule workflow runs every morning to find tasks due today or overdue.',
            'Group tasks by owner and send one digest message each.',
            'Escalate tasks overdue more than N days to the manager.',
            'Recurring tasks: a schedule creates new pages from a template on weekly or monthly cadence.',
            'Record the reminder time to avoid sending the same reminder repeatedly.',
            'Provide a snooze option by updating a Remind after date.'
          ],
          'Every weekday 08:30, the workflow queries Notion for Status not Done and Due on or before today, groups tasks per owner, formats a list with links and sends each person a digest. Tasks overdue for 3+ days are also summarized to the manager.',
          [
            'Digests beat many single reminders.',
            'Track reminders sent.',
            'Escalate after a defined delay.'
          ],
          [
            'Sending a reminder every run until people mute the channel.',
            'Escalating immediately without giving owners a chance.'
          ]),
        L('int-3-3', 'AI Task Extraction with Human Review', 'walkthrough',
          'People write requests as free text. AI can extract a title, due date and priority, but errors are possible. A review step keeps quality high.',
          [
            'Prompt for JSON with title, description, due_date (ISO or null), priority (Low, Medium, High) and confidence (0-1).',
            'Resolve relative dates ("by Friday") in code using the message date, not in the model alone.',
            'If confidence is below a threshold or fields are missing, create the task with Status Needs review.',
            'Never let AI assign work to people without rules; use mapping tables for owners.',
            'Strip unnecessary personal data before sending text to the model.',
            'Log the original text and extracted result for audit and tuning.',
            'Measure accuracy on a sample of 20 real messages before going live.'
          ],
          'A message: "Can you get the vendor contract reviewed by next Wednesday? It is urgent." The AI returns title "Review vendor contract", priority High, due date null with a relative phrase "next Wednesday". A Code node converts the phrase using the message date and Notion receives an ISO date.',
          [
            'Resolve dates deterministically.',
            'Low confidence -> human review.',
            'Test accuracy before launch.'
          ],
          [
            'Trusting AI-calculated dates without verification.',
            'Allowing AI to choose owners with no rule set.'
          ],
          [
            'Create a prompt returning the defined JSON.',
            'Test on five sample messages.',
            'Add a Code node to resolve relative dates.',
            'Add an IF for low confidence or missing fields.',
            'Write tasks to Notion with Status Needs review when needed.'
          ])
      ],
      exercise: {
        title: 'Task Capture and Digest System',
        scenario: 'A department head receives requests by email, chat and forms. Tasks are missed, and nobody knows what is overdue.',
        steps: [
          'Build the normalized Tasks database and three capture paths.',
          'Implement an upsert with deduplication.',
          'Create the morning digest per owner and a manager escalation.',
          'Add AI extraction with confidence-based review.',
          'Test with 20 sample messages and record accuracy and issues.'
        ],
        deliverable: 'Working capture, digest and extraction workflows with an accuracy and issues summary.'
      },
      quiz: [
        Q('Why normalize tasks from different sources?', ['To make Notion slower', 'So later automation can rely on consistent fields', 'To avoid APIs', 'To reduce users'], 1, 'Consistent structure simplifies routing, reporting and reminders.'),
        Q('Why group reminders into a digest?', ['It looks better', 'Reduce noise and notification fatigue', 'It avoids Notion', 'It hides tasks'], 1, 'One digest per owner is easier to act on than many messages.'),
        Q('How should relative dates like "next Wednesday" be handled?', ['Trust the model fully', 'Resolve in code using the message date', 'Ignore them', 'Store as text only'], 1, 'Deterministic code is more reliable than model date arithmetic.'),
        Q('What should happen with low-confidence extraction?', ['Auto-assign to the CEO', 'Mark as Needs review for a human', 'Delete', 'Retry forever'], 1, 'Humans verify uncertain results.'),
        Q('What helps prevent repeated reminders?', ['A Last reminded timestamp', 'More nodes', 'Longer titles', 'A bigger server'], 0, 'Tracking when a reminder was sent prevents duplicates.')
      ]
    },
    // ---------------------------------------------------------------- 4
    {
      id: 'int-4',
      number: 4,
      title: 'AI Knowledge Assistant',
      durationMin: 120,
      level: 'Advanced',
      objectives: [
        'Explain retrieval-augmented generation (RAG) in plain language.',
        'Index Notion documents into a vector store using n8n.',
        'Build a chat assistant that answers with citations and refuses when unsure.',
        'Keep the index fresh and respect document permissions.'
      ],
      freeNote: 'FREE: Use a local Ollama embedding and chat model, and a free self-hosted or in-memory vector store for learning (for example the in-memory store in n8n, or a local Qdrant container). PAID (optional): hosted vector databases and premium model APIs. In-memory stores reset on restart, so use a persistent local store for anything you rely on.',
      lessons: [
        L('int-4-1', 'RAG Explained for Business Teams', 'reading',
          'A language model does not know your internal policies. RAG solves this by searching your documents first and giving the best passages to the model as context, so it can answer using your actual content.',
          [
            'Step 1 - Ingest: read documents, split them into chunks of a few hundred words.',
            'Step 2 - Embed: convert each chunk to a numeric vector that captures meaning.',
            'Step 3 - Store: save vectors with metadata (title, URL, owner, last updated) in a vector store.',
            'Step 4 - Retrieve: convert the user question to a vector and find the closest chunks.',
            'Step 5 - Generate: send the question plus retrieved chunks to the model with instructions to answer only from them.',
            'RAG reduces but does not remove errors; citations let users verify.',
            'Quality depends more on document quality and chunking than on the model.'
          ],
          'An employee asks, "How many days of notice for annual leave?" The system retrieves the Leave Policy chunks, the model answers "Request at least 5 working days ahead" and cites "Leave Policy (updated March)". If nothing relevant is found, it replies that it does not know.',
          [
            'RAG = search first, then answer from sources.',
            'Metadata and citations build trust.',
            'Document quality drives answer quality.'
          ],
          [
            'Expecting the model to know private policies without retrieval.',
            'Indexing outdated or contradictory documents.'
          ]),
        L('int-4-2', 'Build the Indexing and Chat Workflows', 'walkthrough',
          'You need two workflows: an ingestion workflow that keeps the vector store updated and a chat workflow that answers questions. Keeping them separate makes both easier to maintain.',
          [
            'Ingestion: Notion Get Many (Docs database, Status Published) -> Get page blocks -> Edit Fields to combine text -> Default Data Loader and Text Splitter -> Embeddings -> Vector Store (Insert).',
            'Add metadata: page title, Notion URL, team, last edited time.',
            'Use a stable ID per chunk so updates replace old chunks instead of duplicating.',
            'Chat: Chat Trigger -> AI Agent (or Question and Answer chain) with a Vector Store Retriever tool.',
            'System message: "Answer using only the retrieved documents. Cite the title and link. If the documents do not contain the answer, say you do not know and suggest contacting the document owner."',
            'Limit retrieval to the top 4-6 chunks to control cost and noise.',
            'Schedule ingestion nightly or trigger on page updates.'
          ],
          'The ingestion workflow runs nightly: it pulls published docs updated in the last 24 hours, deletes their old chunks by page ID, re-embeds and inserts the new ones. The chat workflow lets staff ask questions and returns answers with links back to the Notion pages.',
          [
            'Separate ingestion from chat.',
            'Store metadata for citations and filtering.',
            'Replace chunks when a page changes.'
          ],
          [
            'Re-inserting chunks every night without deleting old ones, causing contradictory duplicates.',
            'Letting the assistant answer without any retrieved source.'
          ],
          [
            'Create a Docs database with 8 short test documents.',
            'Build the ingestion workflow with splitter, embeddings and vector store.',
            'Run ingestion and inspect stored chunks.',
            'Build the chat workflow with a retriever tool.',
            'Ask five in-scope and three out-of-scope questions.'
          ]),
        L('int-4-3', 'Quality, Permissions and Freshness', 'demo',
          'An internal assistant can leak information if it indexes content the asker should not see. It can also confidently quote stale policies. Governance and testing are part of the build.',
          [
            'Only index documents marked Published and approved for company-wide access.',
            'Do not index HR cases, salary data, legal matters or customer personal data in a general assistant.',
            'For different audiences, create separate indexes per team and separate chat endpoints.',
            'Include last updated date in answers so users can judge freshness.',
            'Build a test set of 20 questions with expected sources; track the share answered correctly with citations.',
            'Capture thumbs up/down feedback in a Notion database to find document gaps.',
            'Review top unanswered questions monthly and write the missing documents.'
          ],
          'A monthly review shows that "parking policy" is asked 14 times with no answer. The facilities owner writes a short document, the next ingestion picks it up, and the unanswered rate falls.',
          [
            'Index only approved and appropriate content.',
            'Separate audiences, separate indexes.',
            'Unanswered questions reveal documentation gaps.'
          ],
          [
            'Indexing a whole workspace including confidential pages.',
            'Not measuring answer quality after launch.'
          ])
      ],
      exercise: {
        title: 'Policy Q&A Assistant',
        scenario: 'HR is overwhelmed by repeated questions about leave, expenses and onboarding. You build an assistant that answers from approved policy pages with citations.',
        steps: [
          'Prepare 8-10 approved policy pages in Notion with owner and updated date.',
          'Build the ingestion workflow with metadata.',
          'Build the chat workflow with a strict system message.',
          'Create a 20-question test set including 5 out-of-scope and 2 attempts to extract confidential data.',
          'Score results, improve chunking or prompts, and record final accuracy.',
          'Add a feedback logging path to a Notion database.'
        ],
        deliverable: 'Working ingestion and chat workflows with a scored test set and an improvement log.'
      },
      quiz: [
        Q('What does RAG stand for?', ['Rapid Automated Generation', 'Retrieval-Augmented Generation', 'Random Access Graph', 'Rule-Aware Gateway'], 1, 'RAG retrieves relevant documents and uses them to generate answers.'),
        Q('Why include metadata like title and URL with each chunk?', ['Decoration', 'To cite sources and filter results', 'To speed Docker', 'To hide data'], 1, 'Metadata enables citations and filtering.'),
        Q('What should the assistant do when no relevant document is found?', ['Guess', 'Say it does not know and suggest a contact', 'Invent a policy', 'Search the web silently'], 1, 'Refusing to guess prevents misinformation.'),
        Q('Which content should NOT be indexed in a general company assistant?', ['Published leave policy', 'Confidential HR case notes', 'Public FAQ', 'Office hours'], 1, 'Sensitive content must not be in a broadly accessible index.'),
        Q('Why delete old chunks when a page is updated?', ['To save electricity', 'To avoid contradictory duplicate answers', 'It is required by Notion', 'To speed up typing'], 1, 'Stale chunks can produce outdated or conflicting answers.')
      ]
    },
    // ---------------------------------------------------------------- 5
    {
      id: 'int-5',
      number: 5,
      title: 'AI Meeting Assistant',
      durationMin: 100,
      level: 'Advanced',
      objectives: [
        'Turn meeting transcripts or notes into summaries, decisions and action items.',
        'Create Notion meeting pages and linked tasks automatically.',
        'Handle consent, privacy and accuracy responsibly.',
        'Send follow-up messages with human approval.'
      ],
      freeNote: 'FREE: Many free tools can produce a transcript (for example built-in captions export or local speech-to-text such as Whisper running on your machine). n8n can process text files or pasted notes. Hosted transcription services are usually PAID; this module works with text notes or a free local transcription option.',
      lessons: [
        L('int-5-1', 'From Transcript to Structured Notes', 'walkthrough',
          'The valuable output of a meeting is decisions and actions. AI can draft these from a transcript quickly, but a person should confirm before anything is distributed.',
          [
            'Input options: pasted notes via form, uploaded text file, or a transcript exported from your meeting tool.',
            'Split long transcripts into sections, summarize each, then summarize the summaries.',
            'Prompt for JSON: summary (5 bullets), decisions[], action_items[{task, owner_name, due_text}], open_questions[], risks[].',
            'Match owner names to Notion people using a mapping table, not the model alone.',
            'Mark uncertain items as "Needs confirmation".',
            'Create a Notion Meetings page with the structured summary and relate it to the project.',
            'Create linked tasks for each action item using the upsert pattern.'
          ],
          'After a 45-minute project call, the team submits the transcript. The workflow creates a Meetings page with summary and decisions, creates six linked tasks (two flagged Needs confirmation because the owner was ambiguous) and posts the page link to the project channel for review.',
          [
            'Decisions and actions matter most.',
            'Map owners with rules.',
            'Flag uncertainty.'
          ],
          [
            'Sending unreviewed AI notes to everyone as the official record.',
            'Letting the model invent owners or dates that were never stated.'
          ],
          [
            'Prepare a sample transcript of 600-1000 words.',
            'Build a prompt returning structured JSON.',
            'Parse and validate the JSON.',
            'Create the Meetings page in Notion.',
            'Create linked action item tasks with Needs confirmation where unsure.'
          ]),
        L('int-5-2', 'Consent, Privacy and Accuracy', 'reading',
          'Recording and transcribing people carries legal and ethical responsibilities. Accuracy matters because notes become records that people rely on.',
          [
            'Tell participants when a meeting is recorded or transcribed and obtain consent where required by law or policy.',
            'Check data protection rules (for example GDPR or local equivalents) and company policy before processing recordings.',
            'Do not process meetings that discuss HR cases, legal advice or highly confidential matters unless explicitly approved.',
            'Keep raw transcripts access-restricted and delete them after a defined retention period.',
            'Use local or approved processing when content is sensitive.',
            'Add a footer stating "AI-generated draft - reviewed by [name]" to every summary.',
            'Allow participants to request corrections.'
          ],
          'The policy states: transcripts are stored for 30 days, only the organizer can view them, summaries are labeled as AI drafts and the organizer must approve before posting. Confidential meetings are tagged and excluded from the workflow.',
          [
            'Consent and policy come first.',
            'Restrict and expire raw transcripts.',
            'Label AI drafts and name the reviewer.'
          ],
          [
            'Recording without telling participants.',
            'Keeping transcripts indefinitely in a widely shared place.'
          ]),
        L('int-5-3', 'Follow-ups with Approval Gates', 'demo',
          'The last mile is sending follow-ups. An approval gate keeps humans accountable and prevents embarrassing mistakes.',
          [
            'Generate a follow-up email draft listing decisions and action items.',
            'Store the draft in Notion with Status Pending approval.',
            'The organizer reviews and changes Status to Approved (or edits the text).',
            'A Notion trigger or scheduled check sees Approved and sends the message.',
            'Record who approved and when.',
            'Send reminders for action items one day before the due date.',
            'Track completion rate of meeting actions as a metric.'
          ],
          'The workflow writes the follow-up draft to a Notion "Pending follow-ups" board. When the meeting organizer drags the card to Approved, n8n sends the email and logs the approval. Over a month, the team sees action completion rise from 55 to 78 percent.',
          [
            'Approval gates keep control.',
            'Log approvals.',
            'Measure action completion.'
          ],
          [
            'Auto-sending AI drafts without a review step.',
            'Not tracking whether action items are completed.'
          ])
      ],
      exercise: {
        title: 'Meeting Notes to Actions Pipeline',
        scenario: 'A project team loses decisions and actions after every meeting. You are asked to build a pipeline that creates structured notes and tasks with approval before sending follow-ups.',
        steps: [
          'Write a one-page privacy and consent note for the pipeline.',
          'Build the transcript-to-JSON workflow with validation.',
          'Create Meetings and linked Tasks in Notion.',
          'Add the pending approval board and a send-on-approve path.',
          'Test with three transcripts, including one with ambiguous owners.',
          'Review accuracy: how many actions were correct and complete?'
        ],
        deliverable: 'A working pipeline, a privacy note and an accuracy review of three test transcripts.'
      },
      quiz: [
        Q('What are the most valuable outputs of a meeting summary?', ['Jokes', 'Decisions and action items', 'Long quotes', 'Attendance only'], 1, 'Decisions and actions drive follow-through.'),
        Q('How should AI-matched owner names be handled?', ['Trust the model', 'Map using a rule-based table and flag uncertainty', 'Leave blank always', 'Assign to the manager'], 1, 'Mapping tables with flags reduce misassignment.'),
        Q('What should happen before processing a recorded meeting?', ['Nothing', 'Check consent and policy', 'Post it publicly', 'Translate it'], 1, 'Consent and privacy rules must be satisfied first.'),
        Q('Why include a "AI-generated draft" label?', ['Style', 'Set expectations and prompt human review', 'Required by n8n', 'To save tokens'], 1, 'Transparency avoids over-trusting AI output.'),
        Q('What is an approval gate?', ['A Docker setting', 'A step where a human approves before an action happens', 'A database index', 'A Notion theme'], 1, 'Approval gates keep humans accountable for outgoing actions.')
      ]
    },
    // ---------------------------------------------------------------- 6
    {
      id: 'int-6',
      number: 6,
      title: 'Automated Project Manager',
      durationMin: 105,
      level: 'Advanced',
      objectives: [
        'Automate project creation, kickoff tasks and stakeholder notifications.',
        'Compute project health from Notion data and flag risks early.',
        'Generate weekly status reports with AI assistance and human review.',
        'Detect blocked, stale and overloaded work and escalate sensibly.'
      ],
      freeNote: 'FREE: All flows use Notion free databases, Schedule Triggers and local or free-tier AI. Notion button automation and database triggers on some plans are optional; n8n can provide the same behavior free.',
      lessons: [
        L('int-6-1', 'Project Setup Automation', 'walkthrough',
          'Starting projects consistently is a major source of time savings. A single request can create the project page, tasks, milestones, a channel and notifications.',
          [
            'Trigger: a Notion button, form or status change (New -> Approved).',
            'Create the project page from a template with brief, scope and RACI sections.',
            'Create standard tasks with due dates calculated from the start date (kickoff +2 days, plan +5 days).',
            'Create milestones and a Risks database starter list.',
            'Notify the project owner and stakeholders with links.',
            'Create a channel or folder in your chat or file tools if needed.',
            'Log project creation in the Automation Log.'
          ],
          'A manager sets a project request Status to Approved. n8n creates the project page, 12 standard tasks scheduled relative to the start date, four milestones, and sends a kickoff message to the team with all links.',
          [
            'Standardize starts with templates and relative dates.',
            'Notify with links, not copies.',
            'Log automatic creation.'
          ],
          [
            'Creating tasks with absolute dates that are wrong for the next project.',
            'Starting from an unapproved request.'
          ],
          [
            'Create a Projects database with Status including Approved.',
            'Build a workflow triggered when Status becomes Approved.',
            'Create tasks with due dates computed from Start date.',
            'Create milestones.',
            'Send a kickoff message with links.'
          ]),
        L('int-6-2', 'Health Monitoring and Risk Detection', 'demo',
          'Problems are cheaper to fix early. A scheduled workflow can scan projects and flag signals such as overdue tasks, no recent updates, overloaded owners and approaching milestones.',
          [
            'Signals: percent of tasks overdue, days since last update, blocked tasks count, milestone due within 7 days with open dependencies.',
            'Create a score such as Green, Amber, Red using simple rules that humans can explain.',
            'Write the suggested health and the reasons into Notion for the PM to confirm.',
            'Detect owner overload by summing estimates per person for the next two weeks.',
            'Escalate Red projects to the sponsor only after the PM has had a chance to respond.',
            'Keep a history of health over time to see trends.',
            'Rules before AI: use AI only to summarize reasons, not to calculate scores.'
          ],
          'Every Monday the scan finds Project Falcon with 35 percent of tasks overdue and no updates for 9 days. It sets suggested health to Red with reasons and pings the PM. If still Red on Wednesday, it escalates to the sponsor.',
          [
            'Use transparent rules for health.',
            'Give the PM a chance before escalating.',
            'Track trends, not just snapshots.'
          ],
          [
            'Using an opaque AI score that nobody can explain.',
            'Escalating every Amber to executives.'
          ]),
        L('int-6-3', 'AI-Assisted Weekly Status Reports', 'walkthrough',
          'Status reports are repetitive but important. Automation collects the data, AI drafts the narrative, and the PM edits and publishes.',
          [
            'Collect: tasks completed this week, tasks due next week, open risks, milestones, blocked items.',
            'Compute metrics in n8n (counts, percentages) and pass them to the model as facts.',
            'Prompt: "Write a 150-word status update using only the provided facts. Do not add information. List decisions needed."',
            'Create a Reports page in Notion with the draft, Status Draft.',
            'The PM reviews, edits and sets Status to Published; n8n then emails the sponsor with the link.',
            'Archive each report for history and compare week to week.',
            'Check the draft against the data for any claim not supported by the facts.'
          ],
          'The Friday workflow gathers 14 completed tasks, 3 risks and one milestone slip, asks the model to draft a summary using only those facts, and creates a draft page. The PM changes one sentence and publishes in under five minutes.',
          [
            'Compute facts first, narrate second.',
            'Constrain the model to supplied facts.',
            'PM reviews and publishes.'
          ],
          [
            'Letting the model do the arithmetic or invent progress.',
            'Publishing without a PM review.'
          ],
          [
            'Create a Reports database with Draft and Published statuses.',
            'Query tasks and risks for one project.',
            'Compute counts using Summarize.',
            'Ask the model to draft a status from the facts.',
            'Write the draft to Notion and send a review reminder to the PM.'
          ])
      ],
      exercise: {
        title: 'Automated PMO Assistant',
        scenario: 'A PMO supports eight active projects. Weekly reporting takes one analyst two days and early risks are often discovered too late.',
        steps: [
          'Create sample data for three projects with varied progress.',
          'Build the project setup workflow triggered by Approved status.',
          'Build the Monday health scan with transparent rules and escalation delay.',
          'Build the Friday status draft workflow with a facts-only prompt.',
          'Test with the sample projects and verify that no unsupported claims appear.',
          'Write a one-page note on how the PMO should review and override the automation.'
        ],
        deliverable: 'Three working workflows and a short review and override policy.'
      },
      quiz: [
        Q('Why use relative due dates for standard tasks?', ['They look nicer', 'They adapt to each project start date', 'Notion requires it', 'To avoid reminders'], 1, 'Relative dates make templates reusable.'),
        Q('Why should health scores use transparent rules?', ['To save money', 'So humans can explain and trust them', 'AI cannot do math', 'Notion forbids AI'], 1, 'Explainable rules are easier to trust and adjust.'),
        Q('What should the AI be given when drafting a status report?', ['Nothing', 'Computed facts and strict instructions', 'The entire workspace', 'Only a project title'], 1, 'Providing facts and constraints prevents invented content.'),
        Q('When should a Red project be escalated to the sponsor?', ['Immediately always', 'After the PM has had a chance to respond', 'Never', 'Randomly'], 1, 'A short delay gives the PM chance to act and avoids noise.'),
        Q('Who publishes the weekly status?', ['The AI automatically', 'The PM after review', 'The sponsor', 'The webhook'], 1, 'The PM remains accountable for what is published.')
      ]
    },
    // ---------------------------------------------------------------- 7
    {
      id: 'int-7',
      number: 7,
      title: 'Business Intelligence Assistant',
      durationMin: 105,
      level: 'Advanced',
      objectives: [
        'Gather data from several sources into consistent metric snapshots.',
        'Compute KPIs deterministically and use AI only for narrative and anomaly explanation.',
        'Build a Notion KPI database and dashboard fed by n8n.',
        'Answer natural-language data questions safely with constrained queries.'
      ],
      freeNote: 'FREE: Google Sheets, CSV files, public APIs, Notion and a local database such as SQLite or a free Postgres container can act as data sources. n8n and Notion free are sufficient. Paid BI tools are not required for this module.',
      lessons: [
        L('int-7-1', 'Metric Snapshots and KPI Databases', 'walkthrough',
          'Dashboards need reliable history. Store a snapshot of each metric at regular intervals in a Notion Metrics database instead of recalculating everything on the fly.',
          [
            'Define each KPI: name, formula, source, owner, target and refresh frequency.',
            'Create a Metrics database with Metric, Value, Period start, Period end, Source and Captured at.',
            'A Schedule workflow fetches source data, calculates the KPI and writes a snapshot row.',
            'Use a stable unique key such as metric + period to avoid duplicates.',
            'Add a Targets database or properties so formulas can show Green/Amber/Red.',
            'Notion charts or linked views on the Metrics database build the dashboard.',
            'Document KPI definitions on a Metric Dictionary page so everyone uses the same meaning.'
          ],
          'Weekly, n8n reads orders from a sheet, calculates revenue, refund rate and average order value, and writes three rows to Metrics with period start and end. The dashboard shows trend lines and highlights the refund rate when above 4 percent.',
          [
            'Snapshots create reliable history.',
            'Define KPIs before calculating them.',
            'Keep a metric dictionary.'
          ],
          [
            'Two teams defining the same KPI differently.',
            'Overwriting history so trends are impossible.'
          ],
          [
            'Create a Metrics database and a Metric Dictionary page.',
            'Define three KPIs with formulas.',
            'Load sample source data.',
            'Build a scheduled workflow to calculate and write snapshots.',
            'Create a dashboard with trends and targets.'
          ]),
        L('int-7-2', 'AI Narrative and Anomaly Explanation', 'demo',
          'Numbers need context. AI can write a plain-language summary of what changed, but calculations and anomaly detection should stay in code so they are reproducible.',
          [
            'Compute week-over-week change and compare it to a rolling average and standard deviation.',
            'Flag an anomaly when the value is more than 2 standard deviations away or breaches a target.',
            'Pass computed facts to the model: metric, value, previous value, change percent, flags.',
            'Prompt for a short summary, three possible causes to investigate and recommended next checks.',
            'Make clear that causes are hypotheses, not facts.',
            'Add the narrative to the weekly KPI page with a Draft label.',
            'Do not let the model invent numbers; validate any number it cites against the facts.'
          ],
          'Refund rate rises from 3.1 to 5.4 percent. The workflow flags an anomaly and the model drafts: "Refund rate increased 2.3 points. Possible causes to check: a product batch issue, a shipping delay, a policy change. Recommended: review refund reasons for the last 7 days." The analyst checks and confirms the shipping delay.',
          [
            'Detect anomalies with explicit rules.',
            'AI summaries should present hypotheses.',
            'Validate numbers in AI text.'
          ],
          [
            'Asking the model to calculate trends from raw data.',
            'Presenting AI-suggested causes as confirmed facts.'
          ]),
        L('int-7-3', 'Safe Natural-Language Data Questions', 'reading',
          'Letting people ask "What was revenue last month by region?" is powerful, but free-form AI-generated queries can be wrong or unsafe. Use constrained, pre-approved queries.',
          [
            'Prefer a catalog of approved queries (tools) the agent can call with parameters like period and region.',
            'Read-only access: the assistant should never have write or delete permissions on data sources.',
            'If you allow generated queries, restrict to SELECT on specific views and limit rows.',
            'Return the numbers, the definition used and the time of the data.',
            'Handle ambiguity by asking a clarifying question instead of guessing.',
            'Log each question and query for audit and improvement.',
            'Mask or exclude personal data unless the user is authorized.'
          ],
          'The BI agent has three tools: Get KPI by period, Compare periods and Top N by dimension. A user asks "How did refunds do vs last month?" The agent calls Compare periods(metric=refund_rate, current=this month, previous=last month) and returns the values with the definition.',
          [
            'Approved tools beat free-form queries.',
            'Read-only and row limits protect data.',
            'Always show definitions and data time.'
          ],
          [
            'Giving the assistant direct write access to a production database.',
            'Answering ambiguous questions without clarifying.'
          ])
      ],
      exercise: {
        title: 'Weekly KPI Assistant',
        scenario: 'Leadership receives an inconsistent weekly spreadsheet and often asks why numbers moved. You build a snapshot and narrative system with safe question answering.',
        steps: [
          'Define five KPIs in a Metric Dictionary.',
          'Create the Metrics database and a scheduled snapshot workflow.',
          'Add rule-based anomaly detection and an AI narrative draft.',
          'Build a small agent with three approved read-only tools.',
          'Test 10 questions, including ambiguous and out-of-scope ones.',
          'Document who reviews narratives before leadership sees them.'
        ],
        deliverable: 'Snapshot workflow, anomaly narrative workflow, read-only BI agent and a review process note.'
      },
      quiz: [
        Q('Why store metric snapshots?', ['To use more storage', 'To preserve history and enable trends', 'To avoid KPIs', 'To skip definitions'], 1, 'Snapshots keep a reliable record of past values.'),
        Q('Who should calculate anomalies?', ['Deterministic code with explicit rules', 'The AI model alone', 'Nobody', 'The webhook'], 0, 'Rule-based computation is reproducible and testable.'),
        Q('How should AI-suggested causes be presented?', ['As facts', 'As hypotheses to investigate', 'As orders', 'They should be hidden'], 1, 'The model cannot verify causes; they must be checked.'),
        Q('What is safer than letting an AI write any query?', ['A catalog of approved read-only tools', 'Admin access', 'No logging', 'Bigger models'], 0, 'Approved parameterized tools limit risk.'),
        Q('What should the BI assistant do for ambiguous questions?', ['Guess', 'Ask a clarifying question', 'Return random data', 'Refuse always'], 1, 'Clarifying avoids wrong answers.')
      ]
    },
    // ---------------------------------------------------------------- 8
    {
      id: 'int-8',
      number: 8,
      title: 'Personal AI Assistant',
      durationMin: 95,
      level: 'Intermediate',
      objectives: [
        'Build a personal capture, briefing and review assistant using Notion and n8n.',
        'Create a morning briefing and an evening wrap-up.',
        'Use AI to summarize and prioritize while you keep control of decisions.',
        'Protect personal data and set clear boundaries for the assistant.'
      ],
      freeNote: 'FREE: Run everything on your own PC using Notion Free, local n8n and a local Ollama model so personal notes never leave your machine. Free chat apps (for example a messaging bot) can deliver notifications; check their terms. Your PC must be on for schedules to run.',
      lessons: [
        L('int-8-1', 'Capture Anywhere, Organize Automatically', 'walkthrough',
          'A personal assistant is most useful when capture is effortless. Messages, emails you forward and quick voice-to-text notes flow into your Notion inbox, where automation tidies them.',
          [
            'Choose one or two capture channels: a chat bot message, a forwarded email address or a simple web form.',
            'n8n receives the message, classifies it (task, note, idea, reference) and writes it to the right database.',
            'Add automatic tags and a suggested project using a mapping of keywords.',
            'Always keep the original text in the page so nothing is lost.',
            'Items the model is unsure about go to the Inbox with a Needs triage label.',
            'Confirm capture with a short reply: "Saved as task: Call dentist (due Friday)".',
            'Deduplicate repeated captures within a short window.'
          ],
          'You message your bot "Remind me to renew passport before March, and note: n8n webhook idea for expense forms". The workflow creates a task with a due date and a note with the idea tag, then replies with a confirmation of both.',
          [
            'Frictionless capture is the foundation.',
            'Keep originals; add AI structure on top.',
            'Confirm what was saved.'
          ],
          [
            'Over-classifying and losing the original wording.',
            'Using a capture channel that is slow or awkward.'
          ],
          [
            'Choose a capture channel and create a webhook or trigger.',
            'Classify messages as task, note or idea.',
            'Write each to the right Notion database.',
            'Send a confirmation reply.',
            'Test with ten varied messages.'
          ]),
        L('int-8-2', 'Morning Briefing and Evening Review', 'demo',
          'Two scheduled workflows create a daily rhythm: a morning briefing that tells you what matters, and an evening wrap-up that closes loops and prepares tomorrow. Together they create a daily rhythm without extra effort.',
          [
            'Morning briefing at a fixed time: today tasks, overdue items, meetings from calendar, deadlines this week.',
            'Use AI to turn the list into a short prioritized plan with a maximum of three focus items.',
            'Pass facts and the rules for priority (due date first, then impact tag).',
            'Evening wrap-up: list what was completed, what slipped and ask to reschedule slipped tasks.',
            'Write a daily log entry to a Journal database with wins and carry-overs.',
            'Allow quick replies such as "snooze 1 day" that update due dates.',
            'Keep the briefing short; if it is too long you will ignore it.'
          ],
          'At 07:45 you receive: "Focus: 1) Submit tax form (due today) 2) Prepare Thursday slides 3) Reply to vendor. Overdue: 2 items. Meetings: 10:00 team sync." At 18:00 you receive a wrap-up and tap a link to move two unfinished tasks to tomorrow.',
          [
            'Short, prioritized briefings work best.',
            'Evening review closes loops.',
            'Journals reveal patterns.'
          ],
          [
            'A briefing with 30 items that nobody reads.',
            'Letting AI invent priorities without clear rules.'
          ]),
        L('int-8-3', 'Boundaries, Privacy and Trust', 'reading',
          'A personal assistant sees sensitive information. Decide in advance what it may read, what it may write and what it must never do.',
          [
            'Define allowed data: tasks, notes, calendar titles. Exclude banking, health and private messages unless needed.',
            'Prefer a local model so personal notes do not leave your machine.',
            'Give the assistant read access where possible and write access only to specific databases.',
            'Require confirmation for actions that affect other people, such as sending messages or accepting invites.',
            'Keep a log of actions the assistant took and review it weekly.',
            'Back up your Notion and n8n data.',
            'Review and prune what the assistant remembers.'
          ],
          'The owner writes a short rulebook: the assistant can create tasks and notes, read tasks and calendar event titles, and send messages only to the owner. Anything outgoing to other people is saved as a draft for approval.',
          [
            'Write a rulebook for the assistant.',
            'Local processing improves privacy.',
            'Outgoing actions need confirmation.'
          ],
          [
            'Giving the assistant access to everything because it is convenient.',
            'Letting it send messages to other people automatically.'
          ])
      ],
      exercise: {
        title: 'Your Daily AI Assistant',
        scenario: 'You are busy and forget small commitments. You want a private assistant that captures items, briefs you every morning and helps you close the day.',
        steps: [
          'Write an assistant rulebook describing what data it may read, write and never touch.',
          'Build a capture workflow with classification and a confirmation reply.',
          'Build a morning briefing with a three-item focus list.',
          'Build an evening wrap-up with a Journal entry and reschedule links.',
          'Run for three days and write a short reflection on usefulness and improvements.'
        ],
        deliverable: 'A rulebook, three workflows and a short three-day reflection.'
      },
      quiz: [
        Q('What matters most for a personal capture system?', ['Fancy design', 'Low-friction capture', 'Many databases', 'Large prompts'], 1, 'If capturing is hard, you will not use it.'),
        Q('Why keep the original text with AI-structured output?', ['Storage', 'To avoid losing meaning when AI misinterprets', 'To confuse the model', 'It is required by Notion'], 1, 'The original is the ground truth if the structured result is wrong.'),
        Q('What is a good limit for morning focus items?', ['20', 'About three', 'None', '100'], 1, 'A short focus list is more actionable.'),
        Q('Which actions should require confirmation?', ['Creating a private note', 'Sending messages to other people', 'Reading tasks', 'Writing a log'], 1, 'Actions that affect others need approval.'),
        Q('Why prefer a local model for personal data?', ['It is always smarter', 'Data stays on your machine', 'It is faster always', 'It needs no setup'], 1, 'Local processing reduces data exposure.')
      ]
    },
    // ---------------------------------------------------------------- 9
    {
      id: 'int-9',
      number: 9,
      title: 'AI Automation Governance',
      durationMin: 100,
      level: 'Advanced',
      objectives: [
        'Define roles, policies and approval processes for AI automation.',
        'Classify data and decide what may be sent to which AI service.',
        'Implement monitoring, audit logs, incident response and a kill switch.',
        'Assess and document risks, bias and compliance obligations.'
      ],
      freeNote: 'FREE: Governance is mostly process and documentation; Notion databases and n8n error workflows are free tools for registers, logs and alerts. Formal certifications or legal advice may cost money but are not required for the exercises. This module is educational and not legal advice.',
      lessons: [
        L('int-9-1', 'Policy, Roles and an Automation Register', 'reading',
          'Without governance, automations multiply unseen. A register, named owners and approval rules keep the organization in control and make audits easy.',
          [
            'Automation Register database: name, purpose, owner, systems touched, data classes, AI used, risk level, status and last review date.',
            'Roles: Owner (accountable), Builder, Reviewer (independent checker), Admin (access and platform).',
            'Risk tiers: Low (internal, reversible), Medium (customer-visible or personal data), High (financial, legal, HR decisions).',
            'Approval rules: Low = owner approves; Medium = reviewer approves; High = reviewer and business leader approve.',
            'Require documentation: purpose, data flow diagram, test results, rollback plan.',
            'Review automations at least every six months or when systems change.',
            'Retire unused automations and revoke their credentials.'
          ],
          'The company keeps a Notion Automation Register. The weekly expense approval workflow is rated High risk because it affects payments; it needed a reviewer, a finance sign-off and a monthly sample check of decisions.',
          [
            'Register every automation.',
            'Match approval depth to risk.',
            'Review and retire regularly.'
          ],
          [
            'Shadow automations with no owner.',
            'Applying the same light approval to high-risk workflows.'
          ]),
        L('int-9-2', 'Data Classification and AI Usage Rules', 'walkthrough',
          'The most common AI governance failure is sending data to a service that should not receive it. Classification makes rules simple and enforceable.',
          [
            'Classes: Public, Internal, Confidential, Restricted (personal sensitive, financial, legal, credentials).',
            'Rules: Public and Internal may use approved services; Confidential only approved or local models; Restricted never goes to external AI.',
            'Maintain a list of approved AI providers with data terms reviewed.',
            'Minimize: send only necessary fields; mask names, emails and IDs where possible.',
            'Check provider terms about training on your data and retention.',
            'Add a data-class property to the Automation Register and check it during review.',
            'Train staff with short examples of allowed and disallowed prompts.'
          ],
          'A rule card: "Customer names and emails are Confidential: use the local model or mask before sending to any external service. Salary and health data are Restricted: do not use AI automation." The builder masks emails to [EMAIL] with a Code node before calling a free-tier API.',
          [
            'Classify data first.',
            'Approved providers only.',
            'Minimize and mask.'
          ],
          [
            'Sending customer lists to an unreviewed free AI service.',
            'Assuming a free tier has the same data terms as a business plan.'
          ],
          [
            'Define four data classes with examples.',
            'List approved AI services and their data terms.',
            'Create a masking Code node for emails and phone numbers.',
            'Add data class to the Automation Register.',
            'Review one existing workflow for compliance.'
          ]),
        L('int-9-3', 'Monitoring, Incidents, Kill Switch and Accountability', 'demo',
          'Automation will fail or misbehave. Good governance means you notice quickly, stop the harm and learn from it.',
          [
            'Monitor executions: failures, unusual volumes, long durations and cost.',
            'Alert via a shared Error Handler workflow to a named on-call person.',
            'Audit log for every automated change: workflow, record, before/after, time and trigger.',
            'Kill switch: a documented way to deactivate a workflow or a Notion flag that workflows check before acting.',
            'Incident process: detect, contain, assess impact, notify affected people, fix, and write a short review.',
            'Sample human review of AI decisions monthly and record error rates.',
            'Consider fairness: test for different outcomes by group where decisions affect people, and keep humans responsible for those decisions.',
            'Keep records of approvals, tests and changes for accountability.'
          ],
          'A workflow checks a Notion "Automation enabled" flag at the start. During an incident, the owner switches the flag off and every dependent workflow stops within a minute. The post-incident review identifies a missing validation and adds a test case.',
          [
            'Monitor, log and alert.',
            'Have a tested kill switch.',
            'Learn from incidents with short reviews.'
          ],
          [
            'Having no one on call for automation alerts.',
            'Using AI to make people decisions with no human accountable.'
          ])
      ],
      exercise: {
        title: 'Governance Pack for Your Automations',
        scenario: 'The company now has several automations and AI assistants. The COO asks for a governance pack before more are built.',
        steps: [
          'Create the Automation Register in Notion with the required properties.',
          'Register at least five automations from earlier modules with owners and risk tiers.',
          'Write a one-page AI usage policy with data classes and approved providers.',
          'Implement a kill-switch flag check in one workflow and test it.',
          'Write a short incident response procedure and run a tabletop scenario.'
        ],
        deliverable: 'An Automation Register, an AI usage policy, a kill-switch implementation and an incident procedure.'
      },
      quiz: [
        Q('What is the purpose of an Automation Register?', ['Decoration', 'Track every automation with owner, data and risk', 'Speed up n8n', 'Replace testing'], 1, 'A register provides visibility and accountability.'),
        Q('How should Restricted data be treated?', ['Sent to any AI', 'Never sent to external AI services', 'Posted publicly', 'Shared in chat'], 1, 'Restricted data should not leave controlled environments.'),
        Q('Which is a good kill-switch design?', ['No switch', 'A flag every workflow checks before acting', 'Deleting the server', 'Email to everyone'], 1, 'A central flag allows quick containment.'),
        Q('Why mask data before sending it to an AI provider?', ['To reduce exposure of personal data', 'To add errors', 'To increase cost', 'To slow the workflow'], 0, 'Masking limits what the provider receives.'),
        Q('Who is accountable for decisions affecting people?', ['The AI model', 'A named human', 'Nobody', 'The webhook'], 1, 'Humans remain accountable for decisions that affect people.')
      ]
    },
    // ---------------------------------------------------------------- 10
    {
      id: 'int-10',
      number: 10,
      title: 'Final Capstone',
      durationMin: 240,
      level: 'Advanced',
      objectives: [
        'Deliver an integrated Notion, n8n and AI solution for a realistic organization.',
        'Apply architecture, security, governance and testing practices end to end.',
        'Demonstrate measurable business value and a plan for operations.',
        'Present and defend your design to a mixed technical and business audience.'
      ],
      freeNote: 'FREE: The final capstone must run on Notion Free, self-hosted n8n Community Edition and a local or free-tier AI model. Document any optional paid component and why it was not needed.',
      lessons: [
        L('int-10-1', 'Capstone Brief: Northwind Operations Assistant', 'reading',
          'Build an Operations Assistant for "Northwind Services", a 60-person company. It should capture requests, manage tasks and projects, answer policy questions, summarize meetings, report KPIs weekly and operate under governance.',
          [
            'Capture and tasks: normalized requests from a webhook into Notion with upsert and digests.',
            'Knowledge assistant: indexed approved policies with a citation-based chat workflow.',
            'Meetings: transcript or notes to structured summary, linked tasks and approval before follow-up.',
            'Projects: project setup, health scan and AI-drafted weekly status with PM review.',
            'BI: weekly KPI snapshots, anomaly flags and AI narrative drafts.',
            'Governance: register, data classification, audit log, kill switch and incident procedure.',
            'Choose at least four of the six areas to implement fully; governance is mandatory.',
            'Deliver a design document, working workflows, test results, a demo and a value estimate.'
          ],
          'A candidate picks Capture and tasks, Knowledge assistant, Projects and Governance. She demonstrates a request entering through a secured webhook, a task appearing with an owner, a policy question answered with a citation, a Red project flagged with reasons and the kill switch stopping all workflows.',
          [
            'Combine at least four areas with mandatory governance.',
            'Show value, not only features.',
            'Design before building.'
          ],
          [
            'Building many shallow features instead of fewer dependable ones.',
            'Treating governance as an afterthought.'
          ]),
        L('int-10-2', 'Delivery Plan, Testing and Presentation', 'walkthrough',
          'Structure your work in phases and keep evidence of testing. Your presentation should connect what you built to measurable outcomes and risks.',
          [
            'Week 1: design document, data contracts, risk assessment and Notion setup.',
            'Week 2: core workflows with error handling and logging.',
            'Week 3: AI components with validation, human review and test sets.',
            'Week 4: governance pack, operations runbook, backups and a pilot with two users.',
            'Testing evidence: test case tables, accuracy scores, failure handling results and a security review.',
            'Value estimate: baseline versus pilot results with assumptions stated.',
            'Presentation: 10 minutes covering problem, architecture, live demo, governance, results and next steps.',
            'Be honest about limitations and what you would improve.'
          ],
          'The candidate reports: median triage time fell from 4 hours to 20 minutes in a two-week pilot, 91 percent of 40 policy questions were answered correctly with citations, 3 of 50 AI classifications went to human review, and one incident test shut down all workflows in under a minute.',
          [
            'Phase the work and keep evidence.',
            'Quantify value with assumptions.',
            'Discuss limitations honestly.'
          ],
          [
            'Presenting only a demo with no test evidence.',
            'Claiming savings without a baseline.'
          ],
          [
            'Write the design document and data contracts.',
            'Build core workflows with logging and an error handler.',
            'Add AI components with validation and test sets.',
            'Create the governance pack and kill switch.',
            'Run a pilot with two users and record results.',
            'Prepare the 10-minute presentation.'
          ])
      ],
      exercise: {
        title: 'Northwind Operations Assistant - Final Project',
        scenario: 'Northwind Services struggles with scattered requests, slow answers to policy questions, inconsistent project reporting and no oversight of automation. Leadership has approved a four-week pilot using only free tools.',
        steps: [
          'Write a design document with goals, architecture, data contracts, risks and metrics.',
          'Build the Notion workspace and an Automation Register.',
          'Implement at least four functional areas with validation and error handling.',
          'Add AI components with structured output, human review and test sets.',
          'Implement governance: data classes, audit log, kill switch and incident procedure.',
          'Run a pilot with at least two users and compare results with the baseline.',
          'Prepare a runbook covering backup, restore and operation.',
          'Present a 10-minute demonstration with results, risks and next steps.'
        ],
        deliverable: 'A design document, working workflows (exported JSON), Notion workspace, test evidence, governance pack, runbook and a final presentation.'
      },
      checklist: [
        'Design document includes goals, architecture diagram, data contracts and a risk assessment.',
        'Notion workspace has clear databases, relations, views and templates for the chosen areas.',
        'At least four functional areas are fully implemented and demonstrated.',
        'All Notion writes use stable IDs and an upsert pattern to prevent duplicates.',
        'Inputs are authenticated and validated before processing.',
        'Every AI step returns structured output that is validated, with a human review fallback.',
        'Test sets with recorded accuracy exist for each AI component, including adversarial cases.',
        'A shared error handler and an audit log record failures and automated changes.',
        'Data classification rules are applied and personal data is masked where required.',
        'An Automation Register lists every workflow with owner, risk tier and review date.',
        'A kill switch is implemented and tested, and an incident procedure is documented.',
        'Credentials are stored securely and integrations use minimum permissions.',
        'A pilot with at least two users produced baseline versus result metrics.',
        'A runbook covers start, stop, backup, restore and update steps.',
        'The solution runs entirely on free tools, and any optional paid component is documented.',
        'A 10-minute presentation covers problem, architecture, demo, governance, results and limitations.'
      ],
      quiz: [
        Q('What must be mandatory in the final capstone?', ['Every possible feature', 'Governance', 'A paid subscription', 'Voice assistants'], 1, 'Governance is required in every delivered solution.'),
        Q('Which evidence best supports a claim of time saved?', ['A screenshot of the canvas', 'Baseline versus pilot measurements', 'Opinion', 'Number of nodes'], 1, 'Measured baseline and pilot results support value claims.'),
        Q('What should happen when AI output fails validation in the capstone?', ['Continue automatically', 'Route to human review and log it', 'Delete the record', 'Disable validation'], 1, 'Failing validation must trigger a human fallback.'),
        Q('Why implement upserts with stable IDs?', ['To increase API calls', 'To prevent duplicate records on retries', 'To disable logging', 'To reduce Notion pages'], 1, 'Stable IDs allow safe retries.'),
        Q('Why test with adversarial cases?', ['To lengthen tests', 'To check that malicious or odd input cannot bypass rules', 'To avoid AI', 'To reduce cost'], 1, 'Adversarial tests expose weaknesses in validation and prompts.'),
        Q('Which is the most appropriate response to an incident?', ['Ignore it', 'Use the kill switch to contain, assess, notify and review', 'Delete all data', 'Upgrade the model'], 1, 'Contain first, then assess, notify, fix and learn.'),
        Q('What does the Automation Register enable?', ['Faster typing', 'Visibility of owners, risk and review dates', 'Free hosting', 'Automatic AI training'], 1, 'The register supports accountability and audits.')
      ]
    }
  ];

  return {
    id: 'integration',
    title: 'Notion + n8n + AI Integration',
    subtitle: 'Connect knowledge, automation and AI into dependable business assistants',
    level: 'Intermediate to Advanced',
    durationHours: 12,
    color: '#8b5cf6',
    description: 'A 10-module integration course that combines Notion as the workspace, n8n as the automation engine and AI as the interpreter. You will build task automation, a knowledge assistant, a meeting assistant, a project manager, a BI assistant, a personal assistant and a governance framework, finishing with a final capstone.',
    prerequisites: ['Completion of Notion Mastery modules 1-7 or equivalent', 'Completion of n8n Automation Mastery modules 1-9 or equivalent', 'A running local n8n and a Notion account'],
    freeNote: 'All labs use free tools: Notion Free, self-hosted n8n Community Edition and local or free-tier AI. No paid n8n Cloud is required. Optional paid services are flagged where they appear.',
    modules: modules
  };
})();
