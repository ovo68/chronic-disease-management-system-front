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
      <el-table-column prop="templateNum" label="模板编号"/>
      <el-table-column prop="templateName" label="模板名称"/>
      <el-table-column prop="prescriptionType" label="处方类型"/>
      <el-table-column prop="diagnosis" label="诊断"/>
      <el-table-column prop="templatePermission" label="模板权限"/>
      <el-table-column prop="createTime" label="创建时间"/>
      <el-table-column prop="creator" label="创建人员"/>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-link type="primary" class="margin-right">编辑</el-link>
          <el-link type="primary">删除</el-link>
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
  name: "SnTableTemplateWithPage",
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