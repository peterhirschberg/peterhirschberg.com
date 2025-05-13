import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lightbox: {},
    isMobile: false
  },
  mutations: {
    setLightbox: (state, payload) => {
      state.lightbox = payload
    },
    setIsMobile: (state, value) => {
      state.isMobile = value
    }
  },
  actions: {
  },
  getters: {
    lightbox: state => {
      return state.lightbox
    },
    isMobile: state => {
      return state.isMobile
    }
  }
})
