export type Experience = {
  role: string;
  company: string;
  type?: string;
  period: string;
  duration?: string;
  location?: {
    en: string;
    id: string;
  };
  workMode?: string;
  responsibilities: {
    en: string[];
    id: string[];
  };
};

export const experiences: Experience[] = [
  {
    role: "Developer Engineer",
    company: "Integrasi Logistik Cipta Solusi",
    type: "Full-time",
    period: "Jul 2024 - Present",
    location: {
      en: "Surabaya, East Java, Indonesia",
      id: "Surabaya, Jawa Timur, Indonesia"
    },
    workMode: "On-site",
    responsibilities: {
      en: [
        "Developed and maintained the P-Fuel application, crucial for daily operations at Integrasi Logistik Cipta Solusi.",
        "Integrated P-Fuel with SAP to ensure accurate financial and inventory data synchronization.",
        "Streamlined internal processes by connecting P-Fuel with Pelindo E-Office, enhancing administrative efficiency.",
        "Actively participated in APBS and IHUB Pelindo projects, ensuring smooth data flow between systems."
      ],
      id: [
        "Mengembangkan dan merawat aplikasi P-Fuel yang menjadi bagian penting dalam operasional harian Integrasi Logistik Cipta Solusi.",
        "Mengintegrasikan P-Fuel dengan SAP untuk memastikan sinkronisasi data keuangan dan inventori berjalan akurat.",
        "Menyederhanakan proses internal melalui integrasi P-Fuel dengan Pelindo E-Office untuk meningkatkan efisiensi administrasi.",
        "Berpartisipasi aktif dalam proyek APBS dan IHUB Pelindo untuk memastikan aliran data antar sistem berjalan lancar."
      ]
    }
  },
  {
    role: "Senior Programmer",
    company: "CV Prima Cipta Teknologi",
    period: "Jan 2018 - Jul 2024",
    duration: "6 yrs 7 mos",
    location: {
      en: "Malang, East Java, Indonesia",
      id: "Malang, Jawa Timur, Indonesia"
    },
    responsibilities: {
      en: [
        "Managed the SIAKAD project, enhancing system efficiency for universities across Indonesia.",
        "Analyzed institutional needs to guide the development team in creating tailored solutions.",
        "Conducted thorough reviews of existing systems to identify areas for improvement.",
        "Engaged in research and technology innovation to align the system with user requirements."
      ],
      id: [
        "Mengelola proyek SIAKAD untuk meningkatkan efisiensi sistem bagi perguruan tinggi di Indonesia.",
        "Menganalisis kebutuhan institusi sebagai acuan tim pengembang dalam membuat solusi yang sesuai.",
        "Melakukan evaluasi menyeluruh terhadap sistem yang sudah berjalan untuk menemukan area perbaikan.",
        "Melakukan riset dan inovasi teknologi agar sistem tetap selaras dengan kebutuhan pengguna."
      ]
    }
  },
  {
    role: "Junior Programmer",
    company: "CV Prima Cipta Teknologi",
    period: "Jul 2015 - Jan 2018",
    duration: "2 yrs 7 mos",
    location: {
      en: "Malang, East Java, Indonesia",
      id: "Malang, Jawa Timur, Indonesia"
    },
    responsibilities: {
      en: [
        "Developed and maintained the SIAKAD project, enhancing system performance and user experience.",
        "Managed databases and conducted thorough issue analysis, translating findings into effective system designs.",
        "Implemented regular system updates and bug fixes, ensuring seamless operation and user satisfaction."
      ],
      id: [
        "Mengembangkan dan merawat proyek SIAKAD untuk meningkatkan performa sistem dan pengalaman pengguna.",
        "Mengelola database serta melakukan analisis isu secara menyeluruh untuk diterjemahkan menjadi rancangan sistem yang efektif.",
        "Melakukan pembaruan sistem dan perbaikan bug secara berkala agar operasional tetap berjalan lancar dan pengguna puas."
      ]
    }
  }
];
