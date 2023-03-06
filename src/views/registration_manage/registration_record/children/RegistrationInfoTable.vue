<template>
  <div>
    <sn-row-has-four-col
        class="to-flex"
        :one="24">
      <!--      <sn-select-->
      <!--          :select-data="registrationDoctor"-->
      <!--          slot="one-col"-->
      <!--          class="to-flex move-down-little"-->
      <!--          :select-style="{'width':'140px'}">-->
      <!--        <sn-text text="挂号医生" slot="title" class="margin-right-20 move-down"/>-->
      <!--      </sn-select>-->

      <!--      <sn-date-picker-with-round slot="two-col" class="to-flex" :date-picker-style="{'width':'250px'}">-->
      <!--        <sn-text text="就诊时间" slot="title" class="margin-right-20 move-down-date"/>-->
      <!--      </sn-date-picker-with-round>-->

      <sn-search-input input-placeholder="输入患者姓名" @inputContentChange="filterSick" slot="one-col"
                       class="move-down-little"/>
    </sn-row-has-four-col>
    <el-table :data="pageData" stripe style="width: 100%"
              :header-cell-style="{
                'text-align':'center',
                'background-color':'#ECF5FF'
              }"
              :cell-style="{'text-align':'center'}">
      <el-table-column prop="id" label="序号" width="55"></el-table-column>
      <!--      <el-table-column prop="registrationId" label="挂号单" width="110px"/>-->
      <el-table-column prop="name" label="患者姓名"/>
      <el-table-column prop="sex" label="性别" width="55">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.sex === 1 ? "男" : "女" }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="55"/>
      <el-table-column prop="phone" label="手机号码" width="110"/>
      <!--      <el-table-column prop="department" label="科室"/>-->
      <!--      <el-table-column prop="doctor" label="挂号医生"/>-->
      <!--      <el-table-column prop="meetDoctorDate" label="接诊时间" width="100px"/>-->
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small">病情</el-button>
          <el-button type="text" size="small">处方</el-button>
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
export default {
  name: "RegistrationInfoTable",
  data() {
    return {
      //每页数据
      pageData: [],
      registrationDoctor: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '陈平安'
        },
        {
          value: 2,
          label: '宁姚'
        },
      ],
      tableData2: []
    }
  },
  props: {
    //数据
    tableData: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    filterSick(name) {

    },

    getPageData(pageData) {
      this.pageData = pageData
    },
    toNewSeeDoctor() {
      this.$router.push("/registrationManageRoot/newSeeDoctor")
    },
    toEditRegistrationInfo() {
      this.$router.push("/registrationManageRoot/editRegistrationInfo")
    },
    lookDetail() {
      this.$router.push("/registrationManageRoot/lookRegistrationInfo")
    },
    created(){
      this.tableData2 = this.tableData.slice()
    }
  },
}
</script>

<style scoped>
.status {
  color: #66D4A2;
}

.move-down {
  position: relative;
  top: 10px;
}

.move-down-little {
  position: relative;
  top: 2px;
}

.move-down-date {
  position: relative;
  top: 12px;
}
</style>
