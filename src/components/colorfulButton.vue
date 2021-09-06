<template>
  <div>
    <button class="button" @click="$emit('click')">
      <slot>
        Click me
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ColorButton',
  props: {
  }
}
</script>

<style scoped>
</style>
