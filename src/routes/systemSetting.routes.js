import store from '@/store/index'
import * as mutationsTypes from '@/store/mutations-types'

//系统设置
export default [
  {
    path: '/systemSettingRoot',
    component: () => import('@/components/content/module_roots/SystemSettingRoot'),
    children: [
      //1.基础设置
      {
        path: 'baseSetting',
        component: () => import('@/views/system_setting/base_setting/BaseSetting'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '基础设置'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '基础设置')
          next()
        }
      },
      //2.费用设置
      {
        path: 'costSetting',
        component: () => import('@/views/system_setting/cost_setting/CostSetting'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '费用设置'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '费用设置')
          next()
        }
      },
      //3.模板维护
      {
        path: 'templateManage',
        component: () => import('@/views/system_setting/template_manage/TemplateManage'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '模板维护'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '模板维护')
          next()
        }
      },
      //4.供应商管理
      {
        path: 'supplierManage',
        component: () => import('@/views/system_setting/supplier_manage/SupplierManage'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '供应商管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '供应商管理')
          next()
        }
      },
      //5.检查项目设置
      {
        path: 'checkItemSetting',
        component: () => import('@/views/system_setting/check_item_setting/CheckItemSetting'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '检查项目设置'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '检查项目设置')
          next()
        }
      },
      //6.员工管理
      {
        path: 'employeeManage',
        component: () => import('@/views/system_setting/employee_manage/EmployeeManage'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '员工管理'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '员工管理')
          next()
        }
      },
      //7.字典表维护
      {
        path: 'dictionaryTableManage',
        component: () => import('@/views/system_setting/dictionary_table_manage/DictionaryTableManage'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '字典表维护'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '字典表维护')
          next()
        }
      },
      //8.诊所信息维护
      {
        path: 'clinicInfoManage',
        component: () => import('@/views/system_setting/clinic_info_manage/ClinicInfoManage'),
        beforeEnter: (to, from, next) => {
          console.log('从哪儿来: ' + from.path)
          console.log('到哪儿去: ' + to.path)
          window.document.title = '诊所信息维护'
          store.commit(mutationsTypes.CHANGE_HOME_TITLE, '诊所信息维护')
          next()
        }
      },
    ]
  },
]