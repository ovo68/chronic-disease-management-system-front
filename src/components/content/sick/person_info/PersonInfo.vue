<template>
  <div>
    <person-base-info
        :is-disabled-edit-person-info="isDisabledEditPersonInfo"
        ref="personBaseInfo"
        :sick-info-by-id="sickInfoById"
        :all-sicks="allSicks"
        :show-diagnose="showDiagnose"/>
    <person-info-about-family v-if="showFamily"/>
  </div>
</template>

<script>
import PersonBaseInfo from "@/components/content/sick/person_info/children/PersonBaseInfo";
import PersonInfoAboutFamily from "@/components/content/sick/person_info/children/family/PersonInfoAboutFamily";

export default {
  name: "PersonInfo",
  components: {
    PersonBaseInfo,
    PersonInfoAboutFamily
  },
  methods: {
    //获取患者基本信息
    getSickBaseInfo() {
      return this.$refs.personBaseInfo.sick
    },
    //获取患者卡号
    getSickVipNumber() {
      return this.$refs.personBaseInfo.vipNumber
    }
  },
  props: {
    showFamily: {
      type: Boolean,
      default: true
    },
    showDiagnose: Boolean,
    allSicks: {
      type: Array,
      default() {
        return []
      }
    },
    //根据id查到的患者信息
    sickInfoById: Object,
    //能否编辑患者个人信息
    isDisabledEditPersonInfo: Boolean,
  },
}
</script>

<style scoped>

</style>