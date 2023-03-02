<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="7">
    <sn-select
        :select-data="prescriptionData"
        :select-style="{'width':'180px'}"
        slot="one-col" class="to-flex">
      <sn-text
          text="处方类别"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>
    <sn-search-input
        :input-placeholder="inputPlaceholder"
        slot="two-col" class="move-up"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "StockCheckFindBar",
  props: {
    inputPlaceholder: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      prescriptionData: [
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
  },
}
</script>

<style scoped>
.move-up{
  position: relative;
  bottom: 1px;
}
</style>