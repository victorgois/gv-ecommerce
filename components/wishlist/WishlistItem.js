import { useTranslation } from "@/hooks/useTranslation";
import { formatPrice } from "@/translations/pt";

const WishlistItem = ({ item, onAddToCart, onRemove }) => {
  const { t } = useTranslation();

  return (
    <tr>
      <td className="product-thumbnail">
        <img src={item.image} alt={t("Product Image")} />
      </td>
      <td className="product-name">{item.title}</td>
      <td className="product-price">{formatPrice(item.price)}</td>
      <td className="product-stock">
        {item.inStock ? t("In Stock") : t("Out of Stock")}
      </td>
      <td className="product-action">
        <button onClick={() => onAddToCart(item)} disabled={!item.inStock}>
          {t("Add to Cart")}
        </button>
        <button onClick={() => onRemove(item.id)}>{t("Remove")}</button>
      </td>
    </tr>
  );
};
