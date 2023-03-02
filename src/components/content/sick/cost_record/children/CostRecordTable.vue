<template>
  <div>
    <sn-text
        text="消费明细"
        :font-size="18"
        font-weight="bold"
        class="margin-left-20 margin-bottom"/>

    <el-table
        :data="tableData"
        :border="true"
        stripe
        height="400"
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column
          prop="createTime"
          label="收费/退费时间"/>
      <el-table-column label="收费状态">
        <template slot-scope="scope">
          <sn-text
              v-if="scope.row.orderPayStatus.description === '待收费'"
              :text="scope.row.orderPayStatus.description"
              font-color="orange"/>
          <sn-text
              v-if="scope.row.orderPayStatus.description === '已退费'"
              :text="scope.row.orderPayStatus.description"
              font-color="pink"/>
          <sn-text
              v-if="scope.row.orderPayStatus.description === '已收费'"
              :text="scope.row.orderPayStatus.description"
              font-color="#28D094"/>
        </template>
      </el-table-column>
      <el-table-column
          prop="orderType.description"
          label="收费类型"/>
      <el-table-column
          prop="receivable"
          label="应收(可退)金额"/>
      <el-table-column
          prop="income"
          label="实收(实退)金额"/>
      <el-table-column
          prop="payWay.name"
          label="支付方式"/>

      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-link
              @click="lookNotCostOrder"
              v-if="scope.row.orderPayStatus.description === '待收费'"
              type="primary"
              :underline="false">
            <sn-text text="收费"/>
          </el-link>
          <el-link
              @click="lookHasCostOrder"
              v-if="scope.row.orderPayStatus.description === '已收费'"
              type="primary"
              :underline="false">
            <sn-text text="查看详情"/>
          </el-link>
          <el-link
              @click="lookHasReturnCostOrder"
              v-if="scope.row.orderPayStatus.description === '已退费'"
              type="primary"
              :underline="false">
            <sn-text text="查看详情"/>
          </el-link>
        </template>
      </el-table-column>
    </el-table>
  </div>


</template>

<script>
export default {
  name: "CostRecordTable",
  components: {},
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
    //已收费
    lookHasCostOrder() {
      this.$router.push('/sickManageRoot/toHasCostOrder')
    },
    //未收费
    lookNotCostOrder() {
      this.$router.push('/sickManageRoot/toNotCostOrder')
    },
    //已退费
    lookHasReturnCostOrder() {
      this.$router.push('/sickManageRoot/toHasReturnCostOrder')
    },

  },
}
</script>

<style scoped>

</style>