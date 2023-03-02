<!--中药处方-->
<template>
  <div class="margin-top">
    <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#C2C5F6'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="chargeName" label="收费名称"/>
      <el-table-column prop="unitPrice" label="单价(元)"/>
      <el-table-column prop="gross" label="总量"/>
      <el-table-column prop="unit" label="单位"/>
      <el-table-column prop="retailAmount" label="零售金额(元)"/>
      <el-table-column prop="discount" label="折扣"/>
      <el-table-column prop="discountedAmount" label="折后金额(元)"/>
      <!--      <el-table-column label="操作" width="120">-->
      <!--        <template slot-scope="scope">-->
      <!--        </template>-->
      <!--      </el-table-column>-->
    </el-table>
    <br>
    <sn-text text="处理费: 15.00元" :move-right="770"></sn-text>
    <sn-text text=" 注射费: 20.00元" :move-right="890" :move-down="-18"></sn-text>
    <br>
    <sn-text text="合计: 103.50" :font-size="18" :move-right="890" :move-down="-18"></sn-text>
  </div>
</template>

<script>

export default {
  name: "PrescriptionsOfTraditionalChineseMedicine",
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
