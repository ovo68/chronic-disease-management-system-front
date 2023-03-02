<template>
  <!-- 社区板块-->
  <el-submenu index="9">
    <template slot="title">
      <el-image :src="image9"/>
    </template>
    <el-menu-item-group>
      <span slot="title" class="out-title">社区板块</span>
      <el-menu-item index="1-1" @click="toBQJL">病情交流</el-menu-item>
      <el-menu-item index="1-2" @click="toYYJY">医院建议</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>

<script>
export default {
  name: "SideBarTalk",
  data() {
    return {
      image9: require('@/assets/image/home/sidebar/home9.png'),
    }
  },
  methods:{
    toBQJL(){

    },
    toYYJY(){

    }

  }
}
</script>

<style scoped>

</style>