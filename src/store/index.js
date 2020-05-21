import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter : 0
  },
  mutations: {
    incrementMutateCounter(state, payload){
      // stateへ
      state.counter += payload.inc
    }    
  },
  actions: {
    incActionCounter(store, payload){
      // Mutationsへ
      store.commit('incrementMutateCounter', payload)
    }
  },
  modules: {
  }
})
