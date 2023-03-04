<template>
  <!-- 社区板块-->
  <el-submenu index="4">
    <template slot="title">
      <el-image :src="image9"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title" style="font-size: 16px">社区板块</span>
      <el-menu-item index="1-1" @click="toDiseaseCommunication">病情交流</el-menu-item>
<!--      <el-menu-item index="1-2" @click="toHospitalRecommendations">医院建议</el-menu-item>-->
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SideBarCommunity",
  data() {
    return {
      image9: require('@/assets/image/home/sidebar/home9.png'),
    }
  },
  methods:{
    toDiseaseCommunication(){
      this.$router.push("/CommunityRoot/DiseaseCommunication")
    },
    toHospitalRecommendations(){
      this.$router.push("/CommunityRoot/HospitalRecommendations")
    }

  }
}
</script>

<style scoped>

</style>
