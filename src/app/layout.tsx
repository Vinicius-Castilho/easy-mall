import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easy Mall",
  description: "Empreendimento Easy Mall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth scroll-pt-28`}
    >
      <body className="min-h-screen">
        
        {/* HEADER GLOBAL */}
        <Header />

        {/* CONTEÚDO */}
        <main>
          {children}
        </main>

        {/* FOOTER GLOBAL */}
        <Footer />


      </body>
    </html>
  );
}