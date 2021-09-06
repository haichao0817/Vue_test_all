<template>
  <div style="margin:20px; height:1000px">
    <a-input v-focus style="width:300px"></a-input>
    <div v-addText style="width:300px"></div>
    <p v-pin="200">Stick me 200px from the top of the page</p>
    <p v-pinl:[direction]="300">I am pinned onto the page at 200px to the left.</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      direction: 'left'
    }
  },
  directives:{
    addText: {
      /**
       一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
       bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
       inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
       update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
       componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
       unbind：只调用一次，指令与元素解绑时调用。
      */
      inserted: el => { 
        el.innerText = '自动插入的文本';
      }
    }, 
    // 动态指令参数
    pin : {
      bind: function(el, binding){
        el.style.position = 'fixed'
        el.style.top = binding.value + 'px'
      }
    },
    pinl : {
      bind: function(el, binding){
        el.style.position = 'fixed'
        var s = (binding.arg == 'left' ? 'left' : 'top')
        el.style[s] = binding.value + 'px'
      }
    }
  }
}
</script>