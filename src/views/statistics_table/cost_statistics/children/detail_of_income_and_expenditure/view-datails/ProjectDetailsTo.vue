<template>
  <sn-row-has-two-col :left="16" :right="8" class="margin-bottom-21">
    <sn-card-with-title slot="one-col">
      <div slot="title">
        <sn-title title="项目明细" :title-style="titleStyle"/>
        <br>
        <sn-show-by-button-with-card
            :content-count="3"
            :button-names="buttonNames"
            :button-count="3">
          <sn-text text="西/成药处方1" slot="buttonName0"/>
          <sn-text text="中药处方2" slot="buttonName1"/>
          <sn-text text="检查项目3" slot="buttonName2"/>

          <!--    西/成药处方1-->
          <div slot="content0">
              <western-patent-medicine-prescription :table-data="westernpatentmedicineprescription"></western-patent-medicine-prescription>
          </div>

          <!--中药处方2-->
          <div slot="content1">
              <prescriptions-of-traditional-chinese-medicine :table-data="prescriptionsoftraditionalchinesemedicine"></prescriptions-of-traditional-chinese-medicine>
          </div>
          <!--    检查项目3-->
          <div slot="content2">
              <inspection-item :table-data="inspectionitem"></inspection-item>
          </div>
        </sn-show-by-button-with-card>
      </div>
    </sn-card-with-title>
    <sn-card-with-title slot="two-col">
      <div slot="title">
        <sn-title title="订单信息" :title-style="titleStyle"/>
        <br>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            :header-cell-style="{
                'text-align':'center',
                'background-color':'#FDE2E2'
              }"
            :cell-style="{'text-align':'center'}">
          <el-table-column prop="orderId" label="订单编号" width="50"/>
          <el-table-column prop="heroMoney" label="应收金额" width="50"/>
          <el-table-column prop="trueMoney" label="实收金额" width="50"/>
          <el-table-column prop="discountsMoney" label="优惠金额" width="50"/>
          <el-table-column prop="medicare" label="医保支付" width="50"/>
          <el-table-column prop="payment" label="支付方式" width="50"/>
          <el-table-column prop="change" label="找零" width="50"/>
          <el-table-column prop="chargeDate" label="收费日期" width="50"/>
          <el-table-column prop="tollCollector" label="收费员" width="50"/>
        </el-table>
      </div>
    </sn-card-with-title>
  </sn-row-has-two-col>

</template>

<script>
import InspectionItem
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/view-datails/children/InspectionItem";
import PrescriptionsOfTraditionalChineseMedicine
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/view-datails/children/PrescriptionsOfTraditionalChineseMedicine";
import WesternPatentMedicinePrescription
  from "@/views/statistics_table/cost_statistics/children/detail_of_income_and_expenditure/view-datails/children/WesternPatentMedicinePrescription";
export default {
  name: "ProjectDetailsTo",
  components:{
    WesternPatentMedicinePrescription,
    PrescriptionsOfTraditionalChineseMedicine,
    InspectionItem
  },
  data(){
    return{
      props: {
        //数据
        tableData: {
          type: Array,
          default() {
            return [
              {
                orderId:'0280054',
                heroMoney:'100.00',
                trueMoney:'12.00',
                discountsMoney:'1.00',
                medicare:'2.00',
                payment:'现金',
                change:'5.00',
                chargeDate:'2020-2-2',
                tollCollector:'tom'
              },
              {
                orderId:'0280054',
                heroMoney:'100.00',
                trueMoney:'12.00',
                discountsMoney:'1.00',
                medicare:'2.00',
                payment:'现金',
                change:'5.00',
                chargeDate:'2020-2-2',
                tollCollector:'tom'
              },
            ]
          }
        }
      },
      titleStyle: {
        'color': '#21A3F1',
        'font-size': '18px'
      },
      buttonNames: [
        '西/成药处方1','中药处方2','检查项目3'
      ],

      //西/成药处方1数据
      westernpatentmedicineprescription:[
        {
          id:'1',
          chargeName:'六味地黄丸',
          unitPrice:'55.00',
          gross:'2',
          unit:'瓶',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        },
        {
          id:'2',
          chargeName:'六味地黄丸',
          unitPrice:'55.00',
          gross:'2',
          unit:'瓶',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        },
        {
          id:'3',
          chargeName:'六味地黄丸',
          unitPrice:'55.00',
          gross:'2',
          unit:'瓶',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        }
      ],
      // 中药处方2
      prescriptionsoftraditionalchinesemedicine:[
        {
          id:'1',
          chargeName:'陈皮',
          unitPrice:'55.00',
          gross:'2',
          unit:'g',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        },
        {
          id:'2',
          chargeName:'陈皮',
          unitPrice:'55.00',
          gross:'2',
          unit:'g',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        },
        {
          id:'3',
          chargeName:'陈皮',
          unitPrice:'55.00',
          gross:'2',
          unit:'g',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        }
      ],
    //  检查项目3
      inspectionitem:[
        {
          id:'1',
          chargeName:'脑电波检查',
          unitPrice:'55.00',
          gross:'2',
          unit:'次',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        },
        {
          id:'2',
          chargeName:'脑电波检查',
          unitPrice:'55.00',
          gross:'2',
          unit:'次',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        },
        {
          id:'3',
          chargeName:'脑电波检查',
          unitPrice:'55.00',
          gross:'2',
          unit:'次',
          retailAmount:'30',
          discount:'9.00',
          discountedAmount:'55.00'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>