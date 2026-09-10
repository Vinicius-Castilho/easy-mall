import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { OG_IMAGE, SITE_URL } from "@/lib/constants";

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

const SITE_TITLE = "Easy Mall";
const SITE_DESCRIPTION =
  "O Easy Mall é o novo shopping de vizinhança da Torre, em Recife/PE: lojas, alimentação, saúde e beleza, serviços e casa, tudo perto de você.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_TITLE,
    locale: "pt_BR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
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
