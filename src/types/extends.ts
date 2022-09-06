/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO extends 条件判断和接口继承

// 在泛型定义中 => 类型约束 类型K 能满足约束 keyof T
type _myPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type extendsType<T extends unknown[]> = T

// ok type extendsTypeCase = number[]
type extendsTypeCaseA = extendsType<number[]>

// error
// type extendsTypeCaseB = extendsType<boolean>

// 在表达式中 => 条件分配

// type A1 = string
type A1 = 'x' extends 'x' ? string : number

// type A2 = number
type A2 = 'x' | 'y' extends 'x' ? string : number

type P<T> = T extends 'x' ? string : number

// type A3 = string | number
type A3 = P<'x' | 'y'>

// ! 以泛型传参(联合类型)的方式进入extends三元表达式中，会对类型进行拆分遍历逐一进行判断组成联合类型
// step 解析
// step 1 => 'x' extends 'x' ? string : number 得到string
// step 2 => 'y' extends 'x' ? string : number 得到number
// step 3 => 联合每个得到的类型 string | number

// 接口继承

interface IBase {
  gradeId: number
}

interface IExtendBase extends IBase {
  productId: number
}

const IExtendBaseInstance: IExtendBase = {
  gradeId: 1,
  productId: 2,
}
