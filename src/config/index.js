/* 文档类型配置项 */
export const DOCUMENT_TYPE = [
  { id: 0, key: 'Book', value: 'Book', label: '文库' },
  { id: 1, key: 'Resource', value: 'Resource', label: '资源' },
  { id: 2, key: 'Design', value: 'Design', label: '画板' },
  { id: 3, key: 'Thread', value: 'Thread', label: '话题' }
]
/* 文档图片配置 */
export const DOCUMENT_TYPE_ICON = {
  Book: 'folder',
  Resource: 'dashboard',
  Design: 'aspect_ratio',
  Thread: 'group_work'
}

/* 权限配置项 */
export const RIGHTS_PROFILE = [
  { id: 0, key: 0, value: 0, label: '私密' },
  { id: 1, key: 1, value: 1, label: '所有人可见' },
  { id: 2, key: 2, value: 2, label: '空间成员可见' },
  { id: 3, key: 3, value: 3, label: '空间所有人（含外部联系人）可见' },
  { id: 4, key: 4, value: 4, label: '知识库成员可见' }
]

/* 基础缓存配置项 */
export const DEFAULT_GLOBAL_CONFIG = {}
