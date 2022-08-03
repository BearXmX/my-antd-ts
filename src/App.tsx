import { Button, Space } from 'antd'
import React, { useState } from 'react'
import { MyContext } from '../src/context'
/* import AntdTs from './antd-ts' */
import NativeTs from './native-ts'
/* import ReactTs from './react-ts' */
import { default as ReactAntdTs } from './type-ts'

const App: React.FC = () => {
  const [status, setStatus] = useState<number>(3)
  return (
    <div className="App">
      <Space>
        <>
          <Button type="link" onClick={() => setStatus(0)}>
            native-ts
          </Button>
          {/*           <Button type="link" onClick={() => setStatus(1)}>
            react-ts
          </Button> */}
          {/*           <Button type="link" onClick={() => setStatus(2)}>
            antd-ts
          </Button> */}
          <Button type="link" onClick={() => setStatus(3)}>
            react-antd-ts
          </Button>
        </>
      </Space>
      <MyContext.Provider value={{ diyProps: 1 }}>
        {status === 0 && <NativeTs />}
        {/*         {status === 1 && <ReactTs />}
        {status === 2 && <AntdTs />} */}
        {status === 3 && <ReactAntdTs />}
      </MyContext.Provider>
    </div>
  )
}

App.defaultProps = {
  default: 10,
}

console.dir(App)

console.dir(<App></App>)

export default App
