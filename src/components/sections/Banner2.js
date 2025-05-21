import Link from "next/link";

export default function Banner2() {
  return (
    <>
      <section className="banner-area pb-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="tpbanneritems p-relative">
                <div className="tpbanneritem__thumb mb-20">
                  <div className="banner-03-01" />
                  <div className="tpbanneritem__content">
                    <p>Tabacaria</p>
                    <h5 className="tpbanneritem__title mb-60">
                      <Link href="/shop-2">
                        Produtos Premium <br /> para Tabacaria
                      </Link>
                    </h5>
                    <div className="tpbanneritem__btn">
                      <Link
                        className="tp-btn green-btn banner-animation"
                        href="/shop-2"
                      >
                        Comprar Agora <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="tpbanneritem">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="tpbanneritem__thumb banner-animation p-relative">
                      <div className="banner-03-02" />
                      <div className="tpbanneritem__text">
                        <h5 className="tpbanneritem__text-title">
                          <Link href="/shop-2">
                            Acessórios <br /> Premium
                          </Link>
                        </h5>
                      </div>
                      <span className="tp-banner-item-small">
                        100 Adicionados
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="tpbanneritem__thumb banner-animation p-relative">
                      <div className="banner-03-03" />
                      <div className="tpbanneritem__text">
                        <h5 className="tpbanneritem__text-title">
                          <Link href="/shop">Tabaco Premium</Link>
                        </h5>
                        <h3 className="tpbanneritem__text-price">
                          -60% Oferta
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
