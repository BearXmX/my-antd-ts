import { Button } from 'antd'

interface T1 {
  a: string
  b: number
  c: boolean
  d: void
  e: 'type'
  f: () => void
}

const a: ValueOf<T1, 'a' | 'b' | 'c'> = 6969

const b: SomePartial<T1, 'a' | 'b'> = {
  c: true,
  d: undefined,
  e: 'type',
  f: function () {
    console.log('SomePartial')
  },
}

const UtilsComponent: React.FC = () => {
  const somePartialHandler = () => {
    b.f()
  }
  return (
    <div className="pd">
      <div className="mb">UtilsComponent</div>
      <div className="mb">
        ValueOf： {typeof a}-{a}
      </div>
      <div className="mb">
        ValueOf：{' '}
        <Button type="primary" onClick={somePartialHandler}>
          SomePartial
        </Button>
      </div>
    </div>
  )
}

export default UtilsComponent
