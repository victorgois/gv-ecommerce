import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { notifications } from "@/translations/notifications";

const initialState = {
  cart: [],
  authModalOpen: false,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      if (payload.requireAuth && !payload.isAuthenticated) {
        // Se o usuário não estiver autenticado, definir o modal de autenticação como aberto
        state.authModalOpen = true;
        toast.error(notifications.error.loginRequired);
        return;
      }

      const isCartExist = state.cart.some(
        (item) => item.id === payload.product.id
      );
      if (!isCartExist) {
        state.cart.push({
          ...payload.product,
          qty: payload?.qty ? payload.qty : 1,
        });
        toast.success(notifications.success.addToCart);
      } else {
        toast.error("Este item já está no carrinho");
      }
      localStorage.setItem("local-cart", JSON.stringify(state.cart));
    },
    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.id !== payload);
      localStorage.setItem("local-cart", JSON.stringify(state.cart));
      toast.error(notifications.success.removeFromCart);
    },
    addQty: (state, { payload }) => {
      state.cart = state.cart.filter((item) => {
        if (item.id === payload.id) {
          item.qty = payload.qty;
        }
        return item;
      });
      localStorage.setItem("local-cart", JSON.stringify(state.cart));
    },
    reloadCart: (state, { payload }) => {
      const cart = JSON.parse(localStorage.getItem("local-cart"));
      if (cart) {
        state.cart = cart;
      }
    },
    setAuthModalOpen: (state, { payload }) => {
      state.authModalOpen = payload;
    },
  },
});

export const { addCart, deleteCart, addQty, reloadCart, setAuthModalOpen } =
  shopSlice.actions;
export default shopSlice.reducer;
