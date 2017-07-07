<template>
  <div id="app">
    <router-view></router-view>
    <a href="/">主页</a>
    <a href="#/regist">deng</a>
    <a href="#/cart">cart</a>
    <a href="#/kind">kind</a>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
