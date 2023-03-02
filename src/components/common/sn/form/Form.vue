<template>
  <div class="form">
    <div class="form-title">
      <slot name="form-title"></slot>
    </div>
    <div class="form-content">
      <slot name="form-content"></slot>
    </div>
    <div class="form-submit">
      <slot name="form-submit"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped lang="less">
</style>