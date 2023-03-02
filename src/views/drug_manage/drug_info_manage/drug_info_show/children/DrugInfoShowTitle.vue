<template>
  <el-button
      @click="newAddDrug"
      plain type="primary">
    <sn-text text="新增药品"/>
  </el-button>
</template>

<script>
export default {
  name: "StockManageTitle",
  methods: {
    newAddDrug() {
      this.$router.push('/drugManageRoot/newAddDrug/0')
    }
  },
}
</script>

<style scoped>
.el-button {
  width: 100%;
}
</style>