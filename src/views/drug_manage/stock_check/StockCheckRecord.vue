<!-- 出库管理 -->
<template>
  <sn-card-with-title>
    <!-- 库存盘点记录 -->
    <stock-check-record-title
        class="margin-bottom"
        slot="title"/>
    <div slot="content">
      <!-- 库存盘点记录 -->
      <stock-check-record-find-bar
          @queryByDate="queryByDate"
          @inputDscValue="getInputDscValue"
          input-placeholder="输入盘点单号"/>
      <stock-check-record-table
          :table-data="stockCheckRecordTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import StockCheckRecordTitle
  from "@/views/drug_manage/stock_check/children/stock_check_title/StockCheckRecordTitle";
import StockCheckRecordTable
  from "@/views/drug_manage/stock_check/children/stock_check_table/StockCheckRecordTable";
import StockCheckRecordFindBar
  from "@/views/drug_manage/stock_check/children/stock_check_find_bar/StockCheckRecordFindBar";


import {
  //导入查询所有盘点的方法
  getArrangeAll,
  //导入模糊查询盘点的方法
  getArrangeByLike,
  //导入根据时间查询库存盘点记录
  queryStockCheckRecordByDate
} from "@/api/drug_manage/drugManage"


export default {
  name: "DrugChangePrice",
  data() {
    return {
      stockCheckRecordTableData: [],
    }
  },
  components: {
    StockCheckRecordFindBar,
    StockCheckRecordTitle,
    StockCheckRecordTable,
  },
  methods: {
    //根据时间查询盘点记录
    queryByDate(date) {
      if (date !== null) {
        queryStockCheckRecordByDate(date[0], date[1]).then(res => {
          this.stockCheckRecordTableData = res.data
          for (let i = 0; i < res.data.length; i++) {
            this.$set(this.stockCheckRecordTableData[i], 'ids', i + 1)
          }
        })
      } else {
        this.toGetArrangeAll()
      }
    },

    toGetArrangeAll() {
      getArrangeAll().then(res => {
        this.stockCheckRecordTableData = res.data;
        for (let i = 0; i < res.data.length; i++) {
          this.$set(this.stockCheckRecordTableData[i], 'ids', i + 1)
        }
      })
    },
    getInputDscValue(value) {
      getArrangeByLike(value).then(res => {
        this.stockCheckRecordTableData = res.data;
        for (let i = 0; i < res.data.length; i++) {
          this.$set(this.stockCheckRecordTableData[i], 'ids', i + 1)
        }
      })
    }
  },
  created() {
    this.toGetArrangeAll()
  }
}
</script>

<style scoped>

</style>