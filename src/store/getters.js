export default {
  token: state => state.app.token,
  processedRepoList: state => {
    const knowledgeDefaltVal = state.app.globalConfig?.knowledgeDefaltType?.value || 'all'
    if (knowledgeDefaltVal === 'all') {
      return state.repo.repoList
    } else {
      return state.repo.repoList.filter(item => item.type === knowledgeDefaltVal)
    }
  }
}
