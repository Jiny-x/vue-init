import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress'
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false })

const whiteList = ['/token-index']
// const defaultRoutePath = '/home'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (!store.getters.userInfo) {
      store
        .dispatch('GetInfo')
        .then((res) => {
          const result = res.data
          store.dispatch('GenerateRoutes', { result }).then(() => {
            router.addRoutes(store.getters.addRouters)
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
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
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next({ path: '/token-index' })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
