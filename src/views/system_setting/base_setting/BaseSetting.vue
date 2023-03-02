<!-- 基础设置-->
<template>
  <div>
    <prescription-unit-price-locking/>
  </div>
</template>

<script>
import PrescriptionUnitPriceLocking
  from "@/views/system_setting/base_setting/children/prescription_unit_price_locking/PrescriptionUnitPriceLocking";
export default {
  name: "BaseSetting",
  components: {
    PrescriptionUnitPriceLocking,
  }
}
</script>

<style scoped>

</style>