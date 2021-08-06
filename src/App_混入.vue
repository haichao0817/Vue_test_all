<template>
  <div>test</div>
</template>
<script>

import myMixin from './mixin/common_minix'

export default {
  name: 'myComp',
  mixins: [myMixin],
  created(){
    console.log('组件钩子函数')
    this.show();
  }
};
</script>