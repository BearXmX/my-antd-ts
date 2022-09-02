interface T1 {
  a: string
  b: number
  c: boolean
  d: void
  e: 'type'
}

declare type ValueOf<T, K extends keyof T> = K extends keyof T ? T[K] : never

type T2 = ValueOf<T1, 'a' | 'b'>

declare type SomePartial<T, K extends keyof T, E = Exclude<keyof T, K>> = {
  [P in K]?: T[P]
} & {
  [P in E]: T[P]
}

type T3 = SomePartial<T1, 'a' | 'b' | 'e'>
