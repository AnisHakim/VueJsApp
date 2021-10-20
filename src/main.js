import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/tailwind.css'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.config.personionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
