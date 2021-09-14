import Vue from 'vue'
import App from './App.vue'
import echarts from "echarts";
import Antd from 'ant-design-vue';
import axios from 'axios'

import animated from 'animate.css' // npm install animate.css --save安装，在引入
import 'ant-design-vue/dist/antd.css';

import selectUser from './components/selectUser.vue'



// font-awsome 测试
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas)
library.add(fab)
library.add(far)

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(animated)
Vue.use(Antd);
Vue.use(axios);

Vue.component(selectUser);

/**
 * 全局混入

Vue.mixin({
  created(){
    console.log("全局混入钩子函数");
  }
})
 */

/**
 * 全局混入，模块化注册

import myMixin2 from './mixin/common_minix2'
Vue.use(myMixin2)
 */



/**
 * 自定义全局指令
 */
Vue.directive('focus', {
  inserted: el => {
    el.focus()
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
