import { Button } from 'antd'

interface IProps {
  gradeId: number
  onOk?: () => void
}

const Child: React.FC<IProps> = props => {
  // todo 非空断言
  return (
    <div>
      {!!props.gradeId && (
        <Button type="primary" onClick={() => props.onOk!()}>
          非空断言
        </Button>
      )}
    </div>
  )
}

export const OtherFunc: React.FC = () => {
  return (
    <>
      <Child gradeId={0} />
    </>
  )
}

const NativeTs: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <Child gradeId={1} onOk={() => console.log('非空断言')} />
    </div>
  )
}

export default NativeTs
