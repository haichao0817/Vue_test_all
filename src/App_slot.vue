<template>
  <div id="app">
    <ColorButton></ColorButton>
    <ColorButton>
      <slot>
        <div>
          {{ text }}
        </div>
      </slot>
  </ColorButton>
  <ColorButton>
      <slot>
        <font-awesome-icon :icon="['fab', 'weixin']" size="4x" :style="{ color: '#2aae67' }" />
        <div>
          {{ text }}
        </div>
      </slot>
  </ColorButton>
  </div>
</template>

<script>
import ColorButton from './components/colorfulButton.vue'

export default {
  components: { ColorButton },
  data(){
    return {
      text:'测试'
    };
  },
}
</script>