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
      <el-table-column prop="name" label="挂号费名称"/>
      <el-table-column prop="money" label="金额(元)"/>
      <el-table-column prop="cost" label="成本(元)"/>
      <el-table-column prop="createTime" label="创建时间" width="160"/>
      <el-table-column prop="creator.name" label="创建人员"/>
      <el-table-column prop="discountable.description" label="允许会员折扣"/>
      <el-table-column prop="status.description" label="费用状态"/>


      <el-table-column label="操作" width="120">
        <template slot-scope="scope">

            <el-link type="primary"
                     :underline="false"
                     @click="edit"
                     class="margin-right">编辑
            </el-link>
            <el-link type="primary"
                     :underline="false"
                     @click="deleteDate"
                     class="margin-right">删除
            </el-link>

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
  name: "MedicalCostList",
  data() {
    return {
      //每页数据
      pageData: [

      ],
    }
  },
  computed: {
    ...mapGetters({
      tableData: 'getRegisterCostByName'
    })
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
    edit(){
      this.$router.push('/home/registerCostEdit/20')
    },
    deleteDate(){

    },
  },
}
</script>

<style scoped>
</style>