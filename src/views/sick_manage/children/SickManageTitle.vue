<template>
  <div>
    <el-button
        type="primary"
        plain @click="newAddSick">
      <sn-text text="新增患者"/>
    </el-button>
  </div>
</template>

<script>
export default {
  name: "SickManageTitle",
  methods: {
    newAddSick() {
      this.$router.push('/sickManageRoot/newAddSick')
    }
  },
}
</script>

<style scoped>
.el-button{
  width: 100%;
}

</style>