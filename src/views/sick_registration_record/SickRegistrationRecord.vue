<template>
  <div>
    <el-row :gutter="10" class="first-row" style="padding-bottom: 30px"
            v-for="(record, index) in registrationRecordList" :key="index">
      <el-col :offset="4" :span="8" class="chart-left">
        <el-card class="" shadow="hover">
          <div slot="header" class="clearfix">
            <el-tag>{{ record.name }}</el-tag>
            <el-button @click="openDraw(record)" size="medium"
                       style="float: right;margin-top: 1px; padding: 5px 0; width: 120px" type="text">
              <span style="font-size: 8px">
              点击查看详情
              </span>
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-drawer
        title="诊断详情"
        :visible.sync="drawer"
        :direction="direction"
        :with-header="false">
      <el-descriptions class="margin-top" title="诊断详情" :column="1" border>
        <el-descriptions-item label="姓名">{{ currentRecord.name }}</el-descriptions-item>
        <el-descriptions-item label="电话">{{ currentRecord.phone }}</el-descriptions-item>
        <el-descriptions-item label="体检信息">{{ currentRecord.examInfo }}</el-descriptions-item>
        <el-descriptions-item label="病史">{{ currentRecord.pastMedical }}</el-descriptions-item>
        <el-descriptions-item label="医嘱">{{ currentRecord.doctorAdvice }}</el-descriptions-item>
        <el-descriptions-item label="处方">{{ currentRecord.drugInfo }}</el-descriptions-item>
      </el-descriptions>
    </el-drawer>
  </div>
</template>

<script>
import {get} from "@/api/request";

export default {
  name: "SickRegistrationRecord",
  data() {
    return {
      registrationRecordList: [],
      drawer: false,
      direction: 'rtl',
      currentRecord: {doctor: '', doctorAdvices: '', useDrugInfo: '', date: ''},
    }
  },
  methods: {
    openDraw(record) {
      this.currentRecord = record
      this.drawer = true
    },
    initData() {
      let id
      if (this.$store.state.user.id !== null) {
        id = this.$store.state.user.id
      } else {
        id = JSON.parse(localStorage.getItem("user")).id
      }
      get(`/sick/${id}`)
          .then(data => {
            if (data.code === 10001) {
              this.registrationRecordList = this.registrationRecordList.concat(data.data)
            } else {
              this.$message.error(data.msg)
            }
          })
    },

  },
  created() {
    this.initData()
  }
}
</script>

<style scoped>
.margin-top {
  margin: 12px;
}
</style>
