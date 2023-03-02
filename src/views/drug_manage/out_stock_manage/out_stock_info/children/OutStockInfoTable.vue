<template>
  <div class="margin-top">
    <el-table
        :data="pageData" stripe style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="ids" label="序号"></el-table-column>
      <el-table-column prop="number" label="出库单号"/>
      <el-table-column prop="outType.type" label="出库类型"/>
      <el-table-column prop="tableMaker.name" label="制单人员"/>
      <el-table-column prop="purchaseSum" label="采购金额"/>
      <el-table-column prop="saleSum" label="零售金额"/>
      <el-table-column prop="outWorker.name" label="出库人员"/>
      <el-table-column prop="createTime" label="创建时间" width="100"/>
      <el-table-column prop="checkStatus.description" label="审核状态">
        <template slot-scope="scope">
          <sn-text :text="scope.row.checkStatus.description" font-color="pink"/>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-link type="primary"
                   :underline="false"
                   @click="toOutStockPassCheck"
                   v-if="scope.row.checkStatus.description === '审核通过'"
                   class="margin-right">查看
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   @click="toOutStockNotPassCheck"
                   v-if="scope.row.checkStatus.description === '审核未通过'"
                   class="margin-right">查看
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   @click="toOutStockNotCheck"
                   v-if="scope.row.checkStatus.description === '未审核'"
                   class="margin-right">编辑
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   v-if="scope.row.checkStatus.description === '审核未通过' || scope.row.checkStatus.description === '未审核'"
                   class="margin-right">删除
          </el-link>
          <el-link type="primary"
                   :underline="false"
                   @click="outStockAgain"
                   class="margin-right">再次出库
          </el-link>

        </template>
      </el-table-column>


    </el-table>
    <sn-page
        :table-data="tableData"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>
import StockCheckWorkerInfo from "@/views/drug_manage/stock_check/children/StockCheckWorkerInfo";

export default {
  name: "OutStockManageTable",
  components: {
    StockCheckWorkerInfo
  },
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
    //查看审核通过
    toOutStockPassCheck() {
      this.$router.push('/drugManageRoot/outStockPassCheck')
    },
    //查看审核未通过
    toOutStockNotPassCheck() {
      this.$router.push('/drugManageRoot/outStockNotPassCheck')
    },
    //编辑未审核
    toOutStockNotCheck() {
      this.$router.push('/drugManageRoot/outStockNotCheck')
    },
    //再次出库
    outStockAgain() {
      this.$router.push('/drugManageRoot/outStockNotCheck')
    }
  },

}
</script>

<style scoped>
</style>