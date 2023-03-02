<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <slot name="title"/>
    </div>
    <div class="text item">
      <slot name="content"/>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "SnCardWithTitle"
}
</script>

<style scoped>

</style>