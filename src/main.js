import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import router from './routes/routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
