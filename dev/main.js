import Vue from 'vue';
import App from './App.vue'

import HelloWorld from '../src/index.js';
Vue.use(HelloWorld);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
