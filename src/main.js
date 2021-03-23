import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入fastClick
import fastClick from 'fastclick'
// 引入UI
import './utils/muse-ui'

// 引入工具集
import './utils/ls'
fastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
