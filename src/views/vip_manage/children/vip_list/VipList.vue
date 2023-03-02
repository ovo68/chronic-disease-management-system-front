<!-- 会员列表-->
<template>
  <div>
    <vip-list-find-bar
        @getDataByLevel="toFindByLevel"
        @getDataByActivateDate="toFindSickByActivateDate"
        @getDataByParams="toFindSickByParams"
        input-placeholder="会员卡号"/>
    <vip-list-table :table-data="vipListTableData"/>
  </div>
</template>

<script>
import VipListFindBar from "@/views/vip_manage/children/vip_list/children/VipListFindBar";
import VipListTable from "@/views/vip_manage/children/vip_list/children/VipListTable";
import * as vipManage from "@/api/vip_manage/vipManage";


export default {
  name: "VipList",
  data() {
    return {
      vipListTableData: []
    }
  },
  components: {
    VipListFindBar,
    VipListTable
  },
  methods: {
    toFindAllSickInfo() {
      vipManage.findAllSickInfo().then(res => {
        this.vipListTableData = res.data
      })
    },
    toFindByLevel(level) {
      if (level.value === 0) {
        this.toFindAllSickInfo()
      } else {
        vipManage.findByLevel(level.value).then(res => {
          this.vipListTableData = res.data
        })
      }
    },
    //根据创建时间查询会员
    toFindSickByActivateDate(activateDate) {
      if (activateDate !== 0) {
        vipManage.findSickByActivateDate(activateDate).then(res => {
          this.vipListTableData = res.data
        })
      } else {
        this.toFindAllSickInfo()
      }
    },
    //根据会员卡号查询会员
    toFindSickByParams(vipNumber) {

      if (vipNumber === "" || vipNumber == null) {
        this.toFindAllSickInfo()
      } else {
        vipManage.findSickByParams(vipNumber).then(res => {
          this.vipListTableData = res.data
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