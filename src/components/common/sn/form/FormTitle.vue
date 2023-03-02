<template>
  <div class="title">
    <slot name="title">
      {{ title }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: {
      type: String,
      default: '默认标题'
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 25px;
  font-weight: bold;
  color: #83A0BC;
}
</style>