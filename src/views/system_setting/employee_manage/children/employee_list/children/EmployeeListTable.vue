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
      <el-table-column prop="number" label="工号"/>
      <el-table-column prop="name" label="员工姓名"/>
      <el-table-column prop="gender.description" label="员工性别"/>
      <el-table-column prop="age" label="年龄"/>
      <el-table-column prop="tel" label="手机号码"/>
      <el-table-column prop="department.name" label="所属科室"/>
      <el-table-column prop="role.name" label="角色" width="100">
        <template slot-scope="scope">
          {{ scope.row.role[0].name }}
          {{ scope.row.role[1].name }}
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="100"/>
      <el-table-column prop="status.value" label="员工状态">
        <template slot-scope="scope">
          <el-switch
              @change="changeEmployeeStatus(scope.row)"
              v-model="scope.row.status.value === 1"
              active-color="#13ce66"
              inactive-color="#ff4949">
          </el-switch>
        </template>

      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <div>
            <el-link type="primary"
                     :underline="false"
                     class="margin-right">编辑
            </el-link>
            <el-link
                @click="delCurrentClickItem(scope.row.id)"
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

import {mapActions, mapGetters} from "vuex";

export default {
  name: "CheckItemSettingTable",
  data() {
    return {
      //每页数据
      pageData: [],
    }
  },
  props: {
    tableData: Array
  },

  methods: {

    getPageData(pageData) {
      this.pageData = pageData
    },
    changeEmployeeStatus(data) {
      this.$emit("changeEmployeeStatus", data)
    },
    delCurrentClickItem(id) {
      this.myUtils.deleteConfirm(this, () => {
        // this.$store.dispatch('方法名','参数')
        this.$emit("deleteConfirm", id)
      })
    },
  },
}
</script>

<style scoped>
</style>