import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import './index.css'
import router from './router'
import store from './store'
import {initTheme} from "./composables/switchTheme";
import BackToTop from "vue-backtotop";
import VModal from 'vue-js-modal'

Vue.use(BackToTop)
Vue.use(Notifications)
Vue.config.productionTip = false
Vue.use(VModal, { dynamicDefault: { draggable: false, resizable: false } })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

initTheme();
