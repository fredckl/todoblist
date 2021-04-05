import { prop } from 'rambda';
import store from 'store';
import {
    ADD_TODO_MUTATION,
    REMOVE_TODO_MUTATION,
    UPDATE_TODO_MUTATION,
    ARCHIVE_TODO_MUTATION,
    UNARCHIVE_TODO_MUTATION
} from './mutation-types';

const saveData = state => {
  store.set('todos', prop('todos', state))
}

export default {
  addTodo ({ commit, state }, payload) {
    commit(ADD_TODO_MUTATION, payload);
    saveData(state);
  },

  updateTodo ({ commit, state }, payload) {
    commit(UPDATE_TODO_MUTATION, payload);
    saveData(state);
  },

  removeTodo ({commit, state}, todoId) {
    commit(REMOVE_TODO_MUTATION, todoId);
    saveData(state);
  },

  archiveTodo({commit, state}, todoId) {
    commit(ARCHIVE_TODO_MUTATION, todoId);
    saveData(state);
  },

  unarchiveTodo({commit, state}, todoId) {
    commit(UNARCHIVE_TODO_MUTATION, todoId);
    saveData(state);
  }
}