import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      menuTriger: false,
      currentPage: 'home',
      title_page: 'home',
      content_page: ''
    }),
    mutations: {
      triger_menu (state) {
        state.menuTriger = !state.menuTriger
      },
      unset_menu (state) {
        state.menuTriger = false
      },
      change_name (state, name) {
        state.currentPage = name
      },
      change_title (state, newTitle) {
        state.title_page = newTitle
      },
      change_content (state, newContent) {
        state.content_page = newContent
      }
    }
  })
}

export default createStore
