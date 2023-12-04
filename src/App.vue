<template>
  <!-- <Navbar /> -->
  <router-view />
</template>

<script>
import Navbar from '@/modules/shared/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Inter';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body {
  margin: 0px;

}

.container {
  margin-top: 92px;
}
</style>
