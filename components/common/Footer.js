import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="newsletter-section">
        <h3>{t("Newsletter")}</h3>
        <div className="newsletter-form">
          <input type="email" placeholder={t("Enter your email")} />
          <button>{t("Subscribe")}</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="quick-links">
          <h4>{t("Quick Links")}</h4>
          <ul>
            <li>
              <Link href="/about">{t("About")}</Link>
            </li>
            <li>
              <Link href="/shop">{t("Shop")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("Contact")}</Link>
            </li>
          </ul>
        </div>

        <div className="customer-service">
          <h4>{t("Customer Service")}</h4>
          <ul>
            <li>
              <Link href="/my-account">{t("My Account")}</Link>
            </li>
            <li>
              <Link href="/terms">{t("Terms & Conditions")}</Link>
            </li>
            <li>
              <Link href="/privacy">{t("Privacy Policy")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="social-links">
        <h4>{t("Follow Us")}</h4>
        <div className="social-icons">{/* ícones de redes sociais */}</div>
      </div>
    </footer>
  );
};
