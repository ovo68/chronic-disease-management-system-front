<template>
  <div>
    <div class="to-flex">
      <i class="el-icon-document project-detail-icon"/>
      <sn-text
          font-color="#666EE8"
          :font-size="25"
          font-weight="bold"
          class="margin-bottom-20 "
          :text="costRecordTitle"/>
    </div>

    <div class="margin-bottom-20">
      <el-button
          :style="prescriptionButtonStyle"
          @click="toPrescription"
          plain type="primary">
        <sn-text text="处方信息"/>
      </el-button>
      <el-button
          :style="checkItemButtonStyle"
          @click="toCheckItem"
          plain type="primary">
        <sn-text text="检查项目"/>
      </el-button>
    </div>

    <!-- 处方表格-->
    <sn-table
        v-show="showPrescription"
        :table-title="projectTableTitle"
        :table-data="prescriptionTableData"></sn-table>

    <!-- 检查项目表格 -->
    <sn-table
        v-show="showCheckItem"
        :table-title="checkItemTableTitle"
        :table-data="checkItemTableData"></sn-table>

  </div>
</template>

<script>
export default {
  name: "ItemInfoInOrderDetail",
  props: {
    costRecordTitle: {
      type: String,
      default: ''
    },
    //订单所有信息
    orderInfoDetail: Object,
  },
  data() {
    return {
      //是否显示
      showPrescription: true,
      showCheckItem: false,

      prescriptionButtonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      },
      checkItemButtonStyle: '',

      buttonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      },

      //处方表头
      projectTableTitle: [
        {
          prop: 'id',
          label: '序号'
        },
        {
          prop: 'name',
          label: '收费名称'
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
          prop: 'salePrice',
          label: '零售金额(元)'
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
      //检查项目表头
      checkItemTableTitle: [
        {
          prop: 'id',
          label: '序号'
        },
        {
          prop: 'name',
          label: '收费名称'
        },
        {
          prop: 'price',
          label: '单价(元)'
        },
        {
          prop: 'num',
          label: '总量'
        },
        {
          prop: 'salePrice',
          label: '零售金额(元)'
        },
        {
          prop: 'discount',
          label: '折扣'
        },
        {
          prop: 'afterDiscountMoney',
          label: '折后金额(元)'
        },
      ]
    }
  },
  computed: {
    //检查项目表格数据
    checkItemTableData() {
      if (Object.keys(this.orderInfoDetail).length !== 0) {
        //1. 对象解构 取出相关属性
        let {
          //患者
          sick,
          //检查项目表格数据
          presAddition
          //
        } = this.orderInfoDetail

        //2.设置检查项目表格数据
        for (let item of presAddition) {
          //设置零售金额
          this.$set(item, 'salePrice', item.num * item.price)
          //设置折扣
          this.$set(item, 'discount', sick.vip.discount)
          //设置折后金额
          this.$set(item, 'afterDiscountMoney', Math.floor((item.salePrice * item.discount / 10) * 100) / 100)
        }
        return presAddition
      }
    },

    //处方表格数据
    prescriptionTableData() {
      if (Object.keys(this.orderInfoDetail).length !== 0) {
        //1. 对象解构 取出相关属性
        let {
          //患者
          sick,
          //处方表格数据
          presDrug,
        } = this.orderInfoDetail
        for (let i = 0; i < presDrug.length; i++) {
          //设置单位
          this.$set(presDrug[i], 'unit', '盒')
          //设置零售金额
          this.$set(presDrug[i], 'salePrice', presDrug[i].total * presDrug[i].price)
          //设置折扣
          this.$set(presDrug[i], 'discount', sick.vip.discount)
          //设置折后金额
          this.$set(presDrug[i], 'afterDiscountMoney', Math.floor((presDrug[i].salePrice * presDrug[i].discount / 10) * 100) / 100)
        }

        return presDrug;
      }
    }
  },
  methods: {
    toPrescription() {

      //设置按钮样式
      this.prescriptionButtonStyle = this.buttonStyle
      this.checkItemButtonStyle = ''

      //设置显示的表格
      this.showPrescription = true
      this.showCheckItem = false
    },
    toCheckItem() {

      //设置按钮样式
      this.prescriptionButtonStyle = ''
      this.checkItemButtonStyle = this.buttonStyle

      this.showPrescription = false
      this.showCheckItem = true
    }
  },
  mounted() {
    this.$emit('getCheckItemData', this.checkItemTableData)
    this.$emit('getPrescriptionData', this.prescriptionTableData)
  }
}
</script>

<style scoped>
.el-button {
  width: 120px;
}

.project-detail-icon {
  font-size: 20px;
  color: #666EE8;
  position: relative;
  top: 5px;
  margin-right: 5px;
}
</style>