document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
      <header id="header" class="header d-flex align-items-center fixed-top">
      <div
        class="container-fluid container-xl position-relative d-flex align-items-center"
      >
        <a href="index.html" class="logo d-flex align-items-center me-auto">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <img
            src="assets/img/masonry-portfolio/stethoscope-icon.webp"
            alt=""
          />
            <h1 class="sitename">ParkinHeimer</h1>
          </a>
  
          <nav id="navmenu" class="navmenu">
            <ul>
              <li><a data-key="home" href="#hero" class="active">Anasayfa</a></li>
              <li><a data-key="about" href="#about">Hakkımızda</a></li>
              <li><a data-key="services" href="#services">Hizmetlerimiz</a></li>
              <li class="dropdown">
                <a data-key="menu" href="#"
                  ><span>Menü</span>
                  <i class="bi bi-chevron-down toggle-dropdown"></i
                ></a>
                <ul>
                  <li><a href="/folderupload.html">Görüntü Yükle</a></li>
                  <li><a href="/resultspage.html">Sonuçlarım</a></li>
                </ul>
              </li>
              <li><a href="#contact">İletişim</a></li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
  
          <a class="btn-getstarted" href="/login.html" id="loginButton">Üye Ol <b> / </b> Giriş Yap</a>

  <div id="language-selector">
      <select id="language-select">
        <option value="tr">TR</option>
        <option value="en">EN</option>
      </select>
    </div>
        </div>
      </header>
    `;

  document.getElementById("header-container").innerHTML = headerHTML;
  // Your existing JavaScript code for language switching
});

document.addEventListener("DOMContentLoaded", function () {
  const languageSelect = document.getElementById("language-select");

  languageSelect.addEventListener("change", function () {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
  });
});

function changeLanguage(lang) {
  // Dil değiştirme işlemini burada yapın
  console.log("Dil değiştirildi:", lang);

  // Örneğin, dil dosyalarını yüklemek veya i18n kütüphanesi kullanmak gerekebilir
  // Bu işlem dil değiştirme kütüphanenize bağlı olarak değişir

  // Sayfa yenileme veya gerekli değişiklikler yapılabilir
  // location.reload(); gibi bir sayfa yenileme işlemi yapılabilir
}
