import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//统计报表
export default [
  {
    path: '/statisticsTableRoot',
    component: () => import('@/components/content/module_roots/StatisticsTableRoot'),
    children: [
      //1.药品统计
      {
        path: 'drugStatistics',
        component: () => import('@/views/statistics_table/drug_statistics/DrugStatistics'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '药品统计'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '药品统计')
          next()
        }
      },
      //2.检查项目统计
      {
        path: 'checkItemStatistics',
        component: () => import('@/views/statistics_table/check_item_statistics/CheckItemStatistics'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '检查项目统计'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '检查项目统计')
          next()
        }
      },
      //3.患者统计
      {
        path: 'sickStatistics',
        component: () => import('@/views/statistics_table/sick_statistics/SickStatistics'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '患者统计'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '患者统计')
          next()
        }
      },
      //4.收费统计
      {
        path: 'costStatistics',
        component: () => import('@/views/statistics_table/cost_statistics/CostStatistics'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '收费统计'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '收费统计')
          next()
        }
      },

    ]
  },
]