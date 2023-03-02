<!-- 会员积分 -->
<template>
  <div>
    <vip-integral-find-bar
        @getDataByIntegralLevel="toFindByLevel"
        @getDataByIntegralParams="toFindSickByParams"/>
    <vip-integral-table :table-data="vipIntegralTableData"/>
  </div>
</template>

<script>
import VipIntegralFindBar from "@/views/vip_manage/children/vip_integral/children/VipIntegralFindBar";
import VipIntegralTable
  from "@/views/vip_manage/children/vip_integral/children/vip_integral_table/VipIntegralTable";
import * as vipManage from "@/api/vip_manage/vipManage";

export default {
  name: "VipIntegral",
  components: {
    VipIntegralFindBar,
    VipIntegralTable
  },
  data() {
    return {
      vipIntegralTableData: []
    }
  },
  methods: {
    toFindAllSickInfo() {
      vipManage.findAllSickInfo().then(res => {
        this.vipIntegralTableData = res.data
      })
    },
    toFindByLevel(level) {
      if (level.value == 0) {
        this.toFindAllSickInfo()
      } else {
        vipManage.findByLevel(level.value).then(res => {
          this.vipIntegralTableData = res.data
        })
      }
    },
    //根据会员卡号查询会员
    toFindSickByParams(vipNumber) {
      if (vipNumber == "" || vipNumber == null) {
        this.toFindAllSickInfo()
      } else {
        vipManage.findSickByParams(vipNumber).then(res => {
          this.vipIntegralTableData = res.data
        })
      }
    }

  },
  created() {
    this.toFindAllSickInfo()
  }
}
</script>

<style scoped>

</style>