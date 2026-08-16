export interface PipelineStep {
  step: string;
  tool: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  date: string;
  featured: boolean;
  stack: string[];
  problem?: string;
  pipeline?: PipelineStep[];
  highlights: string[];
  detailChips?: string[];
  team?: { names: string[]; guide: string; institution: string };
  coverImage?: string;
  links: { github?: string; live?: string };
  hasCaseStudy: boolean;
}

export const projects: Project[] = [
  {
    slug: "vidtrace",
    title: "VidTrace — AI Video Navigation & Explanation System",
    tagline:
      "Ask a question in plain language; get the exact minute of the lecture that answers it.",
    category: "AI / RAG",
    date: "May 2026",
    featured: true,
    stack: [
      "Python",
      "Flask",
      "SQLite",
      "FAISS",
      "Whisper large-v2",
      "BGE-M3",
      "Ollama",
      "LLaMA 3.1 (Groq)",
    ],
    problem:
      "Videos are hard to search compared to text. Existing systems rely on titles and tags rather than what's actually said, so learners waste time scrubbing through footage to find one specific explanation. VidTrace processes the real spoken content of a video and makes it searchable by meaning, not metadata.",
    pipeline: [
      {
        step: "01",
        tool: "Audio extraction",
        detail: "FFmpeg pulls audio from the source video",
      },
      {
        step: "02",
        tool: "Transcription",
        detail: "Whisper large-v2 transcribes and translates Hindi speech to English",
      },
      {
        step: "03",
        tool: "Semantic chunking",
        detail: "Transcript is split into timestamped segments",
      },
      {
        step: "04",
        tool: "Embedding generation",
        detail: "BGE-M3 (via Ollama) converts each chunk into a vector",
      },
      {
        step: "05",
        tool: "Query embedding",
        detail: "A user's question is vectorised the same way, in real time",
      },
      {
        step: "06",
        tool: "Similarity search",
        detail: "FAISS retrieves the closest-matching transcript chunks",
      },
      {
        step: "07",
        tool: "Retrieval-augmented explanation",
        detail: "LLaMA 3.1 (via Groq) turns the retrieved chunks into an answer",
      },
      {
        step: "08",
        tool: "Navigation output",
        detail: "The player jumps straight to the matching timestamp",
      },
    ],
    highlights: [
      "Built a RAG pipeline that transcribes and translates Hindi lecture audio with OpenAI Whisper large-v2, then indexes timestamped chunks as vector embeddings (BGE-M3 via Ollama) in a FAISS store.",
      "Retrieved chunks are passed to LLaMA 3.1 (via Groq) to generate a grounded explanation, with the model distinguishing between questions the indexed videos actually cover and ones they don't.",
      "Full-stack Flask + SQLite application with OTP-verified registration, password recovery, per-user search history, and a video player that jumps directly to the retrieved timestamp.",
    ],
    detailChips: [
      "Out-of-context query detection",
      "OTP-verified auth",
      "Password recovery",
      "Search history",
    ],
    team: {
      names: ["Jayesh Desai", "Hepin Poshiya", "Vishal Prajapati"],
      guide: "Ms. Foram Gohel, Assistant Professor, Dept. of CSE",
      institution: "Indus Institute of Technology & Engineering, Indus University",
    },
    links: {},
    hasCaseStudy: true,
  },
  {
    slug: "animal-classifier",
    title: "Image Classification Model",
    tagline:
      "A transfer-learning classifier that identifies 90 animal species from 5.4k+ samples.",
    category: "Computer Vision",
    date: "Sep 2025",
    featured: false,
    stack: ["Python", "TensorFlow", "MobileNetV2", "Transfer Learning"],
    problem:
      "Training a classifier from scratch across 90 fine-grained animal species needs far more data than was available. MobileNetV2 transfer learning made a small dataset workable, with augmentation covering the rest of the gap.",
    highlights: [
      "Developed a transfer learning-based multi-class image classifier using MobileNetV2 to identify 90 animal species from 5.4k+ samples.",
      "Applied data augmentation to compensate for a modest per-class sample count and reduce overfitting.",
      "Ran a comprehensive evaluation pass — confusion matrix, per-class precision/recall — rather than reporting a single accuracy figure.",
    ],
    links: { github: "https://github.com/JayeshDesai7" },
    hasCaseStudy: true,
    coverImage: "/images/classifier-cover.png",
  },
  {
    slug: "weather-prediction",
    title: "Weather Prediction Using ML",
    tagline:
      "A multi-city forecasting pipeline built on historical meteorological data.",
    category: "ML / Forecasting",
    date: "Oct 2025",
    featured: false,
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    highlights: [
      "Built a machine learning weather prediction system with a full preprocessing pipeline.",
      "Trained predictive models for multi-city forecasting using historical meteorological data.",
    ],
    links: { github: "https://github.com/JayeshDesai7" },
    hasCaseStudy: false,
    coverImage: "/images/weather-cover.png",
  },
  {
    slug: "guessing-game",
    title: "Guessing Game (Web Scraping)",
    tagline:
      "A terminal game built during my internship that scrapes quotes and challenges you to guess them.",
    category: "Python",
    date: "Jun 2024",
    featured: false,
    stack: ["Python", "BeautifulSoup", "Requests"],
    problem:
      "A self-directed exercise during the Tuvoc Technologies internship to practice core Python and web scraping fundamentals beyond the assigned coursework.",
    highlights: [
      "Developed a Python terminal game using web scraping with BeautifulSoup that challenges users to guess quotes with hint-based attempts.",
      "Built as a self-directed project during the internship, applying core Python and web scraping fundamentals learned on the job.",
    ],
    links: {},
    hasCaseStudy: true,
    coverImage: "/images/guessing-game-cover.png",
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const otherProjects = projects.filter((p) => !p.featured);

