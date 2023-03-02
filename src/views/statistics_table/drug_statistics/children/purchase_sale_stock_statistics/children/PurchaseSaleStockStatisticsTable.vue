<template>
  <div class="margin-top">
    <el-table
        :data="pageData"
        :span-method="arraySpanMethod"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="drugId" label="药品编码"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="manufacturer" label="生产厂商"/>
      <el-table-column prop="blockNumber" label="批号"/>
      <el-table-column label="期初库存" prop="beginMouth">
        <el-table-column prop="beginMouth.price" label="采购价" width="50"/>
        <el-table-column prop="beginMouth.number" label="数量" width="50"/>
        <el-table-column prop="beginMouth.purchasePrice" label="采购金额" width="50"/>
      </el-table-column>
      <el-table-column label="库存增加" prop="increaseStock">
        <el-table-column prop="increaseStock.price" label="采购价" width="50"/>
        <el-table-column prop="increaseStock.number" label="数量" width="50"/>
        <el-table-column prop="increaseStock.purchasePrice" label="采购金额" width="50"/>
      </el-table-column>
      <el-table-column label="库存减少" prop="ReduceStock">
        <el-table-column prop="ReduceStock.price" label="采购价" width="50"/>
        <el-table-column prop="ReduceStock.number" label="数量" width="50"/>
        <el-table-column prop="ReduceStock.purchasePrice" label="采购金额" width="50"/>
      </el-table-column>
      <el-table-column label="期末库存" prop="endMouth">
        <el-table-column prop="endMouth.price" label="采购价" width="50"/>
        <el-table-column prop="endMouth.number" label="数量" width="50"/>
        <el-table-column prop="endMouth.purchasePrice" label="采购金额" width="50"/>
      </el-table-column>

    </el-table>

    <sn-page
        :table-data="tableData"
        slot="two-col"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>

export default {
  name: "PurchaseSaleStockStatisticsTable",
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
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex  === 0) {
        if (columnIndex === 0) {
          return [1,6];
        } else if(columnIndex === 1){
          return [1,3]
        }else if(columnIndex === 2){
          return [1,3]
        }else if(columnIndex === 3){
          return [1,3]
        }else if(columnIndex === 4){
          return [1,3]
        }
      }
    },
  },
}
</script>

<style scoped>
</style>