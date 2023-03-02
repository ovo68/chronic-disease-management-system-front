<template>

  <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949"
      class="base-setting-button">
  </el-switch>

</template>

<script>
export default {
  name: 'BaseSettingButton',
  data() {
    return {
      value: true
    }
  }
};
</script>

<style scoped>
  .base-setting-button{
      margin-top: 25px;
  }
</style>