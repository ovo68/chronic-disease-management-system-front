<template>
  <form class="register-form">
    <!-- 2.1 标题-->
    <form-title :title="title" slot="form-title" class="title"></form-title>
    <!-- 2.2 内容-->
    <div slot="form-content">
      <el-input placeholder="请输入用户名" v-model="username" class="input">
        <i slot="prefix" class="el-input__icon el-icon-user-solid my-icon"></i>
      </el-input>
      <el-input placeholder="请输入手机号" v-model="phone" class="input">
        <i slot="prefix" class="el-input__icon el-icon-user-solid my-icon"></i>
      </el-input>
      <el-input placeholder="请输入密码" v-model="password" show-password class="input">
        <i slot="prefix" class="el-input__icon el-icon-lock my-icon"></i>
      </el-input>
      <el-input placeholder="请重复密码" v-model="repeatPassword" show-password class="input">
        <i slot="prefix" class="el-input__icon el-icon-lock my-icon"></i>
      </el-input>
      <el-input placeholder="请输入医生码" v-model="yourDoctorCode" class="input">
        <i slot="prefix" class="el-input__icon el-icon-key my-icon"></i>
      </el-input>
    </div>
    <!-- 2.3 提交-->
    <div slot="form-submit">
      <div>
        <el-button type="primary" class="button" @click="registerDoctor">注册</el-button>
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
import {post} from "@/api/request";
import axios from 'axios'

export default {
  name: "RegisterForm",
  components: {
    Form, FormTitle
  },
  data() {
    return {
      title: '申请医生账号',
      username: '茶艺师',
      phone: new Date().valueOf().toString().substring(2, 12),
      password: '123',
      repeatPassword: '123',
      doctorCode: '123456',
      yourDoctorCode: '',
    }
  },
  methods: {
    userLogin() {
      this.$router.replace("/")
    },
    registerDoctor() {
      if (this.doctorCode !== this.yourDoctorCode) {
        this.$message.error("医生码错误")
      } else {
        // 注册逻辑
        if (this.username === '' || this.phone === ''
            || this.password === '' || this.repeatPassword === ''
            || this.yourDoctorCode === '' || this.password !== this.repeatPassword) {
          this.$message.error("请完整输入信息")
          return
        }

        post("/doctor/register", {
          name: this.username,
          phone: this.phone,
          password: this.password,
        }).then(data => {
          console.log(data)
          if (data.code === 10001) {
            this.$message.success("注册成功")
          }else {
            this.$message.error(data.msg)
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.register-form {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: #666 0 0 10px; //四周设置阴影
  height: 700/1.25px;
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

.title {
  margin-bottom: 30px;
}
</style>
