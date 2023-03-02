<!-- 订单退费-->
<template>
  <div>
    <sn-card-with-title>
      <not-cost-order-title slot="title"/>
      <div slot="content">
        <!-- 收费项目明细 -->
        <can-change-order-item-info/>
        <el-divider/>
        <!-- 人员明细 -->
        <sick-info-in-order-detail/>
        <el-divider/>
        <!-- 接诊信息-->
        <meet-doctor-info-in-order-detail/>
      </div>
    </sn-card-with-title>
  </div>
</template>

<script>
import NotCostOrderTitle from "@/components/content/order_detail/not_cost_order/children/NotCostOrderTitle";
import SickInfoInOrderDetail from "@/components/content/order_detail/children/SickInfoInOrderDetail";
import MeetDoctorInfoInOrderDetail from "@/components/content/order_detail/children/MeetDoctorInfoInOrderDetail";
import CanChangeOrderItemInfo
  from "@/components/content/order_detail/order_return_cost/children/can_change_order_item_info/CanChangeOrderItemInfo";

export default {
  name: "OrderReturnCost",
  components: {
    NotCostOrderTitle,
    MeetDoctorInfoInOrderDetail,
    SickInfoInOrderDetail,
    CanChangeOrderItemInfo
  }
}
</script>

<style scoped>

</style>