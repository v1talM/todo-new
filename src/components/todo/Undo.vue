<template lang="html">
  <div class="col-lg-4">
    <div class="panel panel-primary">
      <div class="panel-heading">待办 ● {{ undo.length }} <i aria-hidden="true" class="fa fa-chevron-circle-down pull-right"></i></div>
       <div class="panel-body">
         <div class="list-group" data-id="0" v-dragula="undo" bag="first-bag">
             <a
                :data-id="todo.id"
                :data-type="todo.completed"
                href="#"
                class="list-group-item"
                v-for="(todo, index) in undo"
                >
               {{ todo.title }}
             </a>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import {undoUrl, getHeader} from './../../config'
export default {
  props: ['undo']
}
</script>
