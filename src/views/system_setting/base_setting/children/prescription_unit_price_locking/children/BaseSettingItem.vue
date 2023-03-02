<template>
  <sn-row-has-two-col :left="22" :right="2" class="base-setting">
    <div slot="one-col">
      <slot name="left">

      </slot>
    </div>
    <div slot="two-col">
      <slot name="right"/>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "BaseSettingItem"
}
</script>

<style scoped>
  .base-setting{
    background: #F8F8FE;
    height: 70px;
    margin-top: 20px;
  }

</style>