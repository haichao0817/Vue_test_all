<template>
  <a-select v-model="data" mode="multiple" style="width: 200px" @change="handleChange">
    <a-select-opt-group>
      <span slot="label"><a-icon type="user" />Manager</span>
      <a-select-option value="1">
        Jack
      </a-select-option>
      <a-select-option value="2">
        Lucy
      </a-select-option>
    </a-select-opt-group>
    <a-select-opt-group label="Engineer">
      <a-select-option value="3">
        yiminghe
      </a-select-option>
    </a-select-opt-group>
  </a-select>
</template>
<script>
export default {
  data(){
    return { 
      data:['2']
    }
  },
  methods: {
    handleChange() {
      console.log(this.data);
      for (let d in this.data){
        console.log(typeof(d))
      }
    },
  },
};
</script>