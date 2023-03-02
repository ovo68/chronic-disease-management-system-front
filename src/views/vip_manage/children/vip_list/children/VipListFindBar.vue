<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="6"
      :two="6"
      :three="6"
      :four="6">
    <sn-select
        @selectChange="getVipLevel"
        :select-data="$store.state.vipType"
        :select-style="{'width':'220px'}"
        slot="one-col" class="to-flex">
      <sn-text
          text="会员等级"
          slot="title"
          :move-down="11"
          class="margin-right"/>
    </sn-select>

    <sn-date-picker
        @dateChange="getVipActivateDate"
        slot="two-col" :set-style="{'width':'220px'}" class="to-flex">
      <sn-text text="创建时间" slot="title" class="margin-right" :move-down="10"/>
    </sn-date-picker>

    <!-- 搜索框-->
    <sn-search-input
        @inputContentChange="getVipNumber"
        :input-style="{'width':'250px'}"
        :input-placeholder="inputPlaceholder"
        slot="three-col" class="move-up"/>

    <el-checkbox
        class="warning"
        v-model="vipExpireWarnChecked"
        slot="four-col">
      <sn-text text="会员到期预警"/>
    </el-checkbox>

  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "StockManageFindBar",
  props: {
    inputPlaceholder: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      vipExpireWarnChecked: true,
      checkList: ['有效期预警']
    }
  },
  methods: {
    //获取会员等级
    getVipLevel(level) {
      this.$emit('getDataByLevel', level)
    },
    //获取会员开卡日期
    getVipActivateDate(activateDate) {
      this.$emit('getDataByActivateDate', activateDate)
    },
    //获取会员卡号
    getVipNumber(vipNumber) {
      this.$emit('getDataByParams',vipNumber)
    }
  },
}
</script>

<style scoped>
.warning {
  position: relative;
  top: 11px;
}
</style>