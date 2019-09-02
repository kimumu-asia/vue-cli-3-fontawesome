<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>About Font Awesome</h3>
    <ul>
      <li>
        <font-awesome-icon :icon="['fab', 'font-awesome']" size="1x" class="icon" />
        <a href="https://fontawesome.com/" target="_blank" rel="noopener">FontAwesome official</a>
      </li>
      <li>
        <font-awesome-icon :icon="['fab', 'github']" size="1x" class="icon" />
        <a href="https://github.com/FortAwesome/vue-fontawesome" target="_blank" rel="noopener">vue-fontawesome Git repository</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

li > .icon {
  margin: 0 5px;
}
</style>
