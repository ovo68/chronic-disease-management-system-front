<template>
  <sn-row-has-four-col
      :one=6
      :two=6
      :three=6
      :four=6>
    <sn-input
        :is-disabled="true" class="move-down"
        :input-value-from-parent="registrationId"
        slot="one-col"
        v-if="showRegistrationId">
      <sn-text text="挂号单号" slot="title"/>
    </sn-input>
    <sn-select
        ref="department"
        @selectChange="getDepartment"
        :select-data="$store.state.departments"
        slot="two-col">
      <sn-must-text text="科室" slot="title"/>
    </sn-select>
    <sn-select
        ref="diagnoseType"
        @selectChange="getDiagnoseType"
        :select-data="$store.state.diagnoseType"
        slot="three-col">
      <sn-must-text text="接诊类型" slot="title"/>
    </sn-select>
    <sn-select
        ref="diagnoseDoctor"
        @selectChange="getDiagnoseDoctor"
        :select-data="$store.state.diagnoseDoctor"
        slot="four-col">
      <sn-must-text text="接诊医生" slot="title"/>
    </sn-select>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "RegistrationInfoFirstRow",
  data() {
    return {
      firstRowData: {}
    }
  },
  computed: {
    registrationId() {
      return new Date().getTime() + this.$store.state.user.id
    }
  },
  props: {
    showRegistrationId: {
      type: Boolean,
      default: true
    },
  },
  methods: {

    getFirstRowData() {

      //1.获取科室组件并设置
      let department = this.$refs.department
      this.$set(this.firstRowData, 'department', department.getNowSelect)

      //2.获取接诊类型组件并设置
      let diagnoseType = this.$refs.diagnoseType
      this.$set(this.firstRowData, 'diagnoseType', diagnoseType.getNowSelect)

      //3.获取接诊医生组件并设置
      let diagnoseDoctor = this.$refs.diagnoseDoctor
      this.$set(this.firstRowData, 'diagnoseDoctor', diagnoseDoctor.getNowSelect)

      return this.firstRowData
    },

    //获取科室
    getDepartment(department) {
      return department
    },
    //获取接诊类型
    getDiagnoseType(diagnoseType) {
      return diagnoseType
    },
    //获取接诊医生
    getDiagnoseDoctor(diagnoseDoctor) {
      return diagnoseDoctor
    }
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 2px;
}
</style>