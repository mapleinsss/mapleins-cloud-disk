import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const requestUtil = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: 'http://localhost:16666/',
  // 超时
  timeout: 10000,
  // 携带凭证
  withCredentials: true,
  // 返回值
  responseType: 'json'
})

requestUtil.interceptors.request.use(config => {
  config.headers.common.token = localStorage.getItem('token')
  return config
}, error => {
  return Promise.reject(error)
})

export { requestUtil }
