<template>
  <div class="margin-top">
    <el-table
        :data="pageData"
        stripe
        style="width: 100%"
        :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
        :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="content" label="过敏史"/>
      <el-table-column prop="createTime" label="创建时间"/>
      <el-table-column prop="creator.name" label="创建人"/>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          删除  编辑
        </template>
      </el-table-column>
    </el-table>

    <sn-page
        :table-data="tableData"
        slot="two-col"
        class="float-right margin-top-20 margin-bottom-20"
        @getPageData="getPageData"/>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "AllergicHistoryInfoTable",
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  computed: {
    ...mapGetters({
      tableData: 'getAllergiesInfoData'
    })
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
  },
}
</script>

<style scoped>
</style>