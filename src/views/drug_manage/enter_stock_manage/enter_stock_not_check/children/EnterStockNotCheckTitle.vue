<template>
  <sn-row-has-two-col :left="17" :right="7">
    <sn-text
        slot="one-col"
        text="编辑入库信息"
        :move-down="10"
        font-weight="bold"
        :font-size="20"/>
    <div slot="two-col" class="pass-check-button">
      <el-button
          type="primary"
          plain
          @click="returnEnterStockInfo">
        <sn-text text="审核通过"/>
      </el-button>
      <el-button
          type="primary"
          plain
          @click="notPassCheck">
        <sn-text text="审核不通过"/>
      </el-button>
      <el-button
          type="primary"
          plain
          @click="returnEnterStockInfo">
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "EnterStockNotCheckTitle",
  methods: {
    returnEnterStockInfo() {
      history.back()
    },
    notPassCheck(){

    }
  },
}
</script>

<style scoped>
.el-button{
  width: 100px;
}
.pass-check-button{
  position: relative;
  left: 30px;
}
</style>