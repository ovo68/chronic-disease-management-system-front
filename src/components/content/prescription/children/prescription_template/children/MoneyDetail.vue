<template>
    <sn-row-has-two-col :left="5" :right="19" class="margin-top">
      <div slot="one-col">

        <sn-title title="费用详情: " :other-style="{'float':'right','margin-top':'-10px'}"/>

        <sn-text text="科室 :" class="to-flex" :move-down="23">
          <sn-select
              :select-style="{'width':'140px'}"
              :select-data="departmentData"
              slot="other"
              class="department"/>
        </sn-text>

        <sn-text
            :move-down="24"
            text="接诊医生 :"
            class="to-flex margin-top-10">
          <sn-select
              :select-style="{'width':'140px'}"
              :select-data="doctorData"
              slot="other"
              class="margin-left-20"/>
        </sn-text>

        <div class="to-flex margin-top-20">
          <sn-text text="附加费用 :" class=" to-flex ">
            <sn-text
                :move-down="-4"
                :number="12"
                slot="other"
                class="font-pink margin-left-20 margin-right-20"
                :font-size="20"/>
          </sn-text>
          <sn-text text="元" :move-down="-1"/>
        </div>

        <div class="to-flex margin-top-20">
          <sn-text text="此方合计 : "/>
          <sn-text
              :move-down="-3"
              :number="prescriptionMoney"
              class="font-pink margin-left-20 margin-right-20"
              :font-size="20"/>
          <sn-text text="元" :move-down="-1"/>
        </div>
      </div>

      <div class="addition" slot="two-col">
        <addition-money-dialog
            class="margin-bottom"
            slot="other"
            button-description="+ 附加费用"
            :table-data="otherPayData"/>

        <sn-table
            :table-title="additionTableTitle"
            :table-data="otherPayData"/>
      </div>
    </sn-row-has-two-col>
</template>

<script>
import AdditionMoneyDialog
  from "@/components/content/prescription/children/prescription_template/children/AdditionMoneyDialog";

export default {

  data() {
    return {
      otherPayData: [
        {
          id: '01',
          payType: '注射费',
          count: 1,
          price: 3.00
        },
        {
          id: '02',
          payType: '材料费',
          count: 1,
          price: 5.00
        },
        {
          id: '03',
          payType: '处理费',
          count: 1,
          price: 8.00
        },
        {
          id: '04',
          payType: '诊疗费',
          count: 1,
          price: 6.00
        },
      ],
      additionCost: [],
      additionTableTitle:[
        {
          prop:'id',
          label:'序号'
        },
        {
          prop:'payType',
          label:'费用类型'
        },
        {
          prop:'count',
          label:'数量'
        },
        {
          prop:'price',
          label:'价格'
        },
      ]
    }
  },

  components: {
    AdditionMoneyDialog
  },
  props: {
    totalMoney: {
      type: Number,
      default: 12.02
    },
    prescriptionNumber: {
      type: Number,
      default: 2
    },
    prescriptionMoney: {
      type: Number,
      default: 12.02
    },
    departmentData: {
      type: Array,
      default() {
        return [
          {
            value: 0,
            label: '全科'
          },
          {
            value: 1,
            label: '儿科'
          },
          {
            value: 2,
            label: '骨科'
          }
        ]
      }
    },
    doctorData: {
      type: Array,
      default() {
        return [
          {
            value: 0,
            label: '王阳明'
          },
          {
            value: 1,
            label: '陈平安'
          },
          {
            value: 2,
            label: '宁姚'
          }
        ]
      }
    },
  }
}
</script>

<style scoped>
.department {
  margin-left: 48px;
}

.addition {
  text-align: right;
  position: relative;
  bottom: 15px;
}


</style>