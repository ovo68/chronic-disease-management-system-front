<!-- 出库管理-->
<template>
  <sn-card-with-title>
    <out-stock-info-title slot="title"/>
    <div slot="content">
      <out-stock-info-find-bar
          @selectChange="getOutValue"
          @typeChange="getTypeValue"
          @inputChange="getInputValue"
          input-placeholder="输入出库单号"/>
      <out-stock-info-table :table-data="outStockInfoTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import OutStockInfoFindBar
  from "@/views/drug_manage/out_stock_manage/out_stock_info/children/OutStockInfoFindBar";
import OutStockInfoTable
  from "@/views/drug_manage/out_stock_manage/out_stock_info/children/OutStockInfoTable";
import
  OutStockInfoTitle from "@/views/drug_manage/out_stock_manage/out_stock_info/children/OutStockInfoTitle";

//导入出库所有信息方法
import {getAllOut} from "@/api/drug_manage/drugManage";
//导入出库根据审核类型查信息方法
import {getOutByCheck} from "@/api/drug_manage/drugManage";
//导入出库根据出库类型查信息
import {getOutByType} from "@/api/drug_manage/drugManage";
//导入根据输入框模糊查询出库信息
import {getOutByLike} from "@/api/drug_manage/drugManage";


export default {
  name: "OutStockManage",
  components: {
    OutStockInfoTable,
    OutStockInfoFindBar,
    OutStockInfoTitle
  },
  data() {
    return {
      outStockInfoTableData: []
    }
  },
  methods:{
    toGetAllOutinfo(){
      getAllOut().then(res => {
        this.outStockInfoTableData=res.data;
        for (let i=0;i<res.data.length;i++){
          this.$set(this.outStockInfoTableData[i],'ids',i+1)
        }
      })
    },
    getOutValue(value){
      if(value.value ===0){
        this.toGetAllOutinfo()
      }else{
        getOutByCheck(value.value).then(res => {
          this.outStockInfoTableData=res.data;
          for (let i=0;i<res.data.length;i++){
            this.$set(this.outStockInfoTableData[i],'ids',i+1)
          }
        })
      }
    },
    getTypeValue(value){
      if(value.value ===0){
        this.toGetAllOutinfo()
      }else{
       getOutByType(value.value).then(res => {
         this.outStockInfoTableData=res.data;
         for (let i=0;i<res.data.length;i++){
           this.$set(this.outStockInfoTableData[i],'ids',i+1)
         }
       })
      }
    },
    getInputValue(dsc){
      console.log(dsc)
      if(dsc === null || dsc === ''){
        this.toGetAllOutinfo()
      }else {
        getOutByLike(dsc).then(res => {
          this.outStockInfoTableData=res.data;
          for (let i=0;i<res.data.length;i++){
            this.$set(this.outStockInfoTableData[i],'ids',i+1)
          }
        })
      }
    }
  },
  created() {
    this.toGetAllOutinfo()
  }
}
</script>

<style scoped>

</style>