/* Claude AI Professional Training — 30-Hour Curriculum
   Designed and copyrighted by Richards Edwin */

const COURSE_META = {
  title: "Claude AI Professional Training",
  subtitle: "30-Hour Instructor-Led Curriculum",
  author: "Designed and copyrighted by Richards Edwin",
  totalHours: 30,
  modulesCount: 10
};

const MODULES = [
  {
    id: 1,
    title: "Introduction to AI & Claude AI",
    shortTitle: "Module 1",
    hours: 3,
    overview: "Build a solid foundation in artificial intelligence, generative AI, and large language models. Understand what Claude is, who makes it, and where it delivers the most value in professional work.",
    objectives: [
      "Define AI, machine learning, and generative AI in plain language",
      "Explain how large language models work at a conceptual level",
      "Describe Claude AI's strengths, positioning, and typical use cases",
      "Identify realistic scenarios where Claude adds value vs. where it does not"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "Basics of Artificial Intelligence",
        body: `<p><strong>Artificial Intelligence (AI)</strong> is the field of computer science focused on building systems that perform tasks requiring human-like intelligence: understanding language, recognizing patterns, making decisions, and learning from data.</p>
        <p>AI is not one technology—it is a spectrum:</p>
        <ul>
          <li><strong>Rule-based systems</strong> — follow explicit if/then logic (e.g., tax calculators, spam filters from the 2000s).</li>
          <li><strong>Machine learning (ML)</strong> — systems that improve by finding patterns in data without being explicitly programmed for every case.</li>
          <li><strong>Deep learning</strong> — ML using neural networks with many layers, powering modern speech, vision, and language tools.</li>
        </ul>
        <p>In business, AI is used for forecasting, fraud detection, recommendation engines, document processing, and conversational assistants. The key insight for learners: <em>AI augments human work—it does not replace judgment, accountability, or domain expertise.</em></p>`,
        example: `<strong>Example:</strong> A bank uses ML to flag suspicious transactions (pattern recognition). A marketing team uses generative AI to draft campaign copy (content creation). Both are AI, but they solve different problems.`
      },
      {
        title: "What is Generative AI?",
        body: `<p><strong>Generative AI</strong> creates new content—text, images, code, audio, video—based on patterns learned from training data. Unlike traditional AI that might classify an email as "spam" or "not spam," generative AI <em>produces</em> the email reply itself.</p>
        <p>Generative models learn statistical relationships in data. When you type a prompt, the model predicts the most likely useful continuation token by token (word by word for text).</p>
        <p><strong>Common generative AI applications:</strong></p>
        <ul>
          <li>Drafting documents, emails, and reports</li>
          <li>Summarizing long content</li>
          <li>Brainstorming ideas and outlines</li>
          <li>Generating and explaining code</li>
          <li>Analyzing uploaded files and answering questions about them</li>
        </ul>
        <p><strong>Important limitation:</strong> Generative AI can produce fluent but incorrect information ("hallucinations"). Always verify facts, numbers, legal statements, and citations before use in professional settings.</p>`,
        example: `<strong>Example:</strong> You ask Claude to draft a project kickoff email. It generates a polished draft in seconds. You review tone, names, dates, and facts before sending—human review remains essential.`
      },
      {
        title: "Introduction to Large Language Models (LLMs)",
        body: `<p>A <strong>Large Language Model (LLM)</strong> is a generative AI model trained on vast amounts of text to understand and produce human language. "Large" refers to billions of parameters (learned weights) and enormous training datasets.</p>
        <p><strong>How LLMs work (simplified):</strong></p>
        <ol>
          <li>Training — the model reads text from books, websites, code, and curated datasets to learn language patterns.</li>
          <li>Instruction tuning — the model is refined to follow instructions and be helpful in conversation.</li>
          <li>Inference — when you send a prompt, the model generates a response by predicting one token at a time.</li>
        </ol>
        <p><strong>Key LLM capabilities:</strong> summarization, translation, Q&amp;A, reasoning over text, code generation, and multi-step task breakdown.</p>
        <p><strong>Key LLM limitations:</strong> knowledge cutoffs, no direct access to your private systems (unless integrated), potential hallucinations, and context window limits (how much text fits in one conversation).</p>`,
        example: `<strong>Example:</strong> Claude is an LLM. When you paste a 10-page policy document and ask "What are the three main compliance risks?", Claude reads the text in context and generates an answer—without searching the live internet unless a specific feature enables it.`
      },
      {
        title: "Overview of Claude AI",
        body: `<p><strong>Claude</strong> is an AI assistant created by <strong>Anthropic</strong>, a safety-focused AI research company. Claude is designed to be helpful, harmless, and honest—prioritizing useful responses while reducing harmful or misleading outputs.</p>
        <p><strong>How to access Claude:</strong></p>
        <ul>
          <li><strong>claude.ai</strong> — web interface for individuals and teams</li>
          <li><strong>Claude mobile apps</strong> — iOS and Android</li>
          <li><strong>Claude API</strong> — for developers integrating Claude into applications</li>
          <li><strong>Enterprise / Team plans</strong> — for organizations with admin controls</li>
        </ul>
        <p><strong>Claude's distinguishing strengths:</strong></p>
        <ul>
          <li>Strong long-document understanding (large context windows on supported plans)</li>
          <li>Clear, nuanced writing and analysis</li>
          <li>Thoughtful handling of sensitive topics</li>
          <li>File upload support for PDFs, spreadsheets, images, and more</li>
          <li>Projects for organizing ongoing work with persistent context</li>
        </ul>`,
        example: `<strong>Example:</strong> A compliance analyst uploads a 50-page regulatory PDF to Claude, asks targeted questions, and receives structured summaries—saving hours of manual reading while still requiring expert verification.`
      },
      {
        title: "Claude AI Use Cases",
        body: `<p>Claude delivers value across roles and industries. The table below maps common professional use cases to Claude capabilities.</p>
        <table class="data-table">
          <tr><th>Role / Function</th><th>Use Case</th><th>Claude Helps By…</th></tr>
          <tr><td>Marketing</td><td>Campaign copy, social posts</td><td>Drafting variations, adjusting tone, brainstorming angles</td></tr>
          <tr><td>Operations</td><td>SOPs, process docs</td><td>Structuring steps, writing clear instructions</td></tr>
          <tr><td>HR</td><td>Job descriptions, onboarding</td><td>Creating templates, interview question banks</td></tr>
          <tr><td>Finance / Analytics</td><td>Report interpretation</td><td>Summarizing CSV uploads, explaining trends in plain language</td></tr>
          <tr><td>Engineering</td><td>Code, SQL, debugging</td><td>Generating snippets, explaining errors, reviewing logic</td></tr>
          <tr><td>Leadership</td><td>Meeting summaries</td><td>Extracting decisions, action items, and open questions</td></tr>
        </table>
        <p><strong>When NOT to rely on Claude alone:</strong> final legal advice, unsupervised medical decisions, handling classified data without approval, or any task where unverified output creates serious risk.</p>`,
        example: `<strong>Example:</strong> A customer support lead uses Claude to draft empathetic reply templates for common ticket types. Agents personalize each reply before sending—combining AI speed with human judgment.`
      }
    ],
    demos: [
      { title: "Explore Claude's communication style", prompt: "Explain what a large language model is to a non-technical business manager in 150 words. Use one analogy and three bullet points for key takeaways." },
      { title: "Identify use cases for your role", prompt: "I work as a [YOUR ROLE] in [YOUR INDUSTRY]. List 5 practical ways Claude could help me in my daily work, ranked by impact. For each, note one limitation I should watch for." }
    ],
    apply: [
      { task: "Write a 200-word explanation of generative AI suitable for your team's internal wiki. Include one analogy, two benefits, and two risks.", hint: "Audience: colleagues with no AI background. Tone: professional but accessible." },
      { task: "Create a table of 5 tasks in your current job where Claude could help, and 5 tasks where it should not be used without human oversight.", hint: "Be specific to your role—generic answers score lower in training assessments." },
      { task: "In Claude.ai, run the second Demo prompt with your actual role filled in. Save the response in your notepad and note one use case you will try this week.", hint: "Replace [YOUR ROLE] and [YOUR INDUSTRY] with real values." }
    ],
    quiz: [
      { q: "Generative AI primarily differs from traditional classification AI because it:", options: ["Uses smaller datasets", "Creates new content rather than only labeling data", "Cannot process text", "Requires no training"], correct: 1, explain: "Generative AI produces new outputs (text, code, images). Classification AI assigns labels or categories." },
      { q: "An LLM generates responses by:", options: ["Searching Google in real time", "Predicting tokens sequentially based on learned patterns", "Copying answers from a fixed database", "Random selection"], correct: 1, explain: "LLMs predict the next token based on context—they do not retrieve pre-stored answers." },
      { q: "Claude is developed by:", options: ["OpenAI", "Google", "Anthropic", "Microsoft"], correct: 2, explain: "Claude is Anthropic's AI assistant." },
      { q: "A key professional practice when using Claude's output is:", options: ["Publish without review", "Verify facts and review before use", "Assume all numbers are correct", "Share confidential data freely"], correct: 1, explain: "Human verification is essential—especially for facts, compliance, and customer-facing content." },
      { q: "Which is a realistic Claude use case?", options: ["Unsupervised legal verdicts", "Drafting a meeting summary from notes", "Storing passwords in chats", "Replacing all hiring decisions"], correct: 1, explain: "Meeting summaries are a common, low-risk augmentation use case with human review." }
    ],
    summary: {
      takeaways: [
        "AI spans rule-based systems, machine learning, and generative models—Claude is in the generative LLM category.",
        "Generative AI creates content; it can be wrong—verification is part of the workflow.",
        "LLMs learn language patterns and respond to prompts within context and knowledge limits.",
        "Claude excels at writing, analysis, coding help, and document work across business functions.",
        "Match the tool to the task—and keep humans accountable for final decisions."
      ],
      next: "Proceed to Module 2 to set up your Claude account, learn the interface, and understand capabilities and limitations hands-on."
    }
  },
  {
    id: 2,
    title: "Getting Started with Claude AI",
    shortTitle: "Module 2",
    hours: 3,
    overview: "Configure your Claude account, navigate the interface confidently, organize work with chats and Projects, upload files safely, and build a clear mental model of what Claude can and cannot do.",
    objectives: [
      "Complete account setup and choose an appropriate plan",
      "Navigate the Claude interface and core features",
      "Organize conversations using chats and Projects",
      "Upload and work with files responsibly",
      "Articulate Claude's capabilities and limitations for your organization"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "Account Setup",
        body: `<p>Getting started with Claude takes a few minutes. Visit <strong>claude.ai</strong> and sign up using email or a supported single sign-on provider.</p>
        <p><strong>Plan options (overview):</strong></p>
        <ul>
          <li><strong>Free</strong> — limited daily usage; good for exploration and light personal use.</li>
          <li><strong>Pro</strong> — higher usage limits, priority access, access to advanced models on supported plans.</li>
          <li><strong>Team / Enterprise</strong> — collaboration, admin controls, billing, and organizational policies.</li>
        </ul>
        <p><strong>Setup checklist:</strong></p>
        <ol>
          <li>Create and verify your account</li>
          <li>Review privacy settings and organizational policy (if applicable)</li>
          <li>Set profile preferences (name, appearance)</li>
          <li>Confirm which plan meets your usage needs</li>
          <li>Bookmark claude.ai and install mobile app if needed</li>
        </ol>
        <p>If your employer provides Claude, use the approved account—do not paste work data into personal accounts without authorization.</p>`,
        example: `<strong>Example:</strong> A freelancer starts on Free to learn prompting, then upgrades to Pro when client work requires longer sessions and file uploads daily.`
      },
      {
        title: "Claude Interface Overview",
        body: `<p>The Claude web interface is designed for conversation-first work. Know these core areas:</p>
        <ul>
          <li><strong>Chat area</strong> — where messages appear; your primary workspace.</li>
          <li><strong>Input box</strong> — type prompts; supports multi-line input (Shift+Enter for new line).</li>
          <li><strong>Attachment control</strong> — upload files for analysis (PDF, CSV, images, etc.).</li>
          <li><strong>Sidebar</strong> — recent chats, Projects, and navigation.</li>
          <li><strong>New chat</strong> — start fresh context when switching to an unrelated task.</li>
          <li><strong>Settings</strong> — profile, appearance, subscription, and data preferences.</li>
        </ul>
        <p><strong>Trainer tip:</strong> Treat each chat as a focused session. Long, unrelated topics in one chat can dilute context and reduce answer quality. Start a new chat when the subject changes significantly.</p>`,
        example: `<strong>Example:</strong> You use one chat to refine a job description, then start a new chat for Python debugging—keeping contexts separate improves clarity.`
      },
      {
        title: "Managing Chats and Projects",
        body: `<p><strong>Chats</strong> are individual conversation threads. Rename them for retrieval (e.g., "Q3 Report Summary – Draft 2"). Delete chats you no longer need, especially if they contained sensitive drafts.</p>
        <p><strong>Projects</strong> group related chats and files under a persistent knowledge base. Use Projects when:</p>
        <ul>
          <li>Working on a multi-week initiative (product launch, research topic)</li>
          <li>Uploading reference documents reused across sessions</li>
          <li>Sharing context with teammates on Team plans</li>
        </ul>
        <p><strong>Best practices:</strong></p>
        <ul>
          <li>One Project per major workstream</li>
          <li>Add project instructions: tone, audience, constraints, glossary</li>
          <li>Attach canonical documents (style guide, brief, dataset dictionary)</li>
        </ul>`,
        example: `<strong>Example:</strong> A Project named "Website Redesign 2026" holds the brand guide PDF, user research notes, and three chats: copy, UX feedback, and stakeholder emails.`
      },
      {
        title: "Uploading Files",
        body: `<p>Claude can analyze uploaded files within supported formats and plan limits. Typical uploads include PDF, TXT, MD, CSV, XLSX, DOCX, and images.</p>
        <p><strong>Workflow:</strong></p>
        <ol>
          <li>Click the attachment (paperclip) icon in the input area</li>
          <li>Select one or more files</li>
          <li>Write a clear prompt describing what you need from the file</li>
          <li>Review output against the source document</li>
        </ol>
        <p><strong>Security guidance:</strong></p>
        <ul>
          <li>Do not upload passwords, API keys, or unapproved personal data</li>
          <li>Redact sensitive identifiers when possible</li>
          <li>Follow your company's data classification policy</li>
          <li>For confidential work, use enterprise accounts with approved data handling</li>
        </ul>`,
        example: `<strong>Example:</strong> Upload a 15-page vendor contract PDF and prompt: "List payment terms, termination clauses, and liability caps in a table."`
      },
      {
        title: "Understanding Claude's Capabilities and Limitations",
        body: `<p><strong>Claude CAN:</strong></p>
        <ul>
          <li>Draft, edit, and summarize text in many styles and languages</li>
          <li>Analyze uploaded documents and datasets (within limits)</li>
          <li>Help with code, SQL, debugging, and explanations</li>
          <li>Break complex tasks into steps and suggest frameworks</li>
          <li>Maintain context within a conversation and Project</li>
        </ul>
        <p><strong>Claude CANNOT (or should not be trusted to):</strong></p>
        <ul>
          <li>Guarantee factual accuracy—always verify critical facts</li>
          <li>Access your local files or internal systems unless integrated via API/tools</li>
          <li>Replace licensed professional judgment (legal, medical, financial)</li>
          <li>Know real-time events beyond its knowledge cutoff unless browsing/tools are enabled</li>
          <li>Execute actions in your organization automatically without proper integrations</li>
        </ul>
        <p>Build the habit: <strong>Prompt → Review → Verify → Apply.</strong></p>`,
        example: `<strong>Example:</strong> Claude summarizes a medical article for a lay audience—but a clinician verifies clinical claims before patient-facing use.`
      }
    ],
    demos: [
      { title: "First conversation setup", prompt: "I'm setting up Claude for professional use. Give me a 5-step checklist for organizing my workspace (naming chats, using Projects, file hygiene). Keep it actionable." },
      { title: "File upload practice", prompt: "I'm about to upload a business document. What should I include in my prompt to get a structured summary with: purpose, key points, risks, and recommended next steps?" }
    ],
    apply: [
      { task: "Create a Claude account (or verify access). Start a new chat, rename it using a professional naming convention, and send your first structured prompt.", hint: "Naming example: 'Module2-Exercise-Interface-Test'" },
      { task: "Create a Project for a real or simulated work initiative. Write 5 project instructions covering tone, audience, format, constraints, and glossary terms.", hint: "Project instructions save time—you won't repeat context every chat." },
      { task: "Draft a one-page 'Acceptable Use' personal checklist: what you will and will not upload to Claude at work.", hint: "Reference your organization's policy if one exists." }
    ],
    quiz: [
      { q: "Projects are best used when:", options: ["You need one-off trivia answers", "You have ongoing work with shared context and files", "You want to avoid uploading documents", "You only use Claude once"], correct: 1, explain: "Projects persist context and files across related chats." },
      { q: "Before uploading a file to Claude at work, you should:", options: ["Check data policy and remove sensitive data", "Upload everything for best results", "Disable antivirus", "Share your login"], correct: 0, explain: "Data governance comes first—never upload unapproved sensitive information." },
      { q: "Starting a new chat is recommended when:", options: ["The topic changes significantly", "You want to lose all history always", "Claude asks a question", "Never—always use one chat"], correct: 0, explain: "Fresh chats reduce context confusion between unrelated tasks." },
      { q: "Which is a limitation of Claude?", options: ["Summarizing a PDF", "Guaranteed 100% factual accuracy", "Drafting emails", "Explaining code"], correct: 1, explain: "LLMs can hallucinate—verification is required for critical facts." },
      { q: "The recommended workflow for professional use is:", options: ["Prompt → Publish immediately", "Prompt → Review → Verify → Apply", "Upload → Delete source", "Ignore output"], correct: 1, explain: "Human review and verification are core to responsible use." }
    ],
    summary: {
      takeaways: [
        "Choose the right plan and account type for your personal or organizational needs.",
        "Use chats for focused sessions; use Projects for sustained work with shared context.",
        "Upload files with clear prompts—and follow data security policies.",
        "Know what Claude does well and where human oversight is non-negotiable.",
        "Prompt → Review → Verify → Apply should become your default workflow."
      ],
      next: "Module 3 covers prompt engineering—the skill that most directly improves your results with Claude."
    }
  },
  {
    id: 3,
    title: "Prompt Engineering Fundamentals",
    shortTitle: "Module 3",
    hours: 3,
    overview: "Master the core skill of prompt engineering: writing instructions that produce clear, accurate, and usable Claude outputs. Learn role prompting, zero-shot and few-shot techniques, and systematic refinement.",
    objectives: [
      "Define prompt engineering and its impact on output quality",
      "Write specific prompts with context, task, format, and constraints",
      "Apply role-based, zero-shot, and few-shot prompting",
      "Iterate and refine prompts using a structured methodology"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "What is Prompt Engineering?",
        body: `<p><strong>Prompt engineering</strong> is the practice of designing inputs (prompts) to guide an LLM toward useful, accurate, and well-formatted responses. Because LLMs respond probabilistically to instructions, small changes in wording, structure, and context often produce large differences in output.</p>
        <p>Prompt engineering is not "tricking" the AI—it is <strong>clear communication</strong>: defining the task, audience, constraints, and success criteria as you would for a skilled colleague.</p>
        <p><strong>The ROI is immediate:</strong> better prompts reduce editing time, rework, and hallucination risk. In professional settings, prompt quality often matters more than which model tier you use.</p>`,
        example: `<strong>Weak prompt:</strong> "Write about cybersecurity."<br><strong>Strong prompt:</strong> "You are an IT trainer. Write a 300-word plain-language introduction to phishing for new employees. Include 3 red flags and 2 reporting steps. Tone: friendly, not alarmist."`
      },
      {
        title: "Writing Effective Prompts",
        body: `<p>Use the <strong>CTF framework</strong> (Context, Task, Format):</p>
        <ul>
          <li><strong>Context</strong> — background, audience, purpose, relevant facts</li>
          <li><strong>Task</strong> — exactly what Claude should do (summarize, compare, draft, critique)</li>
          <li><strong>Format</strong> — bullets, table, word count, sections, JSON, tone</li>
        </ul>
        <p>Add <strong>Constraints</strong> when needed: what to exclude, reading level, compliance rules, or "do not invent statistics."</p>
        <p><strong>Checklist for every important prompt:</strong></p>
        <ol>
          <li>Who is the audience?</li>
          <li>What is the deliverable?</li>
          <li>What format and length?</li>
          <li>What must be included or avoided?</li>
          <li>How will success be judged?</li>
        </ol>`,
        example: `<strong>Example:</strong> "Context: B2B SaaS onboarding email. Task: Draft welcome email. Format: subject line + body under 200 words. Constraints: no hype, include link placeholder {{DOCS_URL}}, CTA to schedule kickoff call."`
      },
      {
        title: "Role-Based Prompting",
        body: `<p><strong>Role-based prompting</strong> assigns Claude a persona or expert identity to shape vocabulary, depth, and perspective.</p>
        <p>Pattern: <code>You are a [ROLE] with [EXPERIENCE]. Your audience is [AUDIENCE].</code></p>
        <p><strong>Effective roles:</strong> senior copywriter, compliance analyst, Python tutor, executive coach, UX researcher.</p>
        <p><strong>Caution:</strong> Role prompts improve style and structure—they do not make Claude a licensed professional. A "lawyer" role does not replace legal counsel.</p>`,
        example: `<strong>Example:</strong> "You are an experienced HR business partner. Draft interview questions for a mid-level Data Analyst role. Focus on SQL, stakeholder communication, and data ethics. Provide 8 behavioral questions with what good answers might include."`
      },
      {
        title: "Zero-Shot and Few-Shot Prompting",
        body: `<p><strong>Zero-shot</strong> — no examples; you describe the task and Claude performs it cold.</p>
        <p><strong>Few-shot</strong> — you provide 1–3 input/output examples so Claude learns the pattern.</p>
        <p>Use zero-shot for common tasks (summarize, translate). Use few-shot when format is unusual, brand voice is specific, or consistency across items matters.</p>
        <p><strong>Few-shot template:</strong></p>
        <pre>Example 1 Input: …\nExample 1 Output: …\n\nExample 2 Input: …\nExample 2 Output: …\n\nNow do the same for:\nInput: …</pre>`,
        example: `<strong>Zero-shot:</strong> "Summarize this article in 5 bullets."<br><strong>Few-shot:</strong> Provide two examples of support ticket → empathetic reply, then paste the new ticket.`
      },
      {
        title: "Prompt Refinement Techniques",
        body: `<p>First outputs are drafts—not failures. Refine systematically:</p>
        <ol>
          <li><strong>Diagnose</strong> — what's wrong? (too long, wrong tone, missing section, invented facts)</li>
          <li><strong>Constrain</strong> — add word limits, "use only provided text," or required headings</li>
          <li><strong>Decompose</strong> — split one big prompt into steps (outline → draft → polish)</li>
          <li><strong>Ask Claude to self-critique</strong> — "List weaknesses in your previous answer and revise."</li>
          <li><strong>Compare versions</strong> — run A/B prompts and keep the template that wins</li>
        </ol>
        <p>Save winning prompts as reusable templates (Module 8 expands on this).</p>`,
        example: `<strong>Refinement:</strong> "Your draft is too technical. Rewrite for a CEO audience, max 120 words, no jargon, lead with business impact."`
      }
    ],
    demos: [
      { title: "CTF framework in action", prompt: "Context: Internal announcement of new hybrid work policy.\nTask: Draft the announcement.\nFormat: subject line + 3 short paragraphs + 4 bullet FAQ.\nConstraints: inclusive tone, no legal claims, 350 words max." },
      { title: "Few-shot pattern", prompt: "Convert feature notes into user-facing release notes.\n\nExample Input: Fixed login timeout on mobile\nExample Output: • Mobile sign-in now stays active longer—fewer unexpected logouts\n\nExample Input: Added CSV export for reports\nExample Output: • Export reports to CSV for Excel and BI tools\n\nNow convert:\nInput: Improved search speed on dashboard by 40%" }
    ],
    apply: [
      { task: "Rewrite this weak prompt using CTF: 'Help me with a presentation.'", hint: "Add audience, topic, slide count, tone, and deliverable type." },
      { task: "Create a role-based prompt for your job function. Run it in Claude and iterate twice using refinement techniques.", hint: "Document what changed between version 1 and version 3 in your notepad." },
      { task: "Build one few-shot prompt with two examples for a repetitive formatting task you do at work.", hint: "Good candidates: email replies, ticket summaries, title rewrites." }
    ],
    quiz: [
      { q: "The CTF framework stands for:", options: ["Code, Test, Fix", "Context, Task, Format", "Copy, Transfer, File", "Chat, Train, Finish"], correct: 1, explain: "Context, Task, Format is a simple prompt structure for clarity." },
      { q: "Few-shot prompting means:", options: ["Providing no examples", "Providing example input/output pairs", "Using very short prompts", "Avoiding roles"], correct: 1, explain: "Few-shot teaches patterns via examples." },
      { q: "Role-based prompting helps primarily with:", options: ["Guaranteed factual accuracy", "Tone, depth, and perspective", "Bypassing security", "Unlimited context"], correct: 1, explain: "Roles shape how Claude responds—not factual infallibility." },
      { q: "When output is too vague, the best first step is:", options: ["Abandon AI", "Add specificity: audience, format, constraints", "Use one-word prompts", "Upload unrelated files"], correct: 1, explain: "Specificity and constraints usually fix vagueness." },
      { q: "Prompt engineering is best described as:", options: ["Clear communication of task and constraints", "Hidden tricks to hack AI", "Only for developers", "Unnecessary with modern models"], correct: 0, explain: "It's professional communication—critical for everyone." }
    ],
    summary: {
      takeaways: [
        "Prompt engineering is clear communication—Context, Task, Format (+ Constraints).",
        "Role prompts shape voice and expertise level; they don't replace professionals.",
        "Use few-shot examples when format or voice must be consistent.",
        "Refine systematically: diagnose, constrain, decompose, self-critique.",
        "Save effective prompts—you'll reuse them weekly."
      ],
      next: "Module 4 applies these skills to content creation: blogs, emails, resumes, social media, and marketing copy."
    }
  }
  ,
  {
    id: 4,
    title: "Content Creation with Claude AI",
    shortTitle: "Module 4",
    hours: 3,
    overview: "Apply Claude to professional writing workflows: long-form content, business email, career documents, social media, and marketing copy—with brand-consistent quality.",
    objectives: [
      "Draft blogs and articles with structure, SEO awareness, and audience fit",
      "Write clear, professional emails for varied scenarios",
      "Create tailored resumes and cover letters",
      "Generate platform-appropriate social content",
      "Produce marketing copy using proven frameworks"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "Writing Blogs and Articles",
        body: `<p>Claude accelerates the writing pipeline: research outline → draft → edit → finalize. Provide topic, audience, angle, word count, and structure preferences.</p>
        <p><strong>Recommended workflow:</strong></p>
        <ol>
          <li>Ask for 5 headline options and a detailed outline</li>
          <li>Approve outline, then request section-by-section draft</li>
          <li>Request edit pass for tone, clarity, and redundancy</li>
          <li>Add your original insights, examples, and verified facts</li>
        </ol>
        <p>For SEO-oriented content, specify primary keyword, secondary keywords, meta description length, and internal linking suggestions—then verify keyword stuffing doesn't harm readability.</p>`,
        example: `<strong>Prompt:</strong> "Write a 900-word blog for small business owners on 'How to reduce invoice delays.' Audience: non-finance founders. Include H2 subheadings, actionable checklist, and a 150-character meta description. Tone: practical, authoritative."`
      },
      {
        title: "Email Drafting",
        body: `<p>Email is one of Claude's highest-ROI use cases. Specify recipient relationship, purpose, desired outcome, tone, and length.</p>
        <p><strong>Common email types:</strong> follow-ups, apologies, introductions, project updates, sales outreach, internal announcements.</p>
        <p>Always request <strong>2–3 subject line options</strong>. For sensitive emails, ask Claude to flag phrases that may sound dismissive or ambiguous.</p>
        <p><strong>Never send without:</strong> verifying names, dates, attachments mentioned, and commitments Claude may have invented.</p>`,
        example: `<strong>Prompt:</strong> "Draft a polite follow-up to a client who hasn't responded in 10 days regarding a proposal. Tone: warm, professional, not pushy. Under 120 words. Include subject line options."`
      },
      {
        title: "Resume and Cover Letter Creation",
        body: `<p>Claude helps translate experience into impact-focused bullet points. Provide raw career history, target role, and job description.</p>
        <p><strong>Resume best practices with Claude:</strong></p>
        <ul>
          <li>Use action verbs (Led, Built, Reduced, Delivered)</li>
          <li>Quantify results where possible ($, %, time saved)</li>
          <li>Tailor keywords from the job posting—authentically</li>
          <li>Keep formatting simple for ATS compatibility</li>
        </ul>
        <p>Cover letters should connect your evidence to the employer's stated needs—not generic praise.</p>`,
        example: `<strong>Prompt:</strong> "Here is my experience [paste]. Job description [paste]. Create 5 resume bullet points emphasizing data analysis and stakeholder communication. Then draft a 250-word cover letter opening that references one specific company initiative."`
      },
      {
        title: "Social Media Content Generation",
        body: `<p>Each platform has different norms. Tell Claude the platform, character limits, hashtag strategy, and brand voice.</p>
        <table class="data-table">
          <tr><th>Platform</th><th>Guidance for Claude</th></tr>
          <tr><td>LinkedIn</td><td>Professional, insight-led, 1–3 short paragraphs, minimal hashtags</td></tr>
          <tr><td>Instagram</td><td>Visual caption, emoji policy, CTA, hashtag count</td></tr>
          <tr><td>X (Twitter)</td><td>Concise, hook-first, thread structure if needed</td></tr>
        </table>
        <p>Request <strong>3 variations</strong> for A/B testing. Batch-create a week of content from one content brief.</p>`,
        example: `<strong>Prompt:</strong> "Create 3 LinkedIn posts announcing our customer webinar on AI productivity. Tone: expert but approachable. Each under 180 words. Include CTA to register. No more than 3 hashtags each."`
      },
      {
        title: "Marketing Copywriting",
        body: `<p>Marketing copy must connect customer pain → solution → proof → action. Frameworks help Claude structure persuasion:</p>
        <ul>
          <li><strong>AIDA</strong> — Attention, Interest, Desire, Action</li>
          <li><strong>PAS</strong> — Problem, Agitate, Solution</li>
          <li><strong>Before-After-Bridge</strong> — current state, desired state, your product as bridge</li>
        </ul>
        <p>Provide persona, product USP, objections, and CTA. Ask for headline/subhead/body/CTA variants for landing pages or ads.</p>`,
        example: `<strong>Prompt:</strong> "Using PAS framework, write landing page copy for a project management tool targeting remote creative agencies. Address objection: 'We already use spreadsheets.' Include headline, 3 benefit bullets, and CTA button text."`
      }
    ],
    demos: [
      { title: "Blog outline to draft", prompt: "Topic: Benefits of hybrid meetings when done well. Audience: team leads. First give me an outline with 5 H2 sections. Stop and wait for my approval before drafting." },
      { title: "Email + social bundle", prompt: "We're launching a free Claude AI workshop for employees. Draft: (1) internal email to all staff, (2) one LinkedIn post for our company page. Tone: encouraging, professional. Include dates as placeholders." }
    ],
    apply: [
      { task: "Produce a full blog outline + 400-word intro on a topic from your industry. Iterate once for tone.", hint: "Use section-by-section drafting if the full piece is long." },
      { task: "Draft three emails you actually need this month (follow-up, request, thank-you). Customize each after generation.", hint: "Compare Claude versions—pick best sentences, not whole unedited drafts." },
      { task: "Create a social content pack: 5 posts for one platform with consistent brand voice.", hint: "Define voice in 3 adjectives before prompting." }
    ],
    quiz: [
      { q: "AIDA stands for:", options: ["Analyze, Implement, Deploy, Audit", "Attention, Interest, Desire, Action", "Ask, Inform, Draft, Approve", "Automate, Integrate, Document, Archive"], correct: 1, explain: "AIDA is a classic copywriting structure." },
      { q: "For resume bullet points, Claude should emphasize:", options: ["Generic duties only", "Quantified impact and action verbs", "Personal hobbies unrelated to role", "Long paragraphs"], correct: 1, explain: "Impact-focused bullets perform best." },
      { q: "Before sending AI-drafted email, you must verify:", options: ["Nothing", "Names, dates, facts, and commitments", "Only spelling", "Font color"], correct: 1, explain: "Emails create obligations—verify details." },
      { q: "Few-shot is especially useful for social content when:", options: ["You need consistent brand voice across posts", "You never post online", "You want random formats", "You avoid examples"], correct: 0, explain: "Examples lock in voice and structure." },
      { q: "Best blog workflow with Claude is:", options: ["One-shot publish without review", "Outline → draft → edit → add your expertise", "Only generate titles", "Skip structure"], correct: 1, explain: "Structured iteration produces professional content." }
    ],
    summary: {
      takeaways: ["Use outline-first workflows for long-form content.", "Emails and social posts need platform-specific constraints.", "Resumes and cover letters require tailoring and quantified impact.", "Marketing frameworks (AIDA, PAS) improve Claude's persuasive structure.", "You are the editor-in-chief—AI drafts, you finalize."],
      next: "Module 5 focuses on document and file analysis—PDFs, summaries, comparisons, and reports."
    }
  },
  {
    id: 5,
    title: "Document & File Analysis",
    shortTitle: "Module 5",
    hours: 3,
    overview: "Learn to upload, analyze, summarize, compare, and extract structured information from business documents using Claude—safely and efficiently.",
    objectives: [
      "Work effectively with PDF and document uploads",
      "Summarize long documents for different audiences",
      "Compare multiple documents systematically",
      "Extract structured fields and action items",
      "Assemble reports from source files"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "Working with PDFs",
        body: `<p>PDFs are common in legal, finance, HR, and operations. Upload via the attachment icon, then prompt with precision.</p>
        <p><strong>Tips for better PDF results:</strong></p>
        <ul>
          <li>State page ranges if only a section matters ("Focus on pages 12–20")</li>
          <li>Ask for citations or quotes when accuracy is critical</li>
          <li>For scanned PDFs, ensure text is selectable; OCR quality affects results</li>
          <li>Split very large files into logical sections if needed</li>
        </ul>`,
        example: `<strong>Prompt:</strong> "From the uploaded SLA PDF, extract uptime guarantee, penalty clause, and support response times. Present as a 3-row table with direct quotes and page numbers if visible."`
      },
      {
        title: "Summarizing Long Documents",
        body: `<p>Match summary depth to audience:</p>
        <ul>
          <li><strong>Executive summary</strong> — 5 bullets, decisions and risks only</li>
          <li><strong>Operational summary</strong> — processes, owners, timelines</li>
          <li><strong>Study summary</strong> — concepts, definitions, examples</li>
        </ul>
        <p>Instruction: <em>"Use only information from the document. If unclear, say 'Not stated in document' rather than guessing."</em> This reduces hallucination on missing data.</p>`,
        example: `<strong>Prompt:</strong> "Summarize this 40-page report for a CFO: financial impact, top 3 risks, recommended actions. Max 250 words. Flag any metrics you cannot verify from the text."`
      },
      {
        title: "Comparing Multiple Documents",
        body: `<p>Upload two or more files and define comparison dimensions upfront.</p>
        <p><strong>Comparison prompt pattern:</strong></p>
        <ol>
          <li>List documents and their purpose</li>
          <li>Define columns or criteria (price, terms, scope, dates)</li>
          <li>Request differences, similarities, and recommendation</li>
        </ol>
        <p>Table format works best for side-by-side analysis.</p>`,
        example: `<strong>Prompt:</strong> "Compare Vendor A and Vendor B proposals. Table columns: pricing model, implementation timeline, support, exit clause, risk flags. End with a neutral summary of tradeoffs—not a final decision."`
      },
      {
        title: "Extracting Key Information",
        body: `<p>Extraction turns unstructured text into usable data. Specify schema:</p>
        <pre>Extract:
- Dates
- People / roles
- Dollar amounts
- Deadlines
- Action items (owner + task)</pre>
        <p>For contracts: parties, effective date, termination, liability, governing law. For meeting notes: decisions, blockers, next steps.</p>`,
        example: `<strong>Prompt:</strong> "Extract all action items from these meeting notes. Format: | Owner | Task | Due Date | Priority |. If owner is missing, mark TBD."`
      },
      {
        title: "Creating Reports from Uploaded Files",
        body: `<p>Combine multiple sources into one deliverable. Define report sections, tone, and audience.</p>
        <p><strong>Report workflow:</strong></p>
        <ol>
          <li>Upload sources (PDF, CSV, notes)</li>
          <li>Request per-source summaries</li>
          <li>Request integrated report with executive summary, findings, appendix</li>
          <li>Verify cross-references and numbers against originals</li>
        </ol>`,
        example: `<strong>Prompt:</strong> "Using the three uploaded files (survey CSV summary, interview notes, market PDF), create a 2-page findings report for leadership: Executive Summary, Key Themes, Recommendations, Data Gaps."`
      }
    ],
    demos: [
      { title: "Structured PDF extraction", prompt: "I've uploaded a policy document. Extract: purpose, scope, key rules, exceptions, and enforcement steps. Use headings and bullets. Quote short phrases where helpful." },
      { title: "Document comparison", prompt: "Compare the two uploaded versions of our project brief. Highlight what changed in scope, timeline, budget, and success metrics. Output as a change log table." }
    ],
    apply: [
      { task: "Upload a real or sample PDF (non-confidential). Produce an executive summary and a detailed outline.", hint: "Use the 'only from document' constraint." },
      { task: "Compare two versions of any document (policy, spec, email thread). Create a change log.", hint: "Define comparison columns before uploading." },
      { task: "Extract structured action items from meeting notes into a table.", hint: "Include Owner, Task, Due Date, Status columns." }
    ],
    quiz: [
      { q: "To reduce hallucinations when summarizing, ask Claude to:", options: ["Invent missing data", "Use only document content and flag gaps", "Ignore the upload", "Summarize from memory"], correct: 1, explain: "Grounding in source text reduces fabrication." },
      { q: "Comparing two proposals, the best output format is usually:", options: ["Unstructured essay", "Comparison table with defined criteria", "Single sentence", "Poetry"], correct: 1, explain: "Tables make differences scannable." },
      { q: "For scanned PDFs with poor OCR:", options: ["Results may be unreliable—improve source if possible", "Accuracy is guaranteed", "Never upload PDFs", "Claude reads images perfectly always"], correct: 0, explain: "Text quality in the source affects extraction quality." },
      { q: "Extraction prompts should include:", options: ["Vague instructions", "A clear schema of fields to extract", "No format", "Only emojis"], correct: 1, explain: "Schemas define structured output." },
      { q: "Multi-source reports should be verified for:", options: ["Only grammar", "Cross-references and numeric accuracy", "Font choice", "Nothing"], correct: 1, explain: "Integrated reports need fact-checking across sources." }
    ],
    summary: {
      takeaways: ["PDF work requires precise prompts and page scope when needed.", "Tailor summary depth to audience; constrain to source text.", "Comparisons need explicit criteria and tabular output.", "Extraction uses schemas—fields, owners, dates.", "Reports combine sources; verify numbers and quotes."],
      next: "Module 6 extends analysis to CSV and Excel data—summaries, trends, and interpretation."
    }
  },
  {
    id: 6,
    title: "Data Analysis using Claude AI",
    shortTitle: "Module 6",
    hours: 3,
    overview: "Analyze spreadsheets with Claude: explore datasets, summarize metrics, identify trends, build tables, and interpret findings for business decisions—with appropriate validation.",
    objectives: [
      "Upload and explore CSV/Excel files",
      "Generate descriptive summaries and insights",
      "Identify trends, patterns, and outliers",
      "Request formatted tables for stakeholders",
      "Interpret data responsibly and acknowledge limits"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "Working with CSV and Excel Files",
        body: `<p>Upload spreadsheets directly. Start with exploration before analysis:</p>
        <ul>
          <li>Column names and data types</li>
          <li>Row count and missing values</li>
          <li>Sample rows and obvious anomalies</li>
        </ul>
        <p>Clean data improves results: consistent date formats, clear headers, one record per row. If Claude misinterprets columns, provide a data dictionary in your prompt.</p>`,
        example: `<strong>Prompt:</strong> "Analyze the uploaded sales CSV. First describe schema: columns, types, missing values, date range. Then wait for my go-ahead before deeper analysis."`
      },
      {
        title: "Data Summarization",
        body: `<p>Ask for descriptive statistics appropriate to column types:</p>
        <ul>
          <li><strong>Numeric</strong> — sum, mean, median, min, max, std dev</li>
          <li><strong>Categorical</strong> — counts, top categories, distribution</li>
          <li><strong>Time series</strong> — period totals, growth rates</li>
        </ul>
        <p>Request plain-language interpretation: "What would a regional manager learn from this in 3 sentences?"</p>`,
        example: `<strong>Prompt:</strong> "Summarize the customer feedback CSV: total responses, average rating, top 5 complaint themes with counts, and one positive trend."`
      },
      {
        title: "Finding Trends and Insights",
        body: `<p>Move from description to insight by asking targeted questions:</p>
        <ul>
          <li>Month-over-month or year-over-year changes</li>
          <li>Seasonality and spikes</li>
          <li>Correlations (with caution—correlation ≠ causation)</li>
          <li>Outliers and data quality issues</li>
        </ul>
        <p>Ask Claude to separate <strong>observations</strong> (what the data shows) from <strong>hypotheses</strong> (why it might be happening).</p>`,
        example: `<strong>Prompt:</strong> "Identify the top 3 trends in monthly revenue by region. For each: observation, possible hypothesis, suggested follow-up analysis. Note any data limitations."`
      },
      {
        title: "Creating Tables",
        body: `<p>Request stakeholder-ready tables in Markdown or CSV format. Specify sort order, filters, and column labels.</p>
        <p>Examples: top 10 products by revenue, churn by segment, pipeline by stage, budget vs. actual by department.</p>
        <p>For presentations, ask for a table plus a one-line "so what" for each row group.</p>`,
        example: `<strong>Prompt:</strong> "Create a table: Top 10 SKUs by revenue with columns Product, Revenue, Units, Avg Price, YoY % change. Sort by revenue descending. Add a 2-sentence executive comment below."`
      },
      {
        title: "Basic Data Interpretation",
        body: `<p>Claude helps translate numbers into narrative—but <strong>you validate</strong> for decisions with financial or operational impact.</p>
        <p><strong>Interpretation checklist:</strong></p>
        <ol>
          <li>Are sample size and time range sufficient?</li>
          <li>Could missing data bias the result?</li>
          <li>Are comparisons apples-to-apples?</li>
          <li>Does the narrative overclaim causation?</li>
          <li>Can key figures be spot-checked in Excel?</li>
        </ol>`,
        example: `<strong>Prompt:</strong> "Interpret this dataset for a leadership slide: 3 insights, 2 risks in the data quality, 1 recommended action. Label each insight as High/Medium/Low confidence."`
      }
    ],
    demos: [
      { title: "Explore then analyze", prompt: "Upload attached CSV. Step 1: schema report. Step 2: summary stats for all numeric columns. Step 3: two insights and one chart description I could build in Excel." },
      { title: "Manager-ready table", prompt: "From the sales data, build a pivot-style summary: revenue by region and quarter. Flag any quarter with >20% drop from prior quarter." }
    ],
    apply: [
      { task: "Upload a sample CSV (public dataset or sanitized internal data). Complete schema report + summary + 3 insights.", hint: "Use a data dictionary if column names are abbreviated." },
      { task: "Ask Claude for a table you'd present to your manager. Spot-check 3 numbers manually.", hint: "Validation habit prevents embarrassing meetings." },
      { task: "Write a prompt that separates observations from hypotheses for a trend analysis.", hint: "Explicitly ask Claude to label each section." }
    ],
    quiz: [
      { q: "Before deep analysis, you should:", options: ["Skip exploration", "Understand schema, types, and missing data", "Delete headers", "Only ask for charts"], correct: 1, explain: "Exploration prevents misinterpretation of columns." },
      { q: "Correlation in data means:", options: ["One variable always causes the other", "Variables move together—not necessarily causation", "Data is invalid", "No further analysis needed"], correct: 1, explain: "Correlation ≠ causation—a core data literacy point." },
      { q: "For critical business decisions, calculations should be:", options: ["Validated independently", "Never checked", "Hidden", "Guessed"], correct: 0, explain: "Spot-check figures before high-stakes use." },
      { q: "A data dictionary helps Claude by:", options: ["Explaining column meanings and codes", "Replacing the CSV", "Removing rows", "Encrypting data"], correct: 0, explain: "Context on column definitions improves accuracy." },
      { q: "Good insight prompts ask Claude to note:", options: ["Only positive trends", "Data limitations and confidence", "Nothing about quality", "Irrelevant anecdotes"], correct: 1, explain: "Limitations make insights trustworthy." }
    ],
    summary: {
      takeaways: ["Explore schema and quality before analyzing.", "Summarize with stats + plain-language meaning.", "Separate observations from hypotheses.", "Tables should be sorted, labeled, and decision-ready.", "Validate figures before high-stakes use."],
      next: "Module 7 applies Claude to coding: generation, debugging, SQL, Python, and HTML/CSS."
    }
  },
  {
    id: 7,
    title: "Coding Assistance with Claude AI",
    shortTitle: "Module 7",
    hours: 3,
    overview: "Use Claude as a coding partner for generation, debugging, explanation, SQL, Python, and front-end snippets—while testing everything you deploy.",
    objectives: [
      "Generate code from clear specifications",
      "Debug with error messages and minimal reproducible examples",
      "Understand unfamiliar code via explanations",
      "Write and optimize SQL queries",
      "Build Python scripts and HTML/CSS prototypes"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "Code Generation",
        body: `<p>Specify language, runtime version, inputs, outputs, edge cases, and style preferences. Ask for comments and error handling.</p>
        <p><strong>Generation prompt template:</strong></p>
        <pre>Language: Python 3.11
Task: [description]
Input: [format]
Output: [format]
Edge cases: [empty file, nulls, etc.]
Include: docstring, type hints, example usage</pre>
        <p>Review for security (SQL injection, hardcoded secrets, unsafe eval) before production use.</p>`,
        example: `<strong>Prompt:</strong> "Write a Python function that reads a CSV and returns rows where 'status' is 'overdue' and 'days_late' > 30. Handle missing file with clear error. Include pytest-style test cases."`
      },
      {
        title: "Debugging Code",
        body: `<p>Effective debug prompts include:</p>
        <ul>
          <li>Full error message and stack trace</li>
          <li>Relevant code snippet (minimal reproducible example)</li>
          <li>What you expected vs. what happened</li>
          <li>Environment (OS, language version, framework)</li>
        </ul>
        <p>Ask Claude to explain root cause, then provide fixed code with a brief change log.</p>`,
        example: `<strong>Prompt:</strong> "Python 3.10. Error: KeyError: 'email'. Code: [paste]. Expected: skip rows missing email. Actual: crash on row 45. Explain why and fix defensively."`
      },
      {
        title: "Code Explanation",
        body: `<p>Use Claude to onboard onto unfamiliar codebases. Request:</p>
        <ul>
          <li>High-level purpose of a file or function</li>
          <li>Line-by-line walkthrough for complex logic</li>
          <li>Data flow diagram in text</li>
          <li>Potential bugs or tech debt flags</li>
        </ul>`,
        example: `<strong>Prompt:</strong> "Explain this SQL query for a junior analyst: what tables join, what filters apply, and what business question it answers. Then simplify it if redundant."`
      },
      {
        title: "SQL Query Generation",
        body: `<p>Provide schema (tables, columns, relationships) and business question. Specify dialect: PostgreSQL, MySQL, SQL Server, etc.</p>
        <p>Ask for:</p>
        <ul>
          <li>Readable formatting and table aliases</li>
          <li>Comments on JOIN logic</li>
          <li>Sample expected output columns</li>
          <li>Index or performance notes for large tables</li>
        </ul>`,
        example: `<strong>Prompt:</strong> "PostgreSQL. Tables: orders(id, customer_id, total, created_at), customers(id, name, region). Write query: top 5 customers by total spend in last 90 days, include customer name, region, order count, total spend."`
      },
      {
        title: "Python Basics",
        body: `<p>Claude supports learning and automation: file I/O, pandas, API calls, scheduling scripts, data cleaning.</p>
        <p>Start small—one function at a time. Run locally, fix errors iteratively. Use virtual environments and pin dependencies for reproducibility.</p>`,
        example: `<strong>Prompt:</strong> "Python script: read config.json, fetch weather from a public API for city in config, write summary to daily_log.txt. Use requests, handle HTTP errors, no API key in code—read from env var."`
      },
      {
        title: "HTML/CSS Examples",
        body: `<p>Describe layout, components, colors, typography, and responsive behavior. Claude produces semantic HTML and modern CSS.</p>
        <p>Iterate: "Make mobile-first," "Improve accessibility (ARIA, contrast)," "Match this brand palette: #1a1a2e, #d4af37."</p>`,
        example: `<strong>Prompt:</strong> "Create a responsive landing section: hero headline, subtext, two CTA buttons, subtle gradient background. HTML + CSS in one block. Mobile-first. WCAG-friendly contrast."`
      }
    ],
    demos: [
      { title: "Debug with context", prompt: "I'm getting 'TypeError: Cannot read properties of undefined (reading map)' in React. Component code: [paste]. Explain cause and provide fixed version with null guard." },
      { title: "SQL + explain", prompt: "Schema: employees(id, dept_id, salary), departments(id, name). Write SQL to find departments where average salary exceeds company average. Explain each JOIN and subquery." }
    ],
    apply: [
      { task: "Generate a Python or SQL solution for a real small task you have. Run it locally and fix one bug with Claude's help.", hint: "Include error output in your debug prompt." },
      { task: "Paste unfamiliar code (from docs or repo). Get high-level + line-by-line explanation.", hint: "Ask what could break under edge cases." },
      { task: "Create a simple HTML/CSS component (card, form, or nav). Refine once for mobile and accessibility.", hint: "Specify colors and spacing explicitly." }
    ],
    quiz: [
      { q: "Debug prompts should include:", options: ["Error message and relevant code", "Only variable names", "Your password", "Nothing"], correct: 0, explain: "Context enables accurate diagnosis." },
      { q: "Before production, generated code should be checked for:", options: ["Security issues and secrets", "Nothing", "Only font size", "Social media links"], correct: 0, explain: "Security review is mandatory for deployed code." },
      { q: "SQL dialect matters because:", options: ["Syntax differs between databases", "All SQL is identical", "Claude cannot write SQL", "Tables don't exist"], correct: 0, explain: "PostgreSQL vs MySQL syntax varies." },
      { q: "For code generation, specifying edge cases helps Claude:", options: ["Handle empty inputs and errors", "Write longer comments only", "Avoid all logic", "Skip testing"], correct: 0, explain: "Edge cases improve robustness." },
      { q: "You should run and test generated code because:", options: ["Claude may produce plausible but incorrect code", "It is always perfect", "Testing is optional", "Code cannot be run"], correct: 0, explain: "Always verify by execution." }
    ],
    summary: {
      takeaways: ["Specify language, I/O, edge cases, and environment.", "Debug with errors, snippets, and expected behavior.", "SQL needs schema + dialect + business question.", "Python/HTML workflows: small steps, test locally.", "Security and correctness review before production."],
      next: "Module 8 advances prompt engineering: structured outputs, JSON, templates, and automation."
    }
  },
  {
    id: 8,
    title: "Advanced Prompt Engineering",
    shortTitle: "Module 8",
    hours: 3,
    overview: "Level up with structured outputs, JSON for integrations, optimization methods, reusable templates, and workflow automation concepts for team-scale AI use.",
    objectives: [
      "Demand consistent structured outputs",
      "Generate valid JSON against schemas",
      "Optimize prompts for quality and efficiency",
      "Build reusable prompt template libraries",
      "Design multi-step AI workflows"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "Structured Outputs",
        body: `<p>Structured outputs reduce editing and enable downstream automation. Specify sections, labels, and order explicitly.</p>
        <pre>Return exactly these sections:
1. Executive Summary (3 bullets)
2. Findings (table)
3. Risks (numbered list)
4. Next Steps (owner + date)</pre>
        <p>Use Markdown tables, numbered lists, and fixed headings. Say "Do not add extra sections."</p>`,
        example: `<strong>Prompt:</strong> "Analyze the customer survey upload. Output ONLY: ## Summary (3 bullets), ## Themes (table: Theme | Frequency | Example Quote), ## Recommendations (max 5)." `
      },
      {
        title: "JSON Generation",
        body: `<p>JSON enables API pipelines and tool integration. Provide a schema and require valid JSON only—no markdown fences if parsing programmatically.</p>
        <pre>{
  "title": "string",
  "priority": "high|medium|low",
  "items": [{"id": "string", "done": false}]
}</pre>
        <p>Validate with a JSON linter. Ask Claude to fix syntax if parsing fails.</p>`,
        example: `<strong>Prompt:</strong> "Extract meeting action items as JSON array: [{\"task\",\"owner\",\"due_date\",\"priority\"}]. Use ISO dates. If unknown, null. Return ONLY valid JSON."`
      },
      {
        title: "Prompt Optimization",
        body: `<p>Optimize for clarity, token efficiency, and output quality:</p>
        <ul>
          <li>Remove redundant instructions</li>
          <li>Front-load critical constraints</li>
          <li>Replace vague adjectives with measurable specs</li>
          <li>A/B test two prompt variants on the same input</li>
          <li>Measure: edit time, accuracy, format compliance</li>
        </ul>`,
        example: `<strong>Before:</strong> "Write something good about our product."<br><strong>After:</strong> "150-word product blurb, B2B audience, 3 benefits with metrics placeholders, CTA: Book demo."`
      },
      {
        title: "Building Reusable Prompt Templates",
        body: `<p>Templates standardize team quality. Use placeholders:</p>
        <pre>Role: {{ROLE}}
Document: {{UPLOAD}}
Audience: {{AUDIENCE}}
Output: {{FORMAT}}
Constraints: {{RULES}}</pre>
        <p>Store in Project instructions, Notion, or internal wiki. Version templates when processes change.</p>`,
        example: `<strong>Template:</strong> "Weekly Status Report | Project: {{PROJECT}} | Week: {{DATE}} | Sections: Progress, Blockers, Metrics, Next Week | Tone: executive | Max 400 words."`
      },
      {
        title: "Workflow Automation Concepts",
        body: `<p>Chain prompts into pipelines:</p>
        <ol>
          <li><strong>Extract</strong> — pull data from document</li>
          <li><strong>Transform</strong> — structure, classify, score</li>
          <li><strong>Generate</strong> — report, email, ticket</li>
          <li><strong>Review</strong> — human approval gate</li>
        </ol>
        <p>Integrate via Claude API, Zapier, Make, or custom scripts. Always insert human review for external-facing or high-risk steps.</p>`,
        example: `<strong>Pipeline:</strong> Upload support ticket CSV → Claude categorizes + prioritizes → JSON to helpdesk → human reviews edge cases → auto-draft replies for approval.`
      }
    ],
    demos: [
      { title: "JSON extraction", prompt: "From the text below, extract companies mentioned as JSON: {\"companies\":[{\"name\":\"\",\"industry\":\"\",\"mentioned_context\":\"\"}]}. Text: [paste]. JSON only, no markdown." },
      { title: "Template fill", prompt: "Use this template:\nRole: Senior Editor\nTask: Polish draft for {{AUDIENCE}}\nFormat: {{WORD_COUNT}} words, {{TONE}}\nDraft: [paste]\n\nFill AUDIENCE=healthcare executives, WORD_COUNT=200, TONE=formal." }
    ],
    apply: [
      { task: "Create a prompt template with 4 placeholders for a task you repeat weekly.", hint: "Test it twice with different inputs." },
      { task: "Build a JSON extraction prompt and validate output with a JSON linter.", hint: "If invalid, ask Claude to repair the JSON." },
      { task: "Sketch a 4-step workflow (Extract → Transform → Generate → Review) for a real process.", hint: "Mark where human approval is mandatory." }
    ],
    quiz: [
      { q: "Structured outputs help primarily by:", options: ["Randomizing format", "Ensuring consistent, scannable sections", "Removing all content", "Avoiding tables"], correct: 1, explain: "Structure reduces editing and enables automation." },
      { q: "JSON prompts should specify:", options: ["A clear schema", "No fields", "Only emojis", "Binary format"], correct: 0, explain: "Schemas define parseable output." },
      { q: "Prompt templates use placeholders like {{AUDIENCE}} to:", options: ["Reuse one pattern for many cases", "Hide prompts", "Break Claude", "Avoid testing"], correct: 0, explain: "Templates scale team workflows." },
      { q: "Human review in automation workflows is critical for:", options: ["High-risk or external-facing outputs", "Every trivial task always", "Never", "Only logging"], correct: 0, explain: "Risk-proportional oversight is best practice." },
      { q: "Prompt optimization includes:", options: ["Removing vague language and testing variants", "Making prompts longer always", "Never iterating", "Avoiding constraints"], correct: 0, explain: "Clarity and testing improve results." }
    ],
    summary: {
      takeaways: ["Structure outputs with fixed sections and formats.", "JSON needs schemas and validation.", "Templates with placeholders scale team usage.", "Optimize prompts via A/B testing and constraints.", "Automate in chains—with human gates for risk."],
      next: "Module 9 applies Claude across business productivity: meetings, SOPs, HR, support, and research."
    }
  },
  {
    id: 9,
    title: "Claude AI for Business Productivity",
    shortTitle: "Module 9",
    hours: 3,
    overview: "Integrate Claude into daily business workflows: meeting intelligence, SOPs, documentation, HR materials, customer support, and research—aligned to organizational standards.",
    objectives: [
      "Convert meeting content into actionable summaries",
      "Draft and maintain SOPs",
      "Produce consistent business documentation",
      "Support HR documentation workflows responsibly",
      "Draft customer support responses and research briefs"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "Meeting Notes and Summaries",
        body: `<p>Paste transcripts, rough notes, or bullet dumps. Request structured output:</p>
        <ul>
          <li>Executive summary (3 sentences)</li>
          <li>Decisions made</li>
          <li>Action items (owner, task, due date)</li>
          <li>Open questions / parking lot</li>
          <li>Next meeting agenda suggestions</li>
        </ul>
        <p>For recurring meetings, save a template in your Project instructions.</p>`,
        example: `<strong>Prompt:</strong> "Convert these standup notes into: Summary | Decisions | Action Items table | Blockers. If owner or date missing, mark TBD and list at bottom."`
      },
      {
        title: "SOP Creation",
        body: `<p>Standard Operating Procedures need clarity and auditability. Provide process steps from a subject-matter expert (even rough), then ask Claude to structure:</p>
        <ol>
          <li>Purpose and scope</li>
          <li>Roles and responsibilities</li>
          <li>Prerequisites and tools</li>
          <li>Step-by-step procedure</li>
          <li>Quality checks and exceptions</li>
          <li>Revision history placeholder</li>
        </ol>
        <p>SME review is mandatory before publication.</p>`,
        example: `<strong>Prompt:</strong> "Turn these onboarding steps into a formal SOP for IT account provisioning. Audience: IT admins. Include safety checks before granting admin access."`
      },
      {
        title: "Business Documentation",
        body: `<p>Claude assists with project charters, proposals, policies, memos, and playbooks. Provide tone guide, approval workflow, and section requirements.</p>
        <p>Maintain consistency by referencing uploaded style guides or prior approved documents in Projects.</p>`,
        example: `<strong>Prompt:</strong> "Draft a one-page project charter: background, objectives, scope in/out, stakeholders, timeline milestones, success metrics, risks. Use formal internal memo tone."`
      },
      {
        title: "HR Documentation",
        body: `<p>Use Claude for job descriptions, interview rubrics, onboarding checklists, training outlines, and policy drafts—not for final decisions on individuals.</p>
        <p><strong>Privacy rules:</strong> Do not upload employee PII, performance reviews, or disciplinary records without explicit authorization and approved tools.</p>`,
        example: `<strong>Prompt:</strong> "Create a job description for Customer Success Manager: responsibilities, required skills, nice-to-have, KPIs, EEO boilerplate placeholder. Neutral, inclusive language."`
      },
      {
        title: "Customer Support Responses",
        body: `<p>Provide ticket context, customer tone, policy constraints, and brand voice. Claude drafts empathetic, accurate replies.</p>
        <p><strong>Workflow:</strong> Draft → agent edits → supervisor review for escalations → send.</p>
        <p>Build few-shot examples of great replies for consistent voice.</p>`,
        example: `<strong>Prompt:</strong> "Customer says delivery is 5 days late. Policy: refund shipping if >3 days late. Tone: empathetic, professional. Draft reply under 100 words with next steps and timeline placeholder."`
      },
      {
        title: "Research Assistance",
        body: `<p>Claude helps synthesize reports, compare vendors, outline literature reviews, and prepare briefing notes. Verify sources, dates, and statistics—Claude may not have the latest market data.</p>
        <p>Ask for: key findings, conflicting views, gaps in evidence, and suggested primary sources to consult.</p>`,
        example: `<strong>Prompt:</strong> "I'm researching CRM options for a 50-person sales team. Outline evaluation criteria, comparison table template, and 10 due-diligence questions for vendors. Note where live pricing must be confirmed externally."`
      }
    ],
    demos: [
      { title: "Meeting → actions", prompt: "Meeting transcript: [paste]. Output: 1) Summary 2) Decisions 3) Action table 4) Risks mentioned 5) Suggested follow-up email to attendees." },
      { title: "Support reply few-shot", prompt: "Brand voice: friendly, concise. Example ticket→reply [give 1 example]. New ticket: 'App crashes when I export PDF.' Draft reply with troubleshooting steps and escalation offer." }
    ],
    apply: [
      { task: "Process real or sample meeting notes into decisions + action table.", hint: "Flag missing owners explicitly." },
      { task: "Draft an SOP for a process you know well. Have a colleague review for accuracy.", hint: "Claude structures; experts validate." },
      { task: "Create 3 support reply templates with few-shot examples for your product/service.", hint: "Include policy boundaries in the prompt." }
    ],
    quiz: [
      { q: "Meeting summaries should always include:", options: ["Only adjectives", "Decisions and action items with owners", "Unrelated trivia", "Personal opinions"], correct: 1, explain: "Actions and decisions drive follow-through." },
      { q: "SOPs generated by Claude require:", options: ["SME review before publish", "No review", "Automatic deployment", "Employee PII uploads"], correct: 0, explain: "Subject-matter experts validate procedures." },
      { q: "HR use of Claude should avoid:", options: ["Unauthorized employee PII", "Job description drafts", "Interview question banks", "Onboarding checklists"], correct: 0, explain: "Privacy and policy compliance are essential." },
      { q: "Customer support AI drafts should:", options: ["Be reviewed before sending", "Auto-send without reading", "Include internal passwords", "Ignore policy"], correct: 0, explain: "Human review protects customers and brand." },
      { q: "Research assistance from Claude requires:", options: ["Verifying facts and dates externally", "Trusting all numbers blindly", "No source checking", "Avoiding citations"], correct: 0, explain: "External verification for market and financial data." }
    ],
    summary: {
      takeaways: ["Meetings → structured decisions, actions, blockers.", "SOPs need SME validation.", "Business docs benefit from style guides in Projects.", "HR: inclusive drafts, strict privacy.", "Support and research: draft + verify + approve."],
      next: "Module 10 capstone: end-to-end projects, ethics, security, troubleshooting, and career roadmap."
    }
  },
  {
    id: 10,
    title: "Real-Time Projects & Best Practices",
    shortTitle: "Module 10",
    hours: 3,
    overview: "Synthesize everything in end-to-end use cases. Master responsible AI, privacy, troubleshooting, complete a capstone project, and prepare for interviews and continued learning.",
    objectives: [
      "Execute end-to-end Claude workflows for business scenarios",
      "Apply AI ethics and responsible use principles",
      "Implement privacy and security best practices",
      "Diagnose and fix common prompt and workflow failures",
      "Complete a capstone and plan ongoing learning"
    ],
    schedule: { learn: 90, demo: 30, apply: 45, quiz: 15, summary: 20 },
    concepts: [
      {
        title: "End-to-End Business Use Cases",
        body: `<p><strong>Case study — Quarterly business review prep:</strong></p>
        <ol>
          <li>Upload sales CSV → exploratory summary and trends</li>
          <li>Upload customer survey PDF → theme extraction</li>
          <li>Claude merges into executive report (structured sections)</li>
          <li>Draft presentation outline and speaker notes</li>
          <li>Human verifies all metrics and quotes</li>
        </ol>
        <p>This uses Modules 5, 6, 8, and 9 in one workflow. Document prompts in your template library for reuse next quarter.</p>`,
        example: `<strong>Capstone scenario:</strong> "You are preparing a vendor recommendation. Compare two PDF proposals, summarize financial impact from CSV, draft recommendation memo for leadership, and list open due-diligence questions."`
      },
      {
        title: "AI Ethics and Responsible AI",
        body: `<p><strong>Principles for professional Claude use:</strong></p>
        <ul>
          <li><strong>Transparency</strong> — disclose AI assistance when required by policy or client contract</li>
          <li><strong>Fairness</strong> — review outputs for bias in HR, customer, and public content</li>
          <li><strong>Accountability</strong> — humans remain responsible for published decisions</li>
          <li><strong>Honesty</strong> — do not present AI output as guaranteed fact or human-only work when misrepresentation matters</li>
        </ul>`,
        example: `<strong>Example:</strong> A hiring manager uses Claude to draft interview questions—not to score candidates autonomously or make final hire/no-hire decisions without human panel review.`
      },
      {
        title: "Privacy and Security Considerations",
        body: `<p><strong>Do not put in Claude without approval:</strong> passwords, API keys, unredacted customer PII, trade secrets, classified data, unreleased financial results (if policy forbids).</p>
        <p><strong>Do:</strong> use enterprise/team accounts with admin controls, anonymize datasets, follow retention policies, and train staff on acceptable use.</p>
        <p>Security is organizational—not only a tool setting.</p>`,
        example: `<strong>Example:</strong> Before uploading a spreadsheet, remove columns with emails and phone numbers; use Customer ID instead.`
      },
      {
        title: "Common Mistakes and Troubleshooting",
        body: `<table class="data-table">
          <tr><th>Problem</th><th>Likely Cause</th><th>Fix</th></tr>
          <tr><td>Vague output</td><td>Weak prompt</td><td>Add CTF: context, task, format, constraints</td></tr>
          <tr><td>Wrong facts</td><td>Hallucination</td><td>Ground in uploads; ask for citations; verify</td></tr>
          <tr><td>Too long</td><td>No length limit</td><td>Specify word/bullet count</td></tr>
          <tr><td>Wrong tone</td><td>No audience/role</td><td>Add role + tone adjectives + example</td></tr>
          <tr><td>Lost context</td><td>Chat too long/off-topic</td><td>New chat or Project with instructions</td></tr>
          <tr><td>Bad JSON</td><td>Schema unclear</td><td>Provide schema; ask JSON-only; validate and repair</td></tr>
        </table>`,
        example: `<strong>Troubleshoot prompt:</strong> "Your last answer invented statistics. Re-answer using ONLY the uploaded document. Mark any missing data as 'Not provided.'"`
      },
      {
        title: "Mini Capstone Project",
        body: `<p><strong>Requirements (complete for certification of this course):</strong></p>
        <ol>
          <li>Choose a real business task spanning at least 3 modules (e.g., document + data + report)</li>
          <li>Document initial prompts and two refinement iterations</li>
          <li>Deliver final output (memo, table, code, or content pack)</li>
          <li>Write a 200-word reflection: what worked, what failed, what you verified</li>
          <li>Save reusable templates created during the project</li>
        </ol>
        <p>Estimated time: 2–3 hours outside this module's guided session.</p>`,
        example: `<strong>Sample capstone:</strong> Analyze uploaded quarterly CSV + policy PDF → executive summary → draft all-hands email → 5-question quiz for team training on findings.`
      },
      {
        title: "Interview Guidance and Future Learning Roadmap",
        body: `<p><strong>Interview topics you should articulate:</strong></p>
        <ul>
          <li>Prompt engineering with concrete before/after examples</li>
          <li>A workflow you built (tools, steps, human review gates)</li>
          <li>Limitations and how you mitigate hallucination risk</li>
          <li>Data privacy practices you follow</li>
        </ul>
        <p><strong>Learning roadmap (next 90 days):</strong></p>
        <ol>
          <li>Anthropic documentation and prompt libraries</li>
          <li>Claude API basics (if technical role)</li>
          <li>RAG and knowledge bases for enterprise search</li>
          <li>AI agents and tool use (MCP, integrations)</li>
          <li>Domain specialization (legal tech, health comms, etc.)</li>
        </ol>`,
        example: `<strong>Interview answer skeleton:</strong> "In my last project I used Claude to [task]. I structured prompts with [framework], validated [data], and reduced [metric]. I always [governance step] because [limitation]."`
      }
    ],
    demos: [
      { title: "End-to-end pipeline", prompt: "I uploaded sales.csv and feedback.pdf. Step 1: Summarize each. Step 2: Combined executive brief (300 words). Step 3: 5-slide presentation outline. Step 4: List every number I should verify manually." },
      { title: "Interview prep", prompt: "Conduct a mock interview for an 'AI Productivity Specialist' role. Ask me 5 questions one at a time about Claude workflows, ethics, and prompt engineering. After each answer, give brief feedback." }
    ],
    apply: [
      { task: "Complete the Mini Capstone Project as defined in the Learn section. Document prompts in your notepad.", hint: "Span at least 3 modules—this demonstrates mastery." },
      { task: "Create a personal troubleshooting checklist (6 issues + fixes) from your own mistakes during the course.", hint: "Use the table in Learn as a starting point." },
      { task: "Write your 90-day learning roadmap with 5 specific resources or skills.", hint: "Include one technical and one ethics/privacy goal." }
    ],
    quiz: [
      { q: "Responsible AI means:", options: ["Humans stay accountable for outputs", "AI replaces all judgment", "Never disclose AI use", "Ignore bias"], correct: 0, explain: "Accountability remains with people and organizations." },
      { q: "Hallucinations are best mitigated by:", options: ["Grounding in source documents and verification", "Longer chats only", "Ignoring errors", "Using emojis"], correct: 0, explain: "Source grounding + verification reduces risk." },
      { q: "The capstone project should span:", options: ["At least 3 course skill areas", "Only one bullet point", "No documentation", "No reflection"], correct: 0, explain: "Integration across modules demonstrates mastery." },
      { q: "For interviews, you should prepare:", options: ["Concrete workflow examples and limitations", "Only tool names", "No examples", "Guaranteed accuracy claims"], correct: 0, explain: "Employers want practical experience and honesty." },
      { q: "Enterprise privacy best practice includes:", options: ["Anonymizing sensitive data before upload", "Uploading all customer records", "Sharing API keys in chat", "Disabling policies"], correct: 0, explain: "Minimize and anonymize sensitive data." }
    ],
    summary: {
      takeaways: ["End-to-end workflows combine extract → analyze → deliver + verify.", "Ethics: transparency, fairness, accountability.", "Privacy: classify data before upload.", "Troubleshoot with structured prompt fixes.", "Capstone + roadmap cement long-term skill growth."],
      next: "Congratulations—you have completed the 30-hour Claude AI Professional Training curriculum. Continue refining your template library and apply Claude responsibly in your daily work."
    }
  }
];
