/* 生成随机slug */
export function randomString(length) {
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = length; i > 0; --i) result += str[Math.floor(Math.random() * str.length)]
  return result
}

export function yaml2Json(content) {
  let yaml = require('js-yaml')
  let result = yaml.load(content)
  console.log('result: ', result)
}
