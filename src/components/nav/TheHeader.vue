<template>
  <header>
    <h1>
      <router-link to="/">VueShop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          <base-badge mode="elegant">{{ cartQty }}</base-badge>
        </li>
        <li v-if="isAuth">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button v-if="!isAuth" @click="login">Login</button>
      <button v-if="isAuth" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters['auth/userIsAuthenticated'];
    },
    cartQty() {
      let result = this.$store.getters['cart/getQty'];
      console.log('hey', result);
      console.log(Object.keys(this.$store.getters));

      return result;
    },
  },
  getters: {},
  methods: {
    login() {
      this.$store.dispatch('auth/login', { isAuth: true });
    },
    logout() {
      this.$store.dispatch('auth/logout', { isAuth: false });
    },
  },
  // inject: ['cart'],
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: transparent;
  color: #45006d;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>
