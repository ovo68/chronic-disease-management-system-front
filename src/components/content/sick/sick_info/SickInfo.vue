<template>
  <div>
    <sick-info-title
        :is-electronic-case="showElectronicMedicalRecord"
        :is-person-info="showPersonInfo"
        @toPersonInfo="toPersonInfo"
        @toElectronicMedicalRecord="toElectronicMedicalRecord"
        @toCostRecord="toCostRecord"
        @saveSickPersonInfo="toSaveSickPersonInfo"
        slot="title"/>
    <person-info
        ref="personInfo"
        :sick-info-by-id="sickInfoById"
        slot="content"
        v-if="showPersonInfo"/>
    <electronic-case
        :electronic-case-all-info="electronicCase"
        slot="content"
        v-if="showElectronicMedicalRecord"/>
    <cost-record
        :record-show-table-data="sickCostRecord"
        slot="content" v-if="showCostRecord"/>
  </div>
</template>

<script>
import SickInfoTitle from "@/components/content/sick/sick_info/children/SickInfoTitle";
import PersonInfo from "@/components/content/sick/person_info/PersonInfo";
import ElectronicCase from "@/components/content/case/electronic_case/ElectronicCase";
import CostRecord from "@/components/content/sick/cost_record/CostRecord";

import * as sickApi from '@/api/common/sink'

export default {
  name: "Sick",
  data() {
    return {
      //患者收费记录
      sickCostRecord: [],
      //患者电子病历
      electronicCase: [],
      //根据患者id查到的患者信息
      sickInfoById: {},
      //显示患者个人信息
      showPersonInfo: true,
      //显示患者电子病历
      showElectronicMedicalRecord: false,
      //显示患者收费记录
      showCostRecord: false
    }
  },
  components: {
    PersonInfo,
    SickInfoTitle,
    ElectronicCase,
    CostRecord
  },
  methods: {

    //=============================收费记录
    toFindSickCostRecordById() {
      sickApi.findSickCostRecordById(this.$route.params.id).then(res => {
        this.sickCostRecord = res.data
      })
    },

    //=============================电子病历
    //根据id获取患者电子病历
    toFindSickElectronicCaseInfoById() {
      sickApi.findSickElectronicCaseInfoById(this.$route.params.id).then(res => {
        this.electronicCase = res.data
      })
    },

    //==============================个人信息
    //根据患者id修改患者信息
    toSaveSickPersonInfo() {
      //1.获取患者个人信息组件
      let personInfo = this.$refs.personInfo
      //2.获取患者基本信息组件
      let personBaseInfo = personInfo.$refs.personBaseInfo
      //3.获取要修改的患者信息
      let sickInfoToUpdate = personBaseInfo.sick
      //4.获取要修改的患者卡号
      let vipNumber = personBaseInfo.vipNumber
      //5.设置患者的患者卡号
      this.$set(sickInfoToUpdate, 'vipNumber', vipNumber)
      //6.向后端发请求修改患者信息
      sickApi.updateSickById(sickInfoToUpdate).then(res => {
        history.back()
        this.myUtils.showMessage(this, '！！修改成功(*^▽^*)')
      })
    },

    //根据患者id查询患者个人信息
    toQuerySickInfoById() {
      sickApi.findSickInfoById(this.$route.params.id).then(res => {
        this.sickInfoById = res.data
        //设置会员等级
        this.$set(this.sickInfoById, 'level', parseInt(this.$route.params.level))
      })
    },

    //切换到患者个人信息
    toPersonInfo() {
      this.toQuerySickInfoById()
      this.showPersonInfo = true
      this.showElectronicMedicalRecord = false
      this.showCostRecord = false
    },
    //切换到患者电子病历
    toElectronicMedicalRecord() {
      this.showPersonInfo = false
      this.showElectronicMedicalRecord = true
      this.showCostRecord = false
    },
    //切换到患者收费记录
    toCostRecord() {
      this.showPersonInfo = false
      this.showElectronicMedicalRecord = false
      this.showCostRecord = true
    },
  },
  created() {

    //根据患者id查询收费记录
    this.toFindSickCostRecordById()

    //根据患者id查询电子病历
    this.toFindSickElectronicCaseInfoById()

    //根据患者id查询患者个人信息
    this.toQuerySickInfoById()
  }
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 12px;
}
</style>