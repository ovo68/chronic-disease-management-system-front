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
      <el-table-column prop="number" label="角色编号"/>
      <el-table-column prop="name" label="角色名称"/>
      <el-table-column prop="desc" label="角色简介" width="200"/>
      <el-table-column prop="createTime" label="创建时间" width="100"/>
      <el-table-column prop="status.value" label="角色状态">
        <template slot-scope="scope">
          <el-switch
              v-model="scope.row.status.value === 1"
              active-color="#13ce66"
              inactive-color="#ff4949">
          </el-switch>
        </template>

      </el-table-column>

      <el-table-column  label="操作">
        <template>
          <div>
            <el-link type="primary"
                     :underline="false"
                     class="margin-right">编辑
            </el-link>
            <el-link
                type="primary"
                :underline="false"
                class="margin-right">删除
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

import {mapGetters} from "vuex";

export default {
  name: "RoleListTable",
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  computed: {
    ...mapGetters({
      tableData: 'getRoleByNameData',
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