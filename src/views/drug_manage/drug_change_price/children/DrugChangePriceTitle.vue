<template>
  <sn-flex-appoint-element :element-count="2" class="margin-left">
    <el-button
        type="primary" plain :slot="1"
        @click="drugChangePrice">
      <sn-text text="药品调价"/>
    </el-button>
    <el-button
        type="primary" plain :slot="2"
        @click="drugChangePriceRecord">
      <sn-text text="调价记录"/>
    </el-button>
  </sn-flex-appoint-element>
</template>

<script>
export default {
  name: "DrugChangePriceTitle",
  methods: {
    drugChangePrice() {
      this.$emit('drugChangePrice')
    },
    drugChangePriceRecord() {
      this.$emit('drugChangePriceRecord')
    }
  },
}
</script>

<style scoped>

</style>