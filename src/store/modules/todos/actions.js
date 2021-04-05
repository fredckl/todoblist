import store from 'store';
import { ADD_TODO_MUTATION, REMOVE_TODO_MUTATION, UPDATE_TODO_MUTATION } from './mutation-types';

export default {
  addTodo ({ commit, state }, payload) {
    commit(ADD_TODO_MUTATION, payload);
    store.set('todos', state.todos);
  },

  updateTodo ({ commit, state }, payload) {
    commit(UPDATE_TODO_MUTATION, payload);
    store.set('todos', state.todos);
  },

  removeTodo ({commit, state}, todoId) {
    commit(REMOVE_TODO_MUTATION, todoId);
    store.set('todos', state.todos)
  }
}