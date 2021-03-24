import request from '../utils/request'
import store from '@/store'
export const getUserRepos = params => {
  return request({
    url: `/api/users/${store.state.app.userInfo.login}/repos`,
    method: 'GET',
    params
  })
}
export const deleteRepo = id => {
  return request({
    url: `/api/repos/${id}`,
    method: 'DELETE'
  })
}
export const addRepo = ({ id, data }) => {
  return request({
    url: `/api/users/${id}/repos`,
    method: 'POST',
    data
  })
}
export const editRepo = ({ id, data }) => {
  return request({
    url: `/api/repos/${id}`,
    method: 'PUT',
    data
  })
}

export const repoDetail = ({ id, params }) => {
  return request({
    url: `/api/repos/${id}`,
    method: 'GET',
    params
  })
}
// export const getGroupRepos = ({ params, login }) => {
//   return request({
//     url: `/api/groups/${login}/repos`,
//     method: 'Get',
//     params
//   })
// }
