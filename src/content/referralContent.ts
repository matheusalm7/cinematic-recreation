export type Locale = "pt" | "en";

export const referralContent = {
  pt: {
    meta: {
      title: "Indique e Ganhe | Turbo Partners",
      description:
        "Indique empresas para a Turbo Partners e ganhe R$1.000 por cada cliente fechado.",
    },
    hero: {
      badge: "INDIQUE E GANHE",
      title: "Ganhe R$1.000 por cada indicação para a Turbo",
      subtitle: "Conheça agora como funciona o nosso programa de indicações",
      ctaPrimary: "Realizar indicação agora",
      ctaSecondary: "Verificar regras",
    },
    form: {
      title: "Faça sua indicação",
      subtitle: "Preencha os dados abaixo e nossa equipe entrará em contato.",
      fields: {
        companyName: "Nome da empresa indicada",
        contactPerson: "Pessoa de contato da empresa",
        referredPhone: "Telefone do indicado",
        instagramOrSite: "Instagram ou site (opcional)",
        talkedAbout: "Já conversou com o indicado sobre a Turbo?",
        yes: "Sim",
        no: "Não",
        yourName: "Seu nome completo",
        yourWhatsapp: "Seu WhatsApp",
        pixKey: "Chave PIX",
        comment: "Comentário adicional",
      },
      submit: "Enviar indicação",
      submitting: "Enviando...",
      success: "Obrigado pela indicação!",
      error: "Ocorreu um erro ao enviar o formulário. Tente novamente.",
      required: "Campo obrigatório",
      invalidPhone: "Telefone inválido",
    },
    how: {
      title: "Como funciona?",
      subtitle: "Parece simples, e realmente é. Esse é o passo a passo:",
      steps: [
        {
          number: "01",
          title: "Encontre uma boa oportunidade",
          text: "Descubra alguma empresa que possa se beneficiar de algum dos serviços prestados pela Turbo, como:",
          list: [
            "Aceleração com tráfego pago",
            "Postagens para redes sociais",
            "Criação de site institucional",
            "Criação de e-commerce",
            "Criação de identidade visual",
          ],
        },
        {
          number: "02",
          title: "Levante a bola",
          text: "Mostre ao empreendedor ou colaborador que a Turbo pode ser uma excelente parceira para atender às necessidades dele.",
          attention:
            "Navegando em nosso site, você pode conhecer mais a fundo sobre nossos serviços, além de descobrir ótimos argumentos de vendas.",
        },
        {
          number: "03",
          title: "Alinhe expectativas",
          text: "Deixe claro que um especialista da Turbo irá entrar em contato para entender a demanda e explicar melhor como trabalhamos.",
        },
        {
          number: "04",
          title: "Realize a indicação através desta página",
          text: "Toque no botão e preencha os campos de um formulário curtinho.",
        },
        {
          number: "05",
          title: "Receba R$1.000 por cliente fechado",
          text: "Você receberá mil reais a cada indicação fechada, após a assinatura do primeiro contrato. Pode indicar quantas vezes quiser.",
        },
      ],
    },
    footer: "Turbo Partners 2024 - Todos os direitos reservados",
    rulesLabel: "Regras",
  },
  en: {
    meta: {
      title: "Refer and Earn | Turbo Partners",
      description:
        "Refer companies to Turbo Partners and earn R$1,000 for every closed client.",
    },
    hero: {
      badge: "REFER AND EARN",
      title: "Earn R$1,000 for every referral to Turbo",
      subtitle: "Learn how our referral program works",
      ctaPrimary: "Submit a referral now",
      ctaSecondary: "Check the rules",
    },
    form: {
      title: "Submit your referral",
      subtitle: "Fill out the fields below and our team will get in touch.",
      fields: {
        companyName: "Referred company name",
        contactPerson: "Company contact person",
        referredPhone: "Referred person's phone number",
        instagramOrSite: "Instagram or website (optional)",
        talkedAbout: "Have you already talked to them about Turbo?",
        yes: "Yes",
        no: "No",
        yourName: "Your full name",
        yourWhatsapp: "Your WhatsApp",
        pixKey: "PIX key",
        comment: "Additional comment",
      },
      submit: "Send referral",
      submitting: "Sending...",
      success: "Thank you for your referral!",
      error: "Something went wrong while submitting the form. Please try again.",
      required: "Required field",
      invalidPhone: "Invalid phone number",
    },
    how: {
      title: "How does it work?",
      subtitle: "It's simple — and it really is. Here's the step-by-step process:",
      steps: [
        {
          number: "01",
          title: "Find a good opportunity",
          text: "Find a company that could benefit from one of Turbo's services, such as:",
          list: [
            "Paid traffic acceleration",
            "Social media posts",
            "Institutional website creation",
            "E-commerce creation",
            "Visual identity creation",
          ],
        },
        {
          number: "02",
          title: "Start the conversation",
          text: "Show the business owner or team member that Turbo can be a great partner to support their needs.",
          attention:
            "By browsing our website, you can learn more about our services and find strong sales arguments.",
        },
        {
          number: "03",
          title: "Align expectations",
          text: "Make it clear that a Turbo specialist will contact them to better understand their needs and explain how we work.",
        },
        {
          number: "04",
          title: "Submit the referral through this page",
          text: "Click the button and fill out a short form.",
        },
        {
          number: "05",
          title: "Receive R$1,000 for each closed client",
          text: "You will receive one thousand reais for every referral that becomes a client after the first contract is signed. You can refer as many companies as you want.",
        },
      ],
    },
    footer: "Turbo Partners 2024 - All rights reserved",
    rulesLabel: "Rules",
  },
} as const;

export type ReferralContent = (typeof referralContent)[Locale];
