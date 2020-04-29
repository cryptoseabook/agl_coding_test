<template>
  <div id="app">
    <img alt="AGL logo" src="./assets/logo.png">
    <AglCodeTest msg="Welcome to Agl Programming Chanllenge"/>
    <Footer></Footer>
  </div>
</template>

<script>
import AglCodeTest from './components/AglCodeTest.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AglCodeTest,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

img {
  width: 200px;
  height: 130px;
}
</style>
