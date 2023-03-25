import Vue from 'vue'
import Vuex from 'vuex'

import { v4 as uuidv4 } from 'uuid';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwt:null
  },
  getters: {
    getJwt(state){
      return state.jwt
    }
  },
  mutations: {
    createJwt(state){
      state.jwt = uuidv4()
    },
    deleteJwt(state){
      state.jwt = null
    }
  },
  actions: {
  },
  modules: {
  }
})
