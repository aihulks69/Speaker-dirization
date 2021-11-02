import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import './index.css'
import router from './router'
import store from './store'
import {initTheme} from "./composables/switchTheme";
import BackToTop from "vue-backtotop";
import VModal from 'vue-js-modal'
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
import Avatar from 'vue-avatar'

Vue.use(BackToTop)
Vue.use(Notifications)
Vue.config.productionTip = false
Vue.use(VModal, { dialog: true })

Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)

Vue.component('avatar', Avatar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

initTheme();
