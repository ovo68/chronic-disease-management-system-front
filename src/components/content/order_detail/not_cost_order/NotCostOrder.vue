<!-- 未收费记录-->
<template>
  <div>
    <sn-card-with-title v-if="Object.keys(notCostOrderInfo).length !== 0">
      <not-cost-order-title
          v-if="receivableMoney !== 0"
          :order-info="notCostOrderInfo"
          :receivable-money="receivableMoney"
          slot="title"/>
      <div slot="content">
        <!-- 收费项目明细 -->
        <item-info-in-order-detail
            ref="itemInfoComponent"
            @getPrescriptionData="getPrescriptionData"
            @getCheckItemData="getCheckItemData"
            :order-info-detail="notCostOrderInfo"
            class="margin-bottom-20"
            cost-record-title="收费明细"/>
        <!-- 人员明细 -->
        <sick-info-in-order-detail
            :sick-info="notCostOrderInfo.sick"/>
        <el-divider/>
        <!-- 接诊信息-->
        <meet-doctor-info-in-order-detail
            :meet-doctor-info="notCostOrderInfo"/>
      </div>
    </sn-card-with-title>
  </div>
</template>

<script>
import NotCostOrderTitle from "@/components/content/order_detail/not_cost_order/children/NotCostOrderTitle";
import ItemInfoInOrderDetail from "@/components/content/order_detail/children/ItemInfoInOrderDetail";
import SickInfoInOrderDetail from "@/components/content/order_detail/children/SickInfoInOrderDetail";
import MeetDoctorInfoInOrderDetail from "@/components/content/order_detail/children/MeetDoctorInfoInOrderDetail";

import {queryWaitCostOrderInfoByNumber} from "@/api/cost_manage/costManage";

export default {
  name: "NotCostOrder",

  data() {
    return {
      notCostOrderInfo: {},
      receivableMoney: 0
    }
  },

  components: {
    NotCostOrderTitle,
    MeetDoctorInfoInOrderDetail,
    SickInfoInOrderDetail,
    ItemInfoInOrderDetail,
  },
  methods: {
    getPrescriptionData(prescriptionData) {
      for (let item of prescriptionData) {
        this.receivableMoney = Number(this.receivableMoney) + Number(item.salePrice)
      }
      this.receivableMoney = Math.floor(this.receivableMoney * 100) / 100
    },

    getCheckItemData(checkItemData) {
      //获取检查项目应收金额
      for (let item of checkItemData) {
        this.receivableMoney = Number(this.receivableMoney) + Number(item.salePrice)
      }

      this.receivableMoney = Math.floor(this.receivableMoney * 100) / 100
    },

    //通过订单编号来查询未收费订单
    toQueryWaitCostOrderInfoByNumber() {
      queryWaitCostOrderInfoByNumber(this.$route.params.number).then(res => {
        this.notCostOrderInfo = res.data
      })
    }
  },
  created() {
    this.toQueryWaitCostOrderInfoByNumber()
  }
}
</script>

<style scoped>

</style>