<template>
  <!-- 结算药品信息 -->
  <sn-row-has-two-col
      :left="16"
      :right="8">
    <check-out-table
        slot="one-col"
        :check-out-table-title="checkOutDrugInfoTableTitle"
        :check-out-table-data="checkOutDrugInfoTableData"/>

    <!-- 结算的病人信息 -->
    <check-out-sick-info slot="two-col"/>
  </sn-row-has-two-col>
</template>

<script>
import CheckOutTable
  from "@/views/drug_sale/drug_check_out/children/check_out_drug_info/children/CheckOutTable";
import CheckOutSickInfo from "@/views/drug_sale/drug_check_out/children/check_out_drug_info/children/CheckOutSickInfo";

export default {
  name: 'CheckOutDrugInfo',
  components: {
    CheckOutSickInfo,
    CheckOutTable
  },
  data() {
    return {
      checkOutDrugInfoTableData: [
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
        {
          id: '12',
          name: '师楠',
          price: '26',
          total: '30',
          unit: '盒',
          totalPrice: '30',
          discount: '4',
          afterDiscountMoney: '22',
        },
      ],
      checkOutDrugInfoTableTitle: [
        {
          prop: 'id',
          label: '序号'
        },
        {
          prop: 'name',
          label: '名称'
        },
        {
          prop: 'price',
          label: '单价(元)'
        },
        {
          prop: 'total',
          label: '总量'
        },
        {
          prop: 'unit',
          label: '单位'
        },
        {
          prop: 'totalPrice',
          label: '总金额(元)'
        },
        {
          prop: 'discount',
          label: '折扣'
        },
        {
          prop: 'afterDiscountMoney',
          label: '折后金额(元)'
        },
      ],
    }
  }
}
</script>