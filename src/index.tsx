import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

// 场景一：将antd版本信息挂载window上
import { version } from 'antd'

// 直接挂载 出现警告
window.ANTD_VERSION = version

// eslint-disable-next-line no-extend-native
Date.prototype.formatterTime = () => {
  return 'timetimetime'.length
}

// const lg = new Date().formatterTime()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
