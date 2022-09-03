// TODO 实现能求出元祖长度的工具类型

type Q5 = ['jack', 'lucy', 'john', 'steven']

type lengthOfTurple<T extends unknown[]> = T['length']

type Q55 = lengthOfTurple<Q5>
