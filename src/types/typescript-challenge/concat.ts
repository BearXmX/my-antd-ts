/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO 用TS实现JS里的concat

type Q9 = ['I']

type Q99 = ['L', 'O', 'V', 'E']

type Q999 = ['Y', '0', 'U']

type concat<T extends unknown[], U extends unknown[], E extends unknown[]> = [...T, ...U, ...E]

type Q9999 = concat<Q9, Q99, Q999>
