<template>
  <div>
    <toll-collector-charge-statistics-navigation></toll-collector-charge-statistics-navigation>
    <toll-collector-charge-statistics-table :table-data="tollcollectorchargestatisticstable"></toll-collector-charge-statistics-table>
  </div>
</template>

<script>
import TollCollectorChargeStatisticsTable
  from "@/views/statistics_table/cost_statistics/children/toll_collector_charge_statistics/children/TollCollectorChargeStatisticsTable";
import TollCollectorChargeStatisticsNavigation
  from "@/views/statistics_table/cost_statistics/children/toll_collector_charge_statistics/children/TollCollectorChargeStatisticsNavigation";
export default {
name: "TollCollectorChargeStatistics",
  components: {TollCollectorChargeStatisticsNavigation,
    TollCollectorChargeStatisticsTable
  },
  data(){
    return{
      tollcollectorchargestatisticstable:[
        {
          id:'合计',
          chargeSum:'210.00',
          retreatSum:'5.00',
          receivableMoney:'200.00',
          discountsMoney:'50.00',
          trueMoney:'16.00',
          medicare:'200.00',
          clubCard:'0.00',
          cash:'0.00',
          Alipay:'0.00',
          weChat:'0.00',
          bankCard:'0.00'
        },
        {
          id:'1',
          tollCollector:'王思聪',
          desk:'经病科',
          chargeSum:'210.00',
          retreatSum:'5.00',
          receivableMoney:'200.00',
          discountsMoney:'50.00',
          trueMoney:'16.00',
          medicare:'200.00',
          clubCard:'0.00',
          cash:'0.00',
          Alipay:'0.00',
          weChat:'0.00',
          bankCard:'0.00'
        },
        {
          id:'1',
          tollCollector:'王思聪',
          desk:'经病科',
          chargeSum:'210.00',
          retreatSum:'5.00',
          receivableMoney:'200.00',
          discountsMoney:'50.00',
          trueMoney:'16.00',
          medicare:'200.00',
          clubCard:'0.00',
          cash:'0.00',
          Alipay:'0.00',
          weChat:'0.00',
          bankCard:'0.00'
        },
        {
          id:'1',
          tollCollector:'王思聪',
          desk:'经病科',
          chargeSum:'210.00',
          retreatSum:'5.00',
          receivableMoney:'200.00',
          discountsMoney:'50.00',
          trueMoney:'16.00',
          medicare:'200.00',
          clubCard:'0.00',
          cash:'0.00',
          Alipay:'0.00',
          weChat:'0.00',
          bankCard:'0.00'
        },
      ]

    }
  },

}
</script>

<style scoped>

</style>