import { translations } from "./pt";

// Mensagens de notificação traduzidas
export const notifications = {
  success: {
    addToCart: translations["Item added to cart"],
    removeFromCart: translations["Item removed from cart"],
    wishlistAdd: "Item adicionado à lista de desejos",
    wishlistRemove: "Item removido da lista de desejos",
    orderPlaced: "Pedido realizado com sucesso",
    accountCreated: "Conta criada com sucesso",
    passwordReset: "Senha redefinida com sucesso",
  },
  error: {
    general: "Ocorreu um erro. Tente novamente.",
    invalidCredentials: "Email ou senha inválidos",
    outOfStock: "Produto esgotado",
    paymentFailed: "Falha no pagamento. Tente novamente.",
    serverError: "Erro no servidor. Tente novamente mais tarde.",
  },
  info: {
    loading: translations["Loading"],
    processing: "Processando...",
    redirecting: "Redirecionando...",
  },
};
