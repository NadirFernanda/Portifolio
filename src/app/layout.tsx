import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fernandagoncalves.dev"),
  title: {
    default: "Fernanda Gonçalves | Software Engineer",
    template: "%s | Fernanda Gonçalves",
  },
  description:
    "Software Engineer with 4+ years building scalable web systems, REST APIs, and Linux infrastructure. Full stack development from architecture to production deploy. Open to remote opportunities.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Systems Architect",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Linux",
    "Nginx",
    "Remote Developer",
    "Angola",
  ],
  authors: [{ name: "Fernanda Gonçalves" }],
  creator: "Fernanda Gonçalves",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fernandagoncalves.dev",
    siteName: "Fernanda Gonçalves",
    title: "Fernanda Gonçalves | Software Engineer",
    description:
      "Building scalable web systems, APIs, and Linux infrastructure — from architecture to production deploy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernanda Gonçalves | Software Engineer",
    description:
      "Building scalable web systems, APIs, and Linux infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fernanda Gonçalves",
              jobTitle: "Software Engineer",
              url: "https://fernandagoncalves.dev",
              sameAs: [
                "https://www.linkedin.com/in/fernanda-gon%C3%A7alves-70892a350/",
                "https://github.com/NadirFernanda",
              ],
              knowsAbout: [
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Linux",
                "Nginx",
                "PHP",
                "Laravel",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
