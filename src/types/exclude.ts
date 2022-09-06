/* eslint-disable @typescript-eslint/no-unused-vars */

// TODO Exclude 用于联合类型，排除不想要的类型

// 第一个参数为需要处理的联合类型，第二个参数为该联合类型的成员(你不想要的)组成的联合类型

type unionTypeA = 'gradeId' | 'productId' | 'teachModuleId' | 'hostId'

// type unionB = 'teachModuleId' | 'hostId'
type unionB = Exclude<unionTypeA, 'gradeId' | 'productId'>
