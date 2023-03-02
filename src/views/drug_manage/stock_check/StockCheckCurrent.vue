<template>
  <sn-card-with-title>
    <!-- 标题 -->
    <StockCheckCurrentTitle
        @saveCheckStock="saveCheckStock"
        slot="title"/>

    <div slot="content">
      <!-- 搜索导航栏-->
      <stock-check-find-bar
          input-placeholder="输入药品名称"/>

      <!-- 表格 -->
      <current-check-table
          ref="currentCheckTable"
          :table-data="currentCheckTableData"/>
    </div>
  </sn-card-with-title>
</template>

<script>
import CurrentCheckTable
  from "@/views/drug_manage/stock_check/children/stock_check_table/CurrentCheckTable";
import StockCheckCurrentTitle
  from "@/views/drug_manage/stock_check/children/stock_check_title/StockCheckCurrentTitle";
import StockCheckFindBar
  from "@/views/drug_manage/stock_check/children/stock_check_find_bar/StockCheckFindBar";

import {queryCurrentCheckRecordDetail} from "@/api/drug_manage/drugManage";

export default {
  name: "StockCheckCurrent",
  data() {
    return {
      currentCheckTableData: []
    }
  },
  components: {
    CurrentCheckTable,
    StockCheckFindBar,
    StockCheckCurrentTitle
  },
  methods: {
    //保存盘点
    saveCheckStock() {

    },

    //根据id查询正在盘点的记录详情
    toLookCurrentDetail() {
      queryCurrentCheckRecordDetail(this.$route.params.id).then(res => {
        this.currentCheckTableData = res.data.drugsS
      })
    }
  },
  created() {

    this.toLookCurrentDetail()
  }
}
</script>

<style scoped>

</style>