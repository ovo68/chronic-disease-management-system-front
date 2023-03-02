import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

//注册到vue中 任何一个vue组件都可以使用
import * as myUtils from '@/utils/utils'

Vue.prototype.myUtils = myUtils

//引入element ui
import ElementUI from 'element-ui'

Vue.use(ElementUI)

//引入less
import less from 'less'

Vue.use(less)

//引入自定义的组件
import snCommon from '@/components/common/sn/snCommon'

Vue.use(snCommon)

//导入mutations-types  mutations中方法的名字
import * as mutationsTypes from '@/store/mutations-types'

Vue.prototype.mutationsTypes = mutationsTypes

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


