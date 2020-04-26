// import Vue from 'vue'
// import { logout } from '@/api/login'
// import { ACCESS_TOKEN } from '@/store/mutation-types'

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
    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        this.api.login
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
    // Logout ({ commit, state }) {
    //   return new Promise((resolve) => {
    //     logout(state.token).then(() => {
    //       resolve()
    //     }).catch(() => {
    //       resolve()
    //     }).finally(() => {
    //       commit('SET_TOKEN', '')
    //       Vue.ls.remove(ACCESS_TOKEN)
    //     })
    //   })
    // }
  },
}

export default user
