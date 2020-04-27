/**
 * api接口的统一出口
 */

// xx模块接口
import login from '@/request/api/login'
import finder from '@/request/api/finder'

// 导出接口
export default {
  login,
  finder
}
