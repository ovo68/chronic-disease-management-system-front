<template>
<!--导入医生业绩统计导航栏布局组件-->
  <sn-row-has-two-col :one="5" :tow="2">
    <sn-date-picker-with-round slot="one-col" class="to-flex">
      <sn-text text="订单时间" slot="title" :move-down="10" class="margin-right"/>
    </sn-date-picker-with-round>
    <sn-select
        :select-style="{'width':'150px'}"
        :select-data=" doctorData"
        slot="two-col"
        class="to-flex"
    >
      <sn-text slot="title" text="医生" :move-down="10" class="margin-right"/>
    </sn-select>
  </sn-row-has-two-col>
</template>

<script>
export default {
name: "DoctorPerformanceStatisticsNavigation",
  data(){
    return{
      doctorData:[
        {
          value:0,
          label:'全部'
        },
        {
          value:1,
          label:'阿刁'
        },
        {
          value:2,
          label:'tom'
        },
        {
          value:3,
          label:'lak'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>