<template lang="html">
  <div class="col-lg-4">
    <div class="panel panel-warning">
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
             </a>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  props: ['doing']
}
</script>
