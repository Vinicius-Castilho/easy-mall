import type { Metadata } from "next";
import SobreClient from "./SobreClient";
import { OG_IMAGE } from "@/lib/constants";

const TITLE = "O Easy Mall";
const DESCRIPTION =
  "Conheça o Easy Mall, o novo shopping de vizinhança da Torre, e a Torre Participações, grupo por trás do empreendimento.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/sobre",
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

export default function SobrePage() {
  return <SobreClient />;
}
