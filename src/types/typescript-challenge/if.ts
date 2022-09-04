/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 实现IF工具类型

type If<B extends boolean, T, U> = B extends true ? T : U

type Q8 = If<true, 'a', 'b'>

type Q88 = If<false, 'a', 'b'>
