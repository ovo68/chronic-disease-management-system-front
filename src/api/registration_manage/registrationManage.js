import request from "@/network/request";

//查询所有会员患者
export function getAllVipSicks(){
  return request({
    url:'/vipManage/findAll',
    method:'get'
  })
}