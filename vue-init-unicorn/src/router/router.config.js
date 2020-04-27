import { UserLayout, BasicLayout, RouteView } from '@/layouts'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      // 主页
      {
        path: '/home',
        name: 'home',
        component: RouteView,
        redirect: '/home',
        meta: { title: '列表页', icon: 'table', permission: ['table'] },
        children: [
          {
            path: '/home',
            name: 'Home',
            meta: { title: '主页', keepAlive: true, permission: ['table'] },
            component: () => import('@/views/home/Home'),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
  },
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/Login')
      },
    ]
  },
  // {
  //   path: '/token-index',
  //   name: 'tokenIndex',
  //   hidden: true,
  //   component: () => import('@/views/user/TokenIndex')
  // },

  // {
  //   path: '/404',
  //   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  // },
]
