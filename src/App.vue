<template>
  <div id="app">
    <el-container v-if="showModules">
      <el-aside width="50px">
        <sidebar/>
      </el-aside>
      <el-container>
        <el-header class="header-bar">
          <header-bar/>
          <el-divider></el-divider>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
    <router-view name="loginOrRegister"/>
  </div>

</template>
<script>
import Sidebar from "@/components/content/sidebar/Sidebar";
import HeaderBar from "@/components/content/header_bar/HeaderBar";

export default {
  name: 'app',
  components: {
    Sidebar,
    HeaderBar
  },
  data() {
    return {
      showModules: true
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.path === '/login' || to.path === '/register') {
        this.showModules = false
      } else {
        this.showModules = true
      }
    }
  },
}
</script>
<style lang="less">
@import "~@/assets/css/base.css";

#app {
  height: 100%;
}

.home-content {
  background-color: pink;
  margin-left: 10px;
}

.side-bar {
  height: 100%;
  background-color: #002140;
  position: fixed;
}

//顶部导航
.el-header {
  line-height: 75px/1.25;
}

//分割线
.el-divider {
  margin-top: 0;
}

.el-main {
  padding-top: 0;
  padding-bottom: 0;
}

</style>
