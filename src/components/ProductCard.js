import { useTranslation } from "@/hooks/useTranslation";
import { formatPrice } from "@/utils/priceFormatter";

export const ProductCard = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <span className="price">{formatPrice(product.price)}</span>
      <button onClick={() => addToCart(product.id)}>{t("Add To Cart")}</button>
      <div className="stock-status">
        {product.inStock ? t("In Stock") : t("Out of Stock")}
      </div>
    </div>
  );
};
