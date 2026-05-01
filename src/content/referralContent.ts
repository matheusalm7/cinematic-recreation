export type Locale = "pt" | "en";

export const RULES_PDF_URL =
  "https://cdn.prod.website-files.com/618da0947823662661595607/66eae3cf925d75303e567ba6_Indique%20e%20Ganhe%20(1).pdf";

export const TURBO_LOGO_URL =
  "https://cdn.prod.website-files.com/618da0947823662661595607/66a93576fb700884776cefc7_TurboPartners%20logo.svg";

export const referralContent = {
  pt: {
    meta: {
      title: "Indique e Ganhe | Turbo Partners",
      description:
        "Indique empresas para a Turbo Partners e ganhe R$1.000 por cada cliente fechado.",
    },
    hero: {
      badge: "INDIQUE E GANHE",
      titleLine1: "Ganhe R$1.000 por cada",
      titleAccent: "indicação para a Turbo",
      subtitle: "Conheça agora como funciona o nosso programa de indicações",
      ctaPrimary: "Realizar indicação agora",
      ctaSecondary: "Verificar regras",
    },
    form: {
      title: "Faça sua indicação",
      subtitle: "Preencha os dados abaixo e nossa equipe entrará em contato.",
      fields: {
        companyName: "Nome da empresa indicada",
        companyNamePlaceholder: "Nome da Empresa Indicada",
        contactPerson: "Pessoa de Contato (Da empresa)",
        contactPersonPlaceholder: "Pessoa da empresa indicada",
        referredPhone: "Telefone do indicado",
        referredPhonePlaceholder: "(27)99999-9999",
        instagramOrSite: "Instagram ou Site  (opcional)",
        instagramOrSitePlaceholder: "Caso tenha",
        talkedAbout: "Já conversou com o indicado sobre a Turbo?",
        talkedAboutPlaceholder: "Selecione a opção..",
        yes: "Sim",
        no: "Não",
        yourName: "Seu nome completo",
        yourNamePlaceholder: "O seu nome completo",
        yourWhatsapp: "Seu WhatsApp",
        yourWhatsappPlaceholder: "(27)99999-9999",
        pixKey: "Chave PIX",
        pixKeyPlaceholder: "CPF, e-mail, telefone ou aleatória",
        comment: "Comentário adicional",
        commentPlaceholder: "Conte um pouco sobre a indicação",
      },
      submit: "Enviar indicação",
      submitting: "Enviando...",
      success: "Obrigado pela indicação!",
      error: "Oops! Something went wrong while submitting the form.",
      required: "Campo obrigatório",
      invalidPhone: "Telefone inválido",
    },
    how: {
      title: "Como funciona?",
      subtitle: "Parece simples, e realmente é. Esse é o passo a passo:",
      ctaPrimary: "Realizar indicação agora",
      ctaSecondary: "Verificar regras",
      steps: [
        {
          number: "01",
          title: "Encontre uma boa oportunidade",
          text: "Descubra alguma empresa que possa se beneficiar de algum dos serviços prestados pela Turbo, como:",
          list: [
            "Aceleração (tráfego pago);",
            "Postagens para redes sociais;",
            "Criação de site institucional;",
            "Criação de e-commerce;",
            "Criação de identidade visual.",
          ],
        },
        {
          number: "02",
          title: "Levante a bola",
          text: "Mostre ao empreendedor (ou colaborador) em questão que a Turbo pode ser uma excelente parceira para atender às necessidades dele.",
          attentionLabel: "⚠️ Atenção:",
          attention:
            "Navegando em nosso site, você pode conhecer mais a fundo sobre nossos serviços, além de descobrir alguns ótimos argumentos de vendas.",
        },
        {
          number: "03",
          title: "Alinhe expectativas",
          text: "Deixe claro para o empreendedor (ou colaborador) em questão que um especialista da Turbo irá entrar em contato com ele(a), para entender mais a fundo sobre a demanda e explicar, em mais detalhes, como trabalhamos.",
        },
        {
          number: "04",
          title: "Realize a indicação através desta página",
          text: "Toque no botão e preencha os campos de um formulário curtinho.",
        },
        {
          number: "05",
          title: "Receba milão (R$1.000,00) por cliente fechado 🤝",
          text: "Você receberá mil reais a cada indicação fechada (assinatura do primeiro contrato). E pode indicar quantas vezes quiser!",
        },
      ],
    },
    footer: {
      copyright: "Turbo Partners 2024 - Todos os direitos reservados",
      madeWith: "Feito com",
      madeWithSuffix: "pela Turbo",
    },
  },
  en: {
    meta: {
      title: "Refer and Earn | Turbo Partners",
      description:
        "Refer companies to Turbo Partners and earn R$1,000 for every closed client.",
    },
    hero: {
      badge: "REFER AND EARN",
      titleLine1: "Earn R$1,000 for every",
      titleAccent: "referral to Turbo",
      subtitle: "Learn how our referral program works",
      ctaPrimary: "Submit a referral now",
      ctaSecondary: "Check the rules",
    },
    form: {
      title: "Submit your referral",
      subtitle: "Fill out the fields below and our team will get in touch.",
      fields: {
        companyName: "Referred company name",
        companyNamePlaceholder: "Referred company name",
        contactPerson: "Company contact person",
        contactPersonPlaceholder: "Referred company contact",
        referredPhone: "Referred person's phone",
        referredPhonePlaceholder: "+1 555 555 5555",
        instagramOrSite: "Instagram or website  (optional)",
        instagramOrSitePlaceholder: "If available",
        talkedAbout: "Have you already talked to them about Turbo?",
        talkedAboutPlaceholder: "Select an option..",
        yes: "Yes",
        no: "No",
        yourName: "Your full name",
        yourNamePlaceholder: "Your full name",
        yourWhatsapp: "Your WhatsApp",
        yourWhatsappPlaceholder: "+1 555 555 5555",
        pixKey: "PIX key",
        pixKeyPlaceholder: "CPF, email, phone or random key",
        comment: "Additional comment",
        commentPlaceholder: "Tell us a bit about the referral",
      },
      submit: "Send referral",
      submitting: "Sending...",
      success: "Thank you for your referral!",
      error: "Oops! Something went wrong while submitting the form.",
      required: "Required field",
      invalidPhone: "Invalid phone number",
    },
    how: {
      title: "How does it work?",
      subtitle: "It's simple — and it really is. Here's the step-by-step:",
      ctaPrimary: "Submit a referral now",
      ctaSecondary: "Check the rules",
      steps: [
        {
          number: "01",
          title: "Find a good opportunity",
          text: "Find a company that could benefit from one of Turbo's services, such as:",
          list: [
            "Paid traffic acceleration;",
            "Social media posts;",
            "Institutional website creation;",
            "E-commerce creation;",
            "Visual identity creation.",
          ],
        },
        {
          number: "02",
          title: "Start the conversation",
          text: "Show the business owner (or team member) that Turbo can be a great partner to support their needs.",
          attentionLabel: "⚠️ Heads up:",
          attention:
            "By browsing our website, you can learn more about our services and find strong sales arguments.",
        },
        {
          number: "03",
          title: "Align expectations",
          text: "Make it clear to the business owner (or team member) that a Turbo specialist will reach out to better understand their needs and explain, in more detail, how we work.",
        },
        {
          number: "04",
          title: "Submit the referral through this page",
          text: "Click the button and fill out a short form.",
        },
        {
          number: "05",
          title: "Receive R$1,000 for every closed client 🤝",
          text: "You will receive one thousand reais for every closed referral (after the first contract is signed). You can refer as many companies as you want!",
        },
      ],
    },
    footer: {
      copyright: "Turbo Partners 2024 - All rights reserved",
      madeWith: "Made with",
      madeWithSuffix: "by Turbo",
    },
  },
} as const;

export type ReferralContent = (typeof referralContent)[Locale];
