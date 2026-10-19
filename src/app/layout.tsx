import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TabBlurListener } from "@/components/tab-blur-listener";

export const metadata: Metadata = {
  metadataBase: new URL("https://agnisingh.dev"),
  title: "Agni Singh | Web Developer & CRM Developer | Bangalore, India",
  description:
    "Portfolio of Agni Singh: Results-driven Web Developer and CRM Developer with 2+ years of experience in MERN Stack Development, Next.js, CRM Automation, and GoHighLevel (GHL).",
  keywords: [
    "Agni Singh",
    "Web Developer",
    "CRM Developer",
    "GoHighLevel",
    "GHL Automation",
    "MERN Stack",
    "Next.js",
    "React.js",
    "Node.js",
    "Bangalore Web Developer",
  ],
  authors: [{ name: "Agni Singh" }],
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "Agni Singh | Web Developer & CRM Developer",
    description:
      "Results-driven Web Developer and CRM Developer with 2+ years of experience in MERN Stack Development, Next.js, CRM Automation, and GoHighLevel (GHL).",
    url: "https://agnisingh.dev",
    siteName: "Agni Singh Portfolio",
    images: [
      {
        url: "/images/about-me.jpg",
        width: 1200,
        height: 630,
        alt: "Agni Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body suppressHydrationWarning className="font-sans antialiased bg-background text-foreground min-h-screen selection:bg-primary/20 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="agni-portfolio-theme-white"
          disableTransitionOnChange={false}
        >
          <TabBlurListener />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
