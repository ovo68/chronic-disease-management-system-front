<!-- 经营概况-->
<template>
  <div>
    <condition-first-row :conditions="todayCondition"/>
<!--    <condition-second-row-->
<!--        :vip-consume-data="vipPercent"/>-->
    <condition-third-row
        :table-data="allOutpatientServiceRecord"/>
  </div>
</template>

<script>
import ConditionFirstRow from "@/views/manage_condition/children/ConditionFirstRow";
import ConditionSecondRow from "@/views/manage_condition/children/ConditionSecondRow";
import ConditionThirdRow from "@/views/manage_condition/children/ConditionThirdRow";

import * as manageCondition from '@/api/manage_condition/manageCondition'
import {get} from "@/api/request";

export default {
  name: "ManageCondition",
  components: {
    ConditionFirstRow,
    ConditionSecondRow,
    ConditionThirdRow,
  },
  data() {
    return {
      //今日接诊情况
      allOutpatientServiceRecord: [],
      //今日概况
      todayCondition: [],
      //会员消费情况
      vipPercent: {},
    }
  },
  methods: {
    //获取今日经营概况和会员消费占比
    toGetTodayConditionAndVipPercent() {
      manageCondition.getTodayConditionAndVipPercent().then(res => {
        //设置今日经营概况
        this.todayCondition.push(res.data[0])
        this.todayCondition.push(res.data[1])
        this.todayCondition.push(res.data[2])
        this.todayCondition.push(res.data[3])
        //设置会员消费饼图
        let {todayUnVipPercen, todayVipPercent, income} = res.data[4]
        let notVipPercent = Number(todayUnVipPercen).toFixed(1)
        let vipPercent = Number(todayVipPercent).toFixed(1)
        let chartPieData = [
          {
            value: vipPercent,
            name: '会员消费占比' + vipPercent + '%'
          },
          {
            value: notVipPercent,
            name: '非会员消费占比' + notVipPercent + '%'
          },
        ]
        //设置会员消费占比
        this.$set(this.vipPercent, 'chartPieData', chartPieData)
        //设置收入
        this.$set(this.vipPercent, 'money', income)
      })
    },

    //获取今日门诊记录
    toGetOutpatientServiceRecord() {
      manageCondition.getOutpatientServiceRecord().then(res => {
        this.allOutpatientServiceRecord = res.data
      })
    },

    initAllRegistrationInfoTableData() {
      // TODO 发请求拿就诊病人数据数据
      get("/doctor/allSick").then(data => {
          // console.log(data)
        if (data.code === 10001) {
          this.allOutpatientServiceRecord = data.data
        }
      })
    },
  },
  created() {
    //获取今日经营概况和会员消费占比
    // this.toGetTodayConditionAndVipPercent()
    // TODO 获取门诊记录
    // this.toGetOutpatientServiceRecord()
    this.initAllRegistrationInfoTableData()
  }
}
</script>

<style scoped lang="less">

</style>

