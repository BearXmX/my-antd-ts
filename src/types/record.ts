/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO Record 声明对象类型
interface IAnimals {
  eat: string
  move?: () => void
}

type animalsType = 'dog' | 'cat' | 'st'

// 第一个参数为联合类型声明对象的键类型，第二个参数为声明对象的值类型
const animals: Record<animalsType, IAnimals> = {
  dog: {
    eat: 'bone',
    move: () => {},
  },
  cat: {
    eat: 'fish',
    move: () => {},
  },
  st: {
    eat: 'fish',
    move: () => {},
  },
}
