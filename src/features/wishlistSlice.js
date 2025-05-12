import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { notifications } from "@/translations/notifications";
import { setAuthModalOpen } from "./shopSlice";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, { payload }) => {
      if (payload.requireAuth && !payload.isAuthenticated) {
        // Se o usuário não estiver autenticado, dispatch ação para abrir o modal
        // Isso deve ser tratado no componente que chama esta action
        toast.error(notifications.error.loginRequired);
        return;
      }

      const isWishlistExist = state.wishlist.some(
        (item) => item.id === payload.product.id
      );
      if (!isWishlistExist) {
        state.wishlist.push({
          ...payload.product,
          qty: payload?.qty ? payload.qty : 1,
        });
        toast.success(notifications.success.wishlistAdd);
      } else {
        toast.error("Este item já está na lista de desejos");
      }
      localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
    },
    deleteWishlist: (state, { payload }) => {
      state.wishlist = state.wishlist.filter((item) => item.id !== payload);
      localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
      toast.error(notifications.success.wishlistRemove);
    },
    addQty: (state, { payload }) => {
      state.wishlist = state.wishlist.filter((item) => {
        if (item.id === payload.id) {
          item.qty = payload.qty;
        }
        return item;
      });
      localStorage.setItem("local-wishlist", JSON.stringify(state.wishlist));
    },
    reloadWishlist: (state, { payload }) => {
      const wishlist = JSON.parse(localStorage.getItem("local-wishlist"));
      if (wishlist) {
        state.wishlist = wishlist;
      }
    },
  },
});

// Middleware thunk para verificar autenticação para wishlist
export const addWishlistWithAuth = (payload) => (dispatch, getState) => {
  const { isAuthenticated } = getState().user;

  if (payload.requireAuth && !isAuthenticated) {
    dispatch(setAuthModalOpen(true)); // Abre o modal de autenticação
  } else {
    dispatch(addWishlist({ ...payload, isAuthenticated }));
  }
};

export const { addWishlist, deleteWishlist, addQty, reloadWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
