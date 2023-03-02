<template>
  <div>
    <!-- 药品信息-->
    <sn-card-with-title>
      <!-- 搜索导航 -->
      <sn-search-input
          @inputContentChange="getInputChangeInfo"
          class="move-down"
          slot="title"
          :input-placeholder="inputPlaceholder"/>

      <!-- 药品信息表格-->
      <drug-table-info
          @getSelectInfo="getSelectInfo"
          slot="content"
          :add-title="addTitle"
          :table-data="infoTableData"
          :table-title="infoTableTitle"/>
    </sn-card-with-title>


    <!-- 添加药品信息的地方 -->
    <sn-card-with-title class="margin-top-20">
      <div slot="title">
        <sn-title
            title="Rp"
            :title-style="{'font-size':'40px','color':'pink'}"
            :other-style="{'float':'right','margin-top':'10px'}">

          <!-- 批量操作-->
          <div slot="other" class="to-flex">
            <sn-text text="批量操作" class="margin-right" :move-down="5"/>
            <BatchSettingDialog
                ref="batchSettingDialog"
                @batchSettingAfter="batchSetAfter"
                @batchSettingBefore="batchSetBefore"
                :button-description="hasChooseButtonName"
                :table-data="batchSettingData" class="margin-right"/>
          </div>
        </sn-title>
      </div>

      <!-- 检查项目 -->
      <check-item-add-table
          slot="content"
          ref="checkItemAddTable"
          v-if="isCheckItemPrescription"
          :table-data="addInfoTableData"
          :has-add-button="false"/>
      <!-- 药品 -->
      <drug-add-table
          ref="drugAddTable"
          slot="content"
          :has-add-button="false"
          :table-data="addInfoTableData"
          v-else/>
    </sn-card-with-title>

    <!-- 结算总价 -->
    <sn-card-no-title class="margin-top-20">
      <div slot="content">
        <money-detail/>
        <el-button
            @click="toSavePrescription"
            type="success"
            plain class="margin-top-20">
          <sn-text text="保存处方"/>
        </el-button>
      </div>
    </sn-card-no-title>
  </div>
</template>

<script>
import DrugTableInfo from "@/components/content/prescription/children/prescription_template/children/DrugTableInfo";
import DrugAddTable from "@/components/content/prescription/children/prescription_template/children/DrugAddTable";
import MoneyDetail from "@/components/content/prescription/children/prescription_template/children/MoneyDetail";
import CheckItemAddTable
  from "@/components/content/prescription/children/prescription_template/children/CheckItemAddTable";
import BatchSettingDialog
  from "@/components/content/prescription/children/prescription_template/children/BatchSettingDialog";

//导入添加处方接口
import {newAddPrescription} from "@/api/common/prescriptionInfo";

export default {
  name: "PrescriptionTemplate",
  components: {
    DrugTableInfo,
    DrugAddTable,
    MoneyDetail,
    CheckItemAddTable,
    BatchSettingDialog
  },
  data() {
    return {
      //添加信息的表格的数据
      addInfoTableData: [],
      //批量设置选中的的数据
      batchSettingData: [],
    }
  },
  props: {
    sickId: Number,
    //批量选择中  选中名字
    hasChooseButtonName: {
      type: String,
      default: '已选中药品'
    },

    //添加药品按钮的名字
    addTitle: {
      type: String,
      default: '添加药品'
    },

    //是否是检查项目的处方
    isCheckItemPrescription: false,

    inputPlaceholder: {
      type: String,
      default: '输入名称查询'
    },
    selectData: {
      type: Array,
      default() {
        return []
      }
    },
    selectDescription: {
      type: String,
      default: ''
    },
    //信息相关表格数据
    infoTableData: {
      type: Array,
      default() {
        return []
      }
    },
    //信息相关表格标题
    infoTableTitle: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    //保存处方
    toSavePrescription() {
      if (this.addInfoTableData.length !== 0) {
        let prescriptionDrug = []
        for (let item of this.$refs.drugAddTable.prescriptionItemData) {
          prescriptionDrug.push({
            //订单外键
            fkOrderId: this.sickId,
            //组号
            groupId: item.groupId.value,
            //药品名称
            name: item.name,
            //单次剂量
            onceUse: item.onceUse,
            //用法
            fkDrugUsageId: item.useMethod.value,
            //频次
            frequency: item.frequency.value,
            //天数
            days: item.days.value,
            //总量
            total: item.total,
            //单价
            price: item.price,
          })
        }
        newAddPrescription(prescriptionDrug).then(res => {
          history.back()
          this.myUtils.showMessage(this, '处方添加成功,可以到收费管理中查看并收费(*^▽^*)')
        })
      } else {
        this.myUtils.showMessage(this, '！！请添加处方药品(*^▽^*)')
      }
    },


    //批量设置之后
    batchSetAfter(batchData) {
      //1. 对象解构
      const {groupId, onceUse, onceUseUnit, useMethod, frequency, days, total, totalUnit} = batchData

      //2. 获取所有选中的对象
      let chooseData = this.$refs.drugAddTable.multipleSelection

      //3. 遍历修改 添加表格的数据
      for (let choose of chooseData) {
        for (let i = 0; i < this.$refs.drugAddTable.prescriptionItemData.length; i++) {
          if (this.$refs.drugAddTable.prescriptionItemData[i].id === choose.id) {
            let newValue = this.$refs.drugAddTable.prescriptionItemData[i]
            this.$set(newValue, 'groupId', groupId)
            this.$set(newValue, 'onceUse', onceUse)
            this.$set(newValue, 'onceUseUnit', onceUseUnit)
            this.$set(newValue, 'useMethod', useMethod)
            this.$set(newValue, 'frequency', frequency)
            this.$set(newValue, 'days', days)
            this.$set(newValue, 'total', total)
            this.$set(newValue, 'totalUnit', totalUnit)
            break
          }
        }
      }
      //4.取消批量选择
      this.$refs.drugAddTable.$refs.multipleTable.clearSelection()
    },
    //批量设置之前
    batchSetBefore() {

      //判断是否有选择
      if (this.$refs.drugAddTable.multipleSelection.length === 0) {
        this.myUtils.showMessage(this, '！！请选择(*^▽^*)')
        return
      }
      this.$refs.batchSettingDialog.dialogTableVisible = true
    },

    //获取下拉框的值
    getChooseSelect(select) {
      this.$emit('getChooseSelect', select)
    },
    //获取搜索框的值
    getInputChangeInfo(value) {
      this.$emit('getInputChangeInfo', value)
    },
    //获取选中东西
    getSelectInfo(selectInfo) {
      this.addInfoTableData = selectInfo
    }
  },
}
</script>

<style scoped lang="less">
.el-button {
  width: 100%;
}

.move-down {
  position: relative;
  top: 10px;
}
</style>