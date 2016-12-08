<template lang="html">
  <div class="wrapper" id="regist-wrapper">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            Sign up
          </div>
          <div class="panel-body">
            <form v-on:submit.prevent="handleRegistFormSubmit()">
              <div class="form-group">
                <label>Username</label>
                <input
                  v-model="register.username"
                  class="form-control"
                  placeholder="Enter your name"
                  type="text">
              </div>
              <div class="form-group">
                <label>Email address</label>
                <input
                  v-model="register.email"
                  class="form-control"
                  placeholder="Enter your email address"
                  type="email">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  v-model="register.password"
                  class="form-control"
                  placeholder="Enter your password"
                  type="password">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  v-model="register.password_confirmation"
                  class="form-control"
                  placeholder="Check your password"
                  type="password">
              </div>
              <button class="btn btn-primary">Sign up</button>

            </form>
          </div>
        </div>
        <p class="text-center">已有帐号， <router-link to="/">返回登录</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {registUrl, userUrl, getHeader} from './../config'
import {clientId, clientSecret} from './../env'
export default {
  data () {
    return {
      register: {
        username: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  computed: {
    ...mapState ({
      userStore: state => state.userStore
    })
  },
  methods: {
    handleRegistFormSubmit () {
      const postData = {
        name: this.register.username,
        email: this.register.email,
        password: this.register.password,
        password_confirmation: this.register.password_confirmation
      }
      NProgress.start()
      this.axios.post(registUrl, postData)
        .then(response => {
          if(response.data.status === 200) {
            this.$router.push({name: 'login'})
          }else{
            var message = $('<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>'+
            '<h4>Warning!</h4>' +
            response.data.message +
            '</div>')
            message.fadeTo(2000, 500).fadeOut(500, function(){
                message.alert('close');
            });
            $("body").prepend(message)
            NProgress.done()
          }
        }).catch(response => {
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
    #regist-wrapper
      margin-top: 80px
    .alert
      width: 300px
      display: block
      position: fixed
      margin-top: 20px
      top: 10px
      right: 10px
  </style>
