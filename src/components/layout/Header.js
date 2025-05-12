import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { formatPrice } from "@/translations/pt";

export default function Header({ handleMobileMenu }) {
  const { t } = useTranslation();
  const { cart } = useSelector((state) => state.shop);

  // Calcular o total do carrinho
  const cartTotal = cart?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <header className="header">
      <div className="header__main">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="logo">
                <Link href="/">
                  <img src="/assets/img/logo/logo_resized.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <Link href="/">{t("Home")}</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/shop">{t("Shop")}</Link>
                      <ul className="submenu">
                        <li>
                          <Link href="/shop">{t("All Products")}</Link>
                        </li>
                        <li>
                          <Link href="/shop/new">{t("New Arrivals")}</Link>
                        </li>
                        <li>
                          <Link href="/shop/best-sellers">
                            {t("Best Sellers")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/about">{t("About")}</Link>
                    </li>
                    <li>
                      <Link href="/contact">{t("Contact")}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="header-right d-flex align-items-center justify-content-end">
                <div className="header-search">
                  <button className="search-btn">
                    <i className="fal fa-search"></i>
                  </button>
                </div>
                <div className="header-wishlist">
                  <Link href="/wishlist">
                    <i className="fal fa-heart"></i>
                    <span>{t("Wishlist")}</span>
                  </Link>
                </div>
                <div className="header-cart">
                  <Link href="/cart">
                    <i className="fal fa-shopping-cart"></i>
                    <span>{t("Cart")}</span>
                    <span className="cart-count">{cart?.length || 0}</span>
                  </Link>
                  <div className="mini-cart">
                    <div className="mini-cart-header">
                      <h3>{t("Shopping Cart")}</h3>
                    </div>
                    <div className="mini-cart-items">
                      {cart?.length > 0 ? (
                        cart.map((item) => (
                          <div className="mini-cart-item" key={item.id}>
                            <div className="mini-cart-item-image">
                              <img
                                src={`/assets/img/product/${item.imgf}`}
                                alt={item.title}
                              />
                            </div>
                            <div className="mini-cart-item-details">
                              <h4>{item.title}</h4>
                              <p>
                                {item.quantity} x {formatPrice(item.price.max)}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>{t("No items found")}</p>
                      )}
                    </div>
                    <div className="mini-cart-total">
                      <span>{t("Total")}:</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="mini-cart-buttons">
                      <Link href="/cart" className="tp-btn">
                        {t("View Cart")}
                      </Link>
                      <Link href="/checkout" className="tp-btn">
                        {t("Checkout")}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="menu-bar d-xl-none ml-20">
                  <button className="tp-menu-bar" onClick={handleMobileMenu}>
                    <i className="fal fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
