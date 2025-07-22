/**
 * @typedef {import('../components/Footer/types.ts').Footer} Footer
 */

window.addEventListener("DOMContentLoaded", () => {

  /** @type {HTMLFormElement | null} */
  const form = document.querySelector("form#order");

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const tel = formData.get("tel")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const connection = document.getElementById("connection");
    const policy = document.getElementById("policy");


    const data = {
      userData: {
        name,
        tel,
        email,
        connection,
      },
      header: {
        // Логотип
        logo: {
          type: "button",
          id: "logo",
          img: {
            src: "assets/icons/logo.svg",
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
              sourceLight: '/assets/brands/light/1.svg',
              sourceDark: '/assets/brands/dark/1.svg',
              description: "brand 1",
            },
            {
              sourceLight: '/assets/brands/light/2.svg',
              sourceDark: '/assets/brands/dark/2.svg',
              description: "brand 2",
            },
            {
              sourceLight: '/assets/brands/light/3.svg',
              sourceDark: '/assets/brands/dark/3.svg',
              description: "brand3"
            },
            {
              sourceLight: '/assets/brands/light/4.svg',
              sourceDark: '/assets/brands/dark/4.svg',
              description: "brand 4",
            },
            {
              sourceLight: '/assets/brands/light/5.svg',
              sourceDark: '/assets/brands/dark/5.svg',
              description: "brand 5",
            },
            {
              sourceLight: '/assets/brands/light/6.svg',
              sourceDark: '/assets/brands/dark/6.svg',
              description: "brand 6",
            },
            {
              sourceLight: '/assets/brands/light/7.svg',
              sourceDark: '/assets/brands/dark/7.svg',
              description: "brand 7",
            },
            {
              sourceLight: '/assets/brands/light/8.svg',
              sourceDark: '/assets/brands/dark/8.svg',
              description: "brand 8",
            },
          ],
        },
      },
      clients: {
        key: "clients",
        clients: [
          {
            image: {
              sourceLight: '/assets/brands/light/1.svg',
              sourceDark: '/assets/brands/dark/1.svg',
              description: "brand 1",
            },
          },
          {
            image: {
              sourceLight: '/assets/brands/light/2.svg',
              sourceDark: '/assets/brands/dark/2.svg',
              description: "brand 2",
            },
          },
          {
            image: {
              sourceLight: '/assets/brands/light/3.svg',
              sourceDark: '/assets/brands/dark/3.svg',
              description: "brand 3",
            },
          },
          {
            image: {
              sourceLight: '/assets/brands/light/4.svg',
              sourceDark: '/assets/brands/dark/4.svg',
              description: "brand 4",
            },
          },
          {
            image: {
              sourceLight: '/assets/brands/light/5.svg',
              sourceDark: '/assets/brands/dark/5.svg',
              description: "brand 5",
            },
          },
          {
            image: {
              sourceLight: '/assets/brands/light/6.svg',
              sourceDark: '/assets/brands/dark/6.svg',
              description: "brand 6",
            },
          },
          {
            image: {
              sourceLight: '/assets/brands/light/7.svg',
              sourceDark: '/assets/brands/dark/7.svg',
              description: "brand 7",
            },
          },
          {
            image: {
              sourceLight: '/assets/brands/light/8.svg',
              sourceDark: '/assets/brands/dark/8.svg',
              description: "brand 8",
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
          source: "assets/icons/close-icon.svg",
          description: "Close modal window",
        },
        title: "Request a Consultation",
        formFields: [
          /** @type {import('../components/Modal/types').TextFormField} */ ({
            type: "text",
            id: "name",
            label: "Name",
            value: name,
          }),
          /** @type {import('../components/Modal/types').TextFormField} */ ({
            type: "tel",
            id: "tel",
            label: "Phone Number",
            value: tel,
          }),
          /** @type {import('../components/Modal/types').TextFormField} */ ({
            type: "email",
            id: "email",
            label: "Email Address",
            value: email,
          }),
          /** @type {import('../components/Modal/types').SelectFormField} */ ({
            type: "select",
            id: "connection",
            label: "Preferred Contact Method",
            value: connection,
            options: [
              {
                value: "telegram",
                text: "Telegram",
              },
              {
                value: "whatsapp",
                text: "WhatsApp",
              },
            ],
          }),
          /** @type {import('../components/Modal/types').CheckboxFormField} */ ({
            type: "checkbox",
            id: "policy",
            label: "I agree to the Privacy Policy",
            checked: policy,
          }),
        ],
        privacyPolicyUrl: "https://example.com/privacy-policy",
        submitButtonText: "Submit Request",
      },
    };
    console.log(data);

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      alert('Form successfully posted');

      form.reset();

    } catch (error) {
      console.error(error);
      console.log('Eroor to send form')
    }
  });
});
