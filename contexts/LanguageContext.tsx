"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const translations: Record<Language, any> = {
  tr: {
    nav: {
      about: "Hakkımda",
      stack: "Teknolojiler",
      projects: "Projeler",
      services: "Hizmetler",
      contact: "İletişim",
      hireMe: "Benimle Çalışın",
      cvTR: "CV (TR)",
      cvEN: "CV (EN)",
    },
    hero: {
      available: "Freelance projeler için müsaitim",
      name: "Said Yanak",
      title: "Backend Developer & Freelancer",
      description: "Backend sistemleri geliştiriyor, full-stack ürünler yapıyor ve bunları kendi altyapımda barındırıyorum. 42 Kocaeli mezunuyum.",
      viewProjects: "Projelerime Göz Atın",
      hireMe: "Benimle Çalışın",
    },
    about: {
      title: "Ben Kimim",
      sectionLabel: "01. hakkımda",
      groguCaption: "İşte yol bu.",
      intro1: "Ben Said, Türkiye'de yaşayan bir backend geliştiriciyim. Yolculuğuma",
      school42: "42 Kocaeli",
      intro2: "de başladım — ilk günden derin sulara atılan, akran öğrenmesi temelli bir mühendislik okulu. Hoca yok, ders anlatımı yok. Sadece zorlu problemler, azimli arkadaşlar ve neyi nasıl inşa ettiğinizi gerçekten kavramanızı zorunlu kılan bir program.",
      intro3: "Sağlam backend sistemleri oluşturma konusunda uzmanım — API'ler, mikroservisler, veritabanı mimarisi. Ama veritabanı tasarımından kullanıcı arayüzüne kadar tüm ürünü yönetebiliyorum. Lojistik platformları geliştirdim, sıfırdan VPS hosting altyapısı kurdum ve freelance projeleri kendi sunucularımda yayına aldım.",
      intro4: "Bir projeyi üstlendiğimde sadece kod yazmakla kalmıyorum — deployment, sunucu kurulumu ve sürekli altyapı yönetimini de üstleniyorum. Bu sayede daha hızlı teslimat ve geliştirici-DevOps ekibi arasında sorumluluk karmaşası olmuyor.",
      highlights: {
        graduate: {
          title: "42 Kocaeli Mezunu",
          desc: "Hoca yok, ders anlatımı yok — tamamen akran öğrenmesi ve işbirliğine dayalı bir mühendislik okulu. Dünyanın en zorlu yazılım programlarından biri.",
        },
        backend: {
          title: "Backend Uzmanı",
          desc: "Ana uzmanlık alanım backend — sistem tasarımı, API'ler, veritabanları ve altyapı. Proje gerektiğinde frontend tarafında da rahatça çalışabilirim.",
        },
        infrastructure: {
          title: "Kendi Sunucularım",
          desc: "Kendi VPS sunucularımı yönetiyor ve müşteri projelerini Docker ve Nginx ile barındırıyorum. Üçüncü taraf platformlara bağımlı değilim — tam kontrol, düşük maliyet.",
        },
        freelance: {
          title: "Freelance Çalışıyorum",
          desc: "Yeni projeler kabul ediyorum — küçük işletme sitelerinden eksiksiz SaaS backend'lerine kadar. Upwork, Fiverr ve Armut üzerinden müşterilerle çalışıyorum.",
        },
      },
    },
    services: {
      title: "Sunduğum Hizmetler",
      sectionLabel: "04. hizmetler",
      description: "Upwork, Fiverr ve Armut'ta aktifim — veya doğrudan benimle iletişime geçin.",
      items: {
        wordpress: {
          title: "WordPress Geliştirme & Yayına Alma",
          desc: "Özel WordPress siteleri — tema, eklenti, performans optimizasyonu ve domain kurulumu. Kendi altyapımda hosting hizmeti de sunuyorum.",
        },
        rest: {
          title: "REST API Geliştirme",
          desc: "Spring Boot veya Node.js ile ölçeklenebilir, iyi dokümante edilmiş REST API'leri. Veritabanı tasarımı, kimlik doğrulama ve deployment dahil.",
        },
        fullstack: {
          title: "Full-Stack Web Uygulamaları",
          desc: "Veritabanı tasarımından kullanıcı arayüzüne kadar eksiksiz web uygulamaları. Güçlü backend mantığıyla desteklenen Next.js projeleri — hızlı teslimat.",
        },
        vps: {
          title: "VPS Kurulumu & Docker Deployment",
          desc: "Sunucu hazırlama, Nginx yapılandırması, SSL kurulumu, Docker Compose — tüm production ortamınızı sıfırdan kurarım.",
        },
        postgres: {
          title: "PostgreSQL Veritabanı Tasarımı",
          desc: "Şema tasarımı, sorgu optimizasyonu, indeksleme stratejileri ve migration işlemleri. İlk günden performans ve sürdürülebilirlik odaklı.",
        },
      },
      hosting: {
        title: "Kendi sunucu avantajı:",
        desc: "Tüm projeler kendi sunucu altyapımda barındırılabilir — müşteri için ekstra hosting maliyeti yok. Projeniz ayrı bir hosting hesabı açmanıza gerek kalmadan canlıya alınır, bakımı yapılır.",
      },
    },
    contact: {
      title: "Birlikte Çalışalım",
      sectionLabel: "05. iletişim",
      description: "Aklınızda bir proje mi var? Freelance projeler için müsaitim. Mesaj gönderin, 24 saat içinde yanıtlayayım.",
      form: {
        name: "İsim",
        namePlaceholder: "Adınız",
        email: "E-posta",
        emailPlaceholder: "siz@ornek.com",
        message: "Mesaj",
        messagePlaceholder: "Projeniz hakkında bilgi verin...",
        send: "Mesaj Gönder",
        sent: "Mesaj gönderildi — e-posta istemcinizi kontrol edin",
      },
      or: "Ya da bu kanallardan doğrudan ulaşın:",
    },
  },
  en: {
    nav: {
      about: "About",
      stack: "Stack",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      hireMe: "Hire Me",
      cvTR: "CV (TR)",
      cvEN: "CV (EN)",
    },
    hero: {
      available: "Available for freelance projects",
      name: "Said Yanak",
      title: "Backend Developer & Freelancer",
      description: "I build backends, ship full-stack products, and host them on my own infrastructure. Graduate of 42 Kocaeli.",
      viewProjects: "View Projects",
      hireMe: "Hire Me",
    },
    about: {
      title: "Who I am",
      sectionLabel: "01. about",
      groguCaption: "This is the way.",
      intro1: "I'm Said, a backend developer based in Turkey. I started my journey at",
      school42: "42 Kocaeli",
      intro2: "— a peer-to-peer engineering school that throws you in the deep end from day one. No professors, no hand-holding. Just hard problems, dedicated peers, and a curriculum that forces you to actually understand what you're building.",
      intro3: "I specialize in building robust backend systems — APIs, microservices, database architecture — but I can own an entire product from database schema to deployed UI. I've shipped logistics platforms, built VPS hosting infrastructure from scratch, and deployed full freelance projects on my own servers.",
      intro4: "When I take on a project, I don't just write the code — I handle deployment, server setup, and ongoing infrastructure. That means faster turnaround and no finger-pointing between a developer and a DevOps team.",
      highlights: {
        graduate: {
          title: "42 Kocaeli Graduate",
          desc: "Peer-to-peer engineering school with no teachers, no lectures — just self-directed learning and collaboration. One of the toughest CS programs in the world.",
        },
        backend: {
          title: "Backend-First",
          desc: "My core is backend — system design, APIs, databases, and infrastructure. I'm equally comfortable moving into the frontend when a project calls for it.",
        },
        infrastructure: {
          title: "Own Infrastructure",
          desc: "I run my own VPS servers and host client projects with Docker and Nginx. No dependency on third-party platforms — full control, lower cost.",
        },
        freelance: {
          title: "Open for Freelance",
          desc: "Currently taking on new client projects — from small business sites to complete SaaS backends. Work with clients on Upwork, Fiverr, and Armut.",
        },
      },
    },
    services: {
      title: "What I offer",
      sectionLabel: "04. services",
      description: "Available on Upwork, Fiverr, and Armut — or reach out directly.",
      items: {
        wordpress: {
          title: "WordPress Development & Deployment",
          desc: "Custom WordPress sites built to your spec — themes, plugins, performance optimization — and deployed on your domain. Full hosting available on my infrastructure.",
        },
        rest: {
          title: "REST API Development",
          desc: "Scalable, well-documented REST APIs built with Spring Boot or Node.js. Database design, auth, and deployment included.",
        },
        fullstack: {
          title: "Full-Stack Web Applications",
          desc: "End-to-end web apps from database schema to deployed UI. Next.js frontends backed by robust server-side logic — shipped fast.",
        },
        vps: {
          title: "VPS Setup & Docker Deployment",
          desc: "Server provisioning, Nginx configuration, SSL setup, Docker Compose — I can set up your entire production environment from scratch.",
        },
        postgres: {
          title: "PostgreSQL Database Design",
          desc: "Schema design, query optimization, indexing strategies, and migrations. Built for performance and maintainability from day one.",
        },
      },
      hosting: {
        title: "Own infrastructure advantage:",
        desc: "All projects can be hosted on my personal server infrastructure — no extra hosting cost for the client. Your project is deployed, maintained, and running without you needing to manage a separate hosting account.",
      },
    },
    contact: {
      title: "Let's Work Together",
      sectionLabel: "05. contact",
      description: "Have a project in mind? I'm available for freelance engagements. Send me a message and I'll get back to you within 24 hours.",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sent: "Message sent — check your mail client",
      },
      or: "Or reach out directly through any of these channels:",
    },
  },
};
