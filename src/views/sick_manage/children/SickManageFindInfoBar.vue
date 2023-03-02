<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="5">
    <sn-select
        ref="orderType"
        @selectChange="getLevel"
        :select-data="$store.state.vipType"
        slot="one-col"
        class="to-flex move-down"
        :select-style="{'width':'200px'}">
      <sn-text text="会员类型" slot="title" :move-down="10" class="margin-right-20"/>
    </sn-select>

    <sn-search-input
        ref="nameInput"
        @inputContentChange="getSearchInput"
        :input-style="{'width':'200px'}"
        input-placeholder="输入患者姓名" slot="two-col" class="move-down"/>
  </sn-row-has-four-col>
</template>
<script>
export default {
  name: "SickManageFindInfoBar",
  methods:{
    //獲取搜索輸入框中內容
    getSearchInput(value){
      //发送一个searchByName事件并且传入value
     this.$emit('searchByName',value)
    },
    //獲取等級下拉框中的內容
    getLevel(value){
      this.$emit('pullByLevel',value.value)
    }
  }
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 2px;
}
</style>