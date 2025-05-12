"use client";
import { addQty, deleteCart } from "@/features/shopSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function HeaderCart({ isCartSidebar, handleCartSidebar }) {
  const { cart } = useSelector((state) => state.shop) || {};

  const dispatch = useDispatch();

  // delete cart item
  const deleteCartHandler = (id) => {
    dispatch(deleteCart(id));
  };

  // qty handler
  let total = 0;
  cart?.forEach((item) => {
    const price = item.qty * item.price?.max;
    total = total + price;
  });
  return (
    <>
      <div
        className={`tpcartinfo tp-cart-info-area p-relative ${
          isCartSidebar ? "tp-sidebar-opened" : ""
        }`}
      >
        <button className="tpcart__close" onClick={handleCartSidebar}>
          <i className="fal fa-times" />
        </button>
        <div className="tpcart">
          <h4 className="tpcart__title">Seu Carrinho</h4>
          <div className="tpcart__product">
            <div className="tpcart__product-list">
              <ul>
                {cart?.map((item, i) => (
                  <li className="tpcart__item" key={i}>
                    <div className="tpcart__img">
                      <img
                        src={`/assets/img/product/${item.imgf}`}
                        alt="product-img"
                      />
                      <div className="tpcart__del">
                        <button onClick={() => deleteCartHandler(item.id)}>
                          <i className="far fa-times-circle" />
                        </button>
                      </div>
                    </div>
                    <div className="tpcart__content">
                      <span className="tpcart__content-title">
                        <Link href="/shop">{item.title}</Link>
                      </span>
                      <div className="tpcart__cart-price">
                        <span className="quantity">{item?.qty} X</span>
                        <span className="new-price">
                          R${item?.price?.max},00
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tpcart__checkout">
              <div className="tpcart__total-price d-flex justify-content-between align-items-center">
                <span> Total do Pedido: </span>
                <span className="heilight-price"> R${total},00 </span>
              </div>
              <div className="tpcart__checkout-btn">
                <Link className="tpcart-btn mb-10" href="/cart">
                  Ver Carrinho
                </Link>
                <Link className="tpcheck-btn" href="/checkout">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
          <div className="tpcart__free-shipping text-center">
            <span>Frete grátis para compras acima de R$59</span>
          </div>
        </div>
      </div>
    </>
  );
}
