import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://mrafiisa.vercel.app";
const siteName = "Muhammad Rafi Isa Ansori";
const nameVariations = [
  "Muhammad Rafi Isa Ansori",
  "Rafi Isa",
  "Muhammad Rafi",
  "Muhammad Rafi Isa",
  "Muhammad Isa",
  "Muhammad Ansori",
  "Rafi Isa Ansori"
];

const seoTitle = "Muhammad Rafi Isa Ansori — Web Developer & Software Engineer";
const seoDescription =
  "Muhammad Rafi Isa Ansori (Rafi Isa) — Web Developer & Software Engineer di Surabaya, Indonesia. Full stack web development, integrasi sistem enterprise (SAP), database management, dan jasa pembuatan web profesional yang cepat, modern, dan scalable.";

const seoKeywords = [
  "Muhammad Rafi Isa Ansori",
  "Rafi Isa",
  "Muhammad Rafi",
  "Muhammad Rafi Isa",
  "Muhammad Isa",
  "Muhammad Ansori",
  "Rafi Isa Ansori",
  "Web Developer",
  "Web Developer Indonesia",
  "Web Developer Surabaya",
  "Jasa Pembuatan Web",
  "Jasa Pembuatan Website",
  "Jasa Web Developer",
  "Jasa Pembuatan Aplikasi",
  "Software Engineer",
  "Full Stack Developer",
  "Next.js Developer",
  "React Developer",
  "Enterprise System Integration",
  "SAP Integration",
  "Database Management",
  "Portfolio Developer Indonesia",
  "Surabaya Software Engineer"
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Muhammad Rafi Isa Ansori"
  },
  description: seoDescription,
  applicationName: "Muhammad Rafi Isa Ansori Portfolio",
  authors: [{ name: "Muhammad Rafi Isa Ansori", url: siteUrl }],
  creator: "Muhammad Rafi Isa Ansori",
  publisher: "Muhammad Rafi Isa Ansori",
  category: "technology",
  keywords: seoKeywords,
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "id-ID": siteUrl,
      "x-default": siteUrl
    }
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    siteName,
    images: [
      {
        url: "/profile/profileku.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Rafi Isa Ansori - Web Developer & Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/profile/profileku.png"]
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
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Muhammad Rafi Isa Ansori",
        alternateName: nameVariations,
        givenName: "Muhammad Rafi",
        additionalName: "Isa",
        familyName: "Ansori",
        jobTitle: ["Web Developer", "Software Engineer", "Full Stack Developer"],
        description: seoDescription,
        url: siteUrl,
        image: `${siteUrl}/profile/profileku.png`,
        email: "mailto:rafiisaansori@gmail.com",
        sameAs: ["https://www.linkedin.com/in/rafiisa/"],
        worksFor: {
          "@type": "Organization",
          name: "Integrasi Logistik Cipta Solusi"
        },
        knowsAbout: [
          "Web Development",
          "Jasa Pembuatan Web",
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
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Muhammad Rafi Isa Ansori",
        alternateName: nameVariations,
        description: seoDescription,
        inLanguage: ["id-ID", "en-US"],
        publisher: { "@id": `${siteUrl}/#person` }
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Jasa Pembuatan Web — Muhammad Rafi Isa Ansori",
        description:
          "Jasa pembuatan website dan aplikasi web profesional: company profile, sistem informasi, integrasi enterprise, dan platform custom yang cepat, modern, dan responsive.",
        serviceType: ["Jasa Pembuatan Web", "Web Development", "Software Development"],
        url: siteUrl,
        image: `${siteUrl}/profile/profileku.png`,
        provider: { "@id": `${siteUrl}/#person` },
        areaServed: {
          "@type": "Country",
          name: "Indonesia"
        },
        availableLanguage: ["id", "en"]
      }
    ]
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
