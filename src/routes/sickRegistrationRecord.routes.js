import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'


export default [
  {
    path: '/SickRegistrationRecordRoot',
    component: () => import('@/components/content/module_roots/SickRegistrationRecordRoot'),
    children: [
      // 医院建议
      {
        path: 'SickRegistrationRecord',
        component: () => import('@/views/sick_registration_record/SickRegistrationRecord'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '我的就诊'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '我的就诊')
          next()
        }
      }
    ]

  }
]


