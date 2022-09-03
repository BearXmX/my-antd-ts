// TODO 实现能将元祖转成对象类型的工具类型

type Q3 = ['jack', 'lucy', 'john']

type turpleToObject<T extends (string | number | symbol)[]> = {
  [P in T[number]]: P
}

type Q33 = turpleToObject<Q3>
