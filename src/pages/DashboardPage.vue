<template lang="html">
  <div class="wrapper" id="dashboard-wrapper">
    <Undo></Undo>
    <Doing></Doing>
    <Did></Did>
  </div>
</template>

<script>
import Undo from './../components/todo/Undo'
import Doing from './../components/todo/Doing'
import Did from './../components/todo/Did'
export default {
  components: {
    Undo, Doing, Did
  }
}
</script>

<style lang="css">
</style>
