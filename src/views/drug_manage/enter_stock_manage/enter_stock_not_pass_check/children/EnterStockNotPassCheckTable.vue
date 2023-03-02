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
      <el-table-column prop="drugId" label="药品编码"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="manufacturer" label="生产厂家"/>
      <el-table-column prop="count" label="数量"/>
      <el-table-column prop="unit" label="单位"/>
      <el-table-column prop="buyPrice" label="采购价(元)"/>
      <el-table-column prop="salePrice" label="零售价(元)"/>
      <el-table-column prop="batchNumber" label="批号"/>
      <el-table-column prop="drugValidity" label="药品有效期"/>
      <el-table-column prop="totalBuyPrice" label="采购总金额(元)"/>
      <el-table-column prop="totalSalePrice" label="零售总金额(元)"/>
    </el-table>

    <sn-row-has-two-col :left="12" :right="12">
      <div slot="one-col" class="to-flex buy-info">
        <sn-text text="采购金额合计 :" class="margin-right" :move-down="2"/>
        <sn-text text="6454812.12" :font-size="20" font-color="pink" class="margin-right"/>
        <sn-text text="元" class="margin-right-20" :move-down="3"/>

        <sn-text text="零售金额合计 :" class="margin-right" :move-down="2.5"/>
        <sn-text text="52216546.12" :font-size="20" font-color="pink" class="margin-right"/>
        <sn-text text="元" :move-down="3.5"/>
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
  name: "EnterStockNotPassCheckTable",
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