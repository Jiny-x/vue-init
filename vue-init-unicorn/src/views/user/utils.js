import Vue from 'vue'
import token from './token.js'
import authConfig from '@/config/authConfig'

var querystring = require('querystring')
var loginUtil = {
  login: function () {
    var authorUrl = authConfig.userAuthorizationUri
    authorUrl =
      authorUrl +
      ('?' +
        querystring.stringify({
          client_id: authConfig.clientId,
          response_type: authConfig.response_type,
          scope: authConfig.scope,
          state: authConfig.state,
          redirect_uri: authConfig.redirect_uri,
        }))
    window.location.href = authorUrl
  },
  logout: function (returnUrl) {
    Vue.$router.push('/logout' + '?return_url=' + returnUrl)
  },
  checkLogin: function () {
    var tokenInfo = token.loadToken()
    if (tokenInfo === null || tokenInfo.access_token == null || tokenInfo.access_token === 'null') {
      return false
    }
    return true
  },
}

export default loginUtil
