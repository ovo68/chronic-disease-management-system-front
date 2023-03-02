import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//经营管理的路由
export default [
  {
    path: '/manageConditionRoot',
    component: () => import('@/components/content/module_roots/ManageConditionRoot'),
    children: [
      {
        path: '/',
        redirect: 'manageCondition',
      },
      {
        path: 'manageCondition',
        component: () => import('@/views/manage_condition/ManageCondition'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '经营概况'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '经营概况')
          next()
        }
      },
    ]
  },
]




