import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Banner from "../components/banner";
import CookieConsent from "react-cookie-consent";

export default function Layout({ preview, children, title }) {
  return (
    <>
      <Meta />
      <Header />
      <Banner title={title} />
      {children}
      <div className="have-questions-section mb--70--145">
        <div className="container">
          <div className="have-question-wrapper">
            <div className="row">
              <div className="col-lg-8">
                <div className="have-question-content">
                  <h2 className="title">Başka Sorularınız mı Var?</h2>
                  <p>Hemen bize yazabilirsiniz.</p>
                  <a href="mailto:bilgi@careasi.org" className="custom-button">
                    İletişim: bilgi@careasi.org
                  </a>
                </div>
              </div>
              <div className="right-thumb d-none d-lg-block">
                <Image
                  layout="fill"
                  alt="faq"
                  src="/images/faq/have-questions.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CookieConsent
        style={{ background: "#372c7a" }}
        buttonText="Anladım"
        buttonStyle={{ marginRight: "20px" }}
      >
        Bu web sayfası yalnızca{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
        >
          Google Analytics
        </a>
        'in ihtiyaç duyduğu çerezleri kullanır.
      </CookieConsent>
      <Footer />
      
    </>
  );
}
