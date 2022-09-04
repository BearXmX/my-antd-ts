/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现能够获取函数返回类型的工具类型

type myReturnType<T extends (...arg: any[]) => any> = T extends (...arg: any[]) => infer R ? R : never

type W5 = myReturnType<() => string>
