<!--  新增挂号  -->
<template>
  <div>
    <div>
      <person-base-info
          :is-disabled-edit-person-info="true"
          ref="personBaseInfo"/>
    </div>
  </div>
</template>

<script>
import CollectMoneyDialog
  from "@/components/content/dialog/cost/CollectMoneyDialog";
import PersonInfo from "@/components/content/sick/person_info/PersonInfo";
import RegistrationInfo
  from "@/views/registration_manage/new_add_registration/children/RegistrationInfo";
import PersonBaseInfo from "@/components/content/sick/person_info/children/PersonBaseInfo";

//导入api
import {getAllVipSicks} from "@/api/registration_manage/registrationManage";

//导入对象
import {RegistrationInfoObject} from "@/utils/object";

export default {
  name: "NewAddRegistration",
  data() {
    return {
      //所有vip患者
      allVipSicks: [],

      //当前患者
      currentSick: {},

      //挂号信息
      registrationInfo: {},

      //收费信息
      cost: {},
    }
  },
  components: {
    PersonInfo,
    CollectMoneyDialog,
    RegistrationInfo,
    PersonBaseInfo
  },
  methods: {

    //修改不显示诊断信息
    notShowDiagnose() {
      this.$refs.personInfo.$refs.personBaseInfo.isShowDiagnose = false
    },

    //获取收费信息
    getCostData(costData) {
      console.log(costData)
    },
    //进行收费 TODO 提交病人就诊信息
    collectionMoney() {
      //1.获取挂号信息组件
      let registrationInfo = this.$refs.registrationInfo

      //2.获取挂号信息组件的第一行
      let first = registrationInfo.$refs.first
      console.log(first)

      //3.获取挂号信息组件的第二行
      let second = registrationInfo.$refs.second

      //4.对象解构
      const {department, diagnoseType, diagnoseDoctor} = first.getFirstRowData()
      const {registrationCost, therapyCost} = second.getSecondRowData()
      console.log(second)

      //5.获取挂号信息
      this.registrationInfo = new RegistrationInfoObject(
          //4.1 设置挂号单号
          first.registrationId,
          //4.2 设置科室
          department,
          //4.3 设置接诊类型
          diagnoseType,
          //4.4 设置接诊医生
          diagnoseDoctor,
          //4.5 设置挂号费
          registrationCost,
          //4.6 设置诊疗费
          therapyCost,
          //4.7 设置挂号日期
          second.getRegistrationDate,
          //4.8 设置挂号员
          second.getRegistrationWorker,
      )

      //6. 获取当前患者信息
      this.currentSick = this.$refs.personInfo.getSickBaseInfo()

      const {
        name,
        vipNumber,
        age,
        birthday,
        phoneNumber,
        idCard,
        dueDate,
        address,
        addressDetail,
        vip
      } = this.currentSick

      //7.判断是否填写患者信息
      if (name === undefined || name === '' ||
          vipNumber === undefined || vipNumber === '' ||
          age === undefined || age === '' ||
          birthday === undefined || birthday === '' ||
          phoneNumber === undefined || phoneNumber === '' ||
          idCard === undefined || idCard === '' ||
          dueDate === undefined || dueDate === '' ||
          address === undefined || address === '' ||
          addressDetail === undefined || addressDetail === '') {
        this.myUtils.showMessage(this, '！！请查看患者信息是否填写完整(*^▽^*)')
        return
      }

      let needMoney = registrationCost.value + therapyCost.value

      //7.设置应收费用
      this.cost = {
        needMoney: needMoney, //应付金额
        medicalInsurancePay: 0,// 医保支付
        discount: vip.discount, //折扣
        actualMoney: '', //实收金额
        payMethod: '0',//支付方式
        afterDiscountMoney: (needMoney * vip.discount / 10).toFixed(2),//折后金额
        discountMoney: (needMoney - (needMoney * vip.discount / 10)).toFixed(2),  //优惠金额
        remark: ''
      }

      //8.打开收费弹出框
      this.$refs.collectMoneyDialog.dialogFormVisible = true
    },

    toGetAllVipSicks() {
      getAllVipSicks().then(res => {
        this.allVipSicks = res.data
      })
    },
  },
  created() {
    //获取所有的vip患者
    this.toGetAllVipSicks()
  },
  mounted() {
    //不显示诊断信息
    this.notShowDiagnose()
  }
}
</script>

<style scoped>
.pay {
  text-align: right;
}

.el-button {
  width: 100%;
}

.move-down {
  position: relative;
  top: 12px;
}

.move-up {
  position: relative;
  bottom: 10px;
}

.actual-money {
  margin-left: 53px;
}

/deep/ .el-dialog__body {
  padding-bottom: 0;
}
</style>
