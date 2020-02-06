import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  theme: 'default'
}

const mutations = {
  setDefaultTheme (state) {
    state.theme = 'default'
  },
  setDarkTheme (state) {
    state.theme = 'dark'
  },
}

const actions = {
  setDefaultTheme: ({ commit }) => commit('setDefaultTheme'),
  setDarkTheme: ({ commit }) => commit('setDarkTheme')
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
