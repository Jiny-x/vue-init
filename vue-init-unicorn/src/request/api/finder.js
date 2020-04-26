import axios from '@/request/interceptor'

const moduleUrl = '/optionFinder'

const finder = {
  getDepartmentFinder() {
    return axios({
      url: `${moduleUrl}/department`,
      method: 'get',
      data: {},
    })
  },
}

export default finder
