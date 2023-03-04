import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'


export default [
  {
    path: '/RecommendationRoot',
    component: () => import('@/components/content/module_roots/RecommendationRoot'),
    children: [
      // 医院建议
      {
        path: 'NewDrugVolunteer',
        component: () => import('@/views/recommendation/NewDrugVolunteer'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '新药志愿者'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '新药志愿者')
          next()
        }
      },
      // 医院建议
      {
        path: 'HospitalRecommendations',
        component: () => import('@/views/recommendation/HospitalRecommendations'),
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


