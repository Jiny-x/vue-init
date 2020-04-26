import axios from '@/request/interceptor'

const base = '/optionFinder'

const finder = {
  getDepartmentFinder() {
    return axios({
      url: `${base}/department`,
      method: 'get',
      data: {},
    })
  },
}

export default finder
