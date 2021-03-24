import Vue from 'vue'
import { getUserInfo } from '@/api/user'
export default {
  state: {
    globalConfig: {},
    token: '',
    userInfo: {},
    drawer: false,
    refresh: false,
    action: {},
    currentScrollSlide: {
      slideId: 0,
      bs: null
    }
  },
  mutations: {
    REFRESH(state, payload) {
      state.refresh = payload
    },
    SET_GLOBAL_CONFIG(state, payload) {
      state.globalConfig = { ...state.globalConfig, ...payload }
      Vue.ls.set('globalConfig', state.globalConfig)
    },
    SET_ACTION(state, payload) {
      state.action = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    TOGGLE_DRAWER(state, payload) {
      state.drawer = payload
    },
    SET_USER_INFO(state, payload) {
      state.userInfo = payload
    },
    SET_SCROLL_ACTION(state, payload) {
      state.currentScrollSlide = payload
    }
  },
  actions: {
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then(res => {
            commit('SET_USER_INFO', res.data)
            resolve(true)
          })
          .catch(err => {
            console.log('err: ', err)
            reject(err)
          })
      })
    }
  },
  getters: {
    drawer(state) {
      return state.drawer
    }
  }
}
