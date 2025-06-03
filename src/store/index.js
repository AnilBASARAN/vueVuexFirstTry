import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import authModule from './auth/index';

const store = createStore({
  modules: {
    auth: authModule,
  },
  state() {
    return {};
  },
  actions: rootActions,
  getters: rootGetters,
  mutations: rootMutations,
});

export default store;
