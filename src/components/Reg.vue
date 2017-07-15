<template>
	<div class="reg">
		<input type="text" placeholder="请输入手机号" class="phone" ref="username"/>
		<input type="password" placeholder="请输入密码" class="psw" ref="password"/>
		<button class="dl" @click="regist4ajax">登录</button>
		<a href="#/zc" class="have">注册达令帐号</a>
		<a href="#" class="have">回到主页</a>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		components: {},
		name: 'Reg',
		data() {
			return {

			}
		},
		methods:{
			regist4ajax:function(){
    // POST /someUrl
		    	this.$http.post('/h6/apii/Dalinguser/login', {
			    	phone: this.$refs.username.value,
			    	password: this.$refs.password.value
		    	}).then(response => {
			    	console.log(response)
			    	console.log(typeof response.bodyText)
			    	if(response.body.msg == "登陆成功"){
			    	     this.$router.push('/')
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
	.reg{
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
		.psw{
			width:Z(700px);
			height: Z(75px);
			border-radius: Z(15px);
			border:none;
			margin: Z(30px) auto;
			text-indent: Z(55px);
		}
		.dl{
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