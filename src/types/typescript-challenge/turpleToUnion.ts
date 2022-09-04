/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现能够将元祖转换成联合类型的工具类型

type W9 = ['jack', 'rose', 'john', 'steven']

type turpleToUnion<T extends unknown[]> = T[number]

type W99 = turpleToUnion<W9>
