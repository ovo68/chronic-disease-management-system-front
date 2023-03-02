<template>
  <div class="margin-bottom-20">
    <!-- 点击出现弹出框的链接 -->
    <el-button
        @click="toFindVipConditionSet"
        type="danger"
        :underline="false"
        class="margin-right">
      <sn-text text="会员条件设置"/>
    </el-button>
    <!-- 弹出框 -->
    <el-dialog
        width="30%"
        :visible.sync="dialogVipConditionVisible">
      <!-- 标题 -->
      <sn-text
          class="text-left margin-bottom"
          text="会员条件设置"
          slot="title"
          :font-size="18"
          font-weight="bold"/>

      <div>
        <!--会员折扣功能 -->
        <sn-row-has-two-col :left="20" :right="4" class="to-flex">
          <sn-text text="会员折扣功能 :" class="margin-right margin-bottom" :move-down="2" slot="one-col"/>
          <el-switch
              v-model="discountStatus"
              slot="two-col"/>
        </sn-row-has-two-col>
        <!-- 会员升级功能 -->
        <sn-row-has-two-col :left="20" :right="4" class="to-flex margin-top-20">
          <sn-text text="会员升级功能 :" class="margin-right" :move-down="2" slot="one-col"/>
          <el-switch v-model="upgradeStatus" slot="two-col"/>
        </sn-row-has-two-col>
        <!-- 消费积分比例 -->
        <sn-row-has-four-col :one="6" :two="14" :three="0" :four="4" class="to-flex margin-top">
          <sn-text
              text="消费积分比例 :"
              slot="one-col"
              :move-down="23"/>
          <div slot="two-col" class="to-flex">
            <sn-text
                :move-down="22"
                text="人民币 : 积分 = "
                class="margin-right"/>
            <sn-text
                text="1"
                :move-down="22"
                font-color="orange"
                class="margin-right"/>
            <sn-text
                text=":"
                :move-down="17"
                class="margin-right"
                font-color="orange"
                font-weight="bold"
                :font-size="20"/>
            <sn-input
                :input-value-from-parent="vipConditionDialogData.expenseRatio"
                slot="three-col"
                width="90px"/>
          </div>
          <el-checkbox v-model="expenseRatio" slot="four-col" class="move-down">
            <sn-text text="开启"/>
          </el-checkbox>
        </sn-row-has-four-col>
        <!--充值积分比例 -->
        <sn-row-has-four-col :one="6" :two="14" :three="0" :four="4" class="to-flex margin-top">
          <sn-text
              text="充值积分比例 :"
              slot="one-col"
              :move-down="23"/>
          <div slot="two-col" class="to-flex">
            <sn-text
                :move-down="22"
                text="人民币 : 积分 = "
                class="margin-right"/>
            <sn-text
                text="1"
                :move-down="22"
                font-color="orange"
                class="margin-right"/>
            <sn-text
                text=":"
                :move-down="17"
                class="margin-right"
                font-color="orange"
                font-weight="bold"
                :font-size="20"/>
            <sn-input
                :input-value-from-parent="vipConditionDialogData.payRatio"
                slot="three-col"
                width="90px"/>
          </div>
          <el-checkbox v-model="payRatio" slot="four-col" class="move-down">
            <sn-text text="开启"/>
          </el-checkbox>
        </sn-row-has-four-col>
        <!--单次积分上限 -->
        <div class="to-flex margin-top">
          <sn-text
              :move-down="22"
              text="单次积分上限 :"
              class="margin-right"/>
          <sn-input
              :input-value-from-parent="vipConditionDialogData.singleCeilPoint"/>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVipConditionVisible = false">取 消</el-button>
        <el-button type="primary" @click="toUpdateVipConditionSet">
          <sn-text text="确定"/>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {findVipConditionSet} from "@/api/vip_manage/vipManage";

export default {
  name: "VipConditionDialog",
  data() {
    return {
      dialogVipConditionVisible: false,
      expenseRatio: true,
      payRatio: true,
      vipConditionDialogData: {},
      discountStatus: true,
      upgradeStatus: true
    }
  }, methods: {
    toFindVipConditionSet() {
      findVipConditionSet().then(res => {
        this.dialogVipConditionVisible = true
        this.vipConditionDialogData = res.data
      })
    },
    toUpdateVipConditionSet() {
      this.dialogNewAddVipVisible = false
    }
  },
  watch: {
    vipConditionDialogData(val) {

      if (val.discountStatus === 0) {
        this.discountStatus = false
      } else {
        this.discountStatus = true
      }

      if (val.upgradeStatus === 0) {
        this.upgradeStatus = false
      } else {
        this.upgradeStatus = true
      }

      if (val.expenseRatio === 0) {
        this.expenseRatio = false
      } else {
        this.expenseRatio = true
      }

      if (val.payRatio === 0) {
        this.payRatio = false
      } else {
        this.payRatio = true
      }
    }
  },
  computed: {
    name() {
      return this.data;
    }
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 20px;
}
</style>