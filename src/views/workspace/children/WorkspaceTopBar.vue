<template>
  <sn-row-has-four-col
      :one="8" :two="6" :three="4">
    <sn-date-picker-with-round
        @chooseDate="chooseCreateDate"
        :date-picker-style="{'width':'280px'}"
        class="to-flex margin-left-20"
        slot="one-col">
      <sn-text text="创建时间" slot="title" :move-down="12" class="margin-right-20"/>
    </sn-date-picker-with-round>
    <sn-search-input
        @inputContentChange="getSickName"
        class="move-down"
        input-placeholder="输入患者姓名"
        slot="three-col"/>
  </sn-row-has-four-col>
</template>

<script>
export default {
  name: "WorkspaceTopBar",
  data() {
    return {}
  },
  methods: {
    //选择创建时间
    chooseCreateDate(date) {
      this.$emit("querySicksByCreateDate", date)
    },
    //获取患者姓名
    getSickName(name) {
      this.$emit("querySicksByName", name)
    }
  },
}
</script>

<style scoped lang="less">
.move-down {
  position: relative;
  top: 2px;
}

.move-down-little {
  position: relative;
  top: 3px;
}
</style>