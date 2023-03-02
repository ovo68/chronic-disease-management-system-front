<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="9"
      :two="7">
    <sn-date-picker-with-round
        @chooseDate="queryByDate"
        slot="one-col"
        class="to-flex"
        :date-picker-style="{'width':'270px'}">
      <sn-text
          text="创建时间"
          slot="title"
          :move-down="12"
          class="margin-right-20 move-down-date"/>
    </sn-date-picker-with-round>
    <sn-search-input
        @inputContentChange="inputValue"
        :input-placeholder="inputPlaceholder"
        slot="two-col" class="move-down-little"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "DrugChangePriceFindInfoBar",
  data() {
    return {}
  },
  props: {
    inputPlaceholder: {
      type: String,
      default: ''
    },
  },
  methods: {
    inputValue(value) {
      this.$emit("inputDscValue", value)
    },
    queryByDate(date){
      this.$emit('queryByDate',date)
    }
  }
}
</script>

<style scoped>
.move-down-little {
  position: relative;
  top: 3px;
}
</style>