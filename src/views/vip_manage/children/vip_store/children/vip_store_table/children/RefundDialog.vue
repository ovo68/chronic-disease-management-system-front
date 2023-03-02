<template>
  <div>
    <!-- 链接-->
    <el-link
        @click="dialogRefundVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="退款"/>
    </el-link>
    <!-- 弹出框-->
    <el-dialog
        width="25%"
        :visible.sync="dialogRefundVisible">
      <!-- 标题-->
      <sn-text
          class="text-left"
          text="退款"
          slot="title"
          :font-size="18"
          font-weight="bold"/>
      <!-- 退款信息-->
      <div>
        <!-- 卡号信息 -->
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text :number="sick.vipNumber"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text :text="sick.name"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="余额 :" class="margin-right"/>
          <sn-text :number="sick.balance" font-color="orange" font-weight="bold"/>
        </div>

        <!-- 退款金额 -->
        <sn-input
            ref="transAmountInput"
            class="text-left margin-top ">
          <sn-must-text
              text="退狂金额 (元)"
              slot="title"/>
        </sn-input>

        <!-- 退款方式-->
        <sn-must-text
            text="退款方式"
            class="margin-top margin-bottom text-left"/>
        <!-- 单选框 -->
        <div class="to-flex margin-bottom">
          <el-radio v-model="refundMethod" label="1" class="to-flex">
            <sn-text text="现金"/>
          </el-radio>
          <el-radio v-model="refundMethod" label="2" class="to-flex">
            <sn-text text="支付宝"/>
          </el-radio>
          <el-radio v-model="refundMethod" label="3" class="to-flex">
            <sn-text text="微信"/>
          </el-radio>
          <el-radio v-model="refundMethod" label="4" class="to-flex">
            <sn-text text="银行卡"/>
          </el-radio>
        </div>
        <!-- 备注 -->
        <sn-input
            ref="content"
            :input-style="{'height':'80px'}"
            class="margin-top text-left">
          <sn-text text="备注" slot="title"/>
        </sn-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRefundVisible = false">取 消</el-button>
        <el-button type="primary" @click="reduceBalance">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "RefundDialog",
  props: {
    sick:Object
  },
  data() {
    return {
      dialogRefundVisible: false,
      refundMethod: '1',
      refundBalanceInfo:{},
    }
  }, methods: {
    //退款
    reduceBalance() {
       //获取参数
      let transAmount = this.$refs.transAmountInput.inputValue
      let content = this.$refs.content.inputValue
      //2:减少余额,integer
      let changeType = 0
      //2:余额变动,integer
      let changeStatus = 1

      //支付方式
      //let refundMethod = this.refundMethod

      //判断关键参数是否为空
      if (transAmount === undefined) {
        this.myUtils.showMessage(this, "请输入需要退款的余额")
        return
      }

      //保存
      this.$set(this.refundBalanceInfo, 'transAmount', transAmount)
      this.$set(this.refundBalanceInfo, 'content', content)
      this.$set(this.refundBalanceInfo, 'changeType', changeType)
      this.$set(this.refundBalanceInfo, 'changeStatus', changeStatus)
      //this.$set(this.refundBalanceInfo, 'payWay', refundMethod)
      this.$set(this.refundBalanceInfo, 'sick', this.sick)

      //发射给父组件
      this.$emit("refundBalanceInfo", this.refundBalanceInfo)
      this.dialogRefundVisible = false
    }
  }
}
</script>

<style scoped>

</style>