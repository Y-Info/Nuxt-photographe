import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      menuTriger: false,
      H1: 'Home',
      pageContent: ''
    }),
    mutations: {
      triger_menu (state) {
        state.menuTriger = !state.menuTriger
      },
      unset_menu (state) {
        state.menuTriger = false
      },
      changeH1 (state, newTitle) {
        state.H1 = newTitle
      },
      changeContent (state, newContent) {
        state.pageContent = newContent
      }
    }
  })
}

export default createStore
