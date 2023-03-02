<template>
  <div>
    <el-button
        type="primary"
        size="mini" plain
        @click="batchSettingBefore">
      {{ buttonDescription }}
    </el-button>
    <el-dialog
        :close-on-click-modal="false"
        title="批量操作"
        width="55%"
        :visible.sync="dialogTableVisible">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          :header-cell-style="{
          'text-align':'center',
        }"
          :cell-style="{
          'text-align':'center',
        }">
        <!-- 组号 -->
        <el-table-column
            prop="groupId"
            label="组号"
            width="120">
          <template slot-scope="scope">
            <sn-select
                class="move-up-5"
                :to-select="scope.row.groupId.value"
                @selectChange="getGroupId($event,scope.row)"
                :select-data="$store.state.groupIdData"/>
          </template>
        </el-table-column>

        <!-- 单次用量 -->
        <el-table-column prop="onceUse" label="单次用量" width="160">
          <template slot-scope="scope">
            <div class="to-flex">
              <sn-input
                  @inputChange="getOnceUse($event,scope.row)"
                  :input-value-from-parent="scope.row.onceUse"
                  class="move-up-1"/>
              <sn-select
                  @selectChange="getOnceUseUnit($event,scope.row)"
                  :select-data="$store.state.onceUseUnit"
                  class="move-up-1"/>
            </div>
          </template>
        </el-table-column>

        <!-- 用法 -->
        <el-table-column prop="useMethod" label="用法" width="140">
          <template slot-scope="scope">
            <sn-select
                @selectChange="getUseMethod($event,scope.row)"
                class="move-up-5"
                :select-data="$store.state.useMethodData"/>
          </template>
        </el-table-column>

        <!-- 频率 -->
        <el-table-column prop="frequency" label="频率" width="117">
          <template slot-scope="scope">
            <sn-select
                @selectChange="getFrequency($event,scope.row)"
                class="move-up-5"
                :select-data="$store.state.frequencyData"
                :select-style="{'width':'105px'}"/>
          </template>
        </el-table-column>

        <!-- 天数 -->
        <el-table-column
            prop="days"
            label="天数"
            width="95">
          <template slot-scope="scope">
            <sn-select
                @selectChange="getDays($event,scope.row)"
                class="move-up-5"
                :select-data="$store.state.daysData"/>
          </template>
        </el-table-column>

        <!-- 总量 -->
        <el-table-column prop="total" label="总量" width="160">
          <template slot-scope="scope">
            <div class="to-flex">
              <sn-input
                  @inputChange="getTotal($event,scope.row)"
                  class="move-up-1"
                  :input-value-from-parent="scope.row.total"/>
              <sn-select
                  @selectChange="getTotalUnit($event,scope.row)"
                  class="move-up-1"
                  :select-data="$store.state.totalUnitData"/>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ensure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//导入处方对象
import {PrescriptionItem} from "@/utils/object";

export default {
  data() {
    return {
      dialogTableVisible: false,
      tableData: [
        new PrescriptionItem(
            '',
            {
              value: 0,
            },
            '',
            '1',
            {
              value: 0,
            },
            {
              value: 0,
            },
            {
              value: 0,
            },
            {
              value: 0,
            },
            '1',
            {
              value: 0,
            },
            ''
        )
      ]
    }
  },

  props: {
    buttonDescription: {
      type: String,
      default: ''
    },
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
  },

  methods: {
    //取消
    cancel() {
      this.dialogTableVisible = false
    },

    //确认修改单击事件
    ensure() {
      this.dialogTableVisible = false
      this.$emit('batchSettingAfter', this.tableData[0])
    },

    //批量设置点击事件
    batchSettingBefore() {
      this.$emit('batchSettingBefore')
    },

    //获取组号
    getGroupId(groupId, row) {
      row.groupId = groupId
    },

    //获取单次用量
    getOnceUse(onceUse, row) {
      row.onceUse = onceUse
    },

    //获取单次用量单位
    getOnceUseUnit(onceUseUnit, row) {
      row.onceUseUnit = onceUseUnit
    },

    //获取药品用法
    getUseMethod(useMethod, row) {
      row.useMethod = useMethod
    },

    //获取频率
    getFrequency(frequency, row) {
      row.frequency = frequency
    },

    //获取天数
    getDays(days, row) {
      row.days = days
    },

    //获取总量
    getTotal(total, row) {
      row.total = total
    },

    //获取总量单位
    getTotalUnit(totalUnit, row) {
      row.totalUnit = totalUnit
    },
  },
}
</script>

<style scoped>
.el-dialog__title {
  margin-top: 10px;
}

/deep/ .el-input--suffix .el-input__inner {
  padding: 0 5px;
}
</style>