<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="vipNumber" label="卡号" width="200"/>
      <el-table-column label="会员类型">
        <template slot-scope="scope">
          {{ scope.row.vip.name }}
        </template>
      </el-table-column>
      <el-table-column prop="level" label="会员等级">
        <template slot-scope="scope">
          <sn-text
              class="vip"
              :text="'VIP'+scope.row.vip.level"/>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="会员姓名">
        <template slot-scope="scope">
          <el-link
              @click="toSinkInfo(scope.row.id)"
              type="primary"
              :underline="false">
            <sn-text :text="scope.row.name"/>
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="手机号码" width="115"/>
      <el-table-column prop="accumulativeCost" label="累计消费(元)"/>
      <el-table-column prop="balance" label="储值余额(元)"/>
      <el-table-column prop="accumulativeBalance" label="累计储值(元)"/>
      <el-table-column prop="integral" label="积分"/>
      <el-table-column prop="activateDate" label="开卡时间" width="100"/>
      <el-table-column prop="dueDate" label="到期时间" width="100"/>

      <el-table-column prop="status" label="会员状态">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.vip.status.value === 1"/>
        </template>
      </el-table-column>


      <el-table-column label="操作" width="120">
        <template slot-scope="scope">

          <sn-dialog-left :content-item-count="5">

            <sn-text text="操作" slot="title"/>

            <!-- 充值弹出框-->
            <balance-recharge-dialog
                @toPayRechargeInfo="toAddBalance"
                :sick="{
                  id:scope.row.id,
                  integral:scope.row.integral,
                  name:scope.row.name,
                  vipNumber:scope.row.vipNumber,
                  balance:scope.row.balance
                }"
                slot="itemName0"/>
            <!-- 变动积分弹出框-->
            <change-integral-dialog
                @addIntegralRecordInfo='toAddIntegralRecordInfo'
                @reduceIntegralRecordInfo='toReduceIntegralRecordInfo'
                @resetIntegralRecordInfo='toResetIntegralRecordInfo'
                :sick="{
                  id:scope.row.id,
                  integral:scope.row.integral,
                  name:scope.row.name,
                  vipNumber:scope.row.vipNumber
                }"
                slot="itemName1"/>
            <!-- 退款弹出框-->
            <refund-dialog
                @@refundBalanceInfo="toReduceBalance"
                :sick="{
                  id:scope.row.id,
                  integral:scope.row.integral,
                  name:scope.row.name,
                  vipNumber:scope.row.vipNumber
                }"
                slot="itemName2"/>
            <!--  会员等级变更记录 -->
            <vip-change-grade-record-dialog
                :vip-number="scope.row.vipNumber"
                :sname="scope.row.name"
                :sid="scope.row.id"
                slot="itemName3"/>
            <!-- 会员设置等级 -->
            <vip-set-grade-dialog
                :sick="{
                  id:scope.row.id,
                  integral:scope.row.integral,
                  name:scope.row.name,
                  vipNumber:scope.row.vipNumber
                }"
                slot="itemName4"/>

          </sn-dialog-left>
        </template>
      </el-table-column>
    </el-table>

    <sn-page
        :table-data="tableData"
        slot="two-col"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
import RefundDialog
  from "@/views/vip_manage/children/vip_store/children/vip_store_table/children/RefundDialog";
import BalanceRechargeDialog
  from "@/views/vip_manage/children/vip_store/children/vip_store_table/children/BalanceRechargeDialog";
import ChangeIntegralDialog
  from "@/views/vip_manage/children/vip_integral/children/vip_integral_table/children/ChangeIntegralDialog";
import VipChangeGradeRecordDialog
  from "@/views/vip_manage/children/vip_list/children/dialog/VipChangeGradeRecordDialog";
import VipSetGradeDialog from "@/views/vip_manage/children/vip_list/children/dialog/VipSetGradeDialog";
import * as vipManage from "@/api/vip_manage/vipManage"
import {updateSickChange} from "@/api/vip_manage/vipManage";

export default {
  name: "StockManageTable",
  components: {
    RefundDialog,
    BalanceRechargeDialog,
    ChangeIntegralDialog,
    VipChangeGradeRecordDialog,
    VipSetGradeDialog
  },
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
    toSinkInfo(id) {
      this.$router.push('/vipManageRoot/sickInfo/' + id)
    },
    //增加积分
    toAddIntegralRecordInfo(data) {
      updateSickChange(data)
      this.$router.go(0)
    },
    //减少积分
    toReduceIntegralRecordInfo(data) {
      updateSickChange(data)
      this.$router.go(0)
    },
    //积分清零
    toResetIntegralRecordInfo(data) {
      updateSickChange(data)
      this.$router.go(0)
    },
    //充值
    toAddBalance(data) {
      updateSickChange(data)
      this.$router.go(0)
    },
    //退款
    toReduceBalance(data) {
      updateSickChange(data)
      this.$router.go(0)
    }
    /*getVipSet(){
      this.$refs.vipSet
    }*/
  },


}
</script>

<style scoped>
</style>