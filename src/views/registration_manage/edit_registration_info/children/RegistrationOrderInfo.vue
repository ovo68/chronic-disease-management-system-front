<template>
  <sn-card-no-title class="margin-bottom-20">
    <div slot="content">
      <sn-title title="订单信息" :title-style="{'color':'#1C79F7'}" class="margin-bottom-20"/>
      <div class="to-flex">
        <sn-div-has-border class="order-info-item">
          <sn-text text="订单编号:" slot="left"/>
          <sn-text text="123456879" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="order-info-item">
          <sn-text text="应收金额(元):" slot="left"/>
          <sn-text text="60.00" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="order-info-item">
          <sn-text text="优惠金额(元):" slot="left"/>
          <sn-text text="20.00" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="order-info-item">
          <sn-text text="医保支付(元):" slot="left"/>
          <sn-text text="30.00" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="order-info-item">
          <sn-text text="实收金额(元):" slot="left"/>
          <sn-text text="10.00" slot="right"/>
        </sn-div-has-border>
      </div>
      <div class="to-flex">
        <sn-div-has-border class="order-info-item">
          <sn-text text="支付方式:" slot="left"/>
          <sn-text text="微信支付" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="order-info-item">
          <sn-text text="找零(元):" slot="left"/>
          <sn-text text="60.00" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="cost-date">
          <sn-text text="收费日期:" slot="left"/>
          <sn-text text="2019-12-11 10:45:12" slot="right"/>
        </sn-div-has-border>
        <sn-div-has-border class="order-info-item">
          <sn-text text="收费员:" slot="left"/>
          <sn-text text="宁姚" slot="right"/>
        </sn-div-has-border>
      </div>
    </div>
  </sn-card-no-title>
</template>

<script>
export default {
  name: 'RegistrationOrderInfo'
}
</script>

<style scoped>
.order-info-item {
  width: 180px;
}

.cost-date {
  width: 382px;
}
</style>