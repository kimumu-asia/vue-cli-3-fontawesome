import Vue from 'vue'
import App from './App.vue'

require('@/importer/fontawesome.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
