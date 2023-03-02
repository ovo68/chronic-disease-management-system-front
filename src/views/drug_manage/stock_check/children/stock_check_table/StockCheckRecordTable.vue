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
      <el-table-column prop="number" label="盘点单号"/>
      <el-table-column prop="createTime" label="盘点日期"/>
      <el-table-column prop="employee.name" label="制单人"/>
      <el-table-column prop="checksheetStatus.description" label="盘点状态"/>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.checksheetStatus.description=== '盘点完成'"
                   @click="lookCheckDetailOnFinish(scope.row.id)"
                   class="margin-right">查看
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.checksheetStatus.description=== '正在盘点'"
                   @click="lookCheckDetailOnCurrent(scope.row.id)"
                   class="margin-right">查看
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.checksheetStatus.description=== '正在盘点'"
                   @click="deleteCheck"
                   class="margin-right">删除
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
    deleteCheck() {

    },
    //查看盘点完成的信息
    lookCheckDetailOnFinish() {

      this.$router.push("/drugManageRoot/stockCheckFinish")
    },
    //查看正在盘点的信息
    lookCheckDetailOnCurrent(id) {
      this.$router.push("/drugManageRoot/stockCheckCurrent/" + id)
    }
  },

}
</script>

<style scoped>
</style>