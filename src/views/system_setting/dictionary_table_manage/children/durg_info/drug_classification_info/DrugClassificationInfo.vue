<template>
  <sn-row-has-two-col :left="7" :right="16">
    <sn-select slot="one-col"
               :select-data="selectData"
               class="to-flex"
               :select-style="{'width':'200px'}"
    >
      <sn-text slot="title" text="处方类型" class="margin-right" :move-down="10"></sn-text>
    </sn-select>
    <sn-search-input
        slot="two-col"
        input-placeholder="内容"
        style="width:200px">
    </sn-search-input>
  </sn-row-has-two-col>

</template>

<script>
export default {
  name: "DrugClassificationInfo",
  data(){
    return {
      selectData:[
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '西/成药处方'
        },
        {
          value: 2,
          label: '中药处方'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>