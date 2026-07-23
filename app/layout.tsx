import type { Metadata, Viewport } from "next";
import "./globals.css";

function siteUrl() {
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  return new URL(host ? `https://${host}` : "http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: siteUrl(),
  title: "Aliberk Olukkaya | Computer Engineer",
  description: "Portfolio of Aliberk Olukkaya, a Computer Engineering graduate focused on practical AI, data engineering, and Python development.",
  applicationName: "Aliberk Olukkaya Portfolio",
  authors: [{ name: "Aliberk Olukkaya" }],
  creator: "Aliberk Olukkaya",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: "Aliberk Olukkaya | Computer Engineer",
    description: "Practical AI-powered and data-driven software, built with a product-focused engineering mindset.",
    url: "/",
    siteName: "Aliberk Olukkaya",
    locale: "en_US",
    images: [{ url: "/aliberk-olukkaya-portrait.jpg", width: 1122, height: 1402, alt: "Aliberk Olukkaya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aliberk Olukkaya | Computer Engineer",
    description: "Computer Engineer focused on AI & Data Engineering.",
    images: ["/aliberk-olukkaya-portrait.jpg"],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07172f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
