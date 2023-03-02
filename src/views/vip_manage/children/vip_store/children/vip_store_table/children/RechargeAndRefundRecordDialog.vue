<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogRecordVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="充值/退款记录"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="50%"
        :visible.sync="dialogRecordVisible">
      <!-- 标题 -->
      <div slot="title">
        <sn-text
            class="text-left"
            text="充值/退款记录"
            :font-size="18"
            font-weight="bold"/>
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text :number="vipNumber" class="margin-right-20"/>
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text :text="name" class="margin-right-20"/>
          <sn-text text="余额 :" class="margin-right"/>
          <sn-text :number="balance" font-weight="bold" font-color="orange"/>
        </div>
      </div>
      <!-- 信息 -->
      <sn-table
          :is-has-border="true"
          :table-data="rechargeAndRefundRecordTableData"
          :table-title="rechargeAndRefundRecordTableTitle"/>

      <div slot="footer" class="dialog-footer margin-top">
        <el-button type="primary" @click="dialogRecordVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {findChangeRecordBySid} from "@/api/vip_manage/vipManage";

export default {
  name: "RechargeAndRefundRecordDialog",
  props: {
    vipNumber: Number,
    name: String,
    balance: Number,
    sid: Number,
  },
  data() {
    return {
      dialogRecordVisible: false,
      rechargeAndRefundRecordTableTitle: [
        {
          prop: 'changeTime',
          label: '交易时间',
          cellWidth: '160'
        },
        {
          prop: 'changeType',
          label: '交易类型(0:退款 1:充值)',
          cellWidth: '125'
        },
        {
          prop: 'transAmount',
          label: '交易金额(元)'
        },
        {
          prop: 'donateAmount',
          label: '赠送金额(元)'
        },
        {
          prop: 'operator.name',
          label: '操作员'
        },
      ],
      rechargeAndRefundRecordTableData: []
    }
  }, methods: {
    toFindChangeRecordBySid() {
      let sid = this.sid
      findChangeRecordBySid(sid, 1).then(res => {
        this.rechargeAndRefundRecordTableData = res.data
      })
    }
  }, created() {
    this.toFindChangeRecordBySid()
  }
}
</script>

<style scoped>

</style>