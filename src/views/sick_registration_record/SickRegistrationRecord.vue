<template>
  <div>
    <el-row :gutter="10" class="first-row" style="padding-bottom: 30px"
            v-for="(record, index) in registrationRecordList" :key="index">
      <el-col :offset="4" :span="8" class="chart-left">
        <el-card class="" shadow="hover">
          <div slot="header" class="clearfix">
            <el-tag>{{ record.date }}</el-tag>
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
        <el-descriptions-item label="医生">{{ currentRecord.doctor }}</el-descriptions-item>
        <el-descriptions-item label="医嘱">{{ currentRecord.doctorAdvices }}</el-descriptions-item>
        <el-descriptions-item label="处方">{{ currentRecord.useDrugInfo }}</el-descriptions-item>
      </el-descriptions>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "SickRegistrationRecord",
  data() {
    return {
      registrationRecordList: [
        {doctor: '李医生', doctorAdvices: '多吃饭', useDrugInfo: '健胃消食片', date: '2023年3月4日'},
        {doctor: '张医生', doctorAdvices: '早睡早起', useDrugInfo: '褪黑素', date: '2023年3月5日'},
        {doctor: '王医生', doctorAdvices: '多运动', useDrugInfo: '维生素A', date: '2023年3月6日'},
      ],
      drawer: false,
      direction: 'rtl',
      currentRecord: {doctor: '', doctorAdvices: '', useDrugInfo: '', date: ''},
    }
  },
  methods: {
    openDraw(record) {
      this.currentRecord = record
      this.drawer = true
    }
  }
}
</script>

<style scoped>
.margin-top {
  margin: 12px;
}
</style>
