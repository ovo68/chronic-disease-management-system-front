<template>
  <div>
    <sn-time-line
        v-for="(item,index) in electronicCaseSimpleInfo"
        :time-lien-id="index"
        :select-id="selectId"
        @chooseTimeLine="chooseTimeLine(index)">
      <sn-text slot="time" text="2019-11-20 10:22:23"/>
      <div slot="content">
        <sn-row-has-two-col :left="14" :right="10" class="row">
          <div slot="one-col" class="to-flex">
            <sn-text
                text="门诊编号 :" :font-size="15" class="margin-right"/>
            <sn-text
                :text="item.fkOrderId.number + ''" :font-size="15"/>
          </div>
          <div slot="two-col" class="to-flex">
            <sn-text text="诊断 :" :font-size="15" class="margin-right"/>
            <sn-text
                :text="item.diagnosis" font-color="#666EE8" :font-size="15"/>
          </div>
        </sn-row-has-two-col>
        <sn-row-has-two-col :left="14" :right="10" class="margin-top">
          <div slot="one-col" class="to-flex">
            <sn-text text="接诊科室 :" :font-size="15" class="margin-right"/>
            <sn-text
                :text="item.fkOrderId.doctor.department.name" :font-size="15"/>
          </div>
          <div slot="two-col" class="to-flex">
            <sn-text text="接诊医生 :" :font-size="15" class="margin-right"/>
            <sn-text
                :text="item.fkOrderId.doctor.name" :font-size="15"/>
          </div>
        </sn-row-has-two-col>
      </div>
    </sn-time-line>
  </div>
</template>

<script>
export default {
  name: "ElectronicCaseSimple",

  data() {
    return {
      //当前点击的病历信息
      selectId: 0
    }
  },

  methods: {
    chooseTimeLine(timeLineId) {
      this.selectId = timeLineId
      //根据点击的病历的简单信息来 获取病历详细信息
      this.$emit('showCorrespondDetailCase', this.selectId)
    },
  },
  props: {
    electronicCaseSimpleInfo: Array
  },
}
</script>

<style scoped>
.row {
  width: 350px;
}
</style>