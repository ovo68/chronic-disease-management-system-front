<template>
  <div class="margin-top">
    <el-table
        :border="true"
        :data="pageData"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#C2C5F6'
              }"
        :cell-style="{'text-align':'center'}">

      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="dealType" label="交易类型"/>
      <el-table-column prop="cardNumber" label="卡号"/>
      <el-table-column prop="memberName" label="会员姓名"/>
      <el-table-column prop="dealMoney" label="交易金额(元)"/>
      <el-table-column prop="giveMoney" label="赠送金额(元)"/>
      <el-table-column prop="numberMoney" label="合计金额(元)"/>
      <el-table-column prop="balance" label="余额(元)"/>
      <el-table-column prop="dealWay" label="交易方式"/>
      <el-table-column prop="dealTime" label="交易时间"/>
      <el-table-column prop="operator" label="操作员"/>
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
  name: "TheStoredValueSubsidiaryTable",
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
    }
  }

}
</script>

<style scoped>
</style>
