import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//会员管理
export default [
  {
    path: '/vipManageRoot',
    component: () => import('@/components/content/module_roots/VipManageRoot'),
    children: [

      {
        path: '/',
        redirect: 'vipManage'
      },
      //会员管理首页
      {
        path: 'vipManage',
        component: () => import('@/views/vip_manage/VipManage'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '会员管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '会员管理')
          next()
        }
      },
      {
        //会员个人信息
        path: 'sickInfo/:id',
        component: () => import('@/components/content/sick/sick_info/SickInfo'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '会员管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '会员管理')
          next()
        }
      },
    ]
  },
]