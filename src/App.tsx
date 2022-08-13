import { Button, Space } from 'antd'
import React, { useState } from 'react'
import { MyContext } from '../src/context'
import { default as ReactAntdTs } from '@/react-antd-ts'
import * as course from 'course'

const a = course.A([1, 2, 3])
const b = course.A(['1', '2', '3'])
console.log(a, b)

const App: React.FC = () => {
  const [status, setStatus] = useState<number>(0)
  /*   const a = Project.A(1) */
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

/** @description 定义defaultProps */
App.defaultProps = {
  name: 'func',
  msg: 'props default',
} as { name: string; msg: string }

console.dir(App, 'App React Function Object')
console.dir(<App></App>, 'App React Native Object')

export default App
