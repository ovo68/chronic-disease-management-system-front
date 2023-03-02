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
      <el-table-column prop="cardId" label="就诊时间"/>
      <el-table-column prop="vipType" label="患者编号"/>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="gender" label="性别"/>
      <el-table-column prop="age" label="年龄"/>
      <el-table-column prop="telephone" label="手机号码"/>
      <el-table-column prop="outpatienttype" label="门诊类型"/>
      <el-table-column prop="diagnose" label="诊断"/>
      <el-table-column prop="department" label="科室"/>
      <el-table-column prop="doctor" label="接诊医生"/>
      <el-table-column prop="status" label="收费状态"/>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
       aaa
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
  name: "OutpatientAnalyseTable",
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
        return {}
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