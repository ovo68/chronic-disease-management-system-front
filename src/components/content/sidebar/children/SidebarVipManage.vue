<template>
  <!-- 9.会员管理-->
  <el-submenu index="9">
    <template slot="title">
      <el-image :src="image9"/>
    </template>
    <el-menu-item @click="toVipManage">会员管理</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarVipManage",
  data() {
    return {
      image9: require('@/assets/image/home/sidebar/home9.png'),
    }
  },
  methods: {
    //9 会员管理
    toVipManage() {
      this.$router.push("/vipManageRoot/vipManage")
    },
  }
}
</script>

<style scoped>

</style>