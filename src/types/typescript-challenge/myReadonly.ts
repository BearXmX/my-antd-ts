/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现Readonly工具类型

interface Q2 {
  a: string
  b: number
  c: boolean
  d: void
  e: () => boolean
}

type myReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type Q22 = myReadonly<Q2>
