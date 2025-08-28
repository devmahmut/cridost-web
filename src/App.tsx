import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronDown, Menu, X, Globe, Mail, Phone, MapPin, Eye, Users, Star, Zap, ArrowRight, Code, Palette, Search, Share2, Heart, Shield, Cpu, Headphones, MessageCircle, Target, Coffee, Clock, TrendingUp, BarChart3, ShoppingCart } from 'lucide-react';

interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translation = {
  TR: {
    hero_title: "Yaratıcı Web Ajansı",
    hero_subtitle: "Dijital dünyada markanızı öne çıkaran yaratıcı çözümler",
    hero_cta: "Projeni Keşfet",
    hero_main_title: "Dijital Dünyada",
    hero_sub_title: "İz Bırakın",
    hero_description: "Web geliştirme, e-ticaret çözümleri ve dijital dönüşüm ile işinizi büyütün. Modern teknolojiler, yaratıcı tasarım ve stratejik yaklaşım ile dijital dünyada öne çıkın.",
    about_vision_text: "Siz sadece vizyonunuzu belirleyin, geri kalan her şeyi biz halledelim. Teknik detaylar, optimizasyon, güvenlik ve performans konularında endişelenmeyin.",
    nav_about: "Hakkımızda",
    nav_services: "Hizmetler",
    nav_partners: "Çözüm Ortaklarımız",
    nav_why: "Neden Biz",
    nav_contact: "İletişim",
    about_title: "Biz Kimiz",
    about_text: "CriDost, dijital dünyada iz bırakan yaratıcı projeler geliştiren genç ve dinamik bir ajans. Modern tasarım anlayışı ile teknolojiyi harmanlayarak markaların dijital yolculuğunda rehberlik ediyoruz.",
    services_title: "Hizmetlerimiz",
    service_1: "Web Sitesi",
    service_1_desc: "Responsive, SEO optimized, modern web siteleri. E-ticaret, kurumsal, blog ve portföy siteleri.",
    service_2: "Web Uygulaması",
    service_2_desc: "React, Vue.js ile özel web uygulamaları. Dashboard, CRM, ERP sistemleri geliştiriyoruz.",
    service_3: "Google İşletme Profili",
    service_3_desc: "Google My Business optimizasyonu, yerel SEO, Google Ads yönetimi ve analitik raporlama.",
    service_4: "Sosyal Medya Yönetimi",
    service_4_desc: "Instagram, Facebook, LinkedIn içerik üretimi, reklam kampanyaları ve topluluk yönetimi.",
    service_5: "Grafik Tasarımı",
    service_5_desc: "Logo, kurumsal kimlik, broşür, poster, sosyal medya görselleri ve marka tasarımı.",
    service_6: "E-Ticaret Çözümleri",
    service_6_desc: "Shopify, WooCommerce, özel e-ticaret platformları. Ödeme sistemleri ve envanter yönetimi.",
    service_7: "SEO & Dijital Pazarlama",
    service_7_desc: "Arama motoru optimizasyonu, Google Ads, Facebook Ads, içerik pazarlaması ve analitik.",
    service_8: "Marka Danışmanlığı",
    service_8_desc: "Marka stratejisi, pazar analizi, rekabet analizi ve dijital dönüşüm danışmanlığı.",
    service_9: "Hosting & Bakım",
    service_9_desc: "Güvenli hosting, SSL sertifikası, düzenli yedekleme, güvenlik güncellemeleri ve teknik destek.",
    partners_title: "Çözüm Ortaklarımız",
    why_title: "Neden CriDost",
    why_clients: "Mutlu Müşteri",
    why_projects: "Başarılı Proje",
    why_satisfaction: "Memnuniyet Oranı",
    why_experience: "Yıllık Deneyim",
    why_coffee: "Kahve",
    why_discussions: "Sonsuz Çılgın Tartışmalar",
    faq_title: "Sıkça Sorulan Sorular",
    faq_q1: "Proje süresi ne kadar?",
    faq_a1: "Web sitesi projeleri 2-4 hafta, web uygulamaları 1-3 ay sürmektedir. Proje karmaşıklığına göre değişir.",
    faq_q2: "Fiyatlar nasıl belirleniyor?",
    faq_a2: "Her proje özeldir. İhtiyaçlarınızı analiz ederek size özel teklif hazırlıyoruz. Ücretsiz danışmanlık sunuyoruz.",
    faq_q3: "Bakım ve destek hizmeti var mı?",
    faq_a3: "Evet! Tüm projelerimizde 6 ay ücretsiz bakım, sonrasında uygun fiyatlı bakım paketleri sunuyoruz.",
    faq_q4: "Hangi teknolojileri kullanıyorsunuz?",
    faq_a4: "React, Vue.js, Node.js, WordPress, Shopify gibi modern teknolojiler kullanıyoruz. İhtiyaca göre seçim yapıyoruz.",
    faq_q5: "Mobil uyumlu tasarım yapıyor musunuz?",
    faq_a5: "Kesinlikle! Tüm projelerimiz mobil öncelikli (mobile-first) yaklaşımla responsive olarak tasarlanır.",
    contact_title: "İletişime Geçin",
    contact_name: "Adınız",
    contact_email: "E-posta",
    contact_message: "Mesajınız",
    contact_send: "Gönder",
    footer_rights: "Tüm hakları saklıdır.",
    creative_thinking: "Yaratıcı Düşünce",
    pixel_perfect: "Piksel Mükemmelliği",
    fast_delivery: "Hızlı Teslimat",
    innovation: "İnovasyon",
    customer_focus: "Müşteri Odaklılık",
    quality_assurance: "Kalite Güvencesi",
    modern_tech: "Modern Teknoloji",
    continuous_support: "Sürekli Destek",
    transparent_communication: "Şeffaf İletişim",
    result_oriented: "Sonuç Odaklı"
  },
  EN: {
    hero_title: "Creative Web Agency",
    hero_subtitle: "Creative solutions that make your brand stand out in the digital world",
    hero_cta: "Explore Your Project",
    hero_main_title: "Make Your Mark",
    hero_sub_title: "In The Digital World",
    hero_description: "Grow your business with web development, e-commerce solutions and digital transformation. Stand out in the digital world with modern technologies, creative design and strategic approach.",
    about_vision_text: "You just set your vision, we handle everything else. Don't worry about technical details, optimization, security and performance issues.",
    nav_about: "About",
    nav_services: "Services",
    nav_partners: "Solution Partners",
    nav_why: "Why Us",
    nav_contact: "Contact",
    about_title: "Who We Are",
    about_text: "CriDost is a young and dynamic agency that develops creative projects that make a mark in the digital world. We guide brands on their digital journey by blending technology with modern design understanding.",
    services_title: "Our Services",
    service_1: "Website",
    service_1_desc: "Responsive, SEO optimized, modern websites. E-commerce, corporate, blog and portfolio sites.",
    service_2: "Web Application",
    service_2_desc: "Custom web applications with React, Vue.js. We develop dashboard, CRM, ERP systems.",
    service_3: "Google Business Profile",
    service_3_desc: "Google My Business optimization, local SEO, Google Ads management and analytics reporting.",
    service_4: "Social Media Management",
    service_4_desc: "Instagram, Facebook, LinkedIn content creation, ad campaigns and community management.",
    service_5: "Graphic Design",
    service_5_desc: "Logo, corporate identity, brochure, poster, social media graphics and brand design.",
    service_6: "E-Commerce Solutions",
    service_6_desc: "Shopify, WooCommerce, custom e-commerce platforms. Payment systems and inventory management.",
    service_7: "SEO & Digital Marketing",
    service_7_desc: "Search engine optimization, Google Ads, Facebook Ads, content marketing and analytics.",
    service_8: "Brand Consulting",
    service_8_desc: "Brand strategy, market analysis, competitive analysis and digital transformation consulting.",
    service_9: "Hosting & Maintenance",
    service_9_desc: "Secure hosting, SSL certificates, regular backups, security updates and technical support.",
    partners_title: "Solution Partners",
    why_title: "Why CriDost",
    why_clients: "Happy Clients",
    why_projects: "Successful Projects",
    why_satisfaction: "Satisfaction Rate",
    why_experience: "Years Experience",
    why_coffee: "Cups of Coffee",
    why_discussions: "Endless Crazy Discussions",
    faq_title: "Frequently Asked Questions",
    faq_q1: "How long does a project take?",
    faq_a1: "Website projects take 2-4 weeks, web applications 1-3 months. It varies according to project complexity.",
    faq_q2: "How are prices determined?",
    faq_a2: "Each project is unique. We analyze your needs and prepare a custom offer. We offer free consultation.",
    faq_q3: "Is there maintenance and support service?",
    faq_a3: "Yes! We offer 6 months free maintenance for all projects, then affordable maintenance packages.",
    faq_q4: "What technologies do you use?",
    faq_a4: "We use modern technologies like React, Vue.js, Node.js, WordPress, Shopify. We choose based on needs.",
    faq_q5: "Do you make mobile-friendly designs?",
    faq_a5: "Absolutely! All our projects are designed responsive with mobile-first approach.",
    contact_title: "Get In Touch",
    contact_name: "Your Name",
    contact_email: "Email",
    contact_message: "Your Message",
    contact_send: "Send",
    footer_rights: "All rights reserved.",
    creative_thinking: "Creative Thinking",
    pixel_perfect: "Pixel Perfect",
    fast_delivery: "Fast Delivery",
    innovation: "Innovation",
    customer_focus: "Customer Focus",
    quality_assurance: "Quality Assurance",
    modern_tech: "Modern Technology",
    continuous_support: "Continuous Support",
    transparent_communication: "Transparent Communication",
    result_oriented: "Result Oriented"
  },
  DE: {
    hero_title: "Kreative Web Agentur",
    hero_subtitle: "Kreative Lösungen, die Ihre Marke in der digitalen Welt hervorheben",
    hero_cta: "Ihr Projekt Entdecken",
    hero_main_title: "Hinterlassen Sie Ihre Spuren",
    hero_sub_title: "In Der Digitalen Welt",
    hero_description: "Wachsen Sie Ihr Geschäft mit Webentwicklung, E-Commerce-Lösungen und digitaler Transformation. Heben Sie sich in der digitalen Welt mit modernen Technologien, kreativem Design und strategischem Ansatz ab.",
    about_vision_text: "Sie setzen nur Ihre Vision, wir kümmern uns um alles andere. Machen Sie sich keine Sorgen um technische Details, Optimierung, Sicherheit und Leistungsprobleme.",
    nav_about: "Über uns",
    nav_services: "Dienstleistungen",
    nav_partners: "Lösungspartner",
    nav_why: "Warum wir",
    nav_contact: "Kontakt",
    about_title: "Wer wir sind",
    about_text: "CriDost ist eine junge und dynamische Agentur, die kreative Projekte entwickelt, die in der digitalen Welt Spuren hinterlassen. Wir begleiten Marken auf ihrer digitalen Reise, indem wir Technologie mit modernem Designverständnis verbinden.",
    services_title: "Unsere Dienstleistungen",
    service_1: "Webseite",
    service_1_desc: "Responsive, SEO-optimierte, moderne Websites. E-Commerce, Unternehmens-, Blog- und Portfolio-Sites.",
    service_2: "Web-Anwendung",
    service_2_desc: "Maßgeschneiderte Webanwendungen mit React, Vue.js. Wir entwickeln Dashboard-, CRM-, ERP-Systeme.",
    service_3: "Google Unternehmensprofil",
    service_3_desc: "Google My Business Optimierung, lokale SEO, Google Ads Management und Analytics Reporting.",
    service_4: "Social Media Management",
    service_4_desc: "Instagram, Facebook, LinkedIn Content-Erstellung, Werbekampagnen und Community-Management.",
    service_5: "Grafikdesign",
    service_5_desc: "Logo, Corporate Identity, Broschüre, Poster, Social Media Grafiken und Markendesign.",
    service_6: "E-Commerce Lösungen",
    service_6_desc: "Shopify, WooCommerce, maßgeschneiderte E-Commerce-Plattformen. Zahlungssysteme und Lagerverwaltung.",
    service_7: "SEO & Digital Marketing",
    service_7_desc: "Suchmaschinenoptimierung, Google Ads, Facebook Ads, Content Marketing und Analytics.",
    service_8: "Markenberatung",
    service_8_desc: "Markenstrategie, Marktanalyse, Wettbewerbsanalyse und Beratung zur digitalen Transformation.",
    service_9: "Hosting & Wartung",
    service_9_desc: "Sicheres Hosting, SSL-Zertifikate, regelmäßige Backups, Sicherheitsupdates und technischer Support.",
    partners_title: "Lösungspartner",
    why_title: "Warum CriDost",
    why_clients: "Zufriedene Kunden",
    why_projects: "Erfolgreiche Projekte",
    why_satisfaction: "Zufriedenheitsrate",
    why_experience: "Jahre Erfahrung",
    why_coffee: "Tassen Kaffee",
    why_discussions: "Endlose Verrückte Diskussionen",
    faq_title: "Häufig gestellte Fragen",
    faq_q1: "Wie lange dauert ein Projekt?",
    faq_a1: "Website-Projekte dauern 2-4 Wochen, Webanwendungen 1-3 Monate. Je nach Projektkomplexität.",
    faq_q2: "Wie werden die Preise bestimmt?",
    faq_a2: "Jedes Projekt ist einzigartig. Wir analysieren Ihre Bedürfnisse und erstellen ein individuelles Angebot.",
    faq_q3: "Gibt es Wartungs- und Support-Service?",
    faq_a3: "Ja! Wir bieten 6 Monate kostenlose Wartung für alle Projekte, danach erschwingliche Wartungspakete.",
    faq_q4: "Welche Technologien verwenden Sie?",
    faq_a4: "Wir verwenden moderne Technologien wie React, Vue.js, Node.js, WordPress, Shopify.",
    faq_q5: "Erstellen Sie mobilfreundliche Designs?",
    faq_a5: "Absolut! Alle unsere Projekte werden responsive mit Mobile-First-Ansatz gestaltet.",
    contact_title: "Kontakt aufnehmen",
    contact_name: "Ihr Name",
    contact_email: "E-Mail",
    contact_message: "Ihre Nachricht",
    contact_send: "Senden",
    footer_rights: "Alle Rechte vorbehalten.",
    creative_thinking: "Kreatives Denken",
    pixel_perfect: "Pixel Perfekt",
    fast_delivery: "Schnelle Lieferung",
    innovation: "Innovation",
    customer_focus: "Kundenorientierung",
    quality_assurance: "Qualitätssicherung",
    modern_tech: "Moderne Technologie",
    continuous_support: "Kontinuierliche Unterstützung",
    transparent_communication: "Transparente Kommunikation",
    result_oriented: "Ergebnisorientiert"
  },
  ES: {
    hero_title: "Agencia Web Creativa",
    hero_subtitle: "Soluciones creativas que hacen destacar tu marca en el mundo digital",
    hero_cta: "Explora tu Proyecto",
    hero_main_title: "Deja Tu Huella",
    hero_sub_title: "En El Mundo Digital",
    hero_description: "Haz crecer tu negocio con desarrollo web, soluciones de e-commerce y transformación digital. Destaca en el mundo digital con tecnologías modernas, diseño creativo y enfoque estratégico.",
    about_vision_text: "Tú solo establece tu visión, nosotros nos encargamos de todo lo demás. No te preocupes por detalles técnicos, optimización, seguridad y problemas de rendimiento.",
    nav_about: "Acerca de",
    nav_services: "Servicios",
    nav_partners: "Socios de Solución",
    nav_why: "Por qué nosotros",
    nav_contact: "Contacto",
    about_title: "Quiénes Somos",
    about_text: "CriDost es una agencia joven y dinámica que desarrolla proyectos creativos que dejan huella en el mundo digital. Guiamos a las marcas en su viaje digital combinando tecnología con comprensión de diseño moderno.",
    services_title: "Nuestros Servicios",
    service_1: "Sitio Web",
    service_1_desc: "Sitios web responsive, optimizados para SEO y modernos. E-commerce, corporativos, blogs y portfolios.",
    service_2: "Aplicación Web",
    service_2_desc: "Aplicaciones web personalizadas con React, Vue.js. Desarrollamos sistemas dashboard, CRM, ERP.",
    service_3: "Perfil de Google Business",
    service_3_desc: "Optimización de Google My Business, SEO local, gestión de Google Ads y reportes analíticos.",
    service_4: "Gestión de Redes Sociales",
    service_4_desc: "Creación de contenido para Instagram, Facebook, LinkedIn, campañas publicitarias y gestión comunitaria.",
    service_5: "Diseño Gráfico",
    service_5_desc: "Logo, identidad corporativa, folletos, pósters, gráficos para redes sociales y diseño de marca.",
    service_6: "Soluciones E-Commerce",
    service_6_desc: "Shopify, WooCommerce, plataformas de e-commerce personalizadas. Sistemas de pago y gestión de inventario.",
    service_7: "SEO y Marketing Digital",
    service_7_desc: "Optimización para motores de búsqueda, Google Ads, Facebook Ads, marketing de contenidos y analytics.",
    service_8: "Consultoría de Marca",
    service_8_desc: "Estrategia de marca, análisis de mercado, análisis competitivo y consultoría de transformación digital.",
    service_9: "Hosting y Mantenimiento",
    service_9_desc: "Hosting seguro, certificados SSL, copias de seguridad regulares, actualizaciones de seguridad y soporte técnico.",
    partners_title: "Socios de Solución",
    why_title: "Por qué CriDost",
    why_clients: "Clientes Felices",
    why_projects: "Proyectos Exitosos",
    why_satisfaction: "Tasa de Satisfacción",
    why_experience: "Años de Experiencia",
    why_coffee: "Tazas de Café",
    why_discussions: "Discusiones Locas Interminables",
    faq_title: "Preguntas Frecuentes",
    faq_q1: "¿Cuánto tiempo toma un proyecto?",
    faq_a1: "Los proyectos de sitios web toman 2-4 semanas, aplicaciones web 1-3 meses. Varía según la complejidad.",
    faq_q2: "¿Cómo se determinan los precios?",
    faq_a2: "Cada proyecto es único. Analizamos sus necesidades y preparamos una oferta personalizada.",
    faq_q3: "¿Hay servicio de mantenimiento y soporte?",
    faq_a3: "¡Sí! Ofrecemos 6 meses de mantenimiento gratuito para todos los proyectos, luego paquetes asequibles.",
    faq_q4: "¿Qué tecnologías utilizan?",
    faq_a4: "Usamos tecnologías modernas como React, Vue.js, Node.js, WordPress, Shopify.",
    faq_q5: "¿Hacen diseños compatibles con móviles?",
    faq_a5: "¡Absolutamente! Todos nuestros proyectos se diseñan responsive con enfoque mobile-first.",
    contact_title: "Ponte en Contacto",
    contact_name: "Tu Nombre",
    contact_email: "Correo Electrónico",
    contact_message: "Tu Mensaje",
    contact_send: "Enviar",
    footer_rights: "Todos los derechos reservados.",
    creative_thinking: "Pensamiento Creativo",
    pixel_perfect: "Perfección de Píxeles",
    fast_delivery: "Entrega Rápida",
    innovation: "Innovación",
    customer_focus: "Enfoque al Cliente",
    quality_assurance: "Garantía de Calidad",
    modern_tech: "Tecnología Moderna",
    continuous_support: "Soporte Continuo",
    transparent_communication: "Comunicación Transparente",
    result_oriented: "Orientado a Resultados"
  },
  FR: {
    hero_title: "Agence Web Créative",
    hero_subtitle: "Solutions créatives qui font ressortir votre marque dans le monde numérique",
    hero_cta: "Explorez votre Projet",
    hero_main_title: "Laissez Votre Empreinte",
    hero_sub_title: "Dans Le Monde Numérique",
    hero_description: "Développez votre entreprise avec le développement web, les solutions e-commerce et la transformation numérique. Distinguez-vous dans le monde numérique avec des technologies modernes, un design créatif et une approche stratégique.",
    about_vision_text: "Vous définissez simplement votre vision, nous nous occupons de tout le reste. Ne vous inquiétez pas des détails techniques, de l'optimisation, de la sécurité et des problèmes de performance.",
    nav_about: "À propos",
    nav_services: "Services",
    nav_partners: "Partenaires de Solution",
    nav_why: "Pourquoi nous",
    nav_contact: "Contact",
    about_title: "Qui Nous Sommes",
    about_text: "CriDost est une agence jeune et dynamique qui développe des projets créatifs qui marquent le monde numérique. Nous guidons les marques dans leur parcours numérique en combinant technologie et compréhension du design moderne.",
    services_title: "Nos Services",
    service_1: "Site Web",
    service_1_desc: "Sites web responsive, optimisés SEO et modernes. E-commerce, corporate, blogs et portfolios.",
    service_2: "Application Web",
    service_2_desc: "Applications web personnalisées avec React, Vue.js. Nous développons des systèmes dashboard, CRM, ERP.",
    service_3: "Profil Google Business",
    service_3_desc: "Optimisation Google My Business, SEO local, gestion Google Ads et rapports analytiques.",
    service_4: "Gestion des Réseaux Sociaux",
    service_4_desc: "Création de contenu Instagram, Facebook, LinkedIn, campagnes publicitaires et gestion communautaire.",
    service_5: "Design Graphique",
    service_5_desc: "Logo, identité corporate, brochures, affiches, graphiques réseaux sociaux et design de marque.",
    service_6: "Solutions E-Commerce",
    service_6_desc: "Shopify, WooCommerce, plateformes e-commerce personnalisées. Systèmes de paiement et gestion d'inventaire.",
    service_7: "SEO & Marketing Digital",
    service_7_desc: "Optimisation pour moteurs de recherche, Google Ads, Facebook Ads, marketing de contenu et analytics.",
    service_8: "Conseil en Marque",
    service_8_desc: "Stratégie de marque, analyse de marché, analyse concurrentielle et conseil en transformation digitale.",
    service_9: "Hébergement & Maintenance",
    service_9_desc: "Hébergement sécurisé, certificats SSL, sauvegardes régulières, mises à jour de sécurité et support technique.",
    partners_title: "Partenaires de Solution",
    why_title: "Pourquoi CriDost",
    why_clients: "Clients Satisfaits",
    why_projects: "Projets Réussis",
    why_satisfaction: "Taux de Satisfaction",
    why_experience: "Années d'Expérience",
    why_coffee: "Tasses de Café",
    why_discussions: "Discussions Folles Interminables",
    faq_title: "Questions Fréquentes",
    faq_q1: "Combien de temps prend un projet?",
    faq_a1: "Les projets de sites web prennent 2-4 semaines, les applications web 1-3 mois. Varie selon la complexité.",
    faq_q2: "Comment les prix sont-ils déterminés?",
    faq_a2: "Chaque projet est unique. Nous analysons vos besoins et préparons une offre personnalisée.",
    faq_q3: "Y a-t-il un service de maintenance et support?",
    faq_a3: "Oui! Nous offrons 6 mois de maintenance gratuite pour tous les projets, puis des forfaits abordables.",
    faq_q4: "Quelles technologies utilisez-vous?",
    faq_a4: "Nous utilisons des technologies modernes comme React, Vue.js, Node.js, WordPress, Shopify.",
    faq_q5: "Faites-vous des designs compatibles mobiles?",
    faq_a5: "Absolument! Tous nos projets sont conçus responsive avec une approche mobile-first.",
    contact_title: "Prendre Contact",
    contact_name: "Votre Nom",
    contact_email: "E-mail",
    contact_message: "Votre Message",
    contact_send: "Envoyer",
    footer_rights: "Tous droits réservés.",
    creative_thinking: "Pensée Créative",
    pixel_perfect: "Parfait au Pixel",
    fast_delivery: "Livraison Rapide",
    innovation: "Innovation",
    customer_focus: "Focus Client",
    quality_assurance: "Assurance Qualité",
    modern_tech: "Technologie Moderne",
    continuous_support: "Support Continu",
    transparent_communication: "Communication Transparente",
    result_oriented: "Orienté Résultat"
  }
};



// Özel saat komponenti - Lucide Clock ikonunu temel alarak
const ClockIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Saat çerçevesi */}
      <circle cx="12" cy="12" r="10" />
      
      {/* Yelkovan (dakika) - 6 saniyede tam tur */}
      <line 
        x1="12" 
        y1="12" 
        x2="12" 
        y2="6" 
        className="origin-center"
        style={{
          animation: 'minute-hand 6s linear infinite'
        }}
      />
      
      {/* Akrep (saat) - 6 saniyede 30 derece (1/12 tur) */}
      <line 
        x1="12" 
        y1="12" 
        x2="12" 
        y2="8" 
        className="origin-center"
        style={{
          animation: 'hour-hand 6s linear infinite'
        }}
      />
    </svg>
  );
};

// Özel kahve komponenti - Buhar çizgileri animasyonlu
const CoffeeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Kahve fincanı */}
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" y1="2" x2="6" y2="4" />
      <line x1="10" y1="2" x2="10" y2="4" />
      <line x1="14" y1="2" x2="14" y2="4" />
      
      {/* Buhar çizgileri - random zamanlarda hareket */}
      <line 
        x1="6" 
        y1="2" 
        x2="6" 
        y2="4" 
        style={{
          animation: 'steam-1 1.2s ease-in-out infinite',
          animationDelay: '0s'
        }}
      />
      <line 
        x1="10" 
        y1="2" 
        x2="10" 
        y2="4" 
        style={{
          animation: 'steam-2 1.2s ease-in-out infinite',
          animationDelay: '0.4s'
        }}
      />
      <line 
        x1="14" 
        y1="2" 
        x2="14" 
        y2="4" 
        style={{
          animation: 'steam-3 1.2s ease-in-out infinite',
          animationDelay: '0.8s'
        }}
      />
    </svg>
  );
};

// Özel şimşek komponenti - Elektrik efekti animasyonlu
const ZapIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ana şimşek */}
      <polygon 
        points="13,2 3,14 12,14 11,22 21,10 12,10"
        style={{
          animation: 'zap-glow 2s ease-in-out infinite'
        }}
      />
      
      {/* Parıltı efekti için ek katman */}
      <polygon 
        points="13,2 3,14 12,14 11,22 21,10 12,10"
        style={{
          animation: 'zap-glow 2s ease-in-out infinite',
          filter: 'blur(1px)',
          opacity: 0.6
        }}
      />
      
      {/* Elektrik parıltıları */}
      <circle 
        cx="12" 
        cy="12" 
        r="1" 
        fill="currentColor"
        style={{
          animation: 'zap-spark 1.5s ease-in-out infinite',
          animationDelay: '0.5s'
        }}
      />
      <circle 
        cx="8" 
        cy="16" 
        r="0.5" 
        fill="currentColor"
        style={{
          animation: 'zap-spark 1.5s ease-in-out infinite',
          animationDelay: '1s'
        }}
      />
      <circle 
        cx="16" 
        cy="8" 
        r="0.5" 
        fill="currentColor"
        style={{
          animation: 'zap-spark 1.5s ease-in-out infinite',
          animationDelay: '1.5s'
        }}
      />
    </svg>
  );
};

// Özel göz komponenti - Göz bebeği cursor'u takip eder
const EyeIcon = ({ className, mousePosition }: { className?: string; mousePosition: { x: number; y: number } }) => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const eyeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (eyeRef.current) {
        const rect = eyeRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Cursor pozisyonunu göz merkezine göre hesapla
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        // Göz bebeği hareketini sınırla (göz içinde kalması için)
        const maxMove = 1.5;
        const moveX = Math.max(-maxMove, Math.min(maxMove, deltaX * 0.15));
        const moveY = Math.max(-maxMove, Math.min(maxMove, deltaY * 0.15));
        
        setEyePosition({ x: moveX, y: moveY });
      }
    };

    const handleScroll = () => {
      // Scroll sırasında mouse pozisyonunu güncelle
      const mouseEvent = new MouseEvent('mousemove', {
        clientX: mousePosition.x,
        clientY: mousePosition.y
      });
      handleMouseMove(mouseEvent);
    };

    // Mouse move ve scroll event'lerini dinle
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mousePosition]);

  return (
    <svg
      ref={eyeRef}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Göz çerçevesi */}
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      
      {/* Göz bebeği - cursor'u takip eder */}
      <circle 
        cx="12" 
        cy="12" 
        r={isHovered ? "3.5" : "3"}
        fill={isHovered ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        style={{
          transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
          transition: 'all 0.1s ease-out'
        }}
      />
    </svg>
  );
};

const CreativeText = React.memo(({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset animation when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30 + delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
});

function App() {
  const [language, setLanguage] = useState('EN');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  const [isLanguageChanging, setIsLanguageChanging] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expandedServices, setExpandedServices] = useState<number[]>([]);
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);
  const heroRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const t = (key: string) => {
    const translation = translations[language][key];
    if (!translation) {
      console.log(`Missing translation for key: ${key} in language: ${language}`);
      return key;
    }
    return translation;
  };

  // Kullanıcının location'ına göre dil otomatik seçimi
  useEffect(() => {
    const detectUserLanguage = () => {
      try {
        // Browser language detection
        const browserLang = navigator.language || navigator.languages?.[0];
        
        // Country detection using IP geolocation
        fetch('https://ipapi.co/json/')
          .then(response => response.json())
          .then(data => {
            const countryCode = data.country_code;
            let detectedLang = 'EN'; // Default language
            
            // Country-based language mapping
            if (countryCode === 'TR') {
              detectedLang = 'TR';
            } else if (countryCode === 'DE') {
              detectedLang = 'DE';
            } else if (countryCode === 'ES') {
              detectedLang = 'ES';
            } else if (countryCode === 'FR') {
              detectedLang = 'FR';
            } else {
              // Browser language fallback
              if (browserLang?.startsWith('tr')) {
                detectedLang = 'TR';
              } else if (browserLang?.startsWith('de')) {
                detectedLang = 'DE';
              } else if (browserLang?.startsWith('es')) {
                detectedLang = 'ES';
              } else if (browserLang?.startsWith('fr')) {
                detectedLang = 'FR';
              }
            }
            
            // Set detected language
            if (detectedLang !== language) {
              setLanguage(detectedLang);
            }
          })
          .catch(() => {
            // Fallback to browser language if IP detection fails
            if (browserLang?.startsWith('tr')) {
              setLanguage('TR');
            } else if (browserLang?.startsWith('de')) {
              setLanguage('DE');
            } else if (browserLang?.startsWith('es')) {
              setLanguage('ES');
            } else if (browserLang?.startsWith('fr')) {
              setLanguage('FR');
            }
          });
      } catch (error) {
        console.log('Language detection failed, using default EN');
      }
    };

    detectUserLanguage();
  }, [language]);

  const services = useMemo(() => [
    { 
      icon: TrendingUp, 
      title: "Business & Strategy", 
      desc: "Strategic business solutions to drive growth and success",
      subServices: [
        "Business Growth Hacker",
        "Business Development", 
        "Project Management",
        "Business Intelligence"
      ]
    },
    { 
      icon: Code, 
      title: "Software Development", 
      desc: "End-to-end software solutions with modern technologies",
      subServices: [
        "End-to-End Software Development",
        "UI & UX Design",
        "DevOps",
        "Cyber Security"
      ]
    },
    { 
      icon: BarChart3, 
      title: "Data & Analytics", 
      desc: "Transform data into actionable insights",
      subServices: [
        "Data Analysis",
        "Data Engineering", 
        "Data Management"
      ]
    },
    { 
      icon: ShoppingCart, 
      title: "E-Commerce Solutions", 
      desc: "Complete e-commerce solutions powered by ikas and leading platforms",
      subServices: [
        "ikas Store Development",
        "Shopify & WooCommerce Development",
        "Custom E-commerce Platforms",
        "Payment Systems Integration (Stripe, PayPal, iyzico)",
        "Inventory & Order Management",
        "SEO & Performance Optimization"
      ]
    }
  ], [language]);

  const partners = useMemo(() => [
    // E-ticaret & CMS Platformları
    {
      name: "ikas",
      logo: "https://ikas.com/_next/image?url=https%3A%2F%2Fcms.ikas.com%2Fwp-content%2Fuploads%2F2024%2F12%2Fikas-header-logo.svg&w=3840&q=75",
      url: "https://ikas.com"
    },
    {
      name: "Shopify",
      logo: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365f316831831c9960c480451dd0330b68ae8574.svg",
      url: "https://shopify.com"
    },
    {
      name: "WooCommerce",
      logo: "https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce@2x.png",
      url: "https://woocommerce.com"
    },
    {
      name: "WordPress",
      logo: "https://s.w.org/style/images/about/WordPress-logotype-simplified.png",
      url: "https://wordpress.org"
    },
    
    // Ödeme Sistemleri
    {
      name: "Stripe",
      logo: "https://images.ctfassets.net/fzn2n1nzq965/HTTOloNPhisV9P4vltnPg/0eb47e99b61f4c6b6c8e9e2f46b33f01/stripe_logo_slate_small.png",
      url: "https://stripe.com"
    },
    {
      name: "PayPal",
      logo: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
      url: "https://paypal.com"
    },
    
    // Cloud & Hosting
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      url: "https://aws.amazon.com"
    },
    {
      name: "Google Cloud",
      logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png",
      url: "https://cloud.google.com"
    },
    {
      name: "Microsoft Azure",
      logo: "https://azure.microsoft.com/svghandler/azure?width=200&height=200",
      url: "https://azure.microsoft.com"
    },
    
    // Development & DevOps
    {
      name: "GitHub",
      logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png",
      url: "https://github.com"
    },
    {
      name: "GitLab",
      logo: "https://about.gitlab.com/images/press/logo/svg/gitlab-icon-rgb.svg",
      url: "https://gitlab.com"
    },
    {
      name: "Atlassian",
      logo: "https://wac-cdn.atlassian.com/dam/jcr:bc1f15f9-4b40-4c7d-8f3a-2805e54bbbed/Atlassian-horizontal-blue-rgb.svg",
      url: "https://atlassian.com"
    },
    
    // CRM & Marketing
    {
      name: "HubSpot",
      logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png",
      url: "https://hubspot.com"
    },
    {
      name: "Salesforce",
      logo: "https://c1.sfdcstatic.com/content/dam/web/en_us/www/assets/logos/salesforce-with-type-logo.png",
      url: "https://salesforce.com"
    },
    
    // Data & Analytics
    {
      name: "Tableau",
      logo: "https://www.tableau.com/sites/default/files/2020-05/Tableau_Logo.png",
      url: "https://tableau.com"
    },
    {
      name: "Power BI",
      logo: "https://powerbi.microsoft.com/pictures/application-logos/svg/powerbi.svg",
      url: "https://powerbi.microsoft.com"
    },
    {
      name: "Snowflake",
      logo: "https://www.snowflake.com/wp-content/themes/snowflake/assets/img/logo-blue.svg",
      url: "https://snowflake.com"
    },
    {
      name: "Google BigQuery",
      logo: "https://cloud.google.com/bigquery/images/bigquery-logo.png",
      url: "https://cloud.google.com/bigquery"
    },
    
    // Security & CDN
    {
      name: "Cloudflare",
      logo: "https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg",
      url: "https://cloudflare.com"
    },
    
    // Design Tools
    {
      name: "Figma",
      logo: "https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png",
      url: "https://figma.com"
    },
    {
      name: "Adobe XD",
      logo: "https://www.adobe.com/content/dam/cc/icons/xd.svg",
      url: "https://adobe.com/products/xd.html"
    }

  ], []);

  const stats = useMemo(() => [
    { target: 0, suffix: '∞', label: 'Deneyim', icon: Clock },
    { target: 0, suffix: '∞', label: t('why_coffee'), icon: Coffee },
    { target: 0, suffix: '∞', label: t('why_discussions'), icon: Zap }
  ], [language]);

  const contactInfo = useMemo(() => [
    { icon: Mail, text: 'info@cridost.com' },
    { icon: Phone, text: '+90 224 123 45 67' },
    { icon: MapPin, text: 'Bursa, Türkiye' }
  ], []);

  // Custom cursor
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  // Custom cursor
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Loading animation
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  // Language change animation
  const handleLanguageChange = useCallback((newLang: string) => {
    if (newLang === language) return;
    setIsLanguageChanging(true);
    setTimeout(() => {
      setLanguage(newLang);
      setTimeout(() => setIsLanguageChanging(false), 300);
    }, 300);
  }, [language]);

  // Intersection observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-10% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Parallax effect for hero
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (heroRef.current) {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.3;
            heroRef.current.style.transform = `translateY(${parallax}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };



    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  }, []);

  const toggleService = useCallback((index: number) => {
    setExpandedServices(prev => {
      // Eğer tıklanan kart zaten açıksa, kapat
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      // Eğer tıklanan kart kapalıysa, önce tümünü kapat, sonra bu kartı aç
      return [index];
    });
  }, []);

  const toggleFAQ = useCallback((index: number) => {
    setExpandedFAQs(prev => {
      // Eğer tıklanan FAQ zaten açıksa, kapat
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      // Eğer tıklanan FAQ kapalıysa, önce tümünü kapat, sonra bu FAQ'yı aç
      return [index];
    });
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-6xl md:text-8xl font-black mb-8 animate-pulse">CriDost</div>
          <div className="w-32 h-1 bg-white mx-auto animate-pulse"></div>
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white opacity-20 animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-6 h-6 bg-black rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ease-out"
        style={{ 
          transform: 'translate(-50%, -50%)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-black/10 will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Mobile Menu Button - Left */}
            <button
              className="lg:hidden hover:scale-110 transition-transform"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 md:w-8 md:h-8" /> : <Menu className="w-6 h-6 md:w-8 md:h-8" />}
            </button>
            
            {/* Logo - Center on Mobile, Left on Desktop */}
            <div className="text-2xl md:text-3xl font-black tracking-tighter cursor-pointer hover:scale-105 transition-transform lg:order-first order-2">
              CriDost
            </div>
            
            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 order-3">
              {['about', 'services', 'partners', 'why', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className={`relative font-medium transition-all duration-300 hover:scale-110 ${
                    activeSection === section ? 'text-black' : 'text-gray-600'
                  }`}
                >
                  {t(`nav_${section}`)}
                  {activeSection === section && (
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-black animate-pulse" />
                  )}
                </a>
              ))}
            </div>

            {/* Language Selector - Right */}
            <div className="flex items-center space-x-4 order-4">
              <Globe className="w-4 h-4 md:w-5 md:h-5" />
              <div className="hidden sm:flex space-x-1 md:space-x-2">
                {['TR', 'EN', 'DE', 'ES', 'FR'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-2 md:px-3 py-1 text-xs md:text-sm font-bold transition-all duration-300 hover:scale-110 ${
                      language === lang 
                        ? 'bg-black text-white' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              
              {/* Mobile Language Selector */}
              <div className="sm:hidden">
                <select 
                  value={language} 
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="bg-transparent text-sm font-bold border border-black px-2 py-1"
                >
                  {['TR', 'EN', 'DE', 'ES', 'FR'].map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
            </div>


          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-black/10 animate-slideDown">
            <div className="px-4 py-6 space-y-4">
              {['about', 'services', 'partners', 'why', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className="block py-3 text-lg font-medium hover:text-gray-600 transition-colors"
                >
                  {t(`nav_${section}`)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 will-change-transform"
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-4 h-full">
            {[...Array(72)].map((_, i) => (
              <div
                key={i}
                className="border border-black animate-pulse"
                style={{ animationDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>

        <div className={`text-center px-4 max-w-6xl mx-auto transition-all duration-600 ${isLanguageChanging ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none">
              <div>
                <div className="animate-slideUp">
                  <CreativeText text={t('hero_main_title')} />
                </div>
              </div>
            </h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none">
              <div>
                <div className="animate-slideUp" style={{ animationDelay: '200ms' }}>
                  <CreativeText text={t('hero_sub_title')} />
                </div>
              </div>
            </h1>
            <div className="w-32 h-1 bg-black mx-auto mb-8 animate-pulse"></div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-700 max-w-4xl mx-auto leading-relaxed">
              <CreativeText text={t('hero_description')} delay={100} />
            </p>
          </div>
          

        </div>

        {/* Floating elements */}
        <div className="hidden md:block absolute top-20 left-10 w-4 h-4 bg-black animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="hidden md:block absolute top-40 right-20 w-6 h-6 border-2 border-black animate-spin" style={{ animationDuration: '8s' }} />
        <div className="hidden md:block absolute bottom-40 left-20 w-8 h-8 bg-black transform rotate-45 animate-pulse" />
        <div className="hidden md:block absolute bottom-20 right-10 w-3 h-3 bg-black rounded-full animate-ping" />

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-black" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-32 bg-black text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-white animate-pulse"
              style={{
                left: `${i * 2}%`,
                animationDelay: `${i * 100}ms`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-600 ${isLanguageChanging ? 'opacity-0' : 'opacity-100'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Title & Description */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight mb-6">
                  {t('about_title')}
                </h2>
                <p className="text-lg md:text-xl leading-relaxed font-light mb-6">
                  {t('about_text')}
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  {t('about_vision_text')}
                </p>
              </div>
              

            </div>
            
            {/* Right: Icon Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 icon-grid">
              {[
                { icon: Zap, text: t('creative_thinking') },
                { icon: Eye, text: t('pixel_perfect') },
                { icon: ArrowRight, text: t('fast_delivery') },
                { icon: Star, text: t('innovation') },
                { icon: Heart, text: t('customer_focus') },
                { icon: Shield, text: t('quality_assurance') },
                { icon: Cpu, text: t('modern_tech') },
                { icon: Headphones, text: t('continuous_support') },
                { icon: MessageCircle, text: t('transparent_communication') },
                { icon: Target, text: t('result_oriented') }
              ].map((item, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  {item.icon === Eye ? (
                    <EyeIcon 
                      className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 group-hover:scale-125 transition-transform duration-300"
                      mousePosition={mousePosition}
                    />
                  ) : (
                    <item.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-4 group-hover:scale-125 transition-transform duration-300" />
                  )}
                  <p className="text-sm md:text-base font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 bg-white relative">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-600 ${isLanguageChanging ? 'opacity-0' : 'opacity-100'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Title & Description */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
                {t('services_title')}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-lg">
                Kapsamlı dijital çözümlerimizle işinizi büyütün. 
                Teknik detayları bize bırakın, siz sadece sonuçlara odaklanın.
              </p>
              <div className="pt-4">
                <p className="text-base text-gray-500 leading-relaxed">
                  Her hizmetimizde en son teknolojileri kullanarak, 
                  sizin için en iyi sonucu elde ediyoruz. 
                  Performans, güvenlik ve kullanıcı deneyimi konularında endişelenmeyin.
                </p>
              </div>
            </div>
            
            {/* Right: Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 service-grid items-start">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => toggleService(index)}
                className={`group relative border-2 md:border-4 border-black p-4 md:p-6 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer overflow-hidden service-card ${
                  service.title === "E-Commerce Solutions" ? "ecommerce" : ""
                } ${expandedServices.includes(index) ? 'expanded' : ''}`}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                
                <div className="relative z-10">
                  {service.icon === Eye ? (
                    <EyeIcon 
                      className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
                      mousePosition={mousePosition}
                    />
                  ) : (
                    <service.icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  )}
                  <h3 className="text-base md:text-lg font-bold mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-xs md:text-sm opacity-70 group-hover:opacity-100 transition-opacity leading-relaxed mb-3">
                    {service.desc}
                  </p>
                  
                  {/* Sub-services list - Collapsible */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedServices.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <ul className="space-y-2 pt-2 border-t border-current/20">
                      {service.subServices.map((subService, subIndex) => (
                        <li key={subIndex} className="flex items-center text-xs md:text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                          <span className="w-2 h-2 bg-current rounded-full mr-3 flex-shink-0"></span>
                          {subService}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-current animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1 h-8 bg-current group-hover:h-16 transition-all duration-300" />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
       <section id="partners" className="py-16 md:py-32 bg-black text-white relative overflow-hidden">
         
         <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-600 ${isLanguageChanging ? 'opacity-0' : 'opacity-100'}`}>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             {/* Left: Title & Description */}
             <div className="space-y-6">
               <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
                 Solution Partners
               </h2>
               <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-lg">
                 100,000+ büyüyen ekip, dijital çözümleri hızlıca inşa etmek için CriDost'u kullanıyor.
               </p>
               <div className="pt-4">
                 <p className="text-base text-gray-400 leading-relaxed">
                   Projelerimizi güçlendiren global çözüm ortaklarımız ile dijital dünyada iz bırakıyoruz. 
                   En son teknolojileri ve platformları kullanarak sizin için en iyi sonucu elde ediyoruz.
                 </p>
               </div>
             </div>
             
             {/* Right: Partners Grid */}
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 partners-grid">
             {partners.map((partner, index) => (
               <a 
                 key={index}
                 href={partner.url}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group block"
               >
                 <div className="partner-logo flex items-center justify-center h-16 md:h-20 lg:h-24 p-3 md:p-4 lg:p-6 transition-all duration-300 cursor-pointer transform hover:scale-110">
                   <div className="text-center w-full h-full flex items-center justify-center">
                     <img 
                       src={partner.logo}
                       alt={partner.name}
                       className="max-h-full max-w-full object-contain transition-all duration-300"
                       style={{ 
                         height: '32px', 
                         width: 'auto',
                         filter: 'brightness(0) invert(1)'
                       }}
                       onError={(e) => {
                         e.currentTarget.style.display = 'none';
                       }}
                     />
                   </div>
                 </div>
               </a>
             ))}
             </div>
           </div>
         </div>
       </section>

      {/* Why Us Section */}
      <section id="why" className="py-16 md:py-32 bg-white text-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-black animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-600 ${isLanguageChanging ? 'opacity-0' : 'opacity-100'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Title & Description */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
                {t('why_title')}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-lg">
                Neden CriDost'u seçmelisiniz? Çünkü biz sizin için her detayı düşünüyoruz.
              </p>
              <div className="pt-4">
                <p className="text-base text-gray-500 leading-relaxed">
                  Teknik karmaşıklıkları sizin için çözüyoruz. 
                  Siz sadece hedeflerinize odaklanın, geri kalan her şeyi biz halledelim.
                </p>
              </div>
            </div>
            
            {/* Right: Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                {stat.icon === Clock ? (
                  <ClockIcon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 group-hover:scale-125 transition-transform duration-300 text-black" />
                ) : stat.icon === Coffee ? (
                  <CoffeeIcon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 group-hover:scale-125 transition-transform duration-300 text-black" />
                ) : stat.icon === Zap ? (
                  <ZapIcon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 group-hover:scale-125 transition-transform duration-300 text-black" />
                ) : (
                  <stat.icon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 group-hover:scale-125 transition-transform duration-300 text-black" />
                )}
                <div className="text-3xl sm:text-5xl md:text-7xl font-black mb-2 md:mb-4 group-hover:scale-125 transition-transform duration-300">
                  {stat.suffix}
                </div>
                <p className="text-sm md:text-lg font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {stat.label}
                </p>
                <div className="w-8 md:w-16 h-1 bg-black mx-auto mt-2 md:mt-4 group-hover:w-12 md:group-hover:w-24 transition-all duration-300" />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-32 bg-gray-50 relative">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-600 ${isLanguageChanging ? 'opacity-0' : 'opacity-100'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Title & Description */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
                {t('faq_title')}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-600 max-w-lg">
                Sıkça sorulan sorular ve cevapları. 
                Projelerimiz hakkında merak ettiğiniz her şey.
              </p>
              <div className="pt-4">
                <p className="text-base text-gray-500 leading-relaxed">
                  Teknik detaylar ve süreçler hakkında endişelenmeyin. 
                  Her adımda size rehberlik ediyoruz ve tüm sorularınızı yanıtlıyoruz.
                </p>
              </div>
            </div>
            
            {/* Right: FAQ Items */}
            <div className="space-y-4 md:space-y-6 faq-grid">
            {[1, 2, 3, 4, 5].map((faq) => {
              // Her FAQ kartı için gerçekten rastgele eğim yönü ve açısı belirle
              const tiltAngles = ['hover:rotate-1', 'hover:-rotate-1', 'hover:rotate-2', 'hover:-rotate-2', 'hover:rotate-0.5', 'hover:-rotate-0.5', 'hover:rotate-1.5', 'hover:-rotate-1.5'];
              const randomIndex = Math.floor(Math.random() * tiltAngles.length);
              const tiltDirection = tiltAngles[randomIndex];
              
                              return (
                  <div
                    key={faq}
                    onClick={() => toggleFAQ(faq)}
                    className={`group border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 cursor-pointer ${tiltDirection} hover:scale-105 hover:-translate-y-1 hover:shadow-xl`}
                  >
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                        {t(`faq_q${faq}`)}
                      </h3>
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedFAQs.includes(faq) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity">
                          {t(`faq_a${faq}`)}
                        </p>
                      </div>
                    </div>
                    <div className="h-1 bg-black group-hover:bg-white transition-colors duration-300" />
                  </div>
                );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-32 bg-white relative">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-600 ${isLanguageChanging ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-12 md:mb-20 text-center tracking-tighter">
            {t('contact_title')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 contact-grid">
              <div>
              <form className="space-y-6 md:space-y-8">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder={t('contact_name')}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 md:border-4 border-black focus:outline-none focus:border-gray-600 transition-all duration-300 text-base md:text-lg font-medium group-hover:shadow-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full border-2 md:border-4 border-black transform translate-x-1 md:translate-x-2 translate-y-1 md:translate-y-2 -z-10 group-hover:translate-x-0.5 md:group-hover:translate-x-1 group-hover:translate-y-0.5 md:group-hover:translate-y-1 transition-transform duration-300" />
                </div>
                
                <div className="relative group">
                  <input
                    type="email"
                    placeholder={t('contact_email')}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 md:border-4 border-black focus:outline-none focus:border-gray-600 transition-all duration-300 text-base md:text-lg font-medium group-hover:shadow-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full border-2 md:border-4 border-black transform translate-x-1 md:translate-x-2 translate-y-1 md:translate-y-2 -z-10 group-hover:translate-x-0.5 md:group-hover:translate-x-1 group-hover:translate-y-0.5 md:group-hover:translate-y-1 transition-transform duration-300" />
                </div>
                
                <div className="relative group">
                  <textarea
                    rows={4}
                    placeholder={t('contact_message')}
                    className="w-full px-4 md:px-6 py-3 md:py-4 border-2 md:border-4 border-black focus:outline-none focus:border-gray-600 transition-all duration-300 resize-none text-base md:text-lg font-medium group-hover:shadow-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full border-2 md:border-4 border-black transform translate-x-1 md:translate-x-2 translate-y-1 md:translate-y-2 -z-10 group-hover:translate-x-0.5 md:group-hover:translate-x-1 group-hover:translate-y-0.5 md:group-hover:translate-y-1 transition-transform duration-300" />
                </div>
                
                <button
                  type="submit"
                  className="relative w-full bg-black text-white py-4 md:py-6 font-bold text-lg md:text-xl hover:bg-white hover:text-black border-2 md:border-4 border-black transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">{t('contact_send')}</span>
                  <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </button>
              </form>
            </div>
            
            <div className="space-y-8 md:space-y-12">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-6 group cursor-pointer">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <contact.icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <span className="text-lg md:text-xl font-medium group-hover:translate-x-2 transition-transform duration-300">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="text-4xl md:text-9xl font-black text-center pt-8 animate-pulse">
            CriDost
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-black mb-4 md:mb-6 tracking-tighter">CriDost</div>
            <div className="w-16 md:w-24 h-1 bg-white mx-auto mb-4 md:mb-6" />
            <p className="text-gray-400 text-sm md:text-lg">© 2024 CriDost. {t('footer_rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;