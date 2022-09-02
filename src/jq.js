// src/jq.js

function $(selector) {
  const dom = document.querySelector(selector)

  dom.show = function () {
    console.log('show');
    return this
  }

  dom.hide = function () {
    console.log('hide');
    return this
  }
  return dom
}

// 默认导出 $
// $方法返回dom对象同时挂载show/hide方法在dom对象上

export default $