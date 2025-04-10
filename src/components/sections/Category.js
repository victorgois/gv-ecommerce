"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useEffect, useState } from "react";

export default function Category() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="category-area pt-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tpsection mb-40">
                <h4 className="tpsection__title">Categorias</h4>
              </div>
            </div>
          </div>
          <div className="custom-row category-border pb-45 justify-content-xl-between">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="tpcategory mb-40">
                <div className="tpcategory__icon p-relative">
                  <span>{/* Placeholder */}</span>
                </div>
                <div className="tpcategory__content">
                  <h5 className="tpcategory__title">Carregando...</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="category-area pt-70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tpsection mb-40">
                <h4 className="tpsection__title">
                  Categorias{" "}
                  <span>
                    {" "}
                    de produtos{" "}
                    <img src="/assets/img/icon/title-shape-01.jpg" alt="" />
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="custom-row category-border pb-45 justify-content-xl-between">
            <div className="tpcategory mb-40">
              <div className="tpcategory__icon p-relative">
                <img
                  src="/assets/img/svg/tobacco-cigarette.svg"
                  alt=""
                  className="fn__svg"
                />
                <span>24</span>
              </div>
              <div className="tpcategory__content">
                <h5 className="tpcategory__title">
                  <Link href="/shop">
                    Cigarros de <br /> Palha
                  </Link>
                </h5>
              </div>
            </div>
            <div className="tpcategory mb-40">
              <div className="tpcategory__icon">
                <img
                  src="/assets/img/svg/pipe-tobacco.svg"
                  alt=""
                  className="fn__svg"
                />
                <span>18</span>
              </div>
              <div className="tpcategory__content">
                <h5 className="tpcategory__title">
                  <Link href="/shop">
                    Tabaco para <br /> Cachimbo
                  </Link>
                </h5>
              </div>
            </div>
            <div className="tpcategory mb-40">
              <div className="tpcategory__icon">
                <img
                  src="/assets/img/svg/rolling-papers.svg"
                  alt=""
                  className="fn__svg"
                />
                <span>15</span>
              </div>
              <div className="tpcategory__content">
                <h5 className="tpcategory__title">
                  <Link href="/shop">
                    Papel para <br /> Enrolar{" "}
                  </Link>
                </h5>
              </div>
            </div>
            <div className="tpcategory mb-40">
              <div className="tpcategory__icon">
                <img
                  src="/assets/img/svg/lighter.svg"
                  alt=""
                  className="fn__svg"
                />
                <span>12</span>
              </div>
              <div className="tpcategory__content">
                <h5 className="tpcategory__title">
                  <Link href="/shop">
                    {" "}
                    Isqueiros <br /> Premium{" "}
                  </Link>
                </h5>
              </div>
            </div>
            <div className="tpcategory mb-40">
              <div className="tpcategory__icon">
                <img
                  src="/assets/img/svg/ashtray.svg"
                  alt=""
                  className="fn__svg"
                />
                <span>9</span>
              </div>
              <div className="tpcategory__content">
                <h5 className="tpcategory__title">
                  <Link href="/shop">
                    Cinzeiros <br /> Artesanais
                  </Link>
                </h5>
              </div>
            </div>
            <div className="tpcategory mb-40">
              <div className="tpcategory__icon">
                <img
                  src="/assets/img/svg/tobacco-pouch.svg"
                  alt=""
                  className="fn__svg"
                />
                <span>7</span>
              </div>
              <div className="tpcategory__content">
                <h5 className="tpcategory__title">
                  <Link href="/shop">
                    Bolsas para <br /> Tabaco{" "}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
