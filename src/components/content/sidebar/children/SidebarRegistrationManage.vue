<template>
  <!-- 4.挂号管理-->
  <el-submenu index="4">
    <template slot="title">
      <el-image :src="image4"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title">挂号管理</span>
      <el-menu-item index="1-1" @click="toNewAddRegistration">新增挂号</el-menu-item>
      <el-menu-item index="1-2" @click="toRegistrationRecord">挂号记录</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarRegistrationManage",
  data() {
    return {
      image4: require('@/assets/image/home/sidebar/home4.png'),
    }
  },
  methods: {
    //挂号管理
    //新增挂号
    toNewAddRegistration() {
      this.$router.push("/registrationManageRoot/newAddRegistration")
    },
    //挂号记录
    toRegistrationRecord() {
      this.$router.push("/registrationManageRoot/registrationRecord")
    },
  }
}
</script>

<style scoped>

</style>