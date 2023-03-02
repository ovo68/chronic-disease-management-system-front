<template>
  <form class="register-form">
    <!-- 2.1 标题-->
    <form-title :title="title" slot="form-title" class="title"></form-title>
    <!-- 2.2 内容-->
    <div slot="form-content">
      <el-input placeholder="请输入用户名" v-model="username" class="input">
        <i slot="prefix" class="el-input__icon el-icon-user-solid my-icon"></i>
      </el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password class="input">
        <i slot="prefix" class="el-input__icon el-icon-lock my-icon"></i>
      </el-input>
      <el-input placeholder="请重复密码" v-model="repeatPassword" show-password class="input">
        <i slot="prefix" class="el-input__icon el-icon-lock my-icon"></i>
      </el-input>
    </div>
    <!-- 2.3 提交-->
    <div slot="form-submit">
      <div>
        <el-button type="primary" class="button">注册</el-button>
      </div>
      <div>
        <el-button plain class="button" @click="userLogin">已有账号，去登录</el-button>
      </div>
    </div>
  </form>
</template>

<script>
import Form from "@/components/common/sn/form/Form";
import FormTitle from "@/components/common/sn/form/FormTitle";

export default {
  name: "RegisterForm",
  components: {
    Form, FormTitle
  },
  data() {
    return {
      title: '申请诊所账号',
      username: '',
      password: '',
      repeatPassword: ''
    }
  },
  methods: {
    userLogin() {
      this.$router.replace("/")
    }
  }
}
</script>

<style scoped lang="less">
.register-form {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: #666 0 0 10px; //四周设置阴影
  height: 656/1.25px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 400px;
  padding-top: 80px;
}

.input /deep/ input {
  height: 55/1.25px;
  width: 350/1.25px;
  background-color: #F0F1FD;
  margin-bottom: 20px;
}

.my-icon {
  color: #666EE8;
  font-size: 20px;
  position: absolute;
  bottom: 7.5px;
}
.button {
  text-align: center;
  width: 346/1.25px;
  margin-bottom: 10px;
}
.title{
  margin-bottom: 30px;
}
</style>