<!-- 挂号记录 -->
<template>
  <sn-card-with-title>
    <!--    <registration-record-title slot="title"/>-->
    <div slot="content">

      <!--      <find-info-from-table/>-->
      <!--      <registration-info-table :table-data="registrationInfoTableData"/>-->
      <div>
        <sn-row-has-four-col
            class="to-flex"
            :one="24">
          <sn-search-input input-placeholder="输入患者姓名" @inputContentChange="filterSick" slot="one-col"
                           class="move-down-little"/>
        </sn-row-has-four-col>
        <el-table :data="registrationInfoTableData" stripe style="width: 100%"
                  :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
                  :cell-style="{'text-align':'center'}">
          <el-table-column prop="id" label="序号" width="55"/>
          <el-table-column prop="name" label="患者姓名" width="120"/>
          <el-table-column prop="sex" label="性别" width="120">
            <template slot-scope="scope">
              <el-tag>{{ scope.row.sex === 1 ? "男" : "女" }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="age" label="年龄" width="120"/>
          <el-table-column prop="phone" label="手机号码" width="220"/>
          <el-table-column label="处方">
            <template slot-scope="scope">
              <el-popover
                  placement="top-start"
                  title="详细"
                  width="200"
                  trigger="hover"
                  :content="scope.row.drugInfo">
                <el-button slot="reference">{{ scope.row.drugInfo.substring(0,3)+"..." }}</el-button>
              </el-popover>
            </template>

          </el-table-column>
          <el-table-column label="医嘱">
            <template slot-scope="scope">
              <el-popover
                  placement="top-start"
                  title="详细"
                  width="200"
                  trigger="hover"
                  :content="scope.row.doctorAdvice">
                <el-button slot="reference">{{ scope.row.doctorAdvice.substring(0,3)+"..." }}</el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>

      </div>
    </div>
  </sn-card-with-title>
</template>
<script>
import RegistrationRecordTitle
  from "@/views/registration_manage/registration_record/children/RegistrationRecordTitle";
import FindInfoFromTable
  from "@/views/registration_manage/registration_record/children/FindInfoFromTable";
import RegistrationInfoTable
  from "@/views/registration_manage/registration_record/children/RegistrationInfoTable";

import {get} from "@/api/request";

export default {
  name: "RegistrationRecord",
  components: {
    RegistrationRecordTitle,
    FindInfoFromTable,
    RegistrationInfoTable
  },
  data() {
    return {
      registrationInfoTableData: [],
      //显示页码数
      pagerCount: 5,
      //每页数据
      pageData: [],
      // 每页多少条
      pageSize: 5,
      // 当前页
      currentPage: 1,
    }
  },
  methods: {
    // 每页多少条
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleCurrentChange(this.currentPage)
    },
    // 当前页
    handleCurrentChange(val) {
      this.currentPage = val;
      this.changePageData(this.tableData, val)
    },
    filterSick(name) {
      get("/doctor/nameLikeSick", {keyword: name}).then(data => {
        // console.log(data)
        if (data.code === 10001) {
          this.registrationInfoTableData = data.data
        }
      })
    },
    initAllRegistrationInfoTableData() {
      // TODO 发请求拿就诊病人数据数据
      get("/doctor/allSick").then(data => {
        // console.log(data)
        if (data.code === 10001) {
          this.registrationInfoTableData = data.data
        }
      })
    },
    getPageData(pageData) {
      this.pageData = pageData
    },
  },
  created() {
    this.initAllRegistrationInfoTableData()
  }
}
</script>

<style scoped>

</style>
