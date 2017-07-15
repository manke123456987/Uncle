<template>
  <div class="detail">
    <div class="box">
      <div class="header">
        <i class="iconfont back">&#xe620;</i>
        <span>达令详情</span>
        <i class="iconfont shop">&#xe621;</i>
        <i class="iconfont more">&#xe6d2;</i>
      </div>

      <img src="../assets/bdm.jpg" alt="" class="bdm">

      <div class="main">
        <div class="all">
          <div class="name">[法国·妆容就得清爽卸] Bioderma 贝德玛净妍洁肤液(500ml)</div>
          <div class="heart">
            <i class="iconfont">&#xe501;</i>
            <span>90483</span>
          </div>
        </div>
        <div class="price">
          <div class="a">
            ￥88.00
          </div>
          <img src="../assets/wdj.png" class="b">
          <div class="c">法国限时售价</div>
          <div class="d">￥228</div>
          <i class="iconfont">&#xe68e;</i>
          <div class="e">海外政策</div>
        </div>
        <div class="tie">
          <img src="../assets/tie.png" class="t">
          <div class="word">税费：￥10.47 达令补贴后税费0元</div>
        </div>
        <div class="fan">
          <img src="../assets/fan.png" class="f">
          <div class="mai">购买可获44达令币</div>
        </div>
      </div>

      <div class="say">
        <div class="ta">Ta们在说(67)</div>
        <img src="../assets/pl.png" class="pl">
        <img src="../assets/pl.png" class="pl">
        <img src="../assets/pl.png" class="pl">
      </div>

      <!--<ul id="qiehuan">-->
        <!--<li @click="tar(0)" :class="activeIndex==0? 'active':''">图文详情</li>-->
        <!--<li @click="tar(1)" :class="activeIndex==1? 'active':''">服务承诺</li>-->
      <!--</ul>-->

      <ul class="qiehuan">
        <li class="tuwen">图文详情</li>
        <li class="fuwu">服务承诺</li>
      </ul>
      <img src="../assets/a1.jpg" class="a1">
      <img src="../assets/a2.jpg" class="a2">
      <img src="../assets/a3.jpg" class="a3">
      <img src="../assets/a4.jpg" class="a4">
      <img src="../assets/a5.png" class="a5">
      <img src="../assets/a6.png" class="a6">

      <div class="hot">
        同类热销商品推荐
      </div>

      <div class="last">
        <div class="all">
          <img src="../assets/b1.jpg" class="b1">
          <div class="wenhe">法国-配方温和不伤肤</div>
          <div class="double">雅漾舒润卸妆水</div>
          <div class="end">
            <p>￥119.00</p>
            <i class="iconfont">&#xe60b;</i>
          </div>
        </div>
        <div class="all">
          <img src="../assets/b1.jpg" class="b1">
          <div class="wenhe">法国-配方温和不伤肤</div>
          <div class="double">雅漾舒润卸妆水</div>
          <div class="end">
            <p>￥119.00</p>
            <i class="iconfont">&#xe60b;</i>
          </div>
        </div>
        <div class="all">
          <img src="../assets/b1.jpg" class="b1">
          <div class="wenhe">法国-配方温和不伤肤</div>
          <div class="double">雅漾舒润卸妆水</div>
          <div class="end">
            <p>￥119.00</p>
            <i class="iconfont">&#xe60b;</i>
          </div>
        </div>
        <div class="all">
          <img src="../assets/b1.jpg" class="b1">
          <div class="wenhe">法国-配方温和不伤肤</div>
          <div class="double">雅漾舒润卸妆水</div>
          <div class="end">
            <p>￥119.00</p>
            <i class="iconfont">&#xe60b;</i>
          </div>
        </div>

      </div>
    </div>
    <addcart></addcart>
  </div>

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Addcart from './Addcart'
  export default {
    components: {Addcart},
    name: 'detail',
    data () {
      return {
        activeIndex:0
      }
    },
    methods:{
      tar:function(e){
        this.activeIndex = e;
      }
    }
  }
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped>
  .detail{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .box{
    overflow-y: scroll;
    flex:1;
  }
  li{
    float: left;
  }
  li.active{
    color: #fc6e51;
    border-bottom: .02rem solid #fc6e51;
  }
  @import '../../static/css/detail.css';
</style>

