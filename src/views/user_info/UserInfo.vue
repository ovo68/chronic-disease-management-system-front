<template>
  <div>
    <el-row :gutter="10" class="first-row">
      <el-col offset="3" :span="8" class="first-row-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人资料</span>
          </div>
        </el-card>
      </el-col>
      <el-col :offset="2" :span="8" class="second-row-item">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>修改密码</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
.box-card {
  height: 170px;
  margin-bottom: 20px;
}
</style>