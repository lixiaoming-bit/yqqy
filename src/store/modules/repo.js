import { getUserRepos, deleteRepo, addRepo, editRepo } from '@/api/repo'
export default {
  state: {
    repoList: [],
    knowledgeDetail: {}
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
    },
    addRepo({ commit }, data) {
      addRepo(data).then(() => {
        getUserRepos().then(res => {
          commit('SET_REPO_LIST', res.data)
        })
      })
    },
    editRepo({ commit }, data) {
      editRepo(data).then(() => {
        getUserRepos().then(res => {
          commit('SET_REPO_LIST', res.data)
        })
      })
    }
  },
  mutations: {
    OPEN_DETAIL(state, payload) {
      state.knowledgeDetail = payload
    },
    SET_REPO_LIST(state, payload) {
      state.repoList = payload
    }
  }
}
