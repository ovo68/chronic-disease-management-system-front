<template>
  <sn-card-with-title>
    <div slot="title">
      <sn-title
          title="诊断信息"
          :title-style="titleStyle"/>
    </div>
    <div slot="content">
      <sn-row-has-four-col>
        <sn-input
            @inputChange="getSickName"
            :input-value-from-parent="sick.name"
            slot="one-col"
            ref="name">
          <sn-must-text text="患者姓名" slot="title"/>
        </sn-input>
        <sn-input-complex
            @inputChange="getSickAge"
            @selectChange="getSickAgeUnit"
            :choose-item="$store.state.age"
            :input-value="sick.age"
            slot="two-col"
            ref="age">
          <sn-must-text
              slot="title"
              text="患者年龄"/>
        </sn-input-complex>
        <sn-select
            @selectChange="getSickGender"
            :to-select="sick.sex.value"
            slot="three-col"
            :select-data="$store.state.gender"
            ref="gender">
          <sn-must-text text="性别" slot="title"/>
        </sn-select>
        <sn-input
            @inputChange="getSickPhoneNumber"
            :input-value-from-parent="sick.phone"
            slot="four-col"
            ref="phoneNumber">
          <sn-must-text text="手机号码" slot="title"/>
        </sn-input>
      </sn-row-has-four-col>

      <sn-row-has-two-col class="margin-top-20">
        <sn-select-has-select
            :select-value="sick.address"
            :options="$store.state.address"
            @selectChange="getAddress"
            slot="one-col">
          <sn-must-text text="地址" slot="title"/>
        </sn-select-has-select>
        <sn-input
            :input-value-from-parent="sick.drugInfo"
            @inputChange="getUseDrugInfo"
            slot="two-col">
          <sn-must-text
              text="用药信息" slot="title"/>
        </sn-input>
      </sn-row-has-two-col>
      <el-row style="margin-top: 10px">
        <el-col :span="24">
          <sn-input :input-value-from-parent="sick.pastMedical"
                    @inputChange="getPastMedical">
            <sn-must-text
                text="过往病历" slot="title"/>
          </sn-input>
        </el-col>
      </el-row>
      <sn-row-has-two-col :left=12 :right=12 class="margin-top-20">
        <sn-input
            :input-value-from-parent="sick.examInfo"
            @inputChange="getExamInfo"
            slot="one-col">
          <sn-must-text
              text="体检信息" slot="title"/>
        </sn-input>
        <sn-input
            :input-value-from-parent="sick.doctorAdvice"
            @inputChange="getDoctorAdvice"
            slot="two-col">
          <sn-must-text text="医嘱" slot="title"/>
        </sn-input>
      </sn-row-has-two-col>

      <div class="to-flex" style="margin-top: 12px">
        <el-button
            type="primary"
            plain @click="submitSickInfo">
          <sn-text text="提交"/>
        </el-button>
      </div>
    </div>
  </sn-card-with-title>
</template>

<script>
import {post} from "@/api/request";

export default {
  name: "PersonBaseInfo",
  data() {
    return {
      //是否显示诊断信息
      isShowDiagnose: true,

      sick: {
        sex: {
          value: 0,
          label: '男'
        },
        address: [],
        name: '',
        age: 0,
        phone: '',
        drugInfo: '',
        doctorAdvice: '',
        doctor: '',
        pastMedical: '',
        examInfo: '',
        role: 0
      },
      titleStyle: {
        'color': '#21A3F1',
        'font-size': '18px'
      }
    }
  },
  methods: {
    submitSickInfo() {
      // console.log(this.$refs.age);
      let sickSave = JSON.parse(JSON.stringify(this.sick));
      sickSave.address = sickSave.address.toString()
      sickSave.doctorAdvice = sickSave.doctorAdvice.toString()
      sickSave.sex = sickSave.sex.value
      // console.log(sickSave)
      // console.log(this.sick)
      //  TODO 发请求保存信息
      post("/doctor/saveSick", sickSave)
          .then(data => {
            if (data.code === 10001) {
              this.$message.success("添加成功")
              this.sick = {
                sex: {
                  value: 1,
                  label: '男'
                },
                address: [],
                name: '',
                age: 0,
                phone: '',
                drugInfo: '',
                doctorAdvice: '',
                pastMedical: '',
                examInfo: '',
                role: 0
              }
              // console.log(this.sick)
            } else {
              this.$message.error(data.msg)
            }
          })
    },

    getPastMedical(pastMedical) {
      this.$set(this.sick, 'pastMedical', pastMedical)
    },

    getUseDrugInfo(drug) {
      this.$set(this.sick, 'drugInfo', drug)
    },
    getDoctorAdvice(advices) {
      this.$set(this.sick, 'doctorAdvice', advices)
    },
    getExamInfo(examInfo) {
      this.$set(this.sick, 'examInfo', examInfo)
    },


    //获取患者姓名
    getSickName(name) {
      this.$set(this.sick, 'name', name)
    },
    //获取患者年龄
    getSickAge(age) {
      this.$set(this.sick, 'age', age)
    },
    //获取患者年龄单位
    getSickAgeUnit(ageUnit) {
      this.$set(this.sick, 'ageUnit', ageUnit)
    },
    //获取出生日期
    getBirthday(birthday) {
      this.$set(this.sick, 'birthday', birthday)
    },
    //获取患者性别
    getSickGender(gender) {
      this.$set(this.sick, 'sex', gender)
    },
    //获取手机号码
    getSickPhoneNumber(phone) {
      this.$set(this.sick, 'phone', phone)
    },
    //获取证件号码
    getIdCard(idCard) {
      this.$set(this.sick, 'idCard', idCard)
    },
    //获取会员类型
    getVipType(vipType) {
      this.$set(this.sick, 'vip', {
        level: vipType.value
      })
    },
    //获取会员到期时间
    getDueDate(dueDate) {
      this.$set(this.sick, 'dueDate', dueDate)
    },
    //获取地址
    getAddress(address) {
      this.$set(this.sick, 'address', address)
    },
    //获取详细地址
    getDetailAddress(addressDetail) {
      this.$set(this.sick, 'addressDetail', addressDetail)
    },
  },
  props: {
    showDiagnose: Boolean,
    allSicks: {
      type: Array,
      default() {
        return []
      }
    },
    //通过患者id查到的患者信息
    sickInfoById: Object,
    //能否编辑患者个人信息
    isDisabledEditPersonInfo: Boolean,
  },

  watch: {
    //是否显示诊断信息
    showDiagnose(val) {
      this.isShowDiagnose = val
    },
    sickInfoById(val) {
      this.sick = val
      let addressArray = this.myUtils.splitString(val.address, ',')
      this.$set(this.sick, 'addressArray', addressArray)
      this.isShowDiagnose = false
    },
  }
}
</script>

<style scoped>
.el-button {
  width: 100%;
}
</style>
