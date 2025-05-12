import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const FooterMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-menus">
      <div className="menu-section">
        <h4>{t("Customer Service")}</h4>
        <ul>
          <li>
            <Link href="/track-order">{t("Track Order")}</Link>
          </li>
          <li>
            <Link href="/shipping-policy">{t("Shipping Policy")}</Link>
          </li>
          <li>
            <Link href="/return-policy">{t("Return Policy")}</Link>
          </li>
          <li>
            <Link href="/faqs">{t("FAQs")}</Link>
          </li>
          <li>
            <Link href="/help">{t("Help Center")}</Link>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h4>{t("Quick Links")}</h4>
        <ul>
          <li>
            <Link href="/shop/new">{t("New Arrivals")}</Link>
          </li>
          <li>
            <Link href="/shop/best-sellers">{t("Best Sellers")}</Link>
          </li>
          <li>
            <Link href="/shop/offers">{t("Special Offers")}</Link>
          </li>
          <li>
            <Link href="/shop/sale">{t("Sale Items")}</Link>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h4>{t("Categories")}</h4>
        <ul>
          <li>
            <Link href="/shop/mens">{t("Mens")}</Link>
          </li>
          <li>
            <Link href="/shop/womens">{t("Womens")}</Link>
          </li>
          <li>
            <Link href="/shop/kids">{t("Kids")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterMenu;
