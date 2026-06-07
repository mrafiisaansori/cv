export type Project = {
  slug: string;
  title: string;
  category: string;
  description: {
    en: string;
    id: string;
  };
  image: string;
  techStack: string[];
  role: string;
  features: {
    en: string[];
    id: string[];
  };
  demo?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "pfuel",
    title: "P-Fuel / Fuel Management System",
    category: "Enterprise Web Application",
    description: {
      en: "Fuel management system for online fuel request submission, stock distribution, SAP integration, usage analytics dashboard, and real-time fueling realization via IoT integration.",
      id: "Sistem manajemen bahan bakar untuk pengajuan permintaan BBM online, distribusi stok, integrasi SAP, dashboard analitik penggunaan, dan realisasi pengisian BBM real-time melalui integrasi IoT."
    },
    image: "/projects/pfuel.png",
    techStack: ["CodeIgniter", "PHP", "PostgreSQL", "JavaScript", "Bootstrap", "SAP Integration"],
    role: "Developer Engineer / Maintainer",
    features: {
      en: ["Online fuel request", "Stock distribution", "SAP synchronization", "Usage analytics", "IoT fueling realization"],
      id: ["Permintaan BBM online", "Distribusi stok", "Sinkronisasi SAP", "Analitik penggunaan", "Realisasi pengisian IoT"]
    }
  },
  {
    slug: "apbs",
    title: "APBS Integrated Service",
    category: "Enterprise Integration System",
    description: {
      en: "Integrated service system for transaction request submission, multi-level request approval workflow, SAP-integrated billing, user access management, and cross-system integration with other Pelindo applications.",
      id: "Sistem layanan terintegrasi untuk pengajuan permintaan transaksi, alur persetujuan berjenjang, penagihan terintegrasi SAP, manajemen akses pengguna, dan integrasi lintas sistem dengan aplikasi Pelindo lainnya."
    },
    image: "/projects/apbs.png",
    techStack: [".NET Core", "Oracle", "JavaScript", "Tailwind CSS"],
    role: "Developer Engineer",
    features: {
      en: ["Transaction request", "Approval workflow", "SAP-integrated billing", "User access management", "Cross-system integration"],
      id: ["Permintaan transaksi", "Alur persetujuan", "Penagihan terintegrasi SAP", "Manajemen akses pengguna", "Integrasi lintas sistem"]
    }
  },
  {
    slug: "company-profile-pelindo",
    title: "Company Profile - Pelindo Sinergi Lokaseva",
    category: "Company Profile Web Application",
    description: {
      en: "Corporate profile website containing company information, services, investor information, facilities, area coverage, subsidiaries, and public information.",
      id: "Website company profile yang memuat informasi perusahaan, layanan, informasi investor, fasilitas, cakupan wilayah, anak perusahaan, dan informasi publik."
    },
    image: "/projects/company-profile-pelindo.png",
    techStack: ["React.js", "PostgreSQL"],
    role: "Maintainer",
    features: {
      en: ["Company information", "Services catalog", "Investor information", "Facilities", "Public information"],
      id: ["Informasi perusahaan", "Katalog layanan", "Informasi investor", "Fasilitas", "Informasi publik"]
    }
  },
  {
    slug: "linkatalog",
    title: "Linkatalog.id - Online Catalog with WhatsApp Checkout",
    category: "SaaS / Online Catalog",
    description: {
      en: "Online catalog platform for products and services. Users can share one catalog link, customers can browse products, add items to cart, and checkout through WhatsApp.",
      id: "Platform katalog online untuk produk dan jasa. Pengguna dapat membagikan satu tautan katalog, pelanggan dapat menjelajah produk, menambahkan item ke keranjang, dan checkout melalui WhatsApp."
    },
    image: "/projects/linkatalog.png",
    techStack: ["Next.js", "Tailwind CSS"],
    role: "Founder",
    features: {
      en: ["Shareable catalog link", "Product browsing", "Cart flow", "WhatsApp checkout", "Responsive storefront"],
      id: ["Tautan katalog yang dapat dibagikan", "Penjelajahan produk", "Alur keranjang", "Checkout WhatsApp", "Etalase responsif"]
    }
  },
  {
    slug: "clinic-management",
    title: "Clinic Management System",
    category: "Healthcare Web Application",
    description: {
      en: "Clinic management system with patient registration, digital queue, electronic medical records, BPJS API integration, pharmacy management, billing, financial module, dashboard, and reporting.",
      id: "Sistem manajemen klinik dengan pendaftaran pasien, antrean digital, rekam medis elektronik, integrasi API BPJS, manajemen farmasi, penagihan, modul keuangan, dashboard, dan pelaporan."
    },
    image: "/projects/clinic-management.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: {
      en: ["Patient registration", "Digital queue", "Medical records", "BPJS API integration", "Billing and reporting"],
      id: ["Pendaftaran pasien", "Antrean digital", "Rekam medis", "Integrasi API BPJS", "Penagihan dan pelaporan"]
    }
  },
  {
    slug: "pos",
    title: "Point of Sales System",
    category: "POS Web Application",
    description: {
      en: "Point of Sales application for sales processing, inventory management, customer management, reporting, analytics, and user access control.",
      id: "Aplikasi Point of Sales untuk pemrosesan penjualan, manajemen inventori, manajemen pelanggan, pelaporan, analitik, dan kontrol akses pengguna."
    },
    image: "/projects/pos.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Founder",
    features: {
      en: ["Sales processing", "Inventory management", "Customer management", "Reporting", "User access control"],
      id: ["Pemrosesan penjualan", "Manajemen inventori", "Manajemen pelanggan", "Pelaporan", "Kontrol akses pengguna"]
    }
  },
  {
    slug: "hris",
    title: "HRIS - Human Resource Information System",
    category: "HR Information System",
    description: {
      en: "Human Resource Information System for employee data management, attendance tracking, payroll, document management, and organizational structure with human-centered workflows.",
      id: "Sistem Informasi SDM (HRIS) untuk manajemen data karyawan, pencatatan absensi, penggajian, manajemen dokumen, dan struktur organisasi dengan alur kerja yang berpusat pada pengguna."
    },
    image: "/projects/hris.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: {
      en: ["Employee data management", "Attendance tracking", "Payroll management", "Document management", "Organizational structure"],
      id: ["Manajemen data karyawan", "Pencatatan absensi", "Manajemen penggajian", "Manajemen dokumen", "Struktur organisasi"]
    }
  },
  {
    slug: "alumni-portal",
    title: "Alumni Portal",
    category: "Alumni Information System",
    description: {
      en: "Alumni portal for registration form, data management, WhatsApp gateway integration, login activity, reporting, and alumni mapping.",
      id: "Portal alumni untuk formulir pendaftaran, manajemen data, integrasi WhatsApp gateway, aktivitas login, pelaporan, dan pemetaan alumni."
    },
    image: "/projects/alumni.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: {
      en: ["Registration form", "Data management", "WhatsApp gateway", "Login activity", "Alumni mapping"],
      id: ["Formulir pendaftaran", "Manajemen data", "WhatsApp gateway", "Aktivitas login", "Pemetaan alumni"]
    }
  },
  {
    slug: "financial-integration",
    title: "Financial Integration System",
    category: "Financial Management System",
    description: {
      en: "Financial integration system with budget planning module, approval workflow, fund disbursement tracking, realization, payment management, and reporting system.",
      id: "Sistem integrasi keuangan dengan modul perencanaan anggaran, alur persetujuan, pelacakan pencairan dana, realisasi, manajemen pembayaran, dan sistem pelaporan."
    },
    image: "/projects/financial-integration.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: {
      en: ["Budget planning", "Approval workflow", "Disbursement tracking", "Payment management", "Financial reporting"],
      id: ["Perencanaan anggaran", "Alur persetujuan", "Pelacakan pencairan dana", "Manajemen pembayaran", "Pelaporan keuangan"]
    }
  },
  {
    slug: "innovation-event",
    title: "Innovation Event Web Platform",
    category: "Event Management System",
    description: {
      en: "Web platform for innovation event management including participant registration, initial screening, reviewer assignment, innovation assessment, and result announcement.",
      id: "Platform web untuk manajemen acara inovasi mencakup pendaftaran peserta, penyaringan awal, penugasan reviewer, penilaian inovasi, dan pengumuman hasil."
    },
    image: "/projects/invent.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: {
      en: ["Participant registration", "Initial screening", "Reviewer assignment", "Assessment workflow", "Result announcement"],
      id: ["Pendaftaran peserta", "Penyaringan awal", "Penugasan reviewer", "Alur penilaian", "Pengumuman hasil"]
    }
  },
  {
    slug: "open-recruitment",
    title: "Open Recruitment Web Portal",
    category: "Recruitment Management System",
    description: {
      en: "Open recruitment portal for online registration, document upload, admin verification panel, selection stage management, and email notification system.",
      id: "Portal open recruitment untuk pendaftaran online, unggah dokumen, panel verifikasi admin, manajemen tahap seleksi, dan sistem notifikasi email."
    },
    image: "/projects/open-recruitment.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: {
      en: ["Online registration", "Document upload", "Admin verification", "Selection stages", "Email notification"],
      id: ["Pendaftaran online", "Unggah dokumen", "Verifikasi admin", "Tahapan seleksi", "Notifikasi email"]
    }
  },
  {
    slug: "government-registration",
    title: "Registration Form System for National Unity and Politics Agency",
    category: "Government Web Application",
    description: {
      en: "Registration information system for public organization and political party administration, document submission, verification workflow, and responsive public access.",
      id: "Sistem informasi pendaftaran untuk administrasi organisasi kemasyarakatan dan partai politik, pengajuan dokumen, alur verifikasi, dan akses publik yang responsif."
    },
    image: "/projects/government-registration.png",
    techStack: ["CodeIgniter", "MySQL", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    features: {
      en: ["Public registration", "Document submission", "Verification workflow", "Responsive access", "Administrative reporting"],
      id: ["Pendaftaran publik", "Pengajuan dokumen", "Alur verifikasi", "Akses responsif", "Pelaporan administratif"]
    }
  }
];
