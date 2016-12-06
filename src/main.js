import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import App from './App'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.component('app', App)

const routes = [
  {path: '/', component: LoginPage, name: 'login'},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: {requireAuth: true}}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(authUser && authUser.access_token) {
      next()
    }else{
      next({name: 'login'})
    }
  }
  next()
})

new Vue({
  router, store
}).$mount('#app')
