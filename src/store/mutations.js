import * as mutationsTypes from '@/store/mutations-types'

export default {

  [mutationsTypes.CHANGE_HOME_TITLE](state, payload) {

    state.homeTitle = payload
  }
}