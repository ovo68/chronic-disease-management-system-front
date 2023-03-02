<template>
  <!-- 2.工作台-->
  <el-submenu index="2">
    <template slot="title">
      <el-image :src="image2"/>
    </template>
    <el-menu-item @click="toWorkSpace">工作台</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarWorkspace",
  data() {
    return {
      image2: require('@/assets/image/home/sidebar/home2.png'),
    }
  },
  methods: {
    //10 工作空间
    toWorkSpace() {
      this.$router.push("/workSpaceRoot")
    },
  }
}
</script>

<style scoped>

</style>