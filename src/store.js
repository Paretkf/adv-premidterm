import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // ตัวแปร
    todos: [
      {
        name: 'การบ้าน Adv web.',
        isDone: false
      }
    ]
  },
  mutations: {
    // การทำงานของ State
    NEW_TODO (state, data) {
      state.todos.push(data)
    },
    SET_TODO_STATUS (state, data) {
      state.todos[data.index].isDone = data.status
    },
    CLEAR_DONE (state) {
      state.todos = state.todos.filter(todo =>
        todo.isDone === false)
    }
  },
  actions: {
    // การทำงานเกี่ยวข้างนอก
    newTodo ({ commit }, data) {
      commit('NEW_TODO', data)
    },
    setTodoStatus ({ commit }, data) {
      commit('SET_TODO_STATUS', data)
    },
    clearDone ({ commit }) {
      commit('CLEAR_DONE')
    }
  }
})
