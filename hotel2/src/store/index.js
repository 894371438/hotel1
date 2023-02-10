import { createStore } from 'vuex'
import users from './moudle/users';
import info from './moudle/info';
import order from './moudle/order';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    users,
    info,
    order
  },
  plugins: [createPersistedState()],

})

export default store;