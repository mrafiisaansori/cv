export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  techStack: string[];
  role: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "pfuel",
    title: "P-Fuel / Fuel Management System",
    category: "Enterprise Web Application",
    description:
      "Fuel management system for online fuel request submission, stock distribution, SAP integration, usage analytics dashboard, and real-time fueling realization via IoT integration.",
    image: "/projects/pfuel.png",
    techStack: ["CodeIgniter", "PHP", "PostgreSQL", "JavaScript", "Bootstrap", "SAP Integration"],
    role: "Developer Engineer / Maintainer",
    features: ["Online fuel request", "Stock distribution", "SAP synchronization", "Usage analytics", "IoT fueling realization"]
  },
  {
    slug: "apbs",
    title: "APBS Integrated Service",
    category: "Enterprise Integration System",
    description:
      "Integrated service system for transaction request submission, multi-level request approval workflow, SAP-integrated billing, user access management, and cross-system integration with other Pelindo applications.",
    image: "/projects/apbs.png",
    techStack: [".NET Core", "Oracle", "JavaScript", "Tailwind CSS"],
    role: "Developer Engineer",
    features: ["Transaction request", "Approval workflow", "SAP-integrated billing", "User access management", "Cross-system integration"]
  },
  {
    slug: "company-profile-pelindo",
    title: "Company Profile - Pelindo Sinergi Lokaseva",
    category: "Company Profile Web Application",
    description:
      "Corporate profile website containing company information, services, investor information, facilities, area coverage, subsidiaries, and public information.",
    image: "/projects/company-profile-pelindo.png",
    techStack: ["React.js", "PostgreSQL"],
    role: "Maintainer",
    features: ["Company information", "Services catalog", "Investor information", "Facilities", "Public information"]
  },
  {
    slug: "linkatalog",
    title: "Linkatalog.id - Online Catalog with WhatsApp Checkout",
    category: "SaaS / Online Catalog",
    description:
      "Online catalog platform for products and services. Users can share one catalog link, customers can browse products, add items to cart, and checkout through WhatsApp.",
    image: "/projects/linkatalog.png",
    techStack: ["Next.js", "Tailwind CSS"],
    role: "Full Stack Developer",
    features: ["Shareable catalog link", "Product browsing", "Cart flow", "WhatsApp checkout", "Responsive storefront"]
  },
  {
    slug: "clinic-management",
    title: "Clinic Management System",
    category: "Healthcare Web Application",
    description:
      "Clinic management system with patient registration, digital queue, electronic medical records, BPJS API integration, pharmacy management, billing, financial module, dashboard, and reporting.",
    image: "/projects/clinic-management.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: ["Patient registration", "Digital queue", "Medical records", "BPJS API integration", "Billing and reporting"]
  },
  {
    slug: "pos",
    title: "Point of Sales System",
    category: "POS Web Application",
    description:
      "Point of Sales application for sales processing, inventory management, customer management, reporting, analytics, and user access control.",
    image: "/projects/pos.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: ["Sales processing", "Inventory management", "Customer management", "Reporting", "User access control"]
  },
  {
    slug: "alumni-portal",
    title: "Alumni Portal",
    category: "Alumni Information System",
    description:
      "Alumni portal for registration form, data management, WhatsApp gateway integration, login activity, reporting, and alumni mapping.",
    image: "/projects/alumni-portal.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: ["Registration form", "Data management", "WhatsApp gateway", "Login activity", "Alumni mapping"]
  },
  {
    slug: "financial-integration",
    title: "Financial Integration System",
    category: "Financial Management System",
    description:
      "Financial integration system with budget planning module, approval workflow, fund disbursement tracking, realization, payment management, and reporting system.",
    image: "/projects/financial-integration.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: ["Budget planning", "Approval workflow", "Disbursement tracking", "Payment management", "Financial reporting"]
  },
  {
    slug: "innovation-event",
    title: "Innovation Event Web Platform",
    category: "Event Management System",
    description:
      "Web platform for innovation event management including participant registration, initial screening, reviewer assignment, innovation assessment, and result announcement.",
    image: "/projects/innovation-event.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: ["Participant registration", "Initial screening", "Reviewer assignment", "Assessment workflow", "Result announcement"]
  },
  {
    slug: "open-recruitment",
    title: "Open Recruitment Web Portal",
    category: "Recruitment Management System",
    description:
      "Open recruitment portal for online registration, document upload, admin verification panel, selection stage management, and email notification system.",
    image: "/projects/open-recruitment.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: ["Online registration", "Document upload", "Admin verification", "Selection stages", "Email notification"]
  },
  {
    slug: "government-registration",
    title: "Registration Form System for National Unity and Politics Agency",
    category: "Government Web Application",
    description:
      "Registration information system for public organization and political party administration, document submission, verification workflow, and responsive public access.",
    image: "/projects/government-registration.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: ["Public registration", "Document submission", "Verification workflow", "Responsive access", "Administrative reporting"]
  }
];
