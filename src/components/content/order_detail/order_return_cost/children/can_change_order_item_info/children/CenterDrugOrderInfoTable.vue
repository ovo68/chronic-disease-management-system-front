<template>
  <div class="margin-top">
    <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="cardId" label="卡号"/>
      <el-table-column prop="vipType" label="会员类型"/>


      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: "CenterDrugOrderInfoTable",
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
}
</script>

<style scoped>
</style>