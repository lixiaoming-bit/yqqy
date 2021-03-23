import { getUserRepos, deleteRepo } from '@/api/repo'
export default {
  state: {
    repoList: []
  },
  actions: {
    getRepoList({ commit }, params = {}) {
      getUserRepos(params).then(res => {
        commit('SET_REPO_LIST', res.data)
      })
    },
    deleteRepo({ commit }, data = '') {
      deleteRepo(data).then(() => {
        getUserRepos().then(res => {
          commit('SET_REPO_LIST', res.data)
        })
      })
    }
  },
  mutations: {
    SET_REPO_LIST(state, payload) {
      state.repoList = payload
    }
  }
}
