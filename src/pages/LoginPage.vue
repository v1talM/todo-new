<template lang="html">
  <div class="wrapper" id="login-wrapper">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            Login
          </div>
          <div class="panel-body">
            <form v-on:submit.prevent="handleLoginFormSubmit()">
              <div class="form-group">
                <label>Email address</label>
                <input
                  v-model="login.email"
                  class="form-control"
                  placeholder="Enter your email address"
                  type="email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  v-model="login.password"
                  class="form-control"
                  placeholder="Enter your password"
                  type="password">
              </div>
              <button class="btn btn-primary">Login</button>

            </form>
          </div>
        </div>
        <p class="text-center">没有账号？ <router-link to="regist">立即注册</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {loginUrl, userUrl, getHeader} from './../config'
import {clientId, clientSecret} from './../env'
export default {
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState ({
      userStore: state => state.userStore
    })
  },
  methods: {
    handleLoginFormSubmit () {
      const postData = {
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username: this.login.email,
        password: this.login.password,
        scope: ''
      }
      const authUser = {}
      NProgress.start()
      this.axios.post(loginUrl, postData)
        .then(response => {
          if(response.status === 200) {
            authUser.access_token = response.data.access_token
            authUser.refresh_token = response.data.refresh_token
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.axios.get(userUrl, {headers: getHeader()})
              .then(response => {
                authUser.email = response.data.email
                authUser.name = response.data.name
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                this.$store.dispatch('setUserObject', authUser)
                this.$router.push({name: 'dashboard'})
              })
              .catch(response => {
                var message = $('<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>'+
                '<h4>Warning!</h4>' +
                response +
                '</div>')
                message.fadeTo(2000, 500).fadeOut(500, function(){
                    message.alert('close');
                });
                $("body").prepend(message)

              })
          }
        })
        .catch( response => {
          var message = $('<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>'+
          '<h4>Warning!</h4>' +
          response +
          '</div>')
          message.fadeTo(2000, 500).fadeOut(500, function(){
              message.alert('close');
          });
          $("body").prepend(message)
          NProgress.done()
        })

    }
  }
}
</script>

<style lang="sass">
  #login-wrapper
    margin-top: 150px
</style>
