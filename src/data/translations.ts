export type Language = "en" | "id";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      portfolio: "Portfolio",
      certification: "Certification",
      contact: "Contact"
    },
    hero: {
      badge: "Available for Collaboration",
      role: "Software Engineer",
      tagline: "Experienced Software Engineer Delivering Innovative Solutions Across Diverse Projects",
      description:
        "I build and maintain scalable web applications, enterprise integrations, and data-driven systems for business operations.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      stats: ["8+ Years Experience", "10+ Portfolio Projects", "Enterprise System Integration"],
      cardTitle: "Software Engineer",
      cardText: "Full stack development, enterprise integration, and database-driven systems."
    },
    about: {
      eyebrow: "About Me",
      title: "Reliable enterprise systems with clean, maintainable engineering.",
      paragraphs: [
        "As a Software Engineer at Integrasi Logistik Cipta Solusi, I contribute to the seamless integration of critical systems like P-Fuel with SAP, ensuring accurate synchronization of financial and inventory data. My role emphasizes maintaining system reliability, resolving technical issues, and improving operational efficiency through real-time data accessibility.",
        "With over eight years of experience in software development, I design scalable and efficient systems that meet user needs. My expertise spans system analysis, maintenance, and database management, with a strong focus on practical solutions for enterprise-level projects."
      ],
      highlights: [
        "Full Stack Development",
        "System Integration",
        "Database Management",
        "Enterprise Application",
        "Maintenance & Troubleshooting"
      ],
      cardText: "Integration-ready architecture for production workflows."
    },
    sections: {
      experienceEyebrow: "Career Journey",
      experienceTitle: "Engineering experience across enterprise systems",
      experienceSummary:
        "Enterprise development, system integration, database operations, and long-term application maintenance.",
      skillsEyebrow: "Skills / Tech Stack",
      skillsTitle: "Practical stack for production systems",
      portfolioEyebrow: "Portfolio",
      portfolioTitle: "Selected projects, integration workflows, and product platforms.",
      certificationEyebrow: "Certifications",
      certificationTitle: "Validated learning and professional growth",
      certificationText: "Selected certifications from professional training and technical skill assessments.",
      certificationButton: "View Certifications",
      certificateButton: "View Certificate",
      educationEyebrow: "Education",
      contactEyebrow: "Contact",
      contactTitle: "Let's discuss systems, products, and integration work."
    },
    portfolio: {
      viewDetail: "View Portfolio",
      overview: "Project Overview",
      techStack: "Tech Stack",
      keyFeatures: "Key Features",
      visitWebsite: "Visit Website",
      inactiveUrl: "URL is not active",
      closeNotification: "Close notification",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      close: "Close project detail"
    },
    contact: {
      email: "Email",
      whatsapp: "+62 821-8700-0882"
    },
    footer: {
      copyright: "(c) 2026"
    }
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      experience: "Pengalaman",
      skills: "Keahlian",
      portfolio: "Portfolio",
      certification: "Sertifikasi",
      contact: "Kontak"
    },
    hero: {
      badge: "Terbuka untuk Kolaborasi",
      role: "Software Engineer",
      tagline: "Software Engineer berpengalaman yang membangun solusi inovatif untuk beragam proyek",
      description:
        "Saya membangun dan merawat aplikasi web skalabel, integrasi sistem enterprise, serta sistem berbasis data untuk operasional bisnis.",
      viewProjects: "Lihat Project",
      contactMe: "Hubungi Saya",
      downloadCv: "Unduh CV",
      stats: ["8+ Tahun Pengalaman", "10+ Project Portfolio", "Integrasi Sistem Enterprise"],
      cardTitle: "Software Engineer",
      cardText: "Full stack development, integrasi enterprise, dan sistem berbasis database."
    },
    about: {
      eyebrow: "Tentang Saya",
      title: "Membangun sistem enterprise yang stabil, rapi, dan mudah dirawat.",
      paragraphs: [
        "Sebagai Software Engineer di Integrasi Logistik Cipta Solusi, saya berkontribusi pada integrasi sistem kritikal seperti P-Fuel dengan SAP untuk memastikan sinkronisasi data finansial dan inventori berjalan akurat. Fokus pekerjaan saya mencakup reliabilitas sistem, penyelesaian isu teknis, dan peningkatan efisiensi operasional melalui akses data real-time.",
        "Dengan pengalaman lebih dari delapan tahun di software development, saya terbiasa merancang sistem yang skalabel, efisien, dan sesuai kebutuhan pengguna. Keahlian saya meliputi analisis sistem, maintenance, database management, dan solusi praktis untuk proyek level enterprise."
      ],
      highlights: [
        "Full Stack Development",
        "Integrasi Sistem",
        "Database Management",
        "Aplikasi Enterprise",
        "Maintenance & Troubleshooting"
      ],
      cardText: "Arsitektur siap integrasi untuk kebutuhan operasional production."
    },
    sections: {
      experienceEyebrow: "Perjalanan Karier",
      experienceTitle: "Pengalaman engineering untuk sistem enterprise",
      experienceSummary:
        "Pengembangan aplikasi enterprise, integrasi sistem, operasional database, dan maintenance aplikasi jangka panjang.",
      skillsEyebrow: "Keahlian / Tech Stack",
      skillsTitle: "Stack praktis untuk sistem production",
      portfolioEyebrow: "Portfolio",
      portfolioTitle: "Project pilihan, workflow integrasi, dan platform produk.",
      certificationEyebrow: "Sertifikasi",
      certificationTitle: "Pembelajaran profesional dan validasi kompetensi",
      certificationText: "Sertifikasi pilihan dari pelatihan profesional dan assessment kemampuan teknis.",
      certificationButton: "Lihat Sertifikasi",
      certificateButton: "Lihat Sertifikat",
      educationEyebrow: "Pendidikan",
      contactEyebrow: "Kontak",
      contactTitle: "Mari diskusikan sistem, produk, dan kebutuhan integrasi."
    },
    portfolio: {
      viewDetail: "Lihat Portofolio",
      overview: "Ringkasan Project",
      techStack: "Tech Stack",
      keyFeatures: "Fitur Utama",
      visitWebsite: "Buka Website",
      inactiveUrl: "URL tidak aktif",
      closeNotification: "Tutup notifikasi",
      liveDemo: "Demo Langsung",
      sourceCode: "Kode Sumber",
      close: "Tutup detail project"
    },
    contact: {
      email: "Email",
      whatsapp: "+62 821-8700-0882"
    },
    footer: {
      copyright: "(c) 2026"
    }
  }
} as const;
