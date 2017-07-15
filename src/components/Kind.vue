<template>
	<div class="all">
		<div class="header">
			<span class="txt1"><i class="iconfont ic">&#xe62c;</i></span>
			<input type="text" value="搜索商品" class="inp1" />
		</div>
		<div class="main1">
			<div class="main_left">
				<ul class="main_uu">
					<li v-for="(items,index) in lists" v-bind:class="{colors:index == currentIndex}" @click="changeColor(index)">{{items}}</li>
								
				</ul>
			</div>

			<div class="main_right">

				<div class="main_right_one">
					<ul class="one">
						<li class="l" v-for="item in list">
							<a href="" class="aaa"><img :src="item.src" class="img1" />
								<span class="txt2">{{item.name}}</span></a>
						</li>
							
					</ul>

				</div>

			</div>

		</div>
		<navbar></navbar>
	</div>
	
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	//	import Vue from 'vue'
	import Navbar from './Navbar'

	export default {
		 components: {Navbar},
		name: 'kind',
		data() {
			return {
				list: [],
				currentIndex: 0,
				lists:["推荐分类","极致美护","全球零食","贱货女装","创意生活","时尚配饰","品牌精选"]
			}
		},
		mounted:function(){
			this.getData()
		},
		methods: {
			getData: function() {
				this.list=[]
      			this.$http.get("../../static/data/test1.json").then(
              		function (res) {
                //console.log(res) 
						this.list=res.body;
					},function (res) {
              // 处理失败的结果
              		}
          		);
			},
			changeColor(index){
				this.currentIndex = index;
				if(this.currentIndex == 0){
					this.getData();
				}
			}

		}

	
	}
</script>

<style scoped lang="scss">
	$ui-width:750px;
	@function px2rem($px) {
		@return $px/$ui-width*7.5rem;
	}
	
	.all {
		display: flex;
		flex-direction: column;
	
	}
	.colors{
		background: purple;
	}
	.header {
		background: #efefef;
		width: 100%;
		height: px2rem(79.2px);
		position: relative;
		text-align: center;
		vertical-align: middel;
		position: fixed;
		.txt1 {
			position: absolute;
			top: px2rem(24px);
			left: px2rem(283px);
			.ic {
				font-size: 14px;
			}
		}
		.inp1 {
			width: px2rem(715px);
			text-align: center;
			font-size: 14px;
			height: px2rem(59.4px);
			line-height: px2rem(59.4px);
			border-radius: px2rem(15px);
			margin-top: px2rem(8px);
		}
	}
	
	.main1 {
		flex: 1;
		padding-top: px2rem(79.2px);
		
		/*height: 100%;*/
		display: flex;
		/*width: 100%;*/
		/*flex: 1;*/
		/*z-index: 2;*/
		overflow-x: hidden;
		border-bottom:px2rem(3px) solid #ccc; 
	
		.main_left {
			border-right: px2rem(2px) solid #ccc;
			/*height: 100%;*/
			width: px2rem(193px);
			background: #f6f6f8;
			overflow-x: hidden;
			/*display: flex;*/
			.main_uu {
				width: px2rem(193px);
				display: flex;
				overflow-x: hidden;
				flex-direction: column;
				/*height: px2rem(565.4px);*/
				/*width: 100%;*/
				/*justify-content: space-around;*/
				li {
					/*width: 100%;*/
					height: px2rem(81px);
					border-bottom: px2rem(2px) solid #ccc;
					text-align: center;
					line-height: px2rem(77px);
					font-size: 14px;
				}
				li :hover {
					background: #b05bc0;
				}
			}
		}
		.main_right {
			height: 100%;
			/*overflow-y: hidden;*/
			/*display: flex;*/
			flex: 1;
			overflow-x: hidden;
			flex-direction: column;
			background: #FFF;
			.main_right_one {
				width: 100%;
				height: px2rem(160.6px);
				.one {
					width: 100%;
					text-align: center;
					vertical-align: middel;
					li {
						width: 33.3%;
						float: left;
						.img1 {
							width: px2rem(100px);
							height: px2rem(110px);
							margin: 0 auto;
						}
						.txt2 {
							font-size: 14px;
							height: px2rem(72px);
							line-height: px2rem(72px);
							display: block;
						}
					}
				}
			}
		}
	}
	
	.aaa {
		display: block;
	}
</style>