<template>
  <div>
    <department-charge-navigation></department-charge-navigation>
    <department-charge-table :table-data="departmentchargetable"></department-charge-table>
  </div>
</template>

<script>
import DepartmentChargeTable
  from "@/views/statistics_table/cost_statistics/children/department_charge/children/DepartmentChargeTable";
import DepartmentChargeNavigation
  from "@/views/statistics_table/cost_statistics/children/department_charge/children/DepartmentChargeNavigation";
export default {
name: "DepartmentCharge",
  components:{
    DepartmentChargeNavigation,
    DepartmentChargeTable
  },
  data(){
    return{
      departmentchargetable:[
        {
          id:'合计',
          clinicalReceptionNumber:'300',
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
          desk:'经病科',
          clinicalReceptionNumber:'300',
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
          desk:'经病科',
          clinicalReceptionNumber:'300',
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
          desk:'经病科',
          clinicalReceptionNumber:'300',
          trueMoney:'16.00',
          medicare:'200.00',
          clubCard:'0.00',
          cash:'0.00',
          Alipay:'0.00',
          weChat:'0.00',
          bankCard:'0.00'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>