<!-- 检查项目统计 -->
<template>
  <div>
    <check-item-statics-find-bar class="margin-bottom-20"/>
    <check-item-statics-table :table-data="checkItemStaticsTableData"/>
  </div>
</template>

<script>
import CheckItemStaticsFindBar
  from "@/views/statistics_table/check_item_statistics/chirden/CheckItemStaticsFindBar";
import CheckItemStaticsTable
  from "@/views/statistics_table/check_item_statistics/chirden/CheckItemStaticsTable";

export default {
  name: "CheckItemStatistics",
  components: {
    CheckItemStaticsFindBar,
    CheckItemStaticsTable
  },
  data() {
    return {
      checkItemStaticsTableData:[
          {
            id:'1',
            orderId:'2',
            orderType:'煎药费',
            projectNum:'3',
            projectName:'脑电图',
            ticketType:'注射费',
            num:'52',
            costUnitPrice:'82.51',
            retailUnitPrice:'811.52',
            costTotalPrice:'51215.55',
            retailTotalPrice:'56656262.65',
            profit:'65',
            orderDate:'2019-05-25'
      },
        {
          id:'1',
          orderId:'2',
          orderType:'煎药费',
          projectNum:'3',
          projectName:'脑电图',
          ticketType:'注射费',
          num:'52',
          costUnitPrice:'82.51',
          retailUnitPrice:'811.52',
          costTotalPrice:'51215.55',
          retailTotalPrice:'56656262.65',
          profit:'65',
          orderDate:'2019-05-25'
        },
        {
          id:'1',
          orderId:'2',
          orderType:'煎药费',
          projectNum:'3',
          projectName:'脑电图',
          ticketType:'注射费',
          num:'52',
          costUnitPrice:'82.51',
          retailUnitPrice:'811.52',
          costTotalPrice:'51215.55',
          retailTotalPrice:'56656262.65',
          profit:'65',
          orderDate:'2019-05-25'
        },
        {
          id:'1',
          orderId:'2',
          orderType:'煎药费',
          projectNum:'3',
          projectName:'脑电图',
          ticketType:'注射费',
          num:'52',
          costUnitPrice:'82.51',
          retailUnitPrice:'811.52',
          costTotalPrice:'51215.55',
          retailTotalPrice:'56656262.65',
          profit:'65',
          orderDate:'2019-05-25'
        },
        {
          id:'1',
          orderId:'2',
          orderType:'煎药费',
          projectNum:'3',
          projectName:'脑电图',
          ticketType:'注射费',
          num:'52',
          costUnitPrice:'82.51',
          retailUnitPrice:'811.52',
          costTotalPrice:'51215.55',
          retailTotalPrice:'56656262.65',
          profit:'65',
          orderDate:'2019-05-25'
        },
        {
          id:'1',
          orderId:'2',
          orderType:'煎药费',
          projectNum:'3',
          projectName:'脑电图',
          ticketType:'注射费',
          num:'52',
          costUnitPrice:'82.51',
          retailUnitPrice:'811.52',
          costTotalPrice:'51215.55',
          retailTotalPrice:'56656262.65',
          profit:'65',
          orderDate:'2019-05-25'
        }
      ]
    }
  }

}
</script>

<style scoped>

</style>