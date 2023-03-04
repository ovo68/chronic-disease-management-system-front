import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//就诊管理
export default [
  {
    path: '/registrationManageRoot',
    component: () => import('@/components/content/module_roots/RegistrationManageRoot'),
    children: [
      {
        //就诊记录
        path: 'registrationRecord',
        component: () => import('@/views/registration_manage/registration_record/RegistrationRecord'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '就诊记录'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '就诊记录')
          next()
        }
      },
      {
        //新增就诊
        path: 'newAddRegistration',
        component: () => import('@/views/registration_manage/new_add_registration/NewAddRegistration'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '新增就诊'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '新增就诊')
          next()
        }
      },
      {
        //就诊
        path: 'newSeeDoctor',
        component: () => import('@/views/new_see_doctor/NewSeeDoctor'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '就诊'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '就诊')
          next()
        }
      },
      {
        //编辑就诊信息
        path: 'editRegistrationInfo',
        component: () => import('@/views/registration_manage/edit_registration_info/EditRegistrationInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '编辑就诊信息'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '编辑就诊信息')
          next()
        }
      },
      {
        //查看就诊详情
        path: 'lookRegistrationInfo',
        component: () => import('@/views/registration_manage/look_registration_info/LookRegistrationInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '查看就诊详情'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '查看就诊详情')
          next()
        }
      },
    ]
  },
]
