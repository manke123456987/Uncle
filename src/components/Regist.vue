<template>
  <div class="regist">
  <input type="text" ref="username"><br><br>
  <input type="password" ref="password"><br><br>
  <button @click="regist4ajax">来呀快活啊</button>
  <div v-show="$store.state.waiting">正在加载</div>
  <input type="text" v-model="$store.state.text_todo"><br><br>
  <button @click="addlist">ヾ(✿ﾟ▽ﾟ)ノ</button>
  <button @click="getcookies">取cookie</button>
  <div>{{user}}</div>
  <ul>
    <li v-for="item in $store.state.list">{{item}}</li>
  </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Regist',
  data () {
    return {
        user:"登陆/注册"
    }
  },
  methods:{
    ...mapActions([
    'updateWaitingFlag',
    'addlist'
    ]),
    regist4ajax:function(){
    // POST /someUrl
      this.updateWaitingFlag(true)
      this.$http.post('/h6/apii/user/regest', {
        username: this.$refs.username.value,
        password: this.$refs.password.value
      }).then(response => {
        console.log(response)
        console.log(typeof response.bodyText)
        if(response.body == "注册成功辣[]~(￣▽￣)~*"){
          // this.$router.push({ path: '/' })
          this.updateWaitingFlag(false)
        }
      }, response => {
        // error callback
      });
    },
    getcookies:function(){
        this.$cookie.get('name') ;
        this.user= this.$cookie.get('name')

    }
  },
  mounted: function () {
        this.getcookies()
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
<style scoped lang="scss">

</style>
 -->