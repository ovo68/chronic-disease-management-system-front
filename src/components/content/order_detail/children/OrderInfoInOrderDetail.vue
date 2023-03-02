<template>
  <div>
    <!-- 标题 -->
    <div class="to-flex">
      <i class="el-icon-document-checked my-icon"/>
      <sn-text
          font-color="#666EE8"
          :font-size="25"
          font-weight="bold"
          class="margin-bottom-20 "
          text="订单信息"/>
    </div>
    <!--  信息 -->
    <div>
      <sn-row-has-many-div :div-count="1">
        <div :slot="1" class="to-flex order-id">
          <sn-text text="订单编号 :" class="margin-right"/>
          <sn-text text="5613216514"/>
        </div>
      </sn-row-has-many-div>
      <sn-row-has-many-div :div-count="4">
        <div :slot="1" class="to-flex">
          <sn-text text="应收金额 :" class="margin-right"/>
          <sn-text text="300.00" class="margin-right"/>
          <sn-text text="元"/>
        </div>
        <div :slot="2" class="to-flex">
          <sn-text text="实收金额 :" class="margin-right"/>
          <sn-text text="300.00" class="margin-right sn-yellow" font-weight="bold"/>
          <sn-text text="元"/>
        </div>
        <div :slot="3" class="to-flex">
          <sn-text text="优惠金额 :" class="margin-right"/>
          <sn-text text="300.00" class="margin-right"/>
          <sn-text text="元"/>
        </div>
        <div :slot="4" class="to-flex">
          <sn-text text="医保支付 :" class="margin-right"/>
          <sn-text text="300.00" class="margin-right"/>
          <sn-text text="元"/>
        </div>
      </sn-row-has-many-div>
      <sn-row-has-many-div :div-count="4">
        <div :slot="1" class="to-flex">
          <sn-text text="支付方式 :" class="margin-right"/>
          <sn-text text="微信"/>
        </div>
        <div :slot="2" class="to-flex">
          <sn-text text="找零 :" class="margin-right"/>
          <sn-text text="0.00" class="margin-right"/>
          <sn-text text="元"/>
        </div>
        <div :slot="3" class="to-flex">
          <sn-text text="收费日期 :" class="margin-right"/>
          <sn-text text="2019-12-11 10:45:12"/>
        </div>
        <div :slot="4" class="to-flex">
          <sn-text text="收费员 :" class="margin-right"/>
          <sn-text text="陈平安"/>
        </div>
      </sn-row-has-many-div>
    </div>
  </div>


</template>

<script>
export default {
  name: "OrderInfoInOrderDetail",
}
</script>

<style scoped>
.my-icon {
  font-size: 20px;
  color: #666EE8;
  position: relative;
  top: 5px;
  margin-right: 5px;
}

.order-id {
  justify-content: center;
}
</style>