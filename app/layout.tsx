import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { TelemetryOverlay } from "@/components/telemetry-overlay";
import { AudioToggle } from "@/components/audio-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../public/fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Astronautia — Compact Autonomous Exploration Systems",
    template: "%s | Astronautia",
  },
  description:
    "Astronautia creates compact autonomous exploration systems for observing water and sky. Built for lakes, coastlines, and calm waters.",
  keywords: [
    "autonomous exploration",
    "water observation",
    "sky observation",
    "underwater camera",
    "GPS navigation",
    "compact boat",
    "environmental sensing",
  ],
  authors: [{ name: "Astronautia" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Astronautia",
    title: "Astronautia — Compact Autonomous Exploration Systems",
    description:
      "Astronautia creates compact autonomous exploration systems for observing water and sky. Built for lakes, coastlines, and calm waters.",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astronautia — Compact Autonomous Exploration Systems",
    description:
      "Astronautia creates compact autonomous exploration systems for observing water and sky. Built for lakes, coastlines, and calm waters.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable} font-sans antialiased bg-void text-warm-white`}
      >
        <LoadingScreen />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <TelemetryOverlay />
        <AudioToggle />
      </body>
    </html>
  );
}
