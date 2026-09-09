import type { Metadata } from "next";
import ContatoClient from "./ContatoClient";

export const metadata: Metadata = {
  title: "Contato | Easy Mall",
  description: "Fale com o Easy Mall: dúvidas, sugestões ou oportunidades de locação para sua marca no coração da Torre.",
};

export default function ContatoPage() {
  return <ContatoClient />;
}
