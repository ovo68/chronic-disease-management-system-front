<template>
  <sn-row-has-two-col :left="17" :right="7">
    <sn-text
        slot="one-col"
        text="入库详情-审核未通过"
        :move-down="10"
        font-weight="bold"
        :font-size="20"/>
    <div slot="two-col" class="pass-check-button">
      <el-button
          type="primary"
          plain
          @click="returnEnterStockInfo">
        <sn-text text="再次入库"/>
      </el-button>
      <el-button
          type="primary"
          plain
          @click="deleteEnterStockRecord">
        <sn-text text="删除"/>
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
  name: "EnterStockNotPassCheckTitle",
  methods: {
    returnEnterStockInfo() {
      history.back()
    },
    deleteEnterStockRecord(){

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