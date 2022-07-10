import { Button, Space } from 'antd'
import React, { useState } from 'react'
import AntdTs from './antd-ts'
import NativeTs from './native-ts'
import ReactTs from './react-ts'

const App: React.FC = () => {
  const [status, setStatus] = useState<number>(0)
  return (
    <div className="App">
      <Space>
        <Button type="link" onClick={() => setStatus(0)}>
          native-ts
        </Button>
        <Button type="link" onClick={() => setStatus(1)}>
          react-ts
        </Button>
        <Button type="link" onClick={() => setStatus(2)}>
          antd-ts
        </Button>
      </Space>
      {status === 0 && <NativeTs />}
      {status === 1 && <ReactTs />}
      {status === 2 && <AntdTs />}
    </div>
  )
}

export default App
