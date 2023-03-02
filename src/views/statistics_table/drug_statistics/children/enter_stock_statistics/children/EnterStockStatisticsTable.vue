<template>
  <div class="margin-top">
    <el-table
        :data="pageData"

        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}"
    >
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="orderId" label="单号"/>
      <el-table-column prop="drugId" label="药品编码"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="manufacturer" label="生产厂商"/>
      <el-table-column prop="storageType" label="入库类型"/>
      <el-table-column prop="blockNumber" label="批号"/>
      <el-table-column prop="supplier" label="供应商"/>
      <el-table-column prop="purchasePrice" label="采购价(元)"/>
      <el-table-column prop="number" label="数量"/>
      <el-table-column prop="purchaseCase" label="采购成本(元)"/>
      <el-table-column prop="warehousePersonnel" label="入库人员"/>
      <el-table-column prop="warehouseDate" label="入库日期" width="100px"/>
      <el-table-column prop="auditor" label="审核人员"/>
      <el-table-column prop="checkDate" label="审核日期" width="100px"/>

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
  name: "EnterStockStatisticsTable",
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
</style>