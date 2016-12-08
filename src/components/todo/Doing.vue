<template lang="html">
  <div class="col-lg-4 todo-container">
    <div class="panel panel-default">
      <div class="panel-heading">进行中 ● {{ doing.length }} <i aria-hidden="true" class="fa fa-chevron-circle-down pull-right"></i></div>
       <div class="panel-body">
         <div class="list-group" data-id="1" v-dragula="doing" bag="first-bag">
             <a :key="todo.id"
                :data-id="todo.id"
                :data-type="todo.completed"
                href="#"
                class="list-group-item"
                v-for="(todo, index) in doing"
                >
               {{ todo.title }}
               <span class="badge" @click="delTodo(todo.id, index)">X</span>
             </a>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import {delTodoUrl, getHeader} from './../../config'
export default {
  props: ['doing'],
  methods: {
    delTodo (id, index) {
      NProgress.start()
      this.axios.get(delTodoUrl + id, {headers: getHeader()})
        .then(response => {
          if(response.data.status === 200){
            this.doing.splice(index,1)
            this.getMessage(response.data.message)
          }else{
            this.getMessage(response.data.message,1)
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
