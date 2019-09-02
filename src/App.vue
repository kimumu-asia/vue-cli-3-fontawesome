<template>
  <div id="app">
    <section class="main">
      <img alt="Vue logo" class="vue-logo" src="./assets/logo.png">
      <font-awesome-icon :icon="['fab', 'font-awesome']" size="10x" class="fontawesome-logo"/>
    </section>
    <HelloWorld msg="Vue CLI 3 + Font Awesome"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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

.main .fontawesome-logo,
.main .vue-logo {
  display: inline-block;
  vertical-align: middle;
}

.vue-logo {
  max-width: 140px;
  margin: 0 30px 0 0;
}

.fontawesome-logo {
  color: #339af0;
}

</style>
