import { getUserInfo } from '@/api/user'
export default {
  state: {
    token: '',
    userInfo: {},
    drawer: false,
    refresh: false,
    currentScrollSlide: {
      slideId: 0,
      bs: null
    }
  },
  mutations: {
    REFRESH(state, payload) {
      state.refresh = payload
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
