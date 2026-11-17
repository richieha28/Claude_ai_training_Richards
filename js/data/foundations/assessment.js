/* AI Literacy Hub - Assessments (classic script, no modules) */
const AF_QUIZ_GLOSSARY = [
  {
    "id": "qg1",
    "q": "What is a hallucination in generative AI?",
    "options": [
      "Fluent but incorrect or fabricated output",
      "A GPU overheating alert",
      "A type of supervised label",
      "A vector database index"
    ],
    "correct": 0,
    "explain": "Hallucinations are plausible-sounding false outputs."
  },
  {
    "id": "qg2",
    "q": "RAG stands for:",
    "options": [
      "Retrieval-Augmented Generation",
      "Random Algorithmic Guessing",
      "Remote Automated Governance",
      "Rapid Application Graphics"
    ],
    "correct": 0,
    "explain": "RAG retrieves documents to ground generation."
  },
  {
    "id": "qg3",
    "q": "A context window limits:",
    "options": [
      "How much text a model can consider at once",
      "How many employees may use Excel",
      "The physical size of a data center only",
      "The number of mouse buttons"
    ],
    "correct": 0,
    "explain": "Context windows are token capacity limits."
  },
  {
    "id": "qg4",
    "q": "PII refers to:",
    "options": [
      "Personally Identifiable Information",
      "Public Inference Interface",
      "Parallel Image Index",
      "Prompt Injection Identifier"
    ],
    "correct": 0,
    "explain": "PII can identify individuals and needs protection."
  },
  {
    "id": "qg5",
    "q": "Prompt injection is primarily a:",
    "options": [
      "Security risk manipulating model instructions via untrusted content",
      "Marketing email subject style",
      "Hardware soldering technique",
      "Payroll tax form"
    ],
    "correct": 0,
    "explain": "Attackers embed instructions in content the model reads."
  },
  {
    "id": "qg6",
    "q": "Embeddings are used to:",
    "options": [
      "Represent meaning as vectors for similarity search",
      "Charge phones wirelessly",
      "Replace keyboards",
      "Compile Java exclusively"
    ],
    "correct": 0,
    "explain": "Embeddings power semantic search and RAG."
  },
  {
    "id": "qg7",
    "q": "Human-in-the-loop means:",
    "options": [
      "Humans approve or review critical AI steps",
      "AI systems never assist humans",
      "Models train without any data",
      "All automation is forbidden"
    ],
    "correct": 0,
    "explain": "HITL keeps people accountable on important actions."
  },
  {
    "id": "qg8",
    "q": "Narrow AI is:",
    "options": [
      "Task-specific AI used in most production systems",
      "Proven human-level AGI",
      "Only science fiction",
      "Identical to superintelligence"
    ],
    "correct": 0,
    "explain": "Deployed systems are typically narrow."
  },
  {
    "id": "qg9",
    "q": "Fine-tuning means:",
    "options": [
      "Additional training to adapt a pretrained model",
      "Deleting all parameters",
      "Buying a new monitor",
      "Turning temperature to zero forever"
    ],
    "correct": 0,
    "explain": "Fine-tuning adapts models with more training."
  },
  {
    "id": "qg10",
    "q": "A model card typically documents:",
    "options": [
      "Intended use, metrics, and limitations",
      "Only stock prices",
      "Office seating charts",
      "Cable colors"
    ],
    "correct": 0,
    "explain": "Model cards support transparency and governance."
  },
  {
    "id": "qg11",
    "q": "Shadow AI refers to:",
    "options": [
      "Unsanctioned AI tool use with company data",
      "Official GPU clusters",
      "A type of supervised learning",
      "Dark mode in IDEs only"
    ],
    "correct": 0,
    "explain": "Shadow AI creates unmanaged risk."
  },
  {
    "id": "qg12",
    "q": "Temperature in generation controls:",
    "options": [
      "Randomness/variability of sampling",
      "Room thermostat integration only",
      "Exact factuality guarantees",
      "Network cable length"
    ],
    "correct": 0,
    "explain": "Higher temperature usually increases variability."
  },
  {
    "id": "qg13",
    "q": "Intelligent automation often combines:",
    "options": [
      "RPA/workflows with AI perception or generation",
      "Only mechanical gears",
      "Paper forms exclusively",
      "Manual copy-paste with no software"
    ],
    "correct": 0,
    "explain": "IA blends classical automation with AI."
  },
  {
    "id": "qg14",
    "q": "Tokens are:",
    "options": [
      "Chunks of text models read and generate",
      "Physical subway tickets required for APIs",
      "SQL primary keys only",
      "Image pixels exclusively"
    ],
    "correct": 0,
    "explain": "LLMs operate on tokens."
  },
  {
    "id": "qg15",
    "q": "Responsible AI emphasizes:",
    "options": [
      "Fairness, safety, transparency, and accountability",
      "Maximum secrecy about AI use always",
      "Never evaluating models",
      "Uploading all secrets to public bots"
    ],
    "correct": 0,
    "explain": "Responsible AI is a governance practice set."
  }
];

const AF_QUIZ_TOOLS = [
  {
    "id": "qt1",
    "q": "Which tool is created by Anthropic?",
    "options": [
      "Claude",
      "Midjourney",
      "Otter.ai",
      "UiPath"
    ],
    "correct": 0,
    "explain": "Claude is Anthropic's assistant."
  },
  {
    "id": "qt2",
    "q": "GitHub Copilot is primarily used for:",
    "options": [
      "AI-assisted coding in developer workflows",
      "Generating cinematic Hollywood films only",
      "HR payroll filing",
      "Warehouse robotics hardware"
    ],
    "correct": 0,
    "explain": "Copilot targets software development."
  },
  {
    "id": "qt3",
    "q": "Perplexity is best known for:",
    "options": [
      "Cited answer-style web research",
      "Training foundation GPUs from scratch",
      "RPA on legacy green screens only",
      "Hardware CAD milling"
    ],
    "correct": 0,
    "explain": "Perplexity emphasizes sourced answers."
  },
  {
    "id": "qt4",
    "q": "Midjourney belongs to which category?",
    "options": [
      "Image generation",
      "Payroll ERPs",
      "Network routers",
      "Vector databases only"
    ],
    "correct": 0,
    "explain": "Midjourney is a text-to-image tool."
  },
  {
    "id": "qt5",
    "q": "Amazon Bedrock is:",
    "options": [
      "A managed AWS service for foundation models",
      "A consumer photo filter app",
      "An on-device keyboard",
      "A podcast host"
    ],
    "correct": 0,
    "explain": "Bedrock hosts/accesses FMs on AWS."
  },
  {
    "id": "qt6",
    "q": "ElevenLabs specializes in:",
    "options": [
      "AI voice synthesis and audio tools",
      "Container orchestration only",
      "Spreadsheet pivot tables",
      "OCR scanners exclusively"
    ],
    "correct": 0,
    "explain": "ElevenLabs is known for voice AI."
  },
  {
    "id": "qt7",
    "q": "Microsoft Power Automate is mainly for:",
    "options": [
      "Workflow automation across apps",
      "Painting digital art only",
      "Training Llama from scratch",
      "Designing GPUs"
    ],
    "correct": 0,
    "explain": "Power Automate builds automated flows."
  },
  {
    "id": "qt8",
    "q": "Hugging Face is widely used as:",
    "options": [
      "A hub for models, datasets, and demos",
      "A physical hugging therapy clinic",
      "An airline booking GDS",
      "A payroll tax authority"
    ],
    "correct": 0,
    "explain": "HF is central to open ML sharing."
  },
  {
    "id": "qt9",
    "q": "Cursor is best described as:",
    "options": [
      "An AI-native code editor",
      "A video diffusion camera",
      "An expense policy",
      "A font foundry"
    ],
    "correct": 0,
    "explain": "Cursor focuses on AI-assisted coding."
  },
  {
    "id": "qt10",
    "q": "Adobe Firefly focuses on:",
    "options": [
      "Generative creative features in Adobe workflows",
      "Building Kubernetes clusters",
      "Training call-center agents only",
      "Satellite telemetry"
    ],
    "correct": 0,
    "explain": "Firefly is Adobe's generative creative family."
  }
];

const AF_QUIZ_FUNDAMENTALS = [
  {
    "id": "qf1",
    "q": "AI is best described as:",
    "options": [
      "Systems performing tasks associated with human-like intelligence",
      "Only humanoid robots",
      "A single brand of chatbot",
      "A type of Ethernet cable"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf2",
    "q": "Machine learning improves primarily by:",
    "options": [
      "Finding patterns in data",
      "Hardcoding every scenario manually forever",
      "Ignoring examples",
      "Unplugging GPUs"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf3",
    "q": "Generative AI creates:",
    "options": [
      "New content such as text or images",
      "Only static database indexes",
      "Physical bridges",
      "Paper invoices by hand"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf4",
    "q": "A common LLM risk is:",
    "options": [
      "Hallucinations",
      "Perfect guaranteed truth always",
      "Inability to draft text",
      "Never sounding fluent"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf5",
    "q": "Narrow AI means:",
    "options": [
      "Specialized task systems",
      "Proven AGI shipped to consumers",
      "Superintelligence on phones",
      "No AI at all"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf6",
    "q": "Prompt engineering is:",
    "options": [
      "Designing clear inputs to guide useful outputs",
      "Hacking passwords",
      "Soldering chips",
      "Writing SQL triggers only"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf7",
    "q": "OCR extracts:",
    "options": [
      "Text from images or scans",
      "Gold from ore",
      "Audio from Wi-Fi",
      "Policies from silence"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf8",
    "q": "A copilotsuggestion should be:",
    "options": [
      "Reviewed by a human before critical use",
      "Merged blindly always",
      "Ignored as illegal",
      "Stored as root passwords"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf9",
    "q": "Tokens are used by LLMs to:",
    "options": [
      "Process and generate text units",
      "Pay highway tolls",
      "Encrypt hard drives exclusively",
      "Measure desk height"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf10",
    "q": "Human accountability for AI outputs means:",
    "options": [
      "People own decisions and outcomes",
      "Models sign legal contracts",
      "Vendors absorb all business liability automatically",
      "No one checks anything"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf11",
    "q": "Summarizing a meeting with AI is usually:",
    "options": [
      "A strong assistant-style use case",
      "An AGI proof",
      "Illegal in all countries",
      "Impossible with current tools"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf12",
    "q": "Discriminative models typically:",
    "options": [
      "Predict labels or scores for inputs",
      "Compose new symphonies only",
      "Replace networking hardware",
      "Train themselves without objectives"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf13",
    "q": "A glossary definition of PII includes:",
    "options": [
      "Data that can identify a person",
      "Public domain clip art",
      "GPU clock speeds",
      "CSS colors"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf14",
    "q": "ChatGPT, Claude, and Gemini are examples of:",
    "options": [
      "Conversational AI assistants",
      "RPA robots only",
      "Vector DBs only",
      "Network switches"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf15",
    "q": "Verification is especially needed when AI output includes:",
    "options": [
      "Facts, numbers, legal claims, or citations",
      "Adjective brainstorms for internal fun",
      "Color palette ideas for sticky notes",
      "Temporary placeholder jokes"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf16",
    "q": "Supervised learning requires:",
    "options": [
      "Labeled input-output examples",
      "No labels ever",
      "Only reinforcement rewards",
      "Random hardware faults"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf17",
    "q": "Unsupervised learning is used to:",
    "options": [
      "Find structure such as clusters without labels",
      "Guarantee loan approvals",
      "Replace evaluation",
      "Eliminate features"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf18",
    "q": "Inference means:",
    "options": [
      "Running a trained model on new inputs",
      "Collecting GPUs from rivers",
      "Labeling with no model",
      "Deleting parameters nightly"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf19",
    "q": "RAG improves factual grounding by:",
    "options": [
      "Retrieving relevant documents into the prompt",
      "Raising temperature to maximum",
      "Removing all sources",
      "Banning citations"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf20",
    "q": "Overfitting happens when a model:",
    "options": [
      "Memorizes training quirks and fails on new data",
      "Always generalizes perfectly",
      "Uses no training data",
      "Cannot store parameters"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf21",
    "q": "RLHF is associated with:",
    "options": [
      "Aligning models using human preference feedback",
      "Hardware liquid cooling only",
      "Excel macros",
      "DNS propagation"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf22",
    "q": "A context overflow typically requires:",
    "options": [
      "Chunking, summarization, or retrieval strategies",
      "Buying infinite RAM from the model",
      "Disabling tokenization",
      "Closing the business"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf23",
    "q": "Precision and recall are:",
    "options": [
      "Classification evaluation metrics",
      "Image file formats",
      "Cloud regions",
      "Prompt injection attacks"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf24",
    "q": "Function calling lets models:",
    "options": [
      "Request tools with structured arguments",
      "Replace CPUs with poems",
      "Delete cloud bills automatically",
      "Paint office walls"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf25",
    "q": "Bias can remain after dropping demographic fields because of:",
    "options": [
      "Proxy variables correlated with sensitive attributes",
      "Perfect fairness by default",
      "Absence of any data",
      "Mandatory encryption of adjectives"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf26",
    "q": "MLOps/LLMOps emphasizes:",
    "options": [
      "Versioning, monitoring, eval gates, and rollback",
      "One-off demos without owners",
      "Hiding incidents",
      "Never measuring cost"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf27",
    "q": "Semantic search matches:",
    "options": [
      "Meaning via embeddings, not only keywords",
      "Exact string equality only",
      "MAC addresses",
      "Printer drivers"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf28",
    "q": "A good enterprise pilot defines:",
    "options": [
      "KPI, human gate, data sources, and risks",
      "Unlimited production cutover day one",
      "No success metric",
      "Secret shadow IT only"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf29",
    "q": "Temperature set very low often yields:",
    "options": [
      "More deterministic, less varied outputs",
      "Guaranteed correct citations",
      "Infinite creativity",
      "No tokens billed"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf30",
    "q": "Multi-agent systems coordinate:",
    "options": [
      "Specialized agents collaborating on complex goals",
      "A single static if/then rule",
      "Only OCR firmware",
      "Keyboard firmware flashes"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf31",
    "q": "Prompt injection is especially dangerous when agents:",
    "options": [
      "Read untrusted content and have tool permissions",
      "Are offline calculators with no tools",
      "Only uppercase text",
      "Cannot browse or retrieve"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf32",
    "q": "Distillation aims to:",
    "options": [
      "Train a smaller model to mimic a larger one",
      "Increase parameter count endlessly",
      "Remove all evals",
      "Convert text to copper"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf33",
    "q": "LoRA is a technique for:",
    "options": [
      "Parameter-efficient fine-tuning",
      "Lossless audio CDs",
      "Latency-free satellites",
      "Labeling images by hand only"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf34",
    "q": "Reward misspecification in RL can cause:",
    "options": [
      "Agents optimizing the metric in unintended ways",
      "Perfect alignment automatically",
      "Zero sample complexity",
      "Guaranteed safe robotics"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf35",
    "q": "A strong RAG faithfulness failure looks like:",
    "options": [
      "Answer claims not supported by retrieved docs",
      "Perfect quotes from sources",
      "Empty responses only",
      "DNS timeouts"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf36",
    "q": "Model routing architectures help by:",
    "options": [
      "Sending tasks to models with best cost/quality fit",
      "Forcing the largest model always",
      "Disabling caches",
      "Removing observability"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf37",
    "q": "Red teaming for LLMs focuses on:",
    "options": [
      "Adversarial discovery of unsafe or failing behaviors",
      "Painting servers red",
      "Hiring only executives",
      "Deleting benchmarks"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf38",
    "q": "Data leakage in ML evaluation means:",
    "options": [
      "Test information improperly influencing training",
      "Water damage in data centers only",
      "HTTPS certificate renewals",
      "CSS specificity wars"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf39",
    "q": "Constitutional or policy-based methods relate to:",
    "options": [
      "Steering model behavior with written principles",
      "Writing national constitutions via OCR",
      "GPU warranty law only",
      "Cable management"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf40",
    "q": "Agent memory differs from a raw context window because it:",
    "options": [
      "Can persist selected state beyond a single prompt window",
      "Always deletes all history",
      "Replaces vector search permanently",
      "Is identical to RAM chips"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf41",
    "q": "Structured outputs are valuable because they:",
    "options": [
      "Make automation and validation easier",
      "Guarantee truthfulness",
      "Eliminate prompting",
      "Ban JSON"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf42",
    "q": "Total cost of ownership for GenAI should include:",
    "options": [
      "Usage, integration, monitoring, and change management",
      "Only the sticker license if any",
      "Keyboard replacements only",
      "Office plants"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf43",
    "q": "A canary release for an LLM app is used to:",
    "options": [
      "Expose a small user slice before full rollout",
      "Train birds to label data",
      "Delete evals",
      "Skip security review"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf44",
    "q": "Embedding drift in a knowledge base can cause:",
    "options": [
      "Degraded retrieval relevance over time",
      "Faster Wi-Fi",
      "Automatic AGI",
      "Perfect recall forever"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf45",
    "q": "Guardrails should be layered because:",
    "options": [
      "No single filter catches all misuse and errors",
      "One regex is always enough",
      "Models never fail",
      "Users never jailbreak"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  },
  {
    "id": "qf46",
    "q": "Computer vision systems interpret:",
    "options": [
      "Images and video",
      "Only CSV columns",
      "DNS TXT records",
      "Keyboard firmware"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf47",
    "q": "A practical first step for workplace AI literacy is:",
    "options": [
      "Learn strengths, limits, and verification habits",
      "Paste all secrets into public bots",
      "Automate firings without review",
      "Ignore glossaries"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Beginner"
  },
  {
    "id": "qf48",
    "q": "Foundation models are:",
    "options": [
      "Large pretrained models adaptable to many tasks",
      "Tiny if/then scripts only",
      "Printer drivers",
      "Battery chemistries"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf49",
    "q": "Few-shot prompting provides:",
    "options": [
      "A few examples of the desired pattern",
      "Zero examples always",
      "Fine-tuning GPUs",
      "Physical shot glasses"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Intermediate"
  },
  {
    "id": "qf50",
    "q": "Orchestration in LLM apps refers to:",
    "options": [
      "Sequencing models, tools, and human steps",
      "Tuning piano orchestras",
      "Painting murals",
      "Buying domain names only"
    ],
    "correct": 0,
    "explain": "See fundamentals and glossary modules for deeper review.",
    "difficulty": "Advanced"
  }
];
