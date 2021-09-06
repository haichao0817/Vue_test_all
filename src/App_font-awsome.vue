<template>
  <div id="app">
    <font-awesome-icon :icon="['fab', 'youtube']" size="6x" :style="{ color: 'red' }" />
    <font-awesome-icon :icon="['fab', 'font-awesome']" size="6x" :style="{ color: '#1890ff' }" />
    <font-awesome-icon :icon="['fab', 'weixin']" size="6x" :style="{ color: '#2aae67' }" />
    <font-awesome-icon icon="spinner" size="6x" spin />
    <font-awesome-icon icon="spinner" size="6x" pulse />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>