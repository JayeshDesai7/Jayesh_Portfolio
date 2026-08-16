export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: "The Ultimate Job Ready Data Science Course",
    issuer: "CodeWithHarry.com",
    date: "Dec 2025",
  },
  {
    title: "ML Foundations",
    issuer: "AWS Academy",
    date: "Jun 2025",
  },
  {
    title: "Machine Learning for Natural Language Processing",
    issuer: "AWS Academy",
    date: "2025",
  },
  {
    title: "The Modern Python3 Bootcamp",
    issuer: "Colt Steele, Udemy",
    date: "Jul 2023",
  },
  {
    title: "The HTML & CSS Bootcamp",
    issuer: "Colt Steele, Udemy",
    date: "Jul 2023",
  },
];
