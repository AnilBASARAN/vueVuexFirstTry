import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import authModule from './auth/index';
import cartModule from './cart/index';
import productsModule from './modules/products';
const store = createStore({
  modules: {
    auth: authModule,
    cart: cartModule,
    prods: productsModule,
  },
  state() {
    return {};
  },
  actions: rootActions,
  getters: rootGetters,
  mutations: rootMutations,
});

export default store;
