<template>
  <div class="addcart">
    <div class="cart">
      <i class="iconfont">&#xe63f;</i>
      <div class="num">0</div>
    </div>
    <div class="add">加入购物车</div>
    <div class="buy">立即购买</div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {},
    name: 'addcart',
    data(){
      return{

      }
    }
  }
</script>

<style scoped>


  .addcart{
    height:1rem;
    line-height:1rem;
    border-top:.01rem solid #ccc;
    width:100%;
    background:#fff;
  }
  .addcart .cart{
    width:3.1rem;
    height:1rem;
    float:left;
  }
  .addcart .cart .iconfont{
    margin-left:.15rem;
  }
  .addcart .cart .num{
    width:.3rem;
    height:.3rem;
    line-height:.3rem;
    border-radius: 50%;
    background:red;
    color:#fff;
    text-align: center;
    position: absolute;
    bottom:.55rem;
    left:.35rem;
  }
  .addcart .add{
    width:2.2rem;
    height:1rem;
    line-height:1rem;
    float:left;
    font-size:.3rem;
    text-align: center;
    background:#af5bbf;
    color:#fff;
  }
  .addcart .buy{
    float:right;
    width: 2.2rem;
    height: 1rem;
    line-height: 1rem;
    font-size:.3rem;
    text-align: center;
    background:#7a298b;
    color:#fff;
  }
</style>
