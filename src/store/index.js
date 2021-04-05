import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store';
import todos from './modules/todos';

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    initializeStore (state) {
      state.todos.todos = store.get('todos', []);
    }
  },
  modules: {
    todos
  }
})
