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
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="orderId" label="订单单号"/>
      <el-table-column prop="orderType" label="订单类型"/>
      <el-table-column prop="drugId" label="药品编码"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="manufacturer" label="生产厂商"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="number" label="数量"/>
      <el-table-column prop="purchasePrice" label="采购单价(元)"/>
      <el-table-column prop="retailPrice" label="零售单价(元)"/>
      <el-table-column prop="purchaseTotalPrice" label="采购总价(元)"/>
      <el-table-column prop="retailTotalPrice" label="零售总价(元)"/>
      <el-table-column prop="profit" label="利润"/>
      <el-table-column prop="orderDate" label="订单日期"/>

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