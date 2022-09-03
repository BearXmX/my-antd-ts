// TODO 用TS实现JS里的includes

// K extends T[number] ? true : false 部分条件不成立
// 采用下方对数组注意循环比较的方式判断K是否存在
type includes<T extends unknown[], K> = T extends [infer R, ...infer U] ? (IsEqual<R, K> extends true ? true : includes<U, K>) : false

type W1 = includes<['a', 'b'], 'a'>

type W11s = includes<['a', 'b'], 'c'>
