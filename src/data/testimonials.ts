export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "fernando-maia",
    quote:
      "Fernanda was one of our standout students, and she came back to prove it — she built the institutional website and the billing system for ISPBié from scratch. Clean delivery, no supervision needed. That is the kind of engineer we are proud to say studied here.",
    name: "Fernando Maia",
    role: "President",
    company: "Instituto Superior Politécnico do Bié",
    project: "ISP BIE · ISP BIE Billing System",
    initials: "FM",
  },
  {
    id: "rui-texa",
    quote:
      "I discovered Fernanda through her content online. The more I watched, the more certain I became that she was the right person. Today, looking at everything she built for AngolWifi — the website, the online shop, the management system — I know hiring her was the best decision I made.",
    name: "Rui Texa",
    role: "Founder & CEO",
    company: "AngolWifi",
    project: "AngolWifi · AngolWifi Management System",
    initials: "RT",
  },
  {
    id: "felix-gaspar",
    quote:
      "Building a platform that handles healthcare professionals, contracts, and payments is not simple. Fernanda understood the complexity, asked the right questions, and delivered a system that is live and working every day. She owns the full stack — and that is rare.",
    name: "Dr. Félix Gaspar",
    role: "Co-founder",
    company: "MedFreela",
    project: "MedFreela",
    initials: "FG",
  },
];
