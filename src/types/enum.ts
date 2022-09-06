/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO enum 定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例

// 值为 0 开始自增
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum teachModuleEnum {
  video = '视频',
  imageText = '图文',
  live = '直播',
  talk = '讨论',
  workpaper = '作业',
  testpaper = '测验',
  courseware = '资料',
  faceCourse = '面授',
}

// 获取枚举的所有键

// type teachModuleType = "video" | "imageText" | "live" | "talk" | "workpaper" | "testpaper" | "courseware" | "faceCourse"
type teachModuleType = keyof typeof teachModuleEnum
