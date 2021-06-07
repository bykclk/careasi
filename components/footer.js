export default function Footer() {
  return (
    <footer className="footer-section pt-70-145">
      <div
        className="dot-slider bg_img"
        data-background="./assets/css/img/footer-dots.png"
      ></div>
      <div className="container">
        <div className="footer-top cl-white padding-bottom padding-top">
          <div className="row mb--50 justify-content-between">
            <div className="col-sm-12 col-lg-12">
              <div className="footer-widget widget-about">
                <div className="logo-area">
                  <div className="logo">
                    <a href="/">
                      {/* <img
                        src="/assets/images/default-monochrome-white.svg"
                        style="width: 177px"
                        alt="Çare Aşı Logo"
                      /> */}
                    </a>
                  </div>
                </div>
                <p>
                  Covid-19 mücadelesinde çare aşı! Çare Aşı projesi aşıyla
                  ilgili sorusu olanların sorularına kolay cevap bulması için
                  tasarlanmış bir platformdur.
                </p>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://www.facebook.com/Care-Asi-110728854422771"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/careasiorg" className="">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/careasiorg">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/eresbiotech/careasi">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom cl-white">
          <p>
            Copyright &copy; 2021 <a href="#0">Çare Aşı</a> - Destekleyen{" "}
            <a href="https://www.bilimma.com">Bilimma</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
