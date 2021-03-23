// 引入时间格式化工具
import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // import locale
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')
export default dayjs
