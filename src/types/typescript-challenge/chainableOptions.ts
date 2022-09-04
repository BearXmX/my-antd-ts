// TODO 实现可串联构造工具类型

declare const myConfig: Chainable<E1>

interface E1 {
  foo: number
  name: string
  bar: {
    value: string
  }
}

type Chainable<T = {}> = {
  option: <U extends keyof T, K extends T[U]>(key: U, value: K) => Chainable<Omit<T, U>>
  get(): T
}

myConfig
  .option('foo', 2)
  .option('bar', {
    value: 'hhhh',
  })
  .option('name', '')
