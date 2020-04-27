import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress'
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false })

const whiteList = ['tokenIndex']
// const defaultRoutePath = '/home'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (!Object.keys(store.getters.userInfo).length) {
      store
        .dispatch('GetUserInfo')
        .then((res) => {
          const result = res.data
          store.dispatch('GenerateRoutes', result).then(() => {
            router.addRoutes(store.getters.addRouters)
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              // 确保addRoutes已完成
              next({ ...to, replace: true })
            } else {
              // 跳转到目的路由
              next({ path: redirect })
            }
          })
        })
        .catch(() => {
          store.dispatch('Logout').then(() => {
            next({ path: '/user/login', query: { redirect: to.fullPath } })
          })
        })
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      const fullPath = to.fullPath
      store.dispatch('Login', { fullPath })
      // next({ path: '/user/login' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
