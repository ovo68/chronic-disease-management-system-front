import request from "@/network/request";

//===========zhy修改============//
//查找所有vip
export function getAllVipInfo() {
    return request({
        url: '/vipManage/findAllVips',
        method: 'get'
    })

}

//增加vip
export function addVips(vip) {
    return request({
        url: '/vipManage/addVips',
        method: 'post',
        data: vip
    })
}

//修改vip
export function updateVips() {
    return request({
        url: '/vipManage/updateVips',
        method: 'post'
    })

}

//删除vip
export function deleteVips() {
    return request({
        url: '/vipManage/deleteVips',
        method: ''
    })

}

//查找所有的患者
export function findAllSickInfo() {
    return request({
        url: "/vipManage/findAll",
        method: 'get',
    })
}

//根据等级查找所有患者信息
export function findByLevel(level) {
    return request({
        url: '/vipManage/findByLevel/' + level,
        method: 'get',
    })
}

//根据会员卡号查找所有的患者信息
export function findSickByParams(vipNumber) {
    return request({
        url: '/vipManage/findSickByParams/' + vipNumber,
        method: 'get'
    })
}

//根据创建时间查找所有的患者信息
export function findSickByActivateDate(activateDate) {
    return request({
        url: '/vipManage/findSickByActivateDate/' + activateDate,
        method: 'get'
    })
}

//根据患者id，记录表状态查询记录表信息
export function findChangeRecordBySid(sid, cstatus) {
    return request({
        url: "/vipManage/findChangeRecordById/" + sid + "/" + cstatus,
        method: 'get'
    })
}

//查询会员条件设置
export function findVipConditionSet() {
    return request({
        url: '/vipManage/findVipConditionSet',
        method: 'get'
    })
}

//修改会员条件设置
export function updateVipConditionSet() {
    return request({
        url: '/vipManage/updateVipConditionSet',
        method: 'get'
    })
}

//修改患者信息并保存变更
export function updateSickChange(changeRecord) {
    return request({
        url: '/vipManage/updateSickChange',
        method: 'post',
        data: changeRecord
    })
}

/*
export function findByLevel(){
  return request({
    url:'/vipManage/findByLevel',
    method:'get',
    params:{

    },
    data:{

    }
  })
}
export function findByLevel(){
  return request({
    url:'/vipManage/findByLevel',
    method:'get',
    params:{

    },
    data:{

    }
  })
}
export function findByLevel(){
  return request({
    url:'/vipManage/findByLevel',
    method:'get',
    params:{

    },
    data:{

    }
  })
}
export function findByLevel(){
  return request({
    url:'/vipManage/findByLevel',
    method:'get',
    params:{

    },
    data:{

    }
  })
}
export function findByLevel(){
  return request({
    url:'/vipManage/findByLevel',
    method:'get',
    params:{

    },
    data:{

    }
  })
}*/
