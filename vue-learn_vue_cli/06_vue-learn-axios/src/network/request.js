import axios from 'axios'

//将网络请求抽离出来，单独封装
//方式一
// export function request(config, success, failure) {
//   //1. 创建axios实例
//   const instance = axios.create({
//     baseURL: 'url',
//     timeout: 5000
//   });
//   //2. 发送网络请求
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }


//方式二
//最终方法
//在main.js调用
export function request(config) {
  //1. 创建axios实例
  const instance = axios.create({
    baseURL: 'url',
    timeout: 5000
  });

  //axios的请求拦截器 两个回调函数
  instance.interceptors.request.use( config => {
    //处理业务员

    //将配置返回继续请求
    return config;
  }, err => {

  });

  //axios的响应拦截器
  instance.interceptors.response.use(res => {
    return res
  }, error => {

  });


  //2. 发送网络请求,instance本身就是一个Promise类型可以直接返回
  return instance(config)
}
