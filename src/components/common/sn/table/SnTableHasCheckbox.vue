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
      </el-table-column>
    </el-table>

    <sn-row-has-two-col :left="12" :right="12" class="margin-top-20">
      <el-button
          slot="one-col"
          type="primary"
          plain
          @click="addSelection()"
          v-if="hasAddButton">
        {{ addTitle }}
      </el-button>
      <el-button
          slot="two-col"
          type="danger"
          plain
          @click="toggleSelection()">
        <sn-text text="取消选择"/>
      </el-button>
    </sn-row-has-two-col>
  </div>
</template>

<script>
export default {

  name: 'SnTableHasCheckbox',

  data() {
    return {
      multipleSelection: []
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
        return []
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
    //添加选中的药品
    addSelection() {
      if (this.multipleSelection.length === 0) {
        this.myUtils.showMessage(this,'！！请选择(*^▽^*)')
        return
      }
      //获取选择的表格中的内容
      this.$emit('getSelectFromTable', this.multipleSelection)
      //初始化放选中内容的数组 清空用户选择
      this.$refs.multipleTable.clearSelection()
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
  }
}
</script>

<style scoped>
.el-button {
  width: 100%;
}
</style>