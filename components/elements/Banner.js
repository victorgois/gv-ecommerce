"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function Banner() {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Versão simplificada para renderização do servidor
  if (!isClient) {
    return (
      <section className="banner-area banner-area-placeholder">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="banner-placeholder py-5">
                <p>Carregando banners...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="banner-area pt-70 pb-40">
      <div className="container">
        <div className="row">
          {/* Conteúdo original do banner */}
          <div className="col-xl-4 col-lg-6 col-md-12">
            <div className="tpbanner-box mb-30">
              <div className="tpbanner-thumb">
                <Link href="/shop">
                  <img src="/assets/img/banner/banner-1.jpg" alt="banner-img" />
                </Link>
              </div>
              <div className="tpbanner-content">
                <span>{t("Cigarros de Palha")}</span>
                <h4 className="tpbanner-title">
                  <Link href="/shop">{t("Autênticos & Tradicionais")}</Link>
                </h4>
                <Link href="/shop" className="tpbanner-btn">
                  {t("Comprar Agora")}{" "}
                  <i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          {/* Repita para os outros banners */}
        </div>
      </div>
    </section>
  );
}
