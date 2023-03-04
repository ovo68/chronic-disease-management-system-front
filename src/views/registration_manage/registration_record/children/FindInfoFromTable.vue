<template>
  <sn-row-has-four-col
      class="to-flex"
      :one="5"
      :two="8"
      :three="6"
      :four="7">
    <sn-select
        :select-data="registrationDoctor"
        slot="one-col"
        class="to-flex move-down-little"
        :select-style="{'width':'140px'}">
      <sn-text text="挂号医生" slot="title" class="margin-right-20 move-down"/>
    </sn-select>

    <sn-date-picker-with-round slot="two-col" class="to-flex" :date-picker-style="{'width':'250px'}">
      <sn-text text="就诊时间" slot="title" class="margin-right-20 move-down-date"/>
    </sn-date-picker-with-round>

    <sn-search-input input-placeholder="输入患者姓名" slot="three-col" class="move-down-little"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "FindInfoFromTable",
  data() {
    return {
      registrationDepartment: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '全科'
        },
        {
          value: 2,
          label: '内科'
        },
        {
          value: 3,
          label: '儿科'
        },
      ],
      registrationDoctor: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '陈平安'
        },
        {
          value: 2,
          label: '宁姚'
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
.move-down {
  position: relative;
  top: 10px;
}

.move-down-little{
  position: relative;
  top: 2px;
}

.move-down-date{
  position: relative;
  top: 12px;
}
</style>
