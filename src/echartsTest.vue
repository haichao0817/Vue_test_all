<template>
 <div>
  <button @click="changeYear">chang data</button>
  <div id="myChart1" :style="{width: '100%', height: '700px'}"></div>
  </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
export default {
  data() {
    return {
      myChart1:null,
      option:{
        title: {
          text: "软件费用统计1",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "微信",
            "QQ",
            "字节跳动",
            "闻泰",
            "淘宝"
          ]
        },
        series: [
          {
            name: "软件费用统计2",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "微信" },
              { value: 310, name: "QQ" },
              { value: 234, name: "字节跳动" },
              { value: 135, name: "闻泰" },
              { value: 548, name: "淘宝" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  mounted(){
    this.drawImg1()
  },
  methods:{
    drawImg1() {  
      // 基于准备好的dom，初始化echarts实例
      this.myChart1 = echarts.init(
          document.getElementById("myChart1")
      );
      this.myChart1.setOption(this.option);
    },
    changeYear(){
      this.option.series[0].data = [
          { value: 1435, name: "123123" },
          { value: 1210, name: "QQ22" },
          { value: 1234, name: "zsfaf" },
          { value: 1035, name: "sfsfd" },
          { value: 1548, name: "asfaf" }
      ];
      console.log(this.option);
      this.myChart1.setOption(this.option);
    }   
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>