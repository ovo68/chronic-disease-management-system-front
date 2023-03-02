<template>
  <div class="to-flex">
    <div v-for="item in divCount" class="sn-div">
      <slot :name="item"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SnRowHasManyDiv",
  props: {
    divCount: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>
.sn-div {
  width: 100%;
  border: 1px solid #E0E2FA;
  padding: 10px;
}
</style>