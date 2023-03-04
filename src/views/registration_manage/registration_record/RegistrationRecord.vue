<!-- 挂号记录 -->
<template>
  <sn-card-with-title>
<!--    <registration-record-title slot="title"/>-->
    <div slot="content">

<!--      <find-info-from-table/>-->
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
      registrationInfoTableData: [
        {
          id: 1,
          name: '陈平安',
          sex: '男',
          age: 12,
          phoneNumber: '1333221231',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
        },
        {
          id: 2,
          name: '石昊',
          sex: '男',
          age: 33,
          phoneNumber: '1345575676',
          doctor: '王阳明',
          meetDoctorDate: '1996-12-25 12:05:12',
        },
        {
          id: 3,
          name: '叶凡',
          sex: '男',
          age: 22,
          phoneNumber: '1453345325',
          doctor: '宁姚',
          meetDoctorDate: '1996-12-25 12:05:12',
        },
      ],
    }
  },
  methods:{
    initAllRegistrationInfoTableData(){
      // TODO 发请求拿就诊病人数据数据
    }
  },
  created() {
    this.initAllRegistrationInfoTableData()
  }
}
</script>

<style scoped>

</style>
