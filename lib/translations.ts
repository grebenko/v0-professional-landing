export const translations = {
  en: {
    nav: {
      about: "About",
      expertise: "Expertise",
      contact: "Contact",
    },
    hero: {
      name: "Aleksandr Grebenko",
      tagline: "Elegant Finance, Reliable Technology",
      title: "Business Systems Analyst | Fintech Solution Architect",
      subtitle: "Bridging Business Vision with Digital Precision",
      downloadCV: "Download CV",
      linkedin: "LinkedIn",
    },
    about: {
      title: "About Me",
      content:
        "I specialize in business systems analysis, product ownership and solution architecture for fintech and banking. I translate complex business needs into robust, scalable digital solutions, aligning strategic goals with technical feasibility. My approach combines the discipline of classic finance with a modern product mindset.",
    },
    expertise: {
      title: "Core Expertise",
      items: [
        {
          title: "Business Analysis",
          description:
            "Requirements gathering, process optimization, and stakeholder alignment for complex financial systems.",
        },
        {
          title: "Solution Architecture",
          description: "Designing scalable fintech solutions that balance innovation with regulatory compliance.",
        },
        {
          title: "Product Strategy",
          description: "Product roadmap development and feature prioritization for digital banking platforms.",
        },
      ],
    },
    contact: {
      title: "Let's Connect",
      subtitle: "Ready to discuss your next fintech project?",
      email: "Email Me",
      linkedin: "LinkedIn Profile",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      expertise: "Экспертиза",
      contact: "Контакты",
    },
    hero: {
      name: "Александр Гребенко",
      tagline: "Элегантные Финансы, Надёжные Технологии",
      title: "Бизнес-аналитик | Архитектор Финтех-решений",
      subtitle: "Соединяю Бизнес-видение с Цифровой Точностью",
      downloadCV: "Скачать CV",
      linkedin: "LinkedIn",
    },
    about: {
      title: "Обо мне",
      content:
        "Я специализируюсь на анализе бизнес-систем, управлении продуктами и архитектуре решений для финтеха и банкинга. Я перевожу сложные бизнес-потребности в надёжные, масштабируемые цифровые решения, согласовывая стратегические цели с технической осуществимостью. Мой подход сочетает дисциплину классических финансов с современным продуктовым мышлением.",
    },
    expertise: {
      title: "Основная Экспертиза",
      items: [
        {
          title: "Бизнес-анализ",
          description:
            "Сбор требований, оптимизация процессов и согласование заинтересованных сторон для сложных финансовых систем.",
        },
        {
          title: "Архитектура Решений",
          description:
            "Проектирование масштабируемых финтех-решений, балансирующих инновации с соблюдением нормативных требований.",
        },
        {
          title: "Продуктовая Стратегия",
          description: "Разработка дорожной карты продукта и приоритизация функций для платформ цифрового банкинга.",
        },
      ],
    },
    contact: {
      title: "Давайте Свяжемся",
      subtitle: "Готовы обсудить ваш следующий финтех-проект?",
      email: "Написать Email",
      linkedin: "Профиль LinkedIn",
    },
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
