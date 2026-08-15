import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  title: "MOHINIRAJ — Personal Transformation & Ho'oponopono Healing",
  description:
    "An international luxury wellness and personal transformation experience guided by Mohiniraj. Discover emotional freedom, subconscious clearing, and authentic Ho'oponopono.",
  keywords: [
    "Mohiniraj",
    "Ho'oponopono",
    "Emotional Freedom",
    "Subconscious Reset",
    "Personal Transformation",
    "Wellness Mentorship",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-brand-bg text-brand-ivory font-sans antialiased selection:bg-brand-champagne selection:text-brand-bg">
        <SmoothScrollProvider>
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
