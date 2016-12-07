import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueDragula from 'vue-dragula'
import store from './store'
import App from './App'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import SignUpPage from './pages/SignUpPage'
import TodoCountPage from './pages/TodoCountPage'

Vue.use(VueDragula);
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.component('app', App)

const routes = [
  {path: '/', component: LoginPage, name: 'login'},
  {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: {requireAuth: true}},
  {path: '/regist', component: SignUpPage, name: 'regist'},
  {path: '/todo-count', component: TodoCountPage, name: 'todo-count'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if(to.name === 'login' || to.name === 'regist'){
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(authUser && authUser.access_token) {
      next({name: 'dashboard'})
    }
  }
  if(to.meta.requireAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if(authUser && authUser.access_token) {
      next()
    }else{
      next({name: 'login'})
    }
  }
  next()
  NProgress.done()
})

new Vue({
  router, store
}).$mount('#app')
