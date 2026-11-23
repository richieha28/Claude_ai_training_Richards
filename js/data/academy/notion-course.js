// Notion Mastery - 10 modules (classic script global, ASCII only)
const AA_NOTION = (function () {
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
      id: 'notion-1',
      number: 1,
      title: 'Introduction to Notion',
      durationMin: 70,
      level: 'Beginner',
      objectives: [
        'Explain what Notion is and how workspaces, teamspaces and pages are organized.',
        'Navigate the sidebar, search, favorites and quick find efficiently.',
        'Decide which work belongs in Notion and which belongs in other tools.',
        'Set up a clean personal workspace on the free plan.'
      ],
      lessons: [
        L('notion-1-1', 'What Notion Is and Why Teams Use It', 'reading',
          'Notion is a connected workspace where documents, databases, wikis and project trackers live in the same place. Instead of juggling a document tool, a spreadsheet and a task app, you build everything from the same two primitives: pages and databases. This lesson explains the mental model so the rest of the course feels obvious.',
          [
            'A workspace is the top-level container; everything you create lives inside one workspace.',
            'Pages are the basic unit - every page can contain text, media, databases and other pages.',
            'Databases are special pages that hold many pages (rows) with typed properties (columns).',
            'Teamspaces (on team plans) group pages by department such as HR, Support or Operations.',
            'The free plan is generous for individuals: unlimited pages and blocks, with limits on file upload size and collaboration features.',
            'Notion replaces many point tools but is not a replacement for a full CRM, ticketing system or accounting package.'
          ],
          'A 12-person operations team replaces a shared spreadsheet of vendor contracts, a Word document of onboarding steps and a sticky-note list of weekly tasks with one workspace: a Vendors database, an Onboarding wiki page and a Weekly Tasks board. Everyone finds things in one place and links between them.',
          [
            'Notion = pages + databases + links between them.',
            'One workspace can replace several scattered tools for small teams.',
            'Know the limits: Notion is a flexible organizer, not a specialist system of record for everything.'
          ],
          [
            'Treating Notion as just a note-taking app and never using databases.',
            'Creating a new workspace for every project instead of using pages inside one workspace.',
            'Moving everything at once without deciding what Notion is for.'
          ]),
        L('notion-1-2', 'Navigating the Interface', 'walkthrough',
          'Speed in Notion comes from knowing the sidebar, search and keyboard shortcuts. A tidy sidebar with a few well-named top-level pages beats a long list of random pages. This walkthrough takes you through the key interface areas and a practical setup.',
          [
            'The left sidebar holds Search, Home, Inbox, teamspaces, Favorites and Private pages.',
            'Ctrl+P (or Cmd+P) opens Quick Find so you can jump to any page by typing part of the title.',
            'Favorites pin the 5-8 pages you use daily to the top of the sidebar.',
            'The three-dot menu on a page controls font, width, lock page, and export options.',
            'Page history (on the page menu) lets you restore earlier versions; the free plan keeps a short history window.',
            'Trash holds deleted pages for a limited time so accidents are recoverable.'
          ],
          'A project manager sets up her sidebar with Home (dashboard), Projects, Meeting Notes, and Reference. She favorites the dashboard and the active project, then uses Quick Find for everything else rather than expanding long nested lists.',
          [
            'Use Quick Find first, the sidebar second.',
            'Favorites are for daily pages only.',
            'Page history and trash protect you from mistakes.'
          ],
          [
            'Nesting pages 6 levels deep so nothing can be found.',
            'Favoriting 30 pages until the favorites list is useless.'
          ],
          [
            'Open Notion and create a page called Home.',
            'Create three child pages: Projects, Notes, Reference.',
            'Add Home to Favorites using the star icon.',
            'Press Ctrl+P and jump to Reference by typing "ref".',
            'Open the page menu and find Page history and Lock page.'
          ]),
        L('notion-1-3', 'Choosing What Goes in Notion', 'diagram',
          'Before building, decide what Notion should own. A simple decision map prevents the common trap of rebuilding every tool inside Notion. Use this lesson to classify your own work into Notion, automation and external systems.',
          [
            'Good fits: wikis, SOPs, meeting notes, lightweight project tracking, content calendars, personal planning.',
            'Medium fits: simple CRM, applicant tracking for small hiring volumes, lightweight inventory lists.',
            'Poor fits: high-volume transactions, financial ledgers, real-time chat, anything needing strict audit controls.',
            'A source of truth is the one place a fact is edited; other tools only read or link to it.',
            'Automation (covered later with n8n) can sync Notion with systems that are better at specialized jobs.'
          ],
          'Diagram in words: Inputs (email, forms, chat) -> n8n automation -> Notion databases (tasks, projects, notes) -> Dashboards and reports -> Humans make decisions. Specialized systems such as accounting software sit beside Notion and connect only through automation.',
          [
            'Define a source of truth for each type of data.',
            'Start with wikis, tasks and projects - the highest-value Notion uses.',
            'Plan to connect, not duplicate, specialist systems.'
          ],
          [
            'Duplicating the same data in Notion and a spreadsheet and editing both.',
            'Using Notion for high-volume data it was not designed to hold.'
          ])
      ],
      exercise: {
        title: 'Set Up Your Starter Workspace',
        scenario: 'You have just joined a small operations team that has no shared system. You are asked to propose a clean starter workspace in Notion that the team can adopt next week.',
        steps: [
          'Create a Home page with a short purpose statement for the workspace.',
          'Add four child pages: Projects, Meeting Notes, SOPs, Reference.',
          'Write a one-paragraph note on your Home page describing what Notion should NOT be used for.',
          'Favorite Home and Projects and practice Quick Find.',
          'List three pieces of information your team currently keeps in email or chat that should move into Notion.'
        ],
        deliverable: 'A Home page with four organized child pages and a short "What goes where" note.'
      },
      quiz: [
        Q('What are the two core building blocks of a Notion workspace?', ['Folders and files', 'Pages and databases', 'Tabs and sheets', 'Channels and threads'], 1, 'Everything in Notion is built from pages and databases; pages can contain databases and databases contain pages.'),
        Q('Which shortcut opens Quick Find on Windows?', ['Ctrl+P', 'Ctrl+Q', 'Alt+F4', 'Ctrl+Shift+Z'], 0, 'Ctrl+P (Cmd+P on Mac) opens Quick Find to jump to any page by title.'),
        Q('Which is generally a POOR fit for Notion?', ['Team wiki', 'Meeting notes', 'High-volume financial ledger', 'Content calendar'], 2, 'Notion is flexible but not designed for high-volume transactional or audited financial records.'),
        Q('What is a source of truth?', ['The oldest document', 'The single place where a fact is edited', 'A backup copy', 'The page with most views'], 1, 'A source of truth is the one location where data is maintained; other systems should link or read from it.'),
        Q('Why limit Favorites to a handful of pages?', ['Notion forbids more than five', 'Favorites cost money', 'A short list stays useful for daily navigation', 'Favorites slow down databases'], 2, 'Favorites are most useful when they only contain the pages you open every day.')
      ]
    },
    // ---------------------------------------------------------------- 2
    {
      id: 'notion-2',
      number: 2,
      title: 'Pages and Blocks',
      durationMin: 75,
      level: 'Beginner',
      objectives: [
        'Create and transform blocks using the slash menu and Markdown shortcuts.',
        'Structure long documents with headings, toggles, columns and callouts.',
        'Reuse content with synced blocks, templates and duplicate pages.',
        'Embed files, links and media responsibly.'
      ],
      lessons: [
        L('notion-2-1', 'Blocks, the Slash Menu and Markdown Shortcuts', 'walkthrough',
          'Every paragraph, heading, checkbox, image and table in Notion is a block that you can move, convert and nest. The slash menu and Markdown shortcuts let you build structured pages without touching the mouse.',
          [
            'Type / to open the block menu and filter by name, for example /todo or /table.',
            'Markdown shortcuts: # for Heading 1, ## for Heading 2, - for bullet, 1. for numbered, [] for to-do.',
            'The six-dot handle left of a block lets you drag, duplicate, delete and "Turn into" another block type.',
            'Indent with Tab to nest blocks under each other; Shift+Tab to outdent.',
            'Type @ to mention people, dates and other pages; mentions create backlinks.',
            'Ctrl+/ opens the action menu for the selected block to change type or color.'
          ],
          'An HR coordinator drafts an onboarding checklist by typing "[] Sign contract", pressing Enter, and repeating. She then selects all the lines, uses Turn into -> Toggle list to group them by week.',
          [
            'Everything is a block and every block can be converted.',
            'Slash and Markdown shortcuts are much faster than menus.',
            'Mentions create links that help navigation later.'
          ],
          [
            'Formatting text manually instead of using heading blocks, which breaks the table of contents.',
            'Pasting content from other tools without checking for broken formatting.'
          ],
          [
            'Create a new page and type /h1 to add a title heading.',
            'Type [] and write three to-do items.',
            'Select the to-dos, drag the handle to reorder them.',
            'Use Turn into to convert them to a bulleted list and back.',
            'Type @ and mention today\'s date.'
          ]),
        L('notion-2-2', 'Layout: Columns, Toggles, Callouts and Table of Contents', 'demo',
          'Readable pages guide the eye. Columns, callouts and toggles let you build page layouts that function as dashboards and documentation hubs. The goal is clarity, not decoration.',
          [
            'Drag a block beside another to create columns; use columns for side-by-side summaries.',
            'Toggles hide detail so a page can show headlines first and depth on demand.',
            'Callouts highlight warnings, definitions and key decisions.',
            'A Table of Contents block builds navigation automatically from your heading blocks.',
            'Dividers separate sections; use them sparingly.',
            'Page width: use full width for tables and dashboards, default width for reading.'
          ],
          'A support lead builds a runbook page: a callout at the top stating "Escalate P1 tickets within 15 minutes", a table of contents, and toggles for each product area so agents scan quickly during an incident.',
          [
            'Use headings so a table of contents can be generated.',
            'Toggles and callouts keep long pages scannable.',
            'Columns suit dashboards but can break on mobile if overused.'
          ],
          [
            'Placing five columns on one row so mobile users cannot read it.',
            'Using callouts for everything so nothing stands out.'
          ]),
        L('notion-2-3', 'Reuse: Synced Blocks, Templates and Embeds', 'reading',
          'Copying the same text into many pages creates maintenance debt. Synced blocks, templates and embeds let you write once and reuse. Understanding when to reuse and when to copy keeps your workspace maintainable.',
          [
            'A synced block shows the same content in multiple pages; edit one copy and all update.',
            'Page templates (template buttons and database templates) create consistent structures for new pages.',
            'Use embeds for Google Docs, Figma, Loom, maps and similar content via /embed.',
            'Embedded files count against storage and may have size limits on the free plan.',
            'Permissions on embedded external content are controlled in the source tool, not in Notion.',
            'Duplicate a page when you want an independent starting copy.'
          ],
          'A company puts its "Security reminder" paragraph in a synced block and places it on the onboarding page, the contractor page and the IT guide. When the policy changes, one edit updates all three.',
          [
            'Synced blocks are for content that must stay identical everywhere.',
            'Templates protect consistency for repeatable pages.',
            'Embeds show content but access is governed by the source tool.'
          ],
          [
            'Using synced blocks for content that should differ per page.',
            'Embedding a private document and assuming all viewers can see it.'
          ])
      ],
      exercise: {
        title: 'Build a Meeting Notes Template Page',
        scenario: 'Your team wastes ten minutes at the start of every meeting deciding how to take notes. You need a reusable meeting page that captures agenda, decisions and action items.',
        steps: [
          'Create a page called Meeting Template with a title, date mention and attendee mention section.',
          'Add headings: Agenda, Discussion, Decisions, Action Items.',
          'Put a callout at the top with the meeting purpose.',
          'Use to-do blocks under Action Items.',
          'Convert the page into a template button or duplicate it twice for a mock meeting.'
        ],
        deliverable: 'A reusable meeting template page plus two filled sample meeting pages.'
      },
      quiz: [
        Q('What does typing "[]" at the start of a line create?', ['A table', 'A to-do checkbox', 'A callout', 'A toggle'], 1, 'The Markdown-style shortcut [] creates a checkbox to-do block.'),
        Q('When should you use a synced block?', ['When content must stay identical in many places', 'When you want an independent copy', 'To embed a PDF', 'To change page width'], 0, 'Synced blocks update everywhere when edited, ideal for shared policy text or reminders.'),
        Q('What feature builds navigation automatically from headings?', ['Callout', 'Table of Contents block', 'Synced block', 'Divider'], 1, 'The Table of Contents block reads heading blocks and creates links.'),
        Q('Why can an embedded private document appear blank to a viewer?', ['Notion deletes it', 'Access is controlled by the source tool', 'Embeds only work for admins', 'Free plans block embeds'], 1, 'Embeds display external content, and viewers still need permission in the original tool.'),
        Q('What is the best reason to use toggles in a long document?', ['Decoration', 'Hide detail so the page is scannable', 'Improve database speed', 'Prevent editing'], 1, 'Toggles collapse detail so readers see headlines first and expand what they need.')
      ]
    },
    // ---------------------------------------------------------------- 3
    {
      id: 'notion-3',
      number: 3,
      title: 'Notion Databases',
      durationMin: 90,
      level: 'Beginner',
      objectives: [
        'Create databases with the right property types for the job.',
        'Use table, board, calendar, timeline, list and gallery views.',
        'Filter, sort and group data to create purposeful views.',
        'Apply database templates for consistent record creation.'
      ],
      lessons: [
        L('notion-3-1', 'Properties: The Columns That Make Data Useful', 'reading',
          'A database is only as useful as its properties. Choosing the right property type determines what you can filter, calculate and automate later. This lesson covers the property types you will use constantly.',
          [
            'Title is required and is the name of each page (row).',
            'Select and Multi-select: use for controlled lists like Status, Priority or Department.',
            'Status property: a special select with To-do, In progress and Done groups that boards understand.',
            'Date supports ranges and reminders; Person assigns owners; Checkbox is a simple yes or no.',
            'Number supports formats such as currency and percent; URL, Email and Phone validate their format.',
            'Created time, Last edited time and Created by are automatic and good for audit trails.',
            'Files & media stores attachments within the free plan size limits.'
          ],
          'A support team creates a Tickets database with Title, Status (New, Investigating, Waiting on customer, Resolved), Priority (P1-P4), Owner (Person), Customer (Text), Due date and Created time. Each property exists because a view or report will use it.',
          [
            'Pick property types for what you will filter or calculate later.',
            'Use Status instead of a plain select for workflows.',
            'Auto properties provide free audit data.'
          ],
          [
            'Using Text for values that should be a controlled Select list, causing typos like "Hgh" and "High".',
            'Adding 25 properties on day one that nobody maintains.'
          ]),
        L('notion-3-2', 'Views: Table, Board, Calendar, Timeline, List, Gallery', 'demo',
          'One database can appear as many different views, each with its own filters, sort and visible properties. This lets one data set serve managers, teammates and customers differently without duplicating data.',
          [
            'Table view: spreadsheet style, best for editing many records at once.',
            'Board view: kanban columns grouped by Status or another select property.',
            'Calendar view: places records on a Date property; good for content and deadlines.',
            'Timeline view: shows date ranges and dependencies for project planning.',
            'Gallery view: cards with cover images; good for people directories or asset libraries.',
            'List view: minimal view for quick scanning and mobile.',
            'Each view can have its own filters, sorts, grouping and visible properties.'
          ],
          'An editorial team uses a single Content database. The writers see a Board by status, the managing editor sees a Calendar of publish dates, and leadership sees a Table filtered to "Published this month" with word counts.',
          [
            'One database, many views - never copy data to make a different layout.',
            'Choose the view for the audience.',
            'Views are saved filters, not separate data.'
          ],
          [
            'Creating multiple databases for the same data because "a view looked different".',
            'Leaving every property visible in every view, creating noise.'
          ],
          [
            'Create a database called Tasks with Name, Status, Due and Owner.',
            'Add 8 sample tasks.',
            'Add a Board view grouped by Status.',
            'Add a Calendar view using Due.',
            'Add a Table view filtered to Status is not Done and sorted by Due ascending.'
          ]),
        L('notion-3-3', 'Filters, Sorts, Grouping and Database Templates', 'walkthrough',
          'Useful views answer a question: "What is overdue?", "What is mine?", "What is unassigned?" Filters, sorts and groups make views answer those questions. Templates make new records consistent.',
          [
            'Filters narrow records by property conditions; combine with And / Or groups.',
            'The "Me" filter on a Person property creates personal "My tasks" views.',
            'Relative date filters like "Past week" or "Next week" keep views up to date automatically.',
            'Sorts order records; multiple sorts apply in order.',
            'Group by Status, Owner or Priority to create sections within a view.',
            'Database templates prefill properties and body content when someone clicks New.',
            'Templates can repeat (daily, weekly, monthly) on paid plans; check current plan details.'
          ],
          'A project manager builds a "Needs attention" view: Status is not Done AND (Due is before today OR Owner is empty). Grouped by Owner, it shows each person their overdue items and a "No owner" group for orphans.',
          [
            'Name views after the question they answer.',
            'Use relative dates so views never need maintenance.',
            'Templates ensure every record starts with the same structure.'
          ],
          [
            'Hard-coding specific dates in filters that stop working next week.',
            'Forgetting to set a default template so new records are inconsistent.'
          ])
      ],
      exercise: {
        title: 'Build a Support Ticket Tracker',
        scenario: 'A five-person support team currently tracks tickets in a shared spreadsheet. Priorities are inconsistent, nobody knows what is overdue, and managers cannot see workload.',
        steps: [
          'Create a Tickets database with Title, Status, Priority, Owner, Customer, Due date and Created time.',
          'Add 12 realistic sample tickets with varied status and priority.',
          'Create views: Board by Status, "My tickets" (Owner is Me), "Overdue" (Due before today and Status not Resolved), and a Calendar by Due.',
          'Create a database template named "Bug report" prefilled with Priority P3 and a body of reproduction steps.',
          'Write two sentences explaining which view each role (agent, lead) should use.'
        ],
        deliverable: 'A Tickets database with at least four named views and one template.'
      },
      quiz: [
        Q('Which property type is best for a controlled Priority list?', ['Text', 'Select', 'URL', 'Created time'], 1, 'Select enforces a fixed list of options and avoids typos.'),
        Q('A board view groups cards by what?', ['A Select or Status property', 'The page title', 'Created by only', 'File attachments'], 0, 'Boards group by a Select, Status or similar grouping property.'),
        Q('Which filter keeps a view self-updating each week?', ['Due equals a fixed date', 'Due is in the past week (relative)', 'Title contains "week"', 'Owner is empty'], 1, 'Relative date filters move with time so views need no maintenance.'),
        Q('What is a database template for?', ['Locking the database', 'Prefilling new records with consistent properties and content', 'Exporting to PDF', 'Changing page width'], 1, 'Templates start every new record with a consistent structure.'),
        Q('Why is it wrong to copy a database to create a new layout?', ['It is illegal', 'Data would be duplicated and drift apart', 'It is faster', 'Views are not allowed'], 1, 'Views show the same data differently; copying creates duplicates that diverge.')
      ]
    },
    // ---------------------------------------------------------------- 4
    {
      id: 'notion-4',
      number: 4,
      title: 'Relations, Rollups and Formulas',
      durationMin: 100,
      level: 'Intermediate',
      objectives: [
        'Link databases with relations and understand one-way versus two-way links.',
        'Summarize related records using rollups.',
        'Write basic formulas for status, dates and text.',
        'Design a relational model that avoids duplication.'
      ],
      lessons: [
        L('notion-4-1', 'Relations: Connecting Databases', 'reading',
          'Relations turn separate lists into a connected system. Instead of typing a client name in every task, you link the task to a record in a Clients database. Edits to the client then appear everywhere.',
          [
            'A relation property links records in one database to records in another.',
            'Two-way relations show the link on both sides; one-way relations show it only where created.',
            'Use relations for entities: Clients, Projects, People, Vendors, Products.',
            'Each entity should live in exactly one database, referenced elsewhere.',
            'Relations can be one-to-many (a client has many projects) or many-to-many with limits set per property.',
            'Relation fields can be shown inside another database through rollups.'
          ],
          'Projects relate to Clients; Tasks relate to Projects. Opening a client page reveals all of its projects, and opening a project reveals its tasks. Nobody retypes the client name.',
          [
            'Model entities as databases and link them with relations.',
            'Prefer two-way relations so navigation works from both ends.',
            'One entity, one home database.'
          ],
          [
            'Using a Select property for something that should be its own database, like Clients.',
            'Creating circular, tangled relations with no clear parent-child direction.'
          ]),
        L('notion-4-2', 'Rollups: Summaries Across Relations', 'walkthrough',
          'Rollups pull a property from related records and compute a summary: count, sum, percent complete, earliest date. They let a parent record report on its children without manual updates.',
          [
            'A rollup needs three choices: the relation, the property to look at, and the calculation.',
            'Common calculations: Count all, Count values, Sum, Average, Min, Max, Percent checked, Percent per group.',
            'Percent checked on a Done checkbox gives a project progress percentage.',
            'Date rollups (Earliest, Latest) can give project start and end from its tasks.',
            'Rollups can display as a progress bar or ring for visual dashboards.',
            'Rollups update automatically as child records change.'
          ],
          'A Projects database has a relation to Tasks. A rollup counts tasks where Status is not Done (Open tasks), another shows percent of tasks that are Done as a progress bar, and a third shows the latest task due date as the "Projected finish".',
          [
            'Rollups calculate on related records, not on the page itself.',
            'Percent complete is the most requested rollup.',
            'Rollups keep reports accurate without manual updates.'
          ],
          [
            'Rolling up a text property when a number or checkbox is needed.',
            'Forgetting that a rollup depends on its relation; breaking the relation breaks the numbers.'
          ],
          [
            'Add a Done checkbox to Tasks, or use a formula to derive it from Status.',
            'In Projects, create a rollup on the Tasks relation using Percent checked of Done.',
            'Set the display to Bar.',
            'Add a second rollup using Count with a filtered view of open tasks.',
            'Test by checking tasks Done and watching the percentage change.'
          ]),
        L('notion-4-3', 'Formulas: Computed Properties', 'demo',
          'Formulas compute values from other properties, enabling labels like "Overdue", ages in days, or text such as "ACME - P1". Notion formulas use functions like if, dateBetween and concat.',
          [
            'Formulas can return text, number, date or boolean values.',
            'if(condition, thenValue, elseValue) is the basic decision function; chain with ifs for multiple branches.',
            'dateBetween(now(), prop("Due"), "days") gives days until due; negative means overdue.',
            'format(), concat() or the + operator build text; round() and floor() clean numbers.',
            'prop("Name") reads another property by name; rename properties carefully because formulas reference names.',
            'Use formulas for logic that would otherwise need manual updating, such as Health, Age or Late flag.',
            'Keep formulas short and document complex ones in the property description.'
          ],
          'Example formula for a Late flag: if(and(prop("Status") != "Done", prop("Due") < now()), "Overdue", "OK"). A second formula for Days open: dateBetween(now(), prop("Created"), "days"). Managers filter on Late = Overdue to see the intervention list.',
          [
            'Use formulas for flags, ages and labels.',
            'Test formulas with edge cases such as empty dates.',
            'Keep them readable; split a complex formula into two properties.'
          ],
          [
            'Writing a 600-character formula nobody can debug.',
            'Forgetting empty-date cases so formulas show errors for new records.'
          ])
      ],
      exercise: {
        title: 'Connect Clients, Projects and Tasks',
        scenario: 'A small agency tracks client work in three separate spreadsheets. The owner wants a single view of each client with project progress and overdue work.',
        steps: [
          'Create three databases: Clients, Projects and Tasks.',
          'Add a two-way relation from Projects to Clients and from Tasks to Projects.',
          'Add a rollup in Projects showing percent of tasks Done.',
          'Add a formula in Tasks that outputs "Overdue" or "OK".',
          'Add a rollup in Clients that counts open tasks across its projects (use a rollup of a rollup if needed).',
          'Populate 3 clients, 5 projects and 20 tasks and screenshot the client page.'
        ],
        deliverable: 'Three linked databases with working progress rollups and an overdue formula.'
      },
      quiz: [
        Q('What is a relation in Notion?', ['A formatting style', 'A link between records in two databases', 'A type of view', 'A page template'], 1, 'A relation property connects records so one database can reference another.'),
        Q('Which rollup calculation gives project progress from a Done checkbox?', ['Sum', 'Percent checked', 'Earliest date', 'Count unique'], 1, 'Percent checked of a Done checkbox among related tasks gives completion percentage.'),
        Q('What does dateBetween(now(), prop("Due"), "days") return when the task is already overdue?', ['A negative number', 'Always zero', 'An error', 'Text'], 0, 'Because the due date is earlier than now, the difference is negative.'),
        Q('Why should Clients be its own database instead of a Select property?', ['Select cannot hold text', 'You can store details and see all related projects', 'Select is paid only', 'Databases are faster'], 1, 'An entity with its own attributes and related records belongs in a database.'),
        Q('Why can renaming a property break formulas?', ['Formulas are read-only', 'Formulas reference properties by name', 'Names cannot change', 'Notion deletes formulas'], 1, 'prop("Name") uses the property name; rename and update dependent formulas together.')
      ]
    },
    // ---------------------------------------------------------------- 5
    {
      id: 'notion-5',
      number: 5,
      title: 'Personal Productivity System',
      durationMin: 85,
      level: 'Intermediate',
      objectives: [
        'Design a personal operating system with tasks, projects, notes and goals.',
        'Create a daily dashboard with filtered database views.',
        'Apply capture, clarify, organize, review habits in Notion.',
        'Build a weekly review ritual that keeps the system trustworthy.'
      ],
      lessons: [
        L('notion-5-1', 'Designing Your Personal Operating System', 'reading',
          'A personal system works when it is simple enough to maintain on your worst day. Most failed Notion systems are over-engineered. This lesson introduces a minimal structure: Inbox, Tasks, Projects, Notes and Goals.',
          [
            'Capture: one inbox where everything lands first, without categorizing.',
            'Clarify: decide what each item is - a task, a project, a note or trash.',
            'Organize: assign project, due date and priority only for items you will act on.',
            'Reflect: review weekly so the system stays accurate.',
            'Engage: work from a Today view, not from the whole database.',
            'Five databases are enough: Tasks, Projects, Notes, Goals and (optionally) Areas.'
          ],
          'An analyst uses a Tasks database with properties Status, Due, Project, Energy (Low/Medium/High) and Context. His Today view filters Due is today or earlier AND Status not Done, sorted by Priority. Anything not categorized stays in an Inbox view until the weekly review.',
          [
            'Simplicity beats feature count.',
            'Always work from a filtered Today view.',
            'Weekly review is what keeps the system reliable.'
          ],
          [
            'Building a 15-database system before collecting any tasks.',
            'Using Notion for capture only on desktop; if mobile capture is hard, you will stop capturing.'
          ]),
        L('notion-5-2', 'Building a Daily Dashboard', 'walkthrough',
          'A dashboard page uses linked database views to show only what matters today. It replaces opening multiple databases and keeps focus on a short list.',
          [
            'Create a Dashboard page and add linked views of your databases with /linked view.',
            'Use filters: Today tasks, Overdue, This week, Waiting on others.',
            'Place a quick-add button (template button or database new button) at the top.',
            'Show a small calendar view for the week and a view of active projects.',
            'Hide properties you do not need to keep the dashboard compact.',
            'Use columns sparingly so the dashboard works on a phone.'
          ],
          'Dashboard layout: top callout with the three priorities for the day; left column "Today" task list; right column "Waiting on" list; bottom row a calendar view and an "Active projects" gallery with progress rollups.',
          [
            'A dashboard is only linked views, not copies.',
            'Keep each view to roughly ten items using filters.',
            'Add quick capture so the dashboard becomes your starting point.'
          ],
          [
            'Embedding every database fully so the dashboard takes minutes to load.',
            'Forgetting to filter, so old completed items clutter the page.'
          ],
          [
            'Create a Dashboard page.',
            'Insert a linked view of Tasks and filter Due is on or before today and Status is not Done.',
            'Insert a second linked view filtered Status = Waiting.',
            'Add a Projects gallery view filtered to Active.',
            'Add a New task button that creates a task with Status = Inbox.'
          ]),
        L('notion-5-3', 'The Weekly Review Ritual', 'demo',
          'The weekly review is a 20-30 minute habit where you clear the inbox, update project status and plan next week. Notion makes it efficient when the review is itself a template with checklists and linked views.',
          [
            'Create a Weekly Review template page with a checklist of steps.',
            'Step 1: process Inbox until empty (decide, delegate, delete).',
            'Step 2: review overdue tasks and reschedule or drop them.',
            'Step 3: review each active project and name the next action.',
            'Step 4: look at the calendar for the next two weeks.',
            'Step 5: write three priorities for next week and a short reflection.',
            'Store reviews in a Reviews database so you can see patterns over time.'
          ],
          'A product manager uses a Reviews database with a template that embeds the Inbox view, Overdue view and Active Projects view. Each Friday she opens a new review page, works the checklist, and writes "What went well / What to change" in two lines.',
          [
            'Make the review a template, not a memory exercise.',
            'Short consistent reviews beat occasional long ones.',
            'Past reviews show recurring blockers.'
          ],
          [
            'Skipping reviews and letting the inbox pile up until the system is abandoned.',
            'Over-planning: listing 20 priorities instead of three.'
          ])
      ],
      exercise: {
        title: 'Build Your Personal Dashboard',
        scenario: 'You manage work for several stakeholders and often forget follow-ups. You want one page that tells you each morning what to do.',
        steps: [
          'Create Tasks, Projects and Notes databases with a minimal property set.',
          'Add 15 real or realistic tasks including some overdue and some "Waiting on".',
          'Create a Dashboard page with Today, Overdue, Waiting and Active Projects linked views.',
          'Create a Weekly Review template with a five-step checklist.',
          'Use the system for three days and write a short note on what you would change.'
        ],
        deliverable: 'A working Dashboard page and Weekly Review template, plus a short reflection note.'
      },
      quiz: [
        Q('What is the purpose of an Inbox in a personal system?', ['Final storage', 'A single place to capture items before sorting', 'Only for emails', 'A project archive'], 1, 'An inbox lets you capture quickly and clarify later.'),
        Q('What should a Today view be built from?', ['A copy of the Tasks database', 'A filtered linked view of Tasks', 'A page of text', 'An embedded spreadsheet'], 1, 'Linked views show filtered live data with no duplication.'),
        Q('Why make the weekly review a template?', ['Notion requires it', 'So the steps are consistent and easy to follow', 'To increase storage', 'To share with customers'], 1, 'A template with a checklist makes the habit repeatable.'),
        Q('Which is a symptom of an over-engineered personal system?', ['Few databases', 'Using it daily', 'Many properties nobody maintains', 'Short Today view'], 2, 'Unused properties and databases create friction and abandonment.'),
        Q('Why are mobile capture options important?', ['Phones are faster', 'If capturing is hard you stop capturing', 'Notion only works on phones', 'Mobile bypasses filters'], 1, 'Frictionless capture anywhere is critical to a trustworthy inbox.')
      ]
    },
    // ---------------------------------------------------------------- 6
    {
      id: 'notion-6',
      number: 6,
      title: 'Project Management in Notion',
      durationMin: 100,
      level: 'Intermediate',
      objectives: [
        'Model projects, tasks, milestones and risks as linked databases.',
        'Use board, timeline and calendar views for planning and tracking.',
        'Produce a status report page from live data.',
        'Run sprints or lightweight cycles with Notion.'
      ],
      lessons: [
        L('notion-6-1', 'The Project Data Model', 'reading',
          'Good project tracking starts with a data model. A typical model has Projects, Tasks, Milestones, Risks and People. Each is a database linked to the others so reporting is automatic.',
          [
            'Projects: name, owner, sponsor, status, start, end, health, objective.',
            'Tasks: name, project, assignee, status, priority, due, estimate.',
            'Milestones: name, project, date, achieved checkbox.',
            'Risks/Issues: description, likelihood, impact, owner, mitigation, status.',
            'Link everything to Projects so a project page shows all related items.',
            'Use a Health property (On track, At risk, Off track) and a formula or rollup to suggest it.'
          ],
          'A PMO sets up four databases. Each new project is created from a template that includes a project brief page, a kickoff checklist, a default Risks table and a Milestones list. Everything the sponsor wants is on one project page.',
          [
            'Link tasks, milestones and risks to the project.',
            'Create projects from a template for consistency.',
            'Health is a decision, supported by data.'
          ],
          [
            'Tracking tasks in one place and risks in a separate document with no link.',
            'Having 10 status values nobody agrees on.'
          ]),
        L('notion-6-2', 'Views for Planning and Tracking', 'demo',
          'Different stakeholders need different views. Teams need a board, managers need a timeline, sponsors need a summary. Using the right view saves meetings.',
          [
            'Board view grouped by Status for day-to-day work.',
            'Timeline view for scheduling and spotting overlaps; use Start and End dates.',
            'Calendar view for deadlines and release dates.',
            'Table view grouped by Assignee for workload checks.',
            'Filter views to the current sprint or the next 30 days.',
            'Gallery view of projects with cover, health and progress rollup for portfolios.'
          ],
          'In a software team, the sprint board shows only tasks in Sprint 14. The timeline shows epics across the quarter. The workload table groups open tasks by assignee and sums estimates so a lead can see someone has 38 hours planned against 30 available.',
          [
            'Choose the view for the audience and the question.',
            'Use estimate rollups for workload visibility.',
            'Keep sprint views filtered to the current cycle.'
          ],
          [
            'Timeline views with no end dates, which makes the chart useless.',
            'Showing sponsors a task-level board instead of a summary.'
          ]),
        L('notion-6-3', 'Status Reports and Sprint Rhythm', 'walkthrough',
          'Status reporting is time-consuming when written from scratch. With linked views, a weekly status page can be assembled in minutes from live data, leaving time for judgment and risk commentary.',
          [
            'Create a Status Report template with sections: Summary, Progress, Next steps, Risks, Decisions needed.',
            'Embed a linked view of tasks completed this week and tasks due next week.',
            'Embed a linked view of open risks sorted by impact.',
            'Add a Health property and a short narrative explaining it.',
            'Use a Reports database so sponsors can browse history.',
            'For sprints: a Sprint database with start, end, goal and a rollup of points completed versus planned.'
          ],
          'A PM opens a new weekly status page from a template. The linked views already show completed tasks and open risks. She writes three sentences of summary, flags one decision needed from the sponsor and publishes the page link; the entire process takes 10 minutes.',
          [
            'Let data populate the report; add your judgment.',
            'Always include decisions needed.',
            'Sprint rollups show velocity trends.'
          ],
          [
            'Writing status by hand each week with no links to real data.',
            'Reporting only what went well and hiding risks.'
          ],
          [
            'Create a Reports database with a Status Report template.',
            'Add linked views filtered by Project and date.',
            'Fill the template for a sample project.',
            'Add a Decisions needed section with an owner and date.',
            'Share the page with a sample colleague as view-only.'
          ])
      ],
      exercise: {
        title: 'Launch a Project Management Workspace',
        scenario: 'You are asked to run a six-week website redesign with a designer, a developer and a content writer. The sponsor wants weekly updates and early warning on risks.',
        steps: [
          'Create Projects, Tasks, Milestones and Risks databases with relations.',
          'Create the Website Redesign project with 15 tasks, 4 milestones and 3 risks.',
          'Create board, timeline and workload views for the team.',
          'Create a weekly Status Report template using linked views.',
          'Produce one completed status report as if it were end of week two.'
        ],
        deliverable: 'A project workspace with linked databases, three views and a completed status report.'
      },
      quiz: [
        Q('Why should milestones and risks be linked to the project?', ['For decoration', 'So the project page and reports show them automatically', 'Notion requires it', 'To avoid permissions'], 1, 'Relations ensure project-level reporting is automatic and consistent.'),
        Q('Which view best shows scheduling overlap?', ['Gallery', 'Timeline', 'List', 'Table sorted by title'], 1, 'Timeline visualizes start and end dates and overlaps.'),
        Q('What makes a weekly status report fast to produce?', ['Writing from memory', 'Linked views filtered by project and date', 'A long meeting', 'Screenshots'], 1, 'Linked live views supply the data, leaving time for commentary.'),
        Q('What should every status report include besides progress?', ['Decisions needed and risks', 'Only good news', 'Team photos', 'Raw task lists'], 0, 'Stakeholders need decisions required and risks to act on.'),
        Q('What does a workload table grouped by assignee help with?', ['Design', 'Spotting overallocation', 'Embedding files', 'Page width'], 1, 'Summing estimates per person shows who is overloaded.')
      ]
    },
    // ---------------------------------------------------------------- 7
    {
      id: 'notion-7',
      number: 7,
      title: 'Knowledge Management',
      durationMin: 90,
      level: 'Intermediate',
      objectives: [
        'Design a wiki structure that people can actually navigate.',
        'Create SOP and documentation templates with owners and review dates.',
        'Use properties, verification and tags to keep knowledge fresh.',
        'Build a searchable second brain for personal or team learning.'
      ],
      lessons: [
        L('notion-7-1', 'Wiki Architecture', 'reading',
          'A wiki fails when nobody can find answers or when content goes stale. The solution is a database-driven wiki with consistent properties rather than a pile of nested pages.',
          [
            'Use one Docs database with properties: Type, Owner, Team, Status, Last reviewed, Tags.',
            'Create views for each team and each doc type such as SOP, Policy, Guide and FAQ.',
            'Keep a Home page with a short list of the top 10 most-used documents.',
            'Use consistent titles such as "How to: Process a refund".',
            'Verified or review-date properties flag content that needs attention.',
            'Archive instead of delete, so history is preserved.'
          ],
          'A 200-person company moves 400 scattered pages into one Docs database. Support, HR and IT each have a filtered view. A "Stale" view shows documents not reviewed in 180 days, so owners get a quarterly cleanup list.',
          [
            'Database-driven wikis scale better than page trees.',
            'Every doc needs an owner and review date.',
            'Titles should follow a consistent pattern.'
          ],
          [
            'Creating deep trees with no search-friendly titles.',
            'Having documents with no owner, so nobody updates them.'
          ]),
        L('notion-7-2', 'SOP and Documentation Templates', 'walkthrough',
          'Standard operating procedures are most useful when they look the same. A template guarantees every SOP has purpose, scope, steps, owner and troubleshooting.',
          [
            'SOP template sections: Purpose, Scope, Roles, Prerequisites, Steps, Exceptions, Troubleshooting, Related docs.',
            'Number the steps and use checkboxes for checklists.',
            'Add screenshots and short videos where steps are visual.',
            'Include "Last reviewed" and "Owner" properties set by the template.',
            'Link to related policies and tools through relation or @mentions.',
            'Add a feedback link so users can report outdated steps.'
          ],
          'A refund SOP includes: Purpose (consistent refunds), Scope (orders under 500 USD), Steps (verify order, check policy, issue refund in payment tool, log in ticket), Exceptions (over 500 USD requires manager approval) and a troubleshooting section for failed refunds.',
          [
            'Use a consistent SOP structure.',
            'Always include exceptions and troubleshooting.',
            'Review dates keep SOPs trustworthy.'
          ],
          [
            'Writing SOPs as long paragraphs rather than numbered steps.',
            'Skipping the exceptions section, which is where mistakes happen.'
          ],
          [
            'Create an SOP database template with the eight standard sections.',
            'Add properties: Owner, Team, Last reviewed, Status.',
            'Write one SOP for a real process such as "Onboard a new vendor".',
            'Add a callout with the escalation contact.',
            'Create a "Needs review" view for docs older than 90 days.'
          ]),
        L('notion-7-3', 'Personal Knowledge Base and Second Brain', 'demo',
          'For individuals, a knowledge base turns notes, articles and ideas into reusable assets. The key is organizing by use, not topic, and connecting notes through relations.',
          [
            'Use a Notes database with Type (Idea, Reference, Meeting, Learning), Source and Tags.',
            'A Resources database stores links with a short summary and why it matters.',
            'Relate notes to projects so knowledge appears where it is used.',
            'Use the PARA idea (Projects, Areas, Resources, Archive) as an organizing lens.',
            'Write summaries in your own words; copy-paste hoards are rarely useful.',
            'Review and prune quarterly to keep signal high.'
          ],
          'A learner records each course module as a Note with a three-line summary, a relation to the "Learn automation" project and tags such as n8n or Notion. When building a workflow, she opens the project page and sees all relevant notes.',
          [
            'Organize knowledge by where you will use it.',
            'Summaries in your own words create understanding.',
            'Relations connect knowledge to action.'
          ],
          [
            'Saving every article with no summary or reason.',
            'Creating hundreds of tags that overlap.'
          ])
      ],
      exercise: {
        title: 'Create a Team Wiki',
        scenario: 'An HR and operations team has policies in email attachments and process steps in a shared drive. New hires cannot find answers and managers keep re-explaining.',
        steps: [
          'Create a Docs database with Type, Owner, Team, Status, Last reviewed and Tags.',
          'Create an SOP template with the eight standard sections.',
          'Write three documents: Leave request process, Expense claim process and New hire first week.',
          'Create views: By team, By type and Needs review.',
          'Create a Wiki Home page with links to the three most important docs and a search tip.'
        ],
        deliverable: 'A Docs database with template, three completed documents and three views.'
      },
      quiz: [
        Q('Why use a database-driven wiki?', ['It looks better', 'Properties and views keep content findable and reviewable', 'It is required by Notion', 'It is cheaper'], 1, 'Properties such as owner and review date enable filtered views and maintenance.'),
        Q('Which property most helps prevent stale documentation?', ['Cover image', 'Last reviewed date', 'Emoji icon', 'Page width'], 1, 'A review date allows filtering for overdue content.'),
        Q('Which SOP section is most often skipped but most valuable?', ['Exceptions and troubleshooting', 'Title', 'Cover', 'Footer'], 0, 'Exceptions and troubleshooting cover the cases where errors occur.'),
        Q('What does PARA stand for?', ['Plan, Act, Review, Archive', 'Projects, Areas, Resources, Archive', 'Pages, Apps, Roles, Actions', 'Priority, Action, Result, Audit'], 1, 'PARA organizes knowledge by actionability.'),
        Q('What should you do with outdated docs?', ['Delete immediately', 'Archive with status so history is preserved', 'Ignore them', 'Move to chat'], 1, 'Archiving preserves history while removing clutter from active views.')
      ]
    },
    // ---------------------------------------------------------------- 8
    {
      id: 'notion-8',
      number: 8,
      title: 'Advanced Notion',
      durationMin: 100,
      level: 'Advanced',
      objectives: [
        'Use advanced formulas, linked databases and filters with confidence.',
        'Build buttons, templates and automation inside Notion.',
        'Understand the Notion API, integrations and tokens at a conceptual level.',
        'Design permissions, sharing and backups safely.'
      ],
      lessons: [
        L('notion-8-1', 'Advanced Formulas and Dashboards', 'demo',
          'Advanced formulas combine multiple properties to give status flags, SLA timers and scoring. Paired with linked-view dashboards, they provide management insight without external tools.',
          [
            'Use ifs(), and(), or(), empty() and not() to build multi-branch logic.',
            'Build SLA timers using dateBetween and priority-based thresholds.',
            'Scoring formulas combine impact and effort into a priority score.',
            'Use lets() or intermediate formula properties to keep logic readable.',
            'Format numbers with round() and toFixed-style formatting for display.',
            'Use dashboard pages with linked views grouped by formula output such as Health.'
          ],
          'A support SLA formula: ifs(prop("Priority") == "P1", 4, prop("Priority") == "P2", 8, 24) gives target hours; a second formula compares dateBetween(now(), prop("Created"), "hours") to the target and returns "Breached", "At risk" or "OK". The dashboard groups tickets by that SLA state.',
          [
            'Break logic into several simple formula properties.',
            'Handle empty values explicitly.',
            'Use formula outputs as grouping properties.'
          ],
          [
            'Embedding magic numbers in many formulas instead of a single configurable property.',
            'Not testing formulas with blank values.'
          ]),
        L('notion-8-2', 'Buttons, Templates and Built-in Automation', 'walkthrough',
          'Buttons and database automations reduce clicks for repeated tasks. They are the first automation layer before moving to external tools such as n8n. Plan limits vary, so always verify which features your plan includes.',
          [
            'Button blocks run a sequence of actions such as add page, edit property, show confirmation.',
            'Database buttons can edit properties for the current row, such as Mark done.',
            'Template buttons insert a block structure into a page.',
            'Database automations (triggers like Status changes) may require a paid plan; check current plan details.',
            'Recurring tasks can be handled through templates or by external automation.',
            'When Notion built-in automation is not enough, use the Notion API through n8n.'
          ],
          'A "Start project" button on the Projects database creates three tasks (Plan, Execute, Review) linked to the project and sets the status to Active. A manager uses one click instead of creating items manually.',
          [
            'Buttons are good for repetitive multi-step actions.',
            'Check plan limits for database automation features.',
            'Use external automation when native features run out.'
          ],
          [
            'Assuming all automation features are free and then hitting a plan limit mid-project.',
            'Creating buttons that edit data without a confirmation, risking accidents.'
          ],
          [
            'Add a button property to Projects named Start project.',
            'Configure it to set Status to Active and add three linked tasks.',
            'Test it on a sample project.',
            'Add a Mark done button to Tasks that sets Status to Done.',
            'Document the buttons in a Reference page.'
          ]),
        L('notion-8-3', 'API, Integrations and Safe Sharing', 'reading',
          'The Notion API lets other tools read and write your databases. This is how n8n connects to Notion later in the pathway. Understanding integration tokens and permissions now prevents accidental data exposure.',
          [
            'An internal integration is created in Notion settings and receives a secret token.',
            'An integration only sees pages and databases that you explicitly share with it.',
            'Never paste secret tokens into public pages, screenshots or chat messages.',
            'Share pages with the minimum permission: Can view, Can comment, Can edit or Full access.',
            'Guests and public links expose content outside your workspace; audit them regularly.',
            'Export workspace content as Markdown/CSV or HTML regularly as a backup.',
            'Page history and trash provide recovery but are not a substitute for backups.'
          ],
          'An operations analyst creates an internal integration called "n8n Automation", shares only the Tasks and Projects databases with it, stores the token in a password manager, and tests the connection later. If the token leaks, she rotates it without touching other data.',
          [
            'Integrations access only what you share with them.',
            'Treat tokens like passwords.',
            'Back up regularly and audit sharing.'
          ],
          [
            'Sharing the whole workspace page with an integration when only one database is needed.',
            'Publishing a page to the web without checking what it contains.'
          ])
      ],
      exercise: {
        title: 'Add an SLA Monitor and Safe Integration Plan',
        scenario: 'Your support team promises responses within hours based on priority. Managers want to see breaches without opening every ticket, and IT wants to know how external tools will access the data.',
        steps: [
          'Add Target hours and SLA state formula properties to the Tickets database.',
          'Create a dashboard view grouped by SLA state.',
          'Add a button that sets Status to Resolved and records the resolved time.',
          'Write a one-page integration plan listing which database an automation tool should access and with which permission.',
          'Document where the secret token will be stored and who can rotate it.'
        ],
        deliverable: 'An SLA dashboard with formulas and buttons, plus a short integration and security plan.'
      },
      quiz: [
        Q('Why split a complex formula into several properties?', ['Notion forbids long formulas', 'It improves readability and debugging', 'It reduces storage', 'It hides data'], 1, 'Smaller formulas are easier to maintain and test.'),
        Q('What can an internal integration access?', ['The whole internet', 'Only pages and databases explicitly shared with it', 'All workspaces', 'Only trash'], 1, 'Integrations only see content that is shared with them.'),
        Q('Where should an integration token be stored?', ['In a public Notion page', 'In a password manager or secrets store', 'In chat', 'In a screenshot'], 1, 'Tokens are secrets and should be kept in secure storage.'),
        Q('Which statement about database automations is safest?', ['They are free everywhere', 'Verify the plan limits before relying on them', 'They never need testing', 'They replace APIs entirely'], 1, 'Features vary by plan so verify before depending on them.'),
        Q('Is page history a replacement for backups?', ['Yes always', 'No, it is limited and should be supplemented with exports', 'Only on free plan', 'Only for admins'], 1, 'History windows are limited; export regularly for safe backups.')
      ]
    },
    // ---------------------------------------------------------------- 9
    {
      id: 'notion-9',
      number: 9,
      title: 'Notion for Business',
      durationMin: 100,
      level: 'Advanced',
      objectives: [
        'Apply Notion to HR, support, sales and operations scenarios.',
        'Design lightweight CRM, applicant tracking and onboarding systems.',
        'Plan rollout, training and adoption for a team.',
        'Set governance: ownership, naming, permissions and review cycles.'
      ],
      lessons: [
        L('notion-9-1', 'HR and Operations Systems', 'walkthrough',
          'HR and operations teams manage repeatable processes with many handoffs. Notion can track onboarding, time-off requests, hiring and vendor management when designed around databases and checklists.',
          [
            'Onboarding: a Tasks template per role with owners such as HR, IT and Manager.',
            'Applicants database with Stage, Role, Source, Score and Interviewers; board by stage.',
            'Time-off requests database with Person, Dates, Type, Status and Approver.',
            'Vendors database with Contract end date, Owner, Spend, Risk and renewal reminder views.',
            'Keep sensitive HR data in restricted pages; use minimal permission sharing.',
            'Check privacy rules and legal requirements before storing personal data.'
          ],
          'An HR generalist creates an Onboarding database. When a new hire is added, a template creates a checklist: IT sets up laptop, manager schedules intro meetings, HR collects forms. A view "Starting this month" lets the team see upcoming start dates and incomplete steps.',
          [
            'Templates and checklists make onboarding repeatable.',
            'Restrict sensitive people data carefully.',
            'Renewal views prevent missed contract deadlines.'
          ],
          [
            'Storing sensitive personal data in broadly shared pages.',
            'Tracking hires in Notion without defined stage definitions.'
          ],
          [
            'Create an Applicants database with Stage, Role and Score.',
            'Build a board view grouped by Stage.',
            'Create an Onboarding template with owners and due offsets.',
            'Add a Vendors database with a renewal view for next 90 days.',
            'Apply restricted permissions to the Applicants page.'
          ]),
        L('notion-9-2', 'Support, Sales and Customer Operations', 'demo',
          'Customer-facing teams use Notion to track accounts, issues and knowledge. A lightweight CRM and support knowledge base can serve small teams before a larger platform is needed.',
          [
            'Accounts database with Industry, Owner, Stage, Value and Next step date.',
            'Contacts database related to Accounts; Interactions database for calls and emails.',
            'Support knowledge base with FAQs and troubleshooting guides linked from tickets.',
            'Pipeline board by stage with value rollups for forecasting.',
            'Weekly account review view: accounts with no interaction in the last 14 days.',
            'Use integrations later to import leads from forms or email.'
          ],
          'A sales lead builds an Accounts board by Stage. A formula flags "Stale" when Last contact is more than 14 days old. A Friday review lists stale accounts per owner, which has cut missed follow-ups in the pilot team.',
          [
            'A lightweight CRM is a related set of databases.',
            'Stale-account views prevent forgotten follow-ups.',
            'Know when you outgrow Notion and need a dedicated CRM.'
          ],
          [
            'Entering interactions inconsistently so reports are meaningless.',
            'Building a complex CRM before validating the basic process.'
          ]),
        L('notion-9-3', 'Rollout, Adoption and Governance', 'reading',
          'Tools succeed through adoption, not design. A rollout plan covers pilot, training, standards and ongoing ownership. Governance keeps the workspace healthy as it grows.',
          [
            'Start with a pilot team and one high-value use case.',
            'Document naming conventions, property standards and who owns each database.',
            'Run a 30-minute training and provide a short "How we use Notion" page.',
            'Assign a workspace owner and an admin backup.',
            'Review permissions, guests and public pages quarterly.',
            'Archive unused pages and databases to reduce clutter.',
            'Measure adoption: active editors, pages created, docs reviewed on time.'
          ],
          'A 40-person company pilots Notion with the support team for six weeks. They agree on naming rules, move the top 20 documents, and hold a 30-minute training. After success metrics are met, they roll out to operations and HR using the same templates.',
          [
            'Pilot first and expand with proof.',
            'Document conventions and owners.',
            'Review permissions and content quarterly.'
          ],
          [
            'Announcing a company-wide launch with no training or owners.',
            'Letting every team invent its own property names for the same thing.'
          ])
      ],
      exercise: {
        title: 'Design a Business Pilot',
        scenario: 'The operations director wants to pilot Notion with HR and support for six weeks and needs a plan, a minimal template set and success metrics.',
        steps: [
          'Choose one use case per team: HR onboarding and support knowledge base.',
          'Define the databases, properties and views needed.',
          'Write naming conventions and ownership rules on a Governance page.',
          'Create a 30-minute training outline.',
          'Define three success metrics and how you will measure them.'
        ],
        deliverable: 'A one-page pilot plan with database designs, governance rules and metrics.'
      },
      quiz: [
        Q('What is the best first step in a business rollout?', ['Company-wide launch', 'Pilot with one team and one use case', 'Buy all plans', 'Migrate everything'], 1, 'A focused pilot proves value and reveals problems before scale.'),
        Q('How should sensitive HR data be handled?', ['Shared with everyone', 'Restricted permissions and privacy review', 'Stored in public pages', 'Sent via chat'], 1, 'Sensitive data needs minimal access and compliance with policy.'),
        Q('What does a stale-account view help prevent?', ['Formula errors', 'Missed customer follow-ups', 'Page deletion', 'Duplicate pages'], 1, 'It shows accounts without recent contact so follow-ups are not forgotten.'),
        Q('Who should own each database?', ['Nobody', 'A named owner responsible for quality', 'All users equally', 'The newest hire'], 1, 'Named ownership ensures maintenance and accountability.'),
        Q('Which metric indicates healthy knowledge management?', ['Number of emojis', 'Share of docs reviewed on time', 'Page cover images', 'Number of columns'], 1, 'On-time reviews show content stays accurate.')
      ]
    },
    // ---------------------------------------------------------------- 10
    {
      id: 'notion-10',
      number: 10,
      title: 'Notion Capstone',
      durationMin: 150,
      level: 'Advanced',
      objectives: [
        'Design and build a complete workspace for a realistic organization.',
        'Apply databases, relations, rollups, formulas, templates and dashboards together.',
        'Document governance, sharing and integration readiness.',
        'Present and defend your design decisions.'
      ],
      lessons: [
        L('notion-10-1', 'Capstone Brief and Design Approach', 'reading',
          'The capstone asks you to design an operations workspace for a fictional 30-person services company, "Northwind Services". You will combine everything you have learned. A planned design avoids rework.',
          [
            'Requirements: project tracking, client records, internal wiki, task dashboard, weekly reporting.',
            'Start with a diagram of entities: Clients, Projects, Tasks, Docs, People, Reports.',
            'Decide the source of truth and relations between entities.',
            'Plan the views per role: staff, project manager, executive.',
            'Define naming conventions and ownership before building.',
            'Plan integration readiness: which databases an automation will read or write.'
          ],
          'A candidate sketches six databases and arrows: Clients -> Projects -> Tasks, Projects -> Reports, Docs related to Projects and Teams. Each database gets a short list of properties and an owner. Only after the sketch is approved does she build.',
          [
            'Design on paper before building.',
            'Map entities and relations first.',
            'Plan views by role.'
          ],
          [
            'Starting to build before understanding requirements.',
            'Skipping governance and integration readiness.'
          ]),
        L('notion-10-2', 'Build, Test and Present', 'walkthrough',
          'Building is iterative: create databases, add sample data, build views, test with a colleague and refine. Presentation explains the why behind your choices.',
          [
            'Build databases and relations first, then rollups and formulas.',
            'Add at least 30 realistic sample records to make views meaningful.',
            'Create dashboards per role with filtered linked views.',
            'Test with a colleague who must complete three tasks without help.',
            'Write a short README page: purpose, structure, how to add records, who owns what.',
            'Prepare a 5-minute walkthrough showing the value, not every feature.'
          ],
          'The builder asks a colleague to "log a new client project and find overdue tasks". The colleague hesitates at the project creation step, so the builder adds a "New project" button with a template and re-tests successfully.',
          [
            'Usability testing reveals gaps designers miss.',
            'Sample data makes dashboards credible.',
            'A README reduces support questions.'
          ],
          [
            'Testing only with yourself.',
            'Demoing features instead of the business outcome.'
          ],
          [
            'Create all databases and relations.',
            'Add rollups and formulas.',
            'Populate sample data.',
            'Build staff, manager and executive dashboards.',
            'Run a usability test and fix two issues.',
            'Write the README and record or deliver the walkthrough.'
          ])
      ],
      exercise: {
        title: 'Northwind Services Workspace',
        scenario: 'Northwind Services is a 30-person consulting firm. Work is tracked in email and spreadsheets. Leadership wants a single workspace for clients, projects, tasks, internal docs and weekly reporting by next month.',
        steps: [
          'Draw an entity diagram and list properties for each database.',
          'Build Clients, Projects, Tasks, Docs and Reports databases with relations.',
          'Add rollups for project progress and formulas for overdue and health flags.',
          'Create dashboards for staff, project managers and executives.',
          'Create templates for new project, meeting and SOP.',
          'Write governance rules and integration readiness notes.',
          'Present a five-minute walkthrough of the business value.'
        ],
        deliverable: 'A complete Northwind workspace with README, governance page and walkthrough.'
      },
      checklist: [
        'Entity diagram completed and approved before building.',
        'At least five databases with meaningful relations.',
        'At least two rollups and two formulas that answer business questions.',
        'At least four named views with clear audience and purpose.',
        'Templates created for projects, meetings and SOPs.',
        'Dashboards built for staff, managers and executives using linked views.',
        'At least 30 realistic sample records loaded.',
        'Governance page lists database owners, naming rules and review cycle.',
        'Sharing and permissions reviewed with minimal access applied.',
        'Integration readiness note lists databases for automation and token handling.',
        'README written and usability test completed with one colleague.',
        'Five-minute walkthrough delivered or recorded.'
      ],
      quiz: [
        Q('What should come first in the capstone?', ['Building dashboards', 'Entity design and requirements', 'Sharing publicly', 'Choosing emojis'], 1, 'Planning entities and requirements prevents rework.'),
        Q('Which relation chain best models consulting work?', ['Tasks -> Clients -> Projects with no links', 'Clients -> Projects -> Tasks', 'Docs -> Emoji -> Tasks', 'Tasks only'], 1, 'Clients own projects and projects contain tasks.'),
        Q('Why include a usability test?', ['To satisfy Notion', 'To discover gaps the builder cannot see', 'To increase storage', 'To remove views'], 1, 'A colleague unfamiliar with your design reveals real friction.'),
        Q('Which is the best use of a formula in the capstone?', ['Decorating pages', 'Flagging overdue or at-risk work', 'Embedding files', 'Hiding databases'], 1, 'Formulas should automate business signals such as overdue flags.'),
        Q('What does integration readiness mean?', ['Having many integrations installed', 'Knowing which databases automation will access and how tokens are handled', 'Publishing the workspace', 'Disabling permissions'], 1, 'It means planning access scope and secret handling before connecting tools.'),
        Q('Why should a governance page exist?', ['To meet a theme requirement', 'To define owners, naming and review cycles so the workspace stays healthy', 'To replace the wiki', 'To store passwords'], 1, 'Governance keeps the workspace consistent and maintained as it grows.'),
        Q('What is the best way to present the capstone?', ['Show every feature', 'Explain the business outcome and key design decisions', 'Read all properties', 'Skip the demo'], 1, 'Stakeholders care about outcomes and reasoning, not feature lists.')
      ]
    }
  ];

  return {
    id: 'notion',
    title: 'Notion Mastery',
    subtitle: 'From pages and blocks to a connected business workspace',
    level: 'Beginner to Advanced',
    durationHours: 12,
    color: '#0ea5e9',
    description: 'A practical 10-module course that takes you from the basics of pages and blocks to relational databases, project systems, knowledge bases and a business-ready workspace. Every module ends with a hands-on exercise and a quiz.',
    prerequisites: ['A free Notion account (https://www.notion.so)', 'No coding experience required'],
    freeNote: 'Everything in this course can be completed on the Notion Free plan. Features that depend on a paid plan (for example some database automations, longer page history and Notion AI) are flagged where they appear.',
    modules: modules
  };
})();
