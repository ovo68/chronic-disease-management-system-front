<template>
  <div >
    <el-table
        :data="tableData"
        :span-method="arraySpanMethod"
        border
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}"
        style="width: 100%"
    >
      <el-table-column
          prop="id"
          label="序号"
          width="80">
      </el-table-column>
      <el-table-column
          prop="name"
          label="年龄段">
      </el-table-column>
      <el-table-column
          prop="amount1"
          label="人次">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "PatientAgeAnalyseTable",
  data() {
    return {
      tableData: [{
        id: '合计',

        amount1: '590',

      }, {
        id: '1',
        name: '0-10岁',
        amount1: '100',

      }, {
        id: '2',
        name: '11-20岁',
        amount1: '100',

      }, {
        id: '3',
        name: '21-30',
        amount1: '100',

      }, {
        id: '4',
        name: '31-40岁',
        amount1: '100',

      }, {
        id: '5',
        name: '41-50岁',
        amount1: '100',

      }, {
        id: '6',
        name: '51-60岁',
        amount1: '100',

      }, {
        id: '7',
        name: '61-70岁',
        amount1: '100',

      }, {
        id: '8',
        name: '71-80岁',
        amount1: '100',

      }, {
        id: '9',
        name: '80岁以上',
        amount1: '100',

      }
      ]
    };
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
}
}
</script>

<style scoped>

</style>