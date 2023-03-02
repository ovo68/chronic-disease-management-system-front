<template>
  <div>
    <!-- 点击出现弹出框的链接 -->
    <el-link
        @click="dialogVipGradeRecordRecordVisible = true"
        type="primary"
        :underline="false"
        class="margin-right">
      <sn-text text="等级变更记录"/>
    </el-link>
    <!-- 弹出框 -->
    <el-dialog
        width="50%"
        :visible.sync="dialogVipGradeRecordRecordVisible">
      <!-- 标题 -->
      <div slot="title">
        <sn-text
            class="text-left"
            text="等级变更记录"
            :font-size="18"
            font-weight="bold"/>
        <div class="to-flex margin-top">
          <sn-text text="会员卡号 :" class="margin-right"/>
          <sn-text :number="vipNumber" class="margin-right-20"/>
          <sn-text text="会员姓名 :" class="margin-right"/>
          <sn-text :text="sname" class="margin-right-20"/>
        </div>
      </div>
      <!-- 信息 -->
      <sn-table
          :is-has-border="true"
          :table-data="vipGradeRecordRecordTableData"
          :table-title="vipGradeRecordRecordTableTitle"/>

      <div slot="footer" class="dialog-footer margin-top">
        <el-button type="primary" @click="dialogVipGradeRecordRecordVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {findChangeRecordBySid} from "@/api/vip_manage/vipManage";

export default {
  name: "VipChangeGradeRecordDialog",
  props: {
    vipNumber: String,
    sname: String,
    sid:Number,
  },
  data() {
    return {
      dialogVipGradeRecordRecordVisible: false,
      vipGradeRecordRecordTableTitle: [
        {
          prop: 'changeTime',
          label: '变动时间',
          cellWidth: '160'
        },
        {
          prop: 'changeType',
          label: '变更类型'
        },
        {
          prop: 'sick.name',
          label: '会员名称'
        },
        {
          prop: 'operator.name',
          label: '操作员'
        },
      ],
      vipGradeRecordRecordTableData: [
      ]
    }
  },
  methods: {
    toFindChangeRecordBySid() {
      let sid = this.sid
      findChangeRecordBySid(sid, 0).then(res => {
        console.log(res.data)
        this.vipGradeRecordRecordTableData = res.data
      })
    }
  }, created() {
    this.toFindChangeRecordBySid()
  }
}
</script>

<style scoped>

</style>