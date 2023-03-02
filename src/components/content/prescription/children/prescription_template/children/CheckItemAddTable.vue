<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="prescriptionCheckItemData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :header-cell-style="{
          'text-align':'center',
          'font-size': this.headerCellFontSize
        }"
        :cell-style="{
          'text-align':'center',
          'font-size': this.cellFontSize
        }"
        :height="height">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="groupId" label="组号" width="80px">
        <template slot-scope="scope">
          <sn-select
              class="move-up-5"
              :select-data="groupIdData"/>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称"/>
      <el-table-column prop="bodyPart" label="身体部位" width="145">
        <template slot-scope="scope">
          <div class="to-flex">
            <sn-input :input-value-from-parent="scope.row.bodyPart" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="count" label="数量" width="100">
        <template slot-scope="scope">
          <div class="to-flex">
            <sn-input :input-value-from-parent="scope.row.count"  class="margin-right"/>
            <sn-text text="次" :move-down="14"/>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="checkType" label="检查类型" width="117">
        <template slot-scope="scope">
          <sn-select
              class="move-up-5"
              :select-data="checkTypeData"
              :select-style="{'width':'105px'}"/>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="单价" width="100">
        <template slot-scope="scope">
          <sn-input :input-value-from-parent="scope.row.price" class="move-up-1"/>
        </template>
      </el-table-column>
      <el-table-column prop="totalPrice" label="金额" width="100">
        <template slot-scope="scope">
          <sn-input :input-value-from-parent="scope.row.totalPrice" class="move-up-1"/>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" width="150">
        <template slot-scope="scope">
          <sn-input :input-value-from-parent="scope.row.remark" class="move-up-1"/>
        </template>
      </el-table-column>
      <el-table-column prop="remove" label="移除" width="95">
        <template slot-scope="scope">
          <el-button
              @click="removeItem(scope.row.id)"
              type="danger"
              icon="el-icon-delete"
              plain circle>

          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px;float: left;margin-bottom: 10px" v-if="hasAddButton">
      <el-button type="primary" plain @click="addSelection()">{{ addTitle }}</el-button>
    </div>
    <div style="margin-top: 20px;float: right;margin-bottom: 10px">
      <el-button type="danger" plain @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>

function PrescriptionCheckItem(id, name, price) {
  this.id = id
  this.groupId = ''
  this.name = name
  this.bodyPart = ''
  this.count = ''
  this.checkType = ''
  this.price = price
  this.totalPrice = this.price * this.count
  this.remark = ''
}

export default {
  name: 'CheckItemAddTable',
  data() {
    return {

      //处方序号
      number: 1,
      //保存处方项
      prescriptionCheckItemData: [],

      //分组
      groupIdData: [
        {
          value: 0,
          label: '1'
        },
        {
          value: 1,
          label: '2'
        },
        {
          value: 2,
          label: '3'
        },
        {
          value: 3,
          label: '4'
        },
        {
          value: 4,
          label: '5'
        },
        {
          value: 5,
          label: '6'
        },
        {
          value: 6,
          label: '7'
        },
      ],
      //选择器相关
      inputStyle: {
        'padding': '0',
        'text-align': 'center',
      },
      //检查类型
      checkTypeData: [
        {
          value: 0,
          label: '口服'
        },
        {
          value: 1,
          label: '静脉注射'
        },
        {
          value: 2,
          label: '注射药物'
        },
        {
          value: 3,
          label: '检查'
        },
        {
          value: 4,
          label: '皮试'
        },
        {
          value: 5,
          label: '外用'
        },
        {
          value: 6,
          label: '雾化'
        },
      ],
    }
  },
  watch: {
    tableData(addContents) {
      for (let content of addContents) {
        const prescriptionCheckItem = new PrescriptionCheckItem(this.number++, content.name, content.price)
        this.prescriptionCheckItemData.push(prescriptionCheckItem)
      }
    }
  },
  computed: {
    headerCellFontSize() {
      return this.headerCellFontSizeNumber + 'px'
    },
    cellFontSize() {
      return this.cellFontSizeNumber + 'px'
    }
  },
  props: {
    //选择器相关
    //选择器数据
    selectData: {
      type: Array,
      default() {
        return []
      }
    },
    //选择器样式
    selectStyle: {
      type: Object,
      default
          () {
        return {
          'width': '100%'
        }
      }
    },

    //默认选中哪个
    toSelect: {
      type: Number,
      default: 0
    },

    //默认显示的内容
    selectPlaceholder: {
      type: String,
      default: '请选择'
    },

    //表头字体大小
    headerCellFontSizeNumber: {
      type: Number,
      default: 14
    },

    //单元格字体大小
    cellFontSizeNumber: {
      type: Number,
      default: 8
    },

    //是否需要按钮
    hasAddButton: {
      type: Boolean,
      default: true
    },

    //添加按钮内容
    addTitle: {
      type: String,
      default: '添加'
    },

    //表格高度
    height: {
      type: String,
      default: '405'
    },

    //表格标题
    tableTitle: {
      type: Array,
      default() {
        return [];
      }
    },

    //表格数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {

    //移除处方项目
    removeItem(id) {
      this.myUtils.deleteConfirm(this, () => {
        //当id不是要被删除的id时  将其添加到新数组中 并赋值给prescriptionItemData
        this.prescriptionItemData = this.prescriptionItemData.filter(item => {
          return item.id !== id
        })
      })
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    addSelection() {

    }
  }
}
</script>

<style scoped lang="less">
/deep/ .el-input--suffix .el-input__inner {
  padding: 0 5px;
  height: 32px;
}

.move-down-1{
  position: relative;
  top: 1.5px;
}

.move-down-2{
  position: relative;
  top: 2px;
}

.move-up-1 {
  position: relative;
  bottom: 1px;
}

.move-up-2 {
  position: relative;
  bottom: 2px;
}

.move-up-3 {
  position: relative;
  bottom: 3px;
}

.move-up-4 {
  position: relative;
  bottom: 4px;
}

.move-up-5 {
  position: relative;
  bottom: 5px;
}

.move-up-6 {
  position: relative;
  bottom: 6px;
}
</style>