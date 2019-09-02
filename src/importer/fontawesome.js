// fontawesome
// https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome
// https://github.com/FortAwesome/vue-fontawesome
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(far)
library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
