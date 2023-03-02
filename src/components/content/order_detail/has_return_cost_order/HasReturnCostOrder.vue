<!-- 已退费记录  -->
<template>
  <div>
    <sn-card-with-title>
      <has-return-cost-order-title slot="title"/>
      <div slot="content">
        <!-- 退费项目明细 -->
        <item-info-in-order-detail cost-record-totle="退费明细"/>
        <el-divider/>
        <!-- 订单明细 -->
        <order-info-in-order-detail/>
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
import HasReturnCostOrderTitle
  from "@/components/content/order_detail/has_return_cost_order/children/HasReturnCostOrderTitle";
import ItemInfoInOrderDetail from "@/components/content/order_detail/children/ItemInfoInOrderDetail";
import OrderInfoInOrderDetail from "@/components/content/order_detail/children/OrderInfoInOrderDetail";
import SickInfoInOrderDetail from "@/components/content/order_detail/children/SickInfoInOrderDetail";
import MeetDoctorInfoInOrderDetail from "@/components/content/order_detail/children/MeetDoctorInfoInOrderDetail";


export default {
  name: "HasReturnCostOrder",
  components: {
    MeetDoctorInfoInOrderDetail,
    SickInfoInOrderDetail,
    OrderInfoInOrderDetail,
    ItemInfoInOrderDetail,
    HasReturnCostOrderTitle
  }
}
</script>

<style scoped>

</style>