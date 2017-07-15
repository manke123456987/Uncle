<template>
  
    <router-view class="main"></router-view>

  
</template>

<script>

export default {
  components: {},
  name: 'app'
}
</script>

<style>
  @import "../static/css/base.css";

/*app*/
#app{
  display: flex;
  flex-direction: column;
  height: 100%;
}
 .main{
 		width: 100%;
 		height: 100%;
    display: flex;
    flex-direction: column;
}
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
