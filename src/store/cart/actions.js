export default {
  addToCart(context, payload) {
    context.commit('addProductToCart', payload);
  },
  removeProductFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};
