"use client";
import { addCart } from "@/features/shopSlice";
import { addQty, deleteWishlist } from "@/features/wishlistSlice";
import Link from "next/link";
import products from "@/data/products";
import { useDispatch, useSelector } from "react-redux";

const WishlistItems = () => {
  const { wishlist } = useSelector((state) => state.wishlist) || {};
  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const addToCart = (id) => {
    const item = products?.find((item) => item.id === id);
    dispatch(
      addCart({
        product: item,
        requireAuth: true,
        isAuthenticated,
      })
    );
  };

  // delete cart item
  const deleteCartHandler = (id) => {
    dispatch(deleteWishlist(id));
  };

  // qty handler
  const qtyHandler = (id, qty) => {
    dispatch(addQty({ id, qty }));
  };

  console.log(wishlist);

  return (
    <>
      {wishlist?.map((item, i) => (
        <tr key={i}>
          <td className="product-thumbnail">
            <Link href={`/shop/${item.id}`}>
              <img src={`/assets/img/product/${item.imgf}`} alt="product img" />
            </Link>
          </td>
          <td className="product-name">
            <Link href={`/shop/${item.id}`}>{item.title}</Link>
          </td>
          <td className="product-price">
            <span className="amount">R$ {item.price?.max},00</span>
          </td>
          <td className="product-quantity">
            <span>Em estoque</span>
          </td>
          <td className="product-subtotal">
            <span className="amount">R$ {item.price?.max},00</span>
          </td>
          <td className="product-add-to-cart">
            <button onClick={() => addToCart(item.id)}>
              <i className="fal fa-shopping-cart"></i>
              <span>Adicionar ao carrinho</span>
            </button>
          </td>
          <td className="product-remove">
            <button
              className="remove"
              title="Remove this product"
              onClick={() => deleteCartHandler(item.id)}
            >
              <i className="fal fa-times"></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default WishlistItems;
