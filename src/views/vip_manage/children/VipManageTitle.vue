<template>
  <div class="to-flex">
    <el-button
        :style="vipListButtonStyle"
        @click="toVipList"
        plain type="primary">
      <sn-text text="会员列表"/>
    </el-button>
    <el-button
        :style="vipStoreButtonStyle"
        @click="toVipStore"
        plain type="primary">
      <sn-text text="储值管理"/>
    </el-button>
    <el-button
        :style="vipIntegralButtonStyle"
        @click="toVipIntegral"
        plain type="primary">
      <sn-text text="积分管理"/>
    </el-button>
    <el-button
        :style="vipSettingButtonStyle"
        @click="toVipSetting"
        plain type="primary">
      <sn-text text="会员设置"/>
    </el-button>
  </div>
</template>

<script>
export default {
  name: "VipManageTitle",
  data() {
    return {
      vipListButtonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      },
      vipIntegralButtonStyle: '',
      vipSettingButtonStyle: '',
      vipStoreButtonStyle: '',
      buttonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      }
    }
  },
  methods: {
    toVipList() {
      this.vipListButtonStyle = this.buttonStyle
      this.vipStoreButtonStyle = ''
      this.vipIntegralButtonStyle = ''
      this.vipSettingButtonStyle = ''
      this.$emit("toVipList")
    },
    toVipStore() {
      this.vipStoreButtonStyle = this.buttonStyle
      this.vipIntegralButtonStyle = ''
      this.vipSettingButtonStyle = ''
      this.vipListButtonStyle = ''
      this.$emit("toVipStore")
    },
    toVipIntegral() {
      this.vipIntegralButtonStyle = this.buttonStyle
      this.vipStoreButtonStyle = ''
      this.vipSettingButtonStyle = ''
      this.vipListButtonStyle = ''
      this.$emit("toVipIntegral")
    },
    toVipSetting() {
      this.vipSettingButtonStyle = this.buttonStyle
      this.vipIntegralButtonStyle = ''
      this.vipStoreButtonStyle = ''
      this.vipListButtonStyle = ''
      this.$emit("toVipSetting")
    }
  },
}
</script>

<style scoped>
.el-button {
  width: 100%;
}
</style>