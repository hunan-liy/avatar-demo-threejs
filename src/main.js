import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import api from '@/server/apiSite/index'; // 接口地址
import http from '@/server/request.js'; // 请求 axios

Vue.prototype.api = api; // 挂载到Vue实例上面
Vue.prototype.http = http; // 挂载到Vue实例上面

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
  created () {
    // 初始化系统参数
  }
}).$mount('#app');
