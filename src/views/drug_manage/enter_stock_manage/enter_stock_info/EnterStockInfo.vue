<!-- 入库管理-->
<template>
  <sn-card-with-title>
    <enter-stock-info-title slot="title"/>
    <div slot="content">
      <enter-stock-info-find-bar input-placeholder="输入入库单号"
      @selectChange="getSelectValue"
      @selectTypeValue="getTypeValue"
      @getInputValue="getInputValue"/>
      <enter-stock-info-table :table-data="enterStockInfoTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import EnterStockInfoFindBar
  from "@/views/drug_manage/enter_stock_manage/enter_stock_info/children/EnterStockInfoFindBar";
import EnterStockInfoTable
  from "@/views/drug_manage/enter_stock_manage/enter_stock_info/children/EnterStockInfoTable";
import EnterStockInfoTitle
  from "@/views/drug_manage/enter_stock_manage/enter_stock_info/children/EnterStockInfoTitle";

import {getStockAll} from "@/api/drug_manage/drugManage";

import {getStockByCheck} from "@/api/drug_manage/drugManage";
import {getStockByType} from "@/api/drug_manage/drugManage";
import {getStockBylike} from "@/api/drug_manage/drugManage";

export default {
  name: "EnterStockInfo",
  components: {
    EnterStockInfoFindBar,
    EnterStockInfoTable,
    EnterStockInfoTitle
  },
  data() {
    return {
      enterStockInfoTableData:[]
    }
  },
  methods:{
  toGetStockAll(){
    getStockAll().then(res => {
      this.enterStockInfoTableData=res.data;
      for (let i=0;i<res.data.length;i++){
        this.$set(this.enterStockInfoTableData[i],'ids',i+1)
      }
    })
  },
    //根据审核状态查入库
    getSelectValue(value){
    if(value.value === 3){
      this.toGetStockAll()
    }else{
      getStockByCheck(value.value).then(res => {
        this.enterStockInfoTableData=res.data;
        for (let i=0;i<res.data.length;i++){
          this.$set(this.enterStockInfoTableData[i],'ids',i+1)
        }
      })
    }
    },
    //根据入库类型查入库
    getTypeValue(value){
    if(value.value === 0){
      this.toGetStockAll()
    }else{
      getStockByType(value.value).then(res => {
        this.enterStockInfoTableData=res.data;
        for (let i=0;i<res.data.length;i++){
          this.$set(this.enterStockInfoTableData[i],'ids',i+1)
        }
      })
    }
    },
    getInputValue(value){
    if(value===null || value===''){
      this.toGetStockAll()
    }else {
      getStockBylike(value).then(res => {
        this.enterStockInfoTableData=res.data;
        for (let i=0;i<res.data.length;i++){
          this.$set(this.enterStockInfoTableData[i],'ids',i+1)
        }
      })
    }
    }
  },
  created() {
    this.toGetStockAll()
  }
}
</script>

<style scoped>

</style>