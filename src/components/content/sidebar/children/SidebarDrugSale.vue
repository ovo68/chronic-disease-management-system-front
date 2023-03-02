<template>
  <!-- 5.药品零售-->
  <el-submenu index="5">
    <template slot="title">
      <el-image :src="image5"/>
    </template>
    <el-menu-item @click="toDrugSale">药品零售</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: "SidebarDrugSale",
  data() {
    return {
      image5: require('@/assets/image/home/sidebar/home5.png'),
    }
  },
  methods: {
    //药品零售
    toDrugSale() {
      this.$router.push("/drugSaleRoot")
    },
  }
}
</script>

<style scoped>

</style>