<template>
  <div>
    <row-has-four-col :one="7" :two="4" :three="6">
      <sn-date-picker-with-round
          :date-picker-style="{'width':'280px'}"
          slot="one-col" class="to-flex move-up">
        <sn-text slot="title" text="订单时间" :move-down="12" class="margin-right"/>
      </sn-date-picker-with-round>
      <sn-select :select-data="retailDrugsListFindBarData"
                 :select-style="{'width':'120px'}"
                 slot="two-col"
                 class="to-flex">
        <sn-text slot="title" text="处方类别" :move-down="11" class="margin-right"/>
      </sn-select>
      <sn-search-input input-placeholder="药品名称" slot="three-col"/>
    </row-has-four-col>
  </div>
</template>

<script>
import RowHasFourCol from "@/components/common/sn/layout/row/SnRowHasFourCol";
export default {
  name: "RetailDrugsListFindBar",
  components: {RowHasFourCol},
  data() {
    return {
      retailDrugsListFindBarData: [
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
.move-up{
  position: relative;
  bottom: 3px;
}
</style>