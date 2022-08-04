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

// type keyofType = 'gradeId' | 'productId'
const keyofCase: keyofType = 'gradeId'

// * typeof 获取一个对象类型的key组成联合类型

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

// * in 遍历属性 => 只能用在类型的定义中，可以对枚举类型进行遍历

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

// * extends 条件判断和接口继承

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

// * infer 类型占位符 => 只能用于extends类型推断语句中

type InferType<T> = T extends (infer R)[] ? R : any

// type InferTypeCaseA = number
type InferTypeCaseA = InferType<number[]>

const InferTypeCaseInstance: InferTypeCaseA = 100

// type InferTypeCaseB = any
type InferTypeCaseB = InferType<boolean>

// * enum 定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例

// 值为 0 开始自增
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum teachModuleEnum {
  video = '视频',
  imageText = '图文',
  live = '直播',
  talk = '讨论',
  workpaper = '作业',
  testpaper = '测验',
  courseware = '资料',
  faceCourse = '面授',
}

// 获取枚举的所有键

// type teachModuleType = "video" | "imageText" | "live" | "talk" | "workpaper" | "testpaper" | "courseware" | "faceCourse"
type teachModuleType = keyof typeof teachModuleEnum

/* 高级类型 */

// * Pick  用于对象类型，选取想要的键值对

// 第一个参数为需要处理的对象类型，第二个参数为对象类型的键(你想要的)组成的联合类型
/* type pickA = {
  gradeId: number
  productId: number
} */
type pickA = Pick<IPropsA, 'gradeId' | 'productId'>

// * Omit 用于对象类型，排除不想要的键值对

interface IPropsA {
  gradeId: number
  productId: number
  teachModuleId: number
  hostId: number
}

// 第一个参数为需要处理的对象类型，第二个参数为对象类型的键(你不想要的)组成的联合类型
/* type omitA = {
  teachModuleId: number
  hostId: number
} */
type omitA = Omit<IPropsA, 'gradeId' | 'productId'>

// * Extract 用于联合类型，选取想要的类型

// 第一个参数为需要处理的联合类型，第二个参数为该联合类型的成员(你想要的)组成的联合类型
// type unionA = 'gradeId' | 'productId'
type unionA = Extract<unionTypeA, 'gradeId' | 'productId'>

// * Exclude 用于联合类型，排除不想要的类型

type unionTypeA = 'gradeId' | 'productId' | 'teachModuleId' | 'hostId'

// 第一个参数为需要处理的联合类型，第二个参数为该联合类型的成员(你不想要的)组成的联合类型
// type unionB = 'teachModuleId' | 'hostId'
type unionB = Exclude<unionTypeA, 'gradeId' | 'productId'>

// * Record 声明对象类型
interface IAnimals {
  eat: string
  move: () => void
}

type animalsType = 'dog' | 'cat'

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
}

// * ReturnType 获取函数类型的返回值类型

type func01 = (agencyId: number) => {
  gradeId: number
  productId: number
}

/* 
  type funcReturnType = {
    gradeId: number;
    productId: number;
  }
*/

type funcReturnType = ReturnType<func01>

// * Parameters 获取函数类型的参数所组成的数组类型

// type paramsType = [agencyId: number]

type paramsType = Parameters<func01>

const paramsCase: paramsType = [888]

// * Required 将对象类型的所有键改成必传项

interface unRequire {
  gradeId?: number
  productId?: number
}

/* type requireType = {
  gradeId: number;
  productId: number;
} */

type requireType = Required<unRequire>

// * Partial 将对象类型的所有键改成非必传项

interface requireProps {
  gradeId: number
  productId: number
}

/* type partialType = {
  gradeId?: number | undefined;
  productId?: number | undefined;
} */

type partialType = Partial<requireProps>

// * Readonly 将对象类型的所有键改成只读项

interface unReadonlyProps {
  gradeId: number
  productId: number
}

/*  type readonlyType = {
  readonly gradeId: number;
  readonly productId: number;
}*/

type readonlyType = Readonly<unReadonlyProps>

const readonlyCase: readonlyType = {
  gradeId: 1,
  productId: 1,
}

// error 无法分配到 "gradeId" ，因为它是只读属性。
// readonlyCase.gradeId = 9

// * NonNullable 剔除联合类型的undefined 和 null

// type removeNullType = string | number | boolean

type removeNullType = NonNullable<undefined | null | string | number | boolean>
