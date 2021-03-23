import request from '../utils/request'
import store from '@/store'
export const getUserRepos = params => {
  return request({
    url: `/api/users/${store.state.app.userInfo.login}/repos`,
    method: 'Get',
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
