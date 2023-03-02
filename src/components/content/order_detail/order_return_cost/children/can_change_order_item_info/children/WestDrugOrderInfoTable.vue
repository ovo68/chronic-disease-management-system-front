<template>
  <div class="margin-top">
    <el-table
        :data="tableData"
        height="300"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">

      <el-table-column type="selection" width="55"/>

      <el-table-column prop="id" label="序号" width="55"/>
      <el-table-column prop="name" label="收费名称"/>
      <el-table-column prop="price" label="单价(元)"/>
      <el-table-column prop="count" label="数量"/>
      <el-table-column prop="unit" label="单位"/>
      <el-table-column prop="saleMoney" label="零售金额(元)"/>
      <el-table-column prop="discount" label="折扣"/>
      <el-table-column prop="discountMoney" label="折后金额(元)"/>
      <el-table-column prop="canReturnCount" label="可退数量"/>
      <el-table-column prop="hasReturnCount" label="已退数量"/>

      <el-table-column prop="returnCount" label="选择退费数量">
        <template slot-scope="scope">
          <sn-input/>
        </template>
      </el-table-column>

      <el-table-column prop="returnMoney" label="退款金额">
        <template slot-scope="scope">
          <sn-input/>
        </template>
      </el-table-column>
    </el-table>

    <div class="text-right">
      <el-checkbox v-model="handleCost">
        <sn-text text="处理费 : 15.00 元"/>
        <sn-input/>
      </el-checkbox>
    </div>
  </div>
</template>

<script>

export default {
  name: "WestDrugOrderInfoTable",
  data() {
    return {
      handleCost: true
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
}
</script>

<style scoped>
</style>