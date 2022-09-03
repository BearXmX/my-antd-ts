// TODO 用TS实现JS里的push

type push<T extends unknown[], U> = [...T, U]

type W2 = push<[1, 2, 3], 4>
