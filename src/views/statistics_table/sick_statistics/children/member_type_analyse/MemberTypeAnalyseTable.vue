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
          prop="common"
          label="普通会员">
      </el-table-column>
      <el-table-column
          prop="primary"
          label="初级会员">
      </el-table-column>
      <el-table-column
          prop="advanced"
          label="高级会员">
      </el-table-column>
      <el-table-column
          prop="silver"
          label="白银会员">
      </el-table-column>
      <el-table-column
          prop="gold"
          label="黄金会员">
      </el-table-column>
      <el-table-column
          prop="diamond"
          label="钻石会员">
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
  name: "MemberTypeAnalyseTable",
  data(){
    return {
      tableData: [
        {
          id: 1,
          common: 20,
          primary: 20,
          advanced: 20,
          silver: 20,
          gold: 20,
          diamond: 20,
          sum: 60
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>