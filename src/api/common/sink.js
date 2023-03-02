import request from "@/network/request";

//==================== sn修改 ====================//

//查询患者所有信息
export function getAllSick() {
  return request({
    url: '/sick/findInfoAll',
    method: 'get'
  })
}

//根据患者id查询患者信息
export function findSickInfoById(id) {
  return request({
    url: '/sick/findSickInfoById/' + id,
    method: 'get'
  })
}

//根据id查询患者电子病历
export function findSickElectronicCaseInfoById(id) {
  return request({
    url: '/sick/findElectronicCaseInfo/' + id,
    method: 'get'
  })
}

//查询患者id查询患者收费记录
export function findSickCostRecordById(id) {
  return request({
    url: '/sick/findSickCostRecord/' + id,
    method: 'get'
  })
}

//根据患者id更新患者
export function updateSickById(sick) {
  return request({
    url: '/sick/updateSickInfoById',
    method: 'put',
    data: sick
  })
}
