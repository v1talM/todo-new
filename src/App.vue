<template lang="html">
  <div>
    <top-menu></top-menu>
    <router-view class="container"></router-view>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import TopMenu from './components/TopMenu'
  import NProgress from 'NProgress'
  window.NProgress = NProgress
  export default {
    computed: {
      ...mapState ({
        userStore: state => state.userStore
      })
    },
    components: {
      TopMenu
    },
    created () {
      const userObj = JSON.parse(window.localStorage.getItem('authUser'))
      this.$store.dispatch('setUserObject', userObj)
    }
  }
</script>

<style lang="sass">
  @import './assets/css/bootstrap'
  @import './assets/css/main'
  @import './assets/css/nprogress'
</style>
