<template>
    <div>
     用户id:
      {{$route.params.id}}
      用户名:{{user.name}}
    </div>
</template>

<script>
    export default {
        name: "_id.vue",
        async asyncData({params,$axios}){
          //首屏渲染,服务器直接请求,不存在跨域
          const data=await $axios.$get(`/api/users/${params.id}`);
          if (data.ok){
            return {user:data.user}
          }
          error({statusCode:400,message:'id有误,查询失败'})
        }
    }
</script>

<style scoped>

</style>
