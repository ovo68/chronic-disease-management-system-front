<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogChangeIntegralVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="变动积分"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="25%"
        :visible.sync="dialogChangeIntegralVisible">
      <!-- 标题 -->
      <sn-text
          class="text-left"
          text="变动积分"
          slot="title"
          :font-size="18"
          font-weight="bold"/>
      <div>
        <!-- 个人基本信息 -->
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text :number="sick.vipNumber"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text :text="sick.name"/>
        </div>
        <div class="to-flex margin-top">
          <sn-text text="目前积分 :" class="margin-right"/>
          <sn-text :number="sick.integral" font-color="orange" font-weight="bold"/>
        </div>

        <!-- 变动积分按钮 -->
        <sn-show-by-button-no-card
            :button-names="integralButtonNames"
            @getCurrentClickButtonName="getCurrentClickButtonName"
            :button-count="3"
            :content-count="3"
            class="margin-top">
          <sn-text slot="buttonName0" text="增加积分"/>
          <sn-text slot="buttonName1" text="扣减积分"/>
          <sn-text slot="buttonName2" text="积分清零"/>

          <!-- 增加积分 -->
          <div slot="content0" class="margin-top text-left">
            <sn-input ref="addIntergralInput">
              <sn-must-text slot="title" text="增加数量"/>
            </sn-input>
            <sn-input
                ref="addRemarkInput"
                :input-style="{'height':'80px'}"
                class="margin-top">
              <sn-text slot="title" text="备注"/>
            </sn-input>
          </div>
          <!-- 扣减积分 -->
          <div slot="content1" class="margin-top text-left">
            <sn-input ref="reduceIntergralInput">
              <sn-must-text slot="title" text="扣减数量"/>
            </sn-input>
            <sn-input
                ref="reduceRemarkInput"
                :input-style="{'height':'80px'}"
                class="margin-top">
              <sn-text slot="title" text="备注"/>
            </sn-input>
          </div>
          <!-- 积分清零 -->
          <div slot="content2" class="margin-top text-left">
            <sn-input
                ref="resetRemarkInput"
                :input-style="{'height':'80px'}"
                class="margin-top">
              <sn-text slot="title" text="备注"/>
            </sn-input>
            <div class="to-flex margin-top">
              <sn-text
                  text="*"
                  class="margin-right"
                  font-color="pink"
                  :font-size="20"/>
              <sn-text text="清零后无法恢复,请谨慎操作"/>
            </div>
          </div>
        </sn-show-by-button-no-card>

      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChangeIntegralVisible = false">取 消</el-button>

        <!-- 确定增加积分按钮 -->
        <el-button type="primary"
                   v-if="currentClickButtonName === '增加积分'"
                   @click="toAddIntegral">
          <sn-text text="确定"/>
        </el-button>
        <!-- 确定扣减积分按钮 -->
        <el-button type="primary"
                   v-if="currentClickButtonName === '扣减积分'"
                   @click="toReduceIntegral">
          <sn-text text="确定"/>
        </el-button>
        <!-- 确定清空积分按钮 -->
        <el-button type="primary"
                   v-if="currentClickButtonName === '积分清零'"
                   @click="toResetIntegral">
          <sn-text text="确定"/>
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ChangeIntegral",
  props: {
    sick: Object,
    operator: Object
  },
  data() {
    return {
      dialogChangeIntegralVisible: false,
      integralButtonNames: ['增加积分', '扣减积分', '积分清零'],
      currentClickButtonName: '增加积分',
      addIntegralRecordInfo: {},
      reduceIntegralRecordInfo: {},
      resetIntegralRecordInfo: {}
    }
  },
  methods: {
    getCurrentClickButtonName(buttonName) {
      this.currentClickButtonName = buttonName
    },
    //增加积分
    toAddIntegral() {
      //获取参数
      let savePoint = this.$refs.addIntergralInput.inputValue
      let content = this.$refs.addRemarkInput.inputValue
      //2:增加积分,integer
      let changeType = 2
      //2:积分变动,integer
      let changeStatus = 2

      //判断关键参数是否为空
      if (savePoint === undefined) {
        this.myUtils.showMessage(this, "请输入需要增加的积分")
        return
      }
      //保存
      this.$set(this.addIntegralRecordInfo, 'savePoint', savePoint)
      this.$set(this.addIntegralRecordInfo, 'content', content)
      this.$set(this.addIntegralRecordInfo, 'changeType', changeType)
      this.$set(this.addIntegralRecordInfo, 'changeStatus', changeStatus)
      this.$set(this.addIntegralRecordInfo, 'sick', this.sick)

      //发射给父组件
      this.$emit("addIntegralRecordInfo", this.addIntegralRecordInfo)
      this.dialogChangeIntegralVisible = false
    },
    //减少积分
    toReduceIntegral() {
      // console.log(this.sick)
      //获取参数
      let savePoint = this.$refs.reduceIntergralInput.inputValue
      let content = this.$refs.reduceRemarkInput.inputValue
      //2:减少积分,integer
      let changeType = 1
      //2:积分变动,integer
      let changeStatus = 2

      //判断关键参数是否为空
      if (savePoint === undefined) {
        this.myUtils.showMessage(this, "请输入需要减少的积分")
        return
      }
      //保存
      this.$set(this.reduceIntegralRecordInfo, 'savePoint', savePoint)
      this.$set(this.reduceIntegralRecordInfo, 'content', content)
      this.$set(this.reduceIntegralRecordInfo, 'changeType', changeType)
      this.$set(this.reduceIntegralRecordInfo, 'changeStatus', changeStatus)
      this.$set(this.reduceIntegralRecordInfo, 'sick', this.sick)

      //发射给父组件
      this.$emit("reduceIntegralRecordInfo", this.reduceIntegralRecordInfo)
      this.dialogChangeIntegralVisible = false
    },
    //重置积分
    toResetIntegral() {
      // console.log(this.sick)
      //获取参数
      let content = this.$refs.resetRemarkInput.inputValue
      //2:重置积分,integer
      let changeType = 0
      //2:积分变动,integer
      let changeStatus = 2

      //保存
      this.$set(this.resetIntegralRecordInfo, 'content', content)
      this.$set(this.resetIntegralRecordInfo, 'changeType', changeType)
      this.$set(this.resetIntegralRecordInfo, 'changeStatus', changeStatus)
      this.$set(this.resetIntegralRecordInfo, 'sick', this.sick)

      //发射给父组件
      this.$emit("resetIntegralRecordInfo", this.resetIntegralRecordInfo)
      this.dialogChangeIntegralVisible = false
    }
  },
}
</script>

<style scoped>

</style>