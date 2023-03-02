<template>
  <div>
    <span class="title" :style="titleStyle">
      {{ title }}
    </span>
    <span :style="otherStyle">
      <slot name="other"/>
    </span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    message: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    otherStyle: {
      type: Object,
      default() {
        return {}
      }
    },
  }
}
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: bold;
}
</style>