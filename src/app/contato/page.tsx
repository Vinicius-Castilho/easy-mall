import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";
import { OG_IMAGE } from "@/lib/constants";

const TITLE = "Contato";
const DESCRIPTION =
  "Fale com o Easy Mall: dúvidas, sugestões ou oportunidades de locação para sua marca no coração da Torre.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contato" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contato",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function ContatoPage() {
  return <ContatoClient />;
}
