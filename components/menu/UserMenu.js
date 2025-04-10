import { useTranslation } from "@/hooks/useTranslation";
import Link from "next/link";

const UserMenu = ({ isLoggedIn }) => {
  const { t } = useTranslation();

  return (
    <div className="user-menu">
      {isLoggedIn ? (
        <ul className="menu-items">
          <li className="menu-item has-submenu">
            <Link href="/account">{t("My Account")}</Link>
            <ul className="submenu">
              <li>
                <Link href="/account/dashboard">{t("Dashboard")}</Link>
              </li>
              <li>
                <Link href="/account/orders">{t("My Orders")}</Link>
              </li>
              <li>
                <Link href="/account/settings">{t("Account Settings")}</Link>
              </li>
              <li>
                <Link href="/account/wishlist">{t("Wishlist")}</Link>
              </li>
              <li>
                <button onClick={() => handleSignOut()}>{t("Sign Out")}</button>
              </li>
            </ul>
          </li>
        </ul>
      ) : (
        <ul className="menu-items">
          <li>
            <Link href="/auth/signin">{t("Sign In")}</Link>
          </li>
          <li>
            <Link href="/auth/signup">{t("Sign Up")}</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserMenu;
