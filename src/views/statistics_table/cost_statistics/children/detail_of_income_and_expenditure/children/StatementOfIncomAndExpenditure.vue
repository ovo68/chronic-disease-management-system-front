<template>
  <div class="margin-top">
    <el-table
        :data="pageData"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#C2C5F6'
              }"
        :cell-style="{'text-align':'center'}">

      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="ordertatus" label="订单状态"/>
      <el-table-column prop="orderType" label="订单类型"/>
      <el-table-column prop="orderId" label="订单编号"/>
      <el-table-column prop="name" label="姓名"/>
      <el-table-column prop="desk" label="科室"/>
      <el-table-column prop="doctors" label="接诊医生"/>
      <el-table-column prop="echoChargeack" label="应收/退(元)"/>
      <el-table-column prop="discounts" label="优惠(元)"/>
      <el-table-column prop="trueChargeack" label="实收/退(元)"/>
      <el-table-column prop="medicare" label="医保"/>
      <el-table-column prop="clubCard" label="会员卡"/>
      <el-table-column prop="cash" label="现金"/>
      <el-table-column prop="Alipay" label="支付宝"/>
      <el-table-column prop="weChat" label="微信"/>
      <el-table-column prop="bankCard" label="银行卡"/>
      <el-table-column prop="chargeDate" label="收费日期"/>
      <el-table-column prop="tollCollector" label="收费员"/>
      <el-table-column prop="operation" label="操作">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   @click="toView"
                   class="margin-right">查看详情
          </el-link>
        </template>
      </el-table-column>
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
  name: "StatementOfIncomAndExpenditure",
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
    toView() {
      this.$router.push("/home/statisticsTable/viewDetails/16")
    }
  },
}
</script>

<style scoped>
</style>