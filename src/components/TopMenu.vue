<template lang="html">
  <nav class="navbar navbar-default" v-if="userStore.authUser && userStore.authUser.access_token">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Todo-list</a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Dashboard <span class="sr-only">(current)</span></a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Themes <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Super hero</a></li>
            </ul>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ userStore.authUser.name }} <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><router-link to="">Todos Count</router-link></li>
              <li><a href="#" @click.prevent="handleLogout()">Logout</a></li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'
import $ from 'jquery'
window.$ = window.jQuery = $
require('./../assets/js/bootstrap')
export default {
    computed: {
      ...mapState ({
        userStore: state => state.userStore
      })
    },
    methods: {
      handleLogout () {
        NProgress.start()
        window.localStorage.removeItem('authUser')
        this.$store.dispatch('clearUserObject')
        this.$router.push({name: 'login'})
      }
    }
}
</script>
