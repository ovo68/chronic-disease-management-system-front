<!--新开就诊 -->
<template>
  <sn-show-by-button-no-card
      slot="spaceContent"
      :button-names="buttonNames"
      :button-count="2" :content-count="2">
    <sn-text text="处方" slot="buttonName0"/>
    <sn-text text="病例" slot="buttonName1"/>

    <el-button slot="otherButton" type="success" round @click="returnUp">
      <sn-text text="返回"/>
    </el-button>
    <!-- 个人信息 -->
    <person-info
        :sick-info-by-id="sickInfoById"
        :is-disabled-edit-person-info="isDisabledEditPersonInfo"
        :vip-number="this.$store.state.user.id + new Date().getTime()"
        :all-sicks="allSickInfo"
        slot="notChange"
        :show-family="false"/>
    <!-- 处方信息 -->
    <prescription
        :sick-id="sickInfoById.id"
        slot="content0"/>
    <!-- 病例信息 -->
    <common-case
        slot="content1"/>
  </sn-show-by-button-no-card>
</template>

<script>
import PersonInfo from "@/components/content/sick/person_info/PersonInfo";
import Prescription from "@/components/content/prescription/Prescription";
import CommonCase from "@/components/content/case/common_case/CommonCase";


import {getAllVipSicks} from "@/api/registration_manage/registrationManage";
import * as sickApi from '@/api/common/sink'


export default {
  name: 'NewSeeDoctor',
  components: {
    CommonCase,
    Prescription,
    PersonInfo
  },
  data() {
    return {
      //能否编辑接诊时患者信息
      isDisabledEditPersonInfo: false,
      buttonNames: ['处方', '病例'],
      allSickInfo: [],
      sickInfoById: {}
    }
  },
  methods: {

    //进行接诊
    toMeetDoctor() {
      //从患者管理表来接诊
      if (this.$route.path.indexOf('sickManageRoot') !== -1) {
        this.isDisabledEditPersonInfo = true
        sickApi.findSickInfoById(this.$route.params.id).then(res => {
          this.sickInfoById = res.data
          //设置会员等级
          this.$set(this.sickInfoById, 'level', parseInt(this.$route.params.level))
        })
      }
    },

    //获取所有患者
    toGetAllSick() {
      getAllVipSicks().then(res => {
        this.allSickInfo = res.data
      })
    },
    //返回
    returnUp() {
      history.back()
    },
  },
  created() {

    //进行接诊
    this.toMeetDoctor()

    //去查询所有的患者
    this.toGetAllSick()
  }
}
</script>

<style scoped>
.el-button {
  width: 100px;
}
</style>