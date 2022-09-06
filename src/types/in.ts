/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO in 遍历属性 => 只能用在类型的定义中，可以对枚举类型进行遍历

interface IBaseProps {
  gradeId: number
  productId: number
}

// todo 工具类型 => 给IBaseProps每个键追加null类型

type AddNullType<T> = {
  [P in keyof T]: T[P] | null
}

type AddNullCase = AddNullType<IBaseProps>

// step 解析
// step 1 => ['gradeId' in 'gradeId' | 'productId'] : IBaseProps['gradeId'] | null
// step 2 => ['productId' in 'gradeId' | 'productId'] : IBaseProps['productId'] | null

const AddNullInstance: AddNullCase = {
  gradeId: null,
  productId: null,
}

interface IProps3 {
  gradeId: number
  productId: number
}

// gradeId extends 'gradeId' | 'productId'
type A4 = Pick<IProps3, 'gradeId'>
