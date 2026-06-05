export type Experience = {
  role: string;
  company: string;
  type?: string;
  period: string;
  duration?: string;
  location?: string;
  workMode?: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    role: "Developer Engineer",
    company: "Integrasi Logistik Cipta Solusi",
    type: "Full-time",
    period: "Jul 2024 - Present",
    location: "Surabaya, East Java, Indonesia",
    workMode: "On-site",
    responsibilities: [
      "Developed and maintained the P-Fuel application, crucial for daily operations at Integrasi Logistik Cipta Solusi.",
      "Integrated P-Fuel with SAP to ensure accurate financial and inventory data synchronization.",
      "Streamlined internal processes by connecting P-Fuel with Pelindo E-Office, enhancing administrative efficiency.",
      "Actively participated in APBS and IHUB Pelindo projects, ensuring smooth data flow between systems."
    ]
  },
  {
    role: "Senior Programmer",
    company: "CV Prima Cipta Teknologi",
    period: "Jan 2018 - Jul 2024",
    duration: "6 yrs 7 mos",
    responsibilities: [
      "Managed the SIAKAD project, enhancing system efficiency for universities across Indonesia.",
      "Analyzed institutional needs to guide the development team in creating tailored solutions.",
      "Conducted thorough reviews of existing systems to identify areas for improvement.",
      "Engaged in research and technology innovation to align the system with user requirements."
    ]
  },
  {
    role: "Junior Programmer",
    company: "CV Prima Cipta Teknologi",
    period: "Jul 2015 - Jan 2018",
    duration: "2 yrs 7 mos",
    responsibilities: [
      "Developed and maintained the SIAKAD project, enhancing system performance and user experience.",
      "Managed databases and conducted thorough issue analysis, translating findings into effective system designs.",
      "Implemented regular system updates and bug fixes, ensuring seamless operation and user satisfaction."
    ]
  }
];
