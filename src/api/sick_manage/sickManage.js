import request from "@/network/request";

//默認查詢所有患者信息不帶模糊查詢功能
export function queryAllSicks() {
  return request({
    url: '/sick/findAllSick',
    method: 'get',
    params: {
      memberGrade: 0,
    },
  })
}

//查詢患者信息 通過患者等級
export function queryByLevel(memberGrade) {
  return request({
    url: '/sick/findAllSick',
    method: 'get',
    params: {
      memberGrade: memberGrade
    }
  })
}

//查詢患者信息 通过患者姓名模糊查詢
export function queryByName(name) {
  return request({
    url: '/sick/findAllSick',
    method: 'get',
    params: {
      name: name
    }
  })
}

// 添加患者个人信息
export function saveSick(sick) {
  return request({
    url: '/sick/saveSick',
    method: 'post',
    data: sick
  })
}

//根据id删除患者
export function deleteSickById(id) {
  return request({
    url: '/sick/deleteSickById/' + id,
    method: 'delete'
  })
}