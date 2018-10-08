<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <HelloWorld></HelloWorld>
    <EmilHeader></EmilHeader>
    <EmilMain></EmilMain>
    <EmilFooter></EmilFooter>
    <a href="#/firstRoute">To routerWorld</a>
    <a href="/">Bring me home!</a>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EmilHeader from './components/EmilHeader.vue'
import EmilMain from './components/EmilMain.vue'
import EmilFooter from './components/EmilFooter.vue'
// import routes from './router/index.js'

export default {
  name: 'App',
  components: {
    HelloWorld,
    EmilHeader,
    EmilMain,
    EmilFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
