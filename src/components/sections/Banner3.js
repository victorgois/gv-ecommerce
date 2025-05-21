import Link from "next/link";

export default function Banner3() {
  return (
    <>
      <section className="banner-area pt-15">
        <div className="bannerborder">
          <div className="container-fluid">
            <div className="row gx-3">
              <div className="col-lg-4 col-md-12">
                <div className="banneritem banneroverlay p-relative">
                  <div className="banner-thumb-01" />
                  <div className="bannertext text-center">
                    <span className="bannertext__subtitle">Tabacaria</span>
                    <h4 className="bannertext__title mb-40">
                      <Link href="/shop">
                        Produtos Premium <br /> para Tabacaria
                      </Link>
                    </h4>
                    <div className="bannertext__btn tpexclusive__btn">
                      <Link href="/shop" className="tp-btn banner-animation">
                        Comprar Agora
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="banneritem banner-animation mb-15 p-relative">
                  <div className="banner-thumb-02" />
                  <div className="bannerbox">
                    <span className="bannerbox__subtitle">Acessórios</span>
                    <h4 className="bannerbox__title mb-95">
                      <Link href="/shop">
                        Acessórios <br /> Premium
                      </Link>
                    </h4>
                    <div className="bannerbox__btn">
                      <Link
                        className="tp-btn banner-animation mr-25"
                        href="/shop"
                      >
                        Comprar Agora
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="banneritem banner-animation p-relative">
                  <div className="banner-thumb-03" />
                  <div className="bannerbox">
                    <h4 className="bannerbox__title banner-bottom-title">
                      <Link href="/shop">50% de Desconto</Link>
                    </h4>
                    <span className="bannerbox__subtitle banner-bottom-bg mb-130">
                      Em Produtos <Link href="/shop">Selecionados</Link>
                    </span>
                    <div className="bannerbox__btn">
                      <Link
                        className="tp-btn banner-animation mr-25"
                        href="/shop"
                      >
                        Comprar Agora
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="banneritem banner-animation p-relative">
                  <div className="banner-thumb-04" />
                  <div className="bannerbox">
                    <span className="bannerbox__subtitle banner-right-bg mb-200">
                      Featured Brand
                    </span>
                    <div className="bannerbox__btn">
                      <Link
                        className="tp-btn banner-animation mr-25"
                        href="/shop-2"
                      >
                        Shop Now
                        <i className="fal fa-long-arrow-right" />
                      </Link>
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
