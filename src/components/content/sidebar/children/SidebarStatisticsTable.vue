<template>
  <!-- 10.统计报表-->
  <el-submenu index="10">
    <template slot="title">
      <el-image :src="image10"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title">统计报表</span>
      <el-menu-item index="1-1" @click="toDrugStatistics">药品统计</el-menu-item>
      <el-menu-item index="1-2" @click="toCheckItemStatistics">检查项目统计</el-menu-item>
      <el-menu-item index="1-3" @click="toSickStatistics">患者统计</el-menu-item>
      <el-menu-item index="1-4" @click="toCostStatistics">收费统计</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarStatisticsTable",
  data() {
    return {
      image10: require('@/assets/image/home/sidebar/home10.png'),
    }
  },
  methods: {
    //药品统计
    toDrugStatistics() {
      this.$router.push("/statisticsTableRoot/drugStatistics")
    },
    //检查项目统计
    toCheckItemStatistics(){
      this.$router.push("/statisticsTableRoot/checkItemStatistics")
    },
    //患者统计
    toSickStatistics(){
      this.$router.push("/statisticsTableRoot/sickStatistics")
    },
    //收费统计
    toCostStatistics(){
      this.$router.push("/statisticsTableRoot/costStatistics")
    }
  },
}
</script>

<style scoped>

</style>