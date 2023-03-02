<template>
  <div class="login-or-register">
    <el-row :gutter="0" class="login-or-register-content">
      <el-col :md="4" class="login-or-register-left">
      </el-col>
      <el-col :md="16" class="login-or-register-center">
        <slot name="loginOrRegister"></slot>
      </el-col>
      <el-col :md="4" class="login-or-register-right">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "LoginOrRegister"
}
</script>

<style scoped>
.login-or-register {
  background-color: #666EE8;
  height: 100%;
  width: 100%;
}

.login-or-register-content, .login-or-register-left {
  height: 100%;
}

.login-or-register-content {
  display: flex;
  align-items: center;
}
</style>