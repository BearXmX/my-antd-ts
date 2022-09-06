// TODO ! 非空断言 => 断言某个类型一定存在

interface IProps {
  gradeId: number
  onOk?: () => void
}

const objCase: IProps = {
  gradeId: 0,
  onOk: () => {},
}

objCase.onOk!()
