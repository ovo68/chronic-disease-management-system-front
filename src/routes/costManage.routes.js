import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//收费管理的路由
export default [
  {
    path: '/costManageRoot',
    component: () => import('@/components/content/module_roots/CostManageRoot'),
    children: [
      {
        path: '/',
        redirect: 'costManage',
      },
      {
        //收费管理
        path: 'costManage',
        component: () => import('@/views/cost_manage/CostManage'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '收费管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '收费管理')
          next()
        }
      },
      //==============  待收费路由  ===========//
      {
        //处方订单收费
        path: 'notCostOrder/:number',
        component: () => import('@/components/content/order_detail/not_cost_order/NotCostOrder'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '处方订单收费'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '处方订单收费')
          next()
        }
      },
      {
        //药品订单收费
        path: 'drugCheckOut',
        component: () => import('@/views/drug_sale/drug_check_out/DrugCheckOut'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品订单收费'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品订单收费')
          next()
        }
      },
      {
        //编辑处方订单信息
        path: 'newSeeDoctor',
        component: () => import('@/views/new_see_doctor/NewSeeDoctor'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '编辑处方订单信息'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '编辑处方订单信息')
          next()
        }
      },
      {
        //编辑药品订单信息
        path: 'drugSale',
        component: () => import('@/views/drug_sale/DrugSale'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '编辑药品订单信息'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '编辑药品订单信息')
          next()
        }
      },

      //==============  已收费路由  ===========//
      {
        //查看已收费信息
        path:'hasCostOrder/:number',
        component: () => import('@/components/content/order_detail/has_cost_order/HasCostOrder'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '查看已收费信息'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '查看已收费信息')
          next()
        }
      },
      {
        //退费
        path:'orderReturnCost',
        component: () => import('@/components/content/order_detail/order_return_cost/OrderReturnCost'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '退费'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '退费')
          next()
        }
      },
      //==============  已退费路由  ===========//
      // {
      //   //退费详细信息
      //   path:'',
      //   component: () => import(''),
      //   beforeEnter: (to, from, next) => {
      //     console.log('从哪儿来: ' + from.path)
      //     console.log('到哪儿去: ' + to.path)
      //     window.document.title = '退费详细信息'
      //     store.commit(mutationsTypes.CHANGE_HOME_TITLE, '退费详细信息')
      //     next()
      //   }
      // },
    ]
  },
]