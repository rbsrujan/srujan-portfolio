export const PERSONAL_INFO = {
  name: "Srujan R B",
  brandName: "SRUJAN RB",
  title: "Computer Science Student | Software Developer | AI & Full-Stack Developer",
  institution: "Indian Institute of Information Technology Design and Manufacturing, Kancheepuram (IIITDM)",
  institutionShort: "IIITDM Kancheepuram",
  degree: "B.Tech Computer Science Engineering",
  educationPeriod: "August 2023 – June 2027",
  location: "India",
  heroHeadline: "Building software with intent, craft, and practical utility.",
  heroIntroduction: "I'm Srujan, a Computer Science undergraduate at IIITDM Kancheepuram. I enjoy building intelligent software systems, full-stack applications, and practical engineering solutions. My interests span AI, backend development, machine learning, and scalable application design.",
  aboutParagraphs: [
    "I am currently an undergraduate Computer Science Engineering student at IIITDM Kancheepuram, an Institute of National Importance established by the Ministry of Education, Government of India.",
    "My engineering interests center around artificial intelligence, backend development, applied machine learning, and scalable software systems. Rather than viewing frameworks or AI models as isolated components, I focus on constructing complete, reliable systems with clear boundaries, resilient pipelines, and tangible user value.",
    "From industrial service tracking during my internship at Hindustan Aeronautics Limited (HAL) to autonomous multi-agent e-commerce intelligence and on-device translation systems, I strive to design software with precision, clean abstractions, and disciplined execution."
  ],
  links: {
    github: "https://github.com/rbsrujan",
    linkedin: "https://www.linkedin.com/in/srujan-r-b-b59041352/",
    email: "mailto:srujanrbsrujan@gmail.com",
    emailRaw: "srujanrbsrujan@gmail.com",
    phone: "tel:+918660833215",
    phoneRaw: "+91 8660833215",
    resume: "/assets/resume/Srujan_RB_Resume.pdf"
  }
};

/**
 * FEATURED PROJECTS (1 TO 4) — LARGE EDITORIAL SHOWCASES
 */
export const MAJOR_PROJECTS = [
  {
    id: "nexstore-ai",
    number: "01",
    title: "Autonomous Multi-Agent E-Commerce Intelligence Platform",
    subtitle: "NexStore AI &bull; Dynamic Pricing & Demand Forecasting Architecture",
    stack: [
      "Python",
      "FastAPI",
      "React.js",
      "LangChain",
      "Ollama (Gemma/LLaMA-3)",
      "Prophet",
      "LSTM",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    overview:
      "A flagship multi-agent autonomous e-commerce optimization ecosystem designed to replace static retail pricing, manual purchase ordering, and high customer support latency with autonomous cooperative AI agents.",
    problem:
      "Traditional online retailers suffer from static pricing models that fail to capture real-time market shifts, frequent stockouts or costly overstocking, and customer discovery friction resulting in low catalog search conversions.",
    implementation: [
      "Architected a four-agent autonomous system consisting of Dynamic Pricing, Demand Forecasting, Multi-Intent Chatbot, and Recommendations.",
      "Developed a real-time Dynamic Pricing Engine using price-elasticity coefficients, competitor price parity scrapers for Amazon/Flipkart, and surge-demand multipliers with strict margin floor guardrails (Cost + 5%).",
      "Engineered an ensemble Demand Forecasting Model using Facebook Prophet and LSTM neural networks, achieving 92.4% validation accuracy across 30-day forecast horizons.",
      "Implemented automated purchase-order restock triggers when predicted inventory falls below safety buffers.",
      "Developed a hybrid semantic vector search engine using TF-IDF, cosine similarity, and budget constraint extraction (e.g., 'under 50k'), reporting a 9X catalog search conversion improvement.",
      "Built a high-performance FastAPI backend with reported p95 latency below 180ms, multi-provider LLM routing, and automated CSV audit report generation."
    ],
    projectedOutcomes: [
      { metric: "25–35%", label: "Projected Gross Revenue Lift (Projected Outcome)" },
      { metric: "18%", label: "Projected Holding Cost Reduction (Projected Outcome)" },
      { metric: "< 180ms", label: "Backend p95 Latency SLA" },
      { metric: "92.4%", label: "30-Day Validation Forecast Accuracy" }
    ],
    architectureDetails:
      "Four decoupled microservices orchestrated via an async event loop: (1) Pricing Agent polling competitor APIs, calculating elasticity matrices, and enforcing margin floors; (2) Forecasting Agent running dual Prophet + LSTM jobs to schedule supplier POs; (3) Search Agent indexing catalog embeddings in Redis vector stores; and (4) Chatbot router dynamically selecting between local Ollama instances and Groq Cloud with deterministic fallback.",
    image: "/projects/nexstore.svg",
    github: "https://github.com/rbsrujan/nexstore-ai",
    demo: null,
    isFlagship: true
  },
  {
    id: "enterprise-rag",
    number: "02",
    title: "Enterprise Conversational RAG Engine",
    subtitle: "Multi-Document Contextual Question Answering",
    stack: [
      "Python",
      "LangChain",
      "ChromaDB",
      "FAISS",
      "Groq API",
      "Llama 3",
      "Gemma 2",
      "Hugging Face Embeddings",
      "OpenAI Embeddings",
      "Streamlit"
    ],
    overview:
      "An end-to-end document intelligence platform enabling contextual multi-turn Q&A across complex technical research papers and enterprise corporate documents with verified source citations.",
    problem:
      "Standard LLM document search frequently suffers from context window overflow, conversation history drift, and unverifiable hallucinated claims across multi-page PDF collections.",
    implementation: [
      "Developed a multi-document PDF ingestion and contextual question-answering system supporting both batch directory indexing and dynamic user uploads.",
      "Implemented semantic retrieval using dual vector indexing backends with ChromaDB and FAISS.",
      "Utilized Hugging Face sentence embeddings for high-dimensional semantic search and chunk similarity matching.",
      "Built a history-aware conversational retrieval pipeline using LangChain, generating standalone search queries from multi-turn dialogues.",
      "Implemented robust session memory maintaining conversational state across sustained user sessions.",
      "Created a responsive Streamlit interface supporting document uploads, source attribution, page-level citations, and real-time response latency monitoring."
    ],
    projectedOutcomes: [
      { metric: "Zero Drift", label: "History-Aware Context Query Rewriting" },
      { metric: "Page-Level", label: "Verifiable Source Chunk Attributions" },
      { metric: "Sub-Second", label: "Groq LPU LLM Inference Latency" }
    ],
    architectureDetails:
      "PyPDFDirectoryLoader parses input documents $\\rightarrow$ RecursiveCharacterTextSplitter shards texts with dynamic overlaps $\\rightarrow$ Vector store queries return top-k matches with similarity thresholds $\\rightarrow$ LangChain stuff document chain injects context into Llama-3/Gemma-2 system prompt $\\rightarrow$ Streamlit renders streamed markdown with expander citations.",
    image: "/projects/enterprise_rag.svg",
    github: "https://github.com/rbsrujan/enterprise-conversational-rag",
    demo: null,
    isFlagship: false
  },
  {
    id: "text2sql-agent",
    number: "03",
    title: "Autonomous Text-to-SQL AI Agent",
    subtitle: "Natural Language Database Interface",
    stack: [
      "Python",
      "LangChain",
      "Groq API (Llama-3-8B)",
      "SQLAlchemy",
      "SQLite",
      "MySQL Connector",
      "Streamlit"
    ],
    overview:
      "An autonomous database query agent utilizing the ReAct (Reason + Act) loop to allow business stakeholders and researchers to query relational tables using natural English questions.",
    problem:
      "Extracting critical business insights from relational databases requires technical SQL querying skills, creating communication bottlenecks between operational teams and data engineers.",
    implementation: [
      "Developed an autonomous Text-to-SQL agent using LangChain's ReAct (Reason + Act) framework to execute iterative query reasoning.",
      "Translated complex natural-language questions into syntactically valid and executable SQL statements.",
      "Integrated SQLDatabaseToolkit for dynamic schema inspection, column constraint verification, and table relationship mapping.",
      "Supported multi-table join generation and intelligent error recovery with self-healing query re-execution on syntax traps.",
      "Designed a cross-database architecture supporting local SQLite file engines and remote enterprise MySQL databases.",
      "Implemented strict read-only execution guardrails preventing destructive DDL/DML mutations.",
      "Built an intuitive Streamlit interface featuring live agent reasoning visualization, raw SQL query tracing, and table-based database analytics."
    ],
    projectedOutcomes: [
      { metric: "ReAct Loop", label: "Autonomous Thought-Action-Observation Pattern" },
      { metric: "Multi-DB", label: "Unified SQLite & MySQL Connectivity" },
      { metric: "Read-Only", label: "Enforced Query Execution Safety Guardrails" }
    ],
    architectureDetails:
      "User Query $\\rightarrow$ ChatGroq LLM initiates ReAct loop $\\rightarrow$ Action: list_tables_sql_db $\\rightarrow$ Action: schema_sql_db $\\rightarrow$ Action: construct_and_run_sql_query with syntax verification $\\rightarrow$ Observation ingested $\\rightarrow$ Final answer synthesized and output with live StreamlitCallbackHandler thought logs.",
    image: "/projects/text2sql.svg",
    github: "https://github.com/rbsrujan/autonomous-text2sql-agent",
    demo: null,
    isFlagship: false
  },
  {
    id: "speech-translation",
    number: "04",
    title: "Offline Hindi–Tamil Speech Translation for Edge Devices",
    subtitle: "On-Device Speech-to-Speech Translation Pipeline",
    stack: [
      "Python",
      "Faster-Whisper",
      "IndicTrans2",
      "Piper TTS",
      "CTranslate2",
      "ONNX Runtime"
    ],
    overview:
      "A complete offline, privacy-preserving speech-to-speech translation pipeline capable of translating spoken Hindi into spoken Tamil without cloud API dependencies or active internet connectivity.",
    problem:
      "Language barriers between regional Indian languages in remote or field deployment zones where cloud speech APIs cannot be utilized due to high bandwidth latency, zero connectivity, or strict data privacy constraints.",
    implementation: [
      "Built an offline speech-to-speech translation pipeline between spoken Hindi and spoken Tamil tailored for edge devices.",
      "Integrated Faster-Whisper for high-speed, local Automatic Speech Recognition (ASR) directly capturing microphone audio.",
      "Employed AI4Bharat's IndicTrans2 (1B parameter model) for neural machine translation with IndicNLP transliteration.",
      "Integrated Piper TTS with the ta_IN-Valluvar-medium.onnx voice model for natural-sounding synthesized Tamil voice generation.",
      "Explored optimized inference using CTranslate2 and ONNX Runtime to maintain manageable CPU and memory footprints on constrained hardware.",
      "Documented empirical translation benchmark metrics validating linguistic fidelity on regional sentence pairs."
    ],
    projectedOutcomes: [
      { metric: "47.87", label: "BLEU Score (Regional Translation Quality)" },
      { metric: "75.24", label: "chrF++ Character N-Gram F-Score" },
      { metric: "0.9575", label: "COMET Neural Translation Metric" },
      { metric: "100% Offline", label: "Zero Cloud Bandwidth or External API Dependencies" }
    ],
    architectureDetails:
      "Live Microphone Input $\\rightarrow$ Faster-Whisper ASR (Hindi Audio to Text) $\\rightarrow$ IndicNLP Normalizer $\\rightarrow$ IndicTrans2 1B (CTranslate2 / ONNX Inference) $\\rightarrow$ Piper TTS (ONNX Runtime generating Tamil waveform) $\\rightarrow$ SoundDevice speaker playback.",
    image: "/projects/speech_translation.svg",
    github: "https://github.com/rbsrujan/Offline-Hindi-Tamil-Speech-Translation-System-for-Edge-Devices",
    demo: null,
    isFlagship: false
  }
];

/**
 * ADDITIONAL PROJECTS (EXACTLY THREE AS REQUESTED — GREENKO REMOVED)
 */
export const ADDITIONAL_PROJECTS = [
  {
    id: "fraud-detection",
    number: "05",
    title: "Real-Time Fraud Detection System",
    tagline: "High-Concurrency ML Pipeline with Point-in-Time Safety",
    desc: "Production-grade credit card fraud detection system designed for severe class imbalance (0.1% fraud rate). Engineered a 42-feature point-in-time temporal registry, financial utility loss function, and dual LightGBM + PyTorch models achieving a 0.9448 test PR-AUC with 8.09ms in-process latency (p50). Packaged with a 20/20 automated Pytest test suite.",
    tags: ["Python 3.11", "PyTorch", "LightGBM", "FastAPI", "Docker", "Scikit-Learn", "Pandas", "Pytest"],
    image: "/projects/fraud_detection.svg",
    github: "https://github.com/rbsrujan/Real-Time-Fraud-Detection-System",
    demo: null
  },
  {
    id: "campus-pay",
    number: "06",
    title: "Campus Pay",
    tagline: "Full-Stack University Payment & Digital Financial Logistics",
    desc: "Comprehensive full-stack digital payment and financial logistics ecosystem for educational institutions. Implemented dynamic QR code transaction flows, role-based dashboards (Student, Faculty, Admin), multi-auth with Google OAuth and FIDO2 biometric authentication support, real-time expenditure charts, and secure JWT session management.",
    tags: ["React 19", "Vite", "Node.js", "Express.js", "MongoDB", "FIDO2", "JWT", "Recharts"],
    image: "/projects/campus_pay.svg",
    github: "https://github.com/rbsrujan/campus-pay",
    demo: "https://campus-pay-omega.vercel.app"
  },
  {
    id: "motoconnect",
    number: "07",
    title: "MotoConnect",
    tagline: "Connected Vehicle Telemetry & Fleet Diagnostic Platform",
    desc: "IoT-enabled vehicle telematics and remote monitoring system exploring CAN-bus sensor telemetry ingestion, real-time trip diagnostics, speed/efficiency tracking, and Diagnostic Trouble Code (DTC) logging with an accessible web dashboard and socket-based data streams.",
    tags: ["Python", "Flask", "SQLite", "Socket Programming", "IoT Telemetry", "JavaScript", "Leaflet.js"],
    image: "/projects/motoconnect.svg",
    github: "https://github.com/rbsrujan",
    demo: null
  }
];

/**
 * WORK EXPERIENCE — HAL
 */
export const EXPERIENCE = [
  {
    role: "Intern",
    organization: "Hindustan Aeronautics Limited (HAL)",
    division: "Engine Division, Bangalore",
    period: "Internship",
    project: "Complaint Log Management System",
    description:
      "Developed an offline complaint tracking system to streamline issue reporting and resolution workflows in an industrial manufacturing environment.",
    responsibilities: [
      "Developed an offline complaint tracking system to streamline issue reporting and resolution workflows in an industrial aero engine manufacturing environment.",
      "Implemented modules for logging, updating and retrieving complaints with structured and indexed data storage.",
      "Designed an intuitive GUI using Tkinter for non-technical shop-floor operators and maintenance supervisors.",
      "Ensured reliable local data management using SQLite relational storage and input validation checks.",
      "Gained firsthand exposure to aero engine manufacturing, precision machining, process planning, and component testing workflows."
    ],
    technologies: ["Python", "Tkinter", "SQLite", "Pandas"]
  }
];

/**
 * EDUCATION
 */
export const EDUCATION = [
  {
    institution: "IIITDM Kancheepuram",
    fullName: "Indian Institute of Information Technology Design and Manufacturing, Kancheepuram",
    degree: "B.Tech Computer Science Engineering",
    duration: "August 2023 – June 2027",
    location: "Chennai, India",
    description:
      "Institute of National Importance under the Ministry of Education, Government of India. Academic focus includes Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Machine Learning."
  }
];

/**
 * TECHNICAL SKILLS CATEGORIZED EXACTLY AS IN RESUME
 */
export const SKILLS_CATEGORIES = [
  {
    category: "Programming Languages",
    skills: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "AI / Machine Learning",
    skills: [
      "PyTorch",
      "Hugging Face Transformers",
      "Faster-Whisper",
      "IndicTrans2",
      "LangChain",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "NLP",
      "Neural Machine Translation",
      "ASR",
      "TTS",
      "Scikit-Learn",
      "Feature Engineering",
      "BLEU",
      "COMET",
      "chrF++"
    ]
  },
  {
    category: "Full-Stack Development",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "Flask",
      "MongoDB",
      "JWT",
      "REST APIs",
      "HTML",
      "CSS",
      "Bootstrap"
    ]
  },
  {
    category: "Databases",
    skills: [
      "MySQL",
      "SQLite",
      "Supabase",
      "PostgreSQL",
      "Authentication",
      "Realtime",
      "Row Level Security"
    ]
  },
  {
    category: "Systems & Networking",
    skills: [
      "Linux",
      "Git",
      "GitHub",
      "Docker",
      "Socket Programming",
      "TCP/UDP",
      "Concurrency",
      "Multithreading"
    ]
  },
  {
    category: "Additional Tools",
    skills: ["Leaflet.js", "Vite", "Vercel"]
  }
];

/**
 * SIX CERTIFICATIONS IN EXACT SPECIFIED ORDER
 * 1-3: Professional Certifications (Coursera, HackerRank, Udemy)
 * 4-6: NPTEL Certifications (Text-only display, no images/scores/codes)
 */
export const CERTIFICATIONS = [
  // 1. Machine Learning Specialization
  {
    id: "cert-ml-specialization",
    order: "01",
    group: "professional",
    title: "Machine Learning Specialization",
    provider: "Coursera",
    instructor: "Andrew Ng",
    category: "Specialization",
    badgeColor: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
    description: "Deep dive into supervised learning algorithms, neural network architectures, decision trees, unsupervised learning techniques, and reinforcement learning instructed by Andrew Ng (DeepLearning.AI & Stanford)."
  },
  // 2. SQL (Advanced)
  {
    id: "cert-sql-advanced",
    order: "02",
    group: "professional",
    title: "SQL (Advanced)",
    provider: "HackerRank",
    instructor: null,
    category: "Skill Certification",
    badgeColor: "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]",
    description: "Rigorous technical assessment validating high-proficiency database querying, multi-table performance optimization, recursive CTEs, window functions, and complex relational data manipulation."
  },
  // 3. Complete Guide to Building, Deploying, and Optimizing Generative AI with LangChain & Hugging Face
  {
    id: "cert-genai-langchain",
    order: "03",
    group: "professional",
    title: "Complete Guide to Building, Deploying, and Optimizing Generative AI with LangChain & Hugging Face",
    provider: "Udemy",
    instructor: null,
    category: "Course Certification",
    badgeColor: "bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE]",
    description: "Comprehensive end-to-end engineering covering LangChain agents, Hugging Face transformers, vector retrieval databases, fine-tuning workflows, and production deployment of LLM systems."
  },
  // 4. Responsible & Safe AI Systems
  {
    id: "cert-nptel-safe-ai",
    order: "04",
    group: "nptel",
    title: "Responsible & Safe AI Systems",
    provider: "NPTEL",
    duration: "July–December 2026",
    category: "Completion",
    badgeColor: "bg-[#F0FDF4] text-[#15803D] border-[#BBF7D0]",
    description: "Formal academic curriculum covering ethical AI governance, algorithmic fairness, adversarial robustness, accountability standards, and safety guardrails in AI deployment."
  },
  // 5. Introduction to Large Language Models (LLMs)
  {
    id: "cert-nptel-llms",
    order: "05",
    group: "nptel",
    title: "Introduction to Large Language Models (LLMs)",
    provider: "NPTEL",
    duration: "July–December 2026",
    category: "Elite",
    badgeColor: "bg-[#EFF6FF] text-[#1D4ED8] border-[#BFDBFE]",
    description: "In-depth study of foundation model architectures, attention mechanisms, tokenization pipelines, prompt engineering strategies, and LLM fine-tuning paradigms."
  },
  // 6. The Joy of Computing using Python
  {
    id: "cert-nptel-python",
    order: "06",
    group: "nptel",
    title: "The Joy of Computing using Python",
    provider: "NPTEL",
    duration: "January–April 2026",
    category: "Elite + Gold",
    badgeColor: "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]",
    description: "Foundational and advanced computational problem solving in Python, exploring data structures, algorithmic design, recursion, and practical programmatic applications."
  }
];
