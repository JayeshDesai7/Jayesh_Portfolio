export interface SkillStage {
  index: string;
  name: string;
  items: string[];
}

export const skillStages: SkillStage[] = [
  {
    index: "01",
    name: "Data",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "EDA",
      "Preprocessing",
      "Web scraping (BeautifulSoup, Requests)",
    ],
  },
  {
    index: "02",
    name: "Modelling",
    items: [
      "scikit-learn",
      "TensorFlow",
      "Transfer learning (MobileNetV2)",
      "Model evaluation",
      "Data augmentation",
    ],
  },
  {
    index: "03",
    name: "AI & Retrieval",
    items: [
      "RAG pipelines",
      "FAISS vector search",
      "OpenAI Whisper",
      "LLM integration (Groq, Ollama)",
    ],
  },
];

export const supportingStack = {
  heading: "Also comfortable with",
  tags: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Git", "Jupyter", "FFmpeg"],
};
