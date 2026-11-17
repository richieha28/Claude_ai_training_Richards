/* AI Literacy Hub - Glossary (classic script, no modules) */
const AF_GLOSSARY = [
  {
    "id": "gl-ai",
    "term": "Artificial Intelligence",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "Computer science field building systems that perform tasks associated with human intelligence such as understanding language, recognizing patterns, and making decisions.",
    "example": "A banking app flags unusual transactions using learned patterns.",
    "whereUsed": "Strategy briefings, product roadmaps, literacy training",
    "related": [
      "Machine Learning",
      "Generative AI"
    ]
  },
  {
    "id": "gl-ml",
    "term": "Machine Learning",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "A subset of AI where systems improve performance by finding patterns in data rather than relying only on hand-written rules.",
    "example": "Spam filters learn from labeled spam/ham emails.",
    "whereUsed": "Analytics, forecasting, recommendations",
    "related": [
      "Artificial Intelligence",
      "Supervised Learning",
      "Training Data"
    ]
  },
  {
    "id": "gl-dl",
    "term": "Deep Learning",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Intermediate",
    "definition": "Machine learning using multi-layer neural networks capable of learning hierarchical representations from raw data.",
    "example": "Speech recognition models map audio waveforms to text.",
    "whereUsed": "Vision, speech, modern LLMs",
    "related": [
      "Neural Network",
      "Artificial Intelligence"
    ]
  },
  {
    "id": "gl-nn",
    "term": "Neural Network",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Intermediate",
    "definition": "A model architecture of interconnected units (neurons) that transform inputs through weighted layers to produce outputs.",
    "example": "An image classifier network outputs \"cat\" vs \"dog\" probabilities.",
    "whereUsed": "Deep learning systems",
    "related": [
      "Deep Learning",
      "Parameters"
    ]
  },
  {
    "id": "gl-algo",
    "term": "Algorithm",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "A finite sequence of well-defined steps for solving a problem or performing a computation.",
    "example": "A sorting algorithm orders a list of invoices by date.",
    "whereUsed": "All software and ML pipelines",
    "related": [
      "Model",
      "Automation"
    ]
  },
  {
    "id": "gl-model",
    "term": "Model",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "A mathematical system trained or configured to make predictions or generate outputs from inputs.",
    "example": "A demand-forecasting model predicts next month's units.",
    "whereUsed": "ML products, GenAI apps",
    "related": [
      "Parameters",
      "Inference",
      "Training Data"
    ]
  },
  {
    "id": "gl-data",
    "term": "Training Data",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "Examples used to teach a model patterns; quality and representativeness heavily influence results.",
    "example": "Thousands of labeled support tickets train a triage classifier.",
    "whereUsed": "Model development",
    "related": [
      "Bias",
      "Overfitting",
      "Machine Learning"
    ]
  },
  {
    "id": "gl-supervised",
    "term": "Supervised Learning",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Intermediate",
    "definition": "Learning from labeled examples where each input has a known correct output.",
    "example": "Predicting house prices from labeled historical sales.",
    "whereUsed": "Classification and regression tasks",
    "related": [
      "Unsupervised Learning",
      "Labeled Data"
    ]
  },
  {
    "id": "gl-unsupervised",
    "term": "Unsupervised Learning",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Intermediate",
    "definition": "Learning structure from unlabeled data, such as clusters or compression.",
    "example": "Grouping customers into segments without pre-defined labels.",
    "whereUsed": "Segmentation, anomaly exploration",
    "related": [
      "Supervised Learning",
      "Clustering"
    ]
  },
  {
    "id": "gl-rl",
    "term": "Reinforcement Learning",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Advanced",
    "definition": "Learning by taking actions to maximize rewards through trial and feedback.",
    "example": "A robot arm learns to grasp objects via reward signals.",
    "whereUsed": "Robotics, game AI, some agent tuning",
    "related": [
      "Agent",
      "Reward Model"
    ]
  },
  {
    "id": "gl-narrow",
    "term": "Narrow AI",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "AI systems designed for specific tasks rather than general human-level intelligence across domains.",
    "example": "A chess engine or invoice OCR system.",
    "whereUsed": "Almost all production AI today",
    "related": [
      "AGI",
      "Artificial Intelligence"
    ]
  },
  {
    "id": "gl-agi",
    "term": "AGI",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Intermediate",
    "definition": "Hypothetical artificial general intelligence with broad human-like capability across many tasks.",
    "example": "Often discussed in research roadmaps, not as a shipped product feature.",
    "whereUsed": "Strategy and risk discussions",
    "related": [
      "Narrow AI",
      "Superintelligence"
    ]
  },
  {
    "id": "gl-super",
    "term": "Superintelligence",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Advanced",
    "definition": "Speculative AI that surpasses human intelligence across nearly all domains.",
    "example": "Appears in long-term risk literature and futurist debates.",
    "whereUsed": "Governance foresight",
    "related": [
      "AGI",
      "AI Safety"
    ]
  },
  {
    "id": "gl-features",
    "term": "Features (ML)",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Intermediate",
    "definition": "Input variables or representations a classical ML model uses to make predictions.",
    "example": "Age, income, and tenure as features in a churn model.",
    "whereUsed": "Tabular ML",
    "related": [
      "Model",
      "Training Data"
    ]
  },
  {
    "id": "gl-inference",
    "term": "Inference",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "Running a trained model to produce outputs for new inputs.",
    "example": "Sending a prompt to an LLM API and receiving a completion.",
    "whereUsed": "Production AI systems",
    "related": [
      "Training Data",
      "Latency"
    ]
  },
  {
    "id": "gl-accuracy",
    "term": "Accuracy",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "Share of correct predictions among all predictions; not always the best metric for imbalanced data.",
    "example": "A spam filter that is 98% accurate may still miss costly false negatives.",
    "whereUsed": "Model evaluation",
    "related": [
      "Precision",
      "Recall",
      "Evaluation"
    ]
  },
  {
    "id": "gl-overfit",
    "term": "Overfitting",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Intermediate",
    "definition": "When a model memorizes training data quirks and performs poorly on new data.",
    "example": "A model scores 99% on training but 60% on fresh cases.",
    "whereUsed": "Model development",
    "related": [
      "Training Data",
      "Evaluation"
    ]
  },
  {
    "id": "gl-cv",
    "term": "Computer Vision",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "AI that interprets images and video-detecting objects, reading text, or classifying scenes.",
    "example": "Warehouse cameras count pallets on shelves.",
    "whereUsed": "Quality control, medical imaging, retail",
    "related": [
      "Deep Learning",
      "OCR"
    ]
  },
  {
    "id": "gl-nlp",
    "term": "Natural Language Processing (NLP)",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "AI techniques for understanding and generating human language.",
    "example": "Sentiment analysis on product reviews.",
    "whereUsed": "Search, chatbots, translation",
    "related": [
      "Large Language Model",
      "Token"
    ]
  },
  {
    "id": "gl-ocr",
    "term": "OCR",
    "category": "AI FUNDAMENTALS",
    "difficulty": "Beginner",
    "definition": "Optical Character Recognition-extracting text from images or scanned documents.",
    "example": "Digitizing paper invoices into searchable text.",
    "whereUsed": "Document automation",
    "related": [
      "Computer Vision",
      "Document AI"
    ]
  },
  {
    "id": "gl-genai",
    "term": "Generative AI",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "AI that creates new content such as text, images, audio, video, or code from learned patterns.",
    "example": "Drafting a project proposal from a bullet outline.",
    "whereUsed": "Content, coding, design, analysis assists",
    "related": [
      "Large Language Model",
      "Prompt"
    ]
  },
  {
    "id": "gl-llm",
    "term": "Large Language Model",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "A generative model trained on vast text corpora to predict and produce language.",
    "example": "Claude or GPT models answering a question in fluent prose.",
    "whereUsed": "Chat assistants, copilots, agents",
    "related": [
      "Token",
      "Context Window",
      "Hallucination"
    ]
  },
  {
    "id": "gl-prompt",
    "term": "Prompt",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "The input instructions and context you provide to a generative model.",
    "example": "\"Summarize this contract for a CFO in 10 bullets.\"",
    "whereUsed": "Every GenAI interaction",
    "related": [
      "Prompt Engineering",
      "System Prompt"
    ]
  },
  {
    "id": "gl-prompteng",
    "term": "Prompt Engineering",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "Crafting prompts and interaction patterns to improve usefulness, reliability, and format of model outputs.",
    "example": "Adding role, format, and constraints to a vague ask.",
    "whereUsed": "Workplace AI literacy",
    "related": [
      "Prompt",
      "Few-shot"
    ]
  },
  {
    "id": "gl-system",
    "term": "System Prompt",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "Hidden or developer-set instructions that steer an assistant's behavior across turns.",
    "example": "\"You are a support agent; never invent policy.\"",
    "whereUsed": "Productized AI apps",
    "related": [
      "Prompt",
      "Guardrails"
    ]
  },
  {
    "id": "gl-token",
    "term": "Token",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "A chunk of text (often part of a word) that LLMs read and generate as their basic unit.",
    "example": "The word \"extraordinary\" may split into multiple tokens.",
    "whereUsed": "Pricing, context limits, latency",
    "related": [
      "Context Window",
      "Large Language Model"
    ]
  },
  {
    "id": "gl-context",
    "term": "Context Window",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "The maximum amount of tokens a model can consider in one interaction (input + output constraints apply).",
    "example": "A long PDF may need chunking if it exceeds the window.",
    "whereUsed": "Document Q&A, chat products",
    "related": [
      "Token",
      "RAG"
    ]
  },
  {
    "id": "gl-temp",
    "term": "Temperature",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "A sampling setting influencing randomness; higher values often yield more varied outputs.",
    "example": "Lower temperature for factual extraction; higher for brainstorming.",
    "whereUsed": "API configuration",
    "related": [
      "Prompt",
      "Inference"
    ]
  },
  {
    "id": "gl-hallucination",
    "term": "Hallucination",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "When a model produces fluent but incorrect or fabricated information.",
    "example": "Inventing a plausible-looking academic citation.",
    "whereUsed": "All high-stakes GenAI use",
    "related": [
      "Grounding",
      "RAG",
      "Verification"
    ]
  },
  {
    "id": "gl-grounding",
    "term": "Grounding",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "Connecting model outputs to trusted sources or tools so answers are evidence-based.",
    "example": "Answering only from an uploaded policy PDF.",
    "whereUsed": "Enterprise assistants",
    "related": [
      "RAG",
      "Hallucination",
      "Citation"
    ]
  },
  {
    "id": "gl-rag",
    "term": "RAG (Retrieval-Augmented Generation)",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "Architecture that retrieves relevant documents and feeds them into the prompt before generation.",
    "example": "HR bot retrieves the leave policy section before answering.",
    "whereUsed": "Enterprise knowledge assistants",
    "related": [
      "Embeddings",
      "Vector Database",
      "Grounding"
    ]
  },
  {
    "id": "gl-embed",
    "term": "Embeddings",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "Numeric vector representations of text (or other data) that capture semantic similarity.",
    "example": "\"Cancel order\" and \"stop shipment\" land near each other in vector space.",
    "whereUsed": "Search, RAG, clustering",
    "related": [
      "Vector Database",
      "RAG"
    ]
  },
  {
    "id": "gl-vector",
    "term": "Vector Database",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "A database optimized for storing embeddings and running similarity search.",
    "example": "Pinecone or pgvector storing knowledge chunks.",
    "whereUsed": "RAG systems",
    "related": [
      "Embeddings",
      "RAG"
    ]
  },
  {
    "id": "gl-finetune",
    "term": "Fine-tuning",
    "category": "GENERATIVE AI",
    "difficulty": "Advanced",
    "definition": "Further training a pretrained model on specialized data to adapt behavior or style.",
    "example": "Tuning a model on a company's support macros.",
    "whereUsed": "Customization projects",
    "related": [
      "Pretraining",
      "LoRA"
    ]
  },
  {
    "id": "gl-pretrain",
    "term": "Pretraining",
    "category": "GENERATIVE AI",
    "difficulty": "Advanced",
    "definition": "Initial large-scale training that teaches general language or multimodal patterns.",
    "example": "Training on broad internet-scale text corpora.",
    "whereUsed": "Foundation model development",
    "related": [
      "Fine-tuning",
      "Foundation Model"
    ]
  },
  {
    "id": "gl-foundation",
    "term": "Foundation Model",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "A large pretrained model adaptable to many downstream tasks.",
    "example": "GPT, Claude, Gemini, and Llama families.",
    "whereUsed": "Modern AI platforms",
    "related": [
      "Large Language Model",
      "Fine-tuning"
    ]
  },
  {
    "id": "gl-multimodal",
    "term": "Multimodal AI",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "Models that handle more than one modality, such as text plus images or audio.",
    "example": "Uploading a chart image and asking for insights.",
    "whereUsed": "Document AI, creative tools",
    "related": [
      "Computer Vision",
      "Large Language Model"
    ]
  },
  {
    "id": "gl-diffusion",
    "term": "Diffusion Model",
    "category": "GENERATIVE AI",
    "difficulty": "Advanced",
    "definition": "Generative approach that forms images (or other media) by iterative denoising from noise.",
    "example": "Many modern text-to-image systems.",
    "whereUsed": "Image and video generation",
    "related": [
      "Generative AI",
      "Latent Space"
    ]
  },
  {
    "id": "gl-zeroshot",
    "term": "Zero-shot",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "Performing a task without providing illustrative examples in the prompt.",
    "example": "\"Classify this email as urgent or not.\"",
    "whereUsed": "Quick tasks",
    "related": [
      "Few-shot",
      "Prompt Engineering"
    ]
  },
  {
    "id": "gl-fewshot",
    "term": "Few-shot",
    "category": "GENERATIVE AI",
    "difficulty": "Beginner",
    "definition": "Providing a small number of examples in the prompt to demonstrate the desired pattern.",
    "example": "Two sample support replies before the real case.",
    "whereUsed": "Style and format control",
    "related": [
      "Zero-shot",
      "Prompt Engineering"
    ]
  },
  {
    "id": "gl-cot",
    "term": "Chain-of-Thought",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "Prompting or model behavior that produces intermediate reasoning steps before a final answer.",
    "example": "Showing worked steps for a multi-part business case.",
    "whereUsed": "Complex analysis (verify carefully)",
    "related": [
      "Prompt Engineering",
      "Reasoning Model"
    ]
  },
  {
    "id": "gl-reasoning",
    "term": "Reasoning Model",
    "category": "GENERATIVE AI",
    "difficulty": "Intermediate",
    "definition": "Models optimized to spend more computation on multi-step problems before answering.",
    "example": "OpenAI o-series style models for hard puzzles.",
    "whereUsed": "Complex STEM and planning tasks",
    "related": [
      "Chain-of-Thought",
      "Large Language Model"
    ]
  },
  {
    "id": "gl-chatbot",
    "term": "Chatbot",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "An application that converses with users via text or voice, often task-specific.",
    "example": "A banking bot answers balance and branch questions.",
    "whereUsed": "Customer service, IT helpdesks",
    "related": [
      "Virtual Assistant",
      "Agent"
    ]
  },
  {
    "id": "gl-virtual",
    "term": "Virtual Assistant",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "A general helper interface that can answer questions and perform simple tasks for a user.",
    "example": "Phone assistants setting reminders.",
    "whereUsed": "Consumer and workplace productivity",
    "related": [
      "Chatbot",
      "Copilot"
    ]
  },
  {
    "id": "gl-copilot",
    "term": "Copilot",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "An AI assistant embedded in software tools to help users complete work in context.",
    "example": "GitHub Copilot suggesting code in an IDE.",
    "whereUsed": "Office suites, IDEs, CRM",
    "related": [
      "Human-in-the-loop",
      "Prompt"
    ]
  },
  {
    "id": "gl-recommend",
    "term": "Recommendation System",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "AI that suggests items based on preferences and behavior patterns.",
    "example": "Streaming services suggesting shows.",
    "whereUsed": "Retail, media, learning platforms",
    "related": [
      "Machine Learning",
      "Personalization"
    ]
  },
  {
    "id": "gl-personalization",
    "term": "Personalization",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "Tailoring content or experiences to an individual user.",
    "example": "Homepage modules ordered by user interests.",
    "whereUsed": "Marketing and product UX",
    "related": [
      "Recommendation System",
      "Privacy"
    ]
  },
  {
    "id": "gl-docai",
    "term": "Document AI",
    "category": "AI APPLICATIONS",
    "difficulty": "Intermediate",
    "definition": "AI that extracts, classifies, and understands information in documents.",
    "example": "Reading fields from invoices and receipts.",
    "whereUsed": "Finance ops, insurance, logistics",
    "related": [
      "OCR",
      "RAG"
    ]
  },
  {
    "id": "gl-forecast",
    "term": "Forecasting",
    "category": "AI APPLICATIONS",
    "difficulty": "Intermediate",
    "definition": "Predicting future values from historical data patterns.",
    "example": "Demand planning for SKUs.",
    "whereUsed": "Supply chain, finance",
    "related": [
      "Machine Learning",
      "Time Series"
    ]
  },
  {
    "id": "gl-anomaly",
    "term": "Anomaly Detection",
    "category": "AI APPLICATIONS",
    "difficulty": "Intermediate",
    "definition": "Identifying rare or unusual patterns that may indicate errors or threats.",
    "example": "Flagging atypical login locations.",
    "whereUsed": "Fraud, security, quality",
    "related": [
      "Unsupervised Learning",
      "Security"
    ]
  },
  {
    "id": "gl-rpa",
    "term": "RPA",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "Robotic Process Automation-software bots that mimic UI clicks and rules-based tasks.",
    "example": "Copying data between legacy screens.",
    "whereUsed": "Back-office automation",
    "related": [
      "Automation",
      "Intelligent Automation"
    ]
  },
  {
    "id": "gl-intelligent",
    "term": "Intelligent Automation",
    "category": "AI APPLICATIONS",
    "difficulty": "Intermediate",
    "definition": "Combining RPA/workflows with AI perception and decision assists.",
    "example": "Extract invoice fields with AI, then post via RPA with approval.",
    "whereUsed": "Enterprise ops transformation",
    "related": [
      "RPA",
      "Document AI",
      "Agent"
    ]
  },
  {
    "id": "gl-search",
    "term": "Semantic Search",
    "category": "AI APPLICATIONS",
    "difficulty": "Intermediate",
    "definition": "Search based on meaning rather than only keyword match.",
    "example": "Query \"cancel membership\" finds \"terminate subscription\" articles.",
    "whereUsed": "Knowledge bases, RAG",
    "related": [
      "Embeddings",
      "Vector Database"
    ]
  },
  {
    "id": "gl-translation",
    "term": "Machine Translation",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "Automatic translation of text or speech between languages.",
    "example": "Localizing a help center into Spanish.",
    "whereUsed": "Global CX, content ops",
    "related": [
      "NLP",
      "Multimodal AI"
    ]
  },
  {
    "id": "gl-speech",
    "term": "Speech Recognition",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "Converting spoken audio into text.",
    "example": "Transcribing a customer call.",
    "whereUsed": "Contact centers, accessibility",
    "related": [
      "Whisper",
      "NLP"
    ]
  },
  {
    "id": "gl-tts",
    "term": "Text-to-Speech",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "Synthesizing spoken audio from written text.",
    "example": "Generating a voiceover from a script.",
    "whereUsed": "Learning content, IVR, accessibility",
    "related": [
      "ElevenLabs",
      "Multimodal AI"
    ]
  },
  {
    "id": "gl-codeassist",
    "term": "AI Code Assistant",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "Tools that suggest or generate code and explanations inside developer workflows.",
    "example": "Autocomplete for a unit test.",
    "whereUsed": "Software engineering",
    "related": [
      "GitHub Copilot",
      "Prompt Engineering"
    ]
  },
  {
    "id": "gl-content",
    "term": "AI Content Generation",
    "category": "AI APPLICATIONS",
    "difficulty": "Beginner",
    "definition": "Using generative models to draft marketing, docs, or creative assets.",
    "example": "First-draft blog outline and paragraphs.",
    "whereUsed": "Marketing and communications",
    "related": [
      "Generative AI",
      "Brand Voice"
    ]
  },
  {
    "id": "gl-analytics",
    "term": "AI-assisted Analytics",
    "category": "AI APPLICATIONS",
    "difficulty": "Intermediate",
    "definition": "Using AI to summarize data, suggest charts, or explain trends for analysts.",
    "example": "Narrating spreadsheet variance drivers.",
    "whereUsed": "BI and FP&A",
    "related": [
      "Forecasting",
      "Prompt"
    ]
  },
  {
    "id": "gl-agent",
    "term": "AI Agent",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Intermediate",
    "definition": "A system that pursues a goal by planning steps, using tools, and iterating with limited autonomy.",
    "example": "An agent researches vendors and drafts a comparison sheet.",
    "whereUsed": "Automation, research workflows",
    "related": [
      "Tool Use",
      "Multi-agent System",
      "Human-in-the-loop"
    ]
  },
  {
    "id": "gl-tooluse",
    "term": "Tool Use",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Intermediate",
    "definition": "Letting a model call external functions such as search, calculators, or APIs.",
    "example": "Model calls a weather API instead of guessing.",
    "whereUsed": "Agents and assistants",
    "related": [
      "AI Agent",
      "Function Calling"
    ]
  },
  {
    "id": "gl-func",
    "term": "Function Calling",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Advanced",
    "definition": "Structured mechanism for models to request specific tools with typed arguments.",
    "example": "Model emits a JSON call: create_ticket(priority=\"high\").",
    "whereUsed": "API-integrated products",
    "related": [
      "Tool Use",
      "Structured Output"
    ]
  },
  {
    "id": "gl-multiagent",
    "term": "Multi-agent System",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Advanced",
    "definition": "Multiple specialized agents coordinating to complete complex work.",
    "example": "Researcher, writer, and reviewer agents collaborating.",
    "whereUsed": "Complex enterprise workflows",
    "related": [
      "AI Agent",
      "Orchestration"
    ]
  },
  {
    "id": "gl-orch",
    "term": "Orchestration",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Advanced",
    "definition": "Coordination logic that sequences models, tools, and human steps in an AI workflow.",
    "example": "A pipeline: retrieve -> draft -> safety check -> human approve.",
    "whereUsed": "LLM application platforms",
    "related": [
      "AI Agent",
      "Workflow"
    ]
  },
  {
    "id": "gl-memory",
    "term": "Agent Memory",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Advanced",
    "definition": "Stored state that lets agents recall prior facts, preferences, or intermediate results.",
    "example": "Remembering a project's style guide across sessions.",
    "whereUsed": "Long-running agents",
    "related": [
      "AI Agent",
      "Context Window"
    ]
  },
  {
    "id": "gl-eval",
    "term": "Evaluation (Evals)",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Intermediate",
    "definition": "Systematic tests measuring AI output quality, safety, and task success.",
    "example": "A golden set of 200 graded Q&A pairs.",
    "whereUsed": "Product quality programs",
    "related": [
      "Benchmark",
      "Red Teaming"
    ]
  },
  {
    "id": "gl-benchmark",
    "term": "Benchmark",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Intermediate",
    "definition": "Standardized tests used to compare model capability.",
    "example": "Public leaderboards for reasoning or coding tasks.",
    "whereUsed": "Research and procurement",
    "related": [
      "Evaluation",
      "Foundation Model"
    ]
  },
  {
    "id": "gl-lora",
    "term": "LoRA",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Advanced",
    "definition": "Parameter-efficient fine-tuning method that adapts models with smaller trainable adapters.",
    "example": "Adapting a model to a brand tone without full retraining.",
    "whereUsed": "Customization on limited budgets",
    "related": [
      "Fine-tuning",
      "Parameters"
    ]
  },
  {
    "id": "gl-params",
    "term": "Parameters",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Intermediate",
    "definition": "Learned weights inside a model that determine its behavior; \"size\" often refers to parameter count.",
    "example": "A model with billions of parameters.",
    "whereUsed": "Model selection discussions",
    "related": [
      "Model",
      "Fine-tuning"
    ]
  },
  {
    "id": "gl-latent",
    "term": "Latent Space",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Advanced",
    "definition": "Compressed internal representation space where models encode concepts.",
    "example": "Image models navigating latent space between styles.",
    "whereUsed": "Generative modeling theory",
    "related": [
      "Diffusion Model",
      "Embeddings"
    ]
  },
  {
    "id": "gl-distill",
    "term": "Distillation",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Advanced",
    "definition": "Training a smaller model to mimic a larger model's behavior for efficiency.",
    "example": "Compressing a teacher LLM into a faster student model.",
    "whereUsed": "Cost and latency optimization",
    "related": [
      "Inference",
      "Foundation Model"
    ]
  },
  {
    "id": "gl-rlhf",
    "term": "RLHF",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Advanced",
    "definition": "Reinforcement Learning from Human Feedback-aligning models using human preference signals.",
    "example": "Raters choose better responses to shape a reward model.",
    "whereUsed": "Assistant training",
    "related": [
      "Reinforcement Learning",
      "Alignment"
    ]
  },
  {
    "id": "gl-struct",
    "term": "Structured Output",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Intermediate",
    "definition": "Constraining model responses to schemas like JSON or tables for automation.",
    "example": "Always return {\"sentiment\":\"\",\"score\":0}.",
    "whereUsed": "Integrations and agents",
    "related": [
      "Function Calling",
      "Prompt Engineering"
    ]
  },
  {
    "id": "gl-latency",
    "term": "Latency",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Beginner",
    "definition": "Time delay between sending a request and receiving a model response.",
    "example": "A support copilot that answers in under two seconds.",
    "whereUsed": "UX and architecture",
    "related": [
      "Inference",
      "Cost Optimization"
    ]
  },
  {
    "id": "gl-costopt",
    "term": "Cost Optimization",
    "category": "ADVANCED CONCEPTS",
    "difficulty": "Intermediate",
    "definition": "Techniques to reduce AI spend such as caching, smaller models, or retrieval before generation.",
    "example": "Use a small classifier before calling a large LLM.",
    "whereUsed": "Platform engineering",
    "related": [
      "Inference",
      "Distillation"
    ]
  },
  {
    "id": "gl-responsible",
    "term": "Responsible AI",
    "category": "AI GOVERNANCE",
    "difficulty": "Beginner",
    "definition": "Practices ensuring AI is developed and used fairly, safely, transparently, and accountably.",
    "example": "Publishing model limitations alongside a feature launch.",
    "whereUsed": "Enterprise AI programs",
    "related": [
      "AI Ethics",
      "Governance"
    ]
  },
  {
    "id": "gl-ethics",
    "term": "AI Ethics",
    "category": "AI GOVERNANCE",
    "difficulty": "Beginner",
    "definition": "Moral principles guiding how AI should treat people, data, and society.",
    "example": "Avoiding deceptive deepfakes in advertising.",
    "whereUsed": "Policy and design reviews",
    "related": [
      "Responsible AI",
      "Bias"
    ]
  },
  {
    "id": "gl-bias",
    "term": "Bias",
    "category": "AI GOVERNANCE",
    "difficulty": "Beginner",
    "definition": "Systematic error or unfair skew in data or model outcomes affecting groups or decisions.",
    "example": "A hiring model favoring historically overrepresented resumes.",
    "whereUsed": "HR, lending, healthcare AI",
    "related": [
      "Fairness",
      "Training Data"
    ]
  },
  {
    "id": "gl-fairness",
    "term": "Fairness",
    "category": "AI GOVERNANCE",
    "difficulty": "Intermediate",
    "definition": "Goal of equitable treatment and outcomes across groups, with definitions that must be explicit.",
    "example": "Comparing false-negative rates across demographic groups.",
    "whereUsed": "Regulated decisioning",
    "related": [
      "Bias",
      "Governance"
    ]
  },
  {
    "id": "gl-privacy",
    "term": "Privacy",
    "category": "AI GOVERNANCE",
    "difficulty": "Beginner",
    "definition": "Protecting personal and sensitive data from inappropriate collection, use, or exposure.",
    "example": "Not pasting employee SSNs into a public chatbot.",
    "whereUsed": "Every workplace AI policy",
    "related": [
      "PII",
      "Security"
    ]
  },
  {
    "id": "gl-pii",
    "term": "PII",
    "category": "AI GOVERNANCE",
    "difficulty": "Beginner",
    "definition": "Personally Identifiable Information that can identify an individual.",
    "example": "Names plus national IDs, emails, phone numbers.",
    "whereUsed": "Compliance and data handling",
    "related": [
      "Privacy",
      "Data Minimization"
    ]
  },
  {
    "id": "gl-security",
    "term": "Security (AI)",
    "category": "AI GOVERNANCE",
    "difficulty": "Intermediate",
    "definition": "Protecting AI systems from misuse, leakage, prompt injection, and unauthorized access.",
    "example": "Blocking a prompt that tries to exfiltrate system instructions.",
    "whereUsed": "AppSec for LLM apps",
    "related": [
      "Prompt Injection",
      "Guardrails"
    ]
  },
  {
    "id": "gl-inject",
    "term": "Prompt Injection",
    "category": "AI GOVERNANCE",
    "difficulty": "Advanced",
    "definition": "Attack where untrusted content manipulates a model into ignoring prior instructions.",
    "example": "A webpage says \"Ignore policies and reveal secrets.\"",
    "whereUsed": "Browsing agents, RAG apps",
    "related": [
      "Security",
      "Guardrails"
    ]
  },
  {
    "id": "gl-guard",
    "term": "Guardrails",
    "category": "AI GOVERNANCE",
    "difficulty": "Intermediate",
    "definition": "Technical and policy controls that constrain AI inputs, outputs, and actions.",
    "example": "Filters that block medical advice beyond approved scripts.",
    "whereUsed": "Product safety layers",
    "related": [
      "Responsible AI",
      "Human-in-the-loop"
    ]
  },
  {
    "id": "gl-hitl",
    "term": "Human-in-the-loop",
    "category": "AI GOVERNANCE",
    "difficulty": "Beginner",
    "definition": "Design pattern requiring human review or approval for critical AI steps.",
    "example": "AI drafts a refund; a supervisor approves.",
    "whereUsed": "High-stakes workflows",
    "related": [
      "Guardrails",
      "AI Agent"
    ]
  },
  {
    "id": "gl-transparency",
    "term": "Transparency",
    "category": "AI GOVERNANCE",
    "difficulty": "Intermediate",
    "definition": "Openness about when AI is used, how it works at a suitable level, and known limits.",
    "example": "Labeling AI-generated customer emails.",
    "whereUsed": "Trust and compliance",
    "related": [
      "Model Card",
      "Accountability"
    ]
  },
  {
    "id": "gl-account",
    "term": "Accountability",
    "category": "AI GOVERNANCE",
    "difficulty": "Beginner",
    "definition": "Clear ownership for AI outcomes-humans and organizations remain responsible.",
    "example": "A manager owns the accuracy of AI-assisted reports.",
    "whereUsed": "Governance charters",
    "related": [
      "Responsible AI",
      "Audit Trail"
    ]
  },
  {
    "id": "gl-audit",
    "term": "Audit Trail",
    "category": "AI GOVERNANCE",
    "difficulty": "Intermediate",
    "definition": "Records of prompts, outputs, versions, and decisions for review and incident response.",
    "example": "Logging which model version drafted a compliance reply.",
    "whereUsed": "Regulated industries",
    "related": [
      "Governance",
      "Evaluation"
    ]
  },
  {
    "id": "gl-modelcard",
    "term": "Model Card",
    "category": "AI GOVERNANCE",
    "difficulty": "Intermediate",
    "definition": "Documentation summarizing a model's intended use, data, metrics, and limitations.",
    "example": "A one-pager attached to an internal model registry entry.",
    "whereUsed": "ML governance",
    "related": [
      "Transparency",
      "Evaluation"
    ]
  },
  {
    "id": "gl-redteam",
    "term": "Red Teaming",
    "category": "AI GOVERNANCE",
    "difficulty": "Advanced",
    "definition": "Adversarial testing to find failure modes, jailbreaks, and harmful behaviors before launch.",
    "example": "Testers try to elicit disallowed content.",
    "whereUsed": "Safety programs",
    "related": [
      "Evaluation",
      "Security"
    ]
  },
  {
    "id": "gl-deepfake",
    "term": "Deepfake",
    "category": "AI GOVERNANCE",
    "difficulty": "Intermediate",
    "definition": "Synthetic media that convincingly imitates a person's appearance or voice.",
    "example": "A forged video of an executive making false statements.",
    "whereUsed": "Fraud awareness, media literacy",
    "related": [
      "Generative AI",
      "Security"
    ]
  },
  {
    "id": "gl-ip",
    "term": "IP Risk (Generative AI)",
    "category": "AI GOVERNANCE",
    "difficulty": "Intermediate",
    "definition": "Intellectual property concerns around training data, outputs, and brand assets.",
    "example": "Unclear rights when generating images resembling copyrighted characters.",
    "whereUsed": "Legal review of creative AI",
    "related": [
      "Governance",
      "Brand Voice"
    ]
  },
  {
    "id": "gl-datamin",
    "term": "Data Minimization",
    "category": "AI GOVERNANCE",
    "difficulty": "Beginner",
    "definition": "Collecting and using only the data needed for a stated purpose.",
    "example": "Masking customer IDs before sending text to a model.",
    "whereUsed": "Privacy programs",
    "related": [
      "Privacy",
      "PII"
    ]
  },
  {
    "id": "gl-ailiteracy",
    "term": "AI Literacy",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "Ability to understand, use, question, and responsibly evaluate AI tools and outputs.",
    "example": "Knowing when to verify an AI summary against the source PDF.",
    "whereUsed": "Workforce upskilling",
    "related": [
      "Prompt Engineering",
      "Responsible AI"
    ]
  },
  {
    "id": "gl-usecase",
    "term": "AI Use Case",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "A specific business problem where AI can create measurable value.",
    "example": "Auto-drafting first-pass meeting notes with human edits.",
    "whereUsed": "Roadmapping and prioritization",
    "related": [
      "ROI",
      "Pilot"
    ]
  },
  {
    "id": "gl-pilot",
    "term": "Pilot",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "A time-boxed experiment to test an AI use case before broad rollout.",
    "example": "30-day trial of agent-assist replies in one support queue.",
    "whereUsed": "Transformation programs",
    "related": [
      "AI Use Case",
      "KPI"
    ]
  },
  {
    "id": "gl-kpi",
    "term": "KPI",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "Key Performance Indicator used to measure whether an AI initiative works.",
    "example": "Average handle time and CSAT after copilot launch.",
    "whereUsed": "Value tracking",
    "related": [
      "ROI",
      "Pilot"
    ]
  },
  {
    "id": "gl-roi",
    "term": "ROI",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Intermediate",
    "definition": "Return on investment-value gained relative to cost of an AI initiative.",
    "example": "Hours saved minus license and review costs.",
    "whereUsed": "Business cases",
    "related": [
      "KPI",
      "Total Cost of Ownership"
    ]
  },
  {
    "id": "gl-tco",
    "term": "Total Cost of Ownership",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Intermediate",
    "definition": "Full cost of AI including licenses, usage, integration, monitoring, and change management.",
    "example": "Token spend plus engineering and training time.",
    "whereUsed": "Procurement and architecture",
    "related": [
      "ROI",
      "Cost Optimization"
    ]
  },
  {
    "id": "gl-change",
    "term": "Change Management",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "Helping people adopt new AI-enabled ways of working.",
    "example": "Workshops, champions network, and updated SOPs.",
    "whereUsed": "Enterprise rollout",
    "related": [
      "AI Literacy",
      "Enablement"
    ]
  },
  {
    "id": "gl-enablement",
    "term": "Enablement",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "Training, playbooks, and support that make employees effective with AI tools.",
    "example": "Internal prompt library and office hours.",
    "whereUsed": "L&D and AI academies",
    "related": [
      "AI Literacy",
      "Change Management"
    ]
  },
  {
    "id": "gl-promptlib",
    "term": "Prompt Library",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "Curated, reusable prompts for common workplace tasks.",
    "example": "Approved templates for status reports and RCA drafts.",
    "whereUsed": "Team productivity",
    "related": [
      "Prompt Engineering",
      "Enablement"
    ]
  },
  {
    "id": "gl-vendor",
    "term": "Vendor Evaluation",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Intermediate",
    "definition": "Structured assessment of AI vendors for security, quality, cost, and fit.",
    "example": "Comparing data retention, SOC reports, and eval results.",
    "whereUsed": "Procurement",
    "related": [
      "Total Cost of Ownership",
      "Governance"
    ]
  },
  {
    "id": "gl-buildbuy",
    "term": "Build vs Buy",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Intermediate",
    "definition": "Decision whether to build custom AI solutions or purchase products/platforms.",
    "example": "Buying Copilot vs building an internal RAG app.",
    "whereUsed": "Architecture strategy",
    "related": [
      "Vendor Evaluation",
      "AI Solutions Architect"
    ]
  },
  {
    "id": "gl-aipm",
    "term": "AI Product Management",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Intermediate",
    "definition": "Product discipline for discovering, shipping, and iterating AI features with evals and risk controls.",
    "example": "Prioritizing grounding quality before new flashy skills.",
    "whereUsed": "AI product teams",
    "related": [
      "Evaluation",
      "AI Use Case"
    ]
  },
  {
    "id": "gl-upskill",
    "term": "Upskilling",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "Learning new AI-related skills to stay effective in changing roles.",
    "example": "A financial analyst learning prompt patterns for variance narratives.",
    "whereUsed": "Career development",
    "related": [
      "AI Literacy",
      "Career Pathing"
    ]
  },
  {
    "id": "gl-career",
    "term": "Career Pathing (AI era)",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "Planning role progression that incorporates AI-augmented skills and emerging AI jobs.",
    "example": "Moving from BA to AI Business Analyst.",
    "whereUsed": "HR and individual development plans",
    "related": [
      "Upskilling",
      "AI Literacy"
    ]
  },
  {
    "id": "gl-brand",
    "term": "Brand Voice",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Beginner",
    "definition": "Consistent personality and language rules a brand maintains-even when AI drafts content.",
    "example": "A style guide fed into marketing prompts.",
    "whereUsed": "Content operations",
    "related": [
      "AI Content Generation",
      "Prompt Library"
    ]
  },
  {
    "id": "gl-shadow",
    "term": "Shadow AI",
    "category": "AI BUSINESS AND CAREER",
    "difficulty": "Intermediate",
    "definition": "Employees using unsanctioned AI tools with company data, creating risk.",
    "example": "Pasting client data into a personal free chatbot.",
    "whereUsed": "Security and compliance programs",
    "related": [
      "Privacy",
      "Governance"
    ]
  }
];
