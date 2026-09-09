import type { Metadata } from "next";
import LojasClient from "./LojasClient";

export const metadata: Metadata = {
  title: "Lojas | Easy Mall",
  description: "Conheça as lojas do Easy Mall: moda, alimentação, saúde e beleza, serviços e casa, tudo no coração da Torre.",
};

export default function LojasPage() {
  return <LojasClient />;
}
