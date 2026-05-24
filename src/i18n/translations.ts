export type Language = "en" | "pt" | "fr";

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
    hireMe: string;
  };
  hero: {
    available: string;
    tagline: string;
    getInTouch: string;
    seeMyWork: string;
    scroll: string;
  };
  person: {
    title: string;
    subtitle: string;
    bio: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    statsYearsExp: string;
    statsProjects: string;
    statsServers: string;
    highlights: string[];
    whatIDeliver: string;
    availability: string;
    openToWork: string;
    timezone: string;
    contractTypes: string[];
    openTo: string;
    openList: string[];
    notLookingFor: string;
    notLookingList: string[];
    languages: string[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    liveDemo: string;
    privateSystem: string;
    viewDetails: string;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    expert: string;
    advanced: string;
    intermediate: string;
  };
  experience: {
    label: string;
    title: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    availability: string;
    connectDirectly: string;
    sendMessage: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
  };
  projectDetail: {
    back: string;
    theProblem: string;
    keyFeatures: string;
    techStack: string;
    role: string;
    liveDemo: string;
    viewOnGithub: string;
    privateSystem: string;
    prevProject: string;
    nextProject: string;
    otherProjects: string;
    screenshots: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    hero: {
      available: "Available for new opportunities",
      tagline:
        "6 production systems. Full ownership — from database schema and REST API to Linux server config and deploy. One engineer, zero handoffs.",
      getInTouch: "Get in Touch",
      seeMyWork: "See My Work",
      scroll: "scroll",
    },
    person: {
      title: "Software Engineer",
      subtitle: "Full Stack Developer · Systems Architect",
      bio: "6 systems currently running in production — all designed, coded, deployed, and maintained by me. No agency, no team, no outsourcing.\n\nI handle the full stack: REST APIs, frontend interfaces, PostgreSQL schemas, Linux server configuration, Nginx, PM2, and SSL. Healthcare platforms, ISP management systems, institutional websites — I've shipped across all three sectors.\n\nBased in Angola (UTC+1). Available for remote contracts and full-time positions globally.",
    },
    about: {
      label: "About",
      title: "Who I Am",
      description: "A software engineer who ships — from the first commit to the live server.",
      statsYearsExp: "Years Shipping to Production",
      statsProjects: "Live Production Systems",
      statsServers: "Linux Servers Configured",
      highlights: [
        "Full-stack systems from scratch to production",
        "Linux server config, Nginx, PM2, SSL",
        "PostgreSQL schema design and REST APIs",
        "Payment integrations and admin dashboards",
        "English — professional level",
      ],
      whatIDeliver: "What I deliver",
      availability: "Availability",
      openToWork: "Open to work",
      timezone: "UTC+1 · West Africa Time (Angola)",
      contractTypes: ["Full-time", "Part-time", "Freelance / Contract"],
      openTo: "Open to",
      openList: [
        "Fully remote positions",
        "Async-friendly teams",
        "International projects",
        "Long-term contracts",
      ],
      notLookingFor: "Not looking for",
      notLookingList: [
        "On-site only roles",
        "Equity-only compensation",
        "Unpaid trials or test projects",
        "Non-technical roles",
      ],
      languages: ["English", "Portuguese"],
    },
    projects: {
      label: "Work",
      title: "Featured Projects",
      description: "Real systems built and deployed in production — not demos or tutorials.",
      liveDemo: "Live Demo",
      privateSystem: "Private System",
      viewDetails: "View details",
    },
    skills: {
      label: "Stack",
      title: "Technologies",
      description: "Tools I use to design, build, and deploy production systems.",
      expert: "Expert",
      advanced: "Advanced",
      intermediate: "Intermediate",
    },
    experience: {
      label: "Experience",
      title: "Professional Background",
    },
    contact: {
      label: "Contact",
      title: "Available Now — Let's Talk",
      description: "Looking for a full-stack engineer who owns the full delivery? I respond within 24 hours.",
      availability:
        "Open to full-time remote, part-time contracts, and freelance projects. UTC+1 (Angola) · Accepts USD, EUR, BRL and AOA · Response within 24h.",
      connectDirectly: "Connect directly",
      sendMessage: "Send a message",
    },
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      messagePlaceholder: "Tell me about your project or opportunity...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message sent!",
      successMessage: "Thanks for reaching out. I'll get back to you as soon as possible.",
      sendAnother: "Send another message",
    },
    projectDetail: {
      back: "← Back to portfolio",
      theProblem: "The Problem",
      keyFeatures: "Key Features",
      techStack: "Tech Stack",
      role: "Role",
      liveDemo: "Live Demo",
      viewOnGithub: "View on GitHub",
      privateSystem: "Private System",
      prevProject: "Previous project",
      nextProject: "Next project",
      otherProjects: "Other projects",
      screenshots: "Screenshots",
    },
  },

  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      experience: "Experiência",
      contact: "Contato",
      hireMe: "Contratar",
    },
    hero: {
      available: "Disponível para novas oportunidades",
      tagline:
        "6 sistemas em produção. Responsabilidade total — do schema da base de dados e API REST à configuração do servidor Linux e deploy. Uma engenheira, zero entregas parciais.",
      getInTouch: "Entrar em Contato",
      seeMyWork: "Ver Meu Trabalho",
      scroll: "rolar",
    },
    person: {
      title: "Engenheira de Software",
      subtitle: "Desenvolvedora Full Stack · Arquiteta de Sistemas",
      bio: "6 sistemas actualmente em produção — todos concebidos, desenvolvidos, implantados e mantidos por mim. Sem agência, sem equipa, sem outsourcing.\n\nTrato de tudo: APIs REST, interfaces frontend, schemas PostgreSQL, configuração de servidor Linux, Nginx, PM2 e SSL. Plataformas de saúde, sistemas de gestão de ISP, sites institucionais — já entreguei nos três sectores.\n\nBaseada em Angola (UTC+1). Disponível para contratos remotos e posições full-time globalmente.",
    },
    about: {
      label: "Sobre",
      title: "Quem Sou",
      description: "Uma engenheira de software que entrega — do primeiro commit ao servidor em produção.",
      statsYearsExp: "Anos a Entregar em Produção",
      statsProjects: "Sistemas em Produção",
      statsServers: "Servidores Linux Configurados",
      highlights: [
        "Sistemas full-stack do zero à produção",
        "Configuração de servidor Linux, Nginx, PM2, SSL",
        "Design de schema PostgreSQL e APIs REST",
        "Integrações de pagamento e painéis administrativos",
        "Inglês — nível profissional",
      ],
      whatIDeliver: "O que eu entrego",
      availability: "Disponibilidade",
      openToWork: "Disponível para trabalho",
      timezone: "UTC+1 · Hora da África Ocidental (Angola)",
      contractTypes: ["Tempo integral", "Meio período", "Freelance / Contrato"],
      openTo: "Aberta para",
      openList: [
        "Posições totalmente remotas",
        "Equipes com trabalho assíncrono",
        "Projetos internacionais",
        "Contratos de longo prazo",
      ],
      notLookingFor: "Não estou buscando",
      notLookingList: [
        "Apenas presencial",
        "Remuneração apenas em equity",
        "Testes não remunerados",
        "Funções não técnicas",
      ],
      languages: ["Inglês", "Português"],
    },
    projects: {
      label: "Projetos",
      title: "Projetos em Destaque",
      description: "Sistemas reais construídos e implantados em produção — não demos ou tutoriais.",
      liveDemo: "Demo ao Vivo",
      privateSystem: "Sistema Privado",
      viewDetails: "Ver detalhes",
    },
    skills: {
      label: "Stack",
      title: "Tecnologias",
      description: "Ferramentas que uso para projetar, construir e implantar sistemas em produção.",
      expert: "Especialista",
      advanced: "Avançado",
      intermediate: "Intermediário",
    },
    experience: {
      label: "Experiência",
      title: "Histórico Profissional",
    },
    contact: {
      label: "Contato",
      title: "Disponível Agora — Vamos Conversar",
      description: "Precisa de uma engenheira full-stack que entrega o projecto completo? Respondo em até 24 horas.",
      availability:
        "Aberta a full-time remoto, contratos de meio período e freelance. UTC+1 (Angola) · Aceita USD, EUR, BRL e AOA · Resposta em até 24h.",
      connectDirectly: "Conecte diretamente",
      sendMessage: "Enviar uma mensagem",
    },
    form: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      namePlaceholder: "Seu nome",
      messagePlaceholder: "Fale sobre seu projeto ou oportunidade...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      successTitle: "Mensagem enviada!",
      successMessage: "Obrigada pelo contato. Retornarei o mais breve possível.",
      sendAnother: "Enviar outra mensagem",
    },
    projectDetail: {
      back: "← Voltar ao portfólio",
      theProblem: "O Problema",
      keyFeatures: "Principais Funcionalidades",
      techStack: "Tecnologias",
      role: "Função",
      liveDemo: "Demo ao Vivo",
      viewOnGithub: "Ver no GitHub",
      privateSystem: "Sistema Privado",
      prevProject: "Projeto anterior",
      nextProject: "Próximo projeto",
      otherProjects: "Outros projetos",
      screenshots: "Capturas de ecrã",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      experience: "Expérience",
      contact: "Contact",
      hireMe: "M'embaucher",
    },
    hero: {
      available: "Disponible pour de nouvelles opportunités",
      tagline:
        "6 systèmes en production. Responsabilité totale — du schéma de base de données et de l'API REST à la configuration serveur Linux et au déploiement. Une ingénieure, zéro sous-traitance.",
      getInTouch: "Me contacter",
      seeMyWork: "Voir mes projets",
      scroll: "défiler",
    },
    person: {
      title: "Ingénieure logicielle",
      subtitle: "Développeuse Full Stack · Architecte systèmes",
      bio: "6 systèmes actuellement en production — tous conçus, développés, déployés et maintenus par moi. Sans agence, sans équipe, sans externalisation.\n\nJe gère l'intégralité du stack : APIs REST, interfaces frontend, schémas PostgreSQL, configuration serveur Linux, Nginx, PM2 et SSL. Plateformes de santé, systèmes de gestion ISP, sites institutionnels — j'ai livré dans ces trois secteurs.\n\nBasée en Angola (UTC+1). Disponible pour des contrats à distance et des postes à temps plein dans le monde entier.",
    },
    about: {
      label: "À propos",
      title: "Qui je suis",
      description: "Une ingénieure logicielle qui livre — du premier commit au serveur en production.",
      statsYearsExp: "Ans à livrer en production",
      statsProjects: "Systèmes en production",
      statsServers: "Serveurs Linux configurés",
      highlights: [
        "Systèmes full-stack de zéro à la production",
        "Configuration serveur Linux, Nginx, PM2, SSL",
        "Conception de schéma PostgreSQL et APIs REST",
        "Intégrations de paiement et tableaux de bord admin",
        "Anglais — niveau professionnel",
      ],
      whatIDeliver: "Ce que je livre",
      availability: "Disponibilité",
      openToWork: "Ouverte aux opportunités",
      timezone: "UTC+1 · Heure d'Afrique de l'Ouest (Angola)",
      contractTypes: ["Temps plein", "Temps partiel", "Freelance / Contrat"],
      openTo: "Ouverte à",
      openList: [
        "Postes entièrement à distance",
        "Équipes async-friendly",
        "Projets internationaux",
        "Contrats à long terme",
      ],
      notLookingFor: "Pas intéressée par",
      notLookingList: [
        "Postes sur site uniquement",
        "Compensation en equity uniquement",
        "Essais non rémunérés",
        "Rôles non techniques",
      ],
      languages: ["Anglais", "Portugais"],
    },
    projects: {
      label: "Travaux",
      title: "Projets en vedette",
      description: "Systèmes réels construits et déployés en production — pas des démos ou tutoriels.",
      liveDemo: "Démo en direct",
      privateSystem: "Système privé",
      viewDetails: "Voir les détails",
    },
    skills: {
      label: "Stack",
      title: "Technologies",
      description: "Outils que j'utilise pour concevoir, construire et déployer des systèmes en production.",
      expert: "Expert",
      advanced: "Avancé",
      intermediate: "Intermédiaire",
    },
    experience: {
      label: "Expérience",
      title: "Parcours professionnel",
    },
    contact: {
      label: "Contact",
      title: "Disponible maintenant — parlons-en",
      description: "Vous cherchez une ingénieure full-stack qui prend en charge la livraison complète ? Je réponds sous 24 heures.",
      availability:
        "Ouverte aux postes à distance à temps plein, contrats à temps partiel et freelance. UTC+1 (Angola) · Accepte USD, EUR, BRL et AOA · Réponse sous 24h.",
      connectDirectly: "Contacter directement",
      sendMessage: "Envoyer un message",
    },
    form: {
      name: "Nom",
      email: "E-mail",
      message: "Message",
      namePlaceholder: "Votre nom",
      messagePlaceholder: "Parlez-moi de votre projet ou opportunité...",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      successTitle: "Message envoyé !",
      successMessage: "Merci de m'avoir contactée. Je vous répondrai dès que possible.",
      sendAnother: "Envoyer un autre message",
    },
    projectDetail: {
      back: "← Retour au portfolio",
      theProblem: "Le Problème",
      keyFeatures: "Fonctionnalités clés",
      techStack: "Technologies",
      role: "Rôle",
      liveDemo: "Démo en direct",
      viewOnGithub: "Voir sur GitHub",
      privateSystem: "Système privé",
      prevProject: "Projet précédent",
      nextProject: "Projet suivant",
      otherProjects: "Autres projets",
      screenshots: "Captures d'écran",
    },
  },
};
