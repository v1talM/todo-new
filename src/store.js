import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './components/user/userStore'
import todoStore from './components/todo/todoStore'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore, todoStore
  },
  strict: debug
})
