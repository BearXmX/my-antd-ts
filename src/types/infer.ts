/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO infer 类型占位符 => 只能用于extends类型推断语句中

type InferType<T> = T extends (infer R)[] ? R : any

// type InferTypeCaseA = number
type InferTypeCaseA = InferType<number[]>

const InferTypeCaseInstance: InferTypeCaseA = 100

// type InferTypeCaseB = any
type InferTypeCaseB = InferType<boolean>
