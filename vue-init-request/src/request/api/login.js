import axios from '@/request/interceptor'

const base = '/login'

const login = {
  login() {
    return axios({
      url: `${base}/login`,
      method: 'post',
      data: {},
    })
  },
}

export default login
