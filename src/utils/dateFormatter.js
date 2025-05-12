export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
