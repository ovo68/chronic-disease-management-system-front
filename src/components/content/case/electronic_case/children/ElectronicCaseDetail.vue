<template>
  <div>
    <sn-card-with-title
        v-if="index === showDetailCase"
        v-for="(item,index) in electronicCaseDetailInfo">
      <sn-row-has-two-col :left="20" :right="4" slot="title">
        <el-button round type="success" slot="one-col">
          <sn-text :text="item.fkOrderId.registerType.description"/>
        </el-button>
        <el-button
            slot="two-col"
            @click="editCase"
            type="primary"
            plain class="margin-right-20">
          <sn-text text="编辑病历"/>
        </el-button>
      </sn-row-has-two-col>
      <div slot="content">
        <!-- 体格信息-->
        <div>
          <sn-text text="体格信息" font-weight="bold" :font-size="20"/>
          <sn-row-has-four-col :one="6" :two="6" :three="6" :four="6" class="margin-top-20">
            <div slot="one-col" class="to-flex">
              <sn-text text="体温 :" class="margin-right"/>
              <sn-text :number="item.temp" class="margin-right"/>
              <sn-text text="℃"/>
            </div>
            <div slot="two-col" class="to-flex">
              <sn-text text="呼吸 :" class="margin-right"/>
              <sn-text :number="item.breathe" class="margin-right"/>
              <sn-text text="次/分"/>
            </div>
            <div slot="three-col" class="to-flex">
              <sn-text text="脉搏 :" class="margin-right"/>
              <sn-text :number="item.pulse" class="margin-right"/>
              <sn-text text="次/分"/>
            </div>
            <div slot="four-col" class="to-flex">
              <sn-text text="血压 :" class="margin-right"/>
              <sn-text :number="item.press" class="margin-right"/>
              <sn-text text="mmgh"/>
            </div>
          </sn-row-has-four-col>
          <sn-row-has-four-col :one="6" :two="6" :three="6" :four="6" class="margin-top-20">
            <div slot="one-col" class="to-flex">
              <sn-text text="血糖 :" class="margin-right"/>
              <sn-text :number="item.bloodGlucose" class="margin-right"/>
              <sn-text text="mmol/L"/>
            </div>
            <div slot="two-col" class="to-flex">
              <sn-text text="血脂 :" class="margin-right"/>
              <sn-text :number="item.bloodFat" class="margin-right"/>
              <sn-text text="mmol/L"/>
            </div>
            <div slot="three-col" class="to-flex">
              <sn-text text="身高 :" class="margin-right"/>
              <sn-text :number="item.height" class="margin-right"/>
              <sn-text text="cm"/>
            </div>
            <div slot="four-col" class="to-flex">
              <sn-text text="体重 :" class="margin-right"/>
              <sn-text :number="item.weight" class="margin-right"/>
              <sn-text text="kg" class="margin-right"/>
            </div>
          </sn-row-has-four-col>
        </div>
        <el-divider/>
        <!-- 病历信息 -->
        <div class="margin-bottom-20">
          <sn-text text="病历信息" font-weight="bold" :font-size="20"/>
          <div class="to-flex margin-top-20">
            <sn-text text="发病日期 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.sickDate"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="主诉 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.complaint"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="现病史 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.presentHistory"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="既往史 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.anamnesis"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="过敏史 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.allergies"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="个人史" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.personalHistory"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="家族史 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.familiyHistory"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="辅助检查 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.auxiliaryExam"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="治疗意见 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.treatAdvice"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="备注 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.remark"/>
          </div>
          <div class="to-flex margin-top-20">
            <sn-text text="医嘱 :" font-color="#976EE8" class="margin-right"/>
            <sn-text :text="item.medicalAdvice"/>
          </div>
        </div>
        <el-divider/>
        <!-- 处方信息-->
        <div>
          <div class="to-flex">
            <sn-text text="处方信息" font-weight="bold" :font-size="20" class="margin-right"/>
            <sn-text text="(" class="margin-right" :move-down="1"/>
            <sn-text text="西药处方"
                     font-weight="bold"
                     :font-size="16"
                     :move-down="2"
                     font-color="#666EE8"
                     class="margin-right"/>
            <sn-text text=")" :move-down="1"/>
            <sn-text text="注:暂未实现" font-color="pink" font-weight="bold" class="margin-left-20" :move-down="1"/>
          </div>
          <!-- 药品信息 -->
          <div class="to-flex margin-top-20">
            <sn-text text="1" class="margin-right"/>
            <sn-text
                class="margin-right"
                :font-size="15"
                font-weight="bold"
                text="抗骨增生片"/>
            <sn-text text="4" class="margin-right"/>
            <sn-text text="片" class="margin-right"/>
            <sn-text text="共" class="margin-right"/>
            <sn-text text="16" class="margin-right"/>
            <sn-text text="片" class="margin-right"/>
            <sn-text text="用法 :"/>
            <sn-text text="口服" class="margin-right"/>
            <sn-text text="每日两次" class="margin-right"/>
            <sn-text text="2天"/>
          </div>
        </div>
      </div>
    </sn-card-with-title>
  </div>
</template>

<script>
export default {
  name: "ElectronicCaseDetail",
  methods: {
    editCase() {
      this.$router.push("/sickManageRoot/editCase")
    }
  },
  props: {
    electronicCaseDetailInfo: Array,
    showDetailCase: Number
  },
}
</script>

<style scoped>
.el-button {
  width: 100px;
}
</style>