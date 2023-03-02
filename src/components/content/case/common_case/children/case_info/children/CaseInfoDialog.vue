<template>
  <div class="case-info-dialog">
    <el-link type="info" :underline="false" class="search-sick-icon">
      <i class="el-icon-search" @click="dialogTableVisible = true"/>
    </el-link>
    <el-dialog :visible.sync="dialogTableVisible" width="55%">
      <div slot="title">
        <sn-title title="调用病例信息" class="margin-bottom-20"/>
        <sn-search-input class="to-flex" :input-style="{'width':'180px'}">
          <sn-must-text text="病例信息搜索" slot="title" class="margin-right" :move-down="7"/>
        </sn-search-input>
      </div>
      <el-table
          :data="gridData"
          height="350"
          :cell-style="{
             'text-align': 'center',
          }"
          :header-cell-style="{
             'text-align': 'center',
          }">
        <el-table-column prop="id" label="序号" width="50"/>
        <el-table-column prop="caseContent" label="病例内容" width="400"/>
        <el-table-column prop="createTime" label="创建时间" width="180"/>
        <el-table-column prop="createPeople" label="创建人员" width="80"/>
        <el-table-column prop="operate" label="操作" width="80">
          <template slot-scope="scope">
            <el-link type="primary" @click="useIt" :underline="false">调用</el-link>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'CaseInfoDialog',
  data() {
    return {
      gridData: [
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
        {
          id: 1,
          caseContent: '这是一段病例内容',
          createTime: '2019-11-12 12:08:28',
          createPeople: '王阳明',
          operate: ''
        },
      ],
      dialogTableVisible: false,
    }
  },
  methods: {
    useIt() {

    }
  }

}
</script>

<style scoped lang="less">
.case-info-row {
  .case-info-dialog {
    /deep/ .el-input__inner {
      height: 35px;
    }
  }
}
.search-sick-icon {
  text-align: right;
  font-size: 10px;
  color: #999999;
  float: right;
  position: relative;
}
</style>