<template>
  <div class="margin-bottom-20">
    <!-- 点击出现弹出框的链接 -->
    <el-button
        @click="dialogNewAddVipVisible = true"
        type="success"
        :underline="false"
        class="margin-right">
      <sn-text text="新增会员类型"/>
    </el-button>
    <!-- 弹出框 -->
    <el-dialog
        width="40%"
        :visible.sync="dialogNewAddVipVisible">
      <!-- 标题 -->
      <sn-text
          class="text-left margin-bottom"
          text="新增会员类型"
          slot="title"
          :font-size="18"
          font-weight="bold"/>

      <div>
        <!-- 第一行 -->
        <sn-row-has-two-col :left="12" :right="12" class="margin-bottom">
          <div slot="one-col">
            <sn-input ref="levelInput">
              <sn-must-text text="会员等级" slot="title"/>
            </sn-input>
          </div>
          <div slot="two-col">
            <sn-input ref="nameInput">
              <sn-must-text text="会员名称" slot="title"/>
            </sn-input>
          </div>
        </sn-row-has-two-col>
        <!-- 第二行 -->
        <sn-row-has-two-col :left="12" :right="12" class="margin-bottom">
          <div slot="one-col">
            <sn-input ref="discountInput">
              <sn-must-text text="会员折扣" slot="title"/>
            </sn-input>
          </div>

          <div slot="two-col">
            <sn-input ref="floorIntegralInput">
              <sn-must-text text="最低消费积分" slot="title"/>
            </sn-input>
          </div>
        </sn-row-has-two-col>
        <!-- 第三行 -->
        <sn-row-has-two-col :left="12" :right="12" class="margin-bottom">
          <div slot="one-col">
            <sn-input ref="upgradeIntegralInput">
              <sn-must-text text="升级所用积分" slot="title"/>
            </sn-input>
          </div>

          <div slot="two-col" class="to-flex move-down">
            <sn-text text="状态 :" class="margin-right" :move-down="7"/>
            <el-switch v-model="vipStatus"
                       :active-value="1"
                       :inactive-value="0"
                       class="move-down-little"/>
          </div>
        </sn-row-has-two-col>
        <!-- 第四行 -->
        <sn-row-has-two-col :left="24" :right="0">
          <div slot="one-col">
            <sn-input ref="remark">
              <sn-text text="备注" slot="title"/>
            </sn-input>
          </div>
        </sn-row-has-two-col>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogNewAddVipVisible = false">取 消</el-button>
        <el-button type="primary" @click="newAddVips">
          <sn-text text="确定"/>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {addVips} from "@/api/vip_manage/vipManage";

export default {
  name: "NewAddVipTypeDialog",
  data() {
    return {
      dialogNewAddVipVisible: false,
      vipStatus: true,
      NewAddVipInfo: {},
      statusData: {
        '0': '停用',
        '1': '启用'
      }
    }
  },
  methods: {
    newAddVips() {
      let level = this.$refs.levelInput.inputValue
      let name = this.$refs.nameInput.inputValue
      let discount = this.$refs.discountInput.inputValue
      let floorIntegral = this.$refs.floorIntegralInput.inputValue
      let upgradeIntegral = this.$refs.upgradeIntegralInput.inputValue
      let remark = this.$refs.remark.inputValue

      let statusDescription = ''
      if (this.vipStatus === 0) {
        statusDescription = '停用'
      } else {
        statusDescription = '启用'
      }

      let status = {
        value: this.vipStatus,
        description: statusDescription
      }


      if (level === undefined || isNaN(level)) {
        this.myUtils.showMessage(this, '请正确填写会员等级o.o')
        return
      } else if (name === undefined) {
        this.myUtils.showMessage(this, '请填写会员姓名o.o')
        return
      } else if (discount === undefined || isNaN(discount)) {
        this.myUtils.showMessage(this, '请填写会员折扣o.o')
        return
      } else if (floorIntegral === undefined || isNaN(floorIntegral)) {
        this.myUtils.showMessage(this, '请填写会员最低消费积分o.o')
        return
      } else if (upgradeIntegral === undefined || isNaN(upgradeIntegral)) {
        this.myUtils.showMessage(this, '请填写会员升级所用积分o.o')
        return
      }

      this.$set(this.NewAddVipInfo, 'level', level)
      this.$set(this.NewAddVipInfo, 'name', name)
      this.$set(this.NewAddVipInfo, 'discount', discount)
      this.$set(this.NewAddVipInfo, 'floorIntegral', floorIntegral)
      this.$set(this.NewAddVipInfo, 'upgradeIntegral', upgradeIntegral)
      this.$set(this.NewAddVipInfo, 'remark', remark)
      this.$set(this.NewAddVipInfo, 'status', status)


      this.$emit("addVipsInfo", this.NewAddVipInfo)
      this.dialogNewAddVipVisible = false


    }
  }
}
</script>

<style scoped>
.move-down {
  position: relative;
  top: 35px;
}

.move-down-little {
  position: relative;
  top: 5px;
}
</style>