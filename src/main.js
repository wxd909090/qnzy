// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import common from './common';
import $ from 'jquery';
import md5 from 'js-md5';
import directives from './directives';

Vue.use(directives);
Vue.use(ElementUI);
Vue.use(common);//注入属性和方法


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
