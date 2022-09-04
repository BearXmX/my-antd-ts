/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现Pick工具类型

interface Q1 {
  a: string
  b: number
  c: boolean
  d: void
  e: () => boolean
}

type myPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Q11 = myPick<Q1, 'a' | 'b' | 'e'>
