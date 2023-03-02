<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ecf5ff'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="ids" label="序号"></el-table-column>
      <el-table-column prop="number" label="药品编码"/>
      <el-table-column prop="location" label="货位号"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="prescriptionType.description" label="处方类别"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="drugForm.form" label="剂型"/>
      <el-table-column prop="factory.name" label="生产厂家"/>

      <el-table-column prop="stock" label="库存" width="150">
        <template slot-scope="scope">
          <sn-text :text="scope.row.stock" font-color="pink"/>
        </template>
      </el-table-column>

      <el-table-column prop="purchasePrice" label="采购金额(元)"/>
      <el-table-column prop="salePrice" label="零售金额(元)"/>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   @click="lookDetail(scope.row.id)"
                   class="margin-right">查看明细
          </el-link>
        </template>
      </el-table-column>
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
  name: "StockManageConditionTable",
  components: {},
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
    lookDetail(id) {
      console.log(id)
      this.$router.push('/drugManageRoot/stockManageDetail/'+id)
    }
  },

}
</script>

<style scoped>
.buy-info{
  margin-top: 27px;
}
</style>