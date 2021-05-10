export function changeName(params) {
    return (dispatch) => {
        // do someThing 例如接口调用然后保存数据到redux,供全局使用123
      dispatch({ type: 'home/changeName', payload: params});
    };
  }