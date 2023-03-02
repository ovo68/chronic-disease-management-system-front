<template>
<sn-row-has-four-col :one="5" :two="3" :three="3">
  <sn-date-picker-with-round slot="one-col" class="to-flex">
    <sn-text text="订单时间" slot="title" :move-down="10" class="margin-right"/>
  </sn-date-picker-with-round>
  <sn-select
      :select-style="{'width':'150px'}"
      :select-data="deskData"
      slot="two-col"
      class="to-flex">
    <sn-text slot="title" text="科室" :move-down="10" class="margin-right"/>
  </sn-select>

  <sn-select
      :select-style="{'width':'150px'}"
      :select-data="tollCollectorData"
      slot="three-col"
      class="to-flex">
    <sn-text slot="title" text="收费员" :move-down="10" class="margin-right"/>
  </sn-select>
</sn-row-has-four-col>
</template>

<script>
export default {
name: "TollCollectorChargeStatisticsNavigation",
  data(){
    return{
      deskData:[
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
      ],
      tollCollectorData:[
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
          label:'马保国'
        },
        {
          value:3,
          label:'王思聪'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>