
// States
export const state = () =>({
  toggleSidebar: false
})

// mutations
export const mutations = {
  TOGGLE_SIDEBAR (state, data) {
    state.toggleSidebar = data == null ? !state.toggleSidebar : data
  }
}

// actions
export const actions = {
  toggleSidebar({ commit }, data = null) {
    commit('TOGGLE_SIDEBAR', data)
  }
}

// Getters
export const getters = {
  toggleSidebar: state => state.toggleSidebar
}
