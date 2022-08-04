// project.d.ts

declare namespace Project {
  /** @use 项目props */

  interface IProps {
    projectId: number
  }

  /** @use 项目类型 */

  type ProjectType = 'self' | 'author'
}

declare type ProjectContent = 'details' | 'intro'

// ! 使用声明文件注意事项

// 1.枚举不会被编译 因为枚举不属于抽象类型声明 而是定义了一个实际对象
/* declare enum Area {
  North = 1,
} */
