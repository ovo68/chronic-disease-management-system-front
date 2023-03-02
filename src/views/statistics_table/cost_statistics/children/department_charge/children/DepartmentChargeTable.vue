<template>
  <div class="margin-top">
    <el-table
        :border="true"
        :span-method="arraySpanMethod"
        :data="pageData"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#C2C5F6'
              }"
        :cell-style="{'text-align':'center'}">

      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="desk" label="科室"/>
      <el-table-column prop="clinicalReceptionNumber" label="接诊人数"/>
      <el-table-column prop="trueMoney" label="实收金额"/>
      <el-table-column prop="medicare" label="医保"/>
      <el-table-column prop="clubCard" label="会员卡"/>
      <el-table-column prop="cash" label="现金"/>
      <el-table-column prop="Alipay" label="支付宝"/>
      <el-table-column prop="weChat" label="微信"/>
      <el-table-column prop="bankCard" label="银行卡"/>
      <!--      <el-table-column label="operation" width="120">-->
      <!--        <template slot-scope="scope">-->
      <!--        </template>-->
      <!--      </el-table-column>-->
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
  name: "DepartmentChargeTable",
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
    //合并表格
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
  },

}
</script>

<style scoped>
</style>
