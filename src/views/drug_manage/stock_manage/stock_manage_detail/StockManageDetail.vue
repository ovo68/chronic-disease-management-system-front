<!-- 库存详情 -->
<template>
  <sn-card-with-title>
    <stock-manage-detail-title slot="title"/>
    <div slot="content">
      <stock-drug-detail-info/>
      <stock-manage-detail-table :table-data="stockManageDetailTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import StockManageDetailTitle
  from "@/views/drug_manage/stock_manage/stock_manage_detail/children/StockManageDetailTitle";
import StockManageDetailTable
  from "@/views/drug_manage/stock_manage/stock_manage_detail/children/StockManageDetailTable";
import StockDrugDetailInfo
  from "@/views/drug_manage/stock_manage/stock_manage_detail/children/StockDrugDetailInfo";

//导入根据药品id查询出入库和药品信息
import {getDrugInfoById} from "@/api/drug_manage/drugManage";

export default {
  name: "StockManageDetail",
  components: {
    StockManageDetailTable,
    StockManageDetailTitle,
    StockDrugDetailInfo
  },
  data() {
    return {
      stockManageDetailTableData: [
        {
          id: '1',
          stockId: 'SP5643215',
          operationDate: '1996-12-30 12:20:20',
          type: '处方',
          count: '-2盒',
          batchNumber: '3132156',
          buyMoney: '2512021.54',
          saleMoney: '2151.23'
        }
      ]
    }
  },
  methods:{
    toGetOneInfo(id){
      getDrugInfoById(id).then(res =>{
        this.stockManageDetailTableData=res.data.list
        for (let i=0;i<res.data.list.length;i++){
          this.$set(this.stockManageDetailTableData[i],'id',i+1)
        }
      })
    }
  },
  created() {
    console.log(this.$route.params.id)
    this.toGetOneInfo(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>