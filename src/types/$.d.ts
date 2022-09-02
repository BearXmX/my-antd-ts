// $.d.ts

// 声明该第三方库 declare module xxx
declare module 'jq' {
  //定义JQuery对象的默认方法
  type defalutMethod<T extends Element> = {
    /** @use 隐藏dom 方法依旧返回该dom */
    hide: () => $dom<T>
    /** @use 展示dom 方法依旧返回该dom */
    show: () => $dom<T>
  }

  //定义该原生dom属性方法 & JQuery的默认方法
  type $dom<T extends Element> = T & defalutMethod<T>

  // 定义$方法 接收一个泛型该泛型默认为Element类型 入参为string 返回该dom或者无
  function $<T extends Element>(selector: string): $dom<T> | null

  export default $
}
