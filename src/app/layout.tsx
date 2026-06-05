import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafiisa.vercel.app"),
  title: "Muhammad Rafi Isa Ansori - Developer Engineer",
  description:
    "Personal portfolio of Muhammad Rafi Isa Ansori, Developer Engineer specializing in full stack development, enterprise system integration, SAP integration, and database management.",
  openGraph: {
    title: "Muhammad Rafi Isa Ansori - Developer Engineer",
    description:
      "Personal portfolio of Muhammad Rafi Isa Ansori, Developer Engineer specializing in full stack development, enterprise system integration, SAP integration, and database management.",
    type: "website",
    locale: "en_US",
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
    description:
      "Developer Engineer specializing in full stack development, enterprise system integration, SAP integration, and database management.",
    images: ["/profile/profile.jpeg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
