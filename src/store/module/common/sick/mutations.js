//患者
//导入mutations方法名
import * as mutationsTypes from '@/store/mutations-types'

export default {

  [mutationsTypes.GET_ALL_SICKS](state, payload) {
    state.sicks = payload
  }
}