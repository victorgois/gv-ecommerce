"use client";
import { useTranslation } from "@/hooks/useTranslation";
import CartShow from "@/components/elements/CartShow";
import WishListShow from "@/components/elements/WishListShow";
import Link from "next/link";
import { useState } from "react";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isCartSidebar,
  handleCartSidebar,
}) {
  const { t } = useTranslation();
  const [isToggled, setToggled] = useState(true);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <>
      <header>
        {/* <div className="header-top space-bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-welcome-text text-start ">
                  <span>
                    Bem-vindo à nossa loja internacional! Aproveite o frete grátis em
                    pedidos acima de R$ 100.
                  </span>
                  <Link href="/shop">
                    Comprar Agora <i className="fal fa-long-arrow-right" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="logo-area mt-30 d-none d-xl-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3">
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/assets/img/logo/logo.svg"
                      alt="logo"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9">
                <div className="header-meta-info d-flex align-items-center justify-content-between">
                  <div className="header-search-bar">
                    <form action="#">
                      <div className="search-info p-relative">
                        <button className="header-search-icon">
                          <i className="fal fa-search" />
                        </button>
                        <input
                          type="text"
                          placeholder={t("Search products...")}
                        />
                      </div>
                    </form>
                  </div>
                  <div className="header-meta header-brand d-flex align-items-center">
                    {/* <div className="header-meta__lang">
                      <ul>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/icon/lang-flag.png"
                              alt="flag"
                            />
                            English
                            <span>
                              <i className="fal fa-angle-down" />
                            </span>
                          </Link>
                          <ul className="header-meta__lang-submenu">
                            <li>
                              <Link href="#">Arabic</Link>
                            </li>
                            <li>
                              <Link href="#">Spanish</Link>
                            </li>
                            <li>
                              <Link href="#">Mandarin</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="header-meta__value mr-15">
                      <select>
                        <option>USD</option>
                        <option>YEAN</option>
                        <option>EURO</option>
                      </select>
                    </div> */}
                    <div className="header-meta__social d-flex align-items-center ml-25">
                      <button
                        className="header-cart p-relative tp-cart-toggle"
                        onClick={handleCartSidebar}
                      >
                        <i className="fal fa-shopping-cart" />
                        <CartShow />
                      </button>
                      <Link href="/sign-in">
                        <i className="fal fa-user" />
                      </Link>
                      <Link
                        href="/wishlist"
                        className="header-cart p-relative tp-cart-toggle"
                      >
                        <i className="fal fa-heart" />
                        <WishListShow />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu-area mt-20 d-none d-xl-block">
          <div className="for-megamenu p-relative">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-3">
                  <div className="cat-menu__category p-relative">
                    <a
                      className="tp-cat-toggle"
                      onClick={handleToggle}
                      role="button"
                    >
                      <i className="fal fa-bars" />
                      {t("categories")}
                    </a>
                    <div
                      className="category-menu category-menu-off"
                      style={{ display: `${isToggled ? "block" : "none"}` }}
                    >
                      <ul className="cat-menu__list">
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-smoking" />{" "}
                            {t("Straw Cigarettes")}
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link href="/shop">
                            <i className="fal fa-pipe-smoking" />{" "}
                            {t("Artesanais")}
                          </Link>
                          <ul className="submenu">
                            <li>
                              <Link href="/shop">{t("Cigarreiras")}</Link>
                            </li>
                            <li>
                              <Link href="/shop">{t("Cachimbos")}</Link>
                            </li>
                            <li>
                              <Link href="/shop">{t("Cortadores")}</Link>
                            </li>
                            <li>
                              <Link href="/shop">{t("Cigarros Premium")}</Link>
                            </li>
                            <li>
                              <Link href="/shop">{t("Piteiras")}</Link>
                            </li>
                            <li>
                              <Link href="/shop">{t("Fumo de Corda")}</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-box-alt" />{" "}
                            {t("Kits Presente")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-lightbulb-on" />{" "}
                            {t("Acessórios Plásticos")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-fire-alt" /> {t("Isqueiros")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-leaf" /> {t("Tabacos")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-circle" /> {t("Cinzeiros")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-file" /> {t("Rolling Papers")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-archive" />{" "}
                            {t("Tobacco Pouches")}
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop">
                            <i className="fal fa-box" /> {t("Humidors")}
                          </Link>
                        </li>
                      </ul>
                      {/* <div className="daily-offer">
                        <ul>
                          <li>
                            <Link href="/shop">Value of the Day</Link>
                          </li>
                          <li>
                            <Link href="/shop">Top 100 Offers</Link>
                          </li>
                          <li>
                            <Link href="/shop">New Arrivals</Link>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="main-menu">
                    <div className="tpmenu__nav">
                      <ul>
                        <li className="has-dropdown">
                          <Link href="/">Página Inicial</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/shop">Loja</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contato</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="menu-contact">
                    <ul>
                      <li>
                        <div className="menu-contact__item">
                          <div className="menu-contact__icon">
                            <i className="fal fa-phone" />
                          </div>
                          <div className="menu-contact__info">
                            <Link href="/tel:0123456">(31) 99999-9999</Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="menu-contact__item">
                          <div className="menu-contact__icon">
                            <i className="fal fa-map-marker-alt" />
                          </div>
                          <div className="menu-contact__info">
                            <Link href="/shop-location">{t("Find Store")}</Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
