<!-- 库存管理-->
<template>
  <sn-card-with-title>
    <stock-manage-condition-title slot="title"/>
    <div slot="content">
      <stock-manage-condition-find-bar
          @searchValue="getsearchValue"
          @selectType="getSeclectTypeValue"
          input-placeholder="输入药品名称/编码"/>
      <stock-manage-condition-table :table-data="stockManageTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import StockManageConditionFindBar
  from "@/views/drug_manage/stock_manage/stock_manage_condition/children/StockManageConditionFindBar";
import StockManageConditionTable
  from "@/views/drug_manage/stock_manage/stock_manage_condition/children/StockManageConditionTable";
import StockManageConditionTitle
  from "@/views/drug_manage/stock_manage/stock_manage_condition/children/StockManageConditionTitle";

//导入查询仓库中所有药品信息
import {getStockControlinfo} from "@/api/drug_manage/drugManage";
//导入根据药品的处方类型查药品
import {getStockControlByType} from "@/api/drug_manage/drugManage";
//导入模糊查询的方法
import {getStockControlByLike} from "@/api/drug_manage/drugManage";

export default {
  name: "StockManageCondition",
  components: {
    StockManageConditionFindBar,
    StockManageConditionTable,
    StockManageConditionTitle,

  },
  data() {
    return {
      stockManageTableData: []
    }
  },
  methods: {
    toGetStockControlinfo(){
      getStockControlinfo().then(res => {
        this.stockManageTableData=res.data;
        for (let i=0;i<res.data.length;i++){
          this.$set(this.stockManageTableData[i],'ids',i+1)
        }
      })
    },
    getSeclectTypeValue(value){
      console.log(value)
      if(value.value ===2){
        this.toGetStockControlinfo()
      }else{
        getStockControlByType(value.value).then(res => {
          this.stockManageTableData=res.data;
          for (let i=0;i<res.data.length;i++){
            this.$set(this.stockManageTableData[i],'ids',i+1)
          }
        })
      }
    },
    getsearchValue(value){
      if(value===null || value===''){
        this.toGetStockControlinfo()
      }
      getStockControlByLike(value).then(res => {
        this.stockManageTableData=res.data;
        for (let i=0;i<res.data.length;i++){
          this.$set(this.stockManageTableData[i],'ids',i+1)
        }
      })
    }
  },
  created() {
    this.toGetStockControlinfo()
  }
}
</script>

<style scoped>

</style>