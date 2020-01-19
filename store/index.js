import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      menuTriger: false,
      currentPage: 'home'
    }),
    mutations: {
      triger_menu (state) {
        state.menuTriger = !state.menuTriger
      },
      change_name (state, name) {
        state.currentPage = name
      }
    }
  })
}

export default createStore
