<template>
  <sn-row-has-two-col
      :left="22"
      :right="2"
      class="to-flex move-down">
    <div class="to-flex" slot="one-col">
      <sn-text
          :font-size="20"
          font-weight="bold"
          text="订单详情-已退费-退费金额:"
          class="margin-right"
          :move-down="5"/>
      <sn-text :number="150.25"
               class="margin-right"
               font-color="orange"
               font-weight="bolder"
               :font-size="30"/>
      <sn-text
          :font-size="20"
          font-weight="bold"
          text="元"
          :move-down="5"/>
    </div>
    <div class="to-flex" slot="two-col">
      <el-button
          @click="returnUp"
          type="primary" plain>
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "HasReturnCostOrderTitle",
  methods: {
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