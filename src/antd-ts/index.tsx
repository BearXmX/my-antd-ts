import { Component } from 'react'
import { MyContext } from '../context'

interface StateType {
  num: number
}
export default class AntdTs extends Component<any, StateType> {
  constructor(props: string) {
    super(props)
    console.log(this.props as unknown as number)

    this.state = {
      num: 9,
    }
  }

  render() {
    return <div style={{ padding: 16 }}>AntdTs</div>
  }
}

AntdTs.contextType = MyContext
