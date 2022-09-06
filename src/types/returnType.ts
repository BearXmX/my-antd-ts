/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO ReturnType 获取函数类型的返回值类型

type func01 = (
  agencyId: number,
  g: string
) => {
  gradeId: number
  productId: number
}

/* 
  type funcReturnType = {
    gradeId: number;
    productId: number;
  }
*/

type funcReturnType = ReturnType<func01>
