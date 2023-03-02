import request from "@/network/request";

//根据处方类型查询所有药品
export function getAllDrugInfo(type) {
  return request({
    url: '/drugInfoMaintenance/getDrugsByType/' + type,
    method: 'get',
  })
}

//根据药品名字查询药品
export function getDrugsByLike(name) {
  return request({
    url: '/drugInfoMaintenance/getDrugsByLike/' + name,
    method: 'get',
  })
}

import qs from 'qs'

//接诊添加处方
export function newAddPrescription(prescriptionData) {
  return request({
    url: '/sick/newAddPrescription',
    method: 'post',
    data: prescriptionData
  })
}


//1.西药
//1.1获取所有西药药品
export function queryAllWestDrug() {

  let data = [
    {
      name: '杜冷丁',
      specification: '阿里卡时间段',
      stock: '500',
      price: '600',
    },
    {
      name: '阿莫西林',
      specification: '阿里卡时间段',
      stock: '500',
      price: '600',
    },
    {
      name: '感冒药',
      specification: '阿里卡时间段',
      stock: '500',
      price: '600',
    },
  ]

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

//1.2根据药品类型查询西药药品
export function queryWestDrugByType(type) {

  let data = []

  if (type.label === '常用药品') {
    data = [
      {
        name: '杜冷丁',
        specification: '常用药品',
        stock: '500',
        price: '600',
      },
    ]
  } else if (type.label === '西药') {
    data = [
      {
        name: '杜冷丁',
        specification: '西药',
        stock: '500',
        salePrice: '600',
      },
    ]

  } else if (type.label === '感冒药') {
    data = [
      {
        name: '杜冷丁',
        specification: '感冒药',
        stock: '500',
        salePrice: '600',
      },
    ]
  } else if (type.label === '材料') {
    data = [
      {
        name: '杜冷丁',
        specification: '材料',
        stock: '500',
        salePrice: '600',
      },
    ]
  } else {
    return queryAllWestDrug()
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

//1.3 根据药品名称查询西药
export function queryWestDrugByName(name) {

  let data = [
    {
      name: '名称查询',
      specification: '常用药品',
      stock: '500',
      price: '600',
    },
  ]

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}


//2.中药
//获取所有西药药品
export function queryAllCenterDrug() {

  let data = [
    {
      name: '中药',
      specification: '阿里卡时间段',
      stock: '500',
      price: '600',
    },
    {
      name: '阿胶珠',
      specification: '阿里卡时间段',
      stock: '500',
      price: '600',
    },
    {
      name: '大枣',
      specification: '阿萨德',
      stock: '500',
      price: '600',
    },
  ]

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

//根据药品类型查询中药药品
export function queryCenterDrugByType(type) {

  let data = []

  if (type.label === '中草药') {
    data = [
      {
        name: '杜冷丁',
        specification: '中草药',
        stock: '500',
        price: '600',
      },
    ]
  } else if (type.label === '清热类') {
    data = [
      {
        name: '杜冷丁',
        specification: '清热类',
        stock: '500',
        price: '600',
      },
    ]

  } else if (type.label === '解毒类') {
    data = [
      {
        name: '杜冷丁',
        specification: '解毒类',
        stock: '500',
        price: '600',
      },
    ]
  } else if (type.label === '免煎颗粒') {
    data = [
      {
        name: '杜冷丁',
        specification: '免煎颗粒',
        stock: '500',
        price: '600',
      },
    ]
  } else {

    return queryAllCenterDrug()
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

//根据药品名称查询中药
export function queryCenterDrugByName(name) {

  let data = [
    {
      name: '名称查询',
      specification: '中药',
      stock: '500',
      price: '600',
    },
  ]

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}


//3.检查项目
//获取所有检查项目
export function queryAllCheckItem() {

  let data = [
    {
      name: '拔牙',
      type: '阿打算',
      unit: '500',
      price: '600',
    },
    {
      name: '补牙',
      type: '碍事法师',
      unit: '500',
      price: '600',
    },
    {
      name: '煎药',
      type: '安抚',
      unit: '500',
      price: '600',
    },
  ]

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

//根据类型查询检查项目
export function queryCheckItemByType(type) {

  let data = []

  if (type.label === '治疗费') {
    data = [
      {
        name: '煎药',
        type: '治疗费',
        unit: '500',
        price: '600',
      },
    ]
  } else if (type.label === '检查费') {
    data = [
      {
        name: '煎药',
        type: '检查费',
        unit: '500',
        price: '600',
      },
    ]

  } else if (type.label === '材料费') {
    data = [
      {
        name: '煎药',
        type: '材料费',
        unit: '500',
        price: '600',
      },
    ]
  } else if (type.label === '其他') {
    data = [
      {
        name: '煎药',
        type: '其他',
        unit: '500',
        price: '600',
      },
    ]
  } else {
    return queryAllCheckItem()
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

//根据检查项目名称查询项目
export function queryCheckItemByName(name) {

  let data = [
    {
      name: '煎药',
      type: '按名称',
      unit: '500',
      price: '600',
    },
  ]

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}