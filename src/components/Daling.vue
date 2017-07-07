<template>
  <div class="daling">
    daling
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Daling',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:
    mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
    'addlist'
    ])

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
