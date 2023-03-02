<template>
  <el-table
      :data="tableData" stripe style="width: 100%"
      height="400"
      :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
      :cell-style="{'text-align':'center'}">
    <el-table-column prop="id" label="序号"></el-table-column>
    <el-table-column prop="familyRelation" label="家庭关系"/>
    <el-table-column prop="name" label="姓名"/>
    <el-table-column prop="sex" label="性别"/>
    <el-table-column prop="age" label="年龄"/>
    <el-table-column prop="phoneNumber" label="手机号码" width="110px"/>
    <el-table-column prop="createDate" label="创建时间" width="100px"/>
    <el-table-column label="操作" width="230">
      <template slot-scope="scope">
        <el-link type="primary"
                 class="margin-right"
                 :underline="false">取消关联
        </el-link>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "PersonInfoAboutFamilyTable",
  data() {
    return {
      tableData: [
        {
          id: '1',
          familyRelation: '父子',
          name: '陈平安',
          sex: '男',
          age: '12',
          phoneNumber: '手机号码',
          createDate: '1996-12-23 11:23:23'
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>