/* eslint-disable @typescript-eslint/no-unused-vars */

// TODO NonNullable 剔除联合类型的undefined 和 null

// type removeNullType = string | number | boolean

type removeNullType = NonNullable<undefined | null | string | number | boolean>
