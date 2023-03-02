<template>
  <sn-row-has-two-col :left="22" :right="2">
    <div slot="one-col">
      <el-button type="primary" plain>
        <sn-text text="未就诊"/>
      </el-button>
      <el-button type="primary" plain>
        <sn-text text="已就诊"/>
      </el-button>
      <el-button type="primary" plain>
        <sn-text text="已退号"/>
      </el-button>
    </div>
    <el-button type="primary" plain slot="two-col" @click="toNewAddRegistration">
      <sn-text text="新增挂号"/>
    </el-button>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "RegistrationRecordTitle",
  methods: {
    toNewAddRegistration() {
      this.$router.push("/registrationManageRoot/newAddRegistration")
    },
  }
}
</script>

<style scoped>
</style>