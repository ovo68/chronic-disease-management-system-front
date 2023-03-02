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
      <el-table-column prop="orderId" label="入库单号"/>
      <el-table-column prop="drugId" label="药品编码"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="manufacturer" label="生产厂商"/>
      <el-table-column prop="storageType" label="入库类型"/>
      <el-table-column prop="blockNumber" label="批号"/>
      <el-table-column prop="repertory" label="库存"/>
      <el-table-column prop="purchasePrice" label="采购价(元)"/>
      <el-table-column prop="oldRetailPrice" label="原零售价(元)"/>
      <el-table-column prop="nowRetailPrice" label="现零售价(元)"/>
      <el-table-column prop="spreadPrice" label="差价(元)"/>
      <el-table-column prop="proportion" label="比例"/>
      <el-table-column prop="operationDate" label="操作日期"/>
      <el-table-column prop="operationPerson" label="操作人员"/>


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
  name: "AdjustPriceStatisticsTable",
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