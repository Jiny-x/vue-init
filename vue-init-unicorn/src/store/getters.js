const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.info,
  addRouters: state => state.permission.addRouters,
}

export default getters
