import request from '../utils/request'

export const getUserInfo = params => {
  return request({
    url: '/api/user',
    method: 'Get',
    params
  })
}
