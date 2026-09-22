import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/constants";

const TITLE = "Termos de Uso";
const DESCRIPTION = "Termos de Uso do site do Easy Mall (www.easymall.com.br).";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/termos-de-uso" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/termos-de-uso",
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

export default function TermosDeUsoPage() {
  return (
    <main className="relative pt-24 lg:pt-28 pb-24 bg-easy-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-semibold text-easy-green/60 uppercase tracking-normal mb-3">
          Easy Mall
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-easy-green mb-2">
          Termos de Uso
        </h1>
        <p className="text-sm text-easy-green/60 mb-12">V1 de 12 de junho de 2026</p>

        <div className="space-y-10 text-easy-green/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">1. ACEITAÇÃO DOS TERMOS</h2>
            <p className="mb-4">
              Ao acessar esse site (&quot;Site&quot;), o usuário (&quot;Usuário&quot;) declara ter lido, compreendido e aceito
              integralmente estes Termos de Uso, que constituem contrato de adesão com a UNA
              PARTICIPACOES E EMPREENDIMENTOS IMOBILIARIOS LTDA, inscrita no CNPJ nº
              08.987.463/0001-09, com sede na Rua José Bonifácio, nº 944, SALA 0000, PARTE O,
              TORRE, Recife-PE, CEP: 50.070-001 (&quot;EASY MALL&quot;).
            </p>
            <p>
              Caso o Usuário não concorde com estes Termos, deverá abster-se de utilizar o Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">2. DEFINIÇÕES</h2>
            <p className="mb-4">Para fins destes Termos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Usuário</strong>: pessoa que acessa ou interage com o Site;</li>
              <li><strong>Conteúdo</strong>: textos, imagens, informações e materiais disponibilizados no Site;</li>
              <li><strong>Funcionalidades:</strong> recursos disponibilizados no Site, especialmente o canal institucional de contato e comunicação com usuários;</li>
              <li><strong>Encarregado (DPO)</strong>: pessoa responsável pelo tratamento de dados pessoais da EASY MALL, identificada na Política de Privacidade.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">3. DESCRIÇÃO DO SITE E FINALIDADE</h2>
            <p className="mb-4">O Site possui caráter exclusivamente institucional, com as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Apresentar informações institucionais da EASY MALL;</li>
              <li>Disponibilizar canal de contato com usuários, por meio de formulário e redirecionamento para WhatsApp;</li>
              <li>Possibilitar o envio de dúvidas, solicitações e manifestações de interesse.</li>
            </ul>
            <p>
              O Site não realiza vendas online, contratações diretas ou transações comerciais. O acesso
              ao conteúdo institucional do Site não exige criação de conta ou autenticação. O envio de
              dados pessoais ocorre exclusivamente quando o Usuário optar por entrar em contato com
              a EASY MALL por meio dos canais disponibilizados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">4. REGRAS DE UTILIZAÇÃO</h2>
            <p className="mb-4">O Usuário compromete-se a:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Utilizar o Site de forma lícita e em conformidade com a legislação vigente;</li>
              <li>Fornecer informações verdadeiras, corretas e atualizadas;</li>
              <li>Não utilizar o Site para fins fraudulentos, ilícitos ou que possam causar danos à EASY MALL ou a terceiros.</li>
            </ul>
            <p className="mb-4"><strong>É vedado ao Usuário</strong>:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduzir, copiar ou explorar o conteúdo do Site sem autorização prévia e expressa;</li>
              <li>Realizar engenharia reversa, scraping ou qualquer forma de coleta automatizada indevida de dados;</li>
              <li>Introduzir vírus, malware ou qualquer código malicioso;</li>
              <li>Violar direitos de propriedade intelectual da EASY MALL ou de terceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">5. PROPRIEDADE INTELECTUAL</h2>
            <p className="mb-4">
              Todo o conteúdo disponibilizado no Site é de titularidade da EASY MALL ou de terceiros
              licenciantes, sendo protegido pela legislação aplicável, especialmente a Lei nº 9.279/1996
              (Propriedade Industrial) e a Lei nº 9.610/1998 (Direitos Autorais).
            </p>
            <p>
              É proibida a reprodução, distribuição ou modificação sem autorização prévia e expressa
              da EASY MALL.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">6. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p className="mb-4">A EASY MALL envida esforços para manter o Site atualizado, funcional e seguro. Contudo:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Não garante disponibilidade contínua ou ausência de falhas técnicas;</li>
              <li>Não se responsabiliza por danos decorrentes de indisponibilidade, falhas ou interrupções do Site;</li>
              <li>Não se responsabiliza por decisões tomadas com base nas informações disponibilizadas;</li>
              <li>Não se responsabiliza por conteúdos, políticas ou práticas de terceiros acessados por meio de links externos.</li>
            </ul>
            <p className="font-semibold text-easy-green">
              Nada nestes Termos exclui ou limita responsabilidades nos casos em que a legislação
              aplicável — em especial o Código de Defesa do Consumidor (Lei nº 8.078/1990) e a Lei
              Geral de Proteção de Dados (Lei nº 13.709/2018) — assim determinar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">7. LINKS PARA TERCEIROS</h2>
            <p className="mb-4">
              O Site poderá conter redirecionamentos para serviços de terceiros, como o WhatsApp,
              Outlook e Linkedin.
            </p>
            <p>
              Ao acessar tais ambientes, o Usuário estará sujeito aos termos e políticas próprios desses
              terceiros, não sendo a EASY MALL responsável por suas práticas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">8. TRATAMENTO DE DADOS PESSOAIS</h2>
            <p className="mb-4">
              O tratamento de dados pessoais realizado no âmbito do Site está descrito na Política de
              Privacidade, que integra este documento para todos os fins.
            </p>
            <p>
              O Usuário declara estar ciente de que determinados dados poderão ser coletados,
              inclusive de forma automatizada, conforme detalhado na referida Política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">9. MODIFICAÇÕES E ATUALIZAÇÕES</h2>
            <p className="mb-4">
              A EASY MALL poderá alterar estes Termos de Uso a qualquer momento. Alterações
              relevantes serão comunicadas por meio do próprio Site com antecedência mínima de 30
              (trinta) dias antes de sua entrada em vigor. O uso continuado do Site após o transcurso
              deste prazo implicará concordância com os novos Termos.
            </p>
            <p>
              Para fins deste documento, consideram-se relevantes as alterações que ampliem as
              obrigações do Usuário, restrinjam seus direitos ou modifiquem substancialmente as
              condições de uso do Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">10. SUSPENSÃO DE ACESSO</h2>
            <p className="mb-4">A EASY MALL poderá, a seu critério, restringir ou suspender o acesso ao Site em caso de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violação destes Termos;</li>
              <li>Uso indevido ou suspeita de atividade ilícita;</li>
              <li>Necessidade técnica ou operacional devidamente justificada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">11. LEGISLAÇÃO APLICÁVEL E FORO</h2>
            <p className="mb-4">
              Estes Termos são regidos pelas leis da República Federativa do Brasil, em especial a Lei nº
              13.709/2018 (LGPD) e a Lei nº 8.078/1990 (CDC), no que couber.
            </p>
            <p>
              Fica eleito o foro da Comarca de Recife/PE para dirimir quaisquer controvérsias,
              ressalvadas as hipóteses de competência legal obrigatória, incluindo o foro do domicílio
              do consumidor quando aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">12. CONTATO E ENCARREGADO DE DADOS</h2>
            <p className="mb-4">
              Para dúvidas ou solicitações relacionadas a estes Termos ou ao tratamento de dados
              pessoais, o Usuário poderá entrar em contato com o Encarregado pelo Tratamento de
              Dados (DPO) da EASY MALL:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Nome da Encarregada:</strong> Talita Duarte</li>
              <li><strong>E-mail:</strong> contato@easymall.com.br</li>
            </ul>
            <p>
              As solicitações serão respondidas em prazo razoável e conforme os prazos previstos na
              legislação aplicável.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
