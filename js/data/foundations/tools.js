/* AI Literacy Hub - Tools directory (classic script, no modules) */
const AF_TOOLS = [
  {
    id: "tool-chatgpt",
    name: "ChatGPT",
    category: "A. Conversational AI & Assistants",
    summary: "OpenAI conversational assistant for drafting, analysis, coding help, and multimodal tasks.",
    features: [
      "Chat",
      "Custom GPTs",
      "File analysis",
      "Voice (where available)"
    ],
    useCases: [
      "Writing",
      "Brainstorming",
      "Coding assistance",
      "Learning"
    ],
    audience: "General professionals and developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://chatgpt.com",
    docs: "https://help.openai.com",
    difficulty: "Beginner",
    alternatives: [
      "Claude",
      "Gemini",
      "Microsoft Copilot"
    ]
  },
  {
    id: "tool-claude",
    name: "Claude",
    category: "A. Conversational AI & Assistants",
    summary: "Anthropic assistant strong at long documents, careful analysis, and writing.",
    features: [
      "Projects",
      "Artifacts",
      "Long context",
      "File uploads"
    ],
    useCases: [
      "Document analysis",
      "Writing",
      "Coding",
      "Research synthesis"
    ],
    audience: "Professionals, analysts, developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://claude.ai",
    docs: "https://docs.anthropic.com",
    difficulty: "Beginner",
    alternatives: [
      "ChatGPT",
      "Gemini",
      "Perplexity"
    ]
  },
  {
    id: "tool-gemini",
    name: "Google Gemini",
    category: "A. Conversational AI & Assistants",
    summary: "Google conversational AI integrated with Search and Workspace ecosystems.",
    features: [
      "Multimodal input",
      "Workspace integrations",
      "Long context models"
    ],
    useCases: [
      "Research",
      "Workspace drafting",
      "Learning"
    ],
    audience: "Google users and Workspace customers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://gemini.google.com",
    docs: "https://ai.google.dev/docs",
    difficulty: "Beginner",
    alternatives: [
      "ChatGPT",
      "Claude",
      "Microsoft Copilot"
    ]
  },
  {
    id: "tool-copilot-ms",
    name: "Microsoft Copilot",
    category: "A. Conversational AI & Assistants",
    summary: "Microsoft assistant spanning Bing/Edge and Microsoft 365 experiences depending on product SKU.",
    features: [
      "Web grounding",
      "M365 app integration",
      "Enterprise controls"
    ],
    useCases: [
      "Email drafts",
      "Meeting summaries",
      "Workbook help"
    ],
    audience: "Microsoft 365 and Windows users",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://copilot.microsoft.com",
    docs: "https://learn.microsoft.com/copilot",
    difficulty: "Beginner",
    alternatives: [
      "ChatGPT",
      "Gemini",
      "Notion AI"
    ]
  },
  {
    id: "tool-perplexity",
    name: "Perplexity",
    category: "A. Conversational AI & Assistants",
    summary: "Answer engine emphasizing cited web sources for research-style questions.",
    features: [
      "Citations",
      "Collections",
      "Multi-model options (tiers vary)"
    ],
    useCases: [
      "Market research",
      "Fact finding",
      "Source discovery"
    ],
    audience: "Researchers and knowledge workers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.perplexity.ai",
    docs: "https://www.perplexity.ai/hub",
    difficulty: "Beginner",
    alternatives: [
      "ChatGPT",
      "Gemini",
      "Claude"
    ]
  },
  {
    id: "tool-poe",
    name: "Poe",
    category: "A. Conversational AI & Assistants",
    summary: "Multi-bot platform to chat with many models from one interface.",
    features: [
      "Multiple models",
      "Bot creation",
      "Subscriptions vary"
    ],
    useCases: [
      "Model comparison",
      "Casual exploration"
    ],
    audience: "Curious users comparing models",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://poe.com",
    docs: "https://poe.com",
    difficulty: "Beginner",
    alternatives: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: "tool-character",
    name: "Character.AI",
    category: "A. Conversational AI & Assistants",
    summary: "Character-based chat experiences for entertainment and roleplay-style conversations.",
    features: [
      "Character chats",
      "Voice features (where available)"
    ],
    useCases: [
      "Creative play",
      "Language practice (informal)"
    ],
    audience: "Consumers and creators",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://character.ai",
    docs: "https://character.ai",
    difficulty: "Beginner",
    alternatives: [
      "ChatGPT",
      "Poe"
    ]
  },
  {
    id: "tool-midjourney",
    name: "Midjourney",
    category: "B. Image Generation",
    summary: "High-quality text-to-image generation popular with designers and creatives (Discord/web workflows).",
    features: [
      "Text-to-image",
      "Style controls",
      "Upscaling/variations"
    ],
    useCases: [
      "Concept art",
      "Marketing visuals",
      "Moodboards"
    ],
    audience: "Designers and marketers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.midjourney.com",
    docs: "https://docs.midjourney.com",
    difficulty: "Intermediate",
    alternatives: [
      "Adobe Firefly",
      "DALL|E",
      "Ideogram"
    ]
  },
  {
    id: "tool-dalle",
    name: "DALL|E (OpenAI Images)",
    category: "B. Image Generation",
    summary: "OpenAI image generation integrated with ChatGPT and API.",
    features: [
      "Text-to-image",
      "Image editing features (product-dependent)"
    ],
    useCases: [
      "Blog images",
      "Concept drafts",
      "Product mock ideas"
    ],
    audience: "General users and developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://openai.com",
    docs: "https://platform.openai.com/docs",
    difficulty: "Beginner",
    alternatives: [
      "Midjourney",
      "Firefly",
      "Stable Diffusion"
    ]
  },
  {
    id: "tool-firefly",
    name: "Adobe Firefly",
    category: "B. Image Generation",
    summary: "Adobe generative creative tools integrated with Creative Cloud workflows.",
    features: [
      "Text-to-image",
      "Generative fill",
      "Creative Cloud integration"
    ],
    useCases: [
      "Brand creative",
      "Photoshop workflows",
      "Marketing assets"
    ],
    audience: "Creative professionals",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.adobe.com/products/firefly.html",
    docs: "https://helpx.adobe.com/firefly.html",
    difficulty: "Beginner",
    alternatives: [
      "Midjourney",
      "DALL|E",
      "Canva Magic Studio"
    ]
  },
  {
    id: "tool-sd",
    name: "Stable Diffusion / Stability AI",
    category: "B. Image Generation",
    summary: "Open ecosystem of image models often self-hosted or offered via Stability and third-party UIs.",
    features: [
      "Open weights ecosystem",
      "Fine-tuning culture",
      "Many UIs"
    ],
    useCases: [
      "Custom pipelines",
      "Private generation",
      "Research"
    ],
    audience: "Technical creatives and developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://stability.ai",
    docs: "https://stability.ai/documentation",
    difficulty: "Advanced",
    alternatives: [
      "Midjourney",
      "Firefly",
      "Leonardo"
    ]
  },
  {
    id: "tool-ideogram",
    name: "Ideogram",
    category: "B. Image Generation",
    summary: "Image generator noted for stronger text rendering inside images.",
    features: [
      "Text in images",
      "Design-oriented prompts"
    ],
    useCases: [
      "Posters",
      "Logo concepts",
      "Social graphics"
    ],
    audience: "Marketers and designers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://ideogram.ai",
    docs: "https://ideogram.ai",
    difficulty: "Beginner",
    alternatives: [
      "Midjourney",
      "Firefly",
      "DALL|E"
    ]
  },
  {
    id: "tool-leonardo",
    name: "Leonardo.AI",
    category: "B. Image Generation",
    summary: "Creative image platform with community models and production-oriented tools.",
    features: [
      "Model gallery",
      "Image guidance tools"
    ],
    useCases: [
      "Game art",
      "Marketing creatives"
    ],
    audience: "Game and content teams",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://leonardo.ai",
    docs: "https://leonardo.ai",
    difficulty: "Intermediate",
    alternatives: [
      "Midjourney",
      "Stable Diffusion",
      "Firefly"
    ]
  },
  {
    id: "tool-canva-magic",
    name: "Canva Magic Studio",
    category: "B. Image Generation",
    summary: "AI features inside Canva for generating and editing designs quickly.",
    features: [
      "Magic Write/Design features",
      "Templates + AI"
    ],
    useCases: [
      "Social posts",
      "Simple decks",
      "Quick creatives"
    ],
    audience: "Non-designers and SMBs",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.canva.com/magic/",
    docs: "https://www.canva.com/help/",
    difficulty: "Beginner",
    alternatives: [
      "Firefly",
      "Ideogram",
      "Microsoft Designer"
    ]
  },
  {
    id: "tool-runway",
    name: "Runway",
    category: "C. Video Generation",
    summary: "Creative AI suite for video generation and editing used by filmmakers and marketers.",
    features: [
      "Text/image-to-video",
      "Editing tools",
      "Generative effects"
    ],
    useCases: [
      "Short ads",
      "Concept videos",
      "Postproduction assists"
    ],
    audience: "Creatives and agencies",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://runwayml.com",
    docs: "https://docs.runwayml.com",
    difficulty: "Intermediate",
    alternatives: [
      "Pika",
      "Luma Dream Machine",
      "Adobe video AI"
    ]
  },
  {
    id: "tool-pika",
    name: "Pika",
    category: "C. Video Generation",
    summary: "Consumer/creator-friendly AI video generation tool.",
    features: [
      "Text-to-video",
      "Image-to-video"
    ],
    useCases: [
      "Social clips",
      "Creative experiments"
    ],
    audience: "Creators and marketers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://pika.art",
    docs: "https://pika.art",
    difficulty: "Beginner",
    alternatives: [
      "Runway",
      "Luma",
      "Sora-class tools"
    ]
  },
  {
    id: "tool-luma",
    name: "Luma Dream Machine",
    category: "C. Video Generation",
    summary: "AI video generation from Luma AI popular for cinematic clips.",
    features: [
      "Text/image-to-video"
    ],
    useCases: [
      "Concept reels",
      "Product mood films"
    ],
    audience: "Creators",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://lumalabs.ai/dream-machine",
    docs: "https://lumalabs.ai",
    difficulty: "Beginner",
    alternatives: [
      "Runway",
      "Pika"
    ]
  },
  {
    id: "tool-sora",
    name: "OpenAI Sora (and related video previews)",
    category: "C. Video Generation",
    summary: "OpenAI video generation technology; access and branding evolve-verify current product availability.",
    features: [
      "Text-to-video (availability varies)"
    ],
    useCases: [
      "Storyboards",
      "Creative prototyping"
    ],
    audience: "Creators and enterprises (when available)",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://openai.com",
    docs: "https://openai.com/index/",
    difficulty: "Intermediate",
    alternatives: [
      "Runway",
      "Pika",
      "Google Veo"
    ]
  },
  {
    id: "tool-veo",
    name: "Google Veo",
    category: "C. Video Generation",
    summary: "Google video generation models surfaced via Google AI / Vertex offerings depending on access.",
    features: [
      "Text-to-video",
      "Cloud availability varies"
    ],
    useCases: [
      "Marketing prototypes",
      "Creative R&D"
    ],
    audience: "Google Cloud and Gemini ecosystem users",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://deepmind.google/technologies/veo/",
    docs: "https://cloud.google.com/vertex-ai/docs",
    difficulty: "Intermediate",
    alternatives: [
      "Runway",
      "Sora",
      "Pika"
    ]
  },
  {
    id: "tool-heygen",
    name: "HeyGen",
    category: "C. Video Generation",
    summary: "AI avatar and video platform for talking-head style content.",
    features: [
      "Avatars",
      "Script-to-video",
      "Translation features"
    ],
    useCases: [
      "Training videos",
      "Sales explainers"
    ],
    audience: "L&D and marketing teams",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.heygen.com",
    docs: "https://www.heygen.com",
    difficulty: "Beginner",
    alternatives: [
      "Synthesia",
      "Runway"
    ]
  },
  {
    id: "tool-synthesia",
    name: "Synthesia",
    category: "C. Video Generation",
    summary: "AI avatar video platform widely used for enterprise training content.",
    features: [
      "Avatar presenters",
      "Multilingual videos"
    ],
    useCases: [
      "Compliance training",
      "Product education"
    ],
    audience: "Enterprise L&D",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.synthesia.io",
    docs: "https://www.synthesia.io",
    difficulty: "Beginner",
    alternatives: [
      "HeyGen",
      "Descript"
    ]
  },
  {
    id: "tool-elevenlabs",
    name: "ElevenLabs",
    category: "D. Audio & Speech",
    summary: "High-quality AI voice synthesis and voice tools for creators and products.",
    features: [
      "TTS",
      "Voice cloning features (policy-bound)",
      "Dubbing tools"
    ],
    useCases: [
      "Podcasts",
      "Product voiceovers",
      "Accessibility"
    ],
    audience: "Creators and developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://elevenlabs.io",
    docs: "https://elevenlabs.io/docs",
    difficulty: "Beginner",
    alternatives: [
      "OpenAI TTS",
      "PlayHT",
      "Descript"
    ]
  },
  {
    id: "tool-whisper",
    name: "OpenAI Whisper / speech-to-text",
    category: "D. Audio & Speech",
    summary: "Speech recognition model family for transcription (API and open-source variants).",
    features: [
      "Transcription",
      "Multilingual recognition"
    ],
    useCases: [
      "Meeting notes",
      "Subtitle drafts",
      "Call analytics"
    ],
    audience: "Developers and ops teams",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://openai.com/index/whisper/",
    docs: "https://platform.openai.com/docs/guides/speech-to-text",
    difficulty: "Intermediate",
    alternatives: [
      "Otter.ai",
      "Descript",
      "Google Speech-to-Text"
    ]
  },
  {
    id: "tool-otter",
    name: "Otter.ai",
    category: "D. Audio & Speech",
    summary: "Meeting transcription and summary assistant.",
    features: [
      "Live transcription",
      "Meeting summaries",
      "Collaboration"
    ],
    useCases: [
      "Standups",
      "Interviews",
      "Lecture notes"
    ],
    audience: "Professionals and students",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://otter.ai",
    docs: "https://otter.ai",
    difficulty: "Beginner",
    alternatives: [
      "Fireflies",
      "Microsoft Copilot in Teams",
      "Descript"
    ]
  },
  {
    id: "tool-descript",
    name: "Descript",
    category: "D. Audio & Speech",
    summary: "Audio/video editor with transcription-first editing and AI overdub features.",
    features: [
      "Transcript editing",
      "Studio sound",
      "Avatars/overdub features"
    ],
    useCases: [
      "Podcast editing",
      "Course videos"
    ],
    audience: "Podcasters and educators",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.descript.com",
    docs: "https://help.descript.com",
    difficulty: "Intermediate",
    alternatives: [
      "Otter.ai",
      "ElevenLabs",
      "CapCut"
    ]
  },
  {
    id: "tool-suno",
    name: "Suno",
    category: "D. Audio & Speech",
    summary: "AI music generation from text prompts.",
    features: [
      "Song generation",
      "Lyrics + music"
    ],
    useCases: [
      "Creative demos",
      "Social content"
    ],
    audience: "Creators",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://suno.com",
    docs: "https://suno.com",
    difficulty: "Beginner",
    alternatives: [
      "Udio",
      "AIVA"
    ]
  },
  {
    id: "tool-udio",
    name: "Udio",
    category: "D. Audio & Speech",
    summary: "AI music generation platform for songs from prompts.",
    features: [
      "Music generation",
      "Style controls"
    ],
    useCases: [
      "Demos",
      "Creative exploration"
    ],
    audience: "Musicians and creators",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.udio.com",
    docs: "https://www.udio.com",
    difficulty: "Beginner",
    alternatives: [
      "Suno",
      "AIVA"
    ]
  },
  {
    id: "tool-gh-copilot",
    name: "GitHub Copilot",
    category: "E. Coding Assistants",
    summary: "AI pair programmer integrated with IDEs and GitHub workflows.",
    features: [
      "Inline completion",
      "Chat in IDE",
      "PR assistance features"
    ],
    useCases: [
      "Boilerplate",
      "Tests",
      "Refactor suggestions"
    ],
    audience: "Software developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://github.com/features/copilot",
    docs: "https://docs.github.com/copilot",
    difficulty: "Intermediate",
    alternatives: [
      "Cursor",
      "Amazon Q Developer",
      "Claude"
    ]
  },
  {
    id: "tool-cursor",
    name: "Cursor",
    category: "E. Coding Assistants",
    summary: "AI-native code editor with strong codebase-aware chat and edits.",
    features: [
      "Repo-aware chat",
      "Multi-file edits",
      "Agentic coding features"
    ],
    useCases: [
      "Feature implementation",
      "Debugging",
      "Refactors"
    ],
    audience: "Software developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://cursor.com",
    docs: "https://docs.cursor.com",
    difficulty: "Intermediate",
    alternatives: [
      "GitHub Copilot",
      "Windsurf",
      "Claude Code"
    ]
  },
  {
    id: "tool-amazon-q",
    name: "Amazon Q Developer",
    category: "E. Coding Assistants",
    summary: "AWS AI assistant for coding and cloud development tasks (successor lineage to CodeWhisperer).",
    features: [
      "IDE suggestions",
      "AWS guidance",
      "Security scanning features"
    ],
    useCases: [
      "AWS apps",
      "Code completion",
      "Cloud troubleshooting"
    ],
    audience: "AWS developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://aws.amazon.com/q/developer/",
    docs: "https://docs.aws.amazon.com/amazonq/",
    difficulty: "Intermediate",
    alternatives: [
      "GitHub Copilot",
      "Cursor",
      "Gemini Code Assist"
    ]
  },
  {
    id: "tool-replit",
    name: "Replit Agent / Replit AI",
    category: "E. Coding Assistants",
    summary: "Cloud IDE with AI app-building assistance.",
    features: [
      "In-browser IDE",
      "AI app generation features"
    ],
    useCases: [
      "Prototypes",
      "Learning projects",
      "Small apps"
    ],
    audience: "Learners and builders",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://replit.com",
    docs: "https://docs.replit.com",
    difficulty: "Beginner",
    alternatives: [
      "Cursor",
      "GitHub Copilot",
      "v0"
    ]
  },
  {
    id: "tool-tabnine",
    name: "Tabnine",
    category: "E. Coding Assistants",
    summary: "AI code completion with enterprise privacy-oriented deployment options.",
    features: [
      "Code completion",
      "Enterprise controls"
    ],
    useCases: [
      "Private codebases",
      "Team coding standards"
    ],
    audience: "Enterprise engineering teams",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.tabnine.com",
    docs: "https://docs.tabnine.com",
    difficulty: "Intermediate",
    alternatives: [
      "GitHub Copilot",
      "Amazon Q Developer"
    ]
  },
  {
    id: "tool-gemini-code",
    name: "Gemini Code Assist",
    category: "E. Coding Assistants",
    summary: "Google coding assistant integrated with IDEs and Google Cloud workflows.",
    features: [
      "Code completion",
      "Cloud-oriented help"
    ],
    useCases: [
      "GCP development",
      "General coding"
    ],
    audience: "Google Cloud developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://cloud.google.com/gemini/docs/codeassist",
    docs: "https://cloud.google.com/gemini/docs/codeassist/overview",
    difficulty: "Intermediate",
    alternatives: [
      "GitHub Copilot",
      "Cursor",
      "Amazon Q Developer"
    ]
  },
  {
    id: "tool-notion-ai",
    name: "Notion AI",
    category: "F. Productivity & Office",
    summary: "AI writing and summarization inside Notion workspaces.",
    features: [
      "Summaries",
      "Drafting",
      "Q&A over workspace content"
    ],
    useCases: [
      "Wikis",
      "Specs",
      "Meeting notes"
    ],
    audience: "Teams using Notion",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.notion.com/product/ai",
    docs: "https://www.notion.com/help",
    difficulty: "Beginner",
    alternatives: [
      "Microsoft Copilot",
      "ClickUp Brain",
      "ChatGPT"
    ]
  },
  {
    id: "tool-grammarly",
    name: "Grammarly",
    category: "F. Productivity & Office",
    summary: "Writing assistant for grammar, clarity, and tone-with generative features.",
    features: [
      "Grammar checks",
      "Tone suggestions",
      "Generative rewrite"
    ],
    useCases: [
      "Emails",
      "Docs",
      "Student writing"
    ],
    audience: "Writers and professionals",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.grammarly.com",
    docs: "https://support.grammarly.com",
    difficulty: "Beginner",
    alternatives: [
      "Microsoft Editor",
      "ChatGPT",
      "Claude"
    ]
  },
  {
    id: "tool-jasper",
    name: "Jasper",
    category: "F. Productivity & Office",
    summary: "Marketing-oriented generative writing platform.",
    features: [
      "Brand voice features",
      "Campaign templates"
    ],
    useCases: [
      "Ad copy",
      "Blog drafts",
      "Campaign kits"
    ],
    audience: "Marketing teams",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.jasper.ai",
    docs: "https://www.jasper.ai",
    difficulty: "Beginner",
    alternatives: [
      "ChatGPT",
      "Claude",
      "Copy.ai"
    ]
  },
  {
    id: "tool-zapier",
    name: "Zapier AI / Zapier Agents",
    category: "F. Productivity & Office",
    summary: "Automation platform connecting apps, with AI steps and agent-style automations.",
    features: [
      "App connectors",
      "AI actions",
      "Natural language zap building"
    ],
    useCases: [
      "Lead routing",
      "Notifications",
      "Cross-app workflows"
    ],
    audience: "Ops and business teams",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://zapier.com/ai",
    docs: "https://docs.zapier.com",
    difficulty: "Intermediate",
    alternatives: [
      "Make",
      "Power Automate",
      "n8n"
    ]
  },
  {
    id: "tool-make",
    name: "Make",
    category: "F. Productivity & Office",
    summary: "Visual automation platform often used for complex multi-step integrations.",
    features: [
      "Scenario builder",
      "App integrations",
      "AI modules"
    ],
    useCases: [
      "Data sync",
      "Approvals",
      "Enrichment flows"
    ],
    audience: "Ops and power users",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.make.com",
    docs: "https://www.make.com/en/help",
    difficulty: "Intermediate",
    alternatives: [
      "Zapier",
      "Power Automate",
      "n8n"
    ]
  },
  {
    id: "tool-power-automate",
    name: "Microsoft Power Automate",
    category: "F. Productivity & Office",
    summary: "Microsoft automation platform for workflows across M365 and beyond, with AI Builder capabilities.",
    features: [
      "Flows",
      "Approvals",
      "AI Builder"
    ],
    useCases: [
      "Invoice routing",
      "Notifications",
      "Document processing"
    ],
    audience: "Microsoft-centric organizations",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://powerautomate.microsoft.com",
    docs: "https://learn.microsoft.com/power-automate",
    difficulty: "Intermediate",
    alternatives: [
      "Zapier",
      "Make",
      "UiPath"
    ]
  },
  {
    id: "tool-uipath",
    name: "UiPath",
    category: "F. Productivity & Office",
    summary: "Enterprise automation (RPA) platform increasingly combined with AI document understanding.",
    features: [
      "RPA bots",
      "Document understanding",
      "Orchestration"
    ],
    useCases: [
      "Back-office automation",
      "Legacy UI automation"
    ],
    audience: "Enterprise ops/IT",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.uipath.com",
    docs: "https://docs.uipath.com",
    difficulty: "Advanced",
    alternatives: [
      "Power Automate",
      "Automation Anywhere",
      "SS&C Blue Prism"
    ]
  },
  {
    id: "tool-huggingface",
    name: "Hugging Face",
    category: "G. Platforms, Search & Enterprise",
    summary: "Hub for models, datasets, and demos-central to open ML ecosystems.",
    features: [
      "Model hub",
      "Spaces",
      "Inference options"
    ],
    useCases: [
      "Prototyping",
      "Open models",
      "Research sharing"
    ],
    audience: "ML engineers and researchers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://huggingface.co",
    docs: "https://huggingface.co/docs",
    difficulty: "Intermediate",
    alternatives: [
      "Replicate",
      "Vertex AI Model Garden",
      "Bedrock"
    ]
  },
  {
    id: "tool-bedrock",
    name: "Amazon Bedrock",
    category: "G. Platforms, Search & Enterprise",
    summary: "AWS managed service to access foundation models via API with AWS security patterns.",
    features: [
      "Multi-model API",
      "Enterprise IAM/VPC patterns",
      "Agents/KB features"
    ],
    useCases: [
      "Private GenAI apps",
      "RAG on AWS"
    ],
    audience: "AWS enterprise builders",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://aws.amazon.com/bedrock/",
    docs: "https://docs.aws.amazon.com/bedrock/",
    difficulty: "Advanced",
    alternatives: [
      "Azure OpenAI",
      "Vertex AI",
      "Anthropic API"
    ]
  },
  {
    id: "tool-azure-openai",
    name: "Azure OpenAI Service",
    category: "G. Platforms, Search & Enterprise",
    summary: "Microsoft Azure hosting for OpenAI models with enterprise compliance features.",
    features: [
      "Managed OpenAI models",
      "Enterprise security",
      "Regional controls"
    ],
    useCases: [
      "Enterprise chat apps",
      "Copilot-like internal tools"
    ],
    audience: "Azure enterprises",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://azure.microsoft.com/products/ai-services/openai-service",
    docs: "https://learn.microsoft.com/azure/ai-services/openai/",
    difficulty: "Advanced",
    alternatives: [
      "Amazon Bedrock",
      "Vertex AI",
      "OpenAI API"
    ]
  },
  {
    id: "tool-vertex",
    name: "Google Vertex AI",
    category: "G. Platforms, Search & Enterprise",
    summary: "Google Cloud platform for training, hosting, and building GenAI applications including Gemini.",
    features: [
      "Model Garden",
      "Gemini APIs",
      "MLOps tooling"
    ],
    useCases: [
      "Enterprise GenAI",
      "Custom ML"
    ],
    audience: "GCP enterprises",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://cloud.google.com/vertex-ai",
    docs: "https://cloud.google.com/vertex-ai/docs",
    difficulty: "Advanced",
    alternatives: [
      "Amazon Bedrock",
      "Azure AI",
      "Hugging Face"
    ]
  },
  {
    id: "tool-anthropic-api",
    name: "Anthropic API",
    category: "G. Platforms, Search & Enterprise",
    summary: "API access to Claude models for application developers.",
    features: [
      "Messages API",
      "Tool use",
      "Long context models"
    ],
    useCases: [
      "Customer agents",
      "Document products",
      "Devtools"
    ],
    audience: "Software teams",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.anthropic.com/api",
    docs: "https://docs.anthropic.com",
    difficulty: "Advanced",
    alternatives: [
      "OpenAI API",
      "Gemini API",
      "Bedrock"
    ]
  },
  {
    id: "tool-openai-api",
    name: "OpenAI API",
    category: "G. Platforms, Search & Enterprise",
    summary: "API platform for GPT models, embeddings, speech, and related capabilities.",
    features: [
      "Chat Completions / Responses",
      "Assistants/tools ecosystems",
      "Embeddings"
    ],
    useCases: [
      "Product features",
      "Agents",
      "Analytics NLP"
    ],
    audience: "Software teams",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://platform.openai.com",
    docs: "https://platform.openai.com/docs",
    difficulty: "Advanced",
    alternatives: [
      "Anthropic API",
      "Gemini API",
      "Azure OpenAI"
    ]
  },
  {
    id: "tool-pinecone",
    name: "Pinecone",
    category: "G. Platforms, Search & Enterprise",
    summary: "Managed vector database commonly used for RAG retrieval.",
    features: [
      "Vector search",
      "Namespaces",
      "Metadata filters"
    ],
    useCases: [
      "Enterprise RAG",
      "Semantic search"
    ],
    audience: "AI engineers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.pinecone.io",
    docs: "https://docs.pinecone.io",
    difficulty: "Advanced",
    alternatives: [
      "Weaviate",
      "Chroma",
      "pgvector"
    ]
  },
  {
    id: "tool-langchain",
    name: "LangChain",
    category: "G. Platforms, Search & Enterprise",
    summary: "Popular framework for composing LLM apps, tools, and retrieval chains.",
    features: [
      "Chains/agents abstractions",
      "Integrations",
      "Eval helpers"
    ],
    useCases: [
      "Prototyping LLM apps",
      "Tool calling workflows"
    ],
    audience: "Developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.langchain.com",
    docs: "https://js.langchain.com/docs",
    difficulty: "Advanced",
    alternatives: [
      "LlamaIndex",
      "Semantic Kernel",
      "Haystack"
    ]
  },
  {
    id: "tool-llamaindex",
    name: "LlamaIndex",
    category: "G. Platforms, Search & Enterprise",
    summary: "Framework focused on data connectors and RAG pipelines for LLM apps.",
    features: [
      "Data loaders",
      "Indexes",
      "Query engines"
    ],
    useCases: [
      "Document Q&A",
      "Knowledge assistants"
    ],
    audience: "Developers",
    pricingNote: "Verify on official site - pricing changes",
    website: "https://www.llamaindex.ai",
    docs: "https://docs.llamaindex.ai",
    difficulty: "Advanced",
    alternatives: [
      "LangChain",
      "Haystack",
      "Vertex AI Search"
    ]
  }
];
