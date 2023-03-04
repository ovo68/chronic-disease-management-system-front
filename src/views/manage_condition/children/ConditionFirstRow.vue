<template>
  <div>
    <el-row :gutter="10" class="first-row">
<!--      <el-col :span="8" class="first-row-item">-->
<!--        <condition-simple-info-->
<!--            :about-condition="registrationCondition.sickNumTrend"-->
<!--            :is-up="registrationCondition.sickNumUpDown"-->
<!--            :card-title="registrationCondition.getTodaySickNum"/>-->
<!--      </el-col>-->
      <el-col :span="8" class="first-row-item">
        <condition-simple-info
            :card-title="meetDoctorCondition.getTodayReceiveSickNum"
            describe="今日接诊人次"
            :is-up="meetDoctorCondition.receiveSickNumUpDown"
            :about-condition="meetDoctorCondition.receiveSickNumTrend"
            :info-icon="2"/>
      </el-col>

<!--      <el-col :span="8" class="first-row-item">-->
<!--        <condition-simple-info-->
<!--            :card-title="incomeCondition.income"-->
<!--            describe="今日收入合计"-->
<!--            :is-up="incomeCondition.incomeUpDown"-->
<!--            :about-condition="incomeCondition.incomeTrend"-->
<!--            :info-icon="3"/>-->
<!--      </el-col>-->
<!--      <el-col class="first-row-item" :span="6">-->
<!--        <condition-simple-info-->
<!--            :card-title="vipCondition.getTodayNewvipNum"-->
<!--            describe="今日新增会员数"-->
<!--            :is-up="vipCondition.vipNumUpDown"-->
<!--            :about-condition="vipCondition.vipNumTrend"-->
<!--            :info-icon="4"/>-->
<!--      </el-col>-->
    </el-row>
  </div>
</template>

<script>
import ConditionSimpleInfo from "@/views/manage_condition/children/ConditionSimpleInfo";

export default {
  name: "ConditionFirstRow",
  components: {
    ConditionSimpleInfo
  },
  data() {
    return {
      //挂号信息
      registrationCondition: {},
      //接诊信息
      meetDoctorCondition: {},
      //收入概况
      incomeCondition: {},
      //会员概况
      vipCondition: {}
    }
  },
  props: {
    conditions: Array
  },
  watch: {
    conditions(val) {
      this.registrationCondition = val[0]
      this.meetDoctorCondition = val[1]
      this.incomeCondition = val[2]
      this.vipCondition = val[3]
    }
  }
}
</script>

<style scoped>
</style>