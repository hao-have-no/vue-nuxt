export default function ({$axios,redirect}) {
  //onRequest为请求拦截器
  $axios.onRequest(config=>{
    if (!process.server){
      //在客户端的时候请求,在服务端不需要
      config.headers.token = localStorage.getItem('token');
    }
  })
}
