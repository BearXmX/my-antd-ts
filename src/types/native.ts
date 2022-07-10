/* typescript 关键字 */

// * as 类型断言 => 你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型

const container = document.querySelector('.canvas') as HTMLCanvasElement

console.log(container.getContext('2d'))

const strCase: any = 'this is a string'

const str: number = (strCase as string).length

console.log(str)

// * ! 非空断言 => 断言某个类型一定存在

interface IProps {
  gradeId: number
  onOk?: () => void
}

const objCase: IProps = {
  gradeId: 0,
  onOk: () => {},
}

objCase.onOk!()

// * keyof 获取一个对象类型的key组成联合类型

type keyofType = keyof {
  gradeId: number
  productId: number
}

const keyofCase: keyofType = 'gradeId'
