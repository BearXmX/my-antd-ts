/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO Pick  用于对象类型，选取想要的键值对

// 第一个参数为需要处理的对象类型，第二个参数为对象类型的键(你想要的)组成的联合类型

interface IPropsA {
  gradeId: number
  productId: number
  teachModuleId: number
  hostId: number
}

/* type pickA = {
  gradeId: number
  productId: number
} */

type pickA = Pick<IPropsA, 'gradeId' | 'productId'>
