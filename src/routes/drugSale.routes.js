import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//药品零售的路由
export default [
  {
    path: '/drugSaleRoot',
    component: () => import('@/components/content/module_roots/DrugSaleRoot'),
    children: [
      {
        path:'/',
        redirect:'drugSale',
      },
      {
        //药品零售
        path: 'drugSale',
        component: () => import('@/views/drug_sale/DrugSale'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品零售'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品零售')
          next()
        }
      },
      {
        //药品结算
        path:'drugCheckOut',
        component: () => import('@/views/drug_sale/drug_check_out/DrugCheckOut'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品结算'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品结算')
          next()
        }
      },
    ]
  },
]