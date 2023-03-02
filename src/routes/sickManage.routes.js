import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//患者管理
export default [
  {
    path: '/sickManageRoot',
    component: () => import('@/components/content/module_roots/SickManageRoot'),
    children: [
      {
        path: '/',
        redirect: 'sickManage',
      },
      {
        //患者管理
        path: 'sickManage',
        component: () => import('@/views/sick_manage/SickManage'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者管理')
          next()
        }
      },
      {
        //新增患者
        path: 'newAddSick',
        component: () => import('@/components/content/sick/new_add_sick/NewAddSick'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者管理')
          next()
        }
      },
      {
        //编辑患者信息
        path: 'sickInfo/:id/:level',
        component: () => import('@/components/content/sick/sick_info/SickInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者管理')
          next()
        }
      },
      {
        //接诊
        path: 'meetDoctor/:id/:level',
        component: () => import('@/views/new_see_doctor/NewSeeDoctor'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者管理')
          next()
        }
      },
      {
        //编辑病例
        path: 'editCase',
        component: () => import('@/views/new_see_doctor/NewSeeDoctor'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者管理')
          next()
        }
      },
      {
        //已收费查看详情
        path: 'toHasCostOrder',
        component: () => import('@/components/content/order_detail/has_cost_order/HasCostOrder'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者管理')
          next()
        }
      },
      {
        //已退费查看详情
        path: 'toHasReturnCostOrder',
        component: () => import('@/components/content/order_detail/has_return_cost_order/HasReturnCostOrder'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者管理')
          next()
        }
      },
      {
        //进行收费
        path: 'toNotCostOrder',
        component: () => import('@/components/content/order_detail/not_cost_order/NotCostOrder'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者管理')
          next()
        }
      },

    ]
  },
]