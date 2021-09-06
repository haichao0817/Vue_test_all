<template>
  <div style="margin:20px; height:1000px">
    <comp></comp>
    <comp2 :level=3>hello world</comp2>
  </div>
</template>
<script>

export default {
  data(){
    return {
    }
  },
  components:{
    "comp": {
      template: "<h1>app2 的局部组件 h1 </h1>"
    },
    "comp2": {
      render: function(createElement){
        return createElement(
          'h' + this.level,
          this.$slots.default
        )
      },
      props:{
        level:{
          type:Number,
          required: true
        }
      }
    }
  }
}
</script>