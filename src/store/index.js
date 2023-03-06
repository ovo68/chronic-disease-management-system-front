import Vue from 'vue'
import Vuex from 'vuex'
import action from "@/store/actions";
import getters from "@/store/getters";
import mutations from "@/store/mutations";

//患者信息模块儿
import sick from '@/store/module/common/sick/index'

//系统设置
//1.引入字典表维护模块儿
import dictionaryTableManage from '@/store/module/system_setting/dictionary_table_manage/index'

Vue.use(Vuex)
const state = {
  homeTitle: '',
  user: {},
  //性别
  gender: [
    {
      value: 1,
      label: '男'
    },
    {
      value: 0,
      label: '女'
    },
  ],
  //会员类型
  vipType: [
    {
      value: 0,
      label: '全部'
    },
    {
      value: 1,
      label: 'vip1'
    },
    {
      value: 2,
      label: 'vip2'
    },
    {
      value: 3,
      label: 'vip3'
    },
    {
      value: 4,
      label: 'vip4'
    },
    {
      value: 5,
      label: 'vip5'
    },
  ],
  //科室
  departments: [
    {
      value: 0,
      label: '全科'
    },
    {
      value: 1,
      label: '儿科'
    },
    {
      value: 2,
      label: '骨科'
    },
  ],
  //接诊类型
  diagnoseType: [
    {
      value: 0,
      label: '初诊'
    },
    {
      value: 1,
      label: '复诊'
    },
  ],
  //接诊医生
  diagnoseDoctor: [
    {
      value: 0,
      label: '陈平安'
    },
    {
      value: 1,
      label: '宁姚'
    },
    {
      value: 2,
      label: '李宝瓶'
    },
  ],
  //年龄
  age: [
    {
      label: '岁',
      value: 0
    },
    // {
    //   label: '月',
    //   value: 1
    // },
    // {
    //   label: '天',
    //   value: 2
    // },
  ],
  //地址
  address: [
    {
      value: '河南省',
      label: '河南省',
      children: [
        {
          value: '三门峡市',
          label: '三门峡市',
          children: [
            {
              value: '湖滨区',
              label: '湖滨区'
            },
            {
              value: '灵宝',
              label: '灵宝'
            },
          ]
        },
      ]
    },
    {
      value: '四川省',
      label: '四川省',
      children: [
        {
          value: '成都市',
          label: '成都市',
          children: [
            {
              value: '简阳',
              label: '简阳'
            },
            {
              value: '双流',
              label: '双流'
            },
          ]
        },
      ]
    },
    {
      value: '青海省',
      label: '青海省',
      children: [
        {
          value: '西宁市',
          label: '西宁市',
          children: [
            {
              value: '西宁一区',
              label: '西宁一区'
            },
            {
              value: '西宁二区',
              label: '西宁二区'
            },
          ]
        },
      ]
    },
    {
      value: '云南省',
      label: '云南省',
      children: [
        {
          value: '丽江市',
          label: '丽江市',
          children: [
            {
              value: '丽江一区',
              label: '丽江一区'
            },
            {
              value: '丽江二区',
              label: '丽江二区'
            },
          ]
        },
      ]
    },
    {
      value: '湖南省',
      label: '湖南省',
      children: [
        {
          value: '长沙市',
          label: '长沙市',
          children: [
            {
              value: '长沙一区',
              label: '长沙一区'
            },
            {
              value: '长沙二区',
              label: '长沙二区'
            },
          ]
        },
      ]
    },
  ],
  //诊断信息
  diagnoseData: [
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
  //医生建议
  doctorAdviceData: [
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
  ],
  //挂号费
  registrationCost: [
    {
      value: 10.00,
      label: '普通挂号费(10.00元)'
    },
    {
      value: 20.00,
      label: '专家挂号费(20.00元)'
    },
  ],
  //诊疗费
  therapyCost: [
    {
      value: 30.00,
      label: '诊疗费(30.00元)'
    },
    {
      value: 50.00,
      label: '诊疗费(50.00元)'
    },
  ],
  //供选择的分组
  groupIdData: [
    {
      value: 0,
      label: '1'
    },
    {
      value: 1,
      label: '2'
    },
    {
      value: 2,
      label: '3'
    },
    {
      value: 3,
      label: '4'
    },
    {
      value: 4,
      label: '5'
    },
    {
      value: 5,
      label: '6'
    },
    {
      value: 6,
      label: '7'
    },
  ],
  //供选择的使用方式
  useMethodData: [
    {
      value: 0,
      label: '口服'
    },
    {
      value: 1,
      label: '静脉注射'
    },
    {
      value: 2,
      label: '注射药物'
    },
    {
      value: 3,
      label: '检查'
    },
    {
      value: 4,
      label: '皮试'
    },
    {
      value: 5,
      label: '外用'
    },
    {
      value: 6,
      label: '雾化'
    },
  ],
  //供选择的频率
  frequencyData: [
    {
      value: 0,
      label: '一天1次'
    },
    {
      value: 1,
      label: '一天2次'
    },
    {
      value: 3,
      label: '一天3次'
    },
    {
      value: 4,
      label: '一天4次'
    },
    {
      value: 5,
      label: '2小时1次'
    },
    {
      value: 6,
      label: '4小时1次'
    },
    {
      value: 7,
      label: '6小时1次'
    },
  ],
  //供选择的天数
  daysData: [
    {
      value: 0,
      label: '1'
    },
    {
      value: 1,
      label: '2'
    },
    {
      value: 2,
      label: '3'
    },
    {
      value: 3,
      label: '4'
    },
    {
      value: 4,
      label: '5'
    },
    {
      value: 5,
      label: '6'
    },
    {
      value: 6,
      label: '7'
    },
  ],
  //供选择的总量的单位
  totalUnitData: [
    {
      value: 0,
      label: '瓶'
    },
    {
      value: 1,
      label: '盒'
    }
  ],
  //供选择的单次用量的单位
  onceUseUnit: [
    {
      value: 0,
      label: '片'
    },
    {
      value: 1,
      label: '颗'
    }
  ],
  //西药表格标题
  westDrugInfoTableTitle: [
    {
      prop: 'name',
      label: '名称',
      width: 300
    },
    {
      prop: 'specification',
      label: '规格'
    },
    {
      prop: 'stock',
      label: '库存'
    },
    {
      prop: 'salePrice',
      label: '价格'
    },
  ],
  //西药类型
  westDrugInfoSelectData: [
    {
      value: 0,
      label: '全部分类'
    },
    {
      value: 1,
      label: '常用药品'
    },
    {
      value: 2,
      label: '西药'
    },
    {
      value: 3,
      label: '感冒药'
    },
    {
      value: 4,
      label: '材料'
    },
  ],
  //中药表格标题
  centerDrugInfoTableTitle: [
    {
      prop: 'name',
      label: '名称',
      width: 120
    },
    {
      prop: 'specification',
      label: '规格'
    },
    {
      prop: 'stock',
      label: '库存'
    },
    {
      prop: 'price',
      label: '价格'
    },
  ],
  //中药类型
  centerDrugInfoSelectData: [
    {
      value: 0,
      label: '全部分类'
    },
    {
      value: 1,
      label: '中草药'
    },
    {
      value: 2,
      label: '清热类'
    },
    {
      value: 3,
      label: '解毒类'
    },
    {
      value: 4,
      label: '免煎颗粒'
    },
  ],
  //处方类型
  prescriptionType: [
    {
      value: 2,
      label: '全部'
    },
    {
      value: 0,
      label: '西/成药'
    },
    {
      value: 1,
      label: '中药'
    },
  ],
  //订单类型
  orderType: [
    {
      value: 0,
      label: '全部'
    },
    {
      value: 1,
      label: '药品零售'
    },
    {
      value: 2,
      label: '处方开立'
    },
    {
      value: 3,
      label: '挂号'
    },
  ]
}

export default new Vuex.Store({

  modules: {
    //字典表维护模块儿
    dictionary: dictionaryTableManage,
    sick,
  },
  state,
  mutations,
  action,
  getters
})
