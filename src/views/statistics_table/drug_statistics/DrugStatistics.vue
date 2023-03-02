<!-- 药品统计 -->
<template>

  <sn-show-by-button-with-card
    :button-count="7"
    :content-count="7"
    :button-names="buttonNames">

    <sn-text text="入库统计" slot="buttonName0"/>
    <sn-text text="出库统计" slot="buttonName1"/>
    <sn-text text="进销存统计" slot="buttonName2"/>
    <sn-text text="调价统计" slot="buttonName3"/>
    <sn-text text="药品销售明细" slot="buttonName4"/>
    <sn-text text="处方药品排行" slot="buttonName5"/>
    <sn-text text="零售药品排行" slot="buttonName6"/>

    <div slot="content0">
      <enter-stock-statistics/>
    </div>
    <div slot="content1">
      <out-stock-statistics/>
    </div>
    <div slot="content2">
      <purchase-sale-stock-statistics/>
    </div>
    <div slot="content3">
      <adjust-price-statistics/>
    </div>
    <div slot="content4">
      <drug-sales-details/>
    </div>
    <div slot="content5">
      <drug-statistical/>
    </div>
    <div slot="content6">
      <retail-drugs-list/>
    </div>
  </sn-show-by-button-with-card>
</template>

<script>
import EnterStockStatistics
  from "@/views/statistics_table/drug_statistics/children/enter_stock_statistics/EnterStockStatistics";
import OutStockStatistics
  from "@/views/statistics_table/drug_statistics/children/out_stock_statistics/OutStockStatistics";
import PurchaseSaleStockStatistics
  from "@/views/statistics_table/drug_statistics/children/purchase_sale_stock_statistics/PurchaseSaleStockStatistics";
import AdjustPriceStatistics
  from "@/views/statistics_table/drug_statistics/children/adjust_price_statistics/AdjustPriceStatistics";
import DrugSalesDetails
  from "@/views/statistics_table/drug_statistics/children/drug_sales_details/DrugSalesDetails";
import DrugStatistical
  from "@/views/statistics_table/drug_statistics/children/drug_statistical/DrugStatistical";
import RetailDrugsList
  from "@/views/statistics_table/drug_statistics/children/retail_drugs_list/RetailDrugsList";
export default {
  name: "DrugStatistics",
  data() {
    return {
      buttonNames: [
          '入库统计', '出库统计','进销存统计','调价统计','药品销售明细','处方药品排行','零售药排行']
    }
  },
  components: {
    EnterStockStatistics,
    OutStockStatistics,
    PurchaseSaleStockStatistics,
    AdjustPriceStatistics,
    DrugSalesDetails,
    DrugStatistical,
    RetailDrugsList
  }

}
</script>

<style scoped>

</style>