<template>
<div>
  <div class="listing" v-show="$store.state.daling">
    <div class="search" >
      <div class="search-input">
        <input type="text" placeholder="搜索商品" @click="isShow()"/>
      </div>
    </div> 
    <div class="search_menu">
 <!--      <ul>
        <li class="sort_style hover"><a href="">综合</a></li>
        <li class="sort_style"><a href="">销量</a></li>
        <li class="sort_style"><a href="">新品</a></li>
        <li class="sort_style">
          <a href="">价格
            <i class="iconfont upc">&#xe662;</i>
            <i class="iconfont downc">&#xe661;</i>
          </a>
        </li>
        <li class="sort_style"><a href="">分类<i class="iconfont downcc">&#xe661;</i></a></li>
      </ul> -->
      <ul>
        <li class="sort_style" v-for="(items,index) in list" v-bind:class="{colors:index == currentIndex}" @click = "changeColor(index)">
          {{items}}
        </li>
      </ul>
    </div>
    <div class="search_list">
      <ul>
        <li v-for="(items,index) in listing" class="tiandong">  
          <dl>
            <dt><a href="" class="aaa"><img :src="items.imgURL"></a></dt>
            <dd>
              <a href="" class="aaa title">
                <p>{{items.product}}</p>
                <span>{{items.description}}</span>                
              </a>
              <div class="price">
                <span>￥{{items.price}}</span>
                <a href="#/cart" class="aaa" @click="goCart(index)"><i class="iconfont downcc">&#xe60b;</i></a>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="biu">
      <img src="http://img.cdn.daling.com/assets/web-touch/footer.b1cf18.png">
      <p>北京普缇客科技有限公司 Copyright © 2016达令</p>
    </div>  
  </div>
  <navbar v-show="$store.state.daling"></navbar> 
  <div id="bbb">
 <div class="list" style="background:#fff" v-show="!$store.state.daling">
    <div class="search">
      <div class="search-input">
        <p>
          <i class="iconfont">&#xe62c;</i>
          <input type="text" placeholder="搜索商品"/>
      </p>
      <span @click="isShow()">取消</span>
      </div>
    </div>
    <div class="search_main">
      <div class="hot_search">
        <p>热门搜索</p>
        <a href="">面膜</a>
        <a href="">化妆水</a>
        <a href="">太阳伞</a>
        <a href="">洁面</a>
        <a href="">防晒</a>
        <a href="">卸妆</a>
        <a href="">早餐</a>
        <a href="">耳钉</a>
        <a href="">口红</a>
        <a href="">花果茶</a>
        <a href="">香水</a>
        <a href="">保湿喷雾</a>
        <a href="">T恤</a>
        <a href="">护肤套装</a>
        <a href="">韩束kans</a>
        <a href="">一叶子 oneleaf</a>
      </div>
      <div class="search_history hot_search">
        <p>我的搜索历史</p>
        <div></div>
        <span><div class="clearAll">清空搜索历史</div></span>
      </div>
    </div>    
  </div>
  </div> 
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from './navbar'
export default {
	components: {Navbar},
  name: 'Listing',
  data () {
    return {
        list:["综合","销量","新品","价格","分类"],
        currentIndex:0,
        listing:[]
    }
  },
  mounted:function(){
    this.biu()
  },
  methods:{
    goCart(index){
      var that = this;
      var product = $("dd p",$(".tiandong")[index]).text();
      this.$http.get("/h6/apii/dalinggoods/goCart",{params:{product:product}}).then(
              function (res) {
                that.$store.state.isShow = true;
              
                console.log(that.$store.state.isShow)
                //console.log(res) 
                var len=res.body.length
                for(var i=0;i<len;i++ ){
                    if(res.body[i].biu=="listing"){
                      this.listing.push(res.body[i])
                    }
                }
                console.log( this.listing)
              },function (res) {
              // 处理失败的结果
              }
          );    
  
    },
    biu:function(){
      this.$http.get("/h6/apii/dalinggoods/info").then(
              function (res) {
                //console.log(res) 
                var len=res.body.length
                for(var i=0;i<len;i++ ){
                    if(res.body[i].biu=="listing"){
                      this.listing.push(res.body[i])
                    }
                }
                //console.log( this.listing)
              },function (res) {
              // 处理失败的结果
              }
          );
    },
    ggg:function(){
          this.$http.get("/h6/apii/dalinggoods/sales").then(
              function (res) {
                this.listing=[]
                //console.log(res) 
                var len=res.body.length
                for(var i=0;i<len;i++ ){
                    if(res.body[i].biu=="listing"){
                      this.listing.push(res.body[i])
                    }
                }
              },function (res) {
              // 处理失败的结果
              }
          );
    },
    ccc:function(){
          this.$http.get("/h6/apii/dalinggoods/news").then(
              function (res) {
                this.listing=[]
                //console.log(res) 
                var len=res.body.length
                for(var i=0;i<len;i++ ){
                    if(res.body[i].biu=="listing"){
                      this.listing.push(res.body[i])
                    }
                }
              },function (res) {
              // 处理失败的结果
              }
          );
    },
    ddd:function(){
          this.$http.get("/h6/apii/dalinggoods/price").then(
              function (res) {
                this.listing=[]
                //console.log(res) 
                var len=res.body.length
                for(var i=0;i<len;i++ ){
                    if(res.body[i].biu=="listing"){
                      this.listing.push(res.body[i])
                    }
                }
              },function (res) {
              // 处理失败的结果
              }
          );
    },
    changeColor(index){
        this.currentIndex = index;
        if(this.currentIndex==1){
          this.ggg();
        }else if(this.currentIndex==2){
          this.ccc();
        }else if(this.currentIndex==3){
          this.ddd();
        }
        //console.log(this.currentIndex)
    },
    ...mapActions([
      'disappear'
    ]),
    isShow:function(){
      this.disappear({
        daling:!this.$store.state.daling
      })
    }
  }
}
</script>

<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
  @return $px/$ui-width*7.5rem;
}
@font-face {
  font-family: 'iconfont';
  src: url('../../static/font_dnrltbccboojq0k9/iconfont.eot');
  src: url('../../static/font_dnrltbccboojq0k9/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../static/font_dnrltbccboojq0k9/iconfont.woff') format('woff'),
  url('../../static/font_dnrltbccboojq0k9/iconfont.ttf') format('truetype'),
  url('../../static/font_dnrltbccboojq0k9/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
  .listing{
    flex: 1;
    background:#efefef;
    overflow-x: hidden;
  }
  .aaa{
    display: block;
  }
  .biu{
    padding-bottom:1.5rem;
    img{
      width:px2rem(270px);
      margin:0 auto;
      margin-top:px2rem(40px);
    }
    p{
      text-align: center;
      color: #ccc;
      transform: scale(0.9);
    }
  }
  .search{
    height: px2rem(80px);
    background: #fff;
    .search-input{
      height: px2rem(80px);
      background: #efefef;
      padding-right: px2rem(18px);
      padding-left: px2rem(18px);
      input{
        width: px2rem(714px);
        height: px2rem(54px);
        background: #fff;
        border-radius: px2rem(200px);
        text-align: center;
        border:0;
        outline:none;
        margin-top: px2rem(9px);
      }
    }
  }
  .search_menu{
    height: px2rem(80px);
    width: 100%;
    background: #fff;
    ul{
      height: px2rem(80px);
      width: 100%;  
      line-height: px2rem(80px);
      li{
        height: px2rem(80px);
        width: 20%;
        text-align: center;
        float: left;
        a{
          font-size: 13px;
          color: #39383b;
          position: relative;
          i{
            font-size: px2rem(8px);
            position: absolute;
          }
          .upc{
            right: -60%;
            top: -80%;
          }
          .downc{
            right: -60%;
            bottom: -114%;
          }
          .downcc{
            right: -60%;
          }
        }
      }
      .colors{
        
          color: #ff4a30;
        
      }    
    }
  }
  .search_list li:nth-child(2n){
    float: right;
  }
  .search_list li:nth-child(2n+1){
    float: left;
  }
  .search_list{
    li{
      width: 49.19%;
      height: px2rem(600px);
      background: #fff;
      box-sizing: border-box;
      margin-bottom: px2rem(18px);
      overflow: hidden;
      position: relative;
      dt{
        width: 100%;
        height: px2rem(368px);
        overflow: hidden;
        position: relative;
        img{
          height: px2rem(368px);
        }
      }
      dd{
        .title{
          margin-bottom: px2rem(6px);
          color: #39383b;
          box-sizing: border-box;
          padding-left: px2rem(14px);
          padding-right: px2rem(14px);
          height: px2rem(110px);
          p{
            display: block;
            color: #252525;
            font-size: 13px;
            line-height: 100%;
            padding-top: px2rem(16px);
            padding-bottom: px2rem(8px);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          span{
              font-size: 12px;
              height: px2rem(50px);
              line-height: px2rem(30px);
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: break-all;
              word-wrap: break-word;
              color: #9f9f9f;
          }
        }
        .price{
            box-sizing: border-box;
            padding-right: px2rem(14px);
            padding-left: px2rem(14px);
            height: px2rem(68px);
            position: relative;
            span{
              height: px2rem(68px);
              width: 75%;
              display: block;
              float: left;
              font-size: 15px;
              color: #ff4a30;
              line-height: px2rem(68px);
            }
            a{
              width: px2rem(42px);
              height: px2rem(60px);
              float: left;
              font-size: 16px;
              color: #4f4f4f;
              padding-right: px2rem(14px);
              padding-left: px2rem(14px);
              text-align: center;
              line-height: px2rem(60px);
              border-radius: 3px;
              border:1px solid #e0e0e0;
            }
        }
      }
    }
  }
    #bbb{
  .list{
    flex: 1;
    background:#efefef;
    overflow-x: hidden;
  }
  .aaa{
    display: block;
  }
 .search{
    height: px2rem(80px);
    background: #fff;
    .search-input{
      height: px2rem(80px);
      background: #efefef;
      padding-right: px2rem(18px);
      padding-left: px2rem(18px);
      p{
    width: 83%;
        height: px2rem(54px);
        background: #fff;
        border-radius: px2rem(200px);
        margin-top: px2rem(9px); 
        padding-left: px2rem(26px);
        float: left; 
        i{
          font-size: 13spx;
          color: #ccc;
        }     
      }
      input{
      width: 89%;
      height: 81%;
        border:0;
        outline:none;
      }
      span{
        font-size: 13px;
        height: px2rem(80px);
        line-height: px2rem(80px);
        padding-left: 4%;
      }
    }
  }
  .search_main{
    margin-top: px2rem(10px);
    height: px2rem(1240px);
    .hot_search{
      padding-bottom: px2rem(6px);
      padding-right: px2rem(30px);
      padding-left: px2rem(30px);
      overflow: hidden;
      p{
        font-size: 14px;
        line-height: px2rem(72px);
        color: #858385;
      }
      a{
        font-size: 14px;
        color: #39383b;
        float: left;
        background: #f7f7f7;
        border-radius: 2px;
        padding-bottom: px2rem(18px);
        padding-top: px2rem(18px);
        padding-right: px2rem(20px);
        padding-left: px2rem(20px);
        margin-right: px2rem(18px);
        margin-bottom: px2rem(18px);
      }
    }
    .search_history{
      span{
      display: block;
        clear: both;
        width: 100%;
        padding-top: px2rem(36px);
        overflow: hidden;
        .clearAll{
          display: block;
          margin: 0 auto;
          width: px2rem(252px);
          height: px2rem(54px);
          text-align: center;
          line-height: px2rem(50px);
          font-size: 14px;
          color: #39383b;
          border: 1px solid #9c9b9d;
        }       
      }
    }
  }
  }
</style>
