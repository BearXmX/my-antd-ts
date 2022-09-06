/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO Omit 用于对象类型，排除不想要的键值对

// 第一个参数为需要处理的对象类型，第二个参数为对象类型的键(你不想要的)组成的联合类型

interface IPropsA {
  gradeId: number
  productId: number
  teachModuleId: number
  hostId: number
}

/* type omitA = {
  teachModuleId: number
  hostId: number
} */

type omitA = Omit<IPropsA, 'gradeId' | 'productId'>
