import Vue from 'vue';
import App from './App.vue';
import router from './router/index'
import './utils/bootstrap'
import './utils/toasted'
import './utils/icons'
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");