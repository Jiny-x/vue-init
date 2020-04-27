import { BasicLayout, RouteView } from '@/layouts'

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
        name: 'Home',
        component: RouteView,
        redirect: '/home',
        meta: { title: '主页', icon: 'table', group: '主页', x: 1, y: 1 },
        children: [
          {
            path: '/home',
            name: 'Home',
            meta: { title: '主页', keepAlive: true },
            component: () => import('@/views/home/Home'),
          },
        ],
      },
      // test
      {
        path: '/text',
        name: 'test',
        component: RouteView,
        redirect: '/test1',
        meta: { title: '列表页', icon: 'table', group: '列表页', x: 1, y: 1  },
        children: [
          {
            path: '/test1',
            name: 'Test1',
            meta: { title: '主页', keepAlive: true },
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
  // {
  //   path: '/user',
  //   component: UserLayout,
  //   redirect: '/user/login',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'login',
  //       name: 'login',
  //       component: () => import('@/views/user/Login')
  //     },
  //   ]
  // },
  {
    path: '/token-index',
    name: 'tokenIndex',
    hidden: true,
    component: () => import('@/views/user/Login'),
  },

  // {
  //   path: '/404',
  //   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
  // },
]
