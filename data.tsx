import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  SquareTerminal,
  Briefcase,
  Brush,
  GitBranchIcon,
  Inbox,
  Mail,
  PanelsTopLeft,
  Phone,
  UsersRound,
  Wrench,
  Linkedin,
  HomeIcon,
} from "lucide-react";

export const dataAboutMe = [
  {
    id: 1,
    name: "Experiencia",
    icon: <Briefcase />,
    description: "+30 proyectos en diseño",
  },
  {
    id: 2,
    name: "Clientes",
    icon: <UsersRound />,
    description: "Atención comercial",
  },
  {
    id: 3,
    name: "Habilidades",
    icon: <Wrench />,
    description: "Gestión empresarial",
  },
];

export const DATA = {
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      email: {
        name: "Send Email",
        url: "mailto:juanestebanvilladagallego23@gmail.com",
        icon: Mail,
      },
      phone: {
        name: "Call Me",
        url: "tel:+57 3206233559",
        icon: Phone,
      },
    },
  },
};

export const DataLinkedIn = {
  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juan-esteban-villada-gallego-6015552bb/",
    icon: Linkedin,
  },
};

export const dataSlider = [
  {
    id: 1,
    url: "/programar.jpg",
  },
  {
    id: 2,
    url: "/futbol.jpg",
  },
  {
    id: 3,
    url: "/canal.jfif",
  },
];

export const dataExperience = [
  {
    id: 1,
    title: " Diseño Gráfico y Multimedia",
    experience: [
      {
        name: "Adobe Photoshop",
      },
      {
        name: "Adobe Illustrator",
      },
      {
        name: "Corel Draw",
      },
      {
        name: "Diseño de packaging",
      },
      {
        name: "Promoción",
      },
      {
        name: "Publicidad",
      },
    ],
  },
  {
    id: 2,
    title: "Ventas y Atención al Cliente",
    experience: [
      {
        name: "Investigación de mercados",
      },
      {
        name: "Estrategias de ventas",
      },
      {
        name: "Servicio al cliente",
      },
      {
        name: "Negociación ",
      },
      {
        name: "Distribución",
      },
      {
        name: "logística",
      },
    ],
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "ScanOrderly",
    image: "/scanOrderly.png",
    urlDemo: "https://scanviking.netlify.app/",
  },
  {
    id: 2,
    title: "Landing Page ScanOrderly",
    image: "/landinpage.png",
    urlDemo: "https://scan-orderly.vercel.app/",
  },
  {
    id: 3,
    title: "VikingRoom",
    image: "/vikingroom.png",
    urlDemo: "https://viking-room.netlify.app/",
  },
  {
    id: 4,
    title: "Dashboard companies",
    image: "/darhboard.png",
    urlDemo: "https://dashboard-companies-juanescode.netlify.app/",
  },
  {
    id: 5,
    title: "Random password auth",
    image: "/passwordp.png",
    urlDemo:
      "https://password-generate-lzrh2jefp-juanescodes-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Landing Page VikingRoom",
    image: "/vikingroom2.png",
    urlDemo: "https://project-viking.vercel.app/",
  },
];

export const dataServices = [
  {
    id: 1,
    title: "Estrategia Comercial y Ventas",
    icon: <PanelsTopLeft />,
    features: [
      {
        name: "Desarrollo de estrategias de ventas.",
      },
      {
        name: "Análisis de mercado y segmentación de clientes para campañas efectivas.",
      },
      {
        name: "Negociación y gestión de relaciones con clientes y proveedores.",
      },
      {
        name: "Creación de planes comerciales basados en datos y tendencias del sector.",
      },
      {
        name: "Implementación de herramientas CRM para optimizar la atención al cliente.",
      },
      {
        name: "Servicio al cliente con enfoque en fidelización y experiencia de usuario.",
      },
    ],
  },
  {
    id: 2,
    title: "Diseño Gráfico y Publicitario",
    icon: <SquareTerminal />,
    features: [
      {
        name: "Creación de piezas gráficas para impresión y medios digitales.",
      },
      {
        name: "Edición y diseño en Adobe Photoshop, Illustrator y Corel Draw.",
      },
      {
        name: "Desarrollo de material publicitario para marcas y campañas.",
      },
      {
        name: " Diseño de formatos para impresión en gran formato y digitales.",
      },
      {
        name: "Creación de videos publicitarios para redes sociales y anuncios.",
      },
      {
        name: "Identidad visual y branding para empresas y emprendimientos.",
      },
    ],
  },
  {
    id: 3,
    title: "Gestión Empresarial y Marketing",
    icon: <Brush />,
    features: [
      {
        name: "Creación y gestión de estrategias de marketing digital.",
      },
      {
        name: "Manejo de redes sociales para posicionamiento de marcas.",
      },
      {
        name: "Optimización de campañas publicitarias en diferentes plataformas.",
      },
      {
        name: "Desarrollo de proyectos empresariales y emprendimientos.",
      },
      {
        name: "Optimización de procesos comerciales mediante tecnología.",
      },
      {
        name: "Manejo de herramientas ofimáticas como Excel y Google Sheets.",
      },
    ],
  },
];

export const dataContact = [
  {
    id: 1,
    title: "Teléfono",
    subtitle: "+57 3206233559",
    link: "tel:+573206233559",
    icon: <Phone />,
  },
  {
    id: 2,
    title: "Github",
    subtitle: "github.com/juanescode",
    link: "https://github.com/juanescode",
    icon: <GitBranchIcon />,
  },
  {
    id: 3,
    title: "Email",
    subtitle: "juanestebanvilladagallego23@gmail.com",
    link: "mailto:juanestebanvilladagallego23@gmail.com",
    icon: <Inbox />,
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "Universidad libre ",
    description:
      "Soy estudiante de Ingeniería Comercial en la Universidad Libre de Pereira, actualmente cursando sexto semestre. Mi formación académica me ha brindado una base sólida en estrategias de negocio, ventas, marketing, diseño de packaging, y análisis financiero. Me apasiona el mundo empresarial y busco constantemente aplicar mis conocimientos en proyectos que me permitan potenciar la innovación, el diseño publicitario y la gestión comercial.",
    imageUrl: "unilibre.png",
  },
  {
    id: 2,
    name: "Sena",
    description:
      "Centro de Diseño e Innovación Tecnológica Industrial, Risaralda, con formación en el Centro de Diseño e Innovación Multimedia. Durante mi trayectoria académica, adquirí conocimientos y habilidades en diseño gráfico, impresión en gran formato, desarrollo de piezas digitales para redes sociales y producción audiovisual.",
    imageUrl: "/sen.png",
  },
  {
    id: 3,
    name: "Master Publik Publicidad S.A.S",
    description:
      "Lideré el equipo de ventas y diseñadores, asegurando la entrega de soluciones publicitarias innovadoras y de alta calidadm Diseñé material gráfico para campañas publicitarias, impresión en gran formato y piezas digitales adaptadas a las necesidades de los clientes, Brindé asesoramiento personalizado a clientes, optimizando la estrategia visual y comercial de sus marcas, Gestioné la atención al cliente y negociaciones comerciales, fortaleciendo la fidelización y crecimiento de la cartera de clientes.Coordiné la producción y entrega de materiales publicitarios, garantizando el cumplimiento de plazos y estándares de calidad",
    imageUrl: "/viking.jpg",
  },
  {
    id: 4,
    name: "Decathlon | Pereira",
    description:
      "Ofrecí asesoramiento especializado a clientes sobre productos deportivos, asegurando una experiencia de compra personalizada y satisfactoria, gestioné la organización y reposición de inventario, optimizando la presentación y disponibilidad de los productos en tienda, implementé estrategias de venta basadas en las necesidades del cliente, impulsando el crecimiento de las ventas y la fidelización, mantuve altos estándares de servicio al cliente, promoviendo una experiencia de compra dinámica y alineada con la identidad de la marca.",
    imageUrl: "/deca.png",
  },
  {
    id: 5,
    name: "Misshe (Local Comercial de Prendas de Vestir) | Dosquebradas",
    description: "Gestioné el punto de venta, incluyendo inventario, caja y atención al cliente. Desarrollé estrategias de ventas y fidelización, asesoré en la selección de prendas y optimicé la exhibición de productos. Coordiné proveedores y logística para mantener un flujo eficiente de stock. Esta experiencia me permitió fortalecer habilidades en ventas, atención al cliente, diseño gráfico y gestión comercial.",
  imageUrl: "/misshe.jpg",
  }
];
