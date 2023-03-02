<template>
  <div>
    <el-divider/>
    <sn-row-has-two-col :left="22" :right="2">
      <sn-text
          slot="one-col"
          :move-down="10"
          text="出库药品信息"
          font-color="#21A3F1"
          :font-size="18"
          font-weight="bold"/>
      <el-button
          type="danger"
          slot="two-col"
          plain
          @click="dialogFormVisible = true">
        <sn-text text="添加药品"/>
      </el-button>
    </sn-row-has-two-col>
    <el-dialog title="选择药品" width="60%" :visible.sync="dialogFormVisible">
      <sn-row-has-two-col
          class="to-flex margin-bottom-20"
          :left="7"
          :right="12">
        <sn-select
            :select-data="prescriptionData"
            :select-style="{'width':'170px'}"
            slot="one-col" class="to-flex">
          <sn-text
              text="处方类别"
              slot="title"
              :move-down="11"
              class="margin-right"/>
        </sn-select>
        <!-- 搜索框-->
        <sn-search-input
            :input-style="{'width':'250px'}"
            input-placeholder="输入药品编码/药品名称"
            slot="two-col" class="move-up"/>
      </sn-row-has-two-col>
      <el-table
          ref="multipleTable"
          :data="tableData"
          height="350"
          :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
          :cell-style="{'text-align':'center'}"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column prop="id" label="序号" width="55"/>
        <el-table-column prop="drugId" label="药品编码"/>
        <el-table-column prop="name" label="药品名称"/>
        <el-table-column prop="prescriptionType" label="处方类别"/>
        <el-table-column prop="specification" label="规格"/>
        <el-table-column prop="manufacturers" label="生产厂家"/>
        <el-table-column prop="stock" label="库存">
          <template slot-scope="scope">
            <sn-text :text="scope.row.stock" font-color="pink"/>
          </template>
        </el-table-column>
        <el-table-column prop="buyPrice" label="采购价格(元)"/>
        <el-table-column prop="salePrice" label="零售价格(元)"/>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "NotCheckTableTitle",
  data() {
    return {
      dialogFormVisible: false,
      multipleSelection: [],
      tableData: [
        {
          id: '1',
          drugId: '2165123',
          name: '超敏C-反应蛋白',
          prescriptionType: '西/成药',
          specification: '6g*10袋/盒',
          manufacturers: '上海医药集团',
          stock: '110盒',
          buyPrice: '12000',
          salePrice: '226121',
        }
      ],
      prescriptionData: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '西/成药'
        },
        {
          value: 2,
          label: '中药'
        },
      ]
    }
  },
  methods: {
    handleChange(value) {

    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
}
</script>

<style scoped lang="less">
.move-down {
  position: relative;
  top: 4.5px;
}
</style>