/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO Extract 用于联合类型，选取想要的类型

// 第一个参数为需要处理的联合类型，第二个参数为该联合类型的成员(你想要的)组成的联合类型

type unionTypeB = 'gradeId' | 'productId' | 'teachModuleId' | 'hostId'

// type unionA = 'gradeId' | 'productId'
type unionA = Extract<unionTypeB, 'gradeId' | 'productId'>
