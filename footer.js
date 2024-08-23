document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `<footer id="footer" class="footer">
      <div class="footer-newsletter">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-6">
              <h4 data-key="subscribenewsletter">Bültenimize Abone Olun</h4>
              <p data-key="subscribenewsletterdesc">
                Bültenimize abone olun ve ürünlerimiz ve hizmetlerimiz
hakkındaki en son haberleri alın!
              </p>
              <form
                action="forms/newsletter.php"
                method="post"
                class="php-email-form"
              >

                <div class="newsletter-form">
                  <input type="email" name="email" placeholder="Email" />
                  <input type="submit" id="submitBtn" value="Gönder" />
              </div>
              
            
                <div class="loading">Yükleniyor
                </div>
                <div class="error-message"></div>
                <div class="sent-message">
                  Your subscription request has been sent. Thank you!
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="container footer-top">
        <div class="row gy-4">
          <div class="col-lg-4 col-md-6 footer-about">
            <a href="index.html" class="d-flex align-items-center">
              <span class="sitename">ParkınHeımer</span>
            </a>
            <div class="footer-contact pt-3">
              <p>TeknoPark, CubeIncubation</p>
              <p class="mt-3">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p><strong>Email:</strong> <span>info@parkinheimer.com</span></p>
            </div>
          </div>

          <div class="col-lg-4 col-md-12">
            <h4 data-key="followus">Takip Edin</h4>
            <div class="social-links d-flex">
              <a href=""><i class="bi bi-twitter-x"></i></a>
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong class="px-1 sitename">ParkinHeimer</strong>
          <span>All Rights Reserved</span>
        </p>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you've purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
          Designed by <a href="https://bootstrapmade.com/">ParkinHeimer</a>
        </div>
      </div>
    </footer>`;

  document.getElementById("footer-container").innerHTML = footerHTML;
});

document
  .getElementById("language-selector")
  .addEventListener("change", function () {
    const submitBtn = document.getElementById("submitBtn");
    const selectedLanguage = this.value;

    if (selectedLanguage === "en") {
      submitBtn.value = "Send";
    } else if (selectedLanguage === "tr") {
      submitBtn.value = "Gönder";
    }
  });
