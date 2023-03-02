<template>
  <div>
    <el-table
        :data="tableData"
        :span-method="arraySpanMethod"
        border
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}"
        style="width: 100%"
    >
      <el-table-column
          prop="id"
          label="序号"
          width="80">
      </el-table-column>
      <el-table-column
          prop="initialDiagnosis"
          label="初诊">
      </el-table-column>
      <el-table-column
          prop="subsequentVisit"
          label="复诊">
      </el-table-column>
      <el-table-column
          prop="sum"
          label="合计">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "SeeDoctorAnalyseTable",
  data(){
    return{
      tableData:[
        {
          id:1,
          initialDiagnosis:100,
          subsequentVisit:200,
          sum:300
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>