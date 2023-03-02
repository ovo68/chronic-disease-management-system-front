<template>
<!--导入科室收费导航栏布局组件-->
  <sn-row-has-two-col :one="5" :tow="2">
      <sn-date-picker-with-round slot="one-col" class="to-flex">
        <sn-text text="订单时间" slot="title" :move-down="10" class="margin-right"/>
      </sn-date-picker-with-round>
      <sn-select
          :select-style="{'width':'150px'}"
          :select-data="whatDeskData"
          slot="two-col"
          class="to-flex"
      >
        <sn-text slot="title" text="所属科室" :move-down="10" class="margin-right"/>
      </sn-select>
  </sn-row-has-two-col>
</template>

<script>
export default {
name: "DepartmentChargeNavigation",
  data(){
  return{
    whatDeskData:[
      {
        value:0,
        label:'全部'
      },
      {
        value:1,
        label: '全科'
      },
      {
        value:2,
        label: '内科'
      },
      {
        value:3,
        label: '儿科'
      }
    ]
  }
  }
}
</script>

<style scoped>

</style>