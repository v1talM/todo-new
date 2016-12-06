<template lang="html">
  <div class="col-lg-4">
    <div class="panel panel-primary">
      <div class="panel-heading">待办 ● {{ undo.length }} <i aria-hidden="true" class="fa fa-chevron-circle-down pull-right"></i></div>
       <div class="panel-body">
         <div class="list-group">
            <a href="#" class="list-group-item" v-for="todo in undo">
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
  data () {
    return {
      undo: []
    }
  },
  mounted () {
    this.axios.get(undoUrl, {headers: getHeader()})
      .then(response => {
        if(response.status === 200){
          this.undo = response.data.data
        }
      })
  }
}
</script>
