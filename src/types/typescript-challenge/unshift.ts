// TODO 用TS实现JS里的unshift

type unshift<T extends unknown[], U> = [U, ...T]

type W3 = unshift<[1, 2, 3], 4>
