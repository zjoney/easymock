import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 5000
//baseURL
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5bee735a24e7ee36667dba7d/Joce/'

// 请求拦截器
axios.interceptors.request.use((config)=> {
    return config;
  }, (error) =>{
    return Promise.reject(error);
  })
  // 响应拦截器
axios.interceptors.response.use((response)=> {
  return response;
}, (error)=> {
  return Promise.reject(error);
})

// 封装axios的post请求
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

// export default {
//   JH_news(url, params) {
//     return fetch(url, params);
//   }
// }

// 封装axios的get请求
export function get(url, params= {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}