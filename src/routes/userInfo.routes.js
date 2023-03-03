import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

export default [
    {
        path: '/UserInfoRoot',
        component: () => import('@/components/content/module_roots/UserInfoRoot'),
        children: [
            // 1.个人信息
            {
                path: 'UserInfo',
                component: () => import('@/views/user_info/UserInfo'),
                beforeEnter: (to, from, next) => {
                    console.log('从哪儿来: ' + from.path)
                    console.log('到哪儿去: ' + to.path)
                    window.document.title = '账号资料'
                    store.commit(mutationsTypes.CHANGE_HOME_TITLE, '账号资料')
                    next()
                }
            },
        ]
    }
]