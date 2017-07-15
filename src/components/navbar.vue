<template>
    <div class="nav">
      <a href="/"><i class="iconfont">&#xe605;</i>达令</a>
      <a href="#/kind"><i class="iconfont">&#xe72b;</i>分类</a>
      <a href="#/cart"><i class="iconfont">&#xe63f;</i>购物车</a>
      <a href="#/regist"><i class="iconfont">&#xe61b;</i>我的</a>
    </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style scoped lang="scss">


  .nav{
    height:1rem;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    text-align: center;
    width:100%;
    font-size: .2rem;
  }
  .nav a{
    flex:1;

  }
  .nav a i{
    display: block;
  }
</style>
