<template>
  <div class="div-has-border to-flex">
    <div class="margin-right">
      <slot name="left"/>
    </div>
    <div>
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DivHasBorder"
}
</script>

<style scoped>
.div-has-border {
  border: 1px solid #FAD8F7;
  padding: 10px;
}
</style>