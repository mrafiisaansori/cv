import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://rafiisa.vercel.app";
const seoDescription =
  "Personal portfolio of Muhammad Rafi Isa Ansori, Developer Engineer specializing in full stack development, enterprise system integration, SAP integration, database management, and scalable business applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Rafi Isa Ansori - Developer Engineer",
  description: seoDescription,
  applicationName: "Muhammad Rafi Isa Ansori Portfolio",
  authors: [{ name: "Muhammad Rafi Isa Ansori", url: siteUrl }],
  creator: "Muhammad Rafi Isa Ansori",
  publisher: "Muhammad Rafi Isa Ansori",
  keywords: [
    "Muhammad Rafi Isa Ansori",
    "Rafi Isa",
    "Developer Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Enterprise System Integration",
    "SAP Integration",
    "Database Management",
    "Next.js Developer",
    "Portfolio Developer Indonesia",
    "Surabaya Software Engineer"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Muhammad Rafi Isa Ansori - Developer Engineer",
    description: seoDescription,
    url: siteUrl,
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    siteName: "Muhammad Rafi Isa Ansori Portfolio",
    images: [
      {
        url: "/profile/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Muhammad Rafi Isa Ansori Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Rafi Isa Ansori - Developer Engineer",
    description: seoDescription,
    images: ["/profile/profile.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Rafi Isa Ansori",
    jobTitle: "Developer Engineer",
    url: siteUrl,
    image: `${siteUrl}/profile/profile.jpeg`,
    email: "mailto:rafiisaansori@gmail.com",
    sameAs: ["https://www.linkedin.com/in/rafiisa/"],
    knowsAbout: [
      "Full Stack Development",
      "Enterprise System Integration",
      "SAP Integration",
      "Database Management",
      "API Integration",
      "Next.js",
      "React.js",
      "PHP",
      "PostgreSQL",
      "MySQL"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressRegion: "East Java",
      addressCountry: "ID"
    }
  };

  const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
