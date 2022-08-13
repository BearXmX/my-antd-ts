import { Button, Form, Input, Radio, RadioChangeEvent, FormInstance, Checkbox, DatePicker, DatePickerProps, RadioProps } from 'antd'
import { CheckboxChangeEvent, CheckboxProps } from 'antd/lib/checkbox'
import { Moment } from 'moment'
import React, { useRef } from 'react'

const mgb: React.CSSProperties = {
  marginBottom: 20,
  width: 200,
  display: 'block',
}

const TypeTs: React.FC = () => {
  /** @description 无需引入Project命名空间 可直接使用 */

  const projectId: Project.IProps = {
    projectId: 0,
  }

  const projectType: Project.ProjectType = 'author'

  const projectIntro: ProjectContent = 'intro'

  // changeEvent =========================================

  /** @description 修饰事件对象 */
  const changeInputTypeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  /** @description 修饰事件回调 */
  const changeInputTypeTwo: React.ChangeEventHandler<HTMLInputElement> = e => {
    console.log(e.target.value)
  }

  // keyboardEvent =========================================

  /** @description 修饰事件对象 */
  const keyUpInputTypeOne = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key)
  }

  /** @description 修饰事件回调 */
  const keyUpInputTypeTwo: React.KeyboardEventHandler<HTMLInputElement> = e => {
    console.log(e.key)
  }

  // mouseEvent

  /** @description 修饰事件对象 */
  const mouseButtonTypeOne = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.pageX)
  }

  /** @description 修饰事件回调 */
  const mouseButtonTypeTwo: React.MouseEventHandler<HTMLButtonElement> = e => {
    console.log(e.pageX)
  }

  // Antd Form组件

  const Instance = useRef<FormInstance>(null)

  const onFinish = () => {
    console.log(Instance.current?.getFieldsValue())
  }

  ;<Form ref={Instance} onFinish={onFinish}></Form>

  // Antd Radio组件

  /** @description 修饰事件参数 */
  const radioChangeTypeOne = (e: RadioChangeEvent) => {
    console.log(e.target.value)
  }

  /** @description 修饰事件回调 */
  const radioChangeTypeTwo: RadioProps['onChange'] = e => {
    console.log(e.target.value)
  }

  // Antd Checkbox组件

  /** @description 修饰事件参数 */
  const checkboxChangeTypeOne = (e: CheckboxChangeEvent) => {
    console.log(e.target.checked)
  }

  /** @description 修饰事件回调 */
  const checkboxChangeTypeTwo: CheckboxProps['onChange'] = e => {
    console.log(e.target.checked)
  }

  // Antd DatePicker组件

  /** @description 修饰事件参数 */
  const datePickerChangeOne = (value: Moment | null, dateString: string) => {
    console.log(value?.format('YYYY-MM-DD'), dateString)
  }

  /** @description 修饰事件回调 */
  const datePickerChangeTwo: DatePickerProps['onChange'] = (value, dateString) => {
    console.log(value?.format('YYYY-MM-DD'), dateString)
  }

  return (
    <div style={{ padding: 16 }}>
      <div>
        <Input onChange={changeInputTypeOne} onKeyUp={keyUpInputTypeOne} style={mgb} />
        <Input onChange={changeInputTypeTwo} onKeyUp={keyUpInputTypeTwo} style={mgb} />
      </div>
      <div style={mgb}>
        <Button type="primary" style={{ marginRight: 20 }} onClick={mouseButtonTypeOne}>
          click me
        </Button>
        <Button type="primary" onClick={mouseButtonTypeTwo}>
          click me
        </Button>
      </div>
      <div style={mgb}>
        <Form ref={Instance} onFinish={onFinish}></Form>
      </div>
      <div style={mgb}>
        <Radio.Group onChange={radioChangeTypeOne}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
      <div style={mgb}>
        <Radio.Group onChange={radioChangeTypeTwo}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>
      </div>
      <div style={mgb}>
        <Checkbox onChange={checkboxChangeTypeOne}>Checkbox</Checkbox>
      </div>
      <div style={mgb}>
        <Checkbox onChange={checkboxChangeTypeTwo}>Checkbox</Checkbox>
      </div>
      <div style={mgb}>
        <DatePicker onChange={datePickerChangeOne} />
      </div>
      <div style={mgb}>
        <DatePicker onChange={datePickerChangeTwo} />
      </div>
    </div>
  )
}

export default TypeTs
