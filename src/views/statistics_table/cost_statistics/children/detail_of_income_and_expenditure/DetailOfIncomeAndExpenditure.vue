<template>
  <div>
    <detail-expenditure-navigation></detail-expenditure-navigation>
    <collect-fees></collect-fees>
    <statement-of-incom-and-expenditure :table-data="statementofincomandexpendituredata"></statement-of-incom-and-expenditure>
  </div>
</template>

<script>
import StatementOfIncomAndExpenditure
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/children/StatementOfIncomAndExpenditure";
import DetailExpenditureNavigation
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/children/DetailExpenditureNavigation";
import CollectFees
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/children/CollectFees";
export default {
name: "DetailOfIncomeAndExpenditure",
  components:{
    DetailExpenditureNavigation,
    CollectFees,
    StatementOfIncomAndExpenditure

  },
  data(){
  return{
    statementofincomandexpendituredata:[
      {
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        // operation:'查看详情'

      },
      {
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },
      {
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },
      {
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },
      {
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
       // operation:'查看详情'

      },
      {
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },
      {
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },{
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },
      {
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },{
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },{
        id:'1',
        ordertatus:'已收费',
        orderType:'处方开立',
        orderId:'1155667',
        name:'阿刁',
        desk:'经病科',
        doctors:'wkd',
        echoChargeack:'210.00',
        discounts:'5.00',
        trueChargeack:'200.00',
        medicare:'50.00',
        clubCard:'16.00',
        cash:'200.00',
        Alipay:'0.00',
        weChat:'0.00',
        bankCard:'0.00',
        chargeDate:'2020-1-1',
        tollCollector:'王思聪',
        //operation:'查看详情'

      },



    ]
  }
  }
}
</script>

<style scoped>

</style>