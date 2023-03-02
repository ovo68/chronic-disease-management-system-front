<template>
  <!-- 6.收费管理-->
  <el-submenu index="6">
    <template slot="title">
      <el-image :src="image6"/>
    </template>
    <el-menu-item @click="toCostManage">收费管理</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarCostManage",
  data() {
    return {
      image6: require('@/assets/image/home/sidebar/home6.png'),
    }
  },
  methods: {
    //2 收费管理
    toCostManage() {
      this.$router.push("/costManageRoot")
    },
  }
}
</script>

<style scoped>

</style>