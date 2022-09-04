/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现paramters工具类型

type myParamters<T extends (...args: any[]) => any> = T extends (...arg: infer R) => any ? R : never

type W4 = myParamters<(a: string, b: number) => any>
