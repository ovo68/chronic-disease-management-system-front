<!-- 会员储值 -->
<template>
  <div>
    <vip-store-find-bar
        @getDataByStoreLevel="toFindByLevel"
        @getDataByStoreParams="toFindSickByParams"
        input-placeholder="患者会员卡号"/>
    <vip-store-table :table-data="vipStoreTableData"/>
  </div>
</template>

<script>
import VipStoreFindBar from "@/views/vip_manage/children/vip_store/children/VipStoreFindBar";
import VipStoreTable from "@/views/vip_manage/children/vip_store/children/vip_store_table/VipStoreTable";
import * as vipManage from "@/api/vip_manage/vipManage";

export default {
  name: "VipStore",
  components: {
    VipStoreTable,
    VipStoreFindBar
  },
  data() {
    return {
      vipStoreTableData: [
      ]
    }
  },
  methods:{
    toFindAllSickInfo(){
      vipManage.findAllSickInfo().then(res =>{
        this.vipStoreTableData = res.data
      })
    },
    toFindByLevel(level) {
      if (level.value === 0) {
        this.toFindAllSickInfo()
      } else {
        vipManage.findByLevel(level.value).then(res => {
          this.vipStoreTableData = res.data
        })
      }
    },
    //根据会员卡号查询会员
    toFindSickByParams(vipNumber) {

      if (vipNumber === "" || vipNumber == null ) {
        this.toFindAllSickInfo()
      } else {
        vipManage.findSickByParams(vipNumber).then(res => {
          this.vipStoreTableData = res.data
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