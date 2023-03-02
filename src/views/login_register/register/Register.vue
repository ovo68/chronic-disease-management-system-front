<template>
  <LoginOrRegister>
    <register-form slot="loginOrRegister"/>
  </LoginOrRegister>
</template>

<script>
import RegisterForm from "@/views/login_register/register/children/RegisterForm";
import LoginOrRegister from "@/views/login_register/LoginOrRegister";

export default {
  name: "register",
  components: {RegisterForm, LoginOrRegister}
}
</script>

<style scoped>
</style>