<template>
  <div class="margin-top">

    <stock-check-worker-info/>

    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="drugId" label="药品编码"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="locationId" label="货位号"/>
      <el-table-column prop="prescriptionType" label="处方类别"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="manufacturer" label="生产厂家"/>
      <el-table-column prop="nowStock" label="当前库存"/>
      <el-table-column prop="checkStock" label="盘点库存"/>

      <el-table-column prop="stockAddOrReduce" label="库存增减">
        <template slot-scope="scope">
          <sn-text :text="scope.row.stockAddOrReduce" font-color="pink"/>
        </template>
      </el-table-column>


      <el-table-column prop="remark" label="备注" width="150"/>
    </el-table>
    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
import StockCheckWorkerInfo from "@/views/drug_manage/stock_check/children/StockCheckWorkerInfo";

export default {
  name: "FinishCheckTable",
  components: {
    StockCheckWorkerInfo
  },
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
  },

}
</script>

<style scoped>
.check-info {
  background-color: #EEEFFB;
  line-height: 60px;
}
</style>