import Vue from 'vue'
import App from './App.vue'
import router from './router'
// add vue modal
//https://github.com/euvl/vue-js-modal
import VModal from 'vue-js-modal'

Vue.use(VModal, { dynamic: true })

/*
By default, the plugin will use "modal" name for the component.
If you need to change it, you can do so by providing "componentName" param.

Example:

Vue.use(VModal, { componentName: "foo-modal" })
...
<foo-modal name="bar"></foo-modal>
*/

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
