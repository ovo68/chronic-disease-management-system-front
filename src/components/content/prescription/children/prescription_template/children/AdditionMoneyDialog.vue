<template>
  <div>
    <el-button type="primary" size="small" round plain @click="dialogTableVisible = true">
      {{ buttonDescription }}
    </el-button>
    <el-dialog
        title="附加费用"
        width="28%"
        class="text-left"
        :visible.sync="dialogTableVisible">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
          :cell-style="{'text-align':'center'}"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"/>
        <el-table-column prop="id" label="序号" width="70"/>
        <el-table-column prop="payType" label="费用类型"/>
        <el-table-column prop="count" label="数量">
          <template slot-scope="scope">
            <sn-input :input-value-from-parent="scope.row.count"/>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格">
          <template slot-scope="scope">
            <sn-input :input-value-from-parent="scope.row.price"/>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      multipleSelection: []
    }
  },

  props: {
    buttonDescription: {
      type: String,
      default: ''
    },

    dialogTableVisible: {
      type: Boolean,
      default: false
    },

    tableData: {
      type: Array,
      default() {
        return []
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
    }
  }
}
</script>

<style scoped>
.el-dialog__title {
  margin-top: 10px;
}

/deep/ .el-input--suffix .el-input__inner {
  padding: 0 5px;
  height: 32px;
}

</style>