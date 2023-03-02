<template >
  <sn-row-has-four-col
      class="to-flex"
      :one="5"
      :two="7">
    <sn-select :select-data="prescriptionType"
               slot="one-col"
               class="to-flex move-down-little margin-left"
               :select-style="{'width':'180px'}">
      <sn-text text="处方类别" slot="title" class="margin-right-20" :move-down="10"/>
    </sn-select>
    <sn-search-input input-placeholder="费用名称" slot="two-col" class="move-down-little"/>
  </sn-row-has-four-col>

</template>

<script>

export default {
name: "AdditionalCostTable",
  components:{

  },
  data(){
   return{
     prescriptionType: [
      {
        value: 0,
        label: '全部'
      },
      {
        value: 1,
        label: '西/成药'
      },
      {
        value: 2,
        label: '中药'
      },
    ]
   }
  }
}
</script>

<style scoped>
.move-down-little{
  position: relative;
  top: 3px;
}
</style>