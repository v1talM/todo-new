<template lang="html">
  <div class="col-lg-4">
    <div class="panel panel-success">
      <div class="panel-heading">已完成 ● {{ did.length }} <i aria-hidden="true" class="fa fa-chevron-circle-down pull-right"></i></div>
       <div class="panel-body">
         <div class="list-group">
            <a href="#" class="list-group-item" v-for="todo in did">
              {{ todo.title }}
            </a>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
import {didUrl, getHeader} from './../../config'
export default {
  data () {
    return {
      did: []
    }
  },
  mounted () {
    this.axios.get(didUrl, {headers: getHeader()})
      .then(response => {
        if(response.status === 200){
          this.did = response.data.data
        }
      })
  }
}
</script>
