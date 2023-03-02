import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

export default [
  {
    path: '/workSpaceRoot',
    component: () => import('@/components/content/module_roots/WorkSpaceRoot'),
    children:[
      {
        path:'/',
        redirect:'workSpace',
      },
      {
        //工作台
        path:'workSpace',
        component: () => import('@/views/workspace/WorkSpace'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '工作台'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '工作台')
          next()
        }
      },
      {
        //患者信息详情
        path:'sickInfo',
        component: () => import('@/components/content/sick/sick_info/SickInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '工作台'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '工作台')
          next()
        }
      },
      {
        //接诊
        path: 'newSeeDoctor',
        component: () => import('@/views/new_see_doctor/NewSeeDoctor'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '工作台'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '工作台')
          next()
        }
      }
    ]
  },
]
