<template lang="html">
  <div class="col-lg-4 col-lg-push-4" id="todo-form">
    <form @submit.prevent="handleTodoSubmit()">
      <div class="form-group">
        <label class="control-label" for="inputLarge">New todo</label>
        <input class="form-control input-lg" type="text" v-model="new_todo">
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>

  </div>
</template>

<script>
import {addTodoUrl, getHeader} from './../../config'
import axios from 'axios'
export default {
  data () {
    return {
      new_todo: ''
    }
  },
  props: ['undo'],
  methods: {
    handleTodoSubmit () {
      if(this.new_todo == ''){
        this.getMessage('您还没有输入内容',1)
        return false;
      }
      const instance = axios.create({
        headers: getHeader(),
        params: {
          title: this.new_todo
        },
        method: 'post',
      })
      NProgress.start()
      instance.post(addTodoUrl)
      .then(response => {
        if(response.data.status === 200){
          this.getMessage(response.data.message)
          this.undo.push(response.data.data)
        }else{
          this.getMessage(response.data.message, 1)
        }
        this.new_todo = ''
        NProgress.done()
      })
      .catch(response => {
        this.getMessage(response, 1)
        NProgress.done()
      })
    },
    getMessage (info,status=0) {
      if(status == 0){
        var message = $('<div class="alert alert-dismissible alert-primary"><button type="button" class="close" data-dismiss="alert">&times;</button>'+
        '<h4>Warning!</h4>' +
        info +
        '</div>')
        message.fadeTo(2000, 500).fadeOut(500, function(){
            message.alert('close');
        });
      }else{
        var message = $('<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>'+
        '<h4>Warning!</h4>' +
        info +
        '</div>')
        message.fadeTo(2000, 500).fadeOut(500, function(){
            message.alert('close');
        });
      }

      $("body").prepend(message)
    }
  }
}
</script>

<style lang="sass">
  #todo-form
    position: absolute
    bottom: 15px
    left: 33%
</style>
