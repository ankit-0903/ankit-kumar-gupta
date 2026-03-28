import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ankit-kumar-gupta.vercel.app/'), // Replace with your actual domain when deployed
  title: {
    default: "Portfolio of Ankit Kumar Gupta | Software Developer",
    template: "%s | Ankit Kumar Gupta"
  },
  description: "Professional Portfolio of Ankit Kumar Gupta. A Full-Stack Developer and Computer Science student specializing in building scalable software solutions, AI-driven applications, and high-impact technical projects.",
  keywords: ["Ankit Kumar Gupta", "Full-Stack Developer", "Software Engineer", "React Developer", "Next.js Portfolio", "AI Solutions"],
  authors: [{ name: "Ankit Kumar Gupta" }],
  creator: "Ankit Kumar Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankit-kumar-gupta.vercel.app/",
    siteName: "Ankit Kumar Gupta Portfolio",
    title: "Ankit Kumar Gupta | Software Developer Portfolio",
    description: "Explore the professional portfolio of Ankit Kumar Gupta, a Full-Stack Developer specializing in React, Next.js, and AI-driven solutions. View my latest projects, technical skills, and educational background.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ankit Kumar Gupta - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Kumar Gupta | Software Developer Portfolio",
    description: "Explore the professional portfolio of Ankit Kumar Gupta, a Full-Stack Developer specializing in React, Next.js, and AI-driven solutions.",
    creator: "@ankit_gupta",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
};

import { CustomCursor } from "@/components/layout/CustomCursor";
import { ErrorBoundary } from "@/components/layout/ErrorBoundary";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ankit Kumar Gupta",
              "jobTitle": "Full-Stack Developer",
              "url": "https://ankit-kumar-gupta.vercel.app/",
              "sameAs": [
                "https://github.com/ankit-0903",
                "https://www.linkedin.com/in/ankit-kumar-gupta-a39688234"
              ],
              "description": "Professional Portfolio of Ankit Kumar Gupta. A Full-Stack Developer and Computer Science student specializing in building scalable software solutions."
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-muted-foreground antialiased selection:bg-border selection:text-foreground leading-relaxed">
        <ErrorBoundary>
          <div className="hidden lg:block">
            <CustomCursor />
          </div>
          {children}
        </ErrorBoundary>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
