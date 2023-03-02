//导入mutations方法名
import * as mutationsTypes from '@/store/mutations-types'

//导入所有患者相关api
import * as sickInfo from '@/api/common/sink'

export default {
  //1.异步获取所有患者信息
  asyncGetAllSicks({commit}) {
    //向后端发送请求获取数据
    sickInfo.getAllSick().then(res => {
      commit(mutationsTypes.GET_ALL_SICKS, res.data)
    })
  }
}