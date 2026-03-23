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
  description: "Full-Stack Developer and Computer Science student specializing in scalable, AI-driven solutions and high-impact technical projects.",
  keywords: ["Ankit Kumar Gupta", "Full-Stack Developer", "Software Engineer", "React Developer", "Next.js Portfolio", "AI Solutions"],
  authors: [{ name: "Ankit Kumar Gupta" }],
  creator: "Ankit Kumar Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankit-gupta.dev", // Update this when you have a real URL
    siteName: "Ankit Kumar Gupta Portfolio",
    title: "Ankit Kumar Gupta | Full-Stack Developer",
    description: "Building scalable software solutions for the future. Portfolio of Ankit Kumar Gupta.",
    images: [
      {
        url: "/og-image.png", // We can generate this later or use a screenshot
        width: 1200,
        height: 630,
        alt: "Ankit Kumar Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Kumar Gupta | Full-Stack Developer",
    description: "Full-Stack Developer and CS student specializing in scalable AI solutions.",
    creator: "@ankit_gupta", // Update with your twitter handle
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
import GoogleAnalytics from "@/components/common/GoogleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} scroll-smooth`}
    >
      <head>
        <GoogleAnalytics GA_MEASUREMENT_ID={GA_ID} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ankit Kumar Gupta",
              "jobTitle": "Full-Stack Developer",
              "url": "https://ankit-gupta.dev",
              "sameAs": [
                "https://github.com/ankit-0903",
                "https://www.linkedin.com/in/ankit-kumar-gupta-a39688234"
              ],
              "description": "Full-Stack Developer and Computer Science student specializing in scalable, AI-driven solutions."
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
      </body>
    </html>
  );
}
