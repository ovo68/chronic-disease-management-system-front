<template>
<sn-row-has-two-col :one="1" :two="23">
  <div slot="one-col" class="total-income">
    <sn-text text="合计收入(元)" :move-down="50" :move-right="160"/>
    <sn-text text="1200.00" font-color="#FFC71C" font-size="500px" :move-down="58" :move-right="160"/>
  </div>

  <div slot="two-col" class="total-income2">
    <sn-text text="应收合计(元)" :move-right="20" :move-down="25"/>
    <sn-text text="1400.00" font-color="#FFC71C" :move-right="20" :move-down="30"/>

    <sn-text text="医保(元)" :move-right="20" :move-down="45"/>
    <sn-text text="200.00" font-color="#FFC71C" :move-right="20" :move-down="50"/>

    <sn-text text="优惠合计(元)" :move-right="160" :move-down="-47"/>
    <sn-text text="200.00" font-color="#FFC71C" :move-right="160" :move-down="-42"/>

    <sn-text text="会员(元)" :move-right="160" :move-down="-27"/>
    <sn-text text="200.00" font-color="#FFC71C" :move-right="160" :move-down="-22"/>

    <sn-text text="实收合计(元)" :move-right="300" :move-down="-120"/>
    <sn-text text="200.00" font-color="#FFC71C" :move-right="300" :move-down="-115"/>

    <sn-text text="现金(元)" :move-right="300" :move-down="-100"/>
    <sn-text text="200.00" font-color="#FFC71C" :move-right="300" :move-down="-95"/>

    <sn-text text="支付宝(元)" :move-right="410" :move-down="-136"/>
    <sn-text text="200.00" font-color="#FFC71C" :move-right="410" :move-down="-131"/>

    <sn-text text="微信(元)" :move-right="510" :move-down="-171"/>
    <sn-text text="200.00" font-color="#FFC71C" :move-right="510" :move-down="-166"/>

    <sn-text text="银行卡(元)" :move-right="610" :move-down="-207"/>
    <sn-text text="200.00" font-color="#FFC71C" :move-right="610" :move-down="-202"/>
  </div>
</sn-row-has-two-col>
</template>

<script>
export default {
  name: "CollectFees",
  data(){
    return{}
  }
}
</script>

<style scoped>
.total-income{
  height: 150px;
  /*width: 100px;*/
  background-color:#FFFAE9;
}
.total-income2{
  height: 150px;
  /*width: 850px;*/
  background-color:#FFFAE9;
}
</style>