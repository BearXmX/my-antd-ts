// TODO as 类型断言 => 你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型

const container = document.querySelector('.canvas') as HTMLCanvasElement

console.log(container.getContext('2d'))

const strCase: any = 'this is a string'

const str: number = (strCase as string).length

console.log(str)
