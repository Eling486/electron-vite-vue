const state = () => ({
  time: null
})

// getters
const getters = {}

// actions
const actions = {
  getTime ({ commit }) {
    let time = new Date()
    commit('updateTime', time)
  }
}

// mutations
const mutations = {
  updateTime (state, time) {
    state.time = time
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}