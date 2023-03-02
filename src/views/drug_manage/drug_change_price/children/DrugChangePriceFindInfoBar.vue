<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="7">
    <sn-select
        :to-select="2"
        :select-data="$store.state.prescriptionType"
        slot="one-col"
        @selectChange="findInfo"
        class="to-flex move-down-little margin-left"
        :select-style="{'width':'180px'}">
      <sn-text
          text="处方类别"
          slot="title"
          class="margin-right-20"
          :move-down="10"/>
    </sn-select>
    <sn-search-input
        @inputContentChange="getInputValue"
        input-placeholder="输入药品名称/编码" slot="two-col" class="move-down-little"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "DrugChangePriceFindInfoBar",
  data() {
    return {}
  },
  methods: {
    //获取处方类型
    findInfo(selectValue) {
      this.$emit("getValue", selectValue)
    },
    //获取药品名称
    getInputValue(inputValue) {
      this.$emit("getInputValue", inputValue)
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