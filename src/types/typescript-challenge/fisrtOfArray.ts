// TODO 实现能取出元祖的第一个类型的工具类型

type Q4 = ['jack', 'lucy', 'john']

type firstOfArray<T extends unknown[]> = T[0]

type Q44 = firstOfArray<Q4>
