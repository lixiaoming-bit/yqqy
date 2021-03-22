import axios from 'axios'
import router from '@/router'
import store from '@/store'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_URL, // 本地-后端解决跨域后
  timeout: 15000 // 请求超时时间
})

// request 请求拦截器
service.interceptors.request.use(
  config => {
    //设置header
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'

    // 让每个请求携带自定义token
    if (store.getters.token) {
      // header添加token
      config.headers['X-Auth-Token'] = store.getters.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// respone 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const status = error.response.status * 1
    const err = Promise.reject(error)
    switch (status) {
      case 401:
        this.$store.app.commit('SET_TOKEN', '')
        router.push('/login')
        break
      case 404:
        return err
      case 500:
        return err
      default:
        return err
    }
  }
)

export default service
