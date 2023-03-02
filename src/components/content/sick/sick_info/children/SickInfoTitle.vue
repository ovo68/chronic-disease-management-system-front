<template>
  <sn-row-has-two-col :left="19" :right="5" class="margin-bottom-20">
    <div slot="one-col">
      <el-button type="primary" plain @click="toPersonInfo" :style="personInfoButtonStyle">
        <sn-text text="个人信息"/>
      </el-button>
      <el-button type="primary" plain @click="toElectronicMedicalRecord" :style="electronicMedicalRecordButtonStyle">
        <sn-text text="电子病历"/>
      </el-button>
      <el-button type="primary" plain @click="toCostRecord" :style="costRecordButtonStyle">
        <sn-text text="收费记录"/>
      </el-button>
    </div>
    <div slot="two-col" class="text-right">
      <el-button
          v-if="isPersonInfo"
          type="primary"
          plain @click="saveAndReturn">
        <sn-text text="保存"/>
      </el-button>
      <el-button
          v-if="isElectronicCase"
          type="primary"
          plain @click="newAddCase">
        <sn-text text="新增病例"/>
      </el-button>
      <el-button
          type="primary"
          plain @click="toReturn">
        <sn-text text="返回"/>
      </el-button>
    </div>
  </sn-row-has-two-col>
</template>

<script>
export default {
  name: "SickInfoTitle",
  props: {
    isPersonInfo: {
      type: Boolean,
      default: false
    },
    isElectronicCase: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      personInfoButtonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      },
      electronicMedicalRecordButtonStyle: '',
      costRecordButtonStyle: '',

      buttonStyle: {
        'background-color': '#409EFF',
        'color': '#fff'
      }
    }
  }
  ,
  methods: {
    toPersonInfo() {
      this.personInfoButtonStyle = this.buttonStyle
      this.electronicMedicalRecordButtonStyle = ''
      this.costRecordButtonStyle = ''
      this.$emit('toPersonInfo')
    },
    toElectronicMedicalRecord() {
      this.personInfoButtonStyle = ''
      this.electronicMedicalRecordButtonStyle = this.buttonStyle
      this.costRecordButtonStyle = ''
      this.$emit('toElectronicMedicalRecord')
    },
    toCostRecord() {
      this.personInfoButtonStyle = ''
      this.electronicMedicalRecordButtonStyle = ''
      this.costRecordButtonStyle = this.buttonStyle
      this.$emit('toCostRecord')
    },
    toReturn() {
      history.back()
    },
    saveAndReturn() {
      this.$emit('saveSickPersonInfo')
    },
    newAddCase(){
      this.$router.push('/home/newAddCase')
    }
  }
}
</script>

<style scoped>

.el-button{
  width: 100px;
}
</style>