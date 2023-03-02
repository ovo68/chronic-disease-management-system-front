<template>
  <sn-card-with-title>
    <enter-stock-pass-check-title slot="title"/>
    <div slot="content">
      <enter-stock-pass-check-description/>
      <enter-stock-pass-check-table :table-data="enterStockPassCheckTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import EnterStockPassCheckDescription
  from "@/views/drug_manage/enter_stock_manage/enter_stock_pass_check/children/EnterStockPassCheckDescription";
import EnterStockPassCheckTable
  from "@/views/drug_manage/enter_stock_manage/enter_stock_pass_check/children/EnterStockPassCheckTable";
import EnterStockPassCheckTitle
  from "@/views/drug_manage/enter_stock_manage/enter_stock_pass_check/children/EnterStockPassCheckTitle";

import {getStockByid} from "@/api/drug_manage/drugManage";

export default {
  name: "EnterStockPassCheck",
  components: {
    EnterStockPassCheckDescription,
    EnterStockPassCheckTable,
    EnterStockPassCheckTitle
  },
  data() {
    return {
      enterStockPassCheckTableData:[]
    }
  },
  methods:{
    toGetOneById(id){
        getStockByid(id).then(res => {
          this.enterStockPassCheckTableData=res.data
          this.$set(this.enterStockPassCheckTableData[0],'id',1)
        })
    }
  },
  created() {
    this.toGetOneById(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>