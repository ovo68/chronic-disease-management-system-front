<template>
  <sn-row-has-two-col :left="18" :right="6" class="margin-bottom-21">
    <div slot="one-col">
     <sn-text text="订单详情--已收费" font-size="200px" font-color="#409EFF" :move-down="9"/>
    </div>
    <div slot="two-col" class="move-right">
      <el-button type="primary" plain>
        <sn-text text="退费"/>
      </el-button>
      <el-button type="primary" plain>
        <sn-text text="打印收费单"/>
      </el-button>
      <el-button type="primary" @click="toReturnSickManage" plain>
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
name: "viewDetailsNavigation",
  methods: {
    toReturnSickManage() {
      this.$router.push("/home/statisticsTable/costStatistics/16")
    }
  },
}
</script>

<style scoped>
.move-right{
  position: relative;
  left: 50px;
}
</style>