<!-- 药品调价-->
<template>
  <sn-card-with-title>
    <drug-change-price-title
        @drugChangePrice="showChangePriceTable"
        @drugChangePriceRecord="showChangePriceRecordTable"
        slot="title"/>
    <div slot="content">
      <drug-change-price-find-info-bar
          @getValue="getSelectValue"
          @getInputValue="getInputValue"/>
      <!-- 药品调价表格 -->
      <drug-change-price-table
          v-if="!showChangePriceRecord"
          :table-data="drugPriceChangeTableData"/>
      <!-- 药品调价记录表格 -->
      <drug-change-price-record-table
          v-else
          :table-data="drugPriceChangeRecordTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import DrugChangePriceFindInfoBar
  from "@/views/drug_manage/drug_change_price/children/DrugChangePriceFindInfoBar";
import DrugChangePriceTable
  from "@/views/drug_manage/drug_change_price/children/change_price_table/DrugChangePriceTable";
import DrugChangePriceTitle from "@/views/drug_manage/drug_change_price/children/DrugChangePriceTitle";
import DrugChangePriceRecordTable
  from "@/views/drug_manage/drug_change_price/children/change_price_table/DrugChangePriceRecordTable";


//导入所有调价首页信息方法
import {getAllDrug} from "@/api/drug_manage/drugManage";

import {getTypeDrug} from "@/api/drug_manage/drugManage";

import {getLikeDrug} from "@/api/drug_manage/drugManage";

export default {
  name: "DrugChangePriceRecord",
  data() {
    return {
      drugPriceChangeTableData:[] ,
      drugPriceChangeRecordTableData:[] ,
      showChangePriceRecord: false
    }
  },
  components: {
    DrugChangePriceFindInfoBar,
    DrugChangePriceTable,
    DrugChangePriceTitle,
    DrugChangePriceRecordTable
  },
  methods: {
    showChangePriceTable() {
      this.showChangePriceRecord = false
    },
    showChangePriceRecordTable() {
      getAllDrug().then(res => {
        this.drugPriceChangeRecordTableData = res.data;
        for (let i=0;i<res.data.length;i++){
          this.$set(this.drugPriceChangeRecordTableData[i],'ids',i+1)
        }

      })
      this.showChangePriceRecord = true
    },
    //获取所有药品
    getAllDrug(){
        if(!this.showChangePriceRecord){
          getAllDrug().then(res => {
          this.drugPriceChangeTableData=res.data;
            for (let i=0;i<res.data.length;i++){
              this.$set(this.drugPriceChangeTableData[i],'ids',i+1)
            }
          })
        }else {
          getAllDrug().then(res => {
            this.drugPriceChangeRecordTableData = res.data;
            for (let i=0;i<res.data.length;i++){
              this.$set(this.drugPriceChangeRecordTableData[i],'ids',i+1)
            }

          })
        }
    },
    //获取对应类型的药品
    getSelectValue(value){
      if(value.value === 2){
        this.getAllDrug();
      }else{
        getTypeDrug(value.value).then(res => {
          if(!this.showChangePriceRecord){
            this.drugPriceChangeTableData=res.data;
            for (let i=0;i<res.data.length;i++){
              this.$set(this.drugPriceChangeTableData[i],'ids',i+1)
            }
          }else{
            this.drugPriceChangeRecordTableData=res.data;
            for (let i=0;i<res.data.length;i++){
              this.$set(this.drugPriceChangeRecordTableData[i],'ids',i+1)
            }
          }
        })
      }
    },
    //模糊查询
    getInputValue(inputValue){
      if(inputValue===null || inputValue===''){
        this.getAllDrug()
      }else{
        getLikeDrug(inputValue).then(res => {
          if(!this.showChangePriceRecord){
            this.drugPriceChangeTableData=res.data;
            for (let i=0;i<res.data.length;i++){
              this.$set(this.drugPriceChangeTableData[i],'ids',i+1)
            }
          }else{
            this.drugPriceChangeRecordTableData=res.data;
            for (let i=0;i<res.data.length;i++){
              this.$set(this.drugPriceChangeRecordTableData[i],'ids',i+1)
            }
          }
        })
      }
    }
  },
  created() {

    this.getAllDrug()
  }
}
</script>

<style scoped>

</style>