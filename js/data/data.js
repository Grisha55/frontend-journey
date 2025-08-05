/**
 * @typedef {import('../components/Footer/types').Footer} Footer
 * @typedef {import('../components/Modal/types').Modal} Modal
 */

export const data = {
  header: {
    // Логотип
    logo: {
      type: "button",
      id: "logo",
      img: {
        src: "assets/icons/logo_light.svg",
        alt: "ZEN",
      },
    },

    // Навигационное меню
    nav: {
      menu: {
        id: "menu",
        items: [
          { href: "#download", text: "Download" },
          { href: "#warranty", text: "Warranty" },
          { href: "#care", text: "Care" },
          { href: "#cashback", text: "Cashback" },
          { href: "#clients", text: "Clients" },
        ],
      },
    },

    // Блок действий (язык, тема, бургер)
    actions: {
      // Языковой переключатель
      lang: {
        arrow: {
          src: "assets/icons/arrow.svg",
          alt: "",
        },
        select: {
          id: "lang",
          options: [
            { value: "en", text: "EN" },
            { value: "ru", text: "RU" },
          ],
        },
      },

      // Кнопка темы
      theme: {
        type: "button",
        id: "theme",
        img: {
          src: "assets/icons/moon.svg",
          alt: "Moon",
        },
      },

      // Бургер-меню
      burger: {
        type: "button",
        id: "burger",
      },
    },
  },
  meta: {
    key: "meta",
    sections: ["download", "warranty", "care", "cashback", "clients"],
    categories: [
      {
        name: "Learn",
        links: [
          {
            name: "Help center",
            url: "https://example.com",
          },
          {
            name: "Join ZEN team",
            url: "https://example.com",
          },
          {
            name: "Privacy Policy",
            url: "https://example.com",
          },
          {
            name: "Cookies",
            url: "https://example.com",
          },
          {
            name: "Terms of use",
            url: "https://example.com",
          },
        ],
      },
    ],
    details: [
      "ZEN is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.",
      "Registration number of the company 304749651, VAT ID LT100011714916.",
      "License of electronic money institutions number LB000457.",
      "Share capital 2.185.000,00 EUR.",
      "Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.",
      "Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.",
    ],
  },
  download: {
    key: "download",
    title: {
      value: "Peaceful shopping mindful money",
      priority: 1,
    },
    texts: [
      "See how we can help with making your shopping experience and money management more ZEN.",
    ],
    stores: [
      {
        name: "app store",
        key: "apple",
      },
      {
        name: "google play",
        key: "google",
      },
    ],
    image: {
      source: "/assets/images/1.jpg",
      description: "image 1",
    },
  },
  warranty: {
    key: "warranty",
    title: {
      value: "1-year warranty boost",
      priority: 2,
    },
    texts: [
      "ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.",
      "When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.",
    ],
    image: {
      source: "/assets/images/2.jpg",
      description: "image 2",
    },
  },
  care: {
    key: "care",
    title: {
      value: "ZEN Care",
      priority: 2,
    },
    texts: [
      "Shopping online is usually a delightful experience. Until it's not.",
      "Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.",
      "But, here comes ZEN Care: a free, built-in shopping protection.",
    ],
    image: {
      source: "/assets/images/2.jpg",
      description: "care",
    },
  },
  cashback: {
    key: "cashback",
    title: {
      value: "and cashback!",
      priority: 2,
    },
    texts: [
      "It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.",
      "We gave it a thought and made cashback way more friendly.",
      "Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.",
    ],
    button: {
      text: "Order a consultation",
      type: "button",
    },
    clients: {
      key: "clients",
      images: [
        {
          source: "/assets/stores/1.svg",
          description: "store 1",
        },
        {
          source: "/assets/stores/2.svg",
          description: "store 2",
        },
        {
          source: "/assets/stores/3.svg",
          description: "store 3",
        },
        {
          source: "/assets/stores/4.svg",
          description: "store 4",
        },
        {
          source: "/assets/stores/5.svg",
          description: "store 5",
        },
        {
          source: "/assets/stores/6.svg",
          description: "store 6",
        },
        {
          source: "/assets/stores/7.svg",
          description: "store 7",
        },
        {
          source: "/assets/stores/8.svg",
          description: "store 8",
        },
      ],
    },
  },
  clients: {
    key: 'clients',
    clients: [
      {
        image: {
          sourceLight: '/assets/stores/light/1.svg',
          sourceDark: '/assets/stores/dark/1.svg',
          description: 'store 1'
        },
      },
      {
        image: {
          sourceLight: '/assets/stores/light/2.svg',
          sourceDark: '/assets/stores/dark/2.svg',
          description: 'store 2'
        },
      },
      {
        image: {
          sourceLight: '/assets/stores/light/3.svg',
          sourceDark: '/assets/stores/dark/3.svg',
          description: 'store 3'
        },
      },
      {
        image: {
          sourceLight: '/assets/stores/light/4.svg',
          sourceDark: '/assets/stores/dark/4.svg',
          description: 'store 4'
        },
      },
      {
        image: {
          sourceLight: '/assets/stores/light/5.svg',
          sourceDark: '/assets/stores/dark/5.svg',
          description: 'store 5'
        },
      },
      {
        image: {
          sourceLight: '/assets/stores/light/6.svg',
          sourceDark: '/assets/stores/dark/6.svg',
          description: 'store 6'
        },
      },
      {
        image: {
          sourceLight: '/assets/stores/light/7.svg',
          sourceDark: '/assets/stores/dark/7.svg',
          description: 'store 7'
        },
      },
      {
        image: {
          sourceLight: '/assets/stores/light/8.svg',
          sourceDark: '/assets/stores/dark/8.svg',
          description: 'store 8'
        },
      },
    ],
  },
  footer: /** @type {Footer} */ ({
    logo: {
      src: "assets/icons/logo2.svg",
      alt: "logo",
      url: "https://example.com",
    },
    columns: [
      {
        type: "default",
        title: "Learn",
        links: [
          { text: "Help center", url: "https://example.com" },
          { text: "Join ZEN team", url: "https://example.com" },
          { text: "Privacy Policy", url: "https://example.com" },
          { text: "Cookies", url: "https://example.com" },
          { text: "Terms of use", url: "https://example.com" },
        ],
      },
      {
        type: "default",
        title: "Discover",
        links: [
          { text: "For developers", url: "https://example.com" },
          { text: "Apple Pay", url: "https://example.com" },
          { text: "Google Pay", url: "https://example.com" },
        ],
      },
      {
        type: "default",
        title: "Offer",
        links: [
          { text: "Business", url: "https://example.com" },
          { text: "Personal", url: "https://example.com" },
        ],
      },
      {
        type: "default",
        title: "Language",
        links: [
          { text: "English", url: "https://example.com" },
          { text: "Polish", url: "https://example.com" },
        ],
      },
      {
        type: "social",
        title: "Follow us",
        socialIcons: [
          {
            url: "https://example.com",
            iconSrc: "assets/icons/in.svg",
            iconAlt: "Linkedin",
          },
        ],
      },
      {
        type: "contact",
        title: "Contact",
        email: "hello@zen.com",
      },
    ],
    infoTexts: [
      "ZEN is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.",
      "Registration number of the company 304749651, VAT ID LT100011714916.",
      "License of electronic money institutions number LB000457.",
      "Share capital 2.185.000,00 EUR.",
      "Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.",
      "Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.",
    ],
    developerLogo: {
      src: "assets/icons/developer.svg",
      alt: "Developer",
      url: "https://example.com",
    },
  }),
  modal: {
    image: {
      source: "assets/icons/close.svg",
      description: "Close modal window"
    },
    title: "Order a Consultation",
    formFields: [
      /** @type {import('../components/Modal/types').TextFormField} */ ({
        type: "text",
        id: "name",
        label: "Name"
      }),
      /** @type {import('../components/Modal/types').TextFormField} */ ({
        type: "tel",
        id: "tel",
        label: "Phone Number"
      }),
      /** @type {import('../components/Modal/types').TextFormField} */ ({
        type: "email",
        id: "email",
        label: "Email Address"
      }),
      /** @type {import('../components/Modal/types').SelectFormField} */ ({
        type: "select",
        id: "connection",
        label: "Preferred Contact Method",
        options: [
          {
            value: "telegram",
            text: "Telegram"
          },
          {
            value: "whatsapp",
            text: "WhatsApp"
          }
        ]
      }),
     /** @type {import('../components/Modal/types').CheckboxFormField} */ ({
        type: "checkbox",
        id: "policy",
        label: "I agree to the Privacy Policy"
      })
    ],
    privacyPolicyUrl: "https://example.com/privacy-policy",
    submitButtonText: "Submit Request"
  }
};
