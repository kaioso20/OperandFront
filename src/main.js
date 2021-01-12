import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMask from 'v-mask'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './routes/routes'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuelidate)
Vue.use(VueMask)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')