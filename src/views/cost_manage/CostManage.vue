<!-- 收费管理-->
<template>
  <sn-show-by-button-no-card
      @getCurrentClickButtonName="getCurrentClickButtonName"
      :content-count="3"
      :button-count="3"
      :button-names="buttonNames">

    <sn-text text="待收费" slot="buttonName0"/>
    <sn-text text="已收费" slot="buttonName1"/>
    <sn-text text="已退费" slot="buttonName2"/>

    <cost-manage-find-info-bar
        ref="findInfoBar"
        @getQueryName="toQueryBySickName"
        @getQueryTime="toQueryByCreateTimeRound"
        @getOrderType="toQueryByOrderType"
        slot="notChange"/>
    <!-- 待收费表格 -->
    <cost-manage-wait-cost-table
        slot="content0"
        :table-data="waitCostTableData"/>
    <!-- 已收费-->
    <cost-manage-has-cost-table
        slot="content1"
        :table-data="hasCostTableData"/>
    <!-- 已退费-->
    <cost-manage-has-return-cost-table
        slot="content2"
        :table-data="hasReturnCostTableData"/>
  </sn-show-by-button-no-card>
</template>

<script>
import CostManageFindInfoBar from "@/views/cost_manage/children/CostManageFindInfoBar";
import CostManageHasCostTable
  from "@/views/cost_manage/children/cost_manage_table/CostManageHasCostTable";
import CostManageWaitCostTable
  from "@/views/cost_manage/children/cost_manage_table/CostManageWaitCostTable";
import CostManageHasReturnCostTable
  from "@/views/cost_manage/children/cost_manage_table/CostManageHasReturnCostTable";


import * as costManage from '@/api/cost_manage/costManage'

export default {
  name: "CostManage",
  components: {
    CostManageFindInfoBar,
    CostManageHasCostTable,
    CostManageWaitCostTable,
    CostManageHasReturnCostTable
  },
  data() {
    return {
      buttonNames: ['待收费', '已收费', '已退费'],
      //当前点击的按钮的名字
      currentClickButtonName: '待收费',
      //待收费表格数据
      waitCostTableData: [],
      //已收费表格数据
      hasCostTableData: [],
      //已退费表格数据
      hasReturnCostTableData: [],
    }
  },
  methods: {

    //获取当前点击的按钮的名字 点击待收费 已收费 已退费 3个按钮会执行的方法
    getCurrentClickButtonName(buttonName) {

      //1. 初始化下拉框
      this.$refs.findInfoBar.$refs.select.optionValue = 0

      //2. 初始化时间选择框
      this.$refs.findInfoBar.$refs.dateChoose.value = []

      //3. 初始化输入框
      this.$refs.findInfoBar.$refs.input.value = ''

      //4. 获取当前选中的按钮名字
      this.currentClickButtonName = buttonName
    },

    //根据患者姓名查询
    toQueryBySickName(name) {

      //1. 初始化下拉框
      this.$refs.findInfoBar.$refs.select.optionValue = 0

      //2. 初始化时间选择框
      this.$refs.findInfoBar.$refs.dateChoose.value = []

      //3. 已退费
      if (this.currentClickButtonName === '已退费') {
        costManage.queryBySickName(name, 'refund').then(res => {
          this.hasReturnCostTableData = res.data
        })
        return
      }

      //4. 已收费
      if (this.currentClickButtonName === '已收费') {
        costManage.queryBySickName(name, 'charged').then(res => {
          this.hasCostTableData = res.data
        })
        return
      }

      //5. 待收费
      if (this.currentClickButtonName === '待收费') {
        costManage.queryBySickName(name, 'toBeCharged').then(res => {
          this.waitCostTableData = res.data
        })
      }
    },

    //根据时间范围查询
    toQueryByCreateTimeRound(date) {

      //1.初始化下拉框
      this.$refs.findInfoBar.$refs.select.optionValue = 0

      //2.初始化输入框
      this.$refs.findInfoBar.$refs.input.value = ''

      //3.判断是否选择时间
      if (date != null) {
        //3.1 已退费
        if (this.currentClickButtonName === '已退费') {
          costManage.queryByCreateTimeRound(date[0], date[1], 'refund').then(res => {
            this.hasReturnCostTableData = res.data
          })
          return
        }

        //3.2 已收费
        if (this.currentClickButtonName === '已收费') {
          costManage.queryByCreateTimeRound(date[0], date[1], 'charged').then(res => {
            this.hasCostTableData = res.data
          })
          return
        }

        //3.3 待收费
        if (this.currentClickButtonName === '待收费') {
          costManage.queryByCreateTimeRound(date[0], date[1], 'toBeCharged').then(res => {
            this.waitCostTableData = res.data
          })
        }
      } else {

        //4. 未选择时间就去查询全部
        //4.1 已退费
        if (this.currentClickButtonName === '已退费') {
          this.toQueryHasReturnCostRecord()
          return
        }

        //4.2 已收费
        if (this.currentClickButtonName === '已收费') {
          this.toQueryHasCostRecord()
          return
        }

        //4.3 待收费
        if (this.currentClickButtonName === '待收费') {
          this.toQueryWaitCostRecord()
        }
      }
    },

    //根据订单类型查询
    toQueryByOrderType(orderType) {

      //1.初始化时间选择框
      this.$refs.findInfoBar.$refs.dateChoose.value = []

      //2.初始化输入框
      this.$refs.findInfoBar.$refs.input.value = ''

      //3.已退费
      if (this.currentClickButtonName === '已退费') {
        //查询全部
        if (orderType.value === 0) {
          this.toQueryHasReturnCostRecord()
          return
        }
        //根据类型查询
        costManage.queryByOrderType({
          value: orderType.value,
          description: orderType.label
        }, 'refund').then(res => {
          this.hasReturnCostTableData = res.data
        })
        return
      }

      //4.已收费
      if (this.currentClickButtonName === '已收费') {
        //查询全部
        if (orderType.value === 0) {
          this.toQueryHasCostRecord()
          return
        }
        //根据类型查询
        costManage.queryByOrderType({
          value: orderType.value,
          description: orderType.label
        }, 'charged').then(res => {
          this.hasCostTableData = res.data
        })
        return
      }

      //5.待收费
      if (this.currentClickButtonName === '待收费') {
        //查询全部
        if (orderType.value === 0) {
          this.toQueryWaitCostRecord()
          return
        }
        //根据类型查询
        costManage.queryByOrderType({
          value: orderType.value,
          description: orderType.label
        }, 'toBeCharged').then(res => {
          this.waitCostTableData = res.data
        })
      }
    },

    //==================================== 查询已退费
    toQueryHasReturnCostRecord() {
      costManage.queryTableRecord('refund').then(res => {
        this.hasReturnCostTableData = res.data
      })
    },

    //==================================== 查询已收费
    toQueryHasCostRecord() {
      costManage.queryTableRecord('charged').then(res => {
        this.hasCostTableData = res.data
      })
    },

    //==================================== 查询待收费
    toQueryWaitCostRecord() {
      costManage.queryTableRecord('toBeCharged').then(res => {
        this.waitCostTableData = res.data
      })
    },
  },
  created() {
    //==================================== 查询已退费
    this.toQueryHasReturnCostRecord()
    //==================================== 查询已收费
    this.toQueryHasCostRecord()
    //==================================== 查询待收费
    this.toQueryWaitCostRecord()
  }
}
</script>

<style scoped>

</style>