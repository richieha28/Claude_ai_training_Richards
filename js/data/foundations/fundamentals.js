/* AI Literacy Hub - Fundamentals (classic script, no modules) */
const AF_FUNDAMENTALS = [
  {
    "id": "fund-a1",
    "section": "A. Introduction to AI",
    "title": "What is Artificial Intelligence?",
    "explanation": "Artificial Intelligence (AI) is the field of computer science focused on building systems that can perform tasks associated with human intelligence: recognizing patterns, understanding language, making recommendations, and increasingly generating content. AI is not a single product. It is a spectrum of techniques ranging from simple rule engines to modern deep learning systems. In practice, most workplace AI is narrow-excellent at specific tasks when scoped well, and unreliable when asked to replace human judgment wholesale.",
    "example": "A navigation app estimating arrival time uses AI-style prediction from traffic patterns; a chatbot drafting an email uses generative AI. Both are AI, but they solve different problems with different risks.",
    "businessUse": "Leaders use AI literacy to prioritize use cases, set realistic expectations, and avoid buying \"AI\" as a vague slogan. Teams that define the task, data, and human review step succeed more often than teams that chase demos.",
    "misconception": "Misconception: \"AI means human-level intelligence in a box.\" Reality: today's production systems are specialized tools. Treating them as general oracles causes overtrust and poor governance.",
    "quiz": [
      {
        "q": "Which statement best describes today's workplace AI?",
        "options": [
          "Mostly narrow systems for specific tasks",
          "Fully autonomous general intelligence",
          "Identical to traditional spreadsheets",
          "Always 100% accurate"
        ],
        "correct": 0,
        "explain": "Production AI is typically narrow and task-specific, not AGI."
      }
    ]
  },
  {
    "id": "fund-a2",
    "section": "A. Introduction to AI",
    "title": "AI vs Machine Learning vs Deep Learning",
    "explanation": "AI is the broad goal of intelligent behavior in machines. Machine Learning (ML) is a subset where systems learn patterns from data instead of encoding every rule manually. Deep Learning is a subset of ML using multi-layer neural networks that can learn rich representations from raw inputs like pixels or text tokens. You can have AI without ML (classic rule systems), ML without deep learning (e.g., decision trees), and deep learning powering many modern breakthroughs including large language models.",
    "example": "A tax rules engine is AI-ish automation without ML. A churn model using gradient boosting is ML. A vision model detecting defects on a production line is often deep learning.",
    "businessUse": "Choosing the right level matters for vendors: sometimes a simple rules + checklist beats a neural net. Understanding the stack helps you ask better questions about data needs and failure modes.",
    "misconception": "Misconception: \"Deep learning replaced all other AI.\" Reality: many business problems still use classical ML or rules because they are cheaper, more interpretable, or data-limited.",
    "quiz": [
      {
        "q": "Deep learning is best described as:",
        "options": [
          "A subset of machine learning using neural networks",
          "A synonym for all AI",
          "Only used for robotics",
          "A database technology"
        ],
        "correct": 0,
        "explain": "Deep learning sits inside ML, which sits inside AI."
      }
    ]
  },
  {
    "id": "fund-a3",
    "section": "A. Introduction to AI",
    "title": "A brief history of AI (what matters for practitioners)",
    "explanation": "AI research dates to the mid-20th century with symbolic systems and early optimism, followed by \"AI winters\" when hype outpaced capability. Statistical ML grew through the 1990s-2000s. The 2010s deep learning wave transformed vision and speech. The 2020s generative AI wave-especially large language models-brought AI into everyday knowledge work. For practitioners, history's lesson is cyclical: capability jumps create opportunity and exaggerated claims; durable value comes from workflow redesign, data quality, and evaluation-not slogans.",
    "example": "ImageNet-era breakthroughs made computer vision practical; transformer-based LLMs made fluent text generation mainstream for office work.",
    "businessUse": "When evaluating vendors, ask what is new versus rebranded analytics. Historical literacy helps you spot recycled hype and focus on measurable process change.",
    "misconception": "Misconception: \"Generative AI appeared overnight with no prior foundation.\" Reality: it rests on decades of ML research, data scale, and compute advances.",
    "quiz": [
      {
        "q": "A practical lesson from AI history is:",
        "options": [
          "Hype cycles recur; durable value needs workflow and evaluation discipline",
          "AI winters mean AI failed forever",
          "Only symbolic AI matters now",
          "History is irrelevant to business buyers"
        ],
        "correct": 0,
        "explain": "Capability jumps invite hype; lasting value needs operational discipline."
      }
    ]
  },
  {
    "id": "fund-a4",
    "section": "A. Introduction to AI",
    "title": "Why AI matters now: business drivers",
    "explanation": "AI adoption accelerated because several forces converged: abundant digital data, cheaper compute, better model architectures, competitive pressure, and consumer familiarity with assistants. Business drivers include productivity (drafting and summarization), customer experience (faster responses), risk detection (fraud/anomalies), and product innovation (AI features). Constraints also matter: data privacy, accuracy risk, integration cost, and change management often dominate pure model quality.",
    "example": "A retailer uses demand forecasting to reduce stockouts while a support team uses agent-assist drafts to cut handle time-different drivers, same need for metrics.",
    "businessUse": "Build a portfolio of use cases by value and risk. Quick wins (summaries, drafting) fund harder bets (decision automation) once governance matures.",
    "misconception": "Misconception: \"If we buy the smartest model, transformation is automatic.\" Reality: value shows up when processes, incentives, and quality controls change with the tool.",
    "quiz": [
      {
        "q": "Which factor most often limits AI value after a strong demo?",
        "options": [
          "Integration, data, and change management gaps",
          "Lack of any models on the market",
          "Employees refusing to use email",
          "Monitors being too large"
        ],
        "correct": 0,
        "explain": "Demos rarely include real data permissions, integration, and adoption work."
      }
    ]
  },
  {
    "id": "fund-a5",
    "section": "A. Introduction to AI",
    "title": "Capabilities and limitations of today's AI",
    "explanation": "Modern AI is strong at pattern recognition, drafting, translation, classification, and retrieving patterns from large corpora. It is weak at guaranteed truthfulness, long-term accountability, understanding your private context without access, and moral judgment. Generative models can sound confident while wrong. They may reflect biases in data. They have context limits. They can be manipulated via prompt injection in connected systems. Literacy means matching tasks to strengths and designing human review for weaknesses.",
    "example": "Ask an LLM to draft three subject lines-excellent. Ask it to invent legal citations for a court filing without sources-dangerous.",
    "businessUse": "Create a team rule: AI may draft; humans verify facts, numbers, legal claims, and customer commitments before they leave the building.",
    "misconception": "Misconception: \"Fluent output equals correct output.\" Reality: fluency is a generation skill; correctness requires grounding and verification.",
    "quiz": [
      {
        "q": "A reliable workplace practice is:",
        "options": [
          "Allow AI to draft; require humans to verify critical claims",
          "Ship unverified AI legal citations",
          "Assume confidence implies truth",
          "Ban all drafting tools"
        ],
        "correct": 0,
        "explain": "Draft-then-verify matches strengths and limits."
      }
    ]
  },
  {
    "id": "fund-b1",
    "section": "B. Types of AI",
    "title": "Narrow AI, AGI, and superintelligence",
    "explanation": "Narrow AI (also called weak AI) performs specific tasks. Almost all deployed systems are narrow: recommenders, fraud models, copilots. AGI refers to hypothetical systems with broad, flexible capability comparable to humans across many domains. Superintelligence refers to speculative systems exceeding human capability. Literacy requires separating useful narrow tools from speculative futures so roadmaps stay grounded while still watching long-term risk research.",
    "example": "Your email summarizer is narrow AI. Debates about AGI timelines are strategic foresight-not a substitute for this quarter's pilot metrics.",
    "businessUse": "Fund narrow use cases with clear KPIs; assign a smaller track for horizon scanning so leadership is not surprised by capability shifts.",
    "misconception": "Misconception: \"If a chatbot talks well, it is AGI.\" Reality: fluent language is one capability, not general intelligence.",
    "quiz": [
      {
        "q": "Most production systems today are:",
        "options": [
          "Narrow AI",
          "Proven AGI",
          "Guaranteed superintelligence",
          "Non-digital abacuses only"
        ],
        "correct": 0,
        "explain": "Deployed systems are specialized narrow AI."
      }
    ]
  },
  {
    "id": "fund-b2",
    "section": "B. Types of AI",
    "title": "Rule-based systems",
    "explanation": "Rule-based systems encode expert logic as explicit if/then rules or decision tables. They are transparent and predictable when rules are correct, but brittle as complexity grows and poor at perception tasks like raw image understanding. Many \"AI\" products still embed rules for compliance boundaries around ML components. Hybrid designs-ML for perception, rules for policy-are common and often wise.",
    "example": "An expense system auto-approves meals under a stated limit (rule) but uses ML to flag anomalous merchant patterns.",
    "businessUse": "Prefer rules when regulators require deterministic behavior; use ML when patterns are too numerous to hand-code.",
    "misconception": "Misconception: \"Rules are obsolete.\" Reality: rules remain essential for compliance gates and predictable business policies.",
    "quiz": [
      {
        "q": "Rule-based systems are especially valuable when:",
        "options": [
          "Transparency and deterministic policy matter",
          "You must classify raw images with no features",
          "You want maximum creative randomness",
          "You have no business policies"
        ],
        "correct": 0,
        "explain": "Rules excel at clear, auditable policy logic."
      }
    ]
  },
  {
    "id": "fund-b3",
    "section": "B. Types of AI",
    "title": "Supervised learning",
    "explanation": "Supervised learning trains models on labeled examples: inputs paired with correct outputs. Classification predicts categories; regression predicts numbers. Performance depends on label quality, coverage of edge cases, and careful evaluation on held-out data. Supervised learning powers spam filters, demand forecasts, credit models, and many ranking systems. It fails when labels are wrong, biased, or when production data differs from training data (drift).",
    "example": "Agents label 10,000 tickets by topic; a model learns to route new tickets automatically with human override on low confidence.",
    "businessUse": "Budget for labeling and ongoing monitoring-not only the algorithm. Bad labels create confidently wrong automation.",
    "misconception": "Misconception: \"More data always fixes everything.\" Reality: more biased or noisy labels can worsen outcomes.",
    "quiz": [
      {
        "q": "Supervised learning requires:",
        "options": [
          "Labeled examples of inputs and correct outputs",
          "No data at all",
          "Only unlabeled photos",
          "A single hardcoded rule"
        ],
        "correct": 0,
        "explain": "Labels define what the model should predict."
      }
    ]
  },
  {
    "id": "fund-b4",
    "section": "B. Types of AI",
    "title": "Unsupervised learning",
    "explanation": "Unsupervised learning finds structure in unlabeled data: clustering customers, reducing dimensions, compressing representations, or spotting unusual points. It is exploratory and does not output a predefined \"correct answer.\" Results need human interpretation. Unsupervised methods often feed later supervised models or business segmentation strategies.",
    "example": "A telco clusters subscribers by usage patterns to design plan tiers, then validates clusters with customer research.",
    "businessUse": "Use unsupervised analysis to generate hypotheses, then confirm with domain experts before automating decisions.",
    "misconception": "Misconception: \"Clusters are ground truth segments.\" Reality: clusters are mathematical groupings that may or may not be actionable.",
    "quiz": [
      {
        "q": "Unsupervised learning is most useful to:",
        "options": [
          "Discover structure without predefined labels",
          "Replace all human interpretation",
          "Guarantee fair outcomes automatically",
          "Eliminate the need for evaluation"
        ],
        "correct": 0,
        "explain": "It reveals structure; humans still interpret actionability."
      }
    ]
  },
  {
    "id": "fund-b5",
    "section": "B. Types of AI",
    "title": "Reinforcement learning",
    "explanation": "Reinforcement learning (RL) trains agents to take actions in an environment to maximize cumulative reward. It shines in games, robotics, and sequential decision problems, and also appears in aligning language models via preference-based methods (e.g., RLHF). RL can be sample-inefficient and unsafe if rewards are misspecified-agents may \"game\" the metric.",
    "example": "A warehouse robot learns navigation policies through simulated rewards; a language model is tuned with human preference feedback.",
    "businessUse": "If you hear \"RL,\" ask what the reward is. Misaligned rewards create misaligned behavior-even if scores look great.",
    "misconception": "Misconception: \"RL always means physical robots.\" Reality: RL also shapes software agents and model alignment techniques.",
    "quiz": [
      {
        "q": "A key risk in reinforcement learning is:",
        "options": [
          "Reward misspecification leading to unintended behavior",
          "Never being used in research",
          "Inability to define any objective",
          "Only working on spreadsheets"
        ],
        "correct": 0,
        "explain": "Agents optimize the reward you specify-not the intent you meant."
      }
    ]
  },
  {
    "id": "fund-b6",
    "section": "B. Types of AI",
    "title": "Generative vs discriminative AI",
    "explanation": "Discriminative models learn decision boundaries: given input X, predict label Y (spam/not spam). Generative models learn to produce new samples resembling data: text, images, audio, or synthetic tabular rows. Generative AI enables drafting and creation; discriminative AI often powers reliable classification and ranking. Many products combine both-e.g., a classifier routes tickets, a generative model drafts the reply.",
    "example": "A discriminative model flags fraudulent transactions; a generative model drafts a customer explanation of the hold for an agent to edit.",
    "businessUse": "Do not replace a well-calibrated classifier with an LLM unless you have evals showing equal or better reliability at acceptable cost.",
    "misconception": "Misconception: \"Generative AI makes discriminative models obsolete.\" Reality: classification and ranking remain central to production systems.",
    "quiz": [
      {
        "q": "Drafting a new product description is primarily a:",
        "options": [
          "Generative task",
          "Pure discriminative classification task",
          "Database backup task",
          "Network cabling task"
        ],
        "correct": 0,
        "explain": "Creating new text is generative."
      }
    ]
  },
  {
    "id": "fund-b7",
    "section": "B. Types of AI",
    "title": "Computer vision",
    "explanation": "Computer vision enables machines to interpret images and video: classify scenes, detect objects, read text (OCR), estimate poses, or inspect defects. Modern vision relies heavily on deep learning. Business value appears in quality control, safety monitoring, medical imaging support, retail analytics, and document digitization. Risks include brittle performance under lighting/camera changes and privacy concerns with continuous video.",
    "example": "A factory camera flags missing screws on assemblies before packaging; humans review uncertain cases.",
    "businessUse": "Start with a narrow visual defect library and controlled camera setup-vision projects fail when \"just add AI cameras\" ignores environment design.",
    "misconception": "Misconception: \"Vision models see like humans.\" Reality: they detect statistical patterns and can fail on novel conditions humans handle easily.",
    "quiz": [
      {
        "q": "OCR is best categorized as:",
        "options": [
          "A computer vision capability for reading text in images",
          "A payroll accounting standard",
          "A type of keyboard",
          "An email protocol"
        ],
        "correct": 0,
        "explain": "OCR extracts text from images/scans."
      }
    ]
  },
  {
    "id": "fund-b8",
    "section": "B. Types of AI",
    "title": "Language and speech AI",
    "explanation": "Natural Language Processing (NLP) covers understanding and generating text: search, classification, translation, summarization, and dialogue. Speech AI converts audio to text (speech recognition) and text to audio (TTS). Large language models dramatically improved general-purpose language tasks, while specialized speech models power meeting transcription and voice interfaces. Combined multimodal systems can analyze screenshots, diagrams, and spoken instructions together.",
    "example": "A contact center transcribes calls, summarizes issues, and suggests next-best actions for agents.",
    "businessUse": "Language AI ROI often comes from reducing time-to-first-draft and improving knowledge findability-not from fully removing experts.",
    "misconception": "Misconception: \"If it understands words, it understands your business.\" Reality: without your documents, policies, and tools, it improvises.",
    "quiz": [
      {
        "q": "Speech-to-text systems primarily convert:",
        "options": [
          "Audio into written text",
          "Text into SQL tables only",
          "Images into GPUs",
          "Policies into contracts automatically"
        ],
        "correct": 0,
        "explain": "Speech recognition outputs transcripts."
      }
    ]
  },
  {
    "id": "fund-c1",
    "section": "C. How AI works",
    "title": "Data as the foundation",
    "explanation": "AI systems learn from or are constrained by data. Volume, variety, velocity, and veracity all matter. Missing labels, skewed populations, duplicated rows, leakage from future data, and undocumented transformations quietly destroy projects. Generative systems also depend on what they were trained on and what you retrieve at runtime. Data governance-ownership, quality rules, access control-is therefore core AI infrastructure, not bureaucracy.",
    "example": "A churn model trained only on long-tenure customers fails for new segments; a RAG bot with outdated PDFs gives outdated answers.",
    "businessUse": "Before buying models, inventory data sources, owners, refresh cadence, and quality metrics for your top use cases.",
    "misconception": "Misconception: \"The algorithm is 90% of success.\" Reality: data readiness usually dominates outcomes.",
    "quiz": [
      {
        "q": "Which foundation most often determines AI project success?",
        "options": [
          "Data quality, coverage, and governance",
          "Fancy office furniture",
          "Choosing purple as a brand color",
          "Disabling evaluation"
        ],
        "correct": 0,
        "explain": "Data readiness drives results more than algorithm fashion."
      }
    ]
  },
  {
    "id": "fund-c2",
    "section": "C. How AI works",
    "title": "Features and representations",
    "explanation": "Classical ML relies on features-measured attributes like amount, tenure, or click counts. Representation learning in deep networks discovers features automatically from raw inputs. In LLMs, tokens and embeddings are the representations. Good representations make tasks easier; poor ones hide signal. Feature stores and embedding indexes are practical ways teams reuse representations across products.",
    "example": "Fraud models use velocity features (transactions per hour); RAG systems use text embeddings to find similar paragraphs.",
    "businessUse": "Ask vendors what signals the system uses. If they cannot explain inputs at a useful level, risk review gets harder.",
    "misconception": "Misconception: \"Deep learning means features do not matter.\" Reality: you still choose data, labels, filters, and chunking strategies that shape representations.",
    "quiz": [
      {
        "q": "Embeddings in LLM applications are primarily used to:",
        "options": [
          "Represent meaning for similarity search and RAG",
          "Replace all databases with images",
          "Charge phones faster",
          "Print hardware invoices"
        ],
        "correct": 0,
        "explain": "Embeddings enable semantic similarity and retrieval."
      }
    ]
  },
  {
    "id": "fund-c3",
    "section": "C. How AI works",
    "title": "Training vs inference",
    "explanation": "Training is the resource-intensive process of adjusting model parameters using data (and for LLMs, often multiple stages including pretraining and alignment). Inference is using the trained model to produce outputs for new inputs. Most employees interact with inference via apps and APIs. Costs differ: training foundation models is rare and expensive; inference costs scale with usage. Fine-tuning sits between-adapting a pretrained model with more training on specialized data.",
    "example": "Your company rarely trains a frontier LLM from scratch; it calls an API (inference) or fine-tunes lightly for domain style.",
    "businessUse": "Track inference unit economics early-successful pilots can create surprising monthly bills without caching and routing strategies.",
    "misconception": "Misconception: \"Using ChatGPT means we trained a model.\" Reality: you are typically consuming inference of a hosted model.",
    "quiz": [
      {
        "q": "When you prompt Claude or ChatGPT at work, you are usually performing:",
        "options": [
          "Inference with a pretrained hosted model",
          "Training a new foundation model from scratch",
          "Manufacturing GPUs",
          "Deleting your ERP"
        ],
        "correct": 0,
        "explain": "Everyday use is inference, not foundation-model training."
      }
    ]
  },
  {
    "id": "fund-c4",
    "section": "C. How AI works",
    "title": "Neural networks at a conceptual level",
    "explanation": "Neural networks pass inputs through layers of weighted connections and nonlinear activations. Early layers capture simple patterns; deeper layers capture more abstract combinations. Training uses optimization methods to reduce error on tasks. You do not need to derive backpropagation to use AI well, but you should know networks are statistical pattern machines-powerful, opaque to varying degrees, and sensitive to their training distribution.",
    "example": "A vision network's early layers detect edges; later layers detect object parts-useful intuition even if simplified.",
    "businessUse": "When stakeholders ask 'why did it decide that?', plan for explainability techniques or keep humans in the loop for consequential decisions.",
    "misconception": "Misconception: Neural nets do not reason like people with beliefs. Reality: they optimize mathematical objectives on data; anthropomorphism misleads governance.",
    "quiz": [
      {
        "q": "Neural networks learn primarily by:",
        "options": [
          "Adjusting weights to improve task performance on data",
          "Memorizing only if/then rules written by lawyers",
          "Ignoring data entirely",
          "Printing random hardware specs"
        ],
        "correct": 0,
        "explain": "Learning adjusts parameters using data-driven optimization."
      }
    ]
  },
  {
    "id": "fund-c5",
    "section": "C. How AI works",
    "title": "Models, parameters, and scale",
    "explanation": "Parameters are the learned knobs inside a model. Larger models with more parameters and more training compute often gain capability-but not linearly, and not freely: they cost more to run and can still fail basic tasks. \"Bigger is better\" is an incomplete strategy. Distillation, routing to smaller models, and retrieval can deliver better cost/quality tradeoffs than always using the largest model.",
    "example": "A company routes simple FAQ traffic to a small model and complex analysis to a larger model.",
    "businessUse": "Include model routing in architecture reviews; defaulting everything to the largest model burns budget.",
    "misconception": "Misconception: \"Parameter count alone guarantees quality on my task.\" Reality: domain fit, prompting, retrieval, and evals matter as much or more.",
    "quiz": [
      {
        "q": "A practical cost/quality tactic is:",
        "options": [
          "Route simple tasks to smaller models when quality allows",
          "Always use the largest model for every FAQ",
          "Avoid measuring quality",
          "Disable caching forever"
        ],
        "correct": 0,
        "explain": "Routing and right-sizing reduce cost without abandoning quality."
      }
    ]
  },
  {
    "id": "fund-c6",
    "section": "C. How AI works",
    "title": "Evaluation and metrics",
    "explanation": "Evaluation turns opinions into evidence. Classification uses precision, recall, F1, ROC curves; generative systems need task-specific rubrics, human ratings, factuality checks, and regression tests (evals). Offline evals catch failures before launch; online metrics watch real users. Without evals, teams ship vibes. With poor evals, teams optimize the wrong score.",
    "example": "A RAG assistant is graded on citation faithfulness and answer completeness across 150 gold questions before rollout.",
    "businessUse": "Create a golden set for each critical use case and re-run it when prompts, models, or knowledge bases change.",
    "misconception": "Misconception: \"User compliments in a demo equal production readiness.\" Reality: demos are anecdotal; evals are systematic.",
    "quiz": [
      {
        "q": "Before launching an enterprise Q&A assistant you should:",
        "options": [
          "Run systematic evals on realistic questions",
          "Rely only on one executive demo reaction",
          "Skip citation checks",
          "Hide failure cases"
        ],
        "correct": 0,
        "explain": "Golden-set evals reduce launch risk."
      }
    ]
  },
  {
    "id": "fund-c7",
    "section": "C. How AI works",
    "title": "Bias and data quality risks",
    "explanation": "Bias enters through skewed sampling, historical inequities in labels, proxy variables, and feedback loops. Data quality issues-duplicates, leakage, stale features-create brittle systems. Generative models can amplify stereotypes present in training data. Literacy does not require solving all fairness math on day one, but it does require asking who could be harmed, what metrics differ across groups, and when AI should not automate a decision.",
    "example": "A resume screener trained on past hires may reproduce historical demographic imbalances unless carefully audited and constrained.",
    "businessUse": "For people-impacting decisions, require impact assessments, human appeal paths, and documented prohibitions where appropriate.",
    "misconception": "Misconception: \"Removing explicit demographic fields removes bias.\" Reality: proxies can still encode sensitive attributes.",
    "quiz": [
      {
        "q": "Removing demographic fields alone:",
        "options": [
          "May still leave proxy-based bias",
          "Guarantees perfect fairness",
          "Eliminates the need for audits",
          "Makes models psychic"
        ],
        "correct": 0,
        "explain": "Proxies can reintroduce sensitive patterns."
      }
    ]
  },
  {
    "id": "fund-c8",
    "section": "C. How AI works",
    "title": "Deployment, monitoring, and MLOps awareness",
    "explanation": "Shipping AI means versioning models/prompts, controlling access, watching drift, logging incidents, and planning rollback. MLOps (and LLMOps) adapts DevOps ideas to data and model systems: CI for evals, canary releases, cost monitors, and feedback capture. Generative apps add prompt versioning, retrieval index freshness, and abuse monitoring. Literacy-level takeaway: a model demo is not an operating system for production.",
    "example": "A team versions prompts in Git, runs eval gates in CI, and alerts when answer refusal rates spike.",
    "businessUse": "Assign clear owners for model quality, security, and business KPI-not \"the AI will manage itself.\"",
    "misconception": "Misconception: \"Once accuracy looks good, monitoring is optional.\" Reality: data and user behavior change; quality drifts.",
    "quiz": [
      {
        "q": "LLMOps/MLOps primarily addresses:",
        "options": [
          "Operating AI systems reliably after the demo",
          "Choosing office snacks",
          "Avoiding all documentation",
          "Training humans to ignore metrics"
        ],
        "correct": 0,
        "explain": "Production operations keep AI useful and safe over time."
      }
    ]
  },
  {
    "id": "fund-d1",
    "section": "D. Understanding LLMs",
    "title": "What is a large language model?",
    "explanation": "A large language model (LLM) is a generative model trained to predict tokens in sequence, absorbing statistical structure of language and many facts/patterns from training data. After pretraining, models are typically aligned with instruction tuning and preference optimization so they follow helpful conversational behavior. LLMs power chat assistants, coding copilots, and agent systems. They do not \"look up\" a single internal encyclopedia with guaranteed citations unless connected to tools or retrieval.",
    "example": "When you ask for a project plan, the model predicts a useful continuation token by token based on patterns and your prompt constraints.",
    "businessUse": "Position LLMs as reasoning-and-drafting engines that need tools and sources for factual enterprise answers.",
    "misconception": "Misconception: \"The model thinks in complete paragraphs then types them.\" Reality: generation is sequential prediction shaped by training and decoding settings.",
    "quiz": [
      {
        "q": "At the core, LLMs generate text by:",
        "options": [
          "Predicting tokens sequentially",
          "Querying one perfect private database of truth by default",
          "Executing deterministic payroll rules only",
          "Printing random hardware diagnostics"
        ],
        "correct": 0,
        "explain": "Token prediction is the core generation mechanism."
      }
    ]
  },
  {
    "id": "fund-d2",
    "section": "D. Understanding LLMs",
    "title": "Tokens and context windows",
    "explanation": "Tokens are pieces of text the model processes-often parts of words. Pricing and rate limits frequently use token counts. The context window is how much prior text (instructions, history, documents) the model can consider at once. When you exceed limits, systems truncate, refuse, or require chunking strategies. Long-context models reduce chunking needs but still benefit from organized prompts and retrieval for precision and cost.",
    "example": "A 100-page PDF may fit in a long-context model, yet asking targeted section questions with citations still beats dumping everything unscoped.",
    "businessUse": "Teach teams to estimate token-heavy workflows and to prefer retrieval of relevant sections for recurring knowledge tasks.",
    "misconception": "Misconception: \"Infinite chat history is always remembered perfectly.\" Reality: older turns may fall out of the window unless summarized or stored externally.",
    "quiz": [
      {
        "q": "If conversation + documents exceed the context window:",
        "options": [
          "Some content may be truncated or must be chunked/retrieved",
          "The model gains infinite perfect memory automatically",
          "Tokens stop existing",
          "Your laptop invents new RAM"
        ],
        "correct": 0,
        "explain": "Context windows are finite; engineering patterns handle overflow."
      }
    ]
  },
  {
    "id": "fund-d3",
    "section": "D. Understanding LLMs",
    "title": "Pretraining, fine-tuning, and alignment",
    "explanation": "Pretraining teaches general language competence on large corpora. Fine-tuning adapts a model to domains or formats with additional training. Alignment techniques (instruction tuning, RLHF/preference optimization, constitutional methods, safety training) steer models toward helpful, harmless, honest behavior. As a buyer or user, you usually choose among hosted aligned models; customization may involve fine-tuning, adapters, or-more often-prompting, tools, and RAG.",
    "example": "A hospital explores fine-tuning on de-identified note styles but starts with RAG over approved guidelines because it is safer to update.",
    "businessUse": "Prefer RAG and prompt patterns before fine-tuning unless you have clear eval gains and ML ownership.",
    "misconception": "Misconception: \"Fine-tuning is always required for enterprise use.\" Reality: many wins come from retrieval, tools, and workflow design.",
    "quiz": [
      {
        "q": "Updating answers when policies change is often easiest with:",
        "options": [
          "RAG over the latest approved documents",
          "Never documenting policies",
          "Fine-tuning daily without evals",
          "Deleting the model"
        ],
        "correct": 0,
        "explain": "Retrieval can be updated when source docs change."
      }
    ]
  },
  {
    "id": "fund-d4",
    "section": "D. Understanding LLMs",
    "title": "Prompting as the primary interface",
    "explanation": "For most knowledge workers, prompting is the UI to LLM capability. Clear goals, context, constraints, and output formats dramatically improve results. Advanced patterns include few-shot examples, rubrics, tool instructions, and critique-revise loops. Prompting does not remove the need for verification. Organizations should version successful prompts like lightweight software artifacts.",
    "example": "\"Summarize\" becomes \"Summarize for a CFO in 5 bullets: risks, cash impact, decisions needed; cite section headers from the memo.\"",
    "businessUse": "Create a shared prompt library for recurring tasks and review it quarterly as models change.",
    "misconception": "Misconception: \"Prompt engineering is manipulative trickery.\" Reality: it is clear communication of task, context, and acceptance criteria.",
    "quiz": [
      {
        "q": "Effective prompts usually specify:",
        "options": [
          "Goal, context, constraints, and format",
          "Only a single vague adjective",
          "No audience",
          "That the model should invent sources"
        ],
        "correct": 0,
        "explain": "Clarity and structure drive usable outputs."
      }
    ]
  },
  {
    "id": "fund-d5",
    "section": "D. Understanding LLMs",
    "title": "Hallucinations, grounding, and verification",
    "explanation": "Hallucinations are plausible but false outputs-wrong facts, fake citations, invented policies. They arise because models optimize for helpful-sounding continuation, not guaranteed database lookup. Mitigation includes grounding with retrieved documents, tool use (calculators, search), forcing \"I don't know,\" citation requirements, and human verification. High-stakes domains need stronger controls than brainstorming domains.",
    "example": "A policy bot must quote the employee handbook section; if missing, it says the policy is not in the knowledge base.",
    "businessUse": "Ban unverifiable citations in customer, legal, and medical-adjacent workflows; require source links or document IDs.",
    "misconception": "Misconception: \"Lower temperature fully eliminates hallucinations.\" Reality: it may reduce randomness but not guarantee factuality.",
    "quiz": [
      {
        "q": "Best mitigation for policy Q&A hallucinations is:",
        "options": [
          "Ground answers in retrieved approved documents and allow \"unknown\"",
          "Ask the model to sound more confident",
          "Disable all logging",
          "Remove human reviewers permanently"
        ],
        "correct": 0,
        "explain": "Grounding plus honest unknowns beats confident guessing."
      }
    ]
  },
  {
    "id": "fund-d6",
    "section": "D. Understanding LLMs",
    "title": "Safety, alignment, and responsible use at work",
    "explanation": "LLM safety includes refusing harmful requests, resisting prompt injection, protecting privacy, and behaving within policy. Alignment is the broader effort to make models behave according to human intentions and values. At work, responsible use means following acceptable-use policies, minimizing sensitive data in prompts, labeling AI-assisted external content where required, and maintaining human accountability. Literacy is incomplete without these norms.",
    "example": "An employee redacts customer account numbers before pasting text into an assistant and marks AI-drafted blog posts for editor review.",
    "businessUse": "Publish a one-page acceptable-use guide: allowed tools, prohibited data classes, verification rules, and escalation paths.",
    "misconception": "Misconception: \"Safety is only the model vendor's job.\" Reality: vendors ship safeguards; organizations still control data, permissions, and processes.",
    "quiz": [
      {
        "q": "Responsible workplace LLM use requires:",
        "options": [
          "Human accountability plus data minimization and verification",
          "Uploading all secrets to public bots",
          "Ignoring prompt injection risks",
          "Assuming vendors own business outcomes"
        ],
        "correct": 0,
        "explain": "Organizations share responsibility for safe use."
      }
    ]
  }
];
