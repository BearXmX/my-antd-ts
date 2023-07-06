import React from 'react'
import { Button } from 'antd'

type componentStateType = {
  count: number
}

export default class index extends React.Component<any, componentStateType> {
  [x: string]: any
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  click = () => {
    console.log(this.updater)

    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div style={{ padding: 16 }} onClick={this.click}>
        <div style={{ marginBottom: 16 }}>class-component</div>
        <div style={{ marginBottom: 16 }}>{this.state.count}</div>
        <div>
          <Button type="primary">click me</Button>
        </div>
      </div>
    )
  }
}
