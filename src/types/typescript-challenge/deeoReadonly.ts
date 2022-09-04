/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现能够将对象类型深度加上readonly

interface W8 {
  a: string
  b: number
  c: {
    a: number
    b: boolean
  }
}

type deepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? deepReadonly<T[P]> : T[P]
}

type W88 = deepReadonly<W8>
