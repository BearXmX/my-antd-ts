/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现Omit工具类型

interface W6 {
  a: string
  b: number
}

type myOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

type W66 = myOmit<W6, 'a'>
