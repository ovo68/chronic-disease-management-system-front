<template>
  <sn-card-with-title>
    <div slot="title">
      <span style="font-weight: bold">模板维护</span>
    </div>
    <div slot="content">
      <sn-row-has-two-col :left=12 :right=12>
        <sn-select-create-item slot="one-col" :options="diagnosisData">
          <sn-must-text text="诊断" slot="title"/>
        </sn-select-create-item>
        <sn-select-create-item slot="two-col" :options="mainDescData">
          <sn-must-text text="主诉" slot="title"/>
        </sn-select-create-item>
      </sn-row-has-two-col>
      <sn-row-has-two-col :left=12 :right=12>
        <sn-select-create-item slot="one-col" :options="diagnosisData">
          <sn-must-text text="现病史" slot="title"/>
        </sn-select-create-item>
        <sn-select-create-item slot="two-col" :options="mainDescData">
          <sn-must-text text="既往史" slot="title"/>
        </sn-select-create-item>
      </sn-row-has-two-col>
      <sn-row-has-two-col :left=12 :right=12>
        <sn-select-create-item slot="one-col" :options="diagnosisData">
          <sn-must-text text="家族史" slot="title"/>
        </sn-select-create-item>
        <sn-select-create-item slot="two-col" :options="mainDescData">
          <sn-must-text text="辅助检查" slot="title"/>
        </sn-select-create-item>
      </sn-row-has-two-col>
      <sn-row-has-two-col :left=12 :right=12>
        <sn-select-create-item slot="one-col" :options="diagnosisData">
          <sn-must-text text="治疗意见" slot="title"/>
        </sn-select-create-item>
        <sn-select-create-item slot="two-col" :options="mainDescData">
          <sn-must-text text="医嘱" slot="title"/>
        </sn-select-create-item>
      </sn-row-has-two-col>
      <sn-select-create-item :options="diagnosisData">
        <sn-must-text text="备注" slot="title"/>
      </sn-select-create-item>
    </div>
  </sn-card-with-title>
</template>

<script>
export default {
  name: "InsertMedicalInfo",
  data(){
    return{
      diagnosisData: [
        {
          value: '流行性出血',
          label: '流行性出血'
        },
        {
          value: '急性支气管炎',
          label: '急性支气管炎'
        },
        {
          value: '上呼吸道感染',
          label: '上呼吸道感染'
        },
        {
          value: '咽炎',
          label: '咽炎'
        },
        {
          value: '急性肠胃炎',
          label: '急性肠胃炎'
        },
        {
          value: '月经不调',
          label: '月经不调'
        },
      ],
      mainDescData:[
        {

        }
      ],
      twoColData: [
        {
          value: '低盐低糖饮食',
          label: '低盐低糖饮食'
        },
        {
          value: '忌辛冷等食物',
          label: '忌辛冷等食物'
        },
        {
          value: '忌受风吹凉风',
          label: '忌受风吹凉风'
        },
        {
          value: '少糖',
          label: '少糖'
        },
        {
          value: '忌熬夜忌饮酒',
          label: '忌熬夜忌饮酒'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>