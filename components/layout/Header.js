import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <nav className="main-menu">
        <ul>
          <li>
            <Link href="/">{t("Home")}</Link>
          </li>
          <li>
            <Link href="/shop">{t("Shop")}</Link>
          </li>
          <li>
            <Link href="/about">{t("About")}</Link>
          </li>
          <li>
            <Link href="/blog">{t("Blog")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("Contact")}</Link>
          </li>
        </ul>
      </nav>
      <div className="search-box">
        <input type="text" placeholder={t("Search for products")} />
        <button>{t("Search")}</button>
      </div>
    </header>
  );
};
