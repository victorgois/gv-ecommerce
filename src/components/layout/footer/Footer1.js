import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-65">
          <div className="container">
            <div className="main-footer pb-15 mb-30">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="footer-widget footer-col-1 mb-40">
                    <div className="footer-logo mb-30">
                      <Link href="/">
                        <img src="/assets/img/logo/logo.png" alt="logo" />
                      </Link>
                    </div>
                    <div className="footer-content">
                      <p>
                        GV Distribuidora é uma empresa de distribuição de
                        produtos de tabacaria.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="footer-widget footer-col-2 ml-30 mb-40">
                    <h4 className="footer-widget__title mb-30">Information</h4>
                    <div className="footer-widget__links">
                      <ul>
                        <li>
                          <Link href="#">FAQs</Link>
                        </li>
                        <li>
                          <Link href="/track">Rastreio</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contato</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="footer-widget footer-col-3 mb-40">
                    <h4 className="footer-widget__title mb-30">Minha Conta</h4>
                    <div className="footer-widget__links">
                      <ul>
                        <li>
                          <Link href="#">Informações de Entrega</Link>
                        </li>
                        <li>
                          <Link href="#">Política de Privacidade</Link>
                        </li>
                        <li>
                          <Link href="#">Descontos</Link>
                        </li>
                        <li>
                          <Link href="#">Serviço Personalizado</Link>
                        </li>
                        <li>
                          <Link href="#">Termos e Condições</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="footer-widget footer-col-4 mb-40">
                    <h4 className="footer-widget__title mb-30">
                      Redes Sociais
                    </h4>
                    <div className="footer-widget__links">
                      <ul>
                        <li>
                          <Link href="#">
                            <i className="fab fa-facebook-f" />
                            Facebook
                          </Link>
                        </li>

                        <li>
                          <Link href="#">
                            <i className="fab fa-youtube" />
                            Youtube
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="footer-widget footer-col-5 mb-40">
                    <h4 className="footer-widget__title mb-30">
                      Receba nossa Newsletter
                    </h4>
                    <p>
                      Receba nossa newsletter e ganhe 10% de desconto na sua
                      primeira compra!
                    </p>
                    <div className="footer-widget__newsletter">
                      <form action="#">
                        <input type="email" placeholder="Enter email address" />
                        <button className="footer-widget__fw-news-btn tpsecondary-btn">
                          Inscreva-se agora
                          <i className="fal fa-long-arrow-right" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-cta pb-20">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6">
                  <div className="footer-cta__contact">
                    <div className="footer-cta__icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="footer-cta__text">
                      <Link href="/tel:0123456">980. 029. 666. 99</Link>
                      <span>Horário de atendimento: 8:00 - 22:00</span>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                  <div className="footer-cta__source">
                    <div className="footer-cta__source-content">
                      <h4 className="footer-cta__source-title">
                        Baixe nosso App
                      </h4>
                      <p>15% de desconto na sua primeira compra</p>
                    </div>
                    <div className="footer-cta__source-thumb">
                      <Link href="#">
                        <img
                          src="/assets/img/footer/f-google.jpg"
                          alt="google"
                        />
                      </Link>
                      <Link href="#">
                        <img src="/assets/img/footer/f-app.jpg" alt="app" />
                      </Link>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="footer-copyright footer-bg">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-5 col-sm-12">
                  <div className="footer-copyright__content">
                    <span>
                      Copyright {new Date().getFullYear()}{" "}
                      <Link href="/">©GV Distribuidora</Link>. Todos os direitos
                      reservados. Desenvolvido por
                      <Link href="https://victorgois.dev"> Victor Góis </Link>.
                    </span>
                  </div>
                </div>
                {/* <div className="col-xl-6 col-lg-5 col-md-7 col-sm-12">
                  <div className="footer-copyright__brand">
                    <img
                      src="/assets/img/footer/f-brand-icon-01.png"
                      alt="footer-brand"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
