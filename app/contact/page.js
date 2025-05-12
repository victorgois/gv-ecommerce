"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <div>
          <section className="contact-area pt-80 pb-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="tpcontact__right mb-40">
                    <div className="tpcontact__shop mb-30">
                      <h4 className="tpshop__title mb-25">
                        {t("Get In Touch")}
                      </h4>
                      <div className="tpshop__info">
                        <ul>
                          <li>
                            <i className="fal fa-map-marker-alt" />{" "}
                            <Link href="#">
                              Rua Exemplo, 123 - São Paulo, SP, Brasil
                            </Link>
                          </li>
                          <li>
                            <i className="fal fa-phone" />
                            <Link href="/tel:0123456789">
                              +55 (11) 98765-4321
                            </Link>
                            <Link href="/tel:0123456789">
                              +55 (11) 3456-7890
                            </Link>
                          </li>
                          <li>
                            <i className="fal fa-clock" />
                            <span>{t("Store Hours")}:</span>
                            <span>10h às 22h, 7 dias por semana</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tpcontact__support">
                      <Link href="/tel:0123456">
                        {t("Get Support On Call")}{" "}
                        <i className="fal fa-headphones" />
                      </Link>
                      <Link
                        target="_blank"
                        href="https://www.google.com/maps/@36.963672,-119.2249843,7.17z"
                      >
                        {t("Get Direction")}{" "}
                        <i className="fal fa-map-marker-alt" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="tpcontact__form">
                    <div className="tpcontact__info mb-35">
                      <h4 className="tpcontact__title">
                        {t("Make Custom Request")}
                      </h4>
                      <p>Quer receber nossas novidades e ofertas especiais?</p>
                    </div>
                    <form
                      action="https://weblearnbd.net/tphtml/ninico/assets/mail.php"
                      id="contact-form"
                      method="POST"
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="tpcontact__input mb-20">
                            <input
                              name="name"
                              type="text"
                              placeholder={t("Full name")}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tpcontact__input mb-20">
                            <input
                              name="email"
                              type="email"
                              placeholder={t("Email address")}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tpcontact__input mb-20">
                            <input
                              name="number"
                              type="text"
                              placeholder={t("Phone number")}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="tpcontact__input mb-20">
                            <input
                              name="subject"
                              type="text"
                              placeholder={t("Subject")}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="tpcontact__input mb-30">
                            <textarea
                              name="message"
                              placeholder={t("Enter message")}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="tpcontact__submit">
                        <button className="tp-btn tp-color-btn tp-wish-cart">
                          {t("Get A Quote")}
                        </button>
                      </div>
                    </form>
                    <p className="ajax-response mt-30" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* área de contato - fim */}
          {/* área do mapa - início */}
          <div className="map-area">
            <div className="tpshop__location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193313.696093143!2d-74.25983952323838!3d40.794422695521675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1663062642075!5m2!1sen!2sbd"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
