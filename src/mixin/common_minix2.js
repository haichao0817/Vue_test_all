/**
 * 模块化注册
 */

export default {
  install(Vue) {
    Vue.mixin({
      created() {
        console.log('全局混入的钩子函数222');
      }
    })
  }
}