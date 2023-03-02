<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :three="6"
      :two="6">

    <sn-select
        @selectChange="getSelectValue"
        :select-data="checkStatus"
        :select-style="{'width':'180px'}"
        slot="one-col" class="to-flex">
      <sn-text
          text="审核状态"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>

    <sn-select
        @selectChange="getTypeValue"
        :select-data="outStockType"
        :select-style="{'width':'180px'}"
        slot="two-col" class="to-flex">
      <sn-text
          text="入库类型"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>
    <sn-search-input
        @inputContentChange="getInputValue"
        :input-placeholder="inputPlaceholder"
        slot="three-col" class="move-up"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "EnterStockInfoFindBar",
  props: {
    inputPlaceholder: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      checkStatus: [
        {
          value: 3,
          label: '全部'
        },
        {
          value: 0,
          label: '未审核'
        },
        {
          value: 1,
          label: '审核通过'
        },
        {
          value: 2,
          label: '审核未通过'
        },
      ],
      outStockType: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '采购入库'
        },
        {
          value: 2,
          label: '退货入库'
        },
        {
          value: 3,
          label: '其他入库'
        },
      ],
    }
  },
  methods:{
    getSelectValue(value){
      console.log(value)
      this.$emit('selectChange',value)
    },
    getTypeValue(value){
      this.$emit('selectTypeValue',value)
    },
    getInputValue(value){
      this.$emit('getInputValue',value)
    }
  }
}
</script>

<style scoped>
.move-up {
  position: relative;
  bottom: 1px;
}
</style>