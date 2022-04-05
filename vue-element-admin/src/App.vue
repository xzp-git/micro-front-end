<template>
  <div id="app">
    <router-view />
    <div id="MICRO_DOC" />
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun'

export default {
  name: 'App',
  created() {
    this.load()
  },
  methods: {
    load() {
      loadMicroApp({
        name: 'doc',
        entry: '//localhost:8081',
        container: '#MICRO_DOC',
        activeRlue: () => true
      })
    }
  }
}
</script>
