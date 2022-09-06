/* eslint-disable @typescript-eslint/no-unused-vars */
/** @description 正常的命名空间 */

export namespace StudentSpace {
  export interface IProps {
    gradeId: number
    productId: number
  }
}

/** @use 命名空间使用 */

const StudentSpaceCase: StudentSpace.IProps = {
  gradeId: 0,
  productId: 0,
}

/** @description 嵌套的命名空间 */

export namespace StandardSpace {
  export interface IProps {
    gradeId: number
    moduleId: number
  }
  export namespace ModalSpace {
    export interface IProps {
      gradeId: number
      teachModuleId: number
    }
  }
}
