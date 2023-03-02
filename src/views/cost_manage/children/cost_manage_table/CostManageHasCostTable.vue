<template>
  <div>
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="55"/>
      <el-table-column prop="number" label="订单编号" width="110px"/>
      <el-table-column prop="orderType.description" label="订单类型"/>
      <el-table-column prop="sick.name" label="患者姓名"/>
      <el-table-column prop="sick.gender.description" label="性别" width="55"/>
      <el-table-column prop="sick.age" label="年龄" width="55"/>
      <el-table-column prop="sick.phoneNumber" label="手机号码" width="110px"/>
      <el-table-column prop="doctor.department.name" label="科室"/>
      <el-table-column prop="doctor.name" label="接诊医生"/>
      <el-table-column prop="createTime" label="创建时间" width="100px"/>

      <el-table-column
          width="80"
          prop="receivable"
          label="应收金额(元)">
      </el-table-column>

      <el-table-column
          width="80"
          prop="income"
          label="实收金额(元)"/>

      <el-table-column
          prop="payWay.name"
          label="支付方式"/>

      <el-table-column prop="costStatus" label="收费状态">
        <template slot-scope="scope">
            <span class="status">
              {{ scope.row.orderPayStatus.description }}
            </span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="130">
        <template slot-scope="scope">
          <el-link type="primary"
                   @click="toLook(scope.row.number)"
                   :underline="false"
                   class="margin-right">查看
          </el-link>
          <el-link type="primary"
                   @click="toReturnMoney"
                   :underline="false"
                   class="margin-right">退费
          </el-link>
        </template>
      </el-table-column>
    </el-table>

    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
export default {
  name: "CostManageHasCostTable",
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
    //查看已收费信息
    toLook(number) {
      this.$router.push('/costManageRoot/hasCostOrder/' + number)
    },
    //退费
    toReturnMoney() {
      this.$router.push('/costManageRoot/orderReturnCost')
    }
  },

}
</script>

<style scoped>
.status {
  color: orange;
}
</style>