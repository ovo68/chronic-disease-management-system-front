<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogEditVipVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="编辑"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="30%"
        :visible.sync="dialogEditVipVisible">
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
          <sn-text
              text="会员折扣功能
              :" class="margin-right margin-bottom text-left"
              :move-down="2" slot="one-col"/>
          <el-switch v-model="vipDiscountFunction" slot="two-col"/>
        </sn-row-has-two-col>
        <!-- 会员升级功能 -->
        <sn-row-has-two-col :left="20" :right="4" class="to-flex margin-top-20">
          <sn-text
              text="会员升级功能 :"
              class="margin-right text-left"
              :move-down="2"
              slot="one-col"/>
          <el-switch v-model="vipUpLevelFunction" slot="two-col"/>
        </sn-row-has-two-col>
        <!--消费积分比例 -->
        <sn-row-has-four-col :one="6" :two="14" :three="0" :four="4" class="to-flex margin-top">
          <sn-text
              text="消费积分比例 :"
              slot="one-col"
              :move-down="20"/>
          <div slot="two-col" class="to-flex">
            <sn-text
                :move-down="19"
                text="人民币 : 积分 = "
                class="margin-right"/>
            <sn-text
                text="1"
                :move-down="19"
                font-color="orange"
                class="margin-right"/>
            <sn-text
                text=":"
                :move-down="17"
                class="margin-right"
                font-color="orange"
                font-weight="bold"
                :font-size="20"/>
            <sn-input slot="three-col" width="90px"/>
          </div>
          <el-checkbox v-model="open" slot="four-col" class="move-down">
            <sn-text text="开启"/>
          </el-checkbox>
        </sn-row-has-four-col>
        <!--充值积分比例 -->
        <sn-row-has-four-col :one="6" :two="14" :three="0" :four="4" class="to-flex margin-top">
          <sn-text
              text="充值积分比例 :"
              slot="one-col"
              :move-down="18"/>
          <div slot="two-col" class="to-flex">
            <sn-text
                :move-down="18"
                text="人民币 : 积分 = "
                class="margin-right"/>
            <sn-text
                text="1"
                :move-down="18"
                font-color="orange"
                class="margin-right"/>
            <sn-text
                text=":"
                :move-down="16"
                class="margin-right"
                font-color="orange"
                font-weight="bold"
                :font-size="20"/>
            <sn-input slot="three-col" width="90px"/>
          </div>
          <el-checkbox v-model="open" slot="four-col" class="move-down">
            <sn-text text="开启"/>
          </el-checkbox>
        </sn-row-has-four-col>
        <!--单次积分上限 -->
        <div class="to-flex margin-top">
          <sn-text
              :move-down="18"
              text="单次积分上限 :"
              class="margin-right"/>
          <sn-input input-value-from-parent="1000"/>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogEditVipVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogEditVipVisible = false">
          <sn-text text="确定"/>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "EditVipDialog",
  data() {
    return {
      dialogEditVipVisible: false,
      vipDiscountFunction: true,
      vipUpLevelFunction: true,
      open: true
    }
  },
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 19px;
}
</style>