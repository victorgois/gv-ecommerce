"use client";

import { useEffect, useState } from "react";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Breadcrumb from "./Breadcrumb";
import Sidebar from "./Sidebar";
import ScrollTop from "./ScrollTop";
import { useTranslation } from "@/hooks/useTranslation";
import { useIsBrowser } from "@/hooks/useIsBrowser";

export default function Layout({
  headerStyle,
  footerStyle,
  children,
  breadcrumbTitle,
}) {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [isCartSidebar, setCartSidebar] = useState(false);
  const { t } = useTranslation();
  const isBrowser = useIsBrowser();

  const handleMobileMenu = () => {
    if (!isBrowser) return;
    setMobileMenu(!isMobileMenu);
    document.body.classList.toggle("mobile-menu-visible");
  };

  const handleCartSidebar = () => {
    if (!isBrowser) return;
    setCartSidebar(!isCartSidebar);
    document.body.classList.toggle("cart-sidebar-visible");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  // Versão simplificada para renderização SSR
  if (!isBrowser) {
    return (
      <div className="simple-layout">
        <div className="header-placeholder py-4">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Espaço reservado para o cabeçalho */}
              </div>
            </div>
          </div>
        </div>
        <main>{children}</main>
        <div className="footer-placeholder py-4">
          {/* Espaço reservado para o rodapé */}
        </div>
      </div>
    );
  }

  return (
    <>
      {headerStyle === 1 ? (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isCartSidebar={isCartSidebar}
          handleCartSidebar={handleCartSidebar}
        />
      ) : headerStyle === 2 ? (
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isCartSidebar={isCartSidebar}
          handleCartSidebar={handleCartSidebar}
        />
      ) : (
        <Header3
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isCartSidebar={isCartSidebar}
          handleCartSidebar={handleCartSidebar}
        />
      )}

      <Sidebar
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      <main>
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={t(breadcrumbTitle)} />}
        {children}
      </main>

      {footerStyle === 1 ? <Footer1 /> : <Footer2 />}
      <ScrollTop />
    </>
  );
}
