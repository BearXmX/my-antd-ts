import { Component } from 'react'
import { Button } from 'antd'

export default class index extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
    console.log(this.click, '-------')
  }
  click() {
    console.log(this, 'click me')
  }
  render() {
    return (
      <div style={{ padding: 16 }} onClick={this.click}>
        <div style={{ marginBottom: 16 }}>class-component</div>
        <div>
          <Button type="primary">click me</Button>
        </div>
      </div>
    )
  }
}
