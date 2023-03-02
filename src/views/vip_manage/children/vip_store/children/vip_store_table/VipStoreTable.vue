<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="vipNumber" label="卡号"/>
      <el-table-column prop="vipType" label="会员类型">
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
          <el-link type="primary" :underline="false" @click="toSickInfo(scope.row.id)">
            <sn-text :text="scope.row.name"/>
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="手机号码" width="110"/>
      <el-table-column prop="accumulativeCost" label="累计消费(元)"/>
      <el-table-column prop="balance" label="余额(元)"/>
      <el-table-column prop="accumulativeBalance" label="累计储值(元)"/>

      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <div class="to-flex">
            <!-- 充值弹出框 -->
            <balance-recharge-dialog
                @toPayRechargeInfo="toAddBalance"
                :sick="{
                  id:scope.row.id,
                  integral:scope.row.integral,
                  name:scope.row.name,
                  vipNumber:scope.row.vipNumber,
                  balance:scope.row.balance,
                }"

            />

            <!-- 退款弹出框-->
            <refund-dialog
                @refundBalanceInfo="toReduceBalance"
                :sick="{
                  id:scope.row.id,
                  integral:scope.row.integral,
                  name:scope.row.name,
                  vipNumber:scope.row.vipNumber,
                  balance:scope.row.balance,
                }"
            />

            <!-- 充值/退款记录 -->
            <recharge-and-refund-record-dialog
                :vip-number="scope.row.vipNumber"
                :name="scope.row.name"
                :balance="scope.row.balance"
                :sid="scope.row.id"
            />
          </div>
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
import BalanceRechargeDialog
  from "@/views/vip_manage/children/vip_store/children/vip_store_table/children/BalanceRechargeDialog";
import RefundDialog
  from "@/views/vip_manage/children/vip_store/children/vip_store_table/children/RefundDialog";
import RechargeAndRefundRecordDialog
  from "@/views/vip_manage/children/vip_store/children/vip_store_table/children/RechargeAndRefundRecordDialog";
import {updateSickChange} from "@/api/vip_manage/vipManage";

export default {
  name: "VipStoreTable",
  components: {
    BalanceRechargeDialog,
    RefundDialog,
    RechargeAndRefundRecordDialog
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
    toSickInfo(id) {
      this.$router.push('/vipManageRoot/sickInfo/' + id)
    },
    toAddBalance(data) {
      updateSickChange(data)
      this.$router.go(0)
    },
    toReduceBalance(data){
      console.log(data)
      updateSickChange(data)
      this.$router.go(0)
    }
  },

}
</script>

<style scoped>
/deep/ .el-dialog__body {
  padding-top: 0;
  padding-bottom: 0;
}
</style>