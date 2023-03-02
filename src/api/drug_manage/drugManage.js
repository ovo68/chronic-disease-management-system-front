import request from "@/network/request";

/********药品调价*************/
//获取所有调价首页信息
export function getAllDrug() {
  return request({
    url: "/drugManage/getAllDrug",
    method: 'get'
  })
}

//根据药品id查调价详情
export function getChangePriceByDrugid(id) {
  return request({
    url: "/drugManage/getChangePriceByDrugid/" + id,
    method: 'get'
  })
}

//药品调价方法
export function updateDrugSalePrice(id, nowPrice) {
  return request({
    url: "/drugManage/updateDrugSalePrice",
    method: "put",
    params: {
      id: id,
      nowprice: nowPrice
    }
  })
}

//根据处方类别查药品
export function getTypeDrug(id) {
  console.log(id)
  return request({
    url: "/drugManage/getTypeDrug/" + id,
    method: 'get'
  })
}

//根据输入框进行模糊查询
export function getLikeDrug(dsc) {
  return request({
    url: "/drugManage/getLikeDrug",
    method: "get",
    params: {
      dsc: dsc
    }
  })
}

/****************入库管理****************/
//获取所有入库信息
export function getStockAll() {
  return request({
    url: "/stockManage/getAll",
    method: 'Get'
  })
}

//根据审核状态查入库信息
export function getStockByCheck(id) {
  return request({
    url: "/stockManage/getStocksByCheckStatus/" + id,
    method: 'Get'
  })
}

//根据入库类型查找入库信息
export function getStockByType(id) {
  return request({
    url: "/stockManage/getStocksByType/" + id,
    method: "get"
  })
}

//模糊查询入库信息
export function getStockBylike(dsc) {
  return request({
    url: "/stockManage/getStocksByLike",
    method: "get",
    params: {
      dsc: dsc
    }
  })
}

//根据id查入库信息
export function getStockByid(id) {
  return request({
    url: "/stockManage/getOneById/" + id,
    method: "get",
  })
}


//出库接口
//查询所有出库信息
export function getAllOut() {
  return request({
    url: "/outManage/getAll",
    method: "get"
  })
}

//根据审核状态查入库信息
export function getOutByCheck(id) {
  return request({
    url: "/outManage/getOutsByCheckStatus/" + id,
    method: "get"
  })
}

//根据出库类型查入库信息
export function getOutByType(id) {
  return request({
    url: "/outManage/getOutsByType/" + id,
    method: "get"
  })
}

//根据输入框模糊查询出库信息
export function getOutByLike(dsc) {
  return request({
    url: "/outManage/getOutsByLike",
    method: "get",
    params: {
      dsc: dsc
    }
  })
}


/************************************库存盘点**/
//获取所有盘点信息
export function getArrangeAll() {
  return request({
    url: "/stockArrangeManage/getAll",
    method: "get"
  })
}

//模糊查询盘点信息
export function getArrangeByLike(number) {
  return request({
    url: "/stockArrangeManage/getStockArragesByNumber",
    method: "get",
    params: {
      number: number
    }
  })
}

//根据时间查询库存盘点记录
export function queryStockCheckRecordByDate(begin, end) {
  return request({
    url: '/stockArrangeManage/getByCreateTime/' + begin + '/' + end,
    method: 'get'
  })
}

//查看正在盘点的记录详情
export function queryCurrentCheckRecordDetail(id) {
  return request({
    url: '/stockArrangeManage/getOneById/' + id,
    method: 'get'
  })
}


/********************************库存管理**/
//查询仓库中所有药品信息
export function getStockControlinfo() {
  return request({
    url: "/stockControl/getAllDrug",
    method: 'get'
  })
}

//根据药品的处方类型查药品
export function getStockControlByType(id) {
  return request({
    url: "/stockControl/getDrugsByType/" + id,
    method: "get"
  })
}

//根据药品名称、编码、生产厂家进行模糊查询
export function getStockControlByLike(dsc) {
  return request({
    url: "/stockControl/getDrugsByLikes",
    method: "get",
    params: {
      dsc: dsc
    }
  })
}

//根据药品id查药品信息
export function getDrugInfoById(id) {
  return request({
    url: "/stockControl/getInfoById/" + id,
    method: "get"
  })
}


//药品信息维护
//查询所有药品
export function getAllInfoMaintenance() {
  return request({
    url: "/drugInfoMaintenance/getAll",
    method: "get"
  })
}

//根据处方类别查药品
export function getAllInfoMaintenanceByType(id) {
  return request({
    url: "/drugInfoMaintenance/getDrugsByType/" + id,
    method: "get"
  })
}

//根据药品状态查药品
export function getAllInfoMaintenanceByStatus(id) {
  return request({
    url: "/drugInfoMaintenance/getDrugsByStatus/" + id,
    method: "get"
  })
}

//根据模糊查询查药品
export function getAllInfoMaintenanceByLike(dsc) {
  return request({
    url: "/drugInfoMaintenance/getDrugsByLike",
    method: "get",
    params: {
      dsc: dsc
    }
  })
}