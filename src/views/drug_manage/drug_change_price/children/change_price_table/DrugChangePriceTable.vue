<template>
  <div>
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="ids" label="序号"></el-table-column>
      <el-table-column prop="number" label="药品编码" width="110px"/>
      <el-table-column prop="name" label="药品名称"/>
      <el-table-column prop="prescriptionType.description" label="处方类别"/>
      <el-table-column prop="specification" label="规格"/>
      <el-table-column prop="drugForm.form" label="剂型"/>
      <el-table-column prop="factory.name" label="生产厂家"/>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   @click="changePrice(scope.row.id)"
                   class="margin-right">调价
          </el-link>
        </template>
      </el-table-column>
    </el-table>
    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
export default {
  name: "DrugChangePriceTable",
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
    changePrice(id) {
      this.$router.push('/drugManageRoot/newAddChangePrice/' + id)
    }
  },

}
</script>

<style scoped>
</style>