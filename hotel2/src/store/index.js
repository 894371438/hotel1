import { createStore } from 'vuex'
import users from './moudle/users';
import info from './moudle/info';

const store = createStore({
  modules: {
    users,
    info
  }
})

export default store;