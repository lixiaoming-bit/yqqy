import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

let appVuex = []
try {
  const context = require.context('./modules', true, /\/.*\.js$/)
  context.keys().forEach(key => {
    const startIndex = key.lastIndexOf('/') + 1
    const endIndex = key.length - 3
    const appName = key.substring(startIndex, endIndex)
    const appConf = context(key).default
    const appObj = {}
    appObj[appName] = appConf
    if (appConf instanceof Array) {
      appVuex = [...appVuex, ...appObj]
    } else {
      appVuex.push(appObj)
    }
  })
} catch (e) {
  console.error(e)
}

const appModulesObj = {}

appVuex.forEach(item => {
  Object.assign(appModulesObj, item)
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: appModulesObj,
  state: {},
  mutations: {},
  actions: {},
  getters
})
