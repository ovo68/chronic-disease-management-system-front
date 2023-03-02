<template>
  <sn-row-has-four-col
      :one=6
      :two=6
      :three=6
      :four=6>
    <sn-select
        ref="registrationCost"
        :to-select="10"
        @selectChange="getRegistrationCost"
        :disabled-select="isDisabledRegistrationCost"
        :select-data="$store.state.registrationCost"
        slot="one-col">
      <sn-must-text text="挂号费" slot="title"/>
    </sn-select>
    <sn-select
        ref="therapyCost"
        :to-select="30"
        @selectChange="getTherapyCost"
        :select-data="$store.state.therapyCost"
        :disabled-select="isDisabledTherapyCost"
        slot="two-col">
      <sn-must-text text="诊疗费" slot="title"/>
    </sn-select>
    <sn-input
        :is-disabled="true" class="move-down" v-if="showRegistrationDate"
        :input-value-from-parent="getRegistrationDate"
        slot="three-col">
      <sn-text text="挂号日期" slot="title"/>
    </sn-input>
    <sn-input
        :is-disabled="true" class="move-down" v-if="showRegistrationWorker"
        :input-value-from-parent="getRegistrationWorker"
        slot="four-col">
      <sn-text text="挂号员" slot="title"/>
    </sn-input>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "RegistrationInfoSecondRow",
  data() {
    return {
      secondRowData: {}
    }
  },
  computed: {
    //获取挂号员
    getRegistrationWorker() {
      return this.$store.state.user.username
    },
    //获取挂号日期
    getRegistrationDate() {
      return this.myUtils.dateFormat(new Date())
    },
  },
  methods: {

    //获取第二行数据
    getSecondRowData() {
      //1.获取挂号费组件 并设置
      let registrationCost = this.$refs.registrationCost
      this.$set(this.secondRowData, 'registrationCost', registrationCost.getNowSelect)

      //2.获取诊疗费组件 并设置
      let therapyCost = this.$refs.therapyCost
      this.$set(this.secondRowData, 'therapyCost', therapyCost.getNowSelect)

      return this.secondRowData
    },

    //获取挂号费
    getRegistrationCost(registrationCost) {
      return registrationCost
    },
    //获取诊疗费
    getTherapyCost(therapyCost) {
      return therapyCost
    },
  },

  props: {
    showRegistrationWorker: {
      type: Boolean,
      default: true
    },
    showRegistrationDate: {
      type: Boolean,
      default: true
    },
    isDisabledRegistrationCost: {
      type: Boolean,
      default: false
    },
    isDisabledTherapyCost: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 2px;
}
</style>