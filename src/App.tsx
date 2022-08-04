import { Button, Space } from 'antd'
import React, { useState } from 'react'
import { MyContext } from '../src/context'
import { default as ReactAntdTs } from './react-antd-ts'

const App: React.FC = () => {
  const [status, setStatus] = useState<number>(1)
  return (
    <div className="App">
      <Space>
        <>
          <Button type="link" onClick={() => setStatus(0)}>
            native-ts
          </Button>
          <Button type="link" onClick={() => setStatus(1)}>
            react-antd-ts
          </Button>
        </>
      </Space>
      <MyContext.Provider value={{ diyProps: 1 }}>{status === 1 && <ReactAntdTs />}</MyContext.Provider>
    </div>
  )
}

App.defaultProps = {
  default: 10,
}

console.dir(App)

console.dir(<App></App>)

export default App
