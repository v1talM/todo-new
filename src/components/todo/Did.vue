<template lang="html">
  <div class="col-lg-4">
    <div class="panel panel-success">
      <div class="panel-heading">已完成 ● {{ did.length }} <i aria-hidden="true" class="fa fa-chevron-circle-down pull-right"></i></div>
       <div class="panel-body">
         <div class="list-group" data-id="2" v-dragula="did" bag="first-bag">
             <a :key="todo.id"
                :data-id="todo.id"
                :data-type="todo.completed"
                href="#"
                class="list-group-item"
                v-for="(todo, index) in did"
                >
               {{ todo.title }}
             </a>
         </div>
       </div>
     </div>
   </div>
</template>
<script>
export default {
  props: ['did']
}
</script>
