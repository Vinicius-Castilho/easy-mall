import type { Metadata } from "next";
import SobreClient from "./SobreClient";

export const metadata: Metadata = {
  title: "O Easy Mall | Easy Mall",
  description: "Conheça o Easy Mall, o novo shopping de vizinhança da Torre, e a Torre Participações, grupo por trás do empreendimento.",
};

export default function SobrePage() {
  return <SobreClient />;
}
