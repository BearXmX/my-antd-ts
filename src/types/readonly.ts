/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO Readonly 将对象类型的所有键改成只读项

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
