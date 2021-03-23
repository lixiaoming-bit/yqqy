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
// export const getGroupRepos = ({ params, login }) => {
//   return request({
//     url: `/api/groups/${login}/repos`,
//     method: 'Get',
//     params
//   })
// }
