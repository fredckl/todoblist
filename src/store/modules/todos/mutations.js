import { compose, not, propEq, filter, prop, map, when, mergeLeft } from 'rambda';
import {
    ADD_TODO_MUTATION,
    REMOVE_TODO_MUTATION,
    UPDATE_TODO_MUTATION,
    ARCHIVE_TODO_MUTATION,
    UNARCHIVE_TODO_MUTATION
} from './mutation-types';


const defaultTodoValues = {
  id: null,
  label: null,
  createdAt: null,
  description: null,
  archived: false
}

export default {
  /**
   * Add new todo
   * @param {object} state
   * @param {object} payload
   */
  [ADD_TODO_MUTATION] (state, payload) {
    state.todos = [...state.todos, mergeLeft(payload, defaultTodoValues)]
  },
  /**
   * Update todo
   * @param {object} state
   * @param {object} payload
   */
  [UPDATE_TODO_MUTATION] (state, payload) {
    const id = prop('id', payload);
    state.todos = compose(
      map(
        when(
        propEq('id', id),
        mergeLeft(payload)
        )),
      prop('todos')
      )(state);

      console.log('=====>', state.todos, payload)
  },

  /**
   * REmove todo
   * @param {object} state
   * @param {string} todoId
   */
  [REMOVE_TODO_MUTATION] (state, todoId) {
    const notPropEq = compose(not, propEq('id', todoId));
    state.todos = filter(notPropEq)(state.todos)
  },

  /**
   * Archived todo
   * @param {object} state
   * @param {string} todoId
   */
  [ARCHIVE_TODO_MUTATION] (state, todoId) {
    state.todos = compose(
      map(
      when(
        propEq('id', todoId),
        mergeLeft({archived: true})
        )
      ),
      prop('todos')
    )(state)
  },

  /**
   * Unarchived todo
   * @param {object} state
   * @param {string} todoId
   */
  [UNARCHIVE_TODO_MUTATION] (state, todoId) {
    state.todos = compose(
      map(
      when(
        propEq('id', todoId),
        mergeLeft({archived: false})
        )
      ),
      prop('todos')
    )(state)
  }
}