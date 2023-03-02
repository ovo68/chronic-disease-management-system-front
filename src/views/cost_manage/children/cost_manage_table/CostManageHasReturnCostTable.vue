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
      <el-table-column prop="orderType.description" label="订单类型" width="100px"/>
      <el-table-column prop="sick.name" label="患者姓名" width="100px"/>
      <el-table-column prop="sick.gender.description" label="性别" width="100px"/>
      <el-table-column prop="sick.age" label="年龄" width="55"/>
      <el-table-column prop="sick.phoneNumber" label="手机号码" width="110px"/>
      <el-table-column prop="doctor.department.name" label="科室"/>
      <el-table-column prop="doctor.name" label="接诊医生"/>
      <el-table-column prop="createTime" label="创建时间" width="100px"/>

      <el-table-column
          width="100px"
          prop="income"
          label="退费金额(元)"/>

      <el-table-column
          prop="payWay.name"
          label="退费方式"/>

      <el-table-column label="收费状态">
        <template slot-scope="scope">
            <span class="status">
              {{ scope.row.orderPayStatus.description }}
            </span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   class="margin-right">查看
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
  name: "CostManageHasReturnCostTable",
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
  },

}
</script>

<style scoped>
.status {
  color: pink;
}
</style>