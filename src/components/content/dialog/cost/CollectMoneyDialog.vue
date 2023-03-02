<template>
  <div class="text-right margin-bottom">
    <div class="to-flex">
      <el-button
          type="danger"
          plain @click="collectMoney">
        <sn-text text="收费"/>
      </el-button>
      <el-button
          type="primary"
          plain @click="returnUp">
        <sn-text text="返回"/>
      </el-button>
    </div>
    <el-dialog
        :close-on-click-modal="false"
        title="收费"
        class="text-left"
        :visible.sync="dialogFormVisible">
      <el-form :model="cost">
        <!-- 应收金额 -->
        <sn-flex-appoint-element :element-count="2">
          <el-form-item label="应收金额" :label-width="formLabelWidth" :slot="1">
            <el-input
                v-model="cost.needMoney"
                :disabled="true"
                autocomplete="off">
            </el-input>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 优惠金额 -->
        <sn-flex-appoint-element :element-count="4">
          <el-form-item label="优惠金额" :label-width="formLabelWidth" :slot="1">
            <el-input
                :disabled="true"
                v-model="cost.discountMoney"
                controls-position="right">
            </el-input>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>

          <!-- 折扣 -->
          <el-form-item label="折扣" :label-width="formLabelWidth" :slot="3">
            <el-input
                :disabled="true"
                v-model="cost.discount"
                controls-position="right">
            </el-input>
          </el-form-item>
          <sn-text text="折" :slot="4" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 医保支付 -->
        <sn-flex-appoint-element :element-count="2">
          <!-- 折后金额 -->
          <el-form-item label="折后金额" :label-width="formLabelWidth" :slot="1">
            <el-input
                :disabled="true"
                v-model="cost.afterDiscountMoney"
                controls-position="right">
            </el-input>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 实收金额 -->
        <sn-flex-appoint-element :element-count="4">
          <el-form-item label="医保支付" :label-width="formLabelWidth" :slot="1">
            <el-input-number
                @change="getMedicalInsurancePay"
                v-model="cost.medicalInsurancePay"
                controls-position="right"
                :min="0">
            </el-input-number>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>

          <el-form-item
              class="actual-money"
              label="收款"
              :label-width="formLabelWidth"
              :slot="3">
            <el-input-number
                @change="getActualMoney"
                v-model="cost.actualMoney"
                controls-position="right"
                :min="0">
            </el-input-number>
          </el-form-item>
          <sn-text text="元" :slot="4" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 找零 -->
        <sn-flex-appoint-element :element-count="2">
          <el-form-item label="找零" :label-width="formLabelWidth" :slot="1">
            <el-input v-model="change" :disabled="true" autocomplete="off"></el-input>
          </el-form-item>
          <sn-text text="元" :slot="2" class="move-down"/>
        </sn-flex-appoint-element>

        <!-- 支付方式 -->
        <el-form-item label="支付方式" :label-width="formLabelWidth">
          <el-radio v-model="cost.payMethod" label="1">现金</el-radio>
          <el-radio v-model="cost.payMethod" label="2">支付宝</el-radio>
          <el-radio v-model="cost.payMethod" label="3">微信</el-radio>
          <el-radio v-model="cost.payMethod" label="4">银行卡</el-radio>
          <el-radio v-model="cost.payMethod" label="5">会员卡</el-radio>
        </el-form-item>

        <!-- 收款备注 -->
        <el-form-item label="收款备注" :label-width="formLabelWidth">
          <sn-input
              @change="getRemark"
              class="move-up"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer to-flex">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ensure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

//导入收款api
import {chargeToNotCostOrder} from "@/api/cost_manage/costManage";

export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      change: '',
    }
  },
  methods: {
    returnUp() {
      history.back()
    },

    //获取备注
    getRemark(val) {
      this.$set(this.cost, 'remark', val)
    },

    //获取医保支付
    getMedicalInsurancePay(val) {
      if (this.cost.actualMoney === 0) {
        return
      }
      let costData = this.cost
      //折后金额
      let afterDiscountMoney = costData.afterDiscountMoney
      //设置找零
      this.change = (this.cost.actualMoney + costData.medicalInsurancePay - afterDiscountMoney).toFixed(2)
    },
    //获取实收金额
    getActualMoney(val) {

      let costData = this.cost
      //折后金额
      let afterDiscountMoney = costData.afterDiscountMoney
      //设置找零
      this.change = (val + costData.medicalInsurancePay - afterDiscountMoney).toFixed(2)
    },

    collectMoney() {
      this.$emit('collectionMoney')
    },
    ensure() {
      //判断是否填写收款金额
      if (this.change === '' || this.change < 0) {
        this.myUtils.showMessage(this, '！！请确认收款金额(*^▽^*)')
        return
      }
      //设置备注
      if (this.cost.remark === '') {
        this.$set(this.cost, 'remark', '无')
      }
      //设置找零
      this.$set(this.cost, 'change', this.change)
      //向父组件发射事件
      this.$emit('ensure', this.cost)
      //关闭弹出框
      this.dialogFormVisible = false
      //创建订单
      let order = {}
      //设置订单id
      this.$set(order, 'number', this.$route.params.number)
      //设置支付方式
      this.$set(order, 'payWay', {
        id: Number(this.cost.payMethod)
      })
      //设置医保支付
      this.$set(order, 'insuranceCost', this.cost.medicalInsurancePay)
      //设置优惠金额
      this.$set(order, 'discount', this.cost.discountMoney)
      //设置实收金额
      this.$set(order, 'income', this.cost.afterDiscountMoney - this.cost.medicalInsurancePay)
      //设置应收金额
      this.$set(order, 'receivable', this.cost.needMoney)
      //向后端发送请求更新订单
      chargeToNotCostOrder(order).then(res => {
        history.back()
        console.log('收费成功')
      })
    },
  },
  props: {
    cost: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.el-button {
  width: 100%;
}

.move-down {
  position: relative;
  top: 12px;
}

.move-up {
  position: relative;
  bottom: 10px;
}

.actual-money {
  margin-left: 53px;
}

/deep/ .el-dialog__body {
  padding-bottom: 0;
}
</style>