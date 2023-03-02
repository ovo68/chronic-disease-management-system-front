<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="prescriptionItemData"
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
        :height="405">

      <!-- 多选框-->
      <el-table-column type="selection"/>

      <!-- 序号 -->
      <el-table-column
          prop="id"
          label="序号"
          width="50"/>

      <!-- 组号 -->
      <el-table-column
          prop="groupId"
          label="组号"
          width="80px">
        <template slot-scope="scope">
          <sn-select
              class="move-up-5"
              :to-select="scope.row.groupId.value"
              @chooseSelect="getGroupId($event,scope.row)"
              :select-data="$store.state.groupIdData"/>
        </template>
      </el-table-column>

      <!-- 名称 -->
      <el-table-column
          prop="name"
          label="名称"/>

      <!-- 单次用量 -->
      <el-table-column prop="onceUse" label="单次用量" width="147">
        <template slot-scope="scope">
          <div class="to-flex">
            <sn-input
                @inputChange="getOnceUse($event,scope.row)"
                :input-value-from-parent="scope.row.onceUse"
                class="move-up-1"/>
            <sn-select
                @chooseSelect="getOnceUseUnit($event,scope.row)"
                :to-select="scope.row.onceUseUnit.value"
                :select-data="$store.state.onceUseUnit"
                class="move-up-1"/>
          </div>
        </template>
      </el-table-column>

      <!-- 用法 -->
      <el-table-column prop="useMethod" label="用法" width="120">
        <template slot-scope="scope">
          <sn-select
              @chooseSelect="getUseMethod($event,scope.row)"
              class="move-up-5"
              :to-select="scope.row.useMethod.value"
              :select-data="$store.state.useMethodData"
              :select-style="{'width':'105px'}"/>
        </template>
      </el-table-column>

      <!-- 频率 -->
      <el-table-column prop="frequency" label="频率" width="117">
        <template slot-scope="scope">
          <sn-select
              @chooseSelect="getFrequency($event,scope.row)"
              class="move-up-5"
              :to-select="scope.row.frequency.value"
              :select-data="$store.state.frequencyData"
              :select-style="{'width':'105px'}"/>
        </template>
      </el-table-column>

      <!-- 天数 -->
      <el-table-column
          prop="days"
          label="天数"
          width="80px">
        <template slot-scope="scope">
          <sn-select
              @chooseSelect="getDays($event,scope.row)"
              :to-select="scope.row.days.value"
              class="move-up-5"
              :select-data="$store.state.daysData"/>
        </template>
      </el-table-column>

      <!-- 总量 -->
      <el-table-column prop="total" label="总量" width="145">
        <template slot-scope="scope">
          <div class="to-flex">
            <sn-input
                @inputChange="getTotal($event,scope.row)"
                class="move-up-1"
                :input-value-from-parent="scope.row.total"/>
            <sn-select
                @chooseSelect="getTotalUnit($event,scope.row)"
                :to-select="scope.row.totalUnit.value"
                class="move-up-1"
                :select-data="$store.state.totalUnitData"/>
          </div>
        </template>
      </el-table-column>

      <!-- 单价 -->
      <el-table-column prop="price" label="单价" width="100px"/>

      <!-- 移除 -->
      <el-table-column prop="remove" label="移除" width="95px">
        <template slot-scope="scope">
          <el-button
              @click="removeItem(scope.row.id)"
              type="danger"
              icon="el-icon-delete"
              plain
              circle>
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
//导入处方对象
import {PrescriptionItem} from "@/utils/object";

export default {

  data() {
    return {
      //处方序号
      number: 1,
      //保存处方项
      prescriptionItemData: [],

      //选中项
      multipleSelection: [],
    }
  },

  watch: {
    tableData(addContents) {
      for (let content of addContents) {
        const prescriptionItem = new PrescriptionItem(
            this.number++,
            {
              value: 0,
            },
            content.name,
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
            content.purchasePrice
        )
        this.prescriptionItemData.push(prescriptionItem)
      }
    },
  },

  computed: {
    headerCellFontSize() {
      return this.headerCellFontSizeNumber + 'px'
    }
    ,
    cellFontSize() {
      return this.cellFontSizeNumber + 'px'
    }
  },
  props: {
    //选择器相关
    //默认选中哪个
    toSelect: {
      type: Number,
      default: 0
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

    //是否需要增加按钮
    hasAddButton: {
      type: Boolean,
      default: true
    },

    //添加按钮内容
    addTitle: {
      type: String,
      default: '添加'
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

      this.prescriptionItemData.splice(0, 1)

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

    },
  }
}
</script>
<style scoped>
/deep/ .el-input--suffix .el-input__inner {
  padding: 0 5px;
  height: 32px;
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

</style>