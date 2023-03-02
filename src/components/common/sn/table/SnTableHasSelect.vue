<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :header-cell-style="{
          'text-align':'center',
          'font-size': this.headerCellFontSize
        }"
        :cell-style="{
          'text-align':' center',
          'font-size': this.cellFontSize
        }"
        :height="height">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column :prop="item.prop" :label="item.label" v-for="item in tableTitle" :width="item.width">
        <template slot-scope="scope">
          <sn-select :select-data="selectData"></sn-select>
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
import SnSelect from "@/components/common/sn/select/SnSelect";

export default {

  components: {
    SnSelect
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
        return [
          {
            value: 1,
            label: 'sss'
          }
        ]
      }
    },
    //选择器样式
    selectStyle: {
      type: Object,
      default() {
        return {
          'width': '100%'
        }
      }
    },

    //默认选中哪个
    toSelect: {
      type: Number,
      default: 1
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
      default: ''
    },

    //表格标题
    tableTitle: {
      type: Array,
      default() {
        return [
          {
            prop: 'date',
            label: '日期',
          },
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ];
      }
    },

    //表格数据
    tableData: {
      type: Array,
      default() {
        return [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  },

  methods: {
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

<style scoped>

</style>