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
      <el-table-column prop="orderId" label="订单类型"/>
      <el-table-column prop="orderType" label="项目类型"/>
      <el-table-column prop="projectNum" label="项目编码"/>
      <el-table-column prop="projectName" label="项目名称"/>
      <el-table-column prop="ticketType" label="发票类型"/>
      <el-table-column prop="num" label="数量"/>
      <el-table-column prop="costUnitPrice" label="成本单价（元）"/>
      <el-table-column prop="retailUnitPrice" label="零售单价（元）"/>
      <el-table-column prop="costTotalPrice" label="成本总价（元）"/>
      <el-table-column prop="retailTotalPrice" label="零售总价（元）"/>
      <el-table-column prop="profit" label="利润（元）"/>
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
  name: "CheckItemStaticsTable",
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