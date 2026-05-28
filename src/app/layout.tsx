import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { getSiteUrl, siteConfig } from "@/lib/site";

const fredoka = Fredoka({
  variable: "--font-feather",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-din-round",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Mina the Hollower Guides | Hollow Guidebook",
    template: "%s",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author }],
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#58cc02",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunitoSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
