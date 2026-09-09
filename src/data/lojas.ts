export type Loja = {
  id: string;
  nome: string;
  categoria: string;
  local: string;
  wpp: string;
  logo: string;
  /** Ícone quadrado usado no card circular da página de lojas (cai de volta para `logo` quando ausente). */
  icon?: string;
};

export const CATEGORIAS = [
  "Todas",
  "Alimentação",
  "Moda",
  "Serviços",
  "Saúde e Beleza",
  "Casa",
] as const;

export const LOJAS: Loja[] = [
  { id: "probel", nome: "Probel", categoria: "Casa", local: "Loja 06", wpp: "5581900000000", logo: "/logos/probel.svg", icon: "/images/logos_lojas/probel.svg" },
  { id: "browbar", nome: "Browbar", categoria: "Saúde e Beleza", local: "Loja 18", wpp: "5581900000000", logo: "/logos/browbar.svg", icon: "/images/logos_lojas/browbar.svg" },
  { id: "pague-menos", nome: "Pague Menos", categoria: "Saúde e Beleza", local: "Lojas 01 e 02", wpp: "5581900000000", logo: "/logos/pague-menos.svg", icon: "/images/logos_lojas/paguemenos.svg" },
  { id: "rutra", nome: "Rutra", categoria: "Moda", local: "Loja 05", wpp: "5581900000000", logo: "/logos/rutra.svg", icon: "/images/logos_lojas/rutra.svg" },
  { id: "alberis", nome: "Alberis Barbearia", categoria: "Serviços", local: "Loja 16", wpp: "5581900000000", logo: "/logos/alberis.svg", icon: "/images/logos_lojas/alberis.svg" },
  { id: "bolo-vo-alzira", nome: "Fábrica de Bolo Vó Alzira", categoria: "Alimentação", local: "Loja 09 - Bloco A", wpp: "5581900000000", logo: "/logos/bolo-vo-alzira.svg", icon: "/images/logos_lojas/voalzira.svg" },
  { id: "subway", nome: "Subway", categoria: "Alimentação", local: "Loja 19", wpp: "5581900000000", logo: "/logos/subway.svg", icon: "/images/logos_lojas/subway.svg" },
  { id: "reparo", nome: "Reparu's Express", categoria: "Serviços", local: "Loja 07", wpp: "5581900000000", logo: "/logos/reparo.svg", icon: "/images/logos_lojas/reparo.svg" },
  { id: "armazem-guimaraes", nome: "Armazém Guimarães", categoria: "Alimentação", local: "Lojas 3, 4, 12 e 13", wpp: "5581900000000", logo: "/logos/armazem-guimaraes.svg", icon: "/images/logos_lojas/armazem-guimaraes.jpg" },
  { id: "wadda-activewear", nome: "Wadda Activewear", categoria: "Moda", local: "Loja 8", wpp: "5581900000000", logo: "/logos/wadda.svg", icon: "/images/logos_lojas/wadda.svg" },
  { id: "delta-expresso", nome: "Delta Expresso", categoria: "Alimentação", local: "Loja 10", wpp: "5581900000000", logo: "/logos/delta.svg", icon: "/images/logos_lojas/delta.svg" },
  { id: "lojao", nome: "Lojão do Cabeleireiro", categoria: "Saúde e Beleza", local: "Loja 14", wpp: "5581900000000", logo: "/logos/lojao.svg", icon: "/images/logos_lojas/lojao.svg" },
  { id: "oboticario", nome: "O Boticário", categoria: "Saúde e Beleza", local: "Loja 15", wpp: "5581900000000", logo: "/logos/oboticario.svg", icon: "/images/logos_lojas/oboticario.svg" },
  { id: "vila-amizade", nome: "Vila Amizade", categoria: "Alimentação", local: "Loja 17", wpp: "5581900000000", logo: "/logos/vila-amizade.svg", icon: "/images/logos_lojas/vila-amizade.svg" },
  { id: "san-paolo", nome: "San Paolo", categoria: "Alimentação", local: "Loja 20", wpp: "5581900000000", logo: "/logos/san-paolo.svg", icon: "/images/logos_lojas/san-paolo.svg" },
  { id: "bff", nome: "BFF's Lounge", categoria: "Serviços", local: "Loja 11", wpp: "5581900000000", logo: "/logos/bff.svg", icon: "/images/logos_lojas/bff.svg" },
];
