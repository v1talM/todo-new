<template lang="html">
  <div class="col-lg-4">
    <div class="panel panel-warning">
      <div class="panel-heading">进行中 ● {{ doing.length }} <i aria-hidden="true" class="fa fa-chevron-circle-down pull-right"></i></div>
       <div class="panel-body">
         <div class="list-group">
            <a href="#" class="list-group-item" v-for="todo in doing">
              {{ todo.title }}
            </a>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import {doingUrl, getHeader} from './../../config'
export default {
  data () {
    return {
      doing: []
    }
  },
  mounted () {
    this.axios.get(doingUrl, {headers: getHeader()})
      .then(response => {
        if(response.status === 200){
          this.doing = response.data.data
        }
      })
  }
}
</script>
