/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现能取出Promise<T>的T类型

type Q7 = Promise<string>

// ! 第二次推导是为了防止第一次推导的R依旧是Promise<T>所以让其继续循环推导
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R> ? (R extends Promise<unknown> ? MyAwaited<R> : R) : never

type Q77 = MyAwaited<Q7>

type Q777 = MyAwaited<Promise<Promise<number[]>>>
