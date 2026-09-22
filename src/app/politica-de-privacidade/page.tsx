import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/constants";

const TITLE = "Política de Privacidade";
const DESCRIPTION = "Política de Privacidade do site do Easy Mall (www.easymall.com.br).";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/politica-de-privacidade",
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

const FINALIDADES = [
  {
    finalidade: "Atendimento de solicitações enviadas pelo Site ou WhatsApp",
    base: "Art. 7º, IX — legítimo interesse da EASY MALL, respeitados os direitos do titular",
  },
  {
    finalidade: "Gestão de relacionamento com usuários e potenciais clientes (leads)",
    base: "Art. 7º, IX — legítimo interesse da EASY MALL, respeitados os direitos do titular",
  },
  {
    finalidade: "Envio de comunicações institucionais e marketing",
    base: "Art. 7º, I — consentimento do titular, que poderá ser revogado a qualquer tempo",
  },
  {
    finalidade: "Melhoria da experiência de navegação e análise estatística de uso",
    base: "Art. 7º, IX — legítimo interesse, condicionado ao consentimento para cookies analíticos",
  },
  {
    finalidade: "Segurança da informação, prevenção a fraudes e proteção dos sistemas",
    base: "Art. 7º, IX — legítimo interesse da EASY MALL",
  },
  {
    finalidade: "Exercício regular de direitos e cumprimento de obrigações legais",
    base: "Art. 7º, II e VI — obrigação legal/regulatória e exercício regular de direitos",
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="relative pt-24 lg:pt-28 pb-24 bg-easy-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-semibold text-easy-green/60 uppercase tracking-normal mb-3">
          Easy Mall
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-easy-green mb-2">
          Política de Privacidade
        </h1>
        <p className="text-sm text-easy-green/60 mb-12">Atualizada em: 12 de junho de 2026</p>

        <div className="space-y-10 text-easy-green/80 leading-relaxed">
          <section>
            <p className="mb-4">
              A TIBAGI S.A., inscrita no CNPJ nº 35.603.000/0002-41, com sede na Rua José Bonifácio,
              nº 944, SALA 0000, PARTE M, Torre, Recife-PE, CEP: 50.070-001, (EASY MALL) na
              qualidade de controladora de dados pessoais, em respeito à sua privacidade e à proteção
              de seus dados pessoais, apresenta esta Política de Privacidade com o objetivo de
              esclarecer como ocorre o tratamento das informações coletadas por meio de seus canais
              digitais, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados —
              LGPD).
            </p>
            <p className="font-semibold text-easy-green">
              O uso do Site é facultativo. Ao acessar e utilizar os canais disponibilizados, incluindo
              formulário de contato e redirecionamento para WhatsApp, o Usuário declara estar ciente
              e de acordo com estes Termos de Uso e com esta Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">1. O QUE É TRATAMENTO E O QUE SÃO DADOS PESSOAIS?</h2>
            <p className="mb-4">
              Tratamento de dados pessoais corresponde a qualquer operação realizada com dados
              pessoais, tais como coleta, utilização, acesso, armazenamento, compartilhamento e
              eliminação, conforme definição do art. 5º, X da LGPD.
            </p>
            <p>
              Dado pessoal é toda informação que identifique ou possa identificar uma pessoa natural,
              como nome, e-mail, número de telefone, endereço IP e dados de navegação, nos termos
              do art. 5º, I da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">2. POR QUE A EASY MALL TRATA OS SEUS DADOS PESSOAIS</h2>
            <p>
              O EASY MALL realiza o tratamento de dados pessoais de forma limitada e proporcional às
              suas atividades institucionais, especialmente para viabilizar a comunicação com titulares
              e o atendimento de suas solicitações, observando os princípios da finalidade, adequação,
              necessidade e transparência previstos no art. 6º da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">3. QUAIS SÃO OS DADOS TRATADOS PELA EASY MALL?</h2>
            <p className="mb-4">
              O EASY MALL trata apenas os dados pessoais estritamente necessários para viabilizar a
              comunicação com titulares e o atendimento de suas solicitações. O Site não exige criação
              de conta ou autenticação. Os dados pessoais são coletados somente quando o titular
              decide voluntariamente entrar em contato com o EASY MALL por meio dos canais
              disponibilizados.
            </p>
            <p className="mb-6">Os dados pessoais são coletados por meio dos seguintes canais:</p>

            <h3 className="text-base font-semibold text-easy-green mb-3">1. Dados fornecidos diretamente pelo titular</h3>

            <p className="mb-2">Por meio do formulário disponível no Site:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Nome</li>
              <li>E-mail</li>
              <li>Conteúdo da mensagem enviada</li>
            </ul>

            <p className="mb-2">Por meio do contato via WhatsApp:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Nome</li>
              <li>Número de telefone</li>
              <li>Conteúdo da mensagem</li>
            </ul>

            <p className="mb-2">Por meio de contato telefônico:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Nome</li>
              <li>Número de celular e/ou e-mail</li>
              <li>Informação solicitada ou registro da reclamação, conforme formulário de acompanhamento</li>
            </ul>

            <p className="mb-2">Por meio do LinkedIn da EASY MALL, via inbox da plataforma:</p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>Nome</li>
              <li>E-mail e/ou número de celular</li>
              <li>Conteúdo da mensagem recebida</li>
            </ul>

            <h3 className="text-base font-semibold text-easy-green mb-3">2. Dados coletados automaticamente</h3>
            <p className="mb-2">Durante a navegação no Site, poderão ser coletados automaticamente os seguintes dados:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Endereço IP</li>
              <li>Informações sobre dispositivo e navegador</li>
              <li>Dados de navegação e interação com o Site</li>
              <li>Cookies e identificadores eletrônicos</li>
            </ul>
            <p className="mb-4">
              A coleta automática de dados de navegação ocorre por meio do Google Analytics. Já os
              registros internos de atendimento podem ser armazenados em plataformas Microsoft,
              como SharePoint, além das aplicações utilizadas para o contato como Outlook, Whatsapp
              e Linkedin. A ativação de cookies não essenciais está condicionada ao consentimento
              prévio do titular, que poderá ser gerenciado por meio da ferramenta de gestão de cookies
              disponível no Site.
            </p>
            <p>
              <strong className="text-easy-green">Importante:</strong> O EASY MALL não realiza tratamento de dados sensíveis (conforme art. 5º, II
              da LGPD) nem realiza coleta intencional de dados de menores de 18 (dezoito) anos. O Site
              não é destinado a esse público. Caso o EASY MALL identifique inadvertidamente o
              recebimento de dados pessoais de menores, tais dados serão prontamente eliminados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">4. FINALIDADES E BASES LEGAIS DO TRATAMENTO</h2>
            <p className="mb-4">
              O tratamento de dados pessoais pelo EASY MALL ocorre para finalidades específicas, cada
              qual amparada em hipótese legal prevista no art. 7º da LGPD, conforme indicado abaixo:
            </p>

            <div className="overflow-x-auto mb-4 rounded-2xl border border-easy-green/10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-easy-green/5 text-left">
                    <th className="p-4 font-semibold text-easy-green border-b border-easy-green/10">Finalidade</th>
                    <th className="p-4 font-semibold text-easy-green border-b border-easy-green/10">Base Legal (LGPD)</th>
                  </tr>
                </thead>
                <tbody>
                  {FINALIDADES.map((linha) => (
                    <tr key={linha.finalidade} className="border-b border-easy-green/10 last:border-b-0">
                      <td className="p-4 align-top">{linha.finalidade}</td>
                      <td className="p-4 align-top">{linha.base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              O titular poderá, a qualquer momento, revogar o consentimento eventualmente
              fornecido, sem que isso afete a licitude do tratamento realizado anteriormente, mediante
              solicitação ao canal indicado na seção &quot;Encarregado e Contato&quot; desta Política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">5. TRATAMENTO E ARMAZENAMENTO DOS DADOS</h2>
            <p className="mb-4">Os dados fornecidos poderão ser:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recebidos e tratados por meio de serviços de e-mail;</li>
              <li>Compartilhados internamente por meio de transferência de ramal telefônico, encaminhamento por e-mail ou registro em formulário de acompanhamento para o setor responsável, sendo o acesso restrito aos colaboradores responsáveis pelo atendimento;</li>
              <li>Registrados em formulário de controle interno de contatos (Microsoft Excel e Microsoft Forms), para fins de acompanhamento e histórico do atendimento realizado;</li>
              <li>Armazenados em pasta dedicada em plataforma corporativa, contendo o histórico completo desde o recebimento até a conclusão da tratativa, em ambiente de acesso restrito; e</li>
              <li>Compartilhados com empresas do grupo, observadas as finalidades originalmente informadas no momento da coleta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">6. POR QUANTO TEMPO MANTEMOS OS SEUS DADOS ARMAZENADOS</h2>
            <p className="mb-4">
              O EASY MALL mantém os dados pessoais armazenados pelo prazo de 1 (um) ano a contar
              da data do contato, aplicável aos registros mantidos em caixa de e-mail (Outlook)
              Whatsapp, Linkedin, pasta de armazenamento (OneDrive) e formulários de controle
              (Microsoft Forms/Excel), observando os princípios da necessidade e da adequação
              previstos no art. 6º da LGPD.
            </p>
            <p className="mb-4">Os dados poderão ser mantidos por período superior quando necessário para:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cumprimento de obrigações legais ou regulatórias;</li>
              <li>Exercício regular de direitos em processos judiciais, administrativos ou arbitrais;</li>
              <li>Resguardo de interesses legítimos do EASY MALL, respeitados os direitos do titular.</li>
            </ul>
            <p>
              Após o término do tratamento, os dados pessoais serão eliminados ou anonimizados,
              salvo nas hipóteses legalmente permitidas pelo art. 16 da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">7. COOKIES</h2>
            <p className="mb-4">
              O Site do EASY MALL utiliza cookies e tecnologias semelhantes para garantir o
              funcionamento adequado da plataforma e melhorar a experiência do Usuário.
            </p>
            <p className="mb-4">
              Cookies são pequenos arquivos armazenados no dispositivo do Titular que permitem
              reconhecer preferências, entender padrões de navegação e coletar informações para fins
              estatísticos.
            </p>
            <p className="mb-2">Os cookies utilizados podem ser classificados como:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Cookies essenciais:</strong> necessários para o funcionamento do Site; não requerem consentimento prévio;</li>
              <li><strong>Cookies analíticos:</strong> utilizados para análise de uso e desempenho, por meio do Google Analytics; sujeitos ao consentimento prévio do Titular.</li>
            </ul>
            <p className="mb-4">
              <strong className="text-easy-green">Gerenciamento de cookies:</strong> Ao acessar o Site pela primeira vez, o Titular será informado
              sobre o uso de cookies não essenciais e poderá aceitar ou recusar sua ativação por meio
              da ferramenta de gestão de cookies disponível no Site. O consentimento poderá ser
              revogado a qualquer momento por meio das configurações do navegador ou da referida
              ferramenta.
            </p>
            <p>
              O Titular também pode desativar a coleta de dados pelo Google Analytics por meio do
              complemento de navegador disponível em:{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-easy-green underline decoration-easy-green/30 underline-offset-2 hover:text-easy-olive transition-colors"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">8. COM QUEM A EASY MALL COMPARTILHA OS SEUS DADOS?</h2>
            <p className="mb-4">
              O EASY MALL poderá compartilhar dados pessoais com terceiros estritamente quando
              necessário para viabilizar suas atividades e o funcionamento do Site, sempre observando
              os princípios da LGPD.
            </p>
            <p className="mb-4">Os dados poderão ser compartilhados com:</p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li>
                <strong>Empresas do Grupo</strong> — Tibagi S.A. (CNPJ 35.603.000/0001-60), BPT
                Empreendimentos Imobiliários S.A., inscrita no CNPJ nº 10.397.495/0001-98 e
                TORRE PARTICIPAÇÕES (CNPJ 52.956.690/0001-50) —, para fins estritamente
                relacionados às finalidades originalmente informadas no momento da coleta,
                sendo vedado o uso dos dados para finalidades diversas. O EASY MALL adotará
                medidas razoáveis para assegurar que tais empresas observem padrões
                compatíveis de proteção de dados.
              </li>
              <li>
                <strong>LMS Administração de empreendimentos</strong> (CNPJ 63.125.339/0001-34) —, para fins
                estritamente relacionados às finalidades originalmente informadas no momento
                da coleta, sendo vedado o uso dos dados para finalidades diversas. A TORRE
                adotará medidas razoáveis para assegurar que esta empresa observe padrões
                compatíveis de proteção de dados.
              </li>
              <li><strong>Microsoft Corporation</strong> (Outlook e OneDrive), para recebimento, tratamento e armazenamento seguro das solicitações e histórico de atendimento;</li>
              <li><strong>Microsoft Corporation</strong> (SharePoint, Microsoft Forms e Excel), para gestão de formulários de registro e controle interno de contatos;</li>
              <li><strong>Plataforma de hospedagem do Site</strong> (Hostinger ou similar), responsável pela infraestrutura tecnológica;</li>
              <li><strong>Google LLC</strong> (Google Analytics), para análise de navegação, mediante consentimento do Titular;</li>
              <li><strong>Meta Platforms</strong> (WhatsApp), quando o contato for realizado por esse canal;</li>
              <li>
                <strong>LinkedIn (Microsoft Corporation)</strong>, quando o contato for iniciado pelo Titular por
                meio da página oficial da EASY MALL na plataforma. Ao utilizar esse canal, o Titular
                estará sujeito também à Política de Privacidade do LinkedIn, disponível em{" "}
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-easy-green underline decoration-easy-green/30 underline-offset-2 hover:text-easy-olive transition-colors"
                >
                  https://www.linkedin.com/legal/privacy-policy
                </a>
                , não sendo o EASY MALL responsável pelas práticas adotadas pela plataforma.
              </li>
            </ul>
            <p className="mb-4">
              Esses terceiros poderão atuar como operadores, controladores independentes ou
              parceiros tecnológicos, conforme a natureza do serviço prestado e seus respectivos
              termos.
            </p>
            <p>
              Caso o Titular deseje obter mais informações sobre os terceiros envolvidos no tratamento
              de seus dados, poderá entrar em contato pelo canal indicado na seção &quot;Encarregado e
              Contato&quot; desta Política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">9. TRANSFERÊNCIA INTERNACIONAL DE DADOS</h2>
            <p className="mb-4">
              Em razão da utilização de serviços tecnológicos cujos servidores podem estar localizados
              no exterior — incluindo Google LLC (Google Analytics), Microsoft Corporation (Outlook,
              OneDrive, SharePoint e Microsoft Forms), Meta Platforms (WhatsApp) e a plataforma de
              hospedagem contratada (Hostinger ou similar) —, os dados pessoais poderão ser
              transferidos para fora do Brasil.
            </p>
            <p className="mb-4">
              Essas transferências ocorrem com fundamento no art. 33 da LGPD, considerando que os
              referidos fornecedores adotam mecanismos reconhecidos de proteção de dados,
              incluindo cláusulas contratuais padrão e certificações internacionais de segurança da
              informação.
            </p>
            <p>
              O EASY MALL adota medidas para assegurar que o tratamento realizado por esses
              terceiros ocorra em conformidade com a legislação aplicável e com níveis adequados de
              proteção de dados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">10. MEDIDAS DE SEGURANÇA</h2>
            <p className="mb-4">
              O EASY MALL adota medidas técnicas e administrativas adequadas para proteger os dados
              pessoais contra acessos não autorizados, destruição, perda, alteração ou qualquer forma
              de tratamento inadequado ou ilícito, em conformidade com o art. 46 da LGPD, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Utilização de conexões seguras (HTTPS); e</li>
              <li>Armazenamento em ambientes protegidos em nuvem.</li>
            </ul>
            <p className="font-semibold text-easy-green mb-4">
              Os dados pessoais coletados pelo Site são classificados como Dados de Uso Interno,
              acessíveis exclusivamente a colaboradores da EASY MALL com necessidade justificada
              para o atendimento das solicitações recebidas, sendo vedado o acesso por pessoas não
              autorizadas.
            </p>
            <p>
              Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos
              titulares, o EASY MALL comunicará o ocorrido à Autoridade Nacional de Proteção de
              Dados (ANPD) e aos titulares afetados, nos termos do art. 48 da LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">11. LINKS PARA SERVIÇOS DE TERCEIROS</h2>
            <p className="mb-4">
              O Site poderá conter links para serviços externos, incluindo o redirecionamento para o
              WhatsApp e para a página oficial do EASY MALL no LinkedIn.
            </p>
            <p>
              Ao acessar esses ambientes, o Titular estará sujeito às políticas de privacidade e termos
              de uso próprios de cada plataforma, não sendo o EASY MALL responsável pelas práticas
              por elas adotadas. Recomenda-se a leitura dos referidos documentos antes de
              compartilhar qualquer dado pessoal nessas plataformas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">12. VERACIDADE DAS INFORMAÇÕES</h2>
            <p>
              O Usuário é responsável por fornecer informações verdadeiras, completas e atualizadas
              ao utilizar os canais de contato do EASY MALL.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">13. AVISO SOBRE RESPONSABILIDADE</h2>
            <p className="mb-4">O EASY MALL não se responsabiliza por:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Informações fornecidas de forma incorreta ou inverídica pelo Usuário;</li>
              <li>Uso indevido do Site por terceiros;</li>
              <li>Falhas decorrentes de fatores externos, fora de seu controle razoável.</li>
            </ul>
            <p className="font-semibold text-easy-green">
              Nada nesta Política limita ou exclui responsabilidades nos casos em que a legislação
              aplicável — em especial a LGPD e o CDC — assim determinar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">14. ALTERAÇÕES DA POLÍTICA DE PRIVACIDADE E TERMOS DE USO</h2>
            <p className="mb-4">
              O EASY MALL poderá atualizar esta Política de Privacidade e os Termos de Uso a qualquer
              momento, a fim de refletir alterações legais, regulatórias ou operacionais.
            </p>
            <p className="mb-4">
              Quando houver alterações relevantes, o EASY MALL comunicará as mudanças por meio
              do próprio Site com antecedência mínima de 30 (trinta) dias antes de sua entrada em
              vigor.
            </p>
            <p>
              A versão vigente será sempre aquela disponível no Site, com indicação da data da última
              atualização. Recomenda-se que o Titular revise periodicamente este documento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">15. SEUS DIREITOS</h2>
            <p className="mb-4">
              Nos termos do art. 18 da Lei nº 13.709/2018 (LGPD), o titular dos dados pessoais possui
              os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Confirmação da existência de tratamento e acesso aos dados pessoais;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;</li>
              <li>Portabilidade dos dados a outro fornecedor de serviço ou produto, observadas as normas aplicáveis;</li>
              <li>Eliminação dos dados pessoais tratados com base no consentimento;</li>
              <li>Informação sobre as entidades públicas e privadas com as quais houve compartilhamento de dados;</li>
              <li>Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa;</li>
              <li>Revogação do consentimento, quando aplicável, sem prejuízo da licitude do tratamento realizado anteriormente;</li>
              <li>Oposição ao tratamento realizado com fundamento em hipótese legal, em caso de descumprimento da LGPD;</li>
              <li>Revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais, quando aplicável.</li>
            </ul>
            <p className="mb-4">
              Para exercer seus direitos, o titular deverá entrar em contato com o EASY MALL por meio
              do canal indicado na seção &quot;Encarregado e Contato&quot; desta Política.
            </p>
            <p className="mb-4">
              As solicitações serão analisadas e respondidas no prazo de até 30 (trinta) dias, nos termos
              da legislação aplicável. O EASY MALL poderá solicitar informações adicionais para
              confirmação da identidade do solicitante, como medida de segurança.
            </p>
            <p>
              <strong className="text-easy-green">Direito de petição à ANPD:</strong> Sem prejuízo do canal de atendimento do EASY MALL, o titular
              poderá, a qualquer momento, apresentar reclamação à Autoridade Nacional de Proteção
              de Dados (ANPD), por meio do portal{" "}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-easy-green underline decoration-easy-green/30 underline-offset-2 hover:text-easy-olive transition-colors"
              >
                www.gov.br/anpd
              </a>
              , caso entenda que seus direitos não foram adequadamente atendidos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">16. ENCARREGADO E CONTATO</h2>
            <p className="mb-4">
              O EASY MALL designou Encarregado pelo Tratamento de Dados Pessoais (DPO), nos
              termos do art. 41 da LGPD, para atuar como canal de comunicação entre o EASY MALL,
              os titulares de dados e a ANPD:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Nome da Encarregada:</strong> Talita Duarte</li>
              <li><strong>E-mail:</strong> contato@easymall.com.br</li>
            </ul>
            <p>
              As solicitações relacionadas ao tratamento de dados pessoais, ao exercício de direitos
              pelos titulares ou a esta Política deverão ser encaminhadas exclusivamente ao canal acima
              indicado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-easy-green mb-3">17. FORO</h2>
            <p>
              Fica eleito o foro da Comarca de Recife/PE para dirimir quaisquer controvérsias oriundas
              destes Termos de Uso e da Política de Privacidade, salvo disposição legal em contrário,
              incluindo o foro do domicílio do consumidor nos casos em que a legislação consumerista
              assim determinar.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
