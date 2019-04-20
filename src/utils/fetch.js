/** Created by wanan on 2019-04-20
 *作者:wanan
 */
import 'whatwg-fetch'
import 'es6-promise'

//全局路径
const commonUrl = 'http://localhost:80/api';
//解析json
function parseJSON(response){
  console.log(response.data)
  return response.json();
}
//
// function checkStatus(response){
//   if(response.status >= 200 && response.status < 500){
//     return response
//   }
//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error
// }

/**
 * 登录请求
 *
 * @param data 数据
 */
// export function loginReq(data){
//   const options = {};
//   options.method = 'post';
//   options.made = 'cors';
//   options.body = JSON.stringify(data);
//   options.headers={
//     'Content-Type':'application/json'
//   }
//   return fetch('/loginOk',options,{credentials:'include'})
//     .then(checkStatus)
//     .then(parseJSON)
//     .then((res)=>{
//       if(res.retCode === '0001'){
//         localStorage.setItem('x-access-token',res.retBody.AccessToken)
//         return 'success'
//       }
//       else if(res.retCode === '0002'){
//         return 'error'
//       }
//       else if(res.retCode === '0003'){
//         return 'error'
//       }else{
//         return ;
//       }
//
//     })
//     .catch(err=>({err}))
// }

/**
 * 普通请求
 * @param {*url,*method,*data} options
 */
export  function request(options = {}){
  const {data,url} = options;
  options = {...options};
  options.mode = 'no-cors';
  delete options.url;
  if(data){
    delete options.data;
    options.body = JSON.stringify(data)
  }
  console.log(options)
  return fetch(commonUrl+url,options,{credentials: 'include'})
    .then(parseJSON)
    .catch(err=>({err}))
}