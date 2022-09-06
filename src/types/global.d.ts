// xxx.d.ts

// TODO 扩展 Window
declare interface Window {
  /** @use antd版本 */
  ANTD_VERSION: string
  /** @use 判断是否运行在qiankun环境 */
  __POWERED_BY_QIANKUN_PARENT__: boolean
}

// TODO 扩展 Date
declare interface Date {
  /** @use 格式化 */
  formatterTime: () => number
}
