import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="main-menu">
      <ul className="menu-items">
        <li className="menu-item">
          <Link href="/">{t("Home")}</Link>
        </li>

        <li className="menu-item has-submenu">
          <Link href="/shop">{t("Shop")}</Link>
          <ul className="submenu">
            <li>
              <Link href="/shop/categories">{t("Categories")}</Link>
            </li>
            <li>
              <Link href="/shop/new-arrivals">{t("New Arrivals")}</Link>
            </li>
            <li>
              <Link href="/shop/best-sellers">{t("Best Sellers")}</Link>
            </li>
            <li>
              <Link href="/shop/sale">{t("Sale Items")}</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item has-submenu">
          <Link href="/collections">{t("Collections")}</Link>
          <ul className="submenu">
            <li>
              <Link href="/collections/featured">{t("Featured")}</Link>
            </li>
            <li>
              <Link href="/collections/latest">{t("Latest")}</Link>
            </li>
            <li>
              <Link href="/collections/popular">{t("Popular")}</Link>
            </li>
          </ul>
        </li>

        <li className="menu-item">
          <Link href="/about">{t("About")}</Link>
        </li>

        <li className="menu-item">
          <Link href="/contact">{t("Contact")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
