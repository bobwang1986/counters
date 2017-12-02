export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
//导出加一的方法
export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}
//导出减一的方法
export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}

//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export function incrementAsync(delay = 1000) {
//返回值为一个入参为dispatch的函数,dispatch可以随时执行
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export
