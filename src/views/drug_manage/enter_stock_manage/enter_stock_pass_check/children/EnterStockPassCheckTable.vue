<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="drug.number" label="药品编码"/>
      <el-table-column prop="drug.name" label="药品名称"/>
      <el-table-column prop="drug.factory.name" label="生产厂家"/>
      <el-table-column prop="num" label="数量"/>
      <el-table-column prop="drug.packUnit.name" label="单位"/>
      <el-table-column prop="drug.purchasePrice" label="采购价(元)"/>
      <el-table-column prop="drug.salePrice" label="零售价(元)"/>
      <el-table-column prop="stock.batchNumber" label="批号"/>
      <el-table-column prop="drug.validityInform" label="药品有效期"/>
      <el-table-column prop="stock.purchaseSum" label="采购总金额(元)"/>
      <el-table-column prop="stock.saleSum" label="零售总金额(元)"/>
    </el-table>

    <sn-row-has-two-col :left="12" :right="12">
      <div slot="one-col" class="to-flex buy-info">

      </div>
      <sn-page
          :table-data="tableData"
          slot="two-col"
          class="float-right margin-top-20 margin-bottom-20"
          @getPageData="getPageData"/>
    </sn-row-has-two-col>
  </div>
</template>

<script>
export default {
  name: "EnterStockPassCheckTable",
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
    toOutStockPassCheck() {
      this.$router.push('/home/outStockPassCheck/10')
    },
    toOutStockNotPassCheck() {

    }
  },

}
</script>

<style scoped>
.buy-info {
  margin-top: 27px;
}
</style>