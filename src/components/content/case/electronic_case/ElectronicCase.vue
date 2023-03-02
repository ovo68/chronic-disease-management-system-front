<template>
  <sn-row-has-two-col :left="9" :right="15">
    <electronic-case-time-line
        @showCorrespondDetailCase="showCorrespondDetailCase"
        :electronic-case-simple-info="electronicCaseAllInfo"
        slot="one-col"
        class="margin-top-20"/>
    <electronic-case-detail
        :show-detail-case="currentClickCase"
        :electronic-case-detail-info="electronicCaseAllInfo"
        slot="two-col"/>
  </sn-row-has-two-col>
</template>

<script>
import ElectronicCaseTimeLine from "@/components/content/case/electronic_case/children/ElectronicCaseTimeLine";
import ElectronicCaseDetail from "@/components/content/case/electronic_case/children/ElectronicCaseDetail";

export default {
  name: "electronicMedicalRecord",
  data() {
    return {
      currentClickCase: 0
    }
  },
  components: {
    ElectronicCaseTimeLine,
    ElectronicCaseDetail
  },
  props: {
    electronicCaseAllInfo: Array
  },
  methods: {
    //根据点击的病历的简单信息来 获取病历详细信息
    showCorrespondDetailCase(currentClickCase) {
      this.currentClickCase = currentClickCase
    }
  },
}
</script>

<style scoped>

</style>