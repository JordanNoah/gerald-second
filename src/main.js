import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import provider from './plugins/provider'

//provider de peticiones

Vue.config.productionTip = false
Vue.prototype.$provider = provider

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
