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
        "Building scalable web systems, REST APIs, and Linux infrastructure — from architecture to production deploy.",
      getInTouch: "Get in Touch",
      seeMyWork: "See My Work",
      scroll: "scroll",
    },
    person: {
      title: "Software Engineer",
      subtitle: "Full Stack Developer · Systems Architect",
      bio: "Software engineer with 4+ years of experience building and shipping production-grade web systems. I specialize in full-stack development, scalable architecture, and Linux infrastructure — from writing the first line of code to configuring Nginx, deploying on VPS, and keeping systems running in production.\n\nI've built platforms in healthcare, connectivity, and institutional sectors, always owning the full delivery: backend APIs, frontend interfaces, database design, server configuration, and deploy. I work in English and take on remote projects globally.",
    },
    about: {
      label: "About",
      title: "Who I Am",
      description: "A software engineer who ships — from the first commit to the live server.",
      statsYearsExp: "Years of Experience",
      statsProjects: "Projects in Production",
      statsServers: "Servers Deployed",
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
      title: "Let's Work Together",
      description: "Open to remote opportunities, freelance projects, and technical collaborations.",
      availability:
        "Available for full-time remote roles, part-time contracts, and freelance projects. Timezone UTC+1 · Accepts USD, EUR, BRL and AOA.",
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
        "Desenvolvendo sistemas web escaláveis, APIs REST e infraestrutura Linux — da arquitetura ao deploy em produção.",
      getInTouch: "Entrar em Contato",
      seeMyWork: "Ver Meu Trabalho",
      scroll: "rolar",
    },
    person: {
      title: "Engenheira de Software",
      subtitle: "Desenvolvedora Full Stack · Arquiteta de Sistemas",
      bio: "Engenheira de software com mais de 4 anos de experiência desenvolvendo e entregando sistemas web de nível produção. Especializo-me em desenvolvimento full-stack, arquitetura escalável e infraestrutura Linux — desde a escrita da primeira linha de código até a configuração do Nginx, deploy em VPS e manutenção dos sistemas em produção.\n\nDesenvolvi plataformas nos setores de saúde, conectividade e institucional, sempre responsável pela entrega completa: APIs backend, interfaces frontend, design de banco de dados, configuração de servidor e deploy. Trabalho em inglês e aceito projetos remotos globalmente.",
    },
    about: {
      label: "Sobre",
      title: "Quem Sou",
      description: "Uma engenheira de software que entrega — do primeiro commit ao servidor em produção.",
      statsYearsExp: "Anos de Experiência",
      statsProjects: "Projetos em Produção",
      statsServers: "Servidores Implantados",
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
      title: "Vamos Trabalhar Juntos",
      description: "Aberta a oportunidades remotas, projetos freelance e colaborações técnicas.",
      availability:
        "Disponível para cargos remotos em tempo integral, contratos de meio período e projetos freelance. Fuso horário UTC+1 · Aceita USD, EUR, BRL e AOA.",
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
        "Développement de systèmes web scalables, APIs REST et infrastructure Linux — de l'architecture au déploiement en production.",
      getInTouch: "Me contacter",
      seeMyWork: "Voir mes projets",
      scroll: "défiler",
    },
    person: {
      title: "Ingénieure logicielle",
      subtitle: "Développeuse Full Stack · Architecte systèmes",
      bio: "Ingénieure logicielle avec plus de 4 ans d'expérience dans le développement et la mise en production de systèmes web. Je me spécialise dans le développement full-stack, l'architecture scalable et l'infrastructure Linux — de la première ligne de code à la configuration Nginx, le déploiement sur VPS et la maintenance des systèmes en production.\n\nJ'ai développé des plateformes dans les secteurs de la santé, de la connectivité et institutionnel, en gérant toujours la livraison complète : APIs backend, interfaces frontend, conception de base de données, configuration serveur et déploiement. Je travaille en anglais et accepte des projets à distance dans le monde entier.",
    },
    about: {
      label: "À propos",
      title: "Qui je suis",
      description: "Une ingénieure logicielle qui livre — du premier commit au serveur en production.",
      statsYearsExp: "Années d'expérience",
      statsProjects: "Projets en production",
      statsServers: "Serveurs déployés",
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
      title: "Travaillons ensemble",
      description: "Ouverte aux opportunités à distance, projets freelance et collaborations techniques.",
      availability:
        "Disponible pour des postes à distance à temps plein, des contrats à temps partiel et des projets freelance. Fuseau horaire UTC+1 · Accepte USD, EUR, BRL et AOA.",
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
