<template>
  <div>
    <the-stored-value-subsidiary-navigation></the-stored-value-subsidiary-navigation>
    <the-stored-value-subsidiary-table :table-data="thestoredvaluesubsidiarytable"></the-stored-value-subsidiary-table>
  </div>
</template>

<script>
import TheStoredValueSubsidiaryTable
  from "@/views/statistics_table/cost_statistics/children/the_stored_value_subsidiary/children/TheStoredValueSubsidiaryTable";
import TheStoredValueSubsidiaryNavigation
  from "@/views/statistics_table/cost_statistics/children/the_stored_value_subsidiary/children/TheStoredValueSubsidiaryNavigation";
export default {
name: "TheStoredValueSubsidiary",
  components:{
    TheStoredValueSubsidiaryNavigation,
    TheStoredValueSubsidiaryTable
  },
  data(){
  return{
    thestoredvaluesubsidiarytable:[
      {
        id:'1',
        dealType:'充值',
        cardNumber:'02800334',
        memberName:'tom',
        dealMoney:'500.00',
        giveMoney:'300.00',
        numberMoney:'800.00',
        balance:'23.00',
        dealWay:'现金',
        dealTime:'2020-12-12 10:32:34',
        operator:'lak'
      },
      {
        id:'1',
        dealType:'充值',
        cardNumber:'02800334',
        memberName:'tom',
        dealMoney:'500.00',
        giveMoney:'300.00',
        numberMoney:'800.00',
        balance:'23.00',
        dealWay:'现金',
        dealTime:'2020-12-12 10:32:34',
        operator:'lak'
      },
      {
        id:'1',
        dealType:'充值',
        cardNumber:'02800334',
        memberName:'tom',
        dealMoney:'500.00',
        giveMoney:'300.00',
        numberMoney:'800.00',
        balance:'23.00',
        dealWay:'现金',
        dealTime:'2020-12-12 10:32:34',
        operator:'lak'
      },
      {
        id:'1',
        dealType:'充值',
        cardNumber:'02800334',
        memberName:'tom',
        dealMoney:'500.00',
        giveMoney:'300.00',
        numberMoney:'800.00',
        balance:'23.00',
        dealWay:'现金',
        dealTime:'2020-12-12 10:32:34',
        operator:'lak'
      },
    ]
  }
  }
}
</script>

<style scoped>

</style>