import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";

// Two font families only, both extremely common and built for on-screen
// reading: Inter for everything text-related (headings, body, buttons),
// JetBrains Mono for small labels/eyebrows where a monospace look fits.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://jayeshdesai.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jayesh Desai — Data Science & ML Engineer | Ahmedabad",
  description:
    "B.Tech CSE graduate building practical ML and retrieval-augmented AI systems in Python. Creator of VidTrace, an AI video navigation system. Open to data science roles in India.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Jayesh Desai — Data Science & ML Engineer",
    description:
      "B.Tech CSE graduate building practical ML and retrieval-augmented AI systems in Python. Creator of VidTrace, an AI video navigation system.",
    url: siteUrl,
    siteName: "Jayesh Desai",
    locale: "en_IN",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Desai — Data Science & ML Engineer",
    description:
      "B.Tech CSE graduate building practical ML and retrieval-augmented AI systems in Python.",
  },
  other: {
    "theme-color": "#FDF7E4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Data Science & ML Engineer",
    url: siteUrl,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    sameAs: [profile.socials.linkedin, profile.socials.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indus University",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Machine Learning",
      "Python",
      "Data Science",
      "Natural Language Processing",
      "Retrieval-Augmented Generation",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jbmono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main" className="skip-link font-mono text-sm">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
