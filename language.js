const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    menu: "Menu",
    uploadimage: "Upload Image",
    myresults: "My results",
    contact: "Contact",
    signlogin: "Sign Up / Log In",
    description: "This is a sample text.",
  },
  tr: {
    home: "Anasayfa",
    about: "Hakkımızda",
    services: "Hizmetlerimiz",
    menu: "Menü",
    uploadimage: "Görüntü Yükle",
    myresults: "Sonuçlarım",
    contact: "İletişim",
    signlogin: "Üye Ol / Giriş Yap",
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
