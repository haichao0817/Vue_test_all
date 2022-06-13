<template>
<div id='appqq'>
    <component-a ref='comA'></component-a>
    <component-a ref='comB'></component-a>
  </div>
</template>

<script>
import Vue from 'vue'
Vue.component('componentA', {
  data: function(){
    return {
      msg: 'hello'
    }
  },
  template: `<div>
              message: {{msg}}
            </div>`,
  watch: {
    msg: function(){
      // 通过 vm.$parent 取得父组件
      console.log(this.$parent.name)
      // 通过 ref 指定子组件索引名称
      // 通过 vm.$refs 取得子组件
      console.log(this.$parent.$refs.comA.msg)
    }
  }
})

export default {
  data(){
    return {
    };
  },
}
</script>

<style scoped>
</style>