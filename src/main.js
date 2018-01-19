import Vue from 'vue'
import App from './App'
import router from './router'
//css初始化
require('!style-loader!css-loader!less-loader!./assets/css/init.less');
//iview组件引入
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
