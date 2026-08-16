export interface TimelineEntry {
  id: string;
  kind: "experience" | "education";
  title: string;
  organisation: string;
  location: string;
  date: string;
  summary: string;
  bullets?: string[];
}

export const timeline: TimelineEntry[] = [
  {
    id: "btech-graduation",
    kind: "education",
    title:
      "B.Tech, Computer Science & Engineering — Indus Institute of Technology & Engineering, Indus University",
    organisation: "Indus University",
    location: "Ahmedabad, Gujarat",
    date: "May 2026",
    summary: "Graduated · 8.91 CGPA",
  },
  {
    id: "tuvoc-internship",
    kind: "experience",
    title: "Python ML Intern — Tuvoc Technologies Pvt. Ltd.",
    organisation: "Tuvoc Technologies",
    location: "Thaltej, Ahmedabad",
    date: "Jun – Jul 2024",
    summary:
      "2 months. Core Python (OOP, file handling, web scraping) and ML fundamentals — supervised learning, data preprocessing, model evaluation.",
    bullets: [
      "Learned Python fundamentals and gained an understanding of supervised learning, data preprocessing, and model evaluation.",
      "Built a web-scraping terminal guessing game as a self-directed project, demonstrating initiative beyond the assigned coursework.",
    ],
  },
  {
    id: "btech-start",
    kind: "education",
    title: "Began B.Tech CSE at Indus University",
    organisation: "Indus University",
    location: "Ahmedabad, Gujarat",
    date: "Sep 2022",
    summary: "Started the Computer Science & Engineering programme.",
  },
];
