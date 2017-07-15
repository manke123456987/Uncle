<template>
	<div class="zc">
		<input type="text" placeholder="请输入手机号" class="phone" ref="username" v-model="phonenumber"/>
		<!--<div class="duanxin">
			<input type="text" placeholder="请输入短信验证码" class="code"/>
			<div class="huoqu">获取短信验证码</div>
		</div>-->
		<input type="password" placeholder="请输入密码" class="psw" ref="password" v-model="mima"/>
		<button class="reg" @click="regist4ajax">注册</button>
		<a href="#/reg" class="have">帐号密码登录</a>
		<a href="#" class="have">回到主页</a>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		components: {},
		name: 'Zc',
		data() {
			return {
				phonenumber:"",
				phone: "",
				mima: ""
			}
		},
		methods:{
			regist4ajax:function(){
    // POST /someUrl
				var reg = new RegExp('^\\w{11}$');
				var user_str = this.phonenumber;
    			if(!reg.test(this.phonenumber)){
    				console.log('请输入11位手机号');
    				console.log(this.mima.length)
    				
    				return;
    			} if (/^\s+$/gi.test(this.mima) || this.mima.length==0) {
						console.log("密码不可为空");
						return ;
						};
//  console.log(1)
		    	this.$http.post('/h6/apii/Dalinguser/regest', {
			    	phone: this.$refs.username.value,
			    	password: this.$refs.password.value
		    	}).then(response => {
			    	console.log(response)
			    	console.log(typeof response.bodyText)
			    	if(response.body == "注册成功辣[]~(￣▽￣)~*"){
			    	    // this.$router.push({ path: '/' })
			    	}
		    	}, response => {
		        // error callback
		    	});
		  	},
		}
	}
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss">
	$ui-width: 750px;
	@function Z($px) {
		@return $px/$ui-width*7.5rem;
	}
	.zc{
		width:100%;
		height: 100%;
		.phone{
			width:Z(700px);
			height: Z(75px);
			border-radius: Z(15px);
			border:none;
			margin: Z(30px) auto;
			text-indent: Z(55px);
		}
		.duanxin{
			width:Z(700px);
			height: Z(75px);
			margin: Z(20px) auto;
			.code{
				float: left;
				width:Z(500px);
				height:Z(75px);
				border:none;
				text-indent: Z(55px);
				border-radius: Z(15px) 0 0 Z(15px);
			}
			.huoqu{
				float: left;
				width:Z(200px);
				height:Z(75px);
				line-height:Z(75px);
				text-align: center;
				font-size:Z(26px);
				color:#fff;
				background:#AF5BBF;
			}
		}
		.psw{
			width:Z(700px);
			height: Z(75px);
			border-radius: Z(15px);
			border:none;
			margin: Z(30px) auto;
			text-indent: Z(55px);
		}
		.reg{
			width:Z(700px);
			height: Z(75px);
			border-radius: Z(15px);
			border:none;
			margin: Z(30px) auto;
			text-align: center;
			font-size:Z(36px);
		}
		.have{
			height: Z(30px);
			line-height: Z(30px);
			font-size:Z(28px);
			color:#B057C1;
			margin-left:Z(550px);
		}
	}
	
</style>