<template>
  <div id="app">
    <router-view class="main"></router-view>
    <div class="nav">
      <a href="/"><i class="iconfont">&#xe605;</i>达令</a>
      <a href="#/kind"><i class="iconfont">&#xe72b;</i>分类</a>
      <a href="#/cart"><i class="iconfont">&#xe63f;</i>购物车</a>
      <a href="#/regist"><i class="iconfont">&#xe61b;</i>注册</a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*公共样式*/
body,h1,h2,h3,h4,h5,h6,p,ul,ol,li,dl,dt,dd,input,a,img,header,nav,main,section,footer,article,aside,figure,figcaption{padding:0; margin:0;}
header,nav,main,section,footer,article,aside,figure,figcaption{display:block;}
ul,ol{list-style:none;}
input{outline:none;}
img{border:0;display:block;}

body{font:12px/1.5 "微软雅黑"; color:#3e3e3e; }
a{text-decoration:none; color:3e3e3e; cursor:pointer;}
a:hover{text-decoration:none; color:#ca2722;}

.all {
  display: flex;
  width: 100%;
  
  flex-direction: column;}

html,body{height:100%;}

/*app*/
#app{
  display: flex;
  flex-direction: column;
  height: 100%
}
#app .main{
    flex:1;
}
.nav{
    height:1rem;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    text-align: center;
    position:fixed;
    width:100%;
    bottom:0;
    font-size: .2rem;
}
.nav a{
  flex:1;

}
.nav a i{
  display: block;
}
</style>
