<template>
  <!-- 1.经营概况-->
  <el-submenu index="1">
    <template slot="title" class="item-image">
      <el-image :src="image1"/>
    </template>
    <el-menu-item class="menu-item" @click="toManageCondition">经营概况</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarManageCondition",
  data() {
    return {
      image1: require('@/assets/image/home/sidebar/home1.png'),
    }
  },
  methods: {
    toManageCondition() {
      this.$router.push('/manageConditionRoot')
    }
  }
}
</script>

<style scoped>

</style>
