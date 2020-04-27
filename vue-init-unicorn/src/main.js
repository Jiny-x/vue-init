import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import api from './request/api'

import './permission'

import VueStorage from 'vue-ls'
const storageOptions = {
  namespace: 'u__',
  name: 'ls',
  storage: 'session'
}

Vue.config.productionTip = false

Vue.prototype.api = api

Vue.use(Antd)
Vue.use(VueStorage, storageOptions)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
