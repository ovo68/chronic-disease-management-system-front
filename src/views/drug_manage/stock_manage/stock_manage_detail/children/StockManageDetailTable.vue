<template>
  <div>
    <sn-text
        text="库存明细"
        :move-down="10"
        :font-size="20"
        slot="one-col"
        class="stock-detail"
        font-color="#666EE8"
        font-weight="bold"/>

    <el-table
        :data="pageData"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="number" label="单号"/>
      <el-table-column prop="createTime" label="操作时间"/>
      <el-table-column prop="type" label="类别"/>
      <el-table-column prop="num" label="数量"/>
      <el-table-column prop="batchNumber" label="批号"/>
      <el-table-column prop="purchaseSum" label="采购金额(元)"/>
      <el-table-column prop="saleSum" label="零售金额(元)"/>
    </el-table>
    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>

export default {
  name: "StockManageDetailTable",
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
.stock-detail {
  margin-bottom: 35px;
}
</style>