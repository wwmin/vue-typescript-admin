import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'

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
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/home',
    component: Layout,
    name: '首页',
    meta: {
      text: "首页"
    },
    hidden: true
  },
  {
    path: '/404',
    component: _import('errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: _import('errorPage/401'),
    hidden: true
  },
  {
    path: '*',
    name: 'errorPage',
    meta: {
      text: "首页"
    },
    redirect: '/404',
    hidden: true
  }
];
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
