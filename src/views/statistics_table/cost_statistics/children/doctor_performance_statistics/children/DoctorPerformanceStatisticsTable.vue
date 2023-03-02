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
      <el-table-column prop="doctor" label="医生"/>
      <el-table-column prop="receivableMoney" label="应收金额(元)"/>
      <el-table-column prop="discountsMoney" label="优惠金额(元)"/>
      <el-table-column prop="trueMoney" label="实收金额(元)"/>
      <el-table-column prop="clinicalReceptionNumber" label="接诊人数"/>
      <el-table-column prop="firstVisitNumber" label="初诊人数"/>
      <el-table-column prop="ReturnTheNumber" label="复诊人数"/>
      <el-table-column prop="TheCostOfMedicine" label="西/成药费(元)"/>
      <el-table-column prop="ZhongYaoFei" label="中药费(元)"/>
      <el-table-column prop="inspectionItem" label="检查项目(元)"/>
      <el-table-column prop="registrationFee" label="挂号费(元)"/>
      <el-table-column prop="consultationFee" label="诊疗费(元)"/>
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
  name: "DoctorPerformanceStatisticsTable",
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
  }

}
</script>

<style scoped>
</style>
