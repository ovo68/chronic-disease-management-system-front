<template>
  <sn-input slot="one-col" class="to-flex" width="120px">
    <sn-text :text="beforeText" slot="title" class="margin-right" :move-down="10"/>
    <sn-text :text="afterText" slot="input-after" class="margin-left" :move-down="12"/>
  </sn-input>
</template>

<script>
export default {
  name: "BodyInfoInput",
  props: {
    beforeText: {
      type: String,
      default: ''
    },
    afterText: {
      type: String,
      default: ''
    },
  },
}
</script>

<style scoped>

</style>