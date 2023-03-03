<template>
  <div class="header-bar">
    <span class="home-title">{{ getHomeTitle }}</span>
    <el-dropdown>
          <span class="el-dropdown-link">
            <el-image :src="headImg"/>
            <div class="username">
              {{ getUsername }}
            </div>
         </span>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/UserInfoRoot/UserInfo" replace>
          <el-dropdown-item>
            <span>账号资料</span>
          </el-dropdown-item>
        </router-link>
        <router-link to="/UserInfoRoot/UserInfo" replace>
          <el-dropdown-item>
            <span>修改密码</span>
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item>
          <span>在线客服</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <span>消息通知</span>
        </el-dropdown-item>
        <router-link to="/" replace>
          <el-dropdown-item>
            <span>退出系统</span>
          </el-dropdown-item>
        </router-link>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      headImg: require('@/assets/image/user/cyq.jpg'),
    };
  },
  computed: {
    getHomeTitle() {
      return this.$store.state.homeTitle
    },
    getUsername() {
      return this.$store.state.user.username
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.header-bar {
  height: 100%;
}

.home-title {
  font-size: 20px;
  margin-left: 30px;
  font-weight: bold;
}

.el-image {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-left: 30px;
}

.el-dropdown {
  border-left: 2px solid #F2F2F2;
  height: 100%;
  float: right;
}

.username {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  bottom: 13px;
}

.el-dropdown-menu__item {
  width: 100px;
  padding-left: 20px;

  span {
    position: relative;
    left: 20px;
  }
}

</style>
