<!-- 会员列表-->
<template>
  <sn-card-with-title>
    <vip-manage-title
        @toVipList="toVipList"
        @toVipStore="toVipStore"
        @toVipIntegral="toVipIntegral"
        @toVipSetting="toVipSetting"
        slot="title"/>
    <div slot="content">
      <vip-list v-if="showVipList"/>
      <vip-integral v-if="showVipIntegral"/>
      <vip-store v-if="showVipStore"/>
      <vip-setting v-if="showVipSetting"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import VipManageTitle from "@/views/vip_manage/children/VipManageTitle";
import VipList from "@/views/vip_manage/children/vip_list/VipList";
import VipIntegral from "@/views/vip_manage/children/vip_integral/VipIntegral";
import VipStore from "@/views/vip_manage/children/vip_store/VipStore";
import VipSetting from "@/views/vip_manage/children/vip_setting/VipSetting";

export default {
  name: "VipManage",
  data() {
    return {
      showVipList: true,
      showVipStore: false,
      showVipSetting: false,
      showVipIntegral: false,
    }
  },
  components: {
    VipManageTitle,
    VipList,
    VipIntegral,
    VipStore,
    VipSetting
  },
  methods: {
    toVipList() {
      this.showVipList = true
      this.showVipStore = false
      this.showVipIntegral = false
      this.showVipSetting = false
    },
    toVipStore() {
      this.showVipList = false
      this.showVipStore = true
      this.showVipIntegral = false
      this.showVipSetting = false
    },
    toVipIntegral() {
      this.showVipList = false
      this.showVipStore = false
      this.showVipIntegral = true
      this.showVipSetting = false
    },
    toVipSetting() {
      this.showVipList = false
      this.showVipStore = false
      this.showVipIntegral = false
      this.showVipSetting = true
    },

  },


}
</script>

<style scoped>

</style>