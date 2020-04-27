var authConfig = {
  baseOAuthUrl: `${process.env.VUE_APP_AUTH_HOST}`,
  // 请求授权地址
  userAuthorizationUri: `${process.env.VUE_APP_AUTH_HOST}/authserver/oauth/authorize`,
  // accessToken请求地址
  accessTokenUri: `http://${process.env.VUE_APP_AUTH_URI}/oauth/token`,
  // 用户信息请求地址
  userInfoUri: `${process.env.VUE_APP_AUTH_URI}/user-me`,
  // 登出请求地址
  logoutUri: `${process.env.VUE_APP_AUTH_URI}/remove_token`,
  // refreshToken请求地址
  refreshTokenUri: `http://${process.env.VUE_APP_AUTH_URI}/oauth/token`,
  // 项目地址
  localuri: process.env.DEV_URL,
  redirect_uri: `http://${process.env.VUE_APP_DEV_URL}/login`,

  // 客户端相关标识，请从认证服务器申请
  clientId: process.env.VUE_APP_AUTH_CLIENT_ID,
  client_secret: 'app-a-1234',
  // 申请的权限范围
  scope: 'all',
  // 可选参数，客户端的当前状态，可以指定任意值，用于校验，此次案例不做相关认证
  state: '',
  // 一些固定的请求参数
  response_type: 'code',
  grant_type: 'authorization_code',
  code: '',
}

export default authConfig
