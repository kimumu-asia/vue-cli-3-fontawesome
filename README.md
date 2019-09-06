# Vue CLI 3 + fontawesome sample app
Sample app for adding fontawesome to your Vue CLI project more easily.
 - Font Awesome now has an official Vue.js component that's available for all who want to use our icons in their Vue.js projects. ([show details](https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs))
 - based on [Font Awesome 5 Vue component](https://github.com/FortAwesome/vue-fontawesome)
 - No CSS file required

## 01 Demo
![Demo](https://user-images.githubusercontent.com/54694888/64406895-f0459880-d0bd-11e9-8eaf-53db58c25e9b.png)


## 02 Project setup
```
yarn install
```

## 03 Usage
```vue
<template>
  <div>
    <font-awesome-icon :icon="['fab', 'font-awesome']" size="1x" class="icon" />
    <font-awesome-icon :icon="['fab', 'github']" size="1x" class="icon" />
  </div>
</template>

<script>
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
</script>
```

