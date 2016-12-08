<template lang="html">
  <div class="wrapper" id="dashboard-wrapper">

      <Undo :undo="undo"></Undo>
      <Doing :doing="doing"></Doing>
      <Did :did="did"></Did>


    <div class="">
      <Todo-Form :undo="undo"></Todo-Form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
import Undo from './../components/todo/Undo'
import Doing from './../components/todo/Doing'
import Did from './../components/todo/Did'
import TodoForm from './../components/todo/AddTodoForm'
import {getHeader, changeToDid, changeToDoing, changeToUndo, undoUrl, doingUrl, didUrl} from './../config'

export default {
  components: {
    Undo, Doing, Did, TodoForm
  },
  computed: {
    ...mapState({
      todoStore: state => state.todoStore
    })
  },
  data () {
    return {
      undo: [],
      doing: [],
      did: []
    }
  },
  mounted () {
    let dragula = Vue.vueDragula.find("first-bag").drake
    let self = this
    dragula.on("drop", function(el, target, source, sibling) {
      let target_id = $(target).attr('data-id')
      let id = $(el).attr('data-id')
      switch (parseInt(target_id)) {
        case 0:
          self.dragToUndo(id)
          break;
        case 1:
          self.dragToDoing(id)
          break;
        case 2:
          self.dragToDid(id)
          break;
      }
		});

    this.axios.get(undoUrl, {headers: getHeader()})
      .then(response => {
        if(response.status === 200){
          this.undo = response.data.data
        }
      })

    this.axios.get(doingUrl, {headers: getHeader()})
      .then(response => {
        if(response.status === 200){
          this.doing = response.data.data
        }
      })

      this.axios.get(didUrl, {headers: getHeader()})
        .then(response => {
          if(response.status === 200){
            this.did = response.data.data
            this.length = response.data.data.length
          }
        })
  },
  methods: {
    dragToUndo (id) {
      NProgress.start()
      this.axios.get(changeToUndo + id, {headers: getHeader()})
        .then(response => {
          if(response.data.status === 200){
            this.getMessage(response.data.message)
          }else{
            this.getMessage(response.data.message, 1)
          }
        })
      NProgress.done()
    },
    dragToDoing (id) {
      NProgress.start()
      this.axios.get(changeToDoing + id, {headers: getHeader()})
        .then(response => {
          if(response.data.status === 200){
            this.getMessage(response.data.message)
          }else{
            this.getMessage(response.data.message, 1)
          }
        })
        NProgress.done()
    },
    dragToDid (id) {
      NProgress.start()
      this.axios.get(changeToDid + id, {headers: getHeader()})
        .then(response => {
          if(response.data.status === 200){
            this.getMessage(response.data.message)
          }else{
            this.getMessage(response.data.message, 1)
          }
        })
        NProgress.done()
    },
    getMessage (info, type=0){
      if(type){
        var message = $('<div class="alert alert-dismissible alert-danger"><button type="button" class="close" data-dismiss="alert">&times;</button>'+
        '<h4>Warning!</h4>' +
        info +
        '</div>')
        message.fadeTo(2000, 500).fadeOut(500, function(){
        message.alert('close');
        });
        $("body").prepend(message)
      }else{
        var message = $('<div class="alert alert-dismissible alert-primary"><button type="button" class="close" data-dismiss="alert">&times;</button>'+
        '<h4>Warning!</h4>' +
        info +
        '</div>')
        message.fadeTo(2000, 500).fadeOut(500, function(){
        message.alert('close');
        });
        $("body").prepend(message)
      }

    }
  }
}
</script>

<style lang="sass">
  .row
    position: relative
  #add-todo
    position: fixed
    bottom: 20px
    left: 45%
</style>
