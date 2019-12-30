<template>
    <div>
      用户列表:
      <ul>
        <li v-for="user in users" :key="user.id">{{user.name}}</li>
      </ul>
    </div>
</template>

<script>
  function getUsers(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve([{name:"tom",id:"1"},{name:"jerry",id:"2"}])
      },1500);
    })
  }

    export default {
        name: "users",
      //在生命周期之前运行
      //可以获取到上下文的参数,用于重定向判断,错误判断等
      //eg用户详情页: async asyncData(query,error){
      //获取路由中携带的字段
      async asyncData(){
        console.log(process.server);
        //使用await和async来进行异步请求
        const users=await getUsers();
        return {users};//return的数据最终会和data中进行合并
      }
    }
</script>

<style scoped>

</style>
