<template>
  <sn-row-has-two-col
      :left="20"
      :right="4"
      class="to-flex">
    <sn-text
        slot="one-col"
        :font-size="20"
        font-weight="bold"
        text="订单详情-已收费"
        class="margin-right"
        :move-down="5"/>
    <div class="to-flex" slot="two-col">
      <el-button type="primary" plain class="margin-right" @click="returnMoney">
        <sn-text text="退费"/>
      </el-button>
      <el-button type="primary" plain @click="returnUp">
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "HasCostOrderTitle",
  methods: {
    returnMoney() {

    },
    returnUp() {
      history.back()
    }
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}
</style>