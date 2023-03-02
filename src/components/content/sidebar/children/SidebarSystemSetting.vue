<template>
  <!-- 11.系统设置-->
  <el-submenu index="11">
    <template slot="title">
      <el-image :src="image11"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title">系统设置</span>
      <el-menu-item index="1-1" @click="toBaseSetting">基础设置</el-menu-item>
      <el-menu-item index="1-2" @click="toCostSetting">费用设置</el-menu-item>
      <el-menu-item index="1-3" @click="TemplateManage">模板维护</el-menu-item>
      <el-menu-item index="1-4" @click="toSupplierManage">供应商管理</el-menu-item>
      <el-menu-item index="1-5" @click="toCheckItemSetting">检查项目设置</el-menu-item>
      <el-menu-item index="1-6" @click="toEmployeeManage">员工管理</el-menu-item>
      <el-menu-item index="1-7" @click="toDictionaryTableManage">字典表维护</el-menu-item>
      <el-menu-item index="1-8" @click="toClinicInfoManage">诊所信息维护</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarSystemSetting",
  data() {
    return {
      image11: require('@/assets/image/home/sidebar/home11.png'),
    }
  },
  methods: {
    //基础设置
    toBaseSetting() {
      this.$router.push("/systemSettingRoot/baseSetting")
    },
    //费用设置
    toCostSetting() {
      this.$router.push("/systemSettingRoot/costSetting")
    },
    //模板维护
    TemplateManage() {
      this.$router.push("/systemSettingRoot/templateManage")
    },
    //供应商管理
    toSupplierManage() {
      this.$router.push("/systemSettingRoot/supplierManage")
    },
    // 检查项目设置
    toCheckItemSetting() {
      this.$router.push("/systemSettingRoot/checkItemSetting")
    },
    //员工管理
    toEmployeeManage() {
      this.$router.push("/systemSettingRoot/employeeManage")
    },
    //字典表管理
    toDictionaryTableManage() {
      this.$router.push("/systemSettingRoot/dictionaryTableManage")
    },
    // 诊所信息管理
    toClinicInfoManage() {
      this.$router.push("/systemSettingRoot/clinicInfoManage")
    },
  },
}
</script>

<style scoped>

</style>