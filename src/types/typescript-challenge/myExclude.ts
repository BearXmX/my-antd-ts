/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现Exclude工具类型

type Q6 = 'a' | 'b' | 'c' | 'd' | 'e'

type myExclude<T, K extends T> = T extends K ? never : T

type Q66 = myExclude<Q6, 'a' | 'b'>
