<template>
	<div class="cart">
		<div class="header">购物车
			<a href=""><span class="bianji">编辑</span></a>
		</div>
		
		<div class="main1" >
			<div class="shopping" v-show="$store.state.isShow">
				<ul class="sh_main">
					<li class="allLi" v-for="(item,index) in goodsInfo">
						<ul>
							<div class="dele" @click="dele(index)"><i class="iconfont ic">&#xe50c;</i></div>
							<li class="aaa"><input type="checkbox"  class="sp"/></li>
							<li class="bbb">
								<img :src="item.imgURL" class="img1" />
								
							</li>
							<li class="ccc"><div class="product111">{{item.product}}</div>
								<div class="price111">{{item.price}}</div>
							</li>
							<li class="ddd">
								<input @click="subtract(index)" class="but"  readonly unselectable="on"  placeholder="-" >
								<!-- :value="item.count" -->
								<input   class="inp"  type="text" v-model= "goodsNums[index]">
								<input @click="add(index)" class="but"    readonly unselectable="on"  placeholder="+">
							</li>
						</ul>
					</li>
				</ul>
				<div style="width:100%;height:2rem"></div>
			</div>
			<div v-show="!$store.state.isShow">
				<div class="gou"><i class="iconfont ic">&#xe63f;</i></div>
				<p>购物车里面没有东西偶，快去挑选把</p>
				<button class="guang" style="position:absolute;left:40%;"><a href="#/Listing">逛逛首页</a></button>
			</div>
			<div class="footer">

				<div class="footer_l">

					<input type="checkbox" >
					<h3>全选</h3>

				</div>
				<div class="footer_m">
					<p>合计 <i>￥{{total}}</i></p>
					<p>总额 <i style="color:#f60;">￥{{total}}</i></p>
				</div>
				<div class="footer_r">
					<button class="one" @click="gopay">去结算</button>
				</div>
			</div>
		</div>
		<navbar style="position:fixed; bottom:0"></navbar>
	</div>
	
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import Navbar from './Navbar'
	export default {
		 components: {Navbar},
		name: 'Cart',
		data() {
			return {
				user: "登陆/注册",
				goodsInfo:[],
				result:1,
				goodsNums:[],
				total:0
			}
		},
		computed:{

		},
		methods: {
			gopay:function(){
		      var that = this;
		      var product = $("dd p",$(".tiandong")[index]).text();
		      this.$http.get("/h6/apii/dalinggoods/goCart",{params:{product:product}}).then(
		              function (res) {
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
			dele(index){
				var product = $('.product111',$('.allLi')[index]).text()
				//console.log(product)
				
				 this.$http.get("/h6/apii/dalinggoods/dele",{params:{product:product}}).then(
				              function (res) {
				              	this.searchCart()
				              },function (res) {
				              // 处理失败的结果
				              }
				          );  				
			},
			...mapActions([

			]),
			allMoney:function(){
				var num = this.total = 0;
				var len = this.goodsNums.length;
				for(var i=0;i<len;i++){
					num += parseInt($('.ccc .price111',$('.allLi')[i]).text()) * this.goodsNums[i]
					console.log() 
				}
				this.total = num
			},
			getcookies: function() {
				this.$cookie.get('name');
				this.user = this.$cookie.get('name')

			},
			searchCart:function(){
				 this.$http.get("/h6/apii/dalinggoods/cartinfo").then(
				              function (res) {
				              	if(res.body.status==0){
				              		//console.log(res.body.status)
				              		 this.$store.state.isShow = false;
				              		 return ;
				              	}
				              	this.$store.state.isShow = true;
				            	this.goodsInfo = res.body;
								var len = this.goodsInfo.length
								for(var i=0;i<len;i++){
									this.goodsNums[i]=this.goodsInfo[i].count
									//console.log(this.goodsNums)
								}        
				              },function (res) {
				              // 处理失败的结果
				              }
				          );    
				
				},
				subtract(index){
						 this.goodsNums[index]--;

							console.log(this.goodsNums[index])
						this.goodsNums.splice(index,1,this.goodsNums[index]);
						//console.log(index)
						
						if(this.goodsNums[index]<1){
							this.goodsNums.splice(index,1,1);
						}
						console.log(this.goodsNums)
						this.allMoney()
					},
				add(index){
						this.goodsNums[index]++;
						this.goodsNums.splice(index,1,this.goodsNums[index]);
						console.log(this.goodsNums)
						console.log(this.goodsNums[index])
						this.allMoney()
					}
			},
			mounted: function() {
				this.searchCart();
				var that = this;
				setTimeout(function(){
					that.searchCart();
					that.allMoney()
				},600);
				this.allMoney()
			}
}
</script>

<style scoped lang="scss">$ui-width:750px;
@function px2rem($px) {
	@return $px/$ui-width*7.5rem;
}

.cart {
	display: flex;
	flex-direction: column;
	/*display: flex;*/
	.header {
		width: 100%;
		height: px2rem(79.2px);
		font-size: 14px;
		text-align: center;
		line-height: px2rem(79.2px);
		background: #FFF;
		position: relative;
		.bianji {
			position: absolute;
			font-size: 13px;
			color: purple;
			right: px2rem(20px);
			top: px2rem(3px);
			/*display: none;*/
		}
	}
	.main1 {
		background: #f5f5f5;
		flex: 1;
		display: flex;
		flex-direction: column;
		border-bottom: px2rem(3px) solid #ccc;
		position: relative;
		.shopping {
			position: absolute;
			height: px2rem(400px);
			width: 100%;
			/*border-bottom: 2px solid #ccc;*/
			.sh_hed {
				height: px2rem(84px);
				/*background: yellow;*/
				p:nth-child(1) {
					width: px2rem(60px);
					height: px2rem(38px);
					line-height: px2rem(38px);
					font-size: 12px;
					float: left;
					border: 2px solid red;
					margin-top: px2rem(12px);
					padding-top: px2rem(6px);
					background: red;
					color: #fff;
					margin-left: px2rem(15px);
				}
				p:nth-child(2) {
					width: px2rem(100px);
					height: px2rem(84px);
					line-height: px2rem(84px);
					font-size: 12px;
					float: left;
					margin-left: px2rem(20px);
				}
			}
			.sh_main {
				width: 100%;
				overflow: hidden;
				padding: px2rem(5px);
				border-top: 2px solid #ccc;
				background: #fff;
				
				.allLi{
					overflow: hidden;
					
				}
				ul{
					position: relative;
					overflow: hidden;
				}
				.dele{
					position: absolute;
					top: 19%;
					right: 10%;
				}
				.aaa {
					width: px2rem(40px);
					height: 100%;
					float: left;
					.sp {
						width: px2rem(30px);
						height: px2rem(30px);
						border-radius: 100%;
						border: 1px solid #ccc;
						margin-top: px2rem(88px);
					}
				}
				.bbb {
					width: px2rem(180px);
					height: 100%;
					float: left;
					margin-top: px2rem(12px);
					margin-left: px2rem(14px);
					.img1 {
						width: px2rem(158px);
						height: px2rem(158px);
						padding-top: px2rem(14px);
					}
				}
				.ccc {
					width: px2rem(300px);
					float: left;
					div {
						margin-top: px2rem(20px);
						margin-left: px2rem(0px);
						padding-top: px2rem(12px);
						color: #000;
						width: px2rem(300px);
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					div:nth-child(3) {
						color: purple;
					}
				}
				.ddd {
					width: px2rem(200px);
					float: left;
					padding-top: px2rem(150px);
					.but {
						height: px2rem(50px);
						float: left;
						line-height: px2rem(50px);
						border: px2rem(1px) solid #333;
						background: #fff;
						color: #333;
						width: px2rem(40px);
						text-align: center;
					}
					.inp {
						float: left;
						width: px2rem(64px);
						height: px2rem(50px);
						text-align: center;
						border: px2rem(1px) solid #333;
						border-right: none;
						border-left: none;
						/*border-bottom: none;*/
					}
				}
			}
		}
		.gou {
			height: px2rem(130px);
			margin-top: px2rem(147px);
			text-align: center;
			.ic {
				font-size: 30px;
			}
		}
		p {
			font-size: 14px;
			text-align: center;
		}
		.guang {
			height: px2rem(66px);
			width: px2rem(150px);
			border: 2px solid #ccc;
			background: #fff;
			font-size: 14px;
			margin: px2rem(30px) auto;
		}
		.footer {
			position: fixed;
			bottom: 1rem;
			background: #fff;
			display: flex;
			justify-content: space-between;
			width: 100%;
			.footer_l {
				width: 27%;
				padding-right: px2rem(30px);
				text-align: right;
				font-size: 14px;
				h3{
					line-height: 1rem;
				}
				input{
					float: left;
					margin-left: 12%;
					margin-top: 20%;
					width: 0.4rem;
					height: 0.4rem;
				}
			}
			.footer_m {
				flex: 1;
				P:nth-child(1) {
					height: px2rem(38px);
					line-height: px2rem(38px);
					margin-top: px2rem(12px);
				}
				P:nth-child(2) {
					height: px2rem(38px);
					line-height: px2rem(38px);
				}
				p {
					text-align: left;
					font-size: 14px;
				}
			}
			.footer_r {
				width: px2rem(198px);
				background: #858386;
				text-align: center;
				line-height: px2rem(94.6px);
				.one {
					border: none;
					background: #b05bc0;
					width: px2rem(198px);
					height: 100%;
					font-size: 14px;
					color: #fff;
				}
			}
		}
	}
}</style>