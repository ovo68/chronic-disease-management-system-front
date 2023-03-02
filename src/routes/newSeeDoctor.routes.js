import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'


//新开就诊的路由
export default [
  {
    path: '/newSeeDoctorRoot',
    component: () => import('@/components/content/module_roots/NewSeeDoctorRoot'),
    children: [
      {
        path: '/',
        redirect: 'newSeeDoctor',
      },
      {
        path: 'newSeeDoctor',
        component: () => import('@/views/new_see_doctor/NewSeeDoctor'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '新开就诊'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '新开就诊')
          next()
        }
      },
    ]
  },
]