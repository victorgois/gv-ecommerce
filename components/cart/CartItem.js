import { useTranslation } from "@/hooks/useTranslation";
import { formatPrice } from "@/translations/pt";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const { t } = useTranslation();

  return (
    <div className="cart-item">
      <img src={item.image} alt={t("Product Image")} />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <div className="price">{formatPrice(item.price)}</div>
        <div className="quantity">
          <label>{t("Quantity")}:</label>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
            min="1"
          />
        </div>
        <button onClick={() => onRemove(item.id)}>{t("Remove")}</button>
      </div>
    </div>
  );
};
