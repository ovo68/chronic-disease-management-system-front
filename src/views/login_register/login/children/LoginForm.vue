<template>
  <el-row class="login-form">
    <!-- 1.图片-->
    <el-col :md="14" class="image">
      <el-image :src="imageView" :fit="fit"/>
    </el-col>
    <!-- 2.表单内容-->
    <el-col :md="10">
      <form>
        <!-- 2.1 标题-->
        <form-title :title="title" slot="form-title"></form-title>
        <!-- 2.2 内容-->
        <div slot="form-content">
          <el-input v-model="username" placeholder="请输入用户名" class="input">
            <i slot="prefix" class="el-input__icon el-icon-user-solid my-icon"></i>
          </el-input>
          <el-input v-model="password" placeholder="请输入密码" show-password class="input">
            <i slot="prefix" class="el-input__icon el-icon-lock my-icon"></i>
          </el-input>
<!--          <el-checkbox v-model="checked" class="checkbox">1个月内免登录</el-checkbox>-->
<!--          <a href="#">忘记密码</a>-->
        </div>
        <!-- 2.3 提交-->
        <div slot="form-submit">
          <div>
            <el-button type="primary" class="button" @click="userLogin">登录</el-button>
          </div>
          <div>
            <el-button plain class="button" @click="registerUser">注册</el-button>
          </div>
        </div>
      </form>
    </el-col>
  </el-row>
</template>

<script>
import Form from "@/components/common/sn/form/Form";
import FormTitle from "@/components/common/sn/form/FormTitle";

export default {
  name: "LoginForm",
  components: {
    Form, FormTitle
  },
  data() {
    return {
      username: '',
      password: '',
      checked: true,
      title: '登录系统',
      //设置图片
      imageView: require('@/assets/image/login/login图标.svg'),
      fit: 'fill'
    }
  },
  methods:{
    registerUser(){
      this.$router.replace("/register")
    },
    userLogin(){
      // TODO 发送登录请求

      this.$store.commit(this.mutationsTypes.CHANGE_HOME_TITLE,'经营概况')
      this.$router.replace("/manageConditionRoot")
    }
  }
}
</script>


<style scoped lang="less">
.login-form {
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: #666 0 0 10px; //四周设置阴影
  height: 656/1.25px;
  width: 100%;
}

.input /deep/ input {
  height: 55/1.25px;
  width: 350/1.25px;
  background-color: #F0F1FD;
  margin-bottom: 20px;
}

.checkbox {
  margin-bottom: 10px;
  margin-right: 110px;
}

.title {
  margin-bottom: 40px/1.25;
}

.image {
  margin-left: 160/1.25px;
  margin-right: 120/1.25px;
  width: 500/1.25px;
  height: 360/1.25px;
}

.button {
  text-align: center;
  width: 346/1.25px;
  margin-bottom: 10px;
}

.my-icon {
  color: #666EE8;
  font-size: 20px;
  position: absolute;
  bottom: 7.5px;
}
</style>
