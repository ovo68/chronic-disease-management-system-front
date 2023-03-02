<template>
  <div class="to-flex">
    <div class="margin-right" v-for="item in elementCount">
      <slot :name="item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnFlexHasThreeElement",
  props: {
    elementCount: {
      type: Number,
      default: 1
    },
  },
}
</script>

<style scoped>

</style>