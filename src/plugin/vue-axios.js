import Vue from 'vue'
import axios from 'axios'
/**
 * 进行跳转到登录页面
 */
// var ssourl = ''
const goSso = ssourl => {
  const url = `${ssourl}?targetUrl=${encodeURIComponent(window.location.href)}`
  window.location.href = url
}

// axios默认配置
axios.defaults.timeout = 120000 // 超时时间
axios.defaults.baseURL = '/sanguo' // 请求前缀路径
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8' // 请求前缀路径
axios.defaults.headers['REQUEST_HEADER'] = 'binary-http-client-header'
 
// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const code = error.response.status
    if (code == 401) {
      axios.post(`/system/configuration`).then(res => {
        if (res.data.code == 200) {
          goSso(res.data.data.loginUrl)
        }
      })
    } else if (code > 400) {
      // Message.error(error.response.data.message)
    }
  }
)

export var api = {
  async get(url, data) {
    let res = await axios.get(url, data)
    res = res.data
    return new Promise(resolve => {
      resolve(res)
    })
  },
  async post(url, data) {
    let res = await axios.post(url, data)
    res = res.data
    return new Promise(resolve => {
      resolve(res)
    })
  }
}

Vue.prototype.axios = axios
