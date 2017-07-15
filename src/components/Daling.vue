<template>
  <div class="all">
  <div class="daling" v-show="$store.state.daling">
    <div class="search" >
      <div class="search-input">
        <input type="text" placeholder="搜索商品" @click="isShow()"/>
      </div>
    </div>
    <div class="recommend-area">
      <a href="" class="aaa">
        <div class="img-top">
          <img src="http://img.cdn.daling.com/data/files/mobile/2017/06/21/14980096494922.jpg">
        </div>
      </a>
      <ul>
        <li class="img-left">
          <a href="" class="aaa">
            <img src="http://img.cdn.daling.com/data/files/mobile/2017/07/06/14993265032336.jpg">
          </a>
        </li>
        <li class="img-right">
          <a href="" class="aaa">
            <img src="http://img.cdn.daling.com/data/files/mobile/2017/07/06/14993222348547.jpg">
          </a>
        </li>
      </ul>
    </div>
    <div class="navigation">
      <ul>
        <li>
          <a href="" class="aaa">
            <img src="http://img.cdn.daling.com/data/files/mobile/2017/01/12/1484204868661.png">
          </a>
        </li>
        <li>
          <a href="" class="aaa">
            <img src="http://img.cdn.daling.com/data/files/mobile/2017/01/12/14842049008972.png">
          </a>
        </li>
        <li>
          <a href="" class="aaa">
            <img src="http://img.cdn.daling.com/data/files/mobile/2017/01/12/14842049389977.png">
          </a>
        </li>
        <li>
          <a href="" class="aaa">
            <img src="http://img.cdn.daling.com/data/files/mobile/2017/06/29/1498725301604.png">
          </a>
        </li>
        <li>
          <a href="" class="aaa">
            <img src="http://img.cdn.daling.com/data/files/mobile/2017/01/12/14842050419625.png">
          </a>
        </li>
      </ul>
    </div>
    <div class="activity-box">
      <div class="title">
        <p class="label_left"></p>
        <div class="label">7.7-7.9 超级单品</div>
        <p class="label_right"></p>
      </div>
      <ul class="activity-img">
      	<li v-for="items in list2">
      		<a href="" class="aaa">
      			<img :src="items.imgURL">
      		</a>
      		<p><span><i class="iconfont">&#xe608;</i><CountDown endTime="1499855918" :callback="callback" endText="已经结束了"></CountDown></span></p>
      	</li>
      </ul>
    </div>
    <div class="activity-box">
      <div class="title">
        <p class="label_left"></p>
        <div class="label">今日新品 早8点已上架</div>
        <p class="label_right"></p>
      </div>
      <div class="today-new">
      	<ul>
      		<li v-for="items in list1">
      			<a href="" class="aaa">
      				<div class="new-0">
      					<div class="new-txt">
      						<p class="new-name">{{items.product}}</p>
      						<p class="new-Num Num1">{{items.stock}}个新品 ></p>
      					</div>
      					<img :src="items.imgURL">
      				</div>
      			</a>
      		</li>
      	</ul>
      </div>
    </div>
    <div class="active-goods" v-for="items in list0">
    	<div class="goods-block">
    		<a href="" class="aaa">
    			<div class="goods-img">
    				<img :src="items.imgURL">
    			</div>
    		</a>
    			<div class="goods-title">{{items.product}}</div>
    			<div class="goods-desc">{{items.description}}</div>
    			<div class="goods-price">
    				<span>￥</span>{{items.price}}
    			</div>
    			<div class="cart-btn">
    				<div class="cart-btn-desc">
    					<p>{{items.people}}人</p>
    					<p>加入购物车</p>
    				</div>
    				<div class="icon">
    					<i class="iconfont">&#xe66c;</i>
    				</div>
    			</div>
    	</div>
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
import CountDown from './Time.vue'
import Navbar from './navbar'
export default {
  name: 'Daling',
  components:{
    CountDown ,Navbar
  },
  data () {
    return {
      list2:[],
      list0:[],
      list1:[]
    }
  },
  mounted:function(){
    this.biu()
  },
  methods:{
    callback:function(){

    },
    biu:function(){
      this.$http.get("/h6/apii/dalinggoods/info").then(
              function (res) {
                //console.log(res) 
                var len=res.body.length
                for(var i=0;i<len;i++ ){
                    if(res.body[i].biu=="index"){
                      this.list0.push(res.body[i])
                    }else if(res.body[i].biu=="single"){
                      this.list2.push(res.body[i])
                    }else if(res.body[i].biu=="new"){
                      this.list1.push(res.body[i])
                    } 
                }
                console.log( this.list0)
              },function (res) {
              // 处理失败的结果
              }
          );
    },
    ...mapActions([
      'disappear'
    ]),
    isShow:function(){
      console.log(111)
      this.disappear({
        daling: !this.$store.state.daling
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$ui-width: 750px;
@function px2rem($px) {
  @return $px/$ui-width*7.5rem;
}
	
  .daling{
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
  .recommend-area{
  	overflow:hidden;
  	background:#fff;
    .img-top{
      width: 100%;
      height: px2rem(258px);
      margin-bottom: px2rem(6px);
      img{
        width: 100%;
      }
    }
    li{
      float: left;
      padding-bottom: px2rem(3px);
      width:49%;
      img{
        width:100%;
      }
    }
    .img-left{
      padding-right: px2rem(1px);
      width:50%;
    }
    .img-right{
      padding-left: px2rem(1px);
      float:right;
    }
  }
  .navigation{
    margin-bottom: px2rem(16px);
    overflow:hidden;
    background:#fff;
    ul{
      width: 100%;
    }
    li{
      float: left;
      width: 20%;
      img{
        width: 100%;
      }
    }
  }
  .activity-box{
  	margin-bottom: px2rem(12px);
  	background: #fff;
  	.title{
  		padding-bottom: px2rem(16px);
  		padding-top: px2rem(36px);
  		text-align: center;
  		.label_left,.label_right{
  			margin-bottom:px2rem(10px);
  			border:1px solid #000;
  			display:inline-block;
  			width:px2rem(24px);
  		}
  		.label{
  			display:inline-block;
  			padding-left: px2rem(12px);
  			padding-right: px2rem(12px);
  			font-size:14px;
        color: #666;
  		}
  	}
  	.activity-img{
  		text-align:center;
  		li{
  			img{
  				width:100%;
  			}
  			p{
  				padding-top:px2rem(20px);
  				padding-bottom:px2rem(20px);
  				position:relative;
  				&:before,&:after{
					content: "";
				    display: inline-block;
				    position: absolute;
				    height: 1px;
				    width: px2rem(180px);
				    top: 50%;
				    right: 100%;
				    background: -webkit-linear-gradient(left , #f9f9f9,#d2d2d2);
  				}
  				&:before{
  					right:10%;
  					background: -webkit-linear-gradient(left,#d2d2d2 , #f9f9f9);
  				}
  				&:after{
  					left:10%;
  				}
  				span{
  					i{
  						font-size:10px;
  					}
  				}
  			}
  		}
  	}
  }
  .today-new{
  	background:#fff;
  	ul{
  		background:#fff;
  		overflow:hidden;
  	}
  	li{
  		box-sizing: border-box;
	    width: 50%;
	    height: px2rem(198px);
	    float: left;
	    position: relative;
	    &:afer{

	    }
	    .new-txt{
	    	padding-left:px2rem(32px);
	    	padding-top:px2rem(56px);
	    	float:left;
	    	.new-name{
	    		font-size:10px;
	    		padding-left:px2rem(8px);
	    	}
	    	.new-Num{
	    		font-size: 10px;
			    padding-left: px2rem(14px);
			    width: px2rem(145px);
			    height: px2rem(30px);
			    line-height: px2rem(26px);
			    padding-top: px2rem(6px);
			    border-radius: px2rem(100px);
	    	}
	    	.Num1{
	    		color: #ec87c0;
    			border: 1px solid #ec87c0;
	    	}
	    }
	    img{
	    	width:px2rem(120px);
	    	float:right;
	    	margin-right:px2rem(20px);
	    	margin-top:px2rem(30px);
	    }
  	}
  }
  .active-goods{
  	margin-top:px2rem(12px);
  	background:#fff;
  	.goods-block{
  		padding-top:px2rem(12px);
  		padding-left:px2rem(16px);
  		padding-right:px2rem(16px);
  		padding-bottom:px2rem(16px);
  		position:relative;
  		.goods-img{
  			height:px2rem(508px);
  			margin-bottom:px2rem(12px);
  			img{
  				width:100%;
  			}
  		}
  		.goods-title{
  			font-size: 14px;
		    line-height: px2rem(44px);
		    color: #252525;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
  		}
  		.goods-desc{
  			margin-bottom:px2rem(12px);
  			color: #9f9f9f;
		    font-size: 12px;
		    line-height: px2rem(42px);
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
  		}
  		.goods-price{
  			font-size: 16px;
		    line-height: px2rem(66px);
		    color: #f0593f;
		    display: table-cell;
		    vertical-align: middle;
		    span{
		    	font-size:12px;
		    }
  		}
  		.cart-btn{
  			box-sizing: border-box;
		    width: px2rem(220px);
		    height: px2rem(70px);
		    bottom: px2rem(20px);
		    right: px2rem(25px);
		    position: absolute;
		    text-align: center;
		    color: #666;
		    border: 1px solid #a4a4a4;
		    border-radius: .05rem;
		    font-size: 10px;
		    background: #fff;
		    line-height: px2rem(33px);
		    .cart-btn-desc{
		    	float:left;
		    	padding-left:px2rem(10px);
		    }
		    .icon{
		    	height:px2rem(42px);
		    	float:left;
		    	padding-left:px2rem(18px);
		    	margin-left:px2rem(18px);
		    	border-left:1px solid #a4a4a4;
		    	margin-top:px2rem(10px);
		    	i{
		    		position:absolute;
		    		top:px2rem(17px);
		    		right:px2rem(15px);
		    	}
		    }
  		}
  	}
  }
  #bbb{
  .list{
    flex: 1;
    background:#efefef;
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
