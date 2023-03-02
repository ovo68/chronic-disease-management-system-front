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
      <el-table-column prop="number" label="供应商编号"/>
      <el-table-column prop="name" label="蓝天制药厂"/>
      <el-table-column prop="contact" label="联系人"/>
      <el-table-column prop="phoneNumber" label="联系电话"/>
      <el-table-column prop="createTime" label="创建时间"/>
      <el-table-column prop="creator.name" label="创建人"/>
      <el-table-column prop="status.description" label="供应商状态"/>

      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-link type="primary" class="margin-right">编辑</el-link>
          <el-link @click="delCurrentClickItem(scope.row.id)"
              type="primary">删除</el-link>
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
import {mapGetters,mapActions} from "vuex";
export default {
  name: "SupplierManageTable",
  data() {
    return {
      //每页数据
      pageData: []
    }
  },
  methods: {
    getPageData(pageData) {
      this.pageData = pageData
    },
    ...mapActions([
       'asyncDelSupplierById'
    ]),

    delCurrentClickItem(id){
      this.myUtils.deleteConfirm(this,()=>{
        // this.$store.dispatch('方法名','参数')
        this.asyncDelSupplierById(id)
      })
    }
  },
  computed: {
    ...mapGetters({
      tableData: 'getSupplierList'
    })
  },
}
</script>

<style scoped>

</style>