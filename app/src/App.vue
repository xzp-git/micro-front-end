<template>
<div class="doc">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.doc{
  width: 200px;
  height: 200px !important;
  position: fixed;
  bottom: 0;
  right: 0;
  background: hotpink;
  overflow-y: auto;
}
</style>
