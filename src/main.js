import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import mui from './assets/js/mui.js'
import router from './router/routers.js';
Vue.prototype.mui = mui;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
