import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'


//药品管理的路由
export default [
  {
    path: '/drugManageRoot',
    component: () => import('@/components/content/module_roots/DrugManageRoot'),
    children: [
      //1. 药品调价
      {
        //1.1 药品调价记录
        path: 'drugChangePriceRecord',
        component: () => import('@/views/drug_manage/drug_change_price/DrugChangePriceRecord'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品调价'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品调价')
          next()
        }
      },
      {
        //1.2 新增药品调价
        path: 'newAddChangePrice/:id',
        component: () => import('@/views/drug_manage/drug_change_price/NewAddChangePrice'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品调价'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品调价')
          next()
        }
      },
      {
        //1.3 药品调价详情
        path: 'drugChangePriceDetail/:id',
        component: () => import('@/views/drug_manage/drug_change_price/DrugChangePriceDetail'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品调价'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品调价')
          next()
        }
      },
      //2. 库存盘点
      {
        //2.1 库存盘点记录
        path: 'stockCheckRecord',
        component: () => import('@/views/drug_manage/stock_check/StockCheckRecord'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '库存盘点'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '库存盘点')
          next()
        }
      },
      {
        //2.2 查看正在盘点的库存记录
        path: 'stockCheckCurrent/:id',
        component: () => import('@/views/drug_manage/stock_check/StockCheckCurrent'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '库存盘点'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '库存盘点')
          next()
        }
      },
      {
        //2.3 查看盘点完成的库存记录
        path: 'stockCheckFinish/:id',
        component: () => import('@/views/drug_manage/stock_check/StockCheckFinish'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '库存盘点'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '库存盘点')
          next()
        }
      },
      //3. 库存管理
      {
        //3.1 库存管理概况
        path: 'stockManageCondition',
        component: () => import('@/views/drug_manage/stock_manage/stock_manage_condition/StockManageCondition'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '库存管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '库存管理')
          next()
        }
      },
      {
        //3.1 库存管理详情
        path: 'stockManageDetail/:id',
        component: () => import('@/views/drug_manage/stock_manage/stock_manage_detail/StockManageDetail'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '库存管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '库存管理')
          next()
        }
      },
      //4. 出库管理
      {
        //4.1 出库信息
        path: 'outStockInfo',
        component: () => import('@/views/drug_manage/out_stock_manage/out_stock_info/OutStockInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '出库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '出库管理')
          next()
        }
      },
      {
        //4.2 未审核出库信息
        path: 'outStockNotCheck',
        component: () => import('@/views/drug_manage/out_stock_manage/out_stock_not_check/OutStockNotCheck'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '出库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '出库管理')
          next()
        }
      },
      {
        //4.3 审核通过出库信息
        path: 'outStockPassCheck',
        component: () => import('@/views/drug_manage/out_stock_manage/out_stock_pass_check/OutStockPassCheck'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '出库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '出库管理')
          next()
        }
      },
      {
        //4.4 审核未通过出库信息
        path: 'outStockNotPassCheck',
        component: () => import('@/views/drug_manage/out_stock_manage/out_stock_not_pass_check/OutStockNotPassCheck'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '出库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '出库管理')
          next()
        }
      },
      {
        //4.5 新增出库信息
        path: 'newAddOutStockInfo',
        component: () => import('@/views/drug_manage/out_stock_manage/new_add_out_stock_info/NewAddOutStockInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '出库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '出库管理')
          next()
        }
      },
      //5. 入库管理
      {
        //5.1 入库信息
        path: 'enterStockInfo',
        component: () => import('@/views/drug_manage/enter_stock_manage/enter_stock_info/EnterStockInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '入库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '入库管理')
          next()
        }
      },
      {
        //5.2 未审核入库信息
        path: 'enterStockNotCheck',
        component: () => import('@/views/drug_manage/enter_stock_manage/enter_stock_not_check/EnterStockNotCheck'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '入库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '入库管理')
          next()
        }
      },
      {
        //5.3 审核通过入库信息
        path: 'enterStockPassCheck/:id',
        component: () => import('@/views/drug_manage/enter_stock_manage/enter_stock_pass_check/EnterStockPassCheck'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '入库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '入库管理')
          next()
        }
      },
      {
        //5.4 审核未通过入库信息
        path: 'enterStockNotPassCheck',
        component: () => import('@/views/drug_manage/enter_stock_manage/enter_stock_not_pass_check/EnterStockNotPassCheck'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '入库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '入库管理')
          next()
        }
      },
      {
        //5.5 新增入库信息
        path: 'newAddEnterStockInfo',
        component: () => import('@/views/drug_manage/enter_stock_manage/enter_new_add_enter_stock_info/NewAddEnterStockInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '入库管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '入库管理')
          next()
        }
      },
      //6. 药品信息维护
      {
        //6.1 药品信息
        path: 'drugInfoShow',
        component: () => import('@/views/drug_manage/drug_info_manage/drug_info_show/DrugInfoShow'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品信息维护'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品信息维护')
          next()
        }
      },
      {
        //6.2 新增药品
        path: 'newAddDrug/:value',
        component: () => import('@/views/drug_manage/drug_info_manage/new_add_drug/NewAddDrug'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品信息维护'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品信息维护')
          next()
        }
      },
    ]
  },
]