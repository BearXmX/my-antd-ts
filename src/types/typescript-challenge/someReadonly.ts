/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现能够将对象类型的部分键转成readonly

interface W7 {
  a: string
  b: number
}

type someReadonly<T, K extends keyof T> = {
  readonly [P in K]: T[P]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}

type W77 = someReadonly<W7, 'a'>
