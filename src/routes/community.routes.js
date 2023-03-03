import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'


export default [
  {
    path: '/CommunityRoot',
    component: () => import('@/components/content/module_roots/CommunityRoot'),
    children: [
      // 1.病情交流
      {
        path: 'DiseaseCommunication',
        component: () => import('@/views/community/DiseaseCommunication'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '病情交流'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '病情交流')
          next()
        }
      },
      // 2.医院建议
      {
        path: 'HospitalRecommendations',
        component: () => import('@/views/community/HospitalRecommendations'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '医院建议'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '医院建议')
          next()
        }
      }
    ]

  }
]


