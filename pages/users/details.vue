<template>
    <div>
      用户详情页
      {{$route.query.id}}
    </div>
</template>

<script>
    export default {
        name: "details.vue",
      async asyncData({query,error}){
          console.log('query',query.id);
          if (query.id){
            return {user:{name:"tom"}}
          }
          error({statusCode:400,message:"请传递用户ID"})
      }
    }
</script>

<style scoped>

</style>
