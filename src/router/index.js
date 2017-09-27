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
  {
    path: '/components',
    component: Layout,
    redirect: '/components/index',
    name: '组件',
    icon: 'component',
    children: [
      {path: 'index', component: _import('components/index'), name: '介绍 '},
      {path: 'tinymce', component: _import('components/tinymce'), name: '富文本编辑器'},
      {path: 'markdown', component: _import('components/markdown'), name: 'Markdown'},
      {path: 'jsoneditor', component: _import('components/jsonEditor'), name: 'JSON编辑器'},
      {path: 'dndlist', component: _import('components/dndList'), name: '列表拖拽'},
      {path: 'splitpane', component: _import('components/splitpane'), name: 'SplitPane'},
      {path: 'avatarupload', component: _import('components/avatarUpload'), name: '头像上传'},
      {path: 'dropzone', component: _import('components/dropzone'), name: 'Dropzone'},
      {path: 'sticky', component: _import('components/sticky'), name: 'Sticky'},
      {path: 'countto', component: _import('components/countTo'), name: 'CountTo'},
      {path: 'mixin', component: _import('components/mixin'), name: '小组件'},
      {path: 'backtotop', component: _import('components/backToTop'), name: '返回顶部'}
    ]
  },
  {
    path: '/charts',
    component: Layout,
    redirect: '/charts/index',
    name: '图表',
    icon: 'chart',
    children: [
      { path: 'index', component: _import('charts/index'), name: '介绍' },
      { path: 'keyboard', component: _import('charts/keyboard'), name: '键盘图表' },
      { path: 'keyboard2', component: _import('charts/keyboard2'), name: '键盘图表2' },
      { path: 'line', component: _import('charts/line'), name: '折线图' },
      { path: 'mixchart', component: _import('charts/mixChart'), name: '混合图表' }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
];
