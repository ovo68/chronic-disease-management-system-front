<template>
  <el-row :gutter="10" class="second-row">
    <el-col :span="24" class="chart-left">
      <el-card class="box-card">
        <div>
          <span class="change-show-chart">
            <el-button round class="button-seven" :style="activeStyleSeven" @click="changeToSeven">
              <sn-text text="近7天" :move-down="-6" :move-right="-11" :font-size="12"/>
            </el-button>
            <el-button round class="button-thirty" :style="activeStyleThirty" @click="changeToThirty">
              <sn-text text="近30天" :move-down="-6" :move-right="-11" :font-size="12"/>
            </el-button>
          </span>
        </div>
        <manage-condition-line-chart
            :line-chart-data="sevenData"
            v-if="chooseSeven"/>
        <manage-condition-line-chart-month
            :line-chart-data="thirtyData"
            v-if="chooseThirty"/>
      </el-card>
    </el-col>
<!--    <el-col :span="6" class="pie-right">-->
<!--      <el-card class="box-card">-->
<!--        <manage-condition-pie-->
<!--            :pie-data="vipConsumeData"/>-->
<!--      </el-card>-->
<!--    </el-col>-->
  </el-row>
</template>

<script>
import ManageConditionLineChart from "@/views/manage_condition/children/charts/ManageConditionLineChart";
import ManageConditionPie from "@/views/manage_condition/children/charts/ManageConditionPie";
import ManageConditionLineChartMonth from "@/views/manage_condition/children/charts/ManageConditionLineChartMonth";

import * as manageCondition from "@/api/manage_condition/manageCondition";


export default {
  name: 'ConditionSecondRow',
  data() {
    return {
      chooseSeven: true,
      chooseThirty: false,
      sevenData: [],
      thirtyData: [],
    }
  },
  components: {
    ManageConditionLineChart,
    ManageConditionPie,
    ManageConditionLineChartMonth
  },
  computed: {
    activeStyleSeven() {
      if (this.chooseSeven) {
        return {
          'background-color': '#FF6262',
          'color': '#fff'
        }
      }
    },
    activeStyleThirty() {
      if (this.chooseThirty) {
        return {
          'background-color': '#FF6262',
          'color': '#fff'
        }
      }

    }
  },
  props: {
    vipConsumeData: Object,
  },
  methods: {
    //获取7天收入记录
    toGetIncomeConditionForSeven() {
      manageCondition.getIncomeConditionForSeven().then(res => {
        this.sevenData = res.data
      })
    },
    //获取30天收入记录
    toGetIncomeConditionForThirty() {
      manageCondition.getIncomeConditionForThirty().then(res => {
        this.thirtyData = res.data
      })
    },
    changeToSeven() {
      this.chooseSeven = true
      this.chooseThirty = false
      //获取近7天的收入数据
      this.toGetIncomeConditionForSeven()
    },
    changeToThirty() {
      this.chooseSeven = false
      this.chooseThirty = true
      //获取近30天的收入数据
      this.toGetIncomeConditionForThirty()
    },
  },

  created() {
    //获取近7天的收入数据
    this.toGetIncomeConditionForSeven()
  },
}
</script>

<style scoped lang="less">
.second-row {
  .change-show-chart {
    float: right;
    margin-right: 20px;

    .el-button {
      font-size: 10px;
      height: 5px;
      width: 60px;
    }
  }
}
</style>