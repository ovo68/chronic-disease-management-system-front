<template>
  <!-- 医院建议-->
  <el-submenu index="5">
    <template slot="title">
      <el-image :src="image11"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title" style="font-size: 16px">医院建设</span>
      <el-menu-item index="1-1" @click="toHospitalRecommendations">医院建议</el-menu-item>
      <el-menu-item index="1-2" @click="toNewDrugVolunteer">新药志愿者</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SideBarRecommendation",
  data() {
    return {
      image11: require('@/assets/image/home/sidebar/home11.png'),
    }
  },
  methods: {
    toHospitalRecommendations() {
      this.$router.push("/RecommendationRoot/HospitalRecommendations")
    },
    toNewDrugVolunteer() {
      this.$router.push("/RecommendationRoot/NewDrugVolunteer")
    }
  }
  ,
  mounted() {
    this.$children[0].$parent = this.$parent
  }
}
</script>

<style scoped lang="less">


</style>
