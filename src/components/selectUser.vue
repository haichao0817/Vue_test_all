<template>
    <a-select :filter-option="false" show-search allowClear style="width:200px" @search="searchData" @change="handleChange" @blur="initOption"
      placeholder="输入用户名以搜索"  @popupScroll="appendData"
    >
      <a-spin v-if="searching" slot="notFoundContent" size="small" />
      <a-select-option v-for="(item,index) in partUserData" :key="index" :value="item.id">
              {{ item.user_nicename }}  ({{ item.user_login }})
      </a-select-option>
    </a-select>
</template>

<script>
export default {
  props: {
    selectedData: String
  },
  data(){
    return{
      allUserData:[],
      partUserData:[],
      restUserData:[],
      timer: null,
      load:null,
      searching:false
    }
  },
  created(){
    this.getSelectionOptionData();
  },
  methods: {
    axiosHandle(type, url, data){
      let vm = this;
      return new Promise((resolve) =>{
        vm.$axios[type](url, vm.$Qs.stringify(data), {timeout: 10000})
        .then(response => {
        if (response.data.status == 200){
          resolve(response.data.msg);
        } else {
          if (response.data.status == 500){
            this.$message.error('系统错误，请联系管理员');
          } else {
            this.$message.error(response.data.info);
          }
        }
      })
      .catch(()=>{
        this.$message.error('请求数据失败');
      })
      }); 
    },
    getSelectionOptionData(){
      this.axiosHandle('get', '/index.php?g=materials&m=FixedAsset&a=getSystemUser').then((res) => {
        this.allUserData = res;
        this.initOption();
      });
    },
    initOption(){
      this.partUserData = this.allUserData.slice(0,100);
      this.restUserData = this.allUserData.slice(100);
    },
    handleChange(value){
      console.log(`selected ${value}`);
      this.initOption();
      this.$emit('change', value);
    },
    searchData(val){
      if(this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        this.searching = true;
        this.partUserData = [];
        let re = new RegExp(".*" + val + ".*");
        let filterResult = this.allUserData.filter(item =>{
          return re.test(item.user_nicename + item.user_login)
        })
        this.partUserData = filterResult.slice(0,100);
        this.restUserData = filterResult.slice(100);
        this.searching = false;
      }, 600)
    },
    appendData(e){     
      if(this.load) clearTimeout(this.load);
      this.load = setTimeout(()=>{
        if(e.target.scrollHeight - e.target.scrollTop <= 300 && this.restUserData.length > 0){
          this.partUserData = this.partUserData.concat(this.restUserData.splice(0,100)); 
        }
      }, 600)
    }
  }
}
</script>