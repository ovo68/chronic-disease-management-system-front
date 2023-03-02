import request from "@/network/request";

//根据订单类型查询订单记录
export function queryByOrderType(orderType, url) {
  return request({
    url: '/' + url + '/findByType',
    method: 'post',
    data: orderType
  })
}

//根据创建时间范围 查询订单记录
export function queryByCreateTimeRound(begin, end, url) {
  return request({
    url: '/' + url + '/findByTime',
    method: 'get',
    params: {
      date1: begin,
      date2: end
    }
  })
}

//根据患者姓名查询
export function queryBySickName(sickName, url) {
  return request({
    url: '/' + url + '/findAllOrder',
    method: 'get',
    params: {
      name: sickName
    }
  })
}


//==================================== 查询表格记录
export function queryTableRecord(url) {
  return request({
    url: '/' + url + '/findAllOrder',
    method: 'get',
  })
}


//根据订单编号查询待收费订单信息
export function queryWaitCostOrderInfoByNumber(number) {
  return request({
    url: '/toBeCharged/getOneByNumber/' + number,
    method: 'get',
  })
}

//==================================== 对未收费订单进行收费
export function chargeToNotCostOrder(order) {
  return request({
    url: '/toBeCharged/charge',
    method: 'put',
    data: order
  })
}

//==================================== 查看已收费详细信息
export function queryHasCostOrderInfo(number) {
  return request({
    url: '/charged/getOneByNumber/' + number,
    method: 'get'
  })
}