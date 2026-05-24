import type { ContactLink } from "@/types";

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    href: "mailto:contact@fernanda-goncalves.com",
    type: "email",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fernanda-gon%C3%A7alves-70892a350/",
    type: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/NadirFernanda",
    type: "github",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/244938115567",
    type: "whatsapp",
  },
  {
    id: "cv",
    label: "Download CV",
    href: "/cv/fernanda-goncalves-cv.pdf",
    type: "cv",
  },
];
