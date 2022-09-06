/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO Partial 将对象类型的所有键改成非必传项

interface requireProps {
  gradeId: number
  productId: number
}

/* type partialType = {
  gradeId?: number | undefined;
  productId?: number | undefined;
} */

type partialType = Partial<requireProps>
