import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth scroll-pt-28`}
    >
      <body className="min-h-screen">
        
        {/* HEADER GLOBAL */}
        <Header />

        {/* CONTEÚDO */}
        <main>
          <PageTransition>{children}</PageTransition>
        </main>

        {/* FOOTER GLOBAL */}
        <Footer />


      </body>
    </html>
  );
}
