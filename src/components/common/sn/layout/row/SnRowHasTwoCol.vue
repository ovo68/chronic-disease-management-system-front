<template>
  <el-row :gutter="10">
    <el-col :span="left">
      <slot name="one-col"/>
    </el-col>
    <el-col :span="right">
      <slot name="two-col"/>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "SnRowHasTwoCol",
  props: {
    left: {
      type: Number,
      default: 6
    },
    right: {
      type: Number,
      default: 18
    }
  }
}
</script>

<style scoped>

</style>