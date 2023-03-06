<template>
  <div>
    <el-row :gutter="10" class="first-row">
      <el-col :span="8" class="first-row-item">
        <condition-simple-info
            :card-title="this.sickList.length"
            describe="接诊总人次"
            :is-up="meetDoctorCondition.receiveSickNumUpDown"
            :about-condition="meetDoctorCondition.receiveSickNumTrend"
            :info-icon="2"/>
      </el-col>
      <el-col :span="8" class="first-row-item">
        <condition-simple-info
            :card-title="this.maleToFemaleRatio"
            describe="男女比例"
            :is-up="meetDoctorCondition.receiveSickNumUpDown"
            :about-condition="meetDoctorCondition.receiveSickNumTrend"
            :info-icon="1"/>
      </el-col>
      <el-col :span="8" class="first-row-item">
        <condition-simple-info
            :card-title="this.ageRatio"
            describe="年龄比例(25岁)"
            :is-up="meetDoctorCondition.receiveSickNumUpDown"
            :about-condition="meetDoctorCondition.receiveSickNumTrend"
            :info-icon="3"/>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import ConditionSimpleInfo from "@/views/manage_condition/children/ConditionSimpleInfo";
import {get} from "@/api/request";

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
      vipCondition: {},
      // 所有病人
      sickList: []
    }
  },
  methods: {
    getAllSicks() {
      get("/doctor/allSick").then(data => {
        // console.log(data)
        if (data.code === 10001) {
          this.sickList = data.data
        }
      })
    },
    isgy(a, b) {
      return a % b === 0 ? b : this.isgy(b, a % b)
    }
  },
  computed: {
    maleToFemaleRatio() {
      let maleNum = 0
      let femaleNum = 0
      console.log(this.sickList)
      for (let i = 0; i < this.sickList.length; i++) {
        if (this.sickList[i].sex === 0) {
          femaleNum++
        } else {
          maleNum++
        }
      }
      let x = this.isgy(maleNum, femaleNum)
      return (maleNum / x) + ":" + (femaleNum / x)
    },
    ageRatio() {
      let lessAgeNum = 0
      let moreAgeNum = 0
      console.log(this.sickList)
      for (let i = 0; i < this.sickList.length; i++) {
        if (this.sickList[i].age > 15) {
          lessAgeNum++
        } else {
          moreAgeNum++
        }
      }
      let x = this.isgy(lessAgeNum, moreAgeNum)
      return (lessAgeNum / x) + ":" + (moreAgeNum / x)
    }
  },
  created() {
    this.getAllSicks();
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
