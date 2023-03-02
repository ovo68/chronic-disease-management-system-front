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
        :cell-style="{'text-align':'center'}"
    >
      <el-table-column prop="id" label="序号" width="50"/>
      <el-table-column prop="number" label="项目编号"/>
      <el-table-column prop="name" label="项目名称"/>
      <el-table-column prop="type.description" label="项目类别"/>
      <el-table-column prop="invoice.description" label="项目发票"/>
      <el-table-column prop="price" label="零售价(元)"/>
      <el-table-column prop="cost" label="成本价(元)"/>
      <el-table-column prop="unit.description" label="单位"/>
      <el-table-column prop="status.description" label="项目状态"/>
      <el-table-column prop="createTime" label="创建时间" width="100"/>
      <el-table-column  label="操作">
        <template  slot-scope="scope">
          <div v-if="scope.row.status.description === '启用'">
            <el-link type="primary"
                :underline="false"
                class="margin-right">编辑
            </el-link>
            <el-link
                @click="changeCheckItemStatus(scope.row)"
                type="primary"
                :underline="false"
                class="margin-right">停用
            </el-link>
          </div>
          <div v-else>
            <el-link type="primary"
                     :underline="false"
                     class="margin-right">编辑
            </el-link>
            <el-link
                @click="changeCheckItemStatus(scope.row)"
                type="primary"
                :underline="false"
                class="margin-right">启用
            </el-link>
          </div>
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

import {mapActions, mapGetters} from "vuex";

export default {
  name: "CheckItemSettingTable",
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  computed: {
    ...mapGetters({
      tableData: 'getCheckItemByNameAndCom'
    })
  },

  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
    ...mapActions([
      'asyncChangeCheckItemStatus',
    ])
    ,
    changeCheckItemStatus(data) {
      this.asyncChangeCheckItemStatus(data)
    }

  },
}
</script>

<style scoped>
</style>