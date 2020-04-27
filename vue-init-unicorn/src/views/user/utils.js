import authConfig from '@/config/authConfig'

const qs = require('querystring')

const login = function() {
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

export default login
