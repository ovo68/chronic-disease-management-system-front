<template>
  <prescription-template
      @getChooseSelect="toQueryCheckItemByType"
      @getInputChangeInfo="toQueryCheckItemByName"
      select-description="项目分类"
      :info-table-data="checkItemInfoTableData"
      :info-table-title="checkItemInfoTableTitle"
      :select-data="checkItemSelectData"
      :is-check-item-prescription="true"
      add-title="添加项目"
      not-choose-button-name="未选中项目"
      has-choose-button-name="已选中项目"
  />
</template>

<script>
import PrescriptionTemplate
  from "@/components/content/prescription/children/prescription_template/PrescriptionTemplate";
import * as prescription from "@/api/common/prescriptionInfo";

export default {
  name: "CheckItemPrescription",
  components: {
    PrescriptionTemplate
  },
  data() {
    return {
      checkItemSelectData: [
        {
          value: 0,
          label: '全部分类'
        },
        {
          value: 1,
          label: '治疗费'
        },
        {
          value: 2,
          label: '材料费'
        },
        {
          value: 3,
          label: '检查费'
        },
        {
          value: 4,
          label: '其他'
        },
      ],
      checkItemInfoTableTitle: [
        {
          prop: 'name',
          label: '名称',
        },
        {
          prop: 'type',
          label: '类型',
        },
        {
          prop: 'unit',
          label: '单位',
        },
        {
          prop: 'price',
          label: '价格',
        },
      ],
      checkItemInfoTableData: []
    }
  },
  methods: {
    //3.检查项目
    //3.1 获取所有检查项目
    toQueryAllCheckItem() {
      prescription.queryAllCheckItem().then(res => {
        this.checkItemInfoTableData = res
      })
    },
    //3.2 根据类型获取检查项目
    toQueryCheckItemByType(type) {
      prescription.queryCheckItemByType(type).then(res => {
        this.checkItemInfoTableData = res
      })
    },
    //3.3 根据名称获取检查项目
    toQueryCheckItemByName(name) {

      if (this.myUtils.stringIsEmpty(name)) {
        this.toQueryAllCheckItem()
        return
      }

      prescription.queryCheckItemByName(name).then(res => {
        this.checkItemInfoTableData = res
      })
    }
  },
  created() {
    this.toQueryAllCheckItem()
  }
}
</script>

<style scoped>

</style>