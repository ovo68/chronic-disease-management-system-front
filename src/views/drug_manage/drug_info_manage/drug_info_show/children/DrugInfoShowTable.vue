<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="ids" label="序号"></el-table-column>
      <el-table-column prop="number" label="药品编码"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="prescriptionType.description" label="处方类别"/>
      <el-table-column prop="purchasePrice" label="采购价"/>
      <el-table-column prop="salePrice" label="售药价"/>
      <el-table-column prop="factory.name" label="生成厂家"/>
      <el-table-column prop="status.description" label="状态"/>
      <el-table-column prop="createTime" label="创建时间" width="100"/>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   @click="editDrugInfo(scope.row.prescriptionType.value)"
                   class="margin-right">编辑
          </el-link>


        </template>
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
  name: "StockManageTable",
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
    copyDrugInfo() {
      this.$router.push('/drugManageRoot/newAddDrug')
    },
    editDrugInfo(value) {
      this.$router.push("/drugManageRoot/newAddDrug/"+value)
    },
    stopUse() {

    }
  },

}
</script>

<style scoped>
.buy-info {
  margin-top: 27px;
}
</style>