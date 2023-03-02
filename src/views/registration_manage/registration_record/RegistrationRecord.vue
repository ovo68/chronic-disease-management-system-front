<!-- 挂号记录 -->
<template>
  <sn-card-with-title>
    <registration-record-title slot="title"/>
    <div slot="content">
      <find-info-from-table/>
      <registration-info-table :table-data="registrationInfoTableData"/>
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

export default {
  name: "RegistrationRecord",
  components: {
    RegistrationRecordTitle,
    FindInfoFromTable,
    RegistrationInfoTable
  },
  data() {
    return {

      buttonNames: ['未就诊', '已就诊', '已退号'],

      registrationInfoTableData: [
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '未就诊',
        },
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '已就诊',
        },
        {
          id: 1,
          registrationId: '12166565123',
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '451125421',
          department: '全科',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
          needMoney: 12.03,
          actualMoney: 12.03,
          meetDoctorStatus: '已退号',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>