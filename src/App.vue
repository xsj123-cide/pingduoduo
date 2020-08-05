<template>
  <div id="app">
    <tabBar></tabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabBar from './components/TabBar.vue'
export default {
  name: 'App',
  components: {
    tabBar
  }
}
</script>

<style>
  
</style>
