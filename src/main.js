import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './route/index'
import axios from 'axios'

import '@fortawesome/fontawesome-free'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false
axios.defaults.baseURL='https://localhost:44358/'
axios.defaults.headers.common['Content-Type'] =  'application/json'
axios.defaults.headers.common['Authorization'] =  'Bearer '+localStorage.getItem('Token')

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
