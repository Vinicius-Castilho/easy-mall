import type { Metadata } from "next";
import LojasClient from "./LojasClient";
import { OG_IMAGE } from "@/lib/constants";

const TITLE = "Lojas";
const DESCRIPTION =
  "Conheça as lojas do Easy Mall: moda, alimentação, saúde e beleza, serviços e casa, tudo no coração da Torre.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/lojas" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/lojas",
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

export default function LojasPage() {
  return <LojasClient />;
}
