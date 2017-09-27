import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV);
Vue.use(Router);
/* layout */
import Layout from '../views/layout/Layout.vue'

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will no redirct in the levelbar
 * noDropdown : if `noDropdown:true` will has no submenu
 * meta : { role: ['admin'] }  will control the page role
 **/
export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/authredirect', component: _import('login/authredirect'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},
  {path: '/401', component: _import('errorPage/401'), hidden: true},
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [
      {path: 'dashboard', component: _import('dashboard/index')}
    ]
  }, {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    icon: 'people',
    noDropdown: true,
    children: [{path: 'index', component: _import('introduction/index'), name: '简述'}]
  }
];
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'lock',
    meta: {role: ['admin']},
    noDropdown: true,
    children: [{path: 'index', component: _import('permission/index'), name: '权限测试页', meta: {role: ['admin']}}]
  },
  {
    path: '/icon',
    component: Layout,
    icon: 'icon',
    noDropdown: true,
    children: [{path: 'index', component: _import('svg-icons/index'), name: 'icons'}]
  },
  {path: '*', redirect: '/404', hidden: true}
];
