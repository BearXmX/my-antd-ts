/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO keyof 获取一个对象类型的key组成联合类型

interface IPropsC {
  gradeId: number
  productId: number
}

type IProps2 = keyof IPropsC

// type keyofType = 'gradeId' | 'productId'

const keyofCase: IProps2 = 'gradeId'
