import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  waiting:false,
  list:["1","2","3"],
  text_todo:""
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  updateWaitingFlag (state,{flag}) {
    state.waiting = flag
  },
  addlist (state) {
    state.list.push(state.text_todo)
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  updateWaitingFlag: ({ commit },flag) => {commit('updateWaitingFlag',{flag:flag})},
  addlist: ({ commit }) => {commit('addlist')},
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
