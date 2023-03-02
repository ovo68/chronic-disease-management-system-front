<template>
  <!-- 8.药品管理-->
  <el-submenu index="8">
    <template slot="title">
      <el-image :src="image8"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title">药品管理</span>
      <el-menu-item index="1-1" @click="toChangeDrugPrice">药品调价</el-menu-item>
      <el-menu-item index="1-2" @click="toStockCheck">库存盘点</el-menu-item>
      <el-menu-item index="1-3" @click="toStockManage">库存管理</el-menu-item>
      <el-menu-item index="1-4" @click="toOutStockManage">出库管理</el-menu-item>
      <el-menu-item index="1-5" @click="toEnterStockManage">入库管理</el-menu-item>
      <el-menu-item index="1-6" @click="toDrugInfoManage">药品信息维护</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarDrugManage",
  data() {
    return {
      image8: require('@/assets/image/home/sidebar/home8.png'),
    }
  },
  methods: {
    //药品调价
    toChangeDrugPrice() {
      this.$router.push("/drugManageRoot/drugChangePriceRecord")
    },
    //库存盘点
    toStockCheck() {
      this.$router.push("/drugManageRoot/stockCheckRecord")
    },
    //库存管理
    toStockManage() {
      this.$router.push("/drugManageRoot/stockManageCondition")
    },
    //出库管理
    toOutStockManage() {
      this.$router.push("/drugManageRoot/outStockInfo")
    },
    //入库管理
    toEnterStockManage() {
      this.$router.push("/drugManageRoot/enterStockInfo")
    },
    //药品信息维护
    toDrugInfoManage() {
      this.$router.push("/drugManageRoot/drugInfoShow")
    },
  },
}
</script>

<style scoped>

</style>