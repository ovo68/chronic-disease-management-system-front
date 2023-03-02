<template>
  <sn-row-has-two-col :left="5" :right="7">
    <sn-select
        @selectChange="getDepartment"
        :select-data="employeeManageFindBarData"
               :select-style="{'width':'150'}"
               class="to-flex" slot="one-col">
      <sn-text text="所属科室" :move-down="15" class="margin-right" slot="title" style="width: 60px"/>
    </sn-select>

    <sn-search-input
        @inputContentChange="getInputText"
        input-placeholder="员工姓名" slot="two-col"/>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "EmployeeManageFindBar",
  data() {
    return {
      employeeManageFindBarData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '内科'
        },
        {
          value: 2,
          label: '儿科'
        },
      ]
    }
  },
  methods: {
    getDepartment(department) {
      this.$emit('getDepartment',department)
    },
    getInputText(text) {
      this.$emit('getInputText',text)
    }
  },
}
</script>

<style scoped>

</style>