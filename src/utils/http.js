import axios from "axios";
//创建实例
const instance = axios.create({
  baseURL: "http://www.pudge.wang:3180/",
  timeout: 10000
});

// 添加请求拦截器
// instance.interceptors.request.use((config)=> {
//   // 在发送请求之前做些什么
//   // console.log(config);
//   return config;
// }, 
// (error)=> {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// instance.interceptors.response.use((response)=> {
//   // 对响应数据做点什么
//   console.log(response);
//   return response;
// }, (error)=> {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });


//定义http模块
const http  = {
  get(url, obj) {
    return new Promise((resolve,reject)=>{
      instance.get(url, {params: obj})
        .then((res)=>{
          if(res.data.status === "0"){
            resolve(res.data);
          }else {
            console.log(res.msg);
          }
        })
        .catch((err)=>{
          reject(err)
          console.log(err.msg);
        })
    })
  },
  post(url,obj) {
    return new Promise((resolve,reject)=>{
      instance.post(url, obj)
        .then((res)=>{
          // resolve(res.data);
          if(res.data.status === "0"){
            resolve(res.data);
          }else {
            console.log(res.msg);
          }
        })
        .catch((err)=>{
          reject(err);
          console.log(err.message);
        })
    })
  }
};

export default http;