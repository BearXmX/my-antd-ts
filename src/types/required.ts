/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO Required 将对象类型的所有键改成必传项

interface unRequire {
  gradeId?: number
  productId?: number
}

/* type requireType = {
  gradeId: number;
  productId: number;
} */

type requireType = Required<unRequire>
