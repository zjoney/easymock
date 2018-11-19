// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {post,get} from './axios/api.js'

Vue.prototype.BILL_URL = 'https://www.easy-mock.com/mock/5bee735a24e7ee36667dba7d/Joce/'

Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.config.productionTip = false

// 引入mockjs
require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})

Vue.filter('getYMD', function(input) {
  return input.split(' ')[0]
})
