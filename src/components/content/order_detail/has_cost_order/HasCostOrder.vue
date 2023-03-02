<!-- 已收费记录 -->
<template>
  <div>
    <sn-card-with-title v-if="Object.keys(hasCostOrderInfo).length !== 0">
      <has-cost-order-title slot="title"/>
      <div slot="content">
        <!-- 收费项目明细 -->
        <item-info-in-order-detail
            ref="itemInfoComponent"
            :order-info-detail="hasCostOrderInfo"
            class="margin-bottom-20"
            cost-record-title="收费明细"/>
        <!-- 人员明细 -->
        <sick-info-in-order-detail
            :sick-info="hasCostOrderInfo.sick"/>
        <el-divider/>
        <!-- 接诊信息-->
        <meet-doctor-info-in-order-detail
            :meet-doctor-info="hasCostOrderInfo"/>
      </div>
    </sn-card-with-title>
  </div>
</template>

<script>

import HasCostOrderTitle from "@/components/content/order_detail/has_cost_order/children/HasCostOrderTitle";
import ItemInfoInOrderDetail from "@/components/content/order_detail/children/ItemInfoInOrderDetail";
import OrderInfoInOrderDetail from "@/components/content/order_detail/children/OrderInfoInOrderDetail";
import SickInfoInOrderDetail from "@/components/content/order_detail/children/SickInfoInOrderDetail";
import MeetDoctorInfoInOrderDetail from "@/components/content/order_detail/children/MeetDoctorInfoInOrderDetail";

import {queryHasCostOrderInfo} from "@/api/cost_manage/costManage";

export default {
  name: "HasCostOrder",
  components: {
    MeetDoctorInfoInOrderDetail,
    SickInfoInOrderDetail,
    OrderInfoInOrderDetail,
    ItemInfoInOrderDetail,
    HasCostOrderTitle
  },
  data() {
    return {
      hasCostOrderInfo: {},
    }
  },
  methods: {
    //通过订单编号来查询已收费订单
    toQueryHasCostOrderInfo() {
      queryHasCostOrderInfo(this.$route.params.number).then(res => {
        this.hasCostOrderInfo = res.data
      })
    }
  },
  created() {
    this.toQueryHasCostOrderInfo()
  }
}
</script>

<style scoped>

</style>