import { Button, Space } from 'antd'
import React, { useState } from 'react'
import { MyContext } from '../src/context'
import { default as NativeTs } from '@/native-ts'
import { default as ReactAntdTs } from '@/react-antd-ts'
import { default as ClassComponent } from '@/class-component'
import { default as JQCompoent } from '@/jq-component'
import UtilsComponent from '@/utils-component'

import './index.css'

const App: React.FC = () => {
  const [status, setStatus] = useState<number>(4)
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
          <Button type="link" onClick={() => setStatus(2)}>
            class-component
          </Button>
          <Button type="link" onClick={() => setStatus(3)}>
            jq-component
          </Button>
          <Button type="link" onClick={() => setStatus(4)}>
            utils-component
          </Button>
        </>
      </Space>
      <MyContext.Provider value={{ diyProps: 1 }}>
        {status === 0 && <NativeTs />}
        {status === 1 && <ReactAntdTs />}
        {status === 2 && <ClassComponent />}
        {status === 3 && <JQCompoent />}
        {status === 4 && <UtilsComponent />}
      </MyContext.Provider>
    </div>
  )
}

/** @description 定义defaultProps */
App.defaultProps = {
  name: 'func',
  msg: 'props default',
} as { name: string; msg: string }

/* console.dir(App, 'App React Function Object')
console.dir(<App></App>, 'App React Native Object') */

export default App
