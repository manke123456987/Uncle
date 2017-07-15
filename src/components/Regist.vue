<template>
  <div class="regist">
    <div class="box">
    <div class="header">
      <img src="../assets/tree.png" class="logo"/>
      <div class="middle">
        <a class="youke" href="#/reg">{{userss}}</a>
        <div class="middle-2">
          亲密度 <span class="qmd">0</span> | 达令币 <span class="dlb">0</span>
        </div>
        <div class="chuji">
          <img src="../assets/jin.png" class="dl-v"/>
          <span class="rank">{{dog}}</span>
        </div>
      </div>
      <a href="#/detail" class="right"><i class="iconfont">&#xe617;</i></a>
    </div>
    <div class="two">
      <div class="two-all"><i class="iconfont iconfont-a">&#xe777;</i>购物车</div>
      <div class="two-all"><i class="iconfont iconfont-b">&#xe501;</i>我的收藏</div>
      <div class="two-all"><i class="iconfont iconfont-c">&#xe604;</i>到货通知</div>
      <div class="two-all"><i class="iconfont iconfont-d">&#xe61c;</i>浏览记录</div>
    </div>
    <div class="three">
      <div class="three-up">
        <div class="money">
          <i class="iconfont">&#xe601;</i>
          <span>我的订单</span>
        </div>
        <div class="card">
          <span>全部订单</span>
          <i class="iconfont">&#xe617;</i>
        </div>
      </div>
      <div class="three-down">
        <a class="td-a">
          <i class="iconfont">&#xe503;</i>
          <span>待付款</span>
        </a>
        <a class="td-b">
          <i class="iconfont">&#xe6c1;</i>
          <span>待收货</span>
        </a>
        <a class="td-c">
          <i class="iconfont">&#xe686;</i>
          <span>待评价</span>
        </a>
        <a class="td-d">
          <i class="iconfont">&#xe8fb;</i>
          <span>退货</span>
        </a>
      </div>
    </div>

    <div class="three">
      <div class="three-up">
        <div class="money">
          <i class="iconfont">&#xe615;</i>
          <span>我的钱包</span>
        </div>
        <div class="card">
          <span>激活礼品卡</span>
          <i class="iconfont">&#xe617;</i>
        </div>
      </div>
      <div class="three-3">
        <div class="three-3a">
          <span>0</span>
          <div>领取优惠券</div>
        </div>
        <div class="three-3b">
          <span>0.00</span>
          <div>余额（￥）</div>
        </div>
        <div class="three-3c">
          <span>0</span>
          <div>达令币</div>
        </div>
      </div>
    </div>

    <div class="three">
      <div class="three-up">
        <div class="money">
          <i class="iconfont">&#xe607;</i>
          <span>会员中心</span>
        </div>
        <div class="card">
          <span>我的权益</span>
          <i class="iconfont">&#xe617;</i>
        </div>
      </div>
      <div class="three-3">
        <div class="qiandao">
          <i class="iconfont">&#xe6d1;</i>
          <div>签到</div>
        </div>
        <div class="duihuan">
          <i class="iconfont">&#xe665;</i>
          <div>兑换优惠券</div>
        </div>
        <div class="huiyuan">
          <i class="iconfont">&#xe623;</i>
          <div>会员专享价</div>
        </div>
      </div>
    </div>

    <div class="three three-0">
      <div class="three-up">
        <div class="money">
          <i class="iconfont">&#xe680;</i>
          <span>我的达令帮</span>
        </div>
      </div>
      <div class="three-3">
        <div class="three-3a three-none">
          <span>0</span>
          <div>我的晒图</div>
        </div>
        <div class="three-3b">
          <span>0</span>
          <div>我的关注</div>
        </div>
        <div class="three-3c">
          <span>0</span>
          <div>我的粉丝</div>
        </div>
      </div>
    </div>

    <div class="long">
      <i class="iconfont">&#xe502;</i>
      <span>我喜欢的晒图</span>
    </div>
    <div class="long">
      <i class="iconfont">&#xe502;</i>
      <span>我评论的晒图</span>
    </div>
    <div class="long">
      <i class="iconfont">&#xe501;</i>
      <span>喜欢我的</span>
    </div>
    <div class="long">
      <i class="iconfont">&#xe618;</i>
      <span>评论我的</span>
    </div>
    <div class="long long-last">
      <i class="iconfont">&#xe663;</i>
      <span>达令帮等级</span>
    </div>

    <div class="long">
      <i class="iconfont">&#xe606;</i>
      <span>帮助中心</span>
    </div>
    <div class="long long-last end">
      <i class="iconfont">&#xe63a;</i>
      <span>更多</span>
    </div>
    </div>
    <navbar></navbar>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from './navbar'
export default {
  components: {Navbar},
  name: 'Regist',
  data () {
    return {
      userss : "游客你好",
      dog : "初级达令"
    }
  },
  mounted: function () {
        this.getcookies()
      },
 methods: {
 		getcookies:function(){
        this.$cookie.get('name') ;
        this.userss= this.$cookie.get('name')
//      if(!this.userss == '') {
//      	this.userss="游客您好"
////      	this.dog = "退出"
//      }

    }
 }
 

}
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped>
  .regist{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .box{
    overflow-y: scroll;
    flex:1;
  }
  .header{
  width:100%;
  height:2.9rem;
  background:url(../assets/jiguang.png);
}
  .header .logo{
    width:1.26rem;
    height:1.26rem;
    float: left;
    margin-top:.9rem;
    margin-left:.25rem;
    margin-right:.3rem;
  }
  .header .middle{
    width:5.15rem;
    height: 1.9rem;
    margin-top:1rem;
    float: left;
  }
  .header .middle .youke{
  width:4rem;
  height:.34rem;
  line-height: .34rem;
  font-size:.32rem;
  margin-bottom: .2rem;
  color: #fff;
  display: block;
}
  .header .middle .middle-2{
    width:5rem;
    height:.3rem;
    line-height:.3rem;
    font-size: .3rem;
    color: #fff;
    margin-bottom:.2rem;
  }
  .header .middle .chuji{
    width:5rem;
    height:.3rem;
    line-height:.3rem;
  }
  .header .middle .chuji .dl-v{
    width:.3rem;
    height:.3rem;
    display: inline-block;
  }
  .header .middle .chuji .rank{
  height:.3rem;
  line-height: .3rem;
  font-size:.3rem;
  color:#fff;
}
  .header .right i{
    padding-top:1.4rem;
    display: block;
    color: #ffffff;
  }

  /*第二部分*/
  .two{
    width:100%;
    height:1.25rem;
    background:#fff;
    text-align: center;
    font-size:.22rem;
    display: flex;
    justify-content: space-around;
    margin-bottom: .2rem;
    border-bottom: .01rem solid #ccc;
  }
  .two .two-all i{
    display: block;
    font-size:.5rem;
    margin-top:.1rem;
  }
  .two .two-all .iconfont-a{
    color:#b8d66a;
  }
  .two .two-all .iconfont-b{
    color:#e988bb;
  }
  .two .two-all .iconfont-c{
    color:#89cafb;
  }
  .two .two-all .iconfont-d{
    color:#f3ba80;
  }

  /*第三部分*/
  .three{
    width:100%;
    height: 2.1rem;
    background:#fff;
    margin-bottom:.2rem;
    border-top:.01rem solid #ccc;
    border-bottom:.01rem solid #ccc;
  }
  .three .three-up{
    width:100%;
    height:.85rem;
    border-bottom:.01rem solid #ccc;
  }
  .three .three-up .money{
    width:5rem;
    height:.85rem;
    line-height:.85rem;
    float:left;
  }
  .three .three-up .money i{
    margin-left:.25rem;
    margin-right:.2rem;
    font-size:.4rem;
  }
  .three .three-up .money span{
    color:#000;
    font-size:.3rem;
  }
  .three .three-up .card{
    float:right;
    height:.85rem;
    line-height:.85rem;
  }
  .three .three-up .card i{
    font-size:.26rem;
    margin-right:.2rem;
    margin-left:.15rem;
  }
  .three .three-up .card span{
    font-size:.26rem;
  }
  .three .three-down{
    width:100%;
    height:1.25rem;
    display: flex;
    justify-content: space-around;
  }
  .three .three-down .td-a,.three .three-down .td-b,.three .three-down .td-c,.three .three-down .td-d{
    flex:1;
  }
  .three .three-down i{
    display: block;
    text-align: center;
    font-size:.38rem;
    margin-top:.25rem;
  }
  .three .three-down span{
    display: block;
    text-align: center;
    font-size:.24rem;
  }

  /*第四部分*/
  .three .three-3{
    width:100%;
    height:1.25rem;
    display: flex;
    justify-content: space-around;
  }
  .three .three-3 .three-3a,.three .three-3 .three-3b,.three .three-3 .three-3c{
    flex:1;
    text-align: center;
  }
  .three .three-3 span{
    height:.26rem;
    line-height: .26rem;
    font-size: .26rem;
    color:#000;
    margin-top:.25rem;
    margin-bottom: .2rem;
    display: block;
  }
  .three .three-3 .three-3b span{
    margin-top:0;
  }
  .three .three-3 div{
    font-size:.24rem;
  }
  .three .three-3 .three-3b{
    height:.7rem;
    border-left: .01rem solid #ccc;
    border-right: .01rem solid #ccc;
    margin-top:.25rem;
  }
  .three .three-3 .three-3a div{
    color:#f0593f;
  }
  .three .three-3 .qiandao,.three .three-3 .duihuan,.three .three-3 .huiyuan{
    text-align: center;
  }

  .three .three-3 div i{
    margin-top:.2rem;
    margin-bottom:.1rem;
    font-size:.36rem;
    display: block;
  }

  /*第五部分*/
  .three .three-3 .three-none div{
    color:#989698;
  }
  .three .three-3 .three-none span{
    color:#000;
    font-weight: bold;
    font-size:.26rem;
  }
  .three-0{
    margin-bottom:0;
  }

  .long{
    height:.8rem;
    background:#fff;
  }
  .long i{
    height:.8rem;
    line-height:.8rem;
    font-size:.4rem;
    margin-left:.2rem;
    margin-right:.15rem;
    float:left;
  }
  .long span{
    width:6.7rem;
    height:.8rem;
    line-height:.8rem;
    display: block;
    border-bottom:.01rem solid #ccc;
    float:left;
  }
  .long-last{
    margin-bottom:.2rem;
    border-bottom:.01rem solid #ccc;
  }
  .long-last span{
    border-bottom:0;
  }
  .end{
    margin-bottom:1rem;
  }
</style>
