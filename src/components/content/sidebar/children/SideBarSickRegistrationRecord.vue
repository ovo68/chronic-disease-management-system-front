<template>
  <!-- 病人挂号记录-->
  <el-submenu index="3">
    <template slot="title">
      <el-image :src="image3"/>
    </template>
    <el-menu-item index="1-1" @click="toSickRegistrationRecord">我的就诊</el-menu-item>

  </el-submenu>
</template>

<script>
export default {
  name: "SideBarSickRegistrationRecord",
  data() {
    return {
      image3: require('@/assets/image/home/sidebar/home3.png'),
    }
  },
  methods: {
    toSickRegistrationRecord() {
      this.$router.push("/SickRegistrationRecordRoot/SickRegistrationRecord")
    }
  }
}
</script>

<style scoped>

</style>
