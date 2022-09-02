// xxx.tsx

import { Button } from 'antd'

// jq对应craco(webpack)的路径别名
// 同时也可以在node_modules里创建名字为jq的文件夹模拟第三方库
import $ from 'jq'

const JQComponent: React.FC = () => {
  const clickMe = () => {
    const dom = $<HTMLDivElement>('.clikeMe')
    console.log(dom?.show())
  }

  return (
    <div className="clikeMe" style={{ padding: 16 }}>
      <Button type="primary" onClick={clickMe}>
        click me
      </Button>
    </div>
  )
}

export default JQComponent
