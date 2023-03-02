<template>
  <sn-card-with-title>
    <div slot="title">
      <sn-title
          title="基本信息"
          :title-style="titleStyle"/>
    </div>
    <div slot="content">
      <sn-row-has-four-col>
        <sn-input-with-advice
            :is-disabled="isDisabledEditPersonInfo"
            @handleSelect="getSickInfo"
            @inputChange="getSickName"
            :input-value="sick.name"
            :select-data="allSicks"
            slot="one-col"
            ref="name">
          <sn-must-text
              slot="title"
              text="患者姓名"/>
        </sn-input-with-advice>
        <sn-input
            :is-disabled="true"
            :input-value-from-parent="vipNumber"
            slot="two-col"
            ref="sickId">
          <sn-must-text
              slot="title"
              text="患者卡号"/>
        </sn-input>
        <sn-input-complex
            :is-disabled="isDisabledEditPersonInfo"
            @inputChange="getSickAge"
            @selectChange="getSickAgeUnit"
            :choose-item="$store.state.age"
            :input-value="sick.age"
            slot="three-col"
            ref="age">
          <sn-must-text
              slot="title"
              text="患者年龄"/>
        </sn-input-complex>
        <sn-date-picker
            :is-disabled="isDisabledEditPersonInfo"
            @dateChange="getBirthday"
            :date-from-parent="sick.birthday"
            slot="four-col"
            ref="birth">
          <sn-must-text slot="title" text="出生日期"/>
        </sn-date-picker>
      </sn-row-has-four-col>
      <sn-row-has-four-col>
        <sn-select
            :disabled-select="isDisabledEditPersonInfo"
            @selectChange="getSickGender"
            :to-select="sick.gender.value"
            slot="one-col"
            :select-data="$store.state.gender"
            ref="gender">
          <sn-must-text text="性别" slot="title"/>
        </sn-select>
        <sn-input
            :is-disabled="isDisabledEditPersonInfo"
            @inputChange="getSickPhoneNumber"
            :input-value-from-parent="sick.phoneNumber"
            slot="two-col"
            ref="phoneNumber">
          <sn-must-text text="手机号码" slot="title"/>
        </sn-input>
        <sn-input
            :is-disabled="isDisabledEditPersonInfo"
            @inputChange="getIdCard"
            :input-value-from-parent="sick.idCard"
            slot="three-col">
          <sn-must-text text="证件号码" slot="title"/>
        </sn-input>
      </sn-row-has-four-col>
      <sn-row-has-two-col>
        <sn-select
            :disabled-select="isDisabledEditPersonInfo"
            @selectChange="getVipType"
            :to-select="sick.level"
            slot="one-col"
            :select-data="$store.state.vipType">
          <sn-must-text text="会员类型" slot="title"/>
        </sn-select>
        <sn-date-picker
            :is-disabled="isDisabledEditPersonInfo"
            @dateChange="getDueDate"
            :date-from-parent="sick.dueDate"
            slot="two-col">
          <sn-must-text text="到期时间" slot="title"/>
        </sn-date-picker>
      </sn-row-has-two-col>
      <sn-row-has-two-col class="margin-top-20">
        <sn-select-has-select
            :is-disabled="isDisabledEditPersonInfo"
            :select-value="sick.addressArray"
            :options="$store.state.address"
            @selectChange="getAddress"
            slot="one-col">
          <sn-must-text text="地址" slot="title"/>
        </sn-select-has-select>
        <sn-input
            :is-disabled="isDisabledEditPersonInfo"
            :input-value-from-parent="sick.addressDetail"
            @inputChange="getDetailAddress"
            slot="two-col">
          <sn-must-text
              text="详细地址" slot="title"/>
        </sn-input>
      </sn-row-has-two-col>
      <sn-row-has-two-col :left=12 :right=12 v-if="isShowDiagnose">
        <sn-select-create-item slot="one-col" :options="$store.state.diagnoseData">
          <sn-must-text text="诊断" slot="title"/>
        </sn-select-create-item>
        <sn-select-create-item slot="two-col" :options="$store.state.doctorAdviceData">
          <sn-must-text text="医嘱" slot="title"/>
        </sn-select-create-item>
      </sn-row-has-two-col>
    </div>
  </sn-card-with-title>
</template>

<script>
export default {
  name: "PersonBaseInfo",
  data() {
    return {
      //是否显示诊断信息
      isShowDiagnose: true,
      //患者编号
      vipNumber: this.$store.state.user.id + new Date().getTime(),
      sick: {
        gender: {
          value: 0,
          label: '男'
        },
        level: 0,
        addressArray: [],
        address: '',
        vipNumber: '',
        name: '',
        age: '',
        birthday: '',
        phoneNumber: '',
        idCard: '',
        dueDate: '',
        addressDetail: '',
        vip: ''
      },
      titleStyle: {
        'color': '#21A3F1',
        'font-size': '18px'
      }
    }
  },
  methods: {
    //获取患者信息
    getSickInfo(sick) {
      this.sick = sick
      this.vipNumber = sick.vipNumber
      this.$set(this.sick, 'level', sick.vip.level)
      this.$set(this.sick, 'address', this.myUtils.splitString(sick.address + '', ','))
      this.$set(this.sick, 'addressArray', sick.address)
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
      this.$set(this.sick, 'gender', gender)
    },
    //获取手机号码
    getSickPhoneNumber(phoneNumber) {
      this.$set(this.sick, 'phoneNumber', phoneNumber)
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
      let addressString = ''
      for (let i = 0; i < address.length; i++) {

        if (i === address.length - 1) {
          addressString += address[i]
        } else {
          addressString += address[i] + ','
        }
      }
      this.$set(this.sick, 'addressArray', address)
      this.$set(this.sick, 'address', addressString)
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

</style>