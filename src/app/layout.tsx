import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://portifolio-nine-azure-22.vercel.app";
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
    siteName: "Fernanda Gonçalves",
    title: "Fernanda Gonçalves | Software Engineer",
    description:
      "Building scalable web systems, APIs, and Linux infrastructure — from architecture to production deploy.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Fernanda Gonçalves — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernanda Gonçalves | Software Engineer",
    description:
      "Building scalable web systems, APIs, and Linux infrastructure.",
    images: [OG_IMAGE],
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
              url: SITE_URL,
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
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://cloud.umami.is/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
