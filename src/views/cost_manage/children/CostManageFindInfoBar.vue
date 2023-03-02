<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="5"
      :two="7"
      :three="4">
    <sn-select
        ref="select"
        @selectChange="getOrderType"
        :select-data="$store.state.orderType"
        slot="one-col"
        class="to-flex move-down-little margin-left"
        :select-style="{'width':'160px'}">
      <sn-text text="订单类型" slot="title" class="margin-right-20 move-down"/>
    </sn-select>

    <sn-date-picker-with-round
        ref="dateChoose"
        @chooseDate="getQueryTime"
        slot="two-col" class="to-flex" :date-picker-style="{'width':'240px'}">
      <sn-text text="创建时间" slot="title" class="margin-right-20 move-down-date"/>
    </sn-date-picker-with-round>
    <sn-search-input
        ref="input"
        @inputContentChange="getQueryName"
        input-placeholder="输入患者姓名"
        slot="three-col"
        class="move-down-little"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "CostManageFindInfoBar",
  data() {
    return {}
  },
  methods: {
    getOrderType(orderType) {
      this.$emit('getOrderType', orderType)
    },
    getQueryTime(date) {
      this.$emit('getQueryTime', date)
    },
    getQueryName(name) {
      this.$emit('getQueryName', name)
    }
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 10px;
}

.move-down-little {
  position: relative;
  top: 2px;
}

.move-down-date {
  position: relative;
  top: 12px;
}
</style>