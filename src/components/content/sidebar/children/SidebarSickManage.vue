<template>
  <!-- 7.患者管理-->
  <el-submenu index="7">
    <template slot="title">
      <el-image :src="image7"/>
    </template>
    <el-menu-item @click="toSinkPersonManage">患者管理</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarSickManage",
  data() {
    return {
      image7: require('@/assets/image/home/sidebar/home7.png'),
    }
  },
  methods: {
    //患者管理
    toSinkPersonManage() {
      this.$router.push("/sickManageRoot/sickManage")
    },
  }
}
</script>

<style scoped>

</style>