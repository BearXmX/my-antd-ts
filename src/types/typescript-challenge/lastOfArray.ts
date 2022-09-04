/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现获取数组类型最后一个类型的工具类型

type E2 = ['jack', 'rose', 'john', 'steven']

type lastOfArray<T extends unknown[]> = T extends [...infer U, infer R] ? R : never

type E22 = lastOfArray<E2>
