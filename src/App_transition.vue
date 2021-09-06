<template>
  <div id="demo">
  <button @click="animateHead">
    Toggle
  </button>
  <transition name="fade">
    <p v-if="show">hello</p>
  </transition>
</div>
</template>
<script>
export default {
  data() {
    return {
      show:true
    };
  },
  methods: {
    animateHead(){
      this.show = !this.show;
    }
  },
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>