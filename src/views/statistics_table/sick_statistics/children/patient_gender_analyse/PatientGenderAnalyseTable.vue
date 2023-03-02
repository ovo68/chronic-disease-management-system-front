<template>
  <div >
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
        :border="true"
    >
      <el-table-column
          prop="id"
          label="序号"
          width="80">
      </el-table-column>
      <el-table-column
          prop="man"
          label="男">
      </el-table-column>
      <el-table-column
          prop="woman"
          label="女">
      </el-table-column>
      <el-table-column
          prop="unknown"
          label="未知">
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
  name: "PatientGenderAnalyseTable",
  data(){
    return {
      tableData: [{
        id: 1,
        man:120,
        woman:220,
        unknown:20,
        sum:200
      }]
    }
  }
}
</script>

<style scoped>

</style>