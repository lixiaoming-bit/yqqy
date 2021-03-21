export default {
  state: {
    drawer: false
  },
  mutations: {
    TOGGLE_DRAWER(state, payload) {
      state.drawer = payload
    }
  },
  actions: {},
  getters: {
    drawer(state) {
      return state.drawer
    }
  }
}
