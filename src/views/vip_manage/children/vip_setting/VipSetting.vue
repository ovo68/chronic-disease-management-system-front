<!-- 会员设置 -->
<template>
  <VipSettingTable
      v-if="this.vipSettingTableData.length > 0"
      :table-data="vipSettingTableData"/>
</template>

<script>
import VipSettingTable from "@/views/vip_manage/children/vip_setting/children/VipSettingTable";
import {getAllVipInfo} from "@/api/vip_manage/vipManage";

export default {
  name: "VipSetting",
  components: {
    VipSettingTable
  },
  data() {
    return {
      vipSettingTableData: []
    }
  },
  methods: {
    toGetAllVipInfo() {
      getAllVipInfo().then(res => {
        this.vipSettingTableData = res.data
      })
    }
  },
  created() {
    this.toGetAllVipInfo()
  }
}
</script>

<style scoped>

</style>