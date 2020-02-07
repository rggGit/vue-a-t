import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  theme: 'default'
}

const mutations = {
  setTheme (state, theme) {
    state.theme = theme
  }
}

const actions = {
  setTheme: ({ commit }) => commit('setTheme')
}

const getters = {
  getTheme: state => state.theme
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
