import Vue from 'vue'
import App from './App.vue'
import router from './router'
// add vue modal
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
