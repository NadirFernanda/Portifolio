import type { Language } from "@/i18n/translations";

export interface Testimonial {
  id: string;
  quotes: Record<Language, string>;
  name: string;
  role: Record<Language, string>;
  company: string;
  project: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "fernando-maia",
    quotes: {
      en: "Fernanda was one of our standout students, and she came back to prove it — she built the institutional website and the billing system for ISPBié from scratch. Clean delivery, no supervision needed. That is the kind of engineer we are proud to say studied here.",
      pt: "A Fernanda foi uma das nossas melhores estudantes, e voltou para o provar — construiu o site institucional e o sistema de facturação do ISPBié de raiz. Entrega impecável, sem necessidade de supervisão. É exactamente esse o tipo de engenheira de que nos orgulhamos de dizer que estudou aqui.",
      fr: "Fernanda a été l'une de nos meilleures étudiantes, et elle est revenue le prouver — elle a construit le site institutionnel et le système de facturation de l'ISPBié from scratch. Livraison impeccable, sans supervision. C'est exactement le type d'ingénieure dont nous sommes fiers de dire qu'elle a étudié ici.",
    },
    name: "Fernando Maia",
    role: {
      en: "President",
      pt: "Presidente",
      fr: "Président",
    },
    company: "Instituto Superior Politécnico do Bié",
    project: "ISP BIE · ISP BIE Billing System",
    initials: "FM",
  },
  {
    id: "rui-texa",
    quotes: {
      en: "I discovered Fernanda through her content online. The more I watched, the more certain I became that she was the right person. Today, looking at everything she built for AngolWifi — the website, the online shop, the management system — I know hiring her was the best decision I made.",
      pt: "Descobri a Fernanda através do conteúdo dela online. Quanto mais via, mais a certeza crescia de que era a pessoa certa. Hoje, a olhar para tudo o que construiu para a AngolWifi — o site, a loja online, o sistema de gestão — sei que contratá-la foi a melhor decisão que tomei.",
      fr: "J'ai découvert Fernanda à travers son contenu en ligne. Plus je regardais, plus j'étais certain qu'elle était la bonne personne. Aujourd'hui, en voyant tout ce qu'elle a construit pour AngolWifi — le site, la boutique en ligne, le système de gestion — je sais que la recruter a été la meilleure décision que j'aie prise.",
    },
    name: "Rui Texa",
    role: {
      en: "Founder & CEO",
      pt: "Fundador & CEO",
      fr: "Fondateur & CEO",
    },
    company: "AngolWifi",
    project: "AngolWifi · AngolWifi Management System",
    initials: "RT",
  },
  {
    id: "felix-gaspar",
    quotes: {
      en: "Building a platform that handles healthcare professionals, contracts, and payments is not simple. Fernanda understood the complexity, asked the right questions, and delivered a system that is live and working every day. She owns the full stack — and that is rare.",
      pt: "Construir uma plataforma que gere profissionais de saúde, contratos e pagamentos não é simples. A Fernanda entendeu a complexidade, fez as perguntas certas e entregou um sistema que está em produção e a funcionar todos os dias. Ela domina o stack completo — e isso é raro.",
      fr: "Construire une plateforme qui gère des professionnels de santé, des contrats et des paiements n'est pas simple. Fernanda a compris la complexité, posé les bonnes questions et livré un système qui tourne en production tous les jours. Elle maîtrise le stack complet — et c'est rare.",
    },
    name: "Dr. Félix Gaspar",
    role: {
      en: "Co-founder",
      pt: "Co-fundador",
      fr: "Co-fondateur",
    },
    company: "MedFreela",
    project: "MedFreela",
    initials: "FG",
  },
];
