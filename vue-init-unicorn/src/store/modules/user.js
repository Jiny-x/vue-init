import Vue from 'vue'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import login from '@/request/api/login'
import authConfig from '@/config/authConfig'
const qs = require('querystring')

const user = {
  state: {
    token: '',
    name: '',
    avatar: '',
    info: {},
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name }) => {
      state.name = name
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },
  actions: {
    // eslint-disable-next-line
    Login() {
      let authorUrl = authConfig.userAuthorizationUri
      authorUrl =
        authorUrl +
        ('?' +
          qs.stringify({
            client_id: authConfig.clientId,
            response_type: authConfig.response_type,
            scope: authConfig.scope,
            state: authConfig.state,
            redirect_uri: authConfig.redirect_uri,
          }))
      window.location.href = authorUrl
    },
    // 获取用户信息
    GetUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        login
          .getUser()
          .then((res) => {
            const result = res.data
            if (res && res.status === 200) {
              commit('SET_INFO', result)
            } else {
              reject(new Error('获取信息失败'))
            }
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        login
          .logout(state.token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
          .finally(() => {
            commit('SET_TOKEN', '')
            Vue.ls.remove(ACCESS_TOKEN)
          })
      })
    },
  },
}

export default user
