import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import BackToTop from 'vue-backtotop';

Vue.config.productionTip = false

Vue.use(BackToTop)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const appTheme = localStorage.getItem('theme');

// Check what is the active theme
if (
    appTheme === 'dark' &&
    document.querySelector('body').classList.contains('app-theme')
) {
  document.querySelector('body').classList.add('bg-primary-dark');
} else {
  document.querySelector('body').classList.add('bg-secondary-light');
}
