import Vue from 'vue'
import axios from '@/request/interceptor'
import authConfig from '@/config/authConfig'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 模块地址
// const moduleUrl = '/login'

const login = {
  getToken(code) {
    return axios({
      url: `${authConfig.accessTokenUri}`,
      method: 'post',
      auth: {
        username: authConfig.clientId,
        password: authConfig.client_secret,
      },
      data: {
        client_id: authConfig.clientId,
        client_secret: authConfig.client_secret,
        code: code,
        redirect_uri: authConfig.redirect_uri,
        grant_type: authConfig.grant_type,
      },
      transformRequest: [
        function (data) {
          let ret = ''
          for (const it in data) {
            if (data[it] === null) {
              continue
            }
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        },
      ],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        accessToken: Vue.ls.get(ACCESS_TOKEN),
      },
    })
  },
  getUser() {
    const accessToken = Vue.ls.get(ACCESS_TOKEN)
    return axios({
      url: `${authConfig.userInfoUri}`,
      method: 'get',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
  },
  logout(token) {
    return new Promise((resolve) => {
      axios({
        url: `${process.env.AUTH_HOST}/authserver/logout`,
        method: 'get',
      }).then(() => {
        axios({
          url: `/remove_token?access_token=${token}${process.env.AUTH_USER_ME_URI} + '/authserver`,
          method: 'get',
        }).then(() => {
          resolve()
        })
      })
    })
  },
}

export default login
