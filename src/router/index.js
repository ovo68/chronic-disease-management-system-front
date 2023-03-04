import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = []

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

function getAllRouters(modules) {
  // TODO 判断登录用户角色，过滤路由
  modules.keys().forEach((key) => {
    routes = routes.concat(modules(key).default);
  })
}

getAllRouters(require.context('@/routes',true,/\.routes\.js$/))
// console.log(routes)

const router = new VueRouter({
  routes,
  mode: 'history',
  meta: {
    title: '',
  }
})

export default router
