import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import CompanyReport from '@/components/companyReport'
import TaskTracking from '@/components/taskTracking'
import CompanySearch from '@/components/companySearch'
import TaskSearch from '@/components/taskSearch'
import ProductInfor from '@/components/product/productInfor'
Vue.use(Router);


Vue.prototype.__routes = [
  {
    path: '/',
    component: App,
    desc: "首页",
    children:[
      {
      path: '/companyReport',
      name: 'companyReport',
      component: CompanyReport,
      desc: "公司数据报表",
    },
    {
      path: '/taskTracking',
      name: 'taskTracking',
      component: TaskTracking,
      desc: "重点任务跟踪",
    },
    {
      path: '/companySearch',
      name: 'companySearch',
      component: CompanySearch,
      desc: "公司数据报表查询",
    },
    {
      path: '/taskSearch',
      name: 'taskSearch',
      component: TaskSearch,
      desc: "重点任务跟踪查询",
    },
    {
      path: '/productInfor',
      name: 'productInfor',
      component: ProductInfor,
      desc: "产品信息",
    },
    ]
  }
];

export default new Router({
  routes: Vue.prototype.__routes
})
