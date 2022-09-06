/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO typeof 获取一个对象类型的key组成联合类型

const arr1 = [
  {
    label: 2,
    value: 2,
  },
]

type type2 = typeof arr1[0]

const a = {
  gradeId: 0,
  productId: 0,
}

type typeofCase = typeof a

/* type typeofCase = {
  gradeId: number
  productId: number
} */

const b = 'gradeId'

type typeofCaseB = typeof b

// type typeofCaseB = 'gradeId'
