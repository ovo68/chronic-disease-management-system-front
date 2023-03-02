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
      <el-table-column prop="number" label="订单编号" width="120px"/>
      <el-table-column prop="orderType.description" label="订单类型"/>
      <el-table-column prop="sick.name" label="患者姓名"/>
      <el-table-column prop="sick.gender.description" label="性别"/>
      <el-table-column prop="sick.age" label="年龄"/>
      <el-table-column prop="sick.phoneNumber" label="手机号码" width="110px"/>
      <el-table-column prop="doctor.department.name" label="科室"/>
      <el-table-column prop="doctor.name" label="接诊医生"/>
      <el-table-column prop="createTime" label="创建时间" width="100px"/>

      <el-table-column
          prop="receivable"
          label="应收金额(元)">
      </el-table-column>

      <el-table-column label="收费状态">
        <template slot-scope="scope">
            <span class="status">
              {{ scope.row.orderPayStatus.description }}
            </span>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link
              @click="toCost(scope.row.orderType.description,scope.row.number)"
              type="primary"
              :underline="false"
              class="margin-right">收费
          </el-link>
          <el-link
              type="primary"
              :underline="false"
              @click="toEdit(scope.row.orderType.description)"
              class="margin-right">编辑
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   class="margin-right">删除
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
  name: "CostManageWaitCostTable",
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

    toCost(orderType, number) {
      if (orderType === '处方开立') {
        //处方开立收费
        this.$router.push('/costManageRoot/notCostOrder/' + number)
      } else {
        this.$router.push('/costManageRoot/drugCheckOut/')
      }
    },
    toEdit(orderType) {
      if (orderType === '处方开立') {
        this.$router.push('/costManageRoot/newSeeDoctor')
      } else {
        this.$router.push('/costManageRoot/drugSale')
      }
    }
  },

}
</script>

<style scoped>
.status {
  color: #66D4A2;
}
</style>