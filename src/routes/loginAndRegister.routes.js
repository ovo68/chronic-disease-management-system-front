import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//登录注册的路由
export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    //登录
    path: '/login',
    components: {
      loginOrRegister: () => import('@/views/login_register/login/Longin')
    },
    beforeEnter: (to, from, next) => {
      console.log('从哪儿来: ' + from.path)
      console.log('到哪儿去: ' + to.path)
      window.document.title = '登录'
      next()
    }
  },
  {
    //注册
    path: '/register',
    components: {
      loginOrRegister: () => import("@/views/login_register/register/Register")
    },
    beforeEnter: (to, from, next) => {
      console.log('从哪儿来: ' + from.path)
      console.log('到哪儿去: ' + to.path)
      window.document.title = '注册'
      next()
    }
  },
]