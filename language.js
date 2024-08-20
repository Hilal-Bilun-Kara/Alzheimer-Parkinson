const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    menu: "Menu",
    description: "This is a sample text.",
  },
  tr: {
    home: "Anasayfa",
    about: "Hakkımızda",
    services: "Hizmetlerimiz",
    menu: "Menü",
    description: "Bu bir örnek metindir.",
  },
};

function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[lang][key];
  });
}
