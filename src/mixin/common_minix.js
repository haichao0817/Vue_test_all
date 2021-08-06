let mixin = {
  data() {
    return {
      msg: 'hello mixin'
    }
  },
  created() {
    console.log('混入钩子函数');
  },
  methods: {
    show() {
      console.log(this.msg);
    }
  }
}
 export default mixin;