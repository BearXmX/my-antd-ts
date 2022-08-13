export function A(arr) {
  if (typeof arr[0] === 'number') {
    return arr.length
  }
  if (typeof arr[0] === 'string') {
    return arr.length + ''
  }
}