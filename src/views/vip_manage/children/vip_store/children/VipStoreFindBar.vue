<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="6"
      :three="6"
      :four="6">
    <sn-select
        @selectChange = "getStoreLevel"
        :select-data="vipGradeData"
        :select-style="{'width':'220px'}"
        slot="one-col" class="to-flex">
      <sn-text
          text="会员等级"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>

    <!-- 搜索框-->
    <sn-search-input
        @inputContentChange = "getStoreParams"
        :input-style="{'width':'250px'}"
        input-placeholder="患者姓名/手机号码/会员卡号"
        slot="two-col" class="move-up"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "VipStoreFindBar",
  data() {
    return {
      vipGradeData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: 'vip1'
        },
        {
          value: 2,
          label: 'vip2'
        },
        {
          value: 3,
          label: 'vip3'
        },
        {
          value: 4,
          label: 'vip4'
        },
        {
          value: 5,
          label: 'vip5'
        },
        {
          value: 6,
          label: 'vip6'
        },
      ],
    }
  },
  methods:{
    getStoreLevel(level){
      this.$emit('getDataByStoreLevel', level)
    },
    getStoreParams(vipNumber){
      this.$emit('getDataByStoreParams',vipNumber)
    }
  }
}
</script>

<style scoped>

</style>